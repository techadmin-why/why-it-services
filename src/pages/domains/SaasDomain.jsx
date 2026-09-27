import React from 'react';
import { Link } from 'react-router-dom';
import { Database, ArrowRight, CheckCircle2, Layers, Sparkles, Cpu, Server, Lock } from 'lucide-react';
import PartnerTicker from '../../components/PartnerTicker';

export default function SaasDomain() {
  const capabilities = [
    { title: 'Multi-Tenant SaaS Architecture', desc: 'Secure data isolation, dynamic tenant provisioning, and billing subscription integrations.' },
    { title: 'Cloud Data Lakes & Lakehouses', desc: 'Snowflake and Databricks analytical data lakes supporting millions of queries per second.' },
    { title: 'API Gateway & Developer Portals', desc: 'RESTful and GraphQL API monetization frameworks with automated rate limiting and analytics.' },
    { title: 'Enterprise SSO & RBAC', desc: 'SAML 2.0, OAuth2, and Okta integration enforcing role-based enterprise access control.' },
    { title: 'Usage-Based Billing Engines', desc: 'Automated meter tracking for Stripe, Metronome, and Togai subscription billing.' },
    { title: 'Real-Time Telemetry & APM', desc: 'Datadog and OpenTelemetry instrumentation for instant performance monitoring.' }
  ];

  const faqs = [
    { q: 'How do you structure multi-tenant database isolation?', a: 'We offer schema-per-tenant, database-per-tenant, or shared database with row-level security (RLS) policies depending on enterprise requirements.' },
    { q: 'Which cloud data warehouses do your SaaS platforms integrate with?', a: 'We specialize in Snowflake, Databricks, BigQuery, and AWS Redshift with dbt transformation pipelines.' }
  ];

  return (
    <div className="bg-[#FAFAFC] text-[#0F172A] min-h-screen">
      
      {/* 1. HERO SECTION WITH UNSPLASH IMAGE CARD */}
      <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 bg-[#F3E8FF] border border-[#E9D5FF] text-[#6D28D9] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
              <Layers className="w-4 h-4 text-[#6D28D9]" />
              Enterprise SaaS & Data Lakes Domain
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F172A] tracking-tight leading-[1.1]">
              Enterprise SaaS & <span className="text-[#6D28D9]">Cloud Data Lakes</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Building high-throughput B2B SaaS applications, data lakehouse platforms, and API ecosystems.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                to="/schedule-discovery"
                className="bg-gradient-to-r from-[#6D28D9] to-[#5B21B6] hover:from-[#5B21B6] hover:to-[#4C1D95] text-white font-extrabold px-8 py-4 rounded-xl text-xs uppercase tracking-wider shadow-lg flex items-center gap-2"
              >
                <span>Schedule SaaS Architecture Call</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop"
                alt="Enterprise SaaS & Data Analytics"
                className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="text-[10px] font-mono text-purple-300 font-bold uppercase tracking-wider">Multi-Tenant Cloud</span>
                <h3 className="text-lg font-bold">Snowflake & Databricks Stack</h3>
                <p className="text-xs text-slate-300">Sub-second query speeds & enterprise SSO security.</p>
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
            <div className="font-bold text-sm text-[#0F172A]">Tenant Data Isolation</div>
            <p className="text-xs text-slate-500">Strict RLS policies & encryption per tenant.</p>
          </div>
          <div className="bg-gradient-to-b from-[#F3E8FF] via-[#F8F3FF] to-white border border-[#E9D5FF] rounded-3xl p-8 text-center space-y-2 shadow-sm">
            <div className="text-4xl font-extrabold text-[#6D28D9]">4x</div>
            <div className="font-bold text-sm text-[#0F172A]">Faster Query Speeds</div>
            <p className="text-xs text-slate-500">Optimized dbt data lakehouse indexing.</p>
          </div>
          <div className="bg-gradient-to-b from-[#F3E8FF] via-[#F8F3FF] to-white border border-[#E9D5FF] rounded-3xl p-8 text-center space-y-2 shadow-sm">
            <div className="text-4xl font-extrabold text-[#6D28D9]">99.99%</div>
            <div className="font-bold text-sm text-[#0F172A]">API Availability SLA</div>
            <p className="text-xs text-slate-500">Zero-downtime microservice deployments.</p>
          </div>
        </div>
      </section>

      {/* 3. CAPABILITIES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#6D28D9] uppercase tracking-wider">SaaS Capabilities</span>
          <h2 className="text-3xl font-extrabold text-[#0F172A] mt-1">Enterprise SaaS Platform Engineering</h2>
          <p className="text-xs text-slate-600 mt-2">Designing scalable multi-tenant SaaS applications, analytics data lakes, and API platforms.</p>
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
          <h2 className="text-3xl font-extrabold">Ready to Build Scalable B2B SaaS Software?</h2>
          <p className="text-xs text-purple-100">Schedule a technical consultation with our enterprise SaaS solution architects.</p>
          <Link to="/contact" className="inline-block bg-white text-[#6D28D9] font-extrabold text-xs px-8 py-4 rounded-xl uppercase shadow-md hover:bg-purple-50 transition-colors">
            Request SaaS Proposal -&gt;
          </Link>
        </div>
      </section>

    </div>
  );
}
