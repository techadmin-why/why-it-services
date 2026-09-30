import { Router } from 'express';
import {
  getServices,
  getServiceBySlug,
  getDomains,
  getNews,
  getNewsBySlug,
  getJobOpenings,
  getJobById,
  getTestimonials,
  getLeadership,
  getSitemapXml
} from '../controllers/cmsController.js';

const router = Router();

router.get('/sitemap.xml', getSitemapXml);
router.get('/services', getServices);
router.get('/services/:slug', getServiceBySlug);
router.get('/domains', getDomains);
router.get('/news', getNews);
router.get('/news/:slug', getNewsBySlug);
router.get('/jobs', getJobOpenings);
router.get('/jobs/:id', getJobById);
router.get('/testimonials', getTestimonials);
router.get('/leadership', getLeadership);

export default router;
