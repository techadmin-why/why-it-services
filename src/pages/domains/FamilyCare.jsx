import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, ArrowRight, ShieldCheck, Activity, Users, Lock, CheckCircle2, PhoneCall, Sparkles, Cpu, Database, HelpCircle
} from 'lucide-react';
import PartnerTicker from '../../components/PartnerTicker';

export default function FamilyCare() {
  const features = [
    { title: 'Assistive Care Telemetry', desc: 'Real-time vital monitoring and fall detection pipelines for family members and senior wellness.' },
    { title: 'Verified Companion Matching', desc: 'Background-checked, certified caregiver network with smart location-based dispatch.' },
    { title: 'Emergency Escalation Loops', desc: 'Automated 24/7 paging, SMS alerts, and direct medical responder integration.' },
    { title: 'HIPAA-Compliant Health Data', desc: 'End-to-end encrypted medical telemetry storage complying with strict healthcare GRC guidelines.' },
    { title: 'Family Dashboard & Notifications', desc: 'Transparent real-time status updates, caregiver visit logs, and activity reports for family members.' },
    { title: 'IoT Device Integration', desc: 'Seamless pairing with smart wearable sensors, pulse oximeters, and home emergency buttons.' }
  ];

  const faqs = [
    { q: 'How does WHY IT Services handle family health data privacy?', a: 'All patient vitals and health records are encrypted at rest (AES-256) and in transit (TLS 1.3) with strict HIPAA compliance.' },
    { q: 'Can this care platform integrate with existing hospital EHR systems?', a: 'Yes, our platform supports HL7 and FHIR standards for seamless data exchange with hospital health records.' }
  ];

  return (
    <div className="bg-[#FAFAFC] text-[#0F172A] min-h-screen">
      
      {/* 1. HERO SECTION WITH UNSPLASH IMAGE CARD */}
      <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 bg-[#F3E8FF] border border-[#E9D5FF] text-[#6D28D9] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
              <Heart className="w-4 h-4 text-[#6D28D9]" />
              WHY Family Ecosystem Solution
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F172A] tracking-tight leading-[1.1]">
              Family Ecosystem & <span className="text-[#6D28D9]">Companion Care</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Connecting families with verified companion care, real-time telemetry, and senior wellness monitoring powered by enterprise digital engineering.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                to="/schedule-discovery"
                className="bg-gradient-to-r from-[#6D28D9] to-[#5B21B6] hover:from-[#5B21B6] hover:to-[#4C1D95] text-white font-extrabold px-8 py-4 rounded-xl text-xs uppercase tracking-wider shadow-lg flex items-center gap-2"
              >
                <span>Schedule Family Care Demo</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group">
              <img
                src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=1000&auto=format&fit=crop"
                alt="Family Companion Care Tech"
                className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="text-[10px] font-mono text-purple-300 font-bold uppercase tracking-wider">Assistive Care Telemetry</span>
                <h3 className="text-lg font-bold">WHY Companion Care Platform</h3>
                <p className="text-xs text-slate-300">Real-time GPS dispatch & encrypted family vital logs.</p>
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
            <div className="text-4xl font-extrabold text-[#6D28D9]">100%</div>
            <div className="font-bold text-sm text-[#0F172A]">Vetted Caregiver Identity</div>
            <p className="text-xs text-slate-500">Integrated background checks & credential verification.</p>
          </div>
          <div className="bg-gradient-to-b from-[#F3E8FF] via-[#F8F3FF] to-white border border-[#E9D5FF] rounded-3xl p-8 text-center space-y-2 shadow-sm">
            <div className="text-4xl font-extrabold text-[#6D28D9]">&lt; 2s</div>
            <div className="font-bold text-sm text-[#0F172A]">Emergency Alert Latency</div>
            <p className="text-xs text-slate-500">Real-time WebSocket telemetry and automated escalation.</p>
          </div>
          <div className="bg-gradient-to-b from-[#F3E8FF] via-[#F8F3FF] to-white border border-[#E9D5FF] rounded-3xl p-8 text-center space-y-2 shadow-sm">
            <div className="text-4xl font-extrabold text-[#6D28D9]">HIPAA</div>
            <div className="font-bold text-sm text-[#0F172A]">Compliance Certified</div>
            <p className="text-xs text-slate-500">End-to-end KMS encryption & RBAC audit logging.</p>
          </div>
        </div>
      </section>

      {/* 3. CAPABILITIES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#6D28D9] uppercase tracking-wider">Domain Features</span>
          <h2 className="text-3xl font-extrabold text-[#0F172A] mt-1">Core Family Care Platform Capabilities</h2>
          <p className="text-xs text-slate-600 mt-2">Built for enterprise health networks, senior care providers, and family dispatch platforms.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, idx) => (
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
          <h2 className="text-3xl font-extrabold">Interested in Deploying Family Care Solutions?</h2>
          <p className="text-xs text-purple-100">Talk to our healthcare digital engineering leads today for a custom architecture review.</p>
          <Link to="/contact" className="inline-block bg-white text-[#6D28D9] font-extrabold text-xs px-8 py-4 rounded-xl uppercase shadow-md hover:bg-purple-50 transition-colors">
            Contact Health Tech Team -&gt;
          </Link>
        </div>
      </section>

    </div>
  );
}
