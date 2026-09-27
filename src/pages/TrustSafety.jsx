import React from 'react';
import { ShieldCheck, Lock, CheckCircle2, Award, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TrustSafety() {
  return (
    <div className="bg-[#FAFAFC] text-[#0F172A] pt-8 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-b from-[#F8F3FF] via-white to-[#FAFAFC] border border-[#E9D5FF] rounded-3xl p-8 sm:p-12 shadow-sm space-y-8">
          
          <div className="border-b border-slate-200/80 pb-6 text-center">
            <div className="inline-flex items-center gap-2 bg-[#F3E8FF] border border-[#E9D5FF] text-[#6D28D9] px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
              <ShieldCheck className="w-4 h-4 text-[#6D28D9]" />
              Trust, Safety & Governance
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A]">Trust & Safety Framework</h1>
            <p className="text-xs text-slate-500 mt-2">WHY Services India Private Limited | Customer Delight & Security Standards</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Vetted Engineering Professionals', desc: 'Background checked, verified developers and architects with strict NDA enforcement.' },
              { title: 'SOC2 & HIPAA Compliant', desc: 'Rigorous data isolation, encrypted channels, and regular third-party audits.' },
              { title: '100% Client IP Ownership', desc: 'All codebases, algorithms, and data structures belong entirely to the client.' },
              { title: '99.99% Guaranteed SLA Uptime', desc: 'Proactive 24/7 L1/L2 infrastructure support and automated monitoring.' }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="bg-gradient-to-b from-[#F3E8FF] via-[#F8F3FF] to-white border border-[#E9D5FF] p-6 rounded-3xl space-y-2 shadow-sm hover:border-[#6D28D9] transition-all"
              >
                <CheckCircle2 className="w-5 h-5 text-[#6D28D9]" />
                <h3 className="font-bold text-base text-[#0F172A]">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-[#5B21B6] via-[#6D28D9] to-[#4C1D95] text-white p-8 rounded-3xl text-center space-y-3 shadow-xl">
            <h2 className="text-lg font-bold">Have Questions About Our Safety Protocols?</h2>
            <p className="text-xs text-purple-100 max-w-lg mx-auto">
              Our security officers and technical leadership are available to walk through our compliance controls.
            </p>
            <Link
              to="/contact"
              className="bg-white hover:bg-purple-50 text-[#6D28D9] text-xs font-bold px-6 py-3 rounded-xl transition-all inline-block shadow-md"
            >
              Contact Trust & Security Team
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
