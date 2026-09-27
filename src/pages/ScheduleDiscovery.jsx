import React, { useState } from 'react';
import { Calendar, Clock, CheckCircle2, ArrowRight, UserCheck } from 'lucide-react';

export default function ScheduleDiscovery() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', pillar: 'Digital Strategy & Audits', date: '', timeSlot: '10:00 AM EST' });
  const [booked, setBooked] = useState(false);
  const [refId, setRefId] = useState('');

  const todayStr = new Date().toISOString().split('T')[0];

  const handleSubmit = (e) => {
    e.preventDefault();
    const generatedRef = `WHY-DISC-${Math.floor(100000 + Math.random() * 900000)}`;
    setRefId(generatedRef);
    setBooked(true);

    const bookingRecord = { 
      ...formData, 
      id: Date.now(), 
      refId: generatedRef, 
      status: 'Requested',
      createdAt: new Date().toISOString() 
    };

    // Save to discovery bookings key
    try {
      const existing = JSON.parse(localStorage.getItem('why_discovery_bookings') || '[]');
      localStorage.setItem('why_discovery_bookings', JSON.stringify([bookingRecord, ...existing]));

      // Sync to main inquiries inbox for Admin visibility
      const existingInquiries = JSON.parse(localStorage.getItem('why_inquiries') || '[]');
      const inquiryRecord = {
        id: Date.now(),
        refId: generatedRef,
        name: formData.name,
        email: formData.email,
        company: formData.company,
        service: formData.pillar,
        budget: 'Discovery Consultation',
        message: `Discovery Call requested for ${formData.date} at ${formData.timeSlot}`,
        status: 'New',
        createdAt: new Date().toISOString()
      };
      localStorage.setItem('why_inquiries', JSON.stringify([inquiryRecord, ...existingInquiries]));
    } catch (err) {
      console.error('Failed to save discovery booking:', err);
    }
  };

  return (
    <div className="bg-[#FAFAFC] text-[#0F172A] min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 space-y-8">
        <div className="text-center space-y-3">
          <span className="text-xs font-bold text-[#6D28D9] uppercase tracking-wider">1-on-1 Architecture Call</span>
          <h1 className="text-4xl font-extrabold text-[#0F172A]">Schedule Your <span className="italic font-normal text-[#6D28D9]">Technical Discovery Session</span></h1>
          <p className="text-slate-600 text-sm max-w-xl mx-auto">
            Book a 30-minute strategic consultation with our Executive Enterprise Architects.
          </p>
        </div>

        <div className="bg-white border border-[#E9D5FF] rounded-3xl p-8 shadow-xl">
          {booked ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-14 h-14 bg-purple-100 text-[#6D28D9] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <span className="text-[11px] font-mono font-bold text-[#6D28D9] bg-[#F3E8FF] px-3 py-1 rounded-full border border-[#E9D5FF] uppercase inline-block">
                Request Ref: {refId}
              </span>
              <h2 className="text-2xl font-extrabold text-[#0F172A]">Discovery Request Received!</h2>
              <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                Your discovery session request (<strong className="font-mono text-[#6D28D9]">{refId}</strong>) for <strong>{formData.date} at {formData.timeSlot}</strong> has been logged. Our enterprise architects will verify availability and send a calendar invitation to <strong>{formData.email}</strong>.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Your Name *</label>
                  <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full bg-[#FAFAFC] border border-[#E9D5FF] rounded-xl px-4 py-2.5 text-xs outline-none focus:ring-2 focus:ring-[#6D28D9]" placeholder="Alex Morgan" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Work Email *</label>
                  <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full bg-[#FAFAFC] border border-[#E9D5FF] rounded-xl px-4 py-2.5 text-xs outline-none focus:ring-2 focus:ring-[#6D28D9]" placeholder="alex@enterprise.com" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Company / Organization *</label>
                  <input required type="text" value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})} className="w-full bg-[#FAFAFC] border border-[#E9D5FF] rounded-xl px-4 py-2.5 text-xs outline-none focus:ring-2 focus:ring-[#6D28D9]" placeholder="Global Tech Corp" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Primary Pillar Focus *</label>
                  <select value={formData.pillar} onChange={e => setFormData({...formData, pillar: e.target.value})} className="w-full bg-[#FAFAFC] border border-[#E9D5FF] rounded-xl px-4 py-2.5 text-xs outline-none focus:ring-2 focus:ring-[#6D28D9]">
                    <option>Digital Strategy & Audits</option>
                    <option>Digital Engineering & QA</option>
                    <option>Data Engineering & Analytics</option>
                    <option>Generative AI & LLMs</option>
                    <option>Infrastructure Managed Services</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Preferred Date *</label>
                  <input required type="date" min={todayStr} value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})} className="w-full bg-[#FAFAFC] border border-[#E9D5FF] rounded-xl px-4 py-2.5 text-xs outline-none focus:ring-2 focus:ring-[#6D28D9]" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Preferred Time Slot *</label>
                  <select value={formData.timeSlot} onChange={e => setFormData({...formData, timeSlot: e.target.value})} className="w-full bg-[#FAFAFC] border border-[#E9D5FF] rounded-xl px-4 py-2.5 text-xs outline-none focus:ring-2 focus:ring-[#6D28D9]">
                    <option>09:00 AM EST (07:30 PM IST)</option>
                    <option>10:00 AM EST (08:30 PM IST)</option>
                    <option>02:00 PM EST (12:30 AM IST next day)</option>
                    <option>05:00 PM EST (03:30 AM IST next day)</option>
                  </select>
                </div>
              </div>

              <button type="submit" className="w-full bg-gradient-to-r from-[#6D28D9] to-[#5B21B6] text-white font-extrabold py-4 rounded-xl text-xs uppercase tracking-wider shadow-lg hover:from-[#5B21B6]">
                Confirm Discovery Session -&gt;
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
