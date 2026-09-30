import { Router } from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import {
  submitContact,
  submitRfp,
  submitDiscovery,
  submitHiring,
  submitEventRegistration,
  submitJobApplication
} from '../controllers/inquiryController.js';
import { contactLimiter } from '../middleware/security.js';
import { validateContactInput } from '../middleware/validators.js';

// Private Multer storage for candidate resumes (Priority 7 - Secure Resume Access)
const privateResumesDir = path.join(process.cwd(), 'private_uploads', 'resumes');
if (!fs.existsSync(privateResumesDir)) {
  fs.mkdirSync(privateResumesDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, privateResumesDir),
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const ext = path.extname(file.originalname);
    cb(null, `resume-${uniqueSuffix}${ext}`);
  }
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5 MB max
  fileFilter: (req, file, cb) => {
    const allowedTypes = ['.pdf', '.doc', '.docx'];
    const ext = path.extname(file.originalname).toLowerCase();
    if (allowedTypes.includes(ext)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type. Only PDF, DOC, and DOCX resumes are allowed.'));
    }
  }
});

const router = Router();

router.post('/contact', contactLimiter, validateContactInput, submitContact);
router.post('/rfp', contactLimiter, validateContactInput, submitRfp);
router.post('/discovery', contactLimiter, validateContactInput, submitDiscovery);
router.post('/hiring', contactLimiter, validateContactInput, submitHiring);
router.post('/events/register', contactLimiter, validateContactInput, submitEventRegistration);
router.post('/jobs/:jobId/apply', contactLimiter, upload.single('resume'), submitJobApplication);

export default router;
