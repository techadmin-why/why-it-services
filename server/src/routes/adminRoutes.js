import { Router } from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { verifyToken, requireRole } from '../middleware/auth.js';
import {
  validateNewsInput,
  validateJobInput,
  validateServiceInput,
  validateDomainInput,
  validateTestimonialInput
} from '../middleware/validators.js';
import {
  getDashboardStats,
  getAdminInquiries,
  updateInquiryStatus,
  deleteInquiry,
  getAdminNews,
  createNews,
  updateNews,
  deleteNews,
  getAdminJobs,
  createJob,
  updateJob,
  deleteJob,
  getAdminJobApplications,
  getAdminServices,
  createService,
  updateService,
  deleteService,
  getAdminDomains,
  createDomain,
  updateDomain,
  deleteDomain,
  getAdminTestimonials,
  createTestimonial,
  updateTestimonial,
  deleteTestimonial,
  downloadCandidateResume,
  getAuditLogs,
  getUsers,
  uploadMedia
} from '../controllers/adminController.js';

const uploadsDir = path.join(process.cwd(), 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadsDir),
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const ext = path.extname(file.originalname);
    cb(null, `media-${uniqueSuffix}${ext}`);
  }
});

const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }
});

const router = Router();

// Protect ALL admin endpoints with authentication
router.use(verifyToken);

// Dashboard Stats
router.get('/stats', getDashboardStats);

// Inquiries Management
router.get('/inquiries', requireRole('superadmin', 'admin', 'editor'), getAdminInquiries);
router.patch('/inquiries/:id', requireRole('superadmin', 'admin', 'editor'), updateInquiryStatus);
router.delete('/inquiries/:id', requireRole('superadmin', 'admin'), deleteInquiry);

// News & Press CMS Persistence APIs
router.get('/news', requireRole('superadmin', 'admin', 'editor'), getAdminNews);
router.post('/news', requireRole('superadmin', 'admin', 'editor'), validateNewsInput, createNews);
router.put('/news/:id', requireRole('superadmin', 'admin', 'editor'), validateNewsInput, updateNews);
router.delete('/news/:id', requireRole('superadmin', 'admin'), deleteNews);

// Careers & Jobs CMS Persistence APIs
router.get('/jobs', requireRole('superadmin', 'admin', 'editor'), getAdminJobs);
router.post('/jobs', requireRole('superadmin', 'admin', 'editor'), validateJobInput, createJob);
router.put('/jobs/:id', requireRole('superadmin', 'admin', 'editor'), validateJobInput, updateJob);
router.delete('/jobs/:id', requireRole('superadmin', 'admin'), deleteJob);
router.get('/job-applications', requireRole('superadmin', 'admin', 'editor'), getAdminJobApplications);

// Services CMS Persistence APIs
router.get('/services', requireRole('superadmin', 'admin', 'editor'), getAdminServices);
router.post('/services', requireRole('superadmin', 'admin', 'editor'), validateServiceInput, createService);
router.put('/services/:id', requireRole('superadmin', 'admin', 'editor'), validateServiceInput, updateService);
router.delete('/services/:id', requireRole('superadmin', 'admin'), deleteService);

// Domains CMS Persistence APIs
router.get('/domains', requireRole('superadmin', 'admin', 'editor'), getAdminDomains);
router.post('/domains', requireRole('superadmin', 'admin', 'editor'), validateDomainInput, createDomain);
router.put('/domains/:id', requireRole('superadmin', 'admin', 'editor'), validateDomainInput, updateDomain);
router.delete('/domains/:id', requireRole('superadmin', 'admin'), deleteDomain);

// Testimonials CMS Persistence APIs
router.get('/testimonials', requireRole('superadmin', 'admin', 'editor'), getAdminTestimonials);
router.post('/testimonials', requireRole('superadmin', 'admin', 'editor'), validateTestimonialInput, createTestimonial);
router.put('/testimonials/:id', requireRole('superadmin', 'admin', 'editor'), validateTestimonialInput, updateTestimonial);
router.delete('/testimonials/:id', requireRole('superadmin', 'admin'), deleteTestimonial);

// Protected Candidate Resume Download Endpoint (Priority 7)
router.get('/resumes/:filename', requireRole('superadmin', 'admin', 'editor'), downloadCandidateResume);

// Audit Logs (Superadmin & Admin only)
router.get('/audit-logs', requireRole('superadmin', 'admin'), getAuditLogs);

// User Administration (Superadmin only)
router.get('/users', requireRole('superadmin'), getUsers);

// Media Uploads
router.post('/media/upload', requireRole('superadmin', 'admin', 'editor'), upload.single('file'), uploadMedia);

export default router;
