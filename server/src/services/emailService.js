import { Resend } from 'resend';
import dotenv from 'dotenv';

dotenv.config();

const apiKey = process.env.RESEND_API_KEY;
const isResendConfigured = apiKey && apiKey !== 're_placeholder' && apiKey.startsWith('re_');

let resend = null;
if (isResendConfigured) {
  resend = new Resend(apiKey);
}

const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || 'WHY IT Services <notifications@whyitservices.com>';
const RECEIVER_EMAIL = process.env.NOTIFICATION_RECEIVER_EMAIL || 'inquiries@whyitservices.com';

/**
 * Send Transactional Email via Resend API with local dev fallback
 */
export async function sendEmail({ to, subject, html, text }) {
  if (!resend) {
    console.log(`[Email Simulation] To: ${to || RECEIVER_EMAIL} | Subject: ${subject}`);
    console.log(`[Email Content Sample]:`, text || html.replace(/<[^>]+>/g, '').substring(0, 150));
    return { success: true, simulated: true, id: 'sim_' + Date.now() };
  }

  try {
    const data = await resend.emails.send({
      from: FROM_EMAIL,
      to: to || RECEIVER_EMAIL,
      subject,
      html,
      text: text || html.replace(/<[^>]+>/g, ''),
    });
    console.log(`[Resend Email Sent] ID: ${data.id} to ${to || RECEIVER_EMAIL}`);
    return { success: true, id: data.id };
  } catch (err) {
    console.error('[Resend Email Error]:', err.message);
    // Return gracefully so user form submission succeeds even if email provider has issues
    return { success: false, error: err.message };
  }
}

/**
 * Send Admin Notification for new Inquiry / RFP / Contact
 */
export async function sendInquiryNotification(inquiry) {
  const subject = `[New Inquiry] ${inquiry.type.toUpperCase()}: ${inquiry.subject || inquiry.full_name}`;
  const html = `
    <div style="font-family: Arial, sans-serif; padding: 20px; color: #333; max-width: 600px; border: 1px solid #e0e0e0; borderRadius: 8px;">
      <h2 style="color: #0f172a; margin-top: 0;">New ${inquiry.type.toUpperCase()} Submission</h2>
      <hr style="border: 0; border-top: 1px solid #eeeeee;" />
      <p><strong>Name:</strong> ${inquiry.full_name}</p>
      <p><strong>Email:</strong> ${inquiry.email}</p>
      <p><strong>Phone:</strong> ${inquiry.phone || 'N/A'}</p>
      <p><strong>Company:</strong> ${inquiry.company || 'N/A'}</p>
      <p><strong>Service Interest:</strong> ${inquiry.service_interest || 'N/A'}</p>
      <p><strong>Budget Range:</strong> ${inquiry.budget_range || 'N/A'}</p>
      <p><strong>Timeline:</strong> ${inquiry.timeline || 'N/A'}</p>
      <p><strong>Message:</strong></p>
      <div style="background-color: #f8fafc; padding: 12px; border-left: 4px solid #2563eb; margin: 10px 0;">
        ${inquiry.message || 'No message provided.'}
      </div>
      <p style="font-size: 12px; color: #64748b;">Received at ${new Date().toLocaleString()}</p>
    </div>
  `;

  return sendEmail({
    to: RECEIVER_EMAIL,
    subject,
    html
  });
}
