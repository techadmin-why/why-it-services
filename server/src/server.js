import http from 'http';
import dotenv from 'dotenv';
import app from './app.js';
import { testConnection } from './config/db.js';
import { runMigrations } from './scripts/migrate.js';
import { seedInitialData } from './scripts/seed.js';

dotenv.config();

const PORT = process.env.PORT || 4000;

const server = http.createServer(app);

async function startServer() {
  server.listen(PORT, async () => {
    console.log(`===================================================`);
    console.log(`🚀 WHY IT Services Backend API Server Running`);
    console.log(`📡 Port: ${PORT}`);
    console.log(`🌐 Environment: ${process.env.NODE_ENV || 'development'}`);
    console.log(`🔗 Health Check: http://localhost:${PORT}/api/v1/health`);
    console.log(`===================================================`);

    // Async initialization of Database & Seed Data
    try {
      const isDbOk = await testConnection();
      if (isDbOk) {
        await runMigrations();
        await seedInitialData();
      } else {
        console.warn('⚠️ Running server without active database connection. Update server/.env with valid DATABASE_URL.');
      }
    } catch (err) {
      console.error('⚠️ Database setup error during boot:', err.message);
    }
  });
}

// Graceful Shutdown
function gracefulShutdown(signal) {
  console.log(`\n[Server] ${signal} signal received. Closing HTTP server...`);
  server.close(() => {
    console.log('[Server] HTTP server closed successfully.');
    process.exit(0);
  });

  // Force exit after 10s if connections linger
  setTimeout(() => {
    console.error('[Server] Forceful shutdown initiated after timeout.');
    process.exit(1);
  }, 10000);
}

process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
process.on('SIGINT', () => gracefulShutdown('SIGINT'));

startServer();
