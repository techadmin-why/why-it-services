import { Router } from 'express';
import { login, logout, getMe, changePassword, googleOAuthLogin } from '../controllers/authController.js';
import { verifyToken } from '../middleware/auth.js';
import { authLimiter } from '../middleware/security.js';

const router = Router();

router.post('/login', authLimiter, login);
router.post('/google', authLimiter, googleOAuthLogin);
router.post('/logout', logout);
router.get('/me', verifyToken, getMe);
router.post('/change-password', verifyToken, changePassword);

export default router;
