import React from 'react';
import { FileText, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function TermsOfService() {
  return (
    <div className="bg-[#FAFAFC] text-[#0F172A] pt-8 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-sm space-y-8">
          
          <div className="border-b border-slate-200 pb-6">
            <div className="inline-flex items-center gap-2 bg-[#F3E8FF] border border-[#E9D5FF] text-[#6D28D9] px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
              <FileText className="w-4 h-4 text-[#6D28D9]" />
              Legal Terms & Governance
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A]">Terms of Service</h1>
            <p className="text-xs text-slate-500 mt-2">Effective Date: September 2026 | WHY Services India Private Limited</p>
          </div>

          <div className="space-y-6 text-sm text-slate-700 leading-relaxed">
            <section className="space-y-2">
              <h2 className="text-lg font-bold text-[#0F172A]">1. Agreement to Terms</h2>
              <p>
                By accessing or using the web application, software solutions, or advisory services provided by WHY Services India Private Limited ("WHY IT Services"), you agree to be bound by these Terms of Service.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-[#0F172A]">2. Professional Services & Engagements</h2>
              <p>
                We deliver digital strategy, custom software engineering, data analytics pipelines, generative AI solutions, and managed infrastructure support under signed Statements of Work (SOW) or Master Services Agreements (MSA).
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-[#0F172A]">3. Confidentiality & Non-Disclosure</h2>
              <p>
                Both parties agree to protect and maintain strict confidentiality regarding proprietary source code, trade secrets, system architectures, and business operations under NDA protocols.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-[#0F172A]">4. SLA Guarantees & Support</h2>
              <p>
                Managed infrastructure and production support operate under agreed Service Level Agreements (SLAs), guaranteeing up to 99.99% system availability as defined in your contract.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-[#0F172A]">5. Corporate Address & Contact</h2>
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl text-xs font-mono space-y-1">
                <div>WHY Services India Private Limited</div>
                <div>1st Floor, No. 14/1, Balaji Krupa, 2nd Main Road, Seshadripuram, Bengaluru – 560020</div>
                <div>Phone: +91 90902 54343 | Email: legal@thewhyservices.com</div>
              </div>
            </section>
          </div>

        </div>
      </div>
    </div>
  );
}
