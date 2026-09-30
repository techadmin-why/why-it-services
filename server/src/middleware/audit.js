import { query } from '../config/db.js';

/**
 * Log Admin Action into audit_logs table
 */
export async function logAudit(req, { action, entityType, entityId, details }) {
  try {
    const userId = req.user?.id || null;
    const userEmail = req.user?.email || 'system';
    const ipAddress = req.headers['x-forwarded-for'] || req.socket?.remoteAddress || '127.0.0.1';

    await query(
      `INSERT INTO audit_logs (user_id, user_email, action, entity_type, entity_id, details, ip_address)
       VALUES ($1, $2, $3, $4, $5, $6, $7)`,
      [userId, userEmail, action, entityType, entityId, JSON.stringify(details || {}), ipAddress]
    );
  } catch (err) {
    console.warn('[Audit Log Warning] Failed to save audit log:', err.message);
  }
}
