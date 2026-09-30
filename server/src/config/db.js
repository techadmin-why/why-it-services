import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pg;

// Connection string from environment
const connectionString = process.env.DATABASE_URL || '';

const isProduction = process.env.NODE_ENV === 'production' || connectionString.includes('neon.tech');

let pool = null;
let isDbConnected = false;

if (connectionString) {
  try {
    pool = new Pool({
      connectionString,
      ssl: isProduction ? { rejectUnauthorized: false } : false,
      max: 10,
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 5000,
    });

    pool.on('error', (err) => {
      console.error('[DB] Unexpected error on idle PostgreSQL client:', err);
    });
  } catch (err) {
    console.warn('[DB] Could not initialize PostgreSQL pool:', err.message);
  }
} else {
  console.warn('[DB] No DATABASE_URL provided. Database functionality will fall back to in-memory mode until configured.');
}

/**
 * Execute SQL Query against PostgreSQL pool with error logging.
 */
export async function query(text, params) {
  if (!pool) {
    throw new Error('Database connection is not initialized. Please verify DATABASE_URL in server/.env');
  }
  const start = Date.now();
  try {
    const res = await pool.query(text, params);
    const duration = Date.now() - start;
    if (process.env.NODE_ENV === 'development' && duration > 200) {
      console.log(`[DB Query Executed] (${duration}ms):`, text.substring(0, 80));
    }
    return res;
  } catch (err) {
    console.error('[DB Query Error]:', err.message, '| Query:', text.substring(0, 100));
    throw err;
  }
}

/**
 * Check Database Connection Health
 */
export async function testConnection() {
  if (!pool) return false;
  try {
    const res = await pool.query('SELECT NOW() as now');
    isDbConnected = !!res.rows[0];
    console.log('[DB] PostgreSQL connected successfully at:', res.rows[0].now);
    return true;
  } catch (err) {
    console.warn('[DB] PostgreSQL connection check failed:', err.message);
    isDbConnected = false;
    return false;
  }
}

export function getIsDbConnected() {
  return isDbConnected;
}

export default {
  query,
  testConnection,
  getIsDbConnected,
  getPool: () => pool,
};
