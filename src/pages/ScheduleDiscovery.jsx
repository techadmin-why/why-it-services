import React, { useState } from 'react';
import { Calendar, Clock, CheckCircle2, ArrowRight, UserCheck } from 'lucide-react';
import { submitDiscoveryRequest } from '../api/client';

export default function ScheduleDiscovery() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', pillar: 'Digital Strategy & Audits', date: '', timeSlot: '10:00 AM EST (08:30 PM IST)' });
  const [booked, setBooked] = useState(false);
  const [refId, setRefId] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const todayStr = new Date().toISOString().split('T')[0];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setErrorMsg(null);

    try {
      const response = await submitDiscoveryRequest({
        name: formData.name,
        email: formData.email,
        company: formData.company,
        pillar: formData.pillar,
        date: formData.date,
        timeSlot: formData.timeSlot
      });

      if (response && response.success) {
        setRefId(response.inquiryId || response.data?.refId || 'DISC-' + Date.now());
        setBooked(true);
      } else {
        throw new Error('Unexpected response format from server.');
      }
    } catch (err) {
      if (err.code === 'SLOT_ALREADY_BOOKED' || err.status === 409) {
        setErrorMsg('This time slot is already booked for the selected date. Please choose another date or time slot.');
      } else {
        setErrorMsg(err.message || 'Failed to schedule discovery session. Please try again.');
      }
    } finally {
      setIsSubmitting(false);
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
              {errorMsg && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-xs font-semibold">
                  {errorMsg}
                </div>
              )}

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

              <button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-[#6D28D9] to-[#5B21B6] hover:from-[#5B21B6] hover:to-[#4C1D95] disabled:opacity-50 text-white font-extrabold py-3.5 px-6 rounded-xl text-xs sm:text-sm uppercase tracking-wider shadow-lg inline-flex items-center justify-center gap-2 whitespace-nowrap transition-all">
                <span>{isSubmitting ? 'Booking Session...' : 'Confirm Discovery Session'}</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
