import React from 'react';
import { ShieldCheck, Lock, Eye, FileText, CheckCircle2 } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="bg-[#FAFAFC] text-[#0F172A] pt-8 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-sm space-y-8">
          
          <div className="border-b border-slate-200 pb-6">
            <div className="inline-flex items-center gap-2 bg-[#F3E8FF] border border-[#E9D5FF] text-[#6D28D9] px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
              <ShieldCheck className="w-4 h-4 text-[#6D28D9]" />
              Data Protection & Privacy
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A]">Privacy Policy</h1>
            <p className="text-xs text-slate-500 mt-2">Last Updated: September 2026 | WHY Services India Private Limited</p>
          </div>

          <div className="space-y-6 text-sm text-slate-700 leading-relaxed">
            <section className="space-y-2">
              <h2 className="text-lg font-bold text-[#0F172A]">1. Introduction</h2>
              <p>
                WHY Services India Private Limited ("WHY IT Services", "we", "us", or "our") respects your privacy and is committed to protecting your personal and operational data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, utilize our IT services, or engage with our platforms.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-[#0F172A]">2. Information We Collect</h2>
              <p>We may collect personal and technical data including:</p>
              <ul className="list-disc pl-5 space-y-1 text-slate-600">
                <li>Contact Information: Name, work email address, phone number, company name.</li>
                <li>Technical Data: IP address, browser type, device diagnostics, and page engagement metrics.</li>
                <li>Project Intake Data: Scope requirements, technical specifications, and inquiry notes.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-[#0F172A]">3. How We Use Your Information</h2>
              <p>We process data for legitimate business purposes:</p>
              <ul className="list-disc pl-5 space-y-1 text-slate-600">
                <li>To deliver, maintain, and optimize our digital engineering and cloud services.</li>
                <li>To communicate regarding discovery calls, proposals, and project roadmaps.</li>
                <li>To ensure compliance with GRC (Governance, Risk, and Compliance) and SOC2 standards.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-[#0F172A]">4. Intellectual Property & Data Ownership</h2>
              <p>
                All client project codebases, proprietary algorithms, and datasets remain 100% owned by the client upon project execution and payment, as specified under our service agreements.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-[#0F172A]">5. Contact Our Privacy Officer</h2>
              <p>For any privacy inquiries or data access requests, please contact:</p>
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl text-xs font-mono space-y-1">
                <div>WHY Services India Private Limited</div>
                <div>Email: privacy@thewhyservices.com | contact@thewhyservices.com</div>
                <div>Address: 1st Floor, No. 14/1, Balaji Krupa, 2nd Main Road, Seshadripuram, Bengaluru – 560020</div>
              </div>
            </section>
          </div>

        </div>
      </div>
    </div>
  );
}
