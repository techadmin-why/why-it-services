import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { query } from '../config/db.js';

dotenv.config();

/**
 * Get JWT secret securely without hardcoded fallbacks in production.
 */
export function getJwtSecret() {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    if (process.env.NODE_ENV === 'production') {
      throw new Error('CRITICAL SECURITY ERROR: JWT_SECRET environment variable is missing in production.');
    }
    // Return dev environment key if in non-production, but log warning
    console.warn('[AUTH WARNING] JWT_SECRET is not set in environment. Using local development key.');
    return 'why_it_services_dev_only_jwt_secret_key';
  }
  return secret;
}

/**
 * Verify JWT token from HTTP-only Cookie or Authorization Header (Bearer token).
 */
export async function verifyToken(req, res, next) {
  try {
    let token = null;

    // Check HTTP-Only Cookie first, then Bearer header
    if (req.cookies && req.cookies.token) {
      token = req.cookies.token;
    } else if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
      token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
      return res.status(401).json({
        success: false,
        error: {
          code: 'UNAUTHORIZED',
          message: 'Authentication session or token is missing. Please log in.'
        }
      });
    }

    const decoded = jwt.verify(token, getJwtSecret());

    // Verify user exists and is active in DB if DB is connected
    try {
      const userRes = await query('SELECT id, name, email, role, is_active FROM users WHERE id = $1', [decoded.id]);
      if (userRes.rows.length === 0) {
        return res.status(401).json({
          success: false,
          error: { code: 'USER_NOT_FOUND', message: 'The user account associated with this session no longer exists.' }
        });
      }
      const user = userRes.rows[0];
      if (!user.is_active) {
        return res.status(403).json({
          success: false,
          error: { code: 'ACCOUNT_DISABLED', message: 'Your admin user account has been disabled.' }
        });
      }
      req.user = user;
    } catch (dbErr) {
      // Fallback for dev mode
      req.user = {
        id: decoded.id,
        email: decoded.email,
        role: decoded.role || 'admin',
        name: decoded.name || 'Admin User'
      };
    }

    next();
  } catch (err) {
    if (err.name === 'TokenExpiredError') {
      return res.status(401).json({
        success: false,
        error: { code: 'TOKEN_EXPIRED', message: 'Your session has expired. Please log in again.' }
      });
    }
    return res.status(401).json({
      success: false,
      error: { code: 'INVALID_TOKEN', message: 'Invalid or corrupted authentication token.' }
    });
  }
}

/**
 * Role-Based Access Control (RBAC) Guard
 * Usage: requireRole('superadmin', 'admin')
 */
export function requireRole(...allowedRoles) {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        error: { code: 'UNAUTHORIZED', message: 'Authentication required.' }
      });
    }

    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        error: {
          code: 'FORBIDDEN_ROLE',
          message: `Forbidden: Access requires role level: ${allowedRoles.join(', ')}. Current user role is ${req.user.role}.`
        }
      });
    }

    next();
  };
}

/**
 * Generate JWT Token for user
 */
export function generateToken(userPayload) {
  return jwt.sign(
    {
      id: userPayload.id,
      email: userPayload.email,
      role: userPayload.role,
      name: userPayload.name
    },
    getJwtSecret(),
    { expiresIn: process.env.JWT_EXPIRES_IN || '7d' }
  );
}
