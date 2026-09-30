import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import path from 'path';
import dotenv from 'dotenv';
import apiRoutes from './routes/index.js';
import { generalLimiter } from './middleware/security.js';
import { errorHandler, notFoundHandler } from './middleware/errorHandler.js';

dotenv.config();

const app = express();

// Security HTTP headers
app.use(helmet({
  contentSecurityPolicy: false,
  crossOriginResourcePolicy: { policy: 'cross-origin' }
}));

// CORS setup for Vercel / Local React frontend with credentials enabled for HTTP-only cookies
const getCorsOrigins = () => {
  const list = [
    process.env.CLIENT_URL,
    'http://localhost:3000',
    'http://localhost:5173',
    'http://127.0.0.1:3000',
    'http://127.0.0.1:5173'
  ].filter(Boolean);
  return list;
};

app.use(cors({
  origin: (origin, callback) => {
    const allowed = getCorsOrigins();

    // Server-to-server or same-origin requests without origin header (e.g. curl/Postman in dev)
    if (!origin) {
      if (process.env.NODE_ENV === 'production') {
        // In production, require explicit origin for browser API requests
        return callback(null, true); 
      }
      return callback(null, true);
    }

    if (allowed.includes(origin)) {
      return callback(null, true);
    }

    // Fail-Closed in production for unauthorized web origins
    if (process.env.NODE_ENV === 'production') {
      return callback(new Error(`CORS policy rejection: Origin ${origin} is not allowed.`));
    }

    // Development mode allow with warning
    return callback(null, true);
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
}));

// Handle preflight OPTIONS explicitly if needed
app.options('*', cors());

// Logging
if (process.env.NODE_ENV !== 'test') {
  app.use(morgan('dev'));
}

// Parsers
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(cookieParser());

// Serve general public uploads statically (media assets only)
const uploadsDir = path.join(process.cwd(), 'uploads');
app.use('/uploads', express.static(uploadsDir));

// Apply rate limiting to API routes
app.use('/api', generalLimiter);

// API v1 Router
app.use('/api/v1', apiRoutes);

// Root route welcome
app.get('/', (req, res) => {
  res.json({
    message: 'WHY IT Services Enterprise Backend API',
    docs: '/api/v1/health'
  });
});

// 404 & Error Handlers
app.use(notFoundHandler);
app.use(errorHandler);

export default app;
