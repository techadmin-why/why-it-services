import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import { query, testConnection } from '../config/db.js';

dotenv.config();

export async function seedInitialData() {
  const connected = await testConnection();
  if (!connected) {
    console.warn('[Seeding] Skipping database seeding: Database not connected.');
    return false;
  }

  try {
    const adminEmail = process.env.ADMIN_INITIAL_EMAIL;
    const adminPass = process.env.ADMIN_INITIAL_PASSWORD;

    if (!adminEmail || !adminPass) {
      console.log('[Seeding] ADMIN_INITIAL_EMAIL or ADMIN_INITIAL_PASSWORD not set. Skipping initial admin user creation.');
    } else {
      const userRes = await query('SELECT id FROM users WHERE email = $1', [adminEmail]);
      if (userRes.rows.length === 0) {
        const salt = await bcrypt.genSalt(12);
        const hash = await bcrypt.hash(adminPass, salt);
        await query(
          `INSERT INTO users (name, email, password_hash, role, is_active)
           VALUES ($1, $2, $3, 'superadmin', true)`,
          ['WHY Admin', adminEmail, hash]
        );
        console.log(`[Seeding] Created initial Super Admin account: ${adminEmail}`);
      } else {
        console.log('[Seeding] Super Admin account already exists.');
      }
    }

    // Seed Services CMS if empty
    const servicesRes = await query('SELECT COUNT(*) FROM services_cms');
    if (parseInt(servicesRes.rows[0].count, 10) === 0) {
      console.log('[Seeding] Seeding initial Services CMS data...');
      const initialServices = [
        {
          slug: 'ai-engineering',
          title: 'AI Engineering & Agentic Automation',
          category: 'Artificial Intelligence',
          tagline: 'Autonomous AI workflows and custom LLM integrations for enterprise scale.',
          summary: 'Transform manual workflows with state-of-the-art LLMs, multi-agent frameworks, and retrieval-augmented generation (RAG).',
          description: 'Our AI Engineering unit designs end-to-end autonomous solutions, custom fine-tuned foundation models, RAG architectures, and enterprise AI safety guardrails.',
          features: JSON.stringify(['Custom LLM Fine-Tuning & Prompting', 'Multi-Agent Orchestration (LangChain/AutoGPT)', 'Vector DB RAG Architectures', 'Enterprise AI Guardrails & Compliance']),
          tech_stack: JSON.stringify(['Python', 'PyTorch', 'LangChain', 'Pinecone', 'OpenAI', 'Gemini']),
          benefits: JSON.stringify(['70% reduction in operational manual steps', 'Real-time intelligent automated analytics', 'Secure enterprise-grade private model hosting']),
          use_cases: JSON.stringify(['Automated Customer Support Agents', 'Financial Document Analysis', 'Predictive Maintenance Workflows']),
          icon: 'Brain',
          order_index: 1
        },
        {
          slug: 'cloud-devops',
          title: 'Cloud Transformation & Modern DevOps',
          category: 'Infrastructure',
          tagline: 'Multi-cloud architectures, Kubernetes orchestration, and zero-downtime CI/CD pipelines.',
          summary: 'Accelerate release velocity and guarantee 99.99% uptime with cloud-native infrastructure engineering.',
          description: 'Modernize legacy infrastructure into resilient cloud-native environments across AWS, Azure, and Google Cloud with automated IaC.',
          features: JSON.stringify(['Infrastructure as Code (Terraform/Pulumi)', 'Kubernetes Cluster Management (EKS/GKE)', 'Zero-Downtime Deployment Pipelines', 'FinOps & Cloud Cost Optimization']),
          tech_stack: JSON.stringify(['AWS', 'GCP', 'Kubernetes', 'Docker', 'Terraform', 'GitHub Actions']),
          benefits: JSON.stringify(['99.99% High Availability SLA', 'Automated horizontal auto-scaling', '40% average infrastructure cost savings']),
          use_cases: JSON.stringify(['Microservices Migration', 'Disaster Recovery Automation', 'Global CDN & Edge Setup']),
          icon: 'Cloud',
          order_index: 2
        },
        {
          slug: 'custom-software-development',
          title: 'Enterprise Custom Software Development',
          category: 'Software Engineering',
          tagline: 'Scalable web, mobile, and microservices software platforms built for longevity.',
          summary: 'Tailor-made web applications, mobile platforms, and distributed backend engines engineered with high concurrency.',
          description: 'From high-throughput APIs to intuitive React/Next.js frontend applications, we craft software designed to scale effortlessly.',
          features: JSON.stringify(['Microservices & Distributed Systems', 'Modern Web Platforms (React, Node.js)', 'Cross-Platform Mobile Apps (React Native, Flutter)', 'High Concurrency API Gateways']),
          tech_stack: JSON.stringify(['React', 'Node.js', 'PostgreSQL', 'TypeScript', 'GraphQL', 'Redis']),
          benefits: JSON.stringify(['Sub-100ms API response latency', 'Seamless multi-tenant scalable architecture', 'Modular clean code with high unit test coverage']),
          use_cases: JSON.stringify(['Enterprise Resource Planning (ERP)', 'SaaS Platform Development', 'High-Frequency Financial Systems']),
          icon: 'Code',
          order_index: 3
        },
        {
          slug: 'cybersecurity',
          title: 'Cybersecurity & Compliance',
          category: 'Security',
          tagline: 'Zero-trust architecture, penetration testing, SOC2 compliance, and continuous threat mitigation.',
          summary: 'Protect your enterprise assets with end-to-end security audits, threat monitoring, and zero-trust protocols.',
          description: 'Our security engineers perform penetration testing, code security audits, vulnerability scanning, and guide organizations through SOC2, ISO 27001, and GDPR compliance.',
          features: JSON.stringify(['Zero-Trust Network Access (ZTNA)', 'Penetration Testing & Vulnerability Assessment', 'SOC2 / ISO 27001 / GDPR Compliance', 'Real-Time Threat Monitoring & Incident Response']),
          tech_stack: JSON.stringify(['WAF', 'Cloudflare', 'Vault', 'OWASP ZAP', 'Splunk']),
          benefits: JSON.stringify(['Complete vulnerability mitigation before release', 'Full audit trail and compliance readiness', 'Proactive incident recovery protocols']),
          use_cases: JSON.stringify(['FinTech Compliance Audits', 'Cloud Security Posture Management', 'Identity & Access Management (IAM)']),
          icon: 'Shield',
          order_index: 4
        }
      ];

      for (const s of initialServices) {
        await query(
          `INSERT INTO services_cms (slug, title, category, tagline, summary, description, features, tech_stack, benefits, use_cases, icon, order_index)
           VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)`,
          [s.slug, s.title, s.category, s.tagline, s.summary, s.description, s.features, s.tech_stack, s.benefits, s.use_cases, s.icon, s.order_index]
        );
      }
      console.log('[Seeding] Services CMS initial data seeded.');
    }

    // Seed Job Openings if empty
    const jobsRes = await query('SELECT COUNT(*) FROM job_openings');
    if (parseInt(jobsRes.rows[0].count, 10) === 0) {
      console.log('[Seeding] Seeding initial Job Openings...');
      const initialJobs = [
        {
          title: 'Senior Full Stack Engineer (React & Node.js)',
          department: 'Engineering',
          location: 'Hyderabad / Remote',
          employment_type: 'Full-time',
          experience_level: '5+ Years',
          summary: 'Lead the architecture and implementation of scalable web platforms for international enterprise clients.',
          description: 'We are seeking a seasoned Senior Full Stack Engineer with expertise in React, Node.js, and PostgreSQL to design and scale high-concurrency microservices.',
          requirements: JSON.stringify(['5+ years of experience with React, Node.js, TypeScript', 'Deep understanding of PostgreSQL and database optimizations', 'Experience with cloud platforms (AWS/GCP) and CI/CD pipelines', 'Strong problem solving and communication skills']),
          responsibilities: JSON.stringify(['Architect resilient REST & GraphQL backend services', 'Develop responsive and performance-optimized React frontends', 'Mentor junior engineers and lead code reviews']),
          benefits: JSON.stringify(['Competitive salary & performance bonuses', 'Flexible hybrid/remote working options', 'Comprehensive health insurance & wellness allowances'])
        },
        {
          title: 'Lead AI / Machine Learning Solutions Architect',
          department: 'Artificial Intelligence',
          location: 'Hyderabad / Remote',
          employment_type: 'Full-time',
          experience_level: '6+ Years',
          summary: 'Drive AI/ML engineering, LLM fine-tuning, and RAG architectures for autonomous enterprise solutions.',
          description: 'Join our AI Innovation Lab to build multi-agent systems, custom retrieval architectures, and deploy private foundation models.',
          requirements: JSON.stringify(['Hands-on experience with PyTorch/TensorFlow, LangChain, LlamaIndex', 'Production experience with vector databases (Pinecone, Qdrant)', 'Solid background in Python backend engineering (FastAPI/Express)']),
          responsibilities: JSON.stringify(['Design custom LLM evaluation and fine-tuning pipelines', 'Build agentic automation workflows for enterprise clients', 'Ensure AI ethical compliance and strict guardrails']),
          benefits: JSON.stringify(['Competitive compensation package', 'AI research budget & conference access', 'Health & family coverage'])
        }
      ];

      for (const j of initialJobs) {
        await query(
          `INSERT INTO job_openings (title, department, location, employment_type, experience_level, summary, description, requirements, responsibilities, benefits)
           VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`,
          [j.title, j.department, j.location, j.employment_type, j.experience_level, j.summary, j.description, j.requirements, j.responsibilities, j.benefits]
        );
      }
      console.log('[Seeding] Job Openings initial data seeded.');
    }

    console.log('[Seeding] Seeding completed successfully.');
    return true;
  } catch (err) {
    console.error('[Seeding Error]:', err.message);
    throw err;
  }
}

// Run directly if called via CLI
if (process.argv[1] && process.argv[1].includes('seed.js')) {
  seedInitialData()
    .then(() => process.exit(0))
    .catch(() => process.exit(1));
}
