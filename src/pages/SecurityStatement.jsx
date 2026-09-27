import React from 'react';
import { Lock, ShieldCheck, CheckCircle2, Server, Key, Eye, FileText, Cpu, AlertTriangle } from 'lucide-react';

export default function SecurityStatement() {
  const securityPillars = [
    {
      title: 'Data Encryption Standards',
      desc: 'All data transmitted across WHY IT Services platforms is encrypted in-transit using TLS 1.3 and at-rest using AES-256 bit encryption keys managed under strict AWS KMS key rotation protocols.',
      icon: Key
    },
    {
      title: 'Continuous Vulnerability & Penetration Audits',
      desc: 'Our QA Engineering team performs continuous automated static code analysis (SAST), dynamic vulnerability scans (DAST), and third-party penetration audits prior to any production deployment.',
      icon: Eye
    },
    {
      title: 'Zero-Trust Role-Based Access (RBAC)',
      desc: 'Multi-Factor Authentication (MFA) and least-privilege Role-Based Access Control (RBAC) are strictly enforced across all development, staging, and production engineering environments.',
      icon: ShieldCheck
    },
    {
      title: 'Incident Failover & Automated Disaster Recovery',
      desc: 'Real-time multi-region database replication with automated 15-minute snapshot backups and guaranteed 99.99% system availability SLAs.',
      icon: Server
    }
  ];

  return (
    <div className="bg-[#FAFAFC] text-[#0F172A] pt-8 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-sm space-y-10">
          
          {/* Header */}
          <div className="border-b border-slate-200 pb-6">
            <div className="inline-flex items-center gap-2 bg-[#F3E8FF] border border-[#E9D5FF] text-[#6D28D9] px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
              <Lock className="w-4 h-4 text-[#6D28D9]" />
              Enterprise Security & Governance
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A]">Security Statement & Compliance Framework</h1>
            <p className="text-xs text-slate-500 mt-2">WHY Services India Private Limited | Security Architecture & Zero-Trust Governance</p>
          </div>

          {/* Compliance Metric Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            <div className="bg-gradient-to-b from-[#F3E8FF] to-white border border-[#E9D5FF] p-5 rounded-2xl text-center">
              <div className="text-xl font-extrabold text-[#6D28D9]">SOC2 Type II</div>
              <div className="text-xs font-semibold text-slate-700 mt-1">Audit Control Ready</div>
            </div>
            <div className="bg-gradient-to-b from-[#F3E8FF] to-white border border-[#E9D5FF] p-5 rounded-2xl text-center">
              <div className="text-xl font-extrabold text-[#6D28D9]">ISO 27001</div>
              <div className="text-xs font-semibold text-slate-700 mt-1">Certified ISMS Standard</div>
            </div>
            <div className="bg-gradient-to-b from-[#F3E8FF] to-white border border-[#E9D5FF] p-5 rounded-2xl text-center">
              <div className="text-xl font-extrabold text-[#6D28D9]">HIPAA Ready</div>
              <div className="text-xs font-semibold text-slate-700 mt-1">Patient Vitals Encryption</div>
            </div>
            <div className="bg-gradient-to-b from-[#F3E8FF] to-white border border-[#E9D5FF] p-5 rounded-2xl text-center">
              <div className="text-xl font-extrabold text-[#6D28D9]">GDPR Ready</div>
              <div className="text-xs font-semibold text-slate-700 mt-1">Privacy by Design</div>
            </div>
          </div>

          {/* Responsible AI & Green Cloud Governance */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <div className="bg-gradient-to-b from-[#F8F3FF] to-white border border-[#E9D5FF] p-6 rounded-2xl space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#6D28D9] text-white flex items-center justify-center font-bold">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-base font-extrabold text-[#0F172A]">Responsible AI & LLM Governance</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Zero client data is ever used to train public foundational AI models. All GenAI endpoints employ strict data anonymization, anti-hallucination verification gates, and full code IP copyright indemnity.
              </p>
            </div>

            <div className="bg-gradient-to-b from-emerald-50/50 to-white border border-emerald-200 p-6 rounded-2xl space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold">
                <Server className="w-5 h-5" />
              </div>
              <h3 className="text-base font-extrabold text-[#0F172A]">Sustainable Green Cloud Computing</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Architected on 100% carbon-neutral AWS & Azure regions. Auto-scaling microservices minimize idle server energy draw, reducing energy footprint by up to 40% per compute cycle.
              </p>
            </div>
          </div>

          {/* Security Pillars Grid */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-[#0F172A]">Core Infrastructure Security Controls</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {securityPillars.map((p, idx) => {
                const Icon = p.icon;
                return (
                  <div key={idx} className="bg-[#FAFAFC] border border-slate-200 p-6 rounded-2xl space-y-3 hover:border-[#6D28D9] transition-all">
                    <div className="w-10 h-10 rounded-xl bg-[#F3E8FF] border border-[#E9D5FF] text-[#6D28D9] flex items-center justify-center font-bold">
                      <Icon className="w-5 h-5 text-[#6D28D9]" />
                    </div>
                    <h3 className="font-extrabold text-base text-[#0F172A]">{p.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{p.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Incident Response & Contact */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 text-white space-y-3">
            <div className="flex items-center gap-2 text-purple-400 font-bold text-xs uppercase tracking-wider">
              <AlertTriangle className="w-4 h-4 text-purple-400" />
              <span>Vulnerability Reporting & Incident Hotline</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              If you identify a security vulnerability or wish to report a security event regarding any WHY IT Services software application or cloud infrastructure API, please contact our Security Engineering Pod directly at <span className="text-purple-300 font-mono font-bold">security@whyservices.com</span>.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

