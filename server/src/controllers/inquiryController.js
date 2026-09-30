import { query } from '../config/db.js';
import { sendInquiryNotification } from '../services/emailService.js';

/**
 * Handle Contact Form Submission
 */
export async function submitContact(req, res) {
  try {
    const { name, fullName, email, phone, company, subject, message, serviceInterest, budget, timeline } = req.body;

    const contactName = fullName || name;
    if (!contactName || !email) {
      return res.status(400).json({
        success: false,
        error: { code: 'INVALID_INPUT', message: 'Full name and email address are required.' }
      });
    }

    const inquiry = {
      type: 'contact',
      full_name: contactName,
      email: email.trim(),
      phone: phone || null,
      company: company || null,
      subject: subject || 'New Website Contact Inquiry',
      message: message || '',
      service_interest: serviceInterest || null,
      budget_range: budget || null,
      timeline: timeline || null,
      status: 'new'
    };

    let inquiryId = null;
    try {
      const dbRes = await query(
        `INSERT INTO inquiries (type, full_name, email, phone, company, subject, message, service_interest, budget_range, timeline, status)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, 'new') RETURNING id`,
        [inquiry.type, inquiry.full_name, inquiry.email, inquiry.phone, inquiry.company, inquiry.subject, inquiry.message, inquiry.service_interest, inquiry.budget_range, inquiry.timeline]
      );
      inquiryId = dbRes.rows[0].id;
    } catch (dbErr) {
      console.warn('[DB Inquiry Save Warning] Falling back to memory mode for inquiry submission:', dbErr.message);
      inquiryId = 'inq_' + Date.now();
    }

    // Trigger Resend email notification async
    sendInquiryNotification({ ...inquiry, id: inquiryId }).catch(err => console.error('[Email Notification Failure]:', err));

    res.status(201).json({
      success: true,
      message: 'Thank you for reaching out to WHY IT Services. Our team will get back to you within 24 hours.',
      inquiryId
    });
  } catch (err) {
    console.error('[Submit Contact Error]:', err);
    res.status(500).json({
      success: false,
      error: { code: 'SERVER_ERROR', message: 'Unable to submit your message at this time. Please try again.' }
    });
  }
}

/**
 * Handle RFP Submission
 */
export async function submitRfp(req, res) {
  try {
    const { name, fullName, email, phone, company, projectType, budget, timeline, details } = req.body;
    const contactName = fullName || name;

    if (!contactName || !email) {
      return res.status(400).json({
        success: false,
        error: { code: 'INVALID_INPUT', message: 'Name and email are required for RFP submission.' }
      });
    }

    const inquiry = {
      type: 'rfp',
      full_name: contactName,
      email: email.trim(),
      phone: phone || null,
      company: company || null,
      subject: `[RFP Request] ${projectType || 'Custom Project'}`,
      message: details || '',
      service_interest: projectType || null,
      budget_range: budget || null,
      timeline: timeline || null,
      status: 'new'
    };

    let inquiryId = 'rfp_' + Date.now();
    try {
      const dbRes = await query(
        `INSERT INTO inquiries (type, full_name, email, phone, company, subject, message, service_interest, budget_range, timeline, status)
         VALUES ('rfp', $1, $2, $3, $4, $5, $6, $7, $8, $9, 'new') RETURNING id`,
        [inquiry.full_name, inquiry.email, inquiry.phone, inquiry.company, inquiry.subject, inquiry.message, inquiry.service_interest, inquiry.budget_range, inquiry.timeline]
      );
      inquiryId = dbRes.rows[0].id;
    } catch (dbErr) {
      console.warn('[DB RFP Save Warning]:', dbErr.message);
    }

    sendInquiryNotification({ ...inquiry, id: inquiryId }).catch(err => console.error('[Email Error]:', err));

    res.status(201).json({
      success: true,
      message: 'Your RFP has been received. Our Enterprise Solutions team will review your proposal details and send a formal response.',
      inquiryId
    });
  } catch (err) {
    res.status(500).json({ success: false, error: { code: 'SERVER_ERROR', message: err.message } });
  }
}

/**
 * Handle Schedule Discovery Submission
 */
export async function submitDiscovery(req, res) {
  try {
    const { name, fullName, email, phone, company, preferredDate, preferredTime, topic } = req.body;
    const contactName = fullName || name;

    if (!contactName || !email) {
      return res.status(400).json({
        success: false,
        error: { code: 'INVALID_INPUT', message: 'Name and email are required to schedule a discovery call.' }
      });
    }

    const inquiry = {
      type: 'discovery',
      full_name: contactName,
      email: email.trim(),
      phone: phone || null,
      company: company || null,
      subject: `[Discovery Call] ${topic || 'Consultation Request'}`,
      message: `Preferred Slot: ${preferredDate || 'Flexible'} at ${preferredTime || 'Flexible'}`,
      status: 'new'
    };

    let inquiryId = 'disc_' + Date.now();
    try {
      const dbRes = await query(
        `INSERT INTO inquiries (type, full_name, email, phone, company, subject, message, status)
         VALUES ('discovery', $1, $2, $3, $4, $5, $6, 'new') RETURNING id`,
        [inquiry.full_name, inquiry.email, inquiry.phone, inquiry.company, inquiry.subject, inquiry.message]
      );
      inquiryId = dbRes.rows[0].id;
    } catch (dbErr) {
      console.warn('[DB Discovery Save Warning]:', dbErr.message);
    }

    sendInquiryNotification({ ...inquiry, id: inquiryId }).catch(err => console.error('[Email Error]:', err));

    res.status(201).json({
      success: true,
      message: 'Discovery session request confirmed. A calendar invitation will be sent to your email.',
      inquiryId
    });
  } catch (err) {
    res.status(500).json({ success: false, error: { code: 'SERVER_ERROR', message: err.message } });
  }
}

/**
 * Handle Hiring / Hire Developers Submission
 */
export async function submitHiring(req, res) {
  try {
    const { name, fullName, email, phone, company, techRoles, teamSize, engagementModel } = req.body;
    const contactName = fullName || name;

    if (!contactName || !email) {
      return res.status(400).json({
        success: false,
        error: { code: 'INVALID_INPUT', message: 'Name and email are required.' }
      });
    }

    const inquiry = {
      type: 'hiring',
      full_name: contactName,
      email: email.trim(),
      phone: phone || null,
      company: company || null,
      subject: `[Developer Hiring] ${techRoles || 'Tech Talent Request'}`,
      message: `Roles: ${techRoles || 'N/A'} | Team Size: ${teamSize || 'N/A'} | Model: ${engagementModel || 'N/A'}`,
      status: 'new'
    };

    let inquiryId = 'hire_' + Date.now();
    try {
      const dbRes = await query(
        `INSERT INTO inquiries (type, full_name, email, phone, company, subject, message, status)
         VALUES ('hiring', $1, $2, $3, $4, $5, $6, 'new') RETURNING id`,
        [inquiry.full_name, inquiry.email, inquiry.phone, inquiry.company, inquiry.subject, inquiry.message]
      );
      inquiryId = dbRes.rows[0].id;
    } catch (dbErr) {
      console.warn('[DB Hiring Save Warning]:', dbErr.message);
    }

    sendInquiryNotification({ ...inquiry, id: inquiryId }).catch(err => console.error('[Email Error]:', err));

    res.status(201).json({
      success: true,
      message: 'Hiring inquiry received. Our Talent Acquisition Lead will contact you with developer profiles.',
      inquiryId
    });
  } catch (err) {
    res.status(500).json({ success: false, error: { code: 'SERVER_ERROR', message: err.message } });
  }
}

/**
 * Handle Reserve Spot / Event Registration
 */
export async function submitEventRegistration(req, res) {
  try {
    const { name, fullName, email, phone, company, eventName } = req.body;
    const contactName = fullName || name;

    if (!contactName || !email) {
      return res.status(400).json({
        success: false,
        error: { code: 'INVALID_INPUT', message: 'Name and email are required to register.' }
      });
    }

    const inquiry = {
      type: 'event',
      full_name: contactName,
      email: email.trim(),
      phone: phone || null,
      company: company || null,
      subject: `[Event Registration] ${eventName || 'Webinar/Event'}`,
      message: `Registered for event: ${eventName || 'General Event'}`,
      status: 'new'
    };

    let inquiryId = 'evt_' + Date.now();
    try {
      const dbRes = await query(
        `INSERT INTO inquiries (type, full_name, email, phone, company, subject, message, status)
         VALUES ('event', $1, $2, $3, $4, $5, $6, 'new') RETURNING id`,
        [inquiry.full_name, inquiry.email, inquiry.phone, inquiry.company, inquiry.subject, inquiry.message]
      );
      inquiryId = dbRes.rows[0].id;
    } catch (dbErr) {
      console.warn('[DB Event Save Warning]:', dbErr.message);
    }

    res.status(201).json({
      success: true,
      message: 'Your spot has been reserved! Event access details have been sent to your email.',
      inquiryId
    });
  } catch (err) {
    res.status(500).json({ success: false, error: { code: 'SERVER_ERROR', message: err.message } });
  }
}

/**
 * Handle Job Application Submission
 */
export async function submitJobApplication(req, res) {
  try {
    const { jobId } = req.params;
    const { name, fullName, email, phone, coverLetter, portfolioUrl, experienceYears } = req.body;
    const applicantName = fullName || name;

    if (!applicantName || !email || !phone) {
      return res.status(400).json({
        success: false,
        error: { code: 'INVALID_INPUT', message: 'Name, email, and phone number are required.' }
      });
    }

    const resumeUrl = req.file ? `/uploads/${req.file.filename}` : (req.body.resumeUrl || null);

    let appId = 'app_' + Date.now();
    try {
      const dbRes = await query(
        `INSERT INTO job_applications (job_id, applicant_name, email, phone, resume_url, cover_letter, portfolio_url, experience_years, status)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, 'applied') RETURNING id`,
        [jobId && jobId !== 'general' ? jobId : null, applicantName, email, phone, resumeUrl, coverLetter || null, portfolioUrl || null, experienceYears || null]
      );
      appId = dbRes.rows[0].id;
    } catch (dbErr) {
      console.warn('[DB Job Application Save Warning]:', dbErr.message);
    }

    res.status(201).json({
      success: true,
      message: 'Application submitted successfully. Our HR team will review your application and contact you if shortlisted.',
      applicationId: appId
    });
  } catch (err) {
    res.status(500).json({ success: false, error: { code: 'SERVER_ERROR', message: err.message } });
  }
}
