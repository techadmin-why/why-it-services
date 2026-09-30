import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { query, testConnection } from '../config/db.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function runMigrations() {
  console.log('[Migration] Checking database connection...');
  const connected = await testConnection();
  if (!connected) {
    console.warn('[Migration] Skipping migrations: Database not connected or DATABASE_URL invalid.');
    return false;
  }

  const migrationsDir = path.join(__dirname, '../migrations');
  try {
    const files = fs.readdirSync(migrationsDir).filter(f => f.endsWith('.sql')).sort();
    console.log(`[Migration] Found ${files.length} migration file(s). Running schema setup...`);

    for (const file of files) {
      const filePath = path.join(migrationsDir, file);
      const sql = fs.readFileSync(filePath, 'utf-8');
      console.log(`[Migration] Executing ${file}...`);
      await query(sql);
      console.log(`[Migration] Successfully applied ${file}`);
    }

    console.log('[Migration] All migrations completed successfully.');
    return true;
  } catch (err) {
    console.error('[Migration Error]:', err.message);
    throw err;
  }
}

// Run directly if called via CLI
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  runMigrations()
    .then(() => process.exit(0))
    .catch(() => process.exit(1));
}
