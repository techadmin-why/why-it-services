import rateLimit from 'express-rate-limit';

/**
 * General Public API Rate Limiter
 * Max 100 requests per 15 minutes per IP
 */
export const generalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 150,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    error: {
      code: 'RATE_LIMIT_EXCEEDED',
      message: 'Too many requests from this IP. Please try again in 15 minutes.'
    }
  }
});

/**
 * Strict Auth Limiter for Login/Reset attempts
 * Max 10 attempts per 15 minutes per IP
 */
export const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    error: {
      code: 'AUTH_RATE_LIMIT_EXCEEDED',
      message: 'Too many login attempts. Account temporarily locked for 15 minutes.'
    }
  }
});

/**
 * Contact & Inquiry Submission Limiter
 * Max 5 submissions per 15 minutes per IP
 */
export const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    error: {
      code: 'SUBMISSION_LIMIT_EXCEEDED',
      message: 'You have sent multiple messages recently. Please wait a few minutes before submitting again.'
    }
  }
});
