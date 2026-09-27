import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, ArrowRight, ShieldCheck, CheckCircle2, HeartPulse, Sparkles, Database, Lock } from 'lucide-react';
import PartnerTicker from '../../components/PartnerTicker';

export default function HealthcareDomain() {
  const capabilities = [
    { title: 'Telehealth & EHR Systems', desc: 'Custom HIPAA-compliant electronic health record portals and encrypted video consultation apps.' },
    { title: 'Remote Patient Telemetry', desc: 'IoT medical device streaming architectures with real-time anomaly detection alerts.' },
    { title: 'Medical Data Lakehouse', desc: 'Unified FHIR / HL7 data lakes with automated patient record indexing and AI diagnostics.' },
    { title: 'Clinical Workflow Automation', desc: 'Automate prescription routing, billing verification, and appointment scheduling.' },
    { title: 'Medical Device Telemetry (IoT)', desc: 'Sub-second real-time streaming of patient vital signs to nursing station dashboards.' },
    { title: 'Healthcare GRC & Compliance', desc: 'Rigorous role-based access controls (RBAC), KMS encryption, and SOC2 audit logging.' }
  ];

  const faqs = [
    { q: 'How do you maintain HIPAA compliance across health applications?', a: 'We enforce end-to-end TLS 1.3 encryption, database KMS field-level encryption, role-based access controls, and immutable audit logs.' },
    { q: 'What medical data protocols do your engineers support?', a: 'Our data pipelines natively ingest and transform HL7, FHIR v4, DICOM medical imaging, and CDA data standards.' }
  ];

  return (
    <div className="bg-[#FAFAFC] text-[#0F172A] min-h-screen">
      
      {/* 1. HERO SECTION WITH UNSPLASH IMAGE CARD */}
      <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 bg-[#F3E8FF] border border-[#E9D5FF] text-[#6D28D9] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
              <HeartPulse className="w-4 h-4 text-[#6D28D9]" />
              Healthcare & Telemetry Domain
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F172A] tracking-tight leading-[1.1]">
              Healthcare Systems & <span className="text-[#6D28D9]">Remote Telemetry</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Transforming clinical workflows, telehealth systems, and medical data pipelines with enterprise HIPAA security.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                to="/schedule-discovery"
                className="bg-gradient-to-r from-[#6D28D9] to-[#5B21B6] hover:from-[#5B21B6] hover:to-[#4C1D95] text-white font-extrabold px-8 py-4 rounded-xl text-xs uppercase tracking-wider shadow-lg flex items-center gap-2"
              >
                <span>Schedule Health Tech Discovery</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop"
                alt="Healthcare & Clinical Technology"
                className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="text-[10px] font-mono text-purple-300 font-bold uppercase tracking-wider">HIPAA Compliant Cloud</span>
                <h3 className="text-lg font-bold">Telehealth & Remote Vitals</h3>
                <p className="text-xs text-slate-300">FHIR data pipelines, video consultations & sub-second alerts.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PartnerTicker />

      {/* 2. IMPACT METRICS BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-b from-[#F3E8FF] via-[#F8F3FF] to-white border border-[#E9D5FF] rounded-3xl p-8 text-center space-y-2 shadow-sm">
            <div className="text-4xl font-extrabold text-[#6D28D9]">&lt; 2s</div>
            <div className="font-bold text-sm text-[#0F172A]">Telemetry Latency</div>
            <p className="text-xs text-slate-500">Sub-2s anomaly alert triggers for medical teams.</p>
          </div>
          <div className="bg-gradient-to-b from-[#F3E8FF] via-[#F8F3FF] to-white border border-[#E9D5FF] rounded-3xl p-8 text-center space-y-2 shadow-sm">
            <div className="text-4xl font-extrabold text-[#6D28D9]">100%</div>
            <div className="font-bold text-sm text-[#0F172A]">Audit Trail Coverage</div>
            <p className="text-xs text-slate-500">Immutable patient record access logging.</p>
          </div>
          <div className="bg-gradient-to-b from-[#F3E8FF] via-[#F8F3FF] to-white border border-[#E9D5FF] rounded-3xl p-8 text-center space-y-2 shadow-sm">
            <div className="text-4xl font-extrabold text-[#6D28D9]">FHIR</div>
            <div className="font-bold text-sm text-[#0F172A]">Standard Ingestion</div>
            <p className="text-xs text-slate-500">Seamless EHR inter-operability integration.</p>
          </div>
        </div>
      </section>

      {/* 3. CAPABILITIES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#6D28D9] uppercase tracking-wider">Health Offerings</span>
          <h2 className="text-3xl font-extrabold text-[#0F172A] mt-1">Healthcare & Life Sciences Capabilities</h2>
          <p className="text-xs text-slate-600 mt-2">Engineering secure telehealth platforms, clinical portals, and IoT medical pipelines.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((item, idx) => (
            <div key={idx} className="bg-white border border-[#E9D5FF] rounded-3xl p-6 shadow-sm hover:border-[#6D28D9] transition-all space-y-3">
              <div className="w-8 h-8 rounded-xl bg-[#6D28D9] text-white flex items-center justify-center font-bold text-xs">
                0{idx + 1}
              </div>
              <h3 className="font-bold text-base text-[#0F172A]">{item.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. FAQS */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-extrabold text-[#0F172A] text-center mb-8">Domain FAQs</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white border border-[#E9D5FF] rounded-2xl p-6 shadow-sm space-y-2">
              <h3 className="font-bold text-sm text-[#0F172A]">{faq.q}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. CTA */}
      <section className="bg-gradient-to-r from-[#5B21B6] via-[#6D28D9] to-[#4C1D95] text-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <h2 className="text-3xl font-extrabold">Ready to Modernize Your Healthcare Systems?</h2>
          <p className="text-xs text-purple-100">Schedule a 1-on-1 architecture call with our healthcare technology specialists.</p>
          <Link to="/contact" className="inline-block bg-white text-[#6D28D9] font-extrabold text-xs px-8 py-4 rounded-xl uppercase shadow-md hover:bg-purple-50 transition-colors">
            Request Health Tech Proposal -&gt;
          </Link>
        </div>
      </section>

    </div>
  );
}
