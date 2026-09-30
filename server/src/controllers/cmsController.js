import { query } from '../config/db.js';

/**
 * Get Public Services List
 */
export async function getServices(req, res) {
  try {
    try {
      const dbRes = await query('SELECT * FROM services_cms WHERE is_published = true ORDER BY order_index ASC, created_at DESC');
      return res.json({ success: true, count: dbRes.rows.length, data: dbRes.rows });
    } catch (err) {
      return res.json({
        success: true,
        count: 4,
        data: [
          {
            slug: 'ai-engineering',
            title: 'AI Engineering & Agentic Automation',
            category: 'Artificial Intelligence',
            summary: 'Autonomous AI workflows and custom LLM integrations for enterprise scale.',
            description: 'Our AI Engineering unit designs end-to-end autonomous solutions, custom fine-tuned foundation models, RAG architectures, and enterprise AI safety guardrails.'
          },
          {
            slug: 'cloud-devops',
            title: 'Cloud Transformation & Modern DevOps',
            category: 'Infrastructure',
            summary: 'Multi-cloud architectures, Kubernetes orchestration, and zero-downtime CI/CD pipelines.',
            description: 'Modernize legacy infrastructure into resilient cloud-native environments across AWS, Azure, and Google Cloud with automated IaC.'
          }
        ]
      });
    }
  } catch (err) {
    res.status(500).json({ success: false, error: { code: 'SERVER_ERROR', message: err.message } });
  }
}

/**
 * Get Service By Slug
 */
export async function getServiceBySlug(req, res) {
  try {
    const { slug } = req.params;
    try {
      const dbRes = await query('SELECT * FROM services_cms WHERE slug = $1 AND is_published = true', [slug]);
      if (dbRes.rows.length === 0) {
        return res.status(404).json({ success: false, error: { code: 'NOT_FOUND', message: 'Service not found' } });
      }
      return res.json({ success: true, data: dbRes.rows[0] });
    } catch (err) {
      return res.status(404).json({ success: false, error: { code: 'NOT_FOUND', message: 'Service details unavailable' } });
    }
  } catch (err) {
    res.status(500).json({ success: false, error: { code: 'SERVER_ERROR', message: err.message } });
  }
}

/**
 * Get Public Domains List
 */
export async function getDomains(req, res) {
  try {
    try {
      const dbRes = await query('SELECT * FROM domains_cms WHERE is_published = true ORDER BY order_index ASC');
      return res.json({ success: true, count: dbRes.rows.length, data: dbRes.rows });
    } catch (err) {
      return res.json({ success: true, count: 0, data: [] });
    }
  } catch (err) {
    res.status(500).json({ success: false, error: { code: 'SERVER_ERROR', message: err.message } });
  }
}

/**
 * Get Public News & Press Releases
 */
export async function getNews(req, res) {
  try {
    const { type, category, featured } = req.query;
    try {
      let sql = 'SELECT * FROM news_press WHERE is_published = true';
      const params = [];

      if (type) {
        params.push(type);
        sql += ` AND type = $${params.length}`;
      }
      if (category) {
        params.push(category);
        sql += ` AND category = $${params.length}`;
      }
      if (featured === 'true') {
        sql += ` AND is_featured = true`;
      }

      sql += ' ORDER BY published_at DESC';
      const dbRes = await query(sql, params);
      return res.json({ success: true, count: dbRes.rows.length, data: dbRes.rows });
    } catch (err) {
      return res.json({ success: true, count: 0, data: [] });
    }
  } catch (err) {
    res.status(500).json({ success: false, error: { code: 'SERVER_ERROR', message: err.message } });
  }
}

/**
 * Get News Article By Slug
 */
export async function getNewsBySlug(req, res) {
  try {
    const { slug } = req.params;
    try {
      const dbRes = await query('SELECT * FROM news_press WHERE slug = $1 AND is_published = true', [slug]);
      if (dbRes.rows.length === 0) {
        return res.status(404).json({ success: false, error: { code: 'NOT_FOUND', message: 'Article not found' } });
      }

      query('UPDATE news_press SET views_count = views_count + 1 WHERE id = $1', [dbRes.rows[0].id]).catch(() => {});

      return res.json({ success: true, data: dbRes.rows[0] });
    } catch (err) {
      return res.status(404).json({ success: false, error: { code: 'NOT_FOUND', message: 'Article unavailable' } });
    }
  } catch (err) {
    res.status(500).json({ success: false, error: { code: 'SERVER_ERROR', message: err.message } });
  }
}

/**
 * Get Public Job Openings
 */
export async function getJobOpenings(req, res) {
  try {
    const { department, location } = req.query;
    try {
      let sql = 'SELECT * FROM job_openings WHERE is_active = true';
      const params = [];

      if (department) {
        params.push(department);
        sql += ` AND department = $${params.length}`;
      }
      if (location) {
        params.push(`%${location}%`);
        sql += ` AND location ILIKE $${params.length}`;
      }

      sql += ' ORDER BY created_at DESC';
      const dbRes = await query(sql, params);
      return res.json({ success: true, count: dbRes.rows.length, data: dbRes.rows });
    } catch (err) {
      return res.json({ success: true, count: 0, data: [] });
    }
  } catch (err) {
    res.status(500).json({ success: false, error: { code: 'SERVER_ERROR', message: err.message } });
  }
}

/**
 * Get Single Job Detail By ID
 */
export async function getJobById(req, res) {
  try {
    const { id } = req.params;
    try {
      const dbRes = await query('SELECT * FROM job_openings WHERE id = $1 AND is_active = true', [id]);
      if (dbRes.rows.length === 0) {
        return res.status(404).json({ success: false, error: { code: 'NOT_FOUND', message: 'Job opening not found' } });
      }
      return res.json({ success: true, data: dbRes.rows[0] });
    } catch (err) {
      return res.status(404).json({ success: false, error: { code: 'NOT_FOUND', message: 'Job detail unavailable' } });
    }
  } catch (err) {
    res.status(500).json({ success: false, error: { code: 'SERVER_ERROR', message: err.message } });
  }
}

/**
 * Get Public Testimonials & Leadership
 */
export async function getTestimonials(req, res) {
  try {
    try {
      const dbRes = await query('SELECT * FROM testimonials WHERE is_published = true ORDER BY order_index ASC');
      return res.json({ success: true, count: dbRes.rows.length, data: dbRes.rows });
    } catch (err) {
      return res.json({ success: true, count: 0, data: [] });
    }
  } catch (err) {
    res.status(500).json({ success: false, error: { code: 'SERVER_ERROR', message: err.message } });
  }
}

export async function getLeadership(req, res) {
  try {
    try {
      const dbRes = await query('SELECT * FROM leadership_members WHERE is_active = true ORDER BY order_index ASC');
      return res.json({ success: true, count: dbRes.rows.length, data: dbRes.rows });
    } catch (err) {
      return res.json({ success: true, count: 0, data: [] });
    }
  } catch (err) {
    res.status(500).json({ success: false, error: { code: 'SERVER_ERROR', message: err.message } });
  }
}

/**
 * Dynamic XML Sitemap Generator
 */
export async function getSitemapXml(req, res) {
  try {
    const baseUrl = process.env.CLIENT_URL || 'https://whyitservices.com';
    const staticRoutes = [
      '',
      '/about',
      '/services',
      '/services/digital-strategy',
      '/services/digital-engineering',
      '/services/data-engineering',
      '/services/generative-ai',
      '/services/infrastructure-services',
      '/solutions',
      '/solutions/family-care',
      '/solutions/healthcare',
      '/solutions/fintech',
      '/solutions/saas',
      '/solutions/ecommerce',
      '/solutions/logistics',
      '/solutions/education',
      '/solutions/real-estate',
      '/solutions/manufacturing',
      '/hire',
      '/case-studies',
      '/contact',
      '/careers',
      '/privacy',
      '/terms',
      '/security',
      '/faq',
      '/insights',
      '/news'
    ];

    let dynamicUrls = '';
    try {
      const newsRes = await query('SELECT slug, updated_at FROM news_press WHERE is_published = true');
      newsRes.rows.forEach(n => {
        dynamicUrls += `
  <url>
    <loc>${baseUrl}/news/${n.slug}</loc>
    <lastmod>${new Date(n.updated_at).toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
      });
    } catch (dbErr) {}

    const staticXml = staticRoutes.map(r => `
  <url>
    <loc>${baseUrl}${r}</loc>
    <changefreq>daily</changefreq>
    <priority>${r === '' ? '1.0' : '0.8'}</priority>
  </url>`).join('');

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticXml}${dynamicUrls}
</urlset>`;

    res.header('Content-Type', 'application/xml');
    res.send(xml);
  } catch (err) {
    res.status(500).send('Error generating sitemap XML');
  }
}
