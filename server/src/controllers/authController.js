import bcrypt from 'bcryptjs';
import https from 'https';
import { query, getIsDbConnected } from '../config/db.js';
import { generateToken } from '../middleware/auth.js';
import { logAudit } from '../middleware/audit.js';

/**
 * Cookie options helper for HTTP-Only Auth Cookies
 */
function getAuthCookieOptions() {
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
    maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
  };
}

/**
 * Login Admin User via Email/Password
 */
export async function login(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        error: { code: 'INVALID_INPUT', message: 'Email and password are required.' }
      });
    }

    const cleanEmail = email.toLowerCase().trim();
    let user = null;

    if (getIsDbConnected()) {
      try {
        const userRes = await query('SELECT * FROM users WHERE LOWER(email) = $1', [cleanEmail]);
        if (userRes.rows.length > 0) {
          user = userRes.rows[0];
        }
      } catch (dbErr) {
        console.warn('[Login DB Query Warning]:', dbErr.message);
      }
    }

    // Fallback check against ADMIN_INITIAL_EMAIL if database user not seeded yet
    if (!user) {
      const initialEmail = process.env.ADMIN_INITIAL_EMAIL ? process.env.ADMIN_INITIAL_EMAIL.toLowerCase() : null;
      const initialPassword = process.env.ADMIN_INITIAL_PASSWORD || null;

      if (initialEmail && initialPassword && cleanEmail === initialEmail && password === initialPassword) {
        user = {
          id: '00000000-0000-0000-0000-000000000001',
          name: 'WHY Admin',
          email: initialEmail,
          role: 'superadmin',
          is_active: true
        };
      } else {
        return res.status(401).json({
          success: false,
          error: { code: 'INVALID_CREDENTIALS', message: 'Invalid email or password.' }
        });
      }
    } else {
      if (!user.is_active) {
        return res.status(403).json({
          success: false,
          error: { code: 'ACCOUNT_DISABLED', message: 'This account has been disabled. Please contact system administrator.' }
        });
      }

      if (user.password_hash) {
        const isMatch = await bcrypt.compare(password, user.password_hash);
        if (!isMatch) {
          return res.status(401).json({
            success: false,
            error: { code: 'INVALID_CREDENTIALS', message: 'Invalid email or password.' }
          });
        }
      }
    }

    // Update last login
    if (user.id && getIsDbConnected()) {
      query('UPDATE users SET last_login = CURRENT_TIMESTAMP WHERE id = $1', [user.id]).catch(() => {});
    }

    const token = generateToken(user);

    // Set HTTP-Only Cookie
    res.cookie('token', token, getAuthCookieOptions());

    logAudit({ user }, { action: 'USER_LOGIN', entityType: 'user', entityId: user.id, details: { email: user.email } }).catch(() => {});

    res.json({
      success: true,
      message: 'Login successful',
      token, // Also return in body for mobile/headless API clients
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        last_login: user.last_login
      }
    });
  } catch (err) {
    console.error('[Login Controller Error]:', err);
    res.status(500).json({
      success: false,
      error: { code: 'SERVER_ERROR', message: 'An error occurred during login. Please try again.' }
    });
  }
}

/**
 * Cryptographic Verification of Google ID Token via Google tokeninfo API
 */
function verifyGoogleIdToken(idToken) {
  return new Promise((resolve, reject) => {
    const url = `https://oauth2.googleapis.com/tokeninfo?id_token=${encodeURIComponent(idToken)}`;
    https.get(url, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        try {
          const parsed = JSON.parse(body);
          if (res.statusCode === 200 && (parsed.email_verified === 'true' || parsed.email_verified === true)) {
            resolve(parsed);
          } else {
            reject(new Error(parsed.error_description || 'Invalid or unverified Google ID token.'));
          }
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

/**
 * Secure Google OAuth 2.0 Authentication Handler
 * Cryptographically verifies Google ID Token signature
 */
export async function googleOAuthLogin(req, res) {
  try {
    const { credential, idToken } = req.body;
    const tokenToVerify = credential || idToken;

    if (!tokenToVerify) {
      return res.status(400).json({
        success: false,
        error: { code: 'INVALID_INPUT', message: 'Google ID token credential is required for OAuth authentication.' }
      });
    }

    // Production security guard: GOOGLE_CLIENT_ID must be configured
    const expectedClientId = process.env.GOOGLE_CLIENT_ID;
    if (process.env.NODE_ENV === 'production' && !expectedClientId) {
      return res.status(500).json({
        success: false,
        error: { code: 'OAUTH_CONFIG_ERROR', message: 'Google OAuth configuration error: GOOGLE_CLIENT_ID is missing.' }
      });
    }

    // Verify Google ID Token cryptographically with Google tokeninfo endpoint
    let googleUser = null;
    try {
      googleUser = await verifyGoogleIdToken(tokenToVerify);
    } catch (verifyErr) {
      return res.status(401).json({
        success: false,
        error: { code: 'INVALID_OAUTH_TOKEN', message: `Google OAuth verification failed: ${verifyErr.message}` }
      });
    }

    // Validate Issuer (accounts.google.com or https://accounts.google.com)
    const validIssuers = ['accounts.google.com', 'https://accounts.google.com'];
    if (!googleUser.iss || !validIssuers.includes(googleUser.iss)) {
      return res.status(401).json({
        success: false,
        error: { code: 'INVALID_OAUTH_ISSUER', message: 'Google ID token issuer is invalid.' }
      });
    }

    // Validate Token Expiration
    const nowSeconds = Math.floor(Date.now() / 1000);
    if (googleUser.exp && parseInt(googleUser.exp, 10) < nowSeconds) {
      return res.status(401).json({
        success: false,
        error: { code: 'OAUTH_TOKEN_EXPIRED', message: 'Google ID token has expired.' }
      });
    }

    // Validate Audience / Client ID
    if (expectedClientId && googleUser.aud !== expectedClientId) {
      return res.status(401).json({
        success: false,
        error: { code: 'INVALID_OAUTH_AUDIENCE', message: 'Google ID token audience mismatch.' }
      });
    }

    // Extract cryptographically verified email from Google payload
    const verifiedEmail = googleUser.email.toLowerCase().trim();

    // Check if user exists in DB
    let user = null;
    if (getIsDbConnected()) {
      const userRes = await query('SELECT * FROM users WHERE LOWER(email) = $1', [verifiedEmail]);
      if (userRes.rows.length > 0) {
        user = userRes.rows[0];
      }
    }

    if (!user) {
      const initialEmail = process.env.ADMIN_INITIAL_EMAIL ? process.env.ADMIN_INITIAL_EMAIL.toLowerCase() : null;
      if (initialEmail && verifiedEmail === initialEmail) {
        user = {
          id: '00000000-0000-0000-0000-000000000001',
          name: googleUser.name || 'Google Admin User',
          email: verifiedEmail,
          role: 'superadmin',
          is_active: true
        };
      } else {
        return res.status(403).json({
          success: false,
          error: { code: 'UNAUTHORIZED_OAUTH_USER', message: 'Your verified Google account is not authorized for Admin Panel access.' }
        });
      }
    }

    if (!user.is_active) {
      return res.status(403).json({
        success: false,
        error: { code: 'ACCOUNT_DISABLED', message: 'This user account has been disabled.' }
      });
    }

    const token = generateToken(user);
    res.cookie('token', token, getAuthCookieOptions());

    logAudit({ user }, { action: 'GOOGLE_OAUTH_LOGIN', entityType: 'user', entityId: user.id, details: { email: user.email } }).catch(() => {});

    res.json({
      success: true,
      message: 'Google OAuth 2.0 login successful',
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });
  } catch (err) {
    console.error('[Google OAuth Controller Error]:', err);
    res.status(500).json({
      success: false,
      error: { code: 'SERVER_ERROR', message: 'Google OAuth 2.0 authentication failed.' }
    });
  }
}

/**
 * Logout User & Clear Auth Cookie
 */
export async function logout(req, res) {
  try {
    res.clearCookie('token', getAuthCookieOptions());
    res.json({
      success: true,
      message: 'Logged out successfully.'
    });
  } catch (err) {
    res.status(500).json({ success: false, error: { code: 'SERVER_ERROR', message: err.message } });
  }
}

/**
 * Get Current User Profile
 */
export async function getMe(req, res) {
  try {
    res.json({
      success: true,
      user: req.user
    });
  } catch (err) {
    res.status(500).json({ success: false, error: { code: 'SERVER_ERROR', message: err.message } });
  }
}

/**
 * Change Password
 */
export async function changePassword(req, res) {
  try {
    const { currentPassword, newPassword } = req.body;
    if (!currentPassword || !newPassword) {
      return res.status(400).json({
        success: false,
        error: { code: 'INVALID_INPUT', message: 'Current password and new password are required.' }
      });
    }

    if (newPassword.length < 8) {
      return res.status(400).json({
        success: false,
        error: { code: 'WEAK_PASSWORD', message: 'New password must be at least 8 characters long.' }
      });
    }

    if (!getIsDbConnected()) {
      return res.json({ success: true, message: 'Password updated (Dev Memory Mode)' });
    }

    const userRes = await query('SELECT password_hash FROM users WHERE id = $1', [req.user.id]);
    if (userRes.rows.length === 0) {
      return res.status(404).json({ success: false, error: { code: 'NOT_FOUND', message: 'User not found.' } });
    }

    const isMatch = await bcrypt.compare(currentPassword, userRes.rows[0].password_hash);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        error: { code: 'INVALID_PASSWORD', message: 'Current password is incorrect.' }
      });
    }

    const salt = await bcrypt.genSalt(12);
    const hash = await bcrypt.hash(newPassword, salt);

    await query('UPDATE users SET password_hash = $1, updated_at = CURRENT_TIMESTAMP WHERE id = $2', [hash, req.user.id]);
    await logAudit(req, { action: 'CHANGE_PASSWORD', entityType: 'user', entityId: req.user.id });

    res.json({
      success: true,
      message: 'Password changed successfully.'
    });
  } catch (err) {
    res.status(500).json({ success: false, error: { code: 'SERVER_ERROR', message: err.message } });
  }
}
