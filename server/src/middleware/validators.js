import { body, param, validationResult } from 'express-validator';

/**
 * Middleware to check validation results and return formatted 400 errors
 */
export function handleValidationErrors(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      error: {
        code: 'VALIDATION_ERROR',
        message: 'Invalid input parameters provided.',
        details: errors.array().map(err => ({ field: err.path, message: err.msg }))
      }
    });
  }
  next();
}

/**
 * Validation rules for Contact / Inquiries
 */
export const validateContactInput = [
  body('email').isEmail().withMessage('Please provide a valid email address.').normalizeEmail(),
  body('fullName').optional().trim().notEmpty().withMessage('Full name cannot be empty.'),
  body('name').optional().trim().notEmpty().withMessage('Name cannot be empty.'),
  handleValidationErrors
];

/**
 * Validation rules for CMS News / Press Release
 */
export const validateNewsInput = [
  body('title').trim().notEmpty().withMessage('Article title is required.').isLength({ max: 300 }).withMessage('Title exceeds 300 characters.'),
  body('summary').optional().trim().isLength({ max: 1000 }).withMessage('Summary exceeds 1000 characters.'),
  body('category').optional().trim().notEmpty().withMessage('Category cannot be empty.'),
  handleValidationErrors
];

/**
 * Validation rules for CMS Job Opening
 */
export const validateJobInput = [
  body('title').trim().notEmpty().withMessage('Job title is required.'),
  body('department').trim().notEmpty().withMessage('Department is required.'),
  body('summary').trim().notEmpty().withMessage('Summary is required.'),
  handleValidationErrors
];

/**
 * Validation rules for CMS Service
 */
export const validateServiceInput = [
  body('title').trim().notEmpty().withMessage('Service title is required.'),
  body('category').trim().notEmpty().withMessage('Category is required.'),
  body('summary').trim().notEmpty().withMessage('Summary is required.'),
  handleValidationErrors
];

/**
 * Validation rules for CMS Domain / Solution
 */
export const validateDomainInput = [
  body('title').trim().notEmpty().withMessage('Domain title is required.'),
  body('description').trim().notEmpty().withMessage('Description is required.'),
  handleValidationErrors
];

/**
 * Validation rules for CMS Testimonial
 */
export const validateTestimonialInput = [
  body('author_name').optional().trim().notEmpty().withMessage('Author name is required.'),
  body('authorName').optional().trim().notEmpty().withMessage('Author name is required.'),
  body('content').trim().notEmpty().withMessage('Testimonial content is required.'),
  handleValidationErrors
];
