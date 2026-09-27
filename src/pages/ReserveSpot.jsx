import React, { useState } from 'react';
import { Sparkles, Calendar, Clock, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';
import PartnerTicker from '../components/PartnerTicker';

export default function ReserveSpot() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', role: 'Executive' });
  const [submitted, setSubmitted] = useState(false);
  const [refId, setRefId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const generatedRef = `WHY-EVT-${Math.floor(100000 + Math.random() * 900000)}`;
    setRefId(generatedRef);
    setSubmitted(true);

    const eventRecord = {
      ...formData,
      id: Date.now(),
      refId: generatedRef,
      status: 'Registered',
      date: new Date().toISOString()
    };

    try {
      const existing = JSON.parse(localStorage.getItem('why_event_registrations') || '[]');
      localStorage.setItem('why_event_registrations', JSON.stringify([eventRecord, ...existing]));

      // Sync to main inquiries inbox for Admin visibility
      const existingInquiries = JSON.parse(localStorage.getItem('why_inquiries') || '[]');
      const inquiryRecord = {
        id: Date.now(),
        refId: generatedRef,
        name: formData.name,
        email: formData.email,
        company: formData.company,
        service: 'Summit VIP Pass',
        budget: 'Free Registration',
        message: `Registered for WHY Digital Engineering Summit 2026 (Role: ${formData.role})`,
        status: 'New',
        createdAt: new Date().toISOString()
      };
      localStorage.setItem('why_inquiries', JSON.stringify([inquiryRecord, ...existingInquiries]));
    } catch (err) {
      console.error('Failed to save event registration:', err);
    }
  };

  return (
    <div className="bg-[#FAFAFC] text-[#0F172A] min-h-screen">
      <section className="pt-12 pb-16 max-w-5xl mx-auto px-4 text-center space-y-6">
        <div className="inline-flex items-center gap-2 bg-[#F3E8FF] border border-[#E9D5FF] text-[#6D28D9] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-4 h-4 text-[#6D28D9]" /> WHY Digital Engineering Summit 2026
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0F172A]">
          Reserve Your Virtual <span className="italic font-normal text-[#6D28D9]">VIP Summit Pass</span>
        </h1>
        <p className="text-slate-600 max-w-xl mx-auto text-sm">
          Reserve your spot with our founding tech leads for an exclusive architectural discovery session on cloud infrastructure, data lakes, and Generative AI pipelines.
        </p>

        <div className="flex flex-wrap justify-center gap-6 text-xs text-slate-700 pt-2 font-semibold">
          <div className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-[#6D28D9]" /> October 24, 2026</div>
          <div className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-[#6D28D9]" /> 10:00 AM EST (07:30 PM IST)</div>
          <div className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-[#6D28D9]" /> Virtual Global Stream</div>
        </div>
      </section>

      <PartnerTicker />

      <section className="max-w-2xl mx-auto px-4 py-12">
        <div className="bg-white border border-[#E9D5FF] rounded-3xl p-8 shadow-lg">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-12 h-12 bg-purple-100 text-[#6D28D9] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-mono font-bold text-[#6D28D9] bg-[#F3E8FF] px-3 py-1 rounded-full border border-[#E9D5FF] uppercase inline-block">
                Pass Ref: {refId}
              </span>
              <h2 className="text-2xl font-bold text-[#0F172A]">VIP Pass Request Logged!</h2>
              <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                Your VIP registration (<strong className="font-mono text-[#6D28D9]">{refId}</strong>) has been recorded. Calendar invites and streaming credentials will be emailed to <strong>{formData.email}</strong> prior to event launch.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h2 className="text-xl font-extrabold text-[#0F172A]">Attendee Registration</h2>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full bg-[#FAFAFC] border border-[#E9D5FF] rounded-xl px-4 py-2.5 text-xs focus:ring-2 focus:ring-[#6D28D9] outline-none" placeholder="Jane Doe" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Work Email *</label>
                <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full bg-[#FAFAFC] border border-[#E9D5FF] rounded-xl px-4 py-2.5 text-xs focus:ring-2 focus:ring-[#6D28D9] outline-none" placeholder="jane@company.com" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Company / Organization *</label>
                <input required type="text" value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})} className="w-full bg-[#FAFAFC] border border-[#E9D5FF] rounded-xl px-4 py-2.5 text-xs focus:ring-2 focus:ring-[#6D28D9] outline-none" placeholder="Acme Global" />
              </div>
              <button type="submit" className="w-full bg-gradient-to-r from-[#6D28D9] to-[#5B21B6] text-white font-extrabold py-3.5 rounded-xl text-xs uppercase tracking-wider shadow-md hover:from-[#5B21B6] hover:to-[#4C1D95]">
                Confirm Free VIP Pass -&gt;
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
