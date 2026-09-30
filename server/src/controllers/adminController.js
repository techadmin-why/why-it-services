import path from 'path';
import fs from 'fs';
import { query } from '../config/db.js';
import { logAudit } from '../middleware/audit.js';

/**
 * Admin Dashboard Stats Summary
 */
export async function getDashboardStats(req, res) {
  try {
    let totalInquiries = 0;
    let newInquiries = 0;
    let totalServices = 0;
    let totalArticles = 0;
    let activeJobs = 0;
    let totalApplications = 0;

    try {
      const inqRes = await query('SELECT count(*) as total, count(*) FILTER (WHERE status = \'new\') as new_cnt FROM inquiries');
      totalInquiries = parseInt(inqRes.rows[0].total, 10);
      newInquiries = parseInt(inqRes.rows[0].new_cnt, 10);

      const servRes = await query('SELECT count(*) as count FROM services_cms');
      totalServices = parseInt(servRes.rows[0].count, 10);

      const newsRes = await query('SELECT count(*) as count FROM news_press');
      totalArticles = parseInt(newsRes.rows[0].count, 10);

      const jobRes = await query('SELECT count(*) as count FROM job_openings WHERE is_active = true');
      activeJobs = parseInt(jobRes.rows[0].count, 10);

      const appRes = await query('SELECT count(*) as count FROM job_applications');
      totalApplications = parseInt(appRes.rows[0].count, 10);
    } catch (dbErr) {
      console.warn('[Admin Stats Warning]:', dbErr.message);
    }

    res.json({
      success: true,
      stats: {
        totalInquiries,
        newInquiries,
        totalServices,
        totalArticles,
        activeJobs,
        totalApplications
      }
    });
  } catch (err) {
    res.status(500).json({ success: false, error: { code: 'SERVER_ERROR', message: err.message } });
  }
}

/**
 * Manage Inquiries
 */
export async function getAdminInquiries(req, res) {
  try {
    const { status, type } = req.query;
    let sql = 'SELECT * FROM inquiries WHERE 1=1';
    const params = [];

    if (status) {
      params.push(status);
      sql += ` AND status = $${params.length}`;
    }
    if (type) {
      params.push(type);
      sql += ` AND type = $${params.length}`;
    }

    sql += ' ORDER BY created_at DESC';

    try {
      const dbRes = await query(sql, params);
      return res.json({ success: true, count: dbRes.rows.length, data: dbRes.rows });
    } catch (err) {
      return res.json({ success: true, count: 0, data: [] });
    }
  } catch (err) {
    res.status(500).json({ success: false, error: { code: 'SERVER_ERROR', message: err.message } });
  }
}

export async function updateInquiryStatus(req, res) {
  try {
    const { id } = req.params;
    const { status, notes } = req.body;

    await query('UPDATE inquiries SET status = $1, notes = COALESCE($2, notes), updated_at = CURRENT_TIMESTAMP WHERE id = $3', [status, notes, id]);
    await logAudit(req, { action: 'UPDATE_INQUIRY', entityType: 'inquiry', entityId: id, details: { status, notes } });

    res.json({ success: true, message: 'Inquiry status updated.' });
  } catch (err) {
    res.status(500).json({ success: false, error: { code: 'SERVER_ERROR', message: err.message } });
  }
}

export async function deleteInquiry(req, res) {
  try {
    const { id } = req.params;
    await query('DELETE FROM inquiries WHERE id = $1', [id]);
    await logAudit(req, { action: 'DELETE_INQUIRY', entityType: 'inquiry', entityId: id });
    res.json({ success: true, message: 'Inquiry deleted successfully.' });
  } catch (err) {
    res.status(500).json({ success: false, error: { code: 'SERVER_ERROR', message: err.message } });
  }
}

/* ====================================================
   A. NEWS & PRESS RELEASES CRUD (Neon PostgreSQL)
   ==================================================== */

export async function getAdminNews(req, res) {
  try {
    const dbRes = await query('SELECT * FROM news_press ORDER BY created_at DESC');
    res.json({ success: true, count: dbRes.rows.length, data: dbRes.rows });
  } catch (err) {
    res.json({ success: true, count: 0, data: [] });
  }
}

export async function createNews(req, res) {
  try {
    const { title, summary, content, category, type, author, image_url, is_featured, is_published } = req.body;
    const slug = (req.body.slug || title.toLowerCase().replace(/[^\w ]+/g, '').replace(/ +/g, '-')) + '-' + Date.now();

    const dbRes = await query(
      `INSERT INTO news_press (title, slug, summary, content, category, type, author, image_url, is_featured, is_published)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *`,
      [title, slug, summary || '', content || '', category || 'Press Release', type || 'news', author || 'WHY IT Editorial Team', image_url || null, is_featured || false, is_published !== false]
    );

    await logAudit(req, { action: 'CREATE_NEWS', entityType: 'news_press', entityId: dbRes.rows[0].id, details: { title, slug } });

    res.status(201).json({ success: true, message: 'Article created successfully', data: dbRes.rows[0] });
  } catch (err) {
    res.status(500).json({ success: false, error: { code: 'SERVER_ERROR', message: err.message } });
  }
}

export async function updateNews(req, res) {
  try {
    const { id } = req.params;
    const { title, summary, content, category, type, image_url, is_featured, is_published } = req.body;

    const dbRes = await query(
      `UPDATE news_press SET 
        title = COALESCE($1, title),
        summary = COALESCE($2, summary),
        content = COALESCE($3, content),
        category = COALESCE($4, category),
        type = COALESCE($5, type),
        image_url = COALESCE($6, image_url),
        is_featured = COALESCE($7, is_featured),
        is_published = COALESCE($8, is_published),
        updated_at = CURRENT_TIMESTAMP
       WHERE id = $9 RETURNING *`,
      [title, summary, content, category, type, image_url, is_featured, is_published, id]
    );

    await logAudit(req, { action: 'UPDATE_NEWS', entityType: 'news_press', entityId: id, details: { title } });

    res.json({ success: true, message: 'Article updated successfully', data: dbRes.rows[0] });
  } catch (err) {
    res.status(500).json({ success: false, error: { code: 'SERVER_ERROR', message: err.message } });
  }
}

export async function deleteNews(req, res) {
  try {
    const { id } = req.params;
    await query('DELETE FROM news_press WHERE id = $1', [id]);
    await logAudit(req, { action: 'DELETE_NEWS', entityType: 'news_press', entityId: id });
    res.json({ success: true, message: 'Article deleted successfully' });
  } catch (err) {
    res.status(500).json({ success: false, error: { code: 'SERVER_ERROR', message: err.message } });
  }
}

/* ====================================================
   B. CAREERS & JOB OPENINGS CRUD (Neon PostgreSQL)
   ==================================================== */

export async function getAdminJobs(req, res) {
  try {
    const dbRes = await query('SELECT * FROM job_openings ORDER BY created_at DESC');
    res.json({ success: true, count: dbRes.rows.length, data: dbRes.rows });
  } catch (err) {
    res.json({ success: true, count: 0, data: [] });
  }
}

export async function createJob(req, res) {
  try {
    const { title, department, location, employment_type, experience_level, summary, description, requirements, responsibilities } = req.body;

    const dbRes = await query(
      `INSERT INTO job_openings (title, department, location, employment_type, experience_level, summary, description, requirements, responsibilities)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`,
      [title, department, location || 'Bengaluru / Remote', employment_type || 'Full-time', experience_level || '3+ Years', summary, description || summary, JSON.stringify(requirements || []), JSON.stringify(responsibilities || [])]
    );

    await logAudit(req, { action: 'CREATE_JOB', entityType: 'job_openings', entityId: dbRes.rows[0].id, details: { title } });

    res.status(201).json({ success: true, message: 'Job opening created', data: dbRes.rows[0] });
  } catch (err) {
    res.status(500).json({ success: false, error: { code: 'SERVER_ERROR', message: err.message } });
  }
}

export async function updateJob(req, res) {
  try {
    const { id } = req.params;
    const { title, department, location, is_active, summary } = req.body;

    const dbRes = await query(
      `UPDATE job_openings SET 
        title = COALESCE($1, title),
        department = COALESCE($2, department),
        location = COALESCE($3, location),
        is_active = COALESCE($4, is_active),
        summary = COALESCE($5, summary),
        updated_at = CURRENT_TIMESTAMP
       WHERE id = $6 RETURNING *`,
      [title, department, location, is_active, summary, id]
    );

    await logAudit(req, { action: 'UPDATE_JOB', entityType: 'job_openings', entityId: id });

    res.json({ success: true, message: 'Job opening updated', data: dbRes.rows[0] });
  } catch (err) {
    res.status(500).json({ success: false, error: { code: 'SERVER_ERROR', message: err.message } });
  }
}

export async function deleteJob(req, res) {
  try {
    const { id } = req.params;
    await query('DELETE FROM job_openings WHERE id = $1', [id]);
    await logAudit(req, { action: 'DELETE_JOB', entityType: 'job_openings', entityId: id });
    res.json({ success: true, message: 'Job opening deleted' });
  } catch (err) {
    res.status(500).json({ success: false, error: { code: 'SERVER_ERROR', message: err.message } });
  }
}

export async function getAdminJobApplications(req, res) {
  try {
    const dbRes = await query(
      `SELECT ja.*, jo.title as job_title 
       FROM job_applications ja 
       LEFT JOIN job_openings jo ON ja.job_id = jo.id 
       ORDER BY ja.created_at DESC`
    );
    res.json({ success: true, count: dbRes.rows.length, data: dbRes.rows });
  } catch (err) {
    res.json({ success: true, count: 0, data: [] });
  }
}

/* ====================================================
   C & D. SERVICES & DOMAINS CMS CRUD
   ==================================================== */

export async function getAdminServices(req, res) {
  try {
    const dbRes = await query('SELECT * FROM services_cms ORDER BY created_at DESC');
    res.json({ success: true, count: dbRes.rows.length, data: dbRes.rows });
  } catch (err) {
    res.json({ success: true, count: 0, data: [] });
  }
}

export async function createService(req, res) {
  try {
    const { title, category, summary, description, tagline, icon } = req.body;
    const slug = req.body.slug || title.toLowerCase().replace(/[^\w ]+/g, '').replace(/ +/g, '-');

    const dbRes = await query(
      `INSERT INTO services_cms (slug, title, category, summary, description, tagline, icon)
       VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
      [slug, title, category, summary, description || summary, tagline || null, icon || 'Code']
    );

    await logAudit(req, { action: 'CREATE_SERVICE', entityType: 'services_cms', entityId: dbRes.rows[0].id });
    res.status(201).json({ success: true, data: dbRes.rows[0] });
  } catch (err) {
    res.status(500).json({ success: false, error: { code: 'SERVER_ERROR', message: err.message } });
  }
}

export async function updateService(req, res) {
  try {
    const { id } = req.params;
    const { title, category, summary, description, tagline, icon, is_published } = req.body;

    const dbRes = await query(
      `UPDATE services_cms SET 
        title = COALESCE($1, title),
        category = COALESCE($2, category),
        summary = COALESCE($3, summary),
        description = COALESCE($4, description),
        tagline = COALESCE($5, tagline),
        icon = COALESCE($6, icon),
        is_published = COALESCE($7, is_published),
        updated_at = CURRENT_TIMESTAMP
       WHERE id = $8 RETURNING *`,
      [title, category, summary, description, tagline, icon, is_published, id]
    );

    await logAudit(req, { action: 'UPDATE_SERVICE', entityType: 'services_cms', entityId: id });
    res.json({ success: true, message: 'Service updated successfully', data: dbRes.rows[0] });
  } catch (err) {
    res.status(500).json({ success: false, error: { code: 'SERVER_ERROR', message: err.message } });
  }
}

export async function deleteService(req, res) {
  try {
    const { id } = req.params;
    await query('DELETE FROM services_cms WHERE id = $1', [id]);
    await logAudit(req, { action: 'DELETE_SERVICE', entityType: 'services_cms', entityId: id });
    res.json({ success: true, message: 'Service deleted successfully' });
  } catch (err) {
    res.status(500).json({ success: false, error: { code: 'SERVER_ERROR', message: err.message } });
  }
}

export async function getAdminDomains(req, res) {
  try {
    const dbRes = await query('SELECT * FROM domains_cms ORDER BY created_at DESC');
    res.json({ success: true, count: dbRes.rows.length, data: dbRes.rows });
  } catch (err) {
    res.json({ success: true, count: 0, data: [] });
  }
}

export async function createDomain(req, res) {
  try {
    const { title, description, subtitle, icon } = req.body;
    const slug = req.body.slug || title.toLowerCase().replace(/[^\w ]+/g, '').replace(/ +/g, '-');

    const dbRes = await query(
      `INSERT INTO domains_cms (slug, title, description, subtitle, icon)
       VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [slug, title, description, subtitle || null, icon || 'Building']
    );

    await logAudit(req, { action: 'CREATE_DOMAIN', entityType: 'domains_cms', entityId: dbRes.rows[0].id });
    res.status(201).json({ success: true, data: dbRes.rows[0] });
  } catch (err) {
    res.status(500).json({ success: false, error: { code: 'SERVER_ERROR', message: err.message } });
  }
}

export async function updateDomain(req, res) {
  try {
    const { id } = req.params;
    const { title, description, subtitle, icon, is_published } = req.body;

    const dbRes = await query(
      `UPDATE domains_cms SET 
        title = COALESCE($1, title),
        description = COALESCE($2, description),
        subtitle = COALESCE($3, subtitle),
        icon = COALESCE($4, icon),
        is_published = COALESCE($5, is_published),
        updated_at = CURRENT_TIMESTAMP
       WHERE id = $6 RETURNING *`,
      [title, description, subtitle, icon, is_published, id]
    );

    await logAudit(req, { action: 'UPDATE_DOMAIN', entityType: 'domains_cms', entityId: id });
    res.json({ success: true, message: 'Domain updated successfully', data: dbRes.rows[0] });
  } catch (err) {
    res.status(500).json({ success: false, error: { code: 'SERVER_ERROR', message: err.message } });
  }
}

export async function deleteDomain(req, res) {
  try {
    const { id } = req.params;
    await query('DELETE FROM domains_cms WHERE id = $1', [id]);
    await logAudit(req, { action: 'DELETE_DOMAIN', entityType: 'domains_cms', entityId: id });
    res.json({ success: true, message: 'Domain deleted successfully' });
  } catch (err) {
    res.status(500).json({ success: false, error: { code: 'SERVER_ERROR', message: err.message } });
  }
}

/* ====================================================
   E. TESTIMONIALS CMS CRUD
   ==================================================== */

export async function getAdminTestimonials(req, res) {
  try {
    const dbRes = await query('SELECT * FROM testimonials ORDER BY created_at DESC');
    res.json({ success: true, count: dbRes.rows.length, data: dbRes.rows });
  } catch (err) {
    res.json({ success: true, count: 0, data: [] });
  }
}

export async function createTestimonial(req, res) {
  try {
    const { author_name, authorName, designation, company, content, rating } = req.body;
    const name = author_name || authorName;

    const dbRes = await query(
      `INSERT INTO testimonials (author_name, designation, company, content, rating)
       VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [name, designation || 'Executive', company || 'Enterprise Client', content, rating || 5]
    );

    await logAudit(req, { action: 'CREATE_TESTIMONIAL', entityType: 'testimonials', entityId: dbRes.rows[0].id });
    res.status(201).json({ success: true, data: dbRes.rows[0] });
  } catch (err) {
    res.status(500).json({ success: false, error: { code: 'SERVER_ERROR', message: err.message } });
  }
}

export async function updateTestimonial(req, res) {
  try {
    const { id } = req.params;
    const { author_name, authorName, designation, company, content, rating, is_published } = req.body;
    const name = author_name || authorName;

    const dbRes = await query(
      `UPDATE testimonials SET 
        author_name = COALESCE($1, author_name),
        designation = COALESCE($2, designation),
        company = COALESCE($3, company),
        content = COALESCE($4, content),
        rating = COALESCE($5, rating),
        is_published = COALESCE($6, is_published)
       WHERE id = $7 RETURNING *`,
      [name, designation, company, content, rating, is_published, id]
    );

    await logAudit(req, { action: 'UPDATE_TESTIMONIAL', entityType: 'testimonials', entityId: id });
    res.json({ success: true, message: 'Testimonial updated successfully', data: dbRes.rows[0] });
  } catch (err) {
    res.status(500).json({ success: false, error: { code: 'SERVER_ERROR', message: err.message } });
  }
}

export async function deleteTestimonial(req, res) {
  try {
    const { id } = req.params;
    await query('DELETE FROM testimonials WHERE id = $1', [id]);
    await logAudit(req, { action: 'DELETE_TESTIMONIAL', entityType: 'testimonials', entityId: id });
    res.json({ success: true, message: 'Testimonial deleted successfully' });
  } catch (err) {
    res.status(500).json({ success: false, error: { code: 'SERVER_ERROR', message: err.message } });
  }
}

/* ====================================================
   SECURE CANDIDATE RESUME ACCESS (Priority 7)
   ==================================================== */

export async function downloadCandidateResume(req, res) {
  try {
    const { filename } = req.params;

    // Prevent path traversal attack
    const sanitizedFilename = path.basename(filename);
    const privateDir = path.join(process.cwd(), 'private_uploads', 'resumes');
    const filePath = path.join(privateDir, sanitizedFilename);

    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ success: false, error: { code: 'NOT_FOUND', message: 'Candidate resume file not found.' } });
    }

    await logAudit(req, { action: 'DOWNLOAD_RESUME', entityType: 'job_application', entityId: sanitizedFilename });
    res.download(filePath, sanitizedFilename);
  } catch (err) {
    res.status(500).json({ success: false, error: { code: 'SERVER_ERROR', message: err.message } });
  }
}

/**
 * Audit Logs & Users
 */
export async function getAuditLogs(req, res) {
  try {
    const dbRes = await query('SELECT * FROM audit_logs ORDER BY created_at DESC LIMIT 100');
    return res.json({ success: true, count: dbRes.rows.length, data: dbRes.rows });
  } catch (err) {
    return res.json({ success: true, count: 0, data: [] });
  }
}

export async function getUsers(req, res) {
  try {
    const dbRes = await query('SELECT id, name, email, role, is_active, last_login, created_at FROM users ORDER BY created_at DESC');
    return res.json({ success: true, data: dbRes.rows });
  } catch (err) {
    return res.json({ success: true, data: [] });
  }
}

export async function uploadMedia(req, res) {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, error: { code: 'NO_FILE', message: 'No file uploaded.' } });
    }

    const fileUrl = `/uploads/${req.file.filename}`;
    let mediaId = 'med_' + Date.now();

    try {
      const dbRes = await query(
        `INSERT INTO media_assets (filename, original_name, mime_type, file_size, url, uploaded_by)
         VALUES ($1, $2, $3, $4, $5, $6) RETURNING id`,
        [req.file.filename, req.file.originalname, req.file.mimetype, req.file.size, fileUrl, req.user?.id || null]
      );
      mediaId = dbRes.rows[0].id;
    } catch (dbErr) {}

    await logAudit(req, { action: 'UPLOAD_MEDIA', entityType: 'media', entityId: mediaId });

    res.status(201).json({
      success: true,
      message: 'File uploaded successfully',
      file: { id: mediaId, url: fileUrl }
    });
  } catch (err) {
    res.status(500).json({ success: false, error: { code: 'SERVER_ERROR', message: err.message } });
  }
}
