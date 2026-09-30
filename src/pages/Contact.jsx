import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  Mail, MapPin, Phone, ShieldCheck, Clock, CheckCircle2, 
  Send, Sparkles, MessageSquare, Building2, User, Globe
} from 'lucide-react';

import { submitContactInquiry } from '../api/client';

export default function Contact() {
  const location = useLocation();
  const preselectedData = location.state || {};

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    serviceInterest: preselectedData.serviceInterest || 'digital-strategy',
    budget: preselectedData.budget || '$10k - $25k',
    message: preselectedData.notes ? `[Estimate Context: ${preselectedData.notes}] ` : ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [refId, setRefId] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    if (preselectedData.serviceInterest || preselectedData.budget || preselectedData.notes) {
      setFormData(prev => ({
        ...prev,
        serviceInterest: preselectedData.serviceInterest || prev.serviceInterest,
        budget: preselectedData.budget || prev.budget,
        message: preselectedData.notes ? `[Estimate Context: ${preselectedData.notes}] ${prev.message}` : prev.message
      }));
    }
  }, [preselectedData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setErrorMsg(null);

    try {
      const response = await submitContactInquiry({
        name: formData.fullName,
        email: formData.email,
        company: formData.company || null,
        serviceInterest: formData.serviceInterest || null,
        budget: formData.budget || null,
        message: formData.message
      });

      if (response && response.success) {
        setRefId(response.inquiryId || response.data?.refId || 'INQ-' + Date.now());
        setSubmitted(true);
      } else {
        throw new Error('Unexpected response format from server.');
      }
    } catch (err) {
      setErrorMsg(err.message || 'Failed to submit inquiry. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#FAFAFC] text-[#0F172A] pt-8 pb-20">
      
      {/* 1. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <div className="inline-flex items-center gap-2 bg-[#F3E8FF] border border-[#E9D5FF] text-[#6D28D9] px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6">
          <Sparkles className="w-4 h-4 text-[#6D28D9]" />
          Direct Access to Founding Leadership
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight mb-4">
          Book a Demo & <span className="italic font-normal text-[#6D28D9]">Technical Discovery Call</span>
        </h1>
        <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
          Tell us about your project or digital transformation objectives. Our senior technology directors will review your requirements and provide a clear execution roadmap.
        </p>
      </section>

      {/* 2. FORM & TRUST COLUMN GRID WITH SOFT LAVENDER GRADIENT CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Interactive Form Card */}
          <div className="lg:col-span-7 bg-gradient-to-b from-[#F8F3FF] via-white to-[#FAFAFC] border border-[#E9D5FF] rounded-3xl p-6 sm:p-10 shadow-sm">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-[#F3E8FF] border border-[#E9D5FF] text-[#6D28D9] rounded-full flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <span className="text-[11px] font-mono font-bold text-[#6D28D9] bg-[#F3E8FF] px-3 py-1 rounded-full border border-[#E9D5FF] uppercase inline-block">
                  Reference ID: {refId}
                </span>
                <h2 className="text-2xl font-bold text-[#0F172A]">Discovery Request Received!</h2>
                <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out to WHY IT Services. Your request reference is <strong className="font-mono text-[#6D28D9]">{refId}</strong>. One of our lead technical directors will review your details and respond within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ fullName: '', email: '', company: '', serviceInterest: 'digital-strategy', budget: '$10k - $25k', message: '' });
                  }}
                  className="bg-[#6D28D9] text-white text-xs font-bold px-6 py-3 rounded-xl hover:bg-[#5B21B6] transition-all shadow-sm"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-[#0F172A]">Project Intake Details</h2>
                  <p className="text-slate-500 text-xs mt-1">Fields marked with * are required.</p>
                </div>

                {errorMsg && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-xs font-semibold">
                    {errorMsg}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Alex Morgan"
                        className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:border-[#6D28D9] focus:ring-2 focus:ring-[#6D28D9]/20 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Work Email *
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:border-[#6D28D9] focus:ring-2 focus:ring-[#6D28D9]/20 outline-none transition-all"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Company / Organization
                    </label>
                    <div className="relative">
                      <Building2 className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Acme Enterprise"
                        className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:border-[#6D28D9] focus:ring-2 focus:ring-[#6D28D9]/20 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Primary Service Focus
                    </label>
                    <select
                      value={formData.serviceInterest}
                      onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:border-[#6D28D9] focus:ring-2 focus:ring-[#6D28D9]/20 outline-none transition-all"
                    >
                      <option value="digital-strategy">Digital Strategy & Ideation</option>
                      <option value="digital-engineering">Digital Engineering & QA</option>
                      <option value="data-engineering">Data Engineering & Analytics (ETL)</option>
                      <option value="generative-ai">Generative AI & RPA Automation</option>
                      <option value="infrastructure">Infrastructure Managed Services (L1/L2)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Project Scope / Requirements *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your goals, tech stack, or legacy migration requirements..."
                    className="w-full p-4 bg-white border border-slate-200 rounded-xl text-sm focus:border-[#6D28D9] focus:ring-2 focus:ring-[#6D28D9]/20 outline-none transition-all"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#6D28D9] hover:bg-[#5B21B6] disabled:opacity-50 text-white font-bold py-4 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 text-sm"
                >
                  <Send className="w-4 h-4" />
                  {isSubmitting ? 'Submitting Discovery Request...' : 'Submit Discovery Request'}
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Trust Timeline & Direct Coordinates (Soft Lavender Gradient Cards) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-gradient-to-b from-[#F3E8FF] via-[#F8F3FF] to-white border border-[#E9D5FF] rounded-3xl p-6 sm:p-8 shadow-sm">
              <h3 className="text-xl font-bold text-[#0F172A] mb-6">What Happens Next?</h3>
              
              <div className="space-y-6">
                {[
                  {
                    icon: ShieldCheck,
                    title: '1. Confidential Review',
                    desc: 'Your intake is assigned directly to a principal engineer under strict NDA guidelines.'
                  },
                  {
                    icon: Clock,
                    title: '2. 24-Hour Response Guarantee',
                    desc: 'We analyze your requirements and schedule a 30-minute interactive technical roadmap call.'
                  },
                  {
                    icon: CheckCircle2,
                    title: '3. Scope & Proposal',
                    desc: 'You receive a clear scope document, architecture breakdown, timeline, and team augmentation options.'
                  }
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-2xl bg-white border border-[#E9D5FF] text-[#6D28D9] flex items-center justify-center shrink-0 shadow-sm">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-[#0F172A]">{item.title}</h4>
                        <p className="text-xs text-slate-600 mt-1 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Direct Contact Coordinates Card (Soft Lavender Gradient Card matching screenshot) */}
            <div className="bg-gradient-to-b from-[#F3E8FF] via-[#F8F3FF] to-white border border-[#E9D5FF] rounded-3xl p-6 sm:p-8 space-y-5 shadow-sm">
              <h3 className="text-lg font-bold text-[#0F172A]">Direct Contact Coordinates</h3>
              
              <div className="space-y-3.5 text-xs text-slate-700">
                <a href="tel:+919090254343" className="flex items-center gap-3.5 hover:text-[#6D28D9] transition-colors group">
                  <Phone className="w-4 h-4 text-[#6D28D9] shrink-0" />
                  <span className="font-semibold text-slate-800 group-hover:text-[#6D28D9]">+91 90902 54343 (Mon – Sat: 9:00 AM – 7:00 PM)</span>
                </a>
                <a href="mailto:info@thewhyservices.com" className="flex items-center gap-3.5 hover:text-[#6D28D9] transition-colors group">
                  <Mail className="w-4 h-4 text-[#6D28D9] shrink-0" />
                  <span className="font-semibold text-slate-800 group-hover:text-[#6D28D9]">info@thewhyservices.com</span>
                </a>
                <a href="https://thewhyservices.com" className="flex items-center gap-3.5 hover:text-[#6D28D9] transition-colors group">
                  <Globe className="w-4 h-4 text-[#6D28D9] shrink-0" />
                  <span className="font-semibold text-slate-800 group-hover:text-[#6D28D9]">thewhyservices.com</span>
                </a>
                <a 
                  href="https://maps.app.goo.gl/TBWPpqZDwFBvMyF98"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3.5 hover:text-[#6D28D9] transition-colors group pt-1"
                >
                  <MapPin className="w-4 h-4 text-[#6D28D9] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">
                    <strong className="text-[#0F172A] group-hover:text-[#6D28D9]">WHY Services India Private Limited</strong><br />
                    1st Floor, No. 14/1, Balaji Krupa, 2nd Main Road, Seshadripuram, Bengaluru – 560020, Karnataka, India
                  </span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. FAQ ACCORDION GRID WITH SOFT LAVENDER GRADIENT CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold text-[#6D28D9] uppercase tracking-wider">Frequently Asked Questions</span>
          <h2 className="text-3xl font-extrabold text-[#0F172A] mt-1">Frequently Asked Questions</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {[
            {
              q: 'What engagement models do you offer?',
              a: 'We offer Digital Strategy Audits, End-to-End Milestone Projects, Sustenance & Support Retainers, and Engineering Team Augmentation.'
            },
            {
              q: 'How do you handle QA Verification & Validation?',
              a: 'Our QA engineering processes cover functional and non-functional automated testing, security validation, and continuous integration audits.'
            },
            {
              q: 'How does WHY IT Services leverage Generative AI?',
              a: 'We implement LLMs for qualitative insight extraction, AI-assisted SDLC code generation, and RPA attended/unattended BOTs.'
            },
            {
              q: 'What experience does your leadership team bring?',
              a: 'Our founding leadership team brings deep technical expertise across enterprise software, data lakes, generative AI, and infrastructure management.'
            }
          ].map((item, idx) => (
            <div 
              key={idx} 
              className="bg-gradient-to-b from-[#F3E8FF]/60 via-[#F8F3FF]/40 to-white border border-[#E9D5FF] rounded-2xl p-6 shadow-sm hover:border-[#6D28D9] transition-all"
            >
              <h3 className="font-bold text-sm text-[#0F172A] mb-2">{item.q}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
