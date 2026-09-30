import { Router } from 'express';
import authRoutes from './authRoutes.js';
import inquiryRoutes from './inquiryRoutes.js';
import cmsRoutes from './cmsRoutes.js';
import adminRoutes from './adminRoutes.js';
import { getIsDbConnected } from '../config/db.js';

const router = Router();

// 1. Healthcheck Endpoint
router.get('/health', (req, res) => {
  res.json({
    status: 'HEALTHY',
    service: 'WHY IT Services Enterprise Backend API',
    version: '1.0.0',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development',
    database: getIsDbConnected() ? 'CONNECTED' : 'DISCONNECTED'
  });
});

// 2. Auth Routes
router.use('/auth', authRoutes);

// 3. Public Website Routes
router.use('/public', inquiryRoutes);
router.use('/public', cmsRoutes);

// 4. Admin Panel Routes
router.use('/admin', adminRoutes);

export default router;
