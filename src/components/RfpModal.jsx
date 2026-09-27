import React, { useState } from 'react';
import { FileText, X, Send, CheckCircle2, Sparkles, ShieldCheck } from 'lucide-react';

export default function RfpModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Web & App Development',
    budget: '$10k - $25k',
    rfpDetails: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Floating RFP Trigger Button (Bottom Left) */}
      <div className="fixed bottom-6 left-6 z-40 flex items-center gap-2">
        <button
          onClick={() => setIsOpen(true)}
          className="relative group bg-[#6D28D9] hover:bg-[#5B21B6] text-white font-extrabold text-xs px-5 py-3 rounded-full shadow-2xl flex items-center gap-2 transition-all duration-300 hover:scale-105"
        >
          {/* Pulsing ring animation */}
          <span className="absolute -inset-1 rounded-full bg-[#6D28D9] opacity-75 animate-ping -z-10"></span>
          <FileText className="w-4 h-4 text-[#F3E8FF]" />
          <span>Submit RFP</span>
        </button>
      </div>

      {/* RFP Modal Backdrop */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-gradient-to-b from-[#F8F3FF] via-white to-[#FAFAFC] border border-[#E9D5FF] rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative overflow-hidden">
            
            {/* Close Button */}
            <button
              onClick={() => { setIsOpen(false); setSubmitted(false); }}
              className="absolute top-5 right-5 text-slate-400 hover:text-[#6D28D9] bg-white border border-slate-200 rounded-full p-2 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {submitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-14 h-14 bg-[#F3E8FF] border border-[#E9D5FF] text-[#6D28D9] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-[#0F172A]">RFP Received!</h3>
                <p className="text-xs text-slate-600 max-w-md mx-auto">
                  Thank you for submitting your Request for Proposal to WHY IT Services. Our solution architects will review your document and respond within 24 hours.
                </p>
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-[#6D28D9] text-white text-xs font-bold px-6 py-2.5 rounded-xl hover:bg-[#5B21B6] transition-all"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <div className="inline-flex items-center gap-1.5 bg-[#F3E8FF] border border-[#E9D5FF] text-[#6D28D9] px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider mb-2">
                    <Sparkles className="w-3 h-3" />
                    Request For Proposal (RFP)
                  </div>
                  <h3 className="text-xl font-extrabold text-[#0F172A]">Submit Your Project RFP</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Direct intake for enterprise software, data lakes, and IT staffing requirements.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs focus:border-[#6D28D9] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Work Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@company.com"
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs focus:border-[#6D28D9] outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Phone Number</label>
                    <input
                      type="text"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs focus:border-[#6D28D9] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Project Category</label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs focus:border-[#6D28D9] outline-none"
                    >
                      <option value="Web & App Development">Custom Web & App Build</option>
                      <option value="Data Lakes & ETL">Data Lakes & ETL Analytics</option>
                      <option value="Generative AI & RPA">Generative AI & RPA Automation</option>
                      <option value="Infrastructure Managed Services">Infrastructure Managed Services</option>
                      <option value="Dedicated Developer Hiring">Dedicated IT Staff Augmentation</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">RFP / Project Overview *</label>
                  <textarea
                    rows={3}
                    required
                    value={formData.rfpDetails}
                    onChange={(e) => setFormData({ ...formData, rfpDetails: e.target.value })}
                    placeholder="Provide a summary of your technical requirements, estimated timeline, or upload scope notes..."
                    className="w-full p-3 bg-white border border-slate-200 rounded-xl text-xs focus:border-[#6D28D9] outline-none"
                  ></textarea>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-500 font-semibold">
                    <ShieldCheck className="w-4 h-4 text-[#6D28D9]" />
                    <span>Protected under Strict NDA</span>
                  </div>
                  <button
                    type="submit"
                    className="bg-[#6D28D9] hover:bg-[#5B21B6] text-white text-xs font-bold px-6 py-3 rounded-xl shadow-md transition-all flex items-center gap-1.5"
                  >
                    <Send className="w-3.5 h-3.5" />
                    Submit Proposal
                  </button>
                </div>
              </form>
            )}

          </div>
        </div>
      )}
    </>
  );
}
