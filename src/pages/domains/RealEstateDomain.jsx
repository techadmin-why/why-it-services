import React from 'react';
import { Link } from 'react-router-dom';
import { Building, ArrowRight, CheckCircle2, Sparkles, Home, Cpu, Key } from 'lucide-react';
import PartnerTicker from '../../components/PartnerTicker';

export default function RealEstateDomain() {
  const capabilities = [
    { title: 'PropTech Property Portals', desc: 'Custom MLS listing platforms with 3D virtual tour integrations and interactive floor plans.' },
    { title: 'Smart Building IoT Integration', desc: 'Telemetry dashboards for HVAC monitoring, occupancy tracking, and energy management.' },
    { title: 'Lease & Asset Management CRM', desc: 'Automated tenant onboarding, digital lease signing, and maintenance ticket tracking.' },
    { title: 'Real Estate Valuation Models', desc: 'Predictive machine learning algorithms analyzing market trends for automated property appraisal.' },
    { title: 'Smart Access & Gateways', desc: 'IoT smart lock integration, mobile keycard credentials, and visitor management.' },
    { title: 'Tenant Experience Mobile Apps', desc: 'Branded resident mobile apps for amenity booking, rent payments, and community messaging.' }
  ];

  const faqs = [
    { q: 'How does Smart Building IoT integration reduce commercial operating costs?', a: 'IoT occupancy and climate sensors dynamically optimize HVAC and lighting usage, reducing energy expenses by up to 20%.' },
    { q: 'Can your PropTech portals sync with regional MLS databases?', a: 'Yes, we build RETS and RESO Web API data sync bridges connecting MLS listings directly into your property portal.' }
  ];

  return (
    <div className="bg-[#FAFAFC] text-[#0F172A] min-h-screen">
      
      {/* 1. HERO SECTION WITH UNSPLASH IMAGE CARD */}
      <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 bg-[#F3E8FF] border border-[#E9D5FF] text-[#6D28D9] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
              <Building className="w-4 h-4 text-[#6D28D9]" />
              Real Estate & Smart Buildings Domain
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F172A] tracking-tight leading-[1.1]">
              PropTech & <span className="text-[#6D28D9]">Smart Building Tech</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Next-generation PropTech platforms, smart building IoT telemetry, and lease automation portals.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                to="/schedule-discovery"
                className="bg-gradient-to-r from-[#6D28D9] to-[#5B21B6] hover:from-[#5B21B6] hover:to-[#4C1D95] text-white font-extrabold px-8 py-4 rounded-xl text-xs uppercase tracking-wider shadow-lg flex items-center gap-2"
              >
                <span>Schedule PropTech Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop"
                alt="PropTech & Smart Architecture"
                className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/70 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="text-[10px] font-mono text-purple-300 font-bold uppercase tracking-wider">Smart Building IoT</span>
                <h3 className="text-lg font-bold text-white">HVAC Telemetry & MLS Listing Engines</h3>
                <p className="text-xs text-slate-300">RESO Web API sync & digital tenant portals.</p>
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
            <div className="text-4xl font-extrabold text-[#6D28D9]">20%</div>
            <div className="font-bold text-sm text-[#0F172A]">Energy Cost Reduction</div>
            <p className="text-xs text-slate-500">Smart IoT HVAC climate automation.</p>
          </div>
          <div className="bg-gradient-to-b from-[#F3E8FF] via-[#F8F3FF] to-white border border-[#E9D5FF] rounded-3xl p-8 text-center space-y-2 shadow-sm">
            <div className="text-4xl font-extrabold text-[#6D28D9]">RESO</div>
            <div className="font-bold text-sm text-[#0F172A]">Web API Standard</div>
            <p className="text-xs text-slate-500">Real-time MLS database property sync.</p>
          </div>
          <div className="bg-gradient-to-b from-[#F3E8FF] via-[#F8F3FF] to-white border border-[#E9D5FF] rounded-3xl p-8 text-center space-y-2 shadow-sm">
            <div className="text-4xl font-extrabold text-[#6D28D9]">100%</div>
            <div className="font-bold text-sm text-[#0F172A]">Digital Lease Automation</div>
            <p className="text-xs text-slate-500">Online tenant screening & payment portals.</p>
          </div>
        </div>
      </section>

      {/* 3. CAPABILITIES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#6D28D9] uppercase tracking-wider">PropTech Capabilities</span>
          <h2 className="text-3xl font-extrabold text-[#0F172A] mt-1">Real Estate & Smart Building Solutions</h2>
          <p className="text-xs text-slate-600 mt-2">Next-generation PropTech platforms, smart building IoT telemetry, and lease automation portals.</p>
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
          <h2 className="text-3xl font-extrabold text-white">Ready to Build Next-Gen PropTech Software?</h2>
          <p className="text-xs text-purple-100">Schedule a 1-on-1 discovery call with our PropTech software leads.</p>
          <Link to="/contact" className="inline-block bg-white text-[#6D28D9] font-extrabold text-xs px-8 py-4 rounded-xl uppercase shadow-md hover:bg-purple-50 transition-colors">
            Request PropTech Proposal -&gt;
          </Link>
        </div>
      </section>

    </div>
  );
}
