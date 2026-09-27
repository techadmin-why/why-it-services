import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, ArrowRight, CheckCircle2, ShieldCheck, 
  BarChart, Code2, Cpu, Database, Server, X, Activity
} from 'lucide-react';

export default function CaseStudies() {
  const [selectedCase, setSelectedCase] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedCase(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const categories = ['All', 'Care & Companion Tech', 'Healthcare & Life Sciences', 'Artificial Intelligence', 'Enterprise SaaS & Cloud'];

  const cases = [
    {
      id: 'case-1',
      title: 'WHY Companion & Dispatch Engine',
      category: 'Care & Companion Tech',
      badge: 'Flagship Platform',
      client: 'WHY Services Platform',
      summary: 'Real-time GPS companion matching engine connecting families with vetted support professionals.',
      problem: 'Manual dispatch and background verification caused long wait times and operational bottlenecks for companion assignments.',
      solution: 'Engineered an event-driven WebSocket dispatch engine integrated with automated background check verification APIs and Redis state caching.',
      results: [
        '85% Reduction in Dispatch Overhead',
        'Architecture Benchmarked & QA Verified',
        '99.4% Positive Family Rating'
      ],
      techStack: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'WebSockets', 'AWS Lambda'],
      architecture: 'Event-Driven WebSocket Microservices with Dual-DB Sync'
    },
    {
      id: 'case-2',
      title: 'HIPAA Patient Telemetry & Alert Platform',
      category: 'Healthcare & Life Sciences',
      badge: 'HIPAA & GRC Certified',
      client: 'Healthcare Network',
      summary: 'Real-time vital telemetry monitoring dashboard with encrypted alert triggers for medical teams.',
      problem: 'Legacy telemetry systems suffered from delayed alert triggers (>30s) and lacked SOC2 audit logging for patient vitals.',
      solution: 'Built an AWS KMS encrypted microservice telemetry pipeline ingesting IoT patient data streams with sub-2s alert triggers.',
      results: [
        '< 2s Telemetry Alert Latency',
        '100% Audit Trail Compliance',
        '99.99% Guaranteed SLA Uptime'
      ],
      techStack: ['Python FastAPI', 'AWS EKS', 'TimescaleDB', 'Docker', 'React', 'Datadog'],
      architecture: 'Encrypted IoT Stream Ingestion with Time-Series Storage'
    },
    {
      id: 'case-3',
      title: 'Generative AI & RPA Automation Suite',
      category: 'Artificial Intelligence',
      badge: 'GenAI & LLMs',
      client: 'Global Marketing & B2B Enterprise',
      summary: 'Multi-modal LLM content generation engine and attended RPA BOT workflow automation.',
      problem: 'High manual workload spent writing marketing copy and transferring unstructured invoice data into ERP systems.',
      solution: 'Implemented Large Language Model (LLM) qualitative extraction combined with unattended RPA BOTs for automated ERP entry.',
      results: [
        '65% Efficiency Gain via RPA BOTs',
        '3x Faster Release Cycles',
        '0% Manual Entry Error Rate'
      ],
      techStack: ['Python', 'OpenAI LLM API', 'LangChain', 'RPA Engine', 'PostgreSQL', 'Docker'],
      architecture: 'LLM Multi-Modal Orchestrator with RPA Automation Pipeline'
    },
    {
      id: 'case-4',
      title: 'Enterprise Legacy Monolith to Kubernetes Migration',
      category: 'Enterprise SaaS & Cloud',
      badge: 'Cloud Modernization',
      tagline: 'Legacy Refactoring & Cloud Automation',
      client: 'Enterprise Logistics Firm',
      summary: 'Zero-downtime migration of a legacy monolithic platform to cloud-native Kubernetes microservices.',
      problem: 'Heavy legacy monolithic codebase caused deployment delays, high cloud hosting costs, and frequent server downtime.',
      solution: 'Decomposed monolith into containerized Docker microservices, automated CI/CD pipelines via GitHub Actions, and deployed onto AWS EKS.',
      results: [
        '45% Cloud Hosting Cost Savings',
        'Zero-Downtime Live Migration',
        '100% Automated CI/CD Pipeline'
      ],
      techStack: ['Docker', 'Kubernetes (EKS)', 'Terraform', 'GitHub Actions', 'Node.js', 'PostgreSQL'],
      architecture: 'Containerized Kubernetes Microservices with IaC'
    }
  ];

  const filteredCases = cases.filter(c => activeCategory === 'All' || c.category === activeCategory);

  return (
    <div className="bg-[#FAFAFC] text-[#0F172A] pt-8 pb-20">
      
      {/* 1. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <div className="inline-flex items-center gap-2 bg-[#F3E8FF] border border-[#E9D5FF] text-[#6D28D9] px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6">
          <Sparkles className="w-4 h-4 text-[#6D28D9]" />
          Engineering Architecture Spotlights
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight mb-6">
          Enterprise Case Studies & <span className="italic font-normal text-[#6D28D9]">Technical Spotlights</span>
        </h1>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
          Explore how WHY IT Services delivers custom software, real-time data lakes, generative AI, and cloud modernization to drive operational growth.
        </p>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-2 mt-6">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                activeCategory === cat
                  ? 'bg-[#6D28D9] text-white shadow-md'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-[#F3E8FF] hover:text-[#6D28D9]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* 2. CASE STUDY CARDS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {filteredCases.map((c) => (
            <div
              key={c.id}
              onClick={() => setSelectedCase(c)}
              className="bg-gradient-to-b from-[#F3E8FF] via-[#F8F3FF] to-white border border-[#E9D5FF] rounded-3xl p-6 sm:p-8 shadow-sm hover:border-[#6D28D9] transition-all cursor-pointer group space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="bg-[#6D28D9] text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                    {c.badge}
                  </span>
                  <span className="text-xs font-semibold text-slate-500">{c.category}</span>
                </div>
                
                <h3 className="text-2xl font-extrabold text-[#0F172A] group-hover:text-[#6D28D9] transition-colors">
                  {c.title}
                </h3>
                
                <p className="text-xs text-slate-600 leading-relaxed">{c.summary}</p>

                <div className="space-y-2 pt-2 border-t border-slate-200/60">
                  <span className="text-[11px] font-bold text-[#0F172A] uppercase tracking-wider block mb-1">Key Results Delivered:</span>
                  {c.results.map((res, rIdx) => (
                    <div key={rIdx} className="flex items-center gap-2 text-xs font-bold text-[#6D28D9]">
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      <span>{res}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between text-xs font-bold text-[#6D28D9] group-hover:translate-x-1 transition-transform">
                <span>Inspect Architecture & Tech Stack</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. CASE STUDY DETAIL POPUP MODAL */}
      {selectedCase && (
        <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white border border-slate-200 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-10 shadow-2xl relative space-y-6">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedCase(null)}
              className="absolute top-6 right-6 text-slate-400 hover:text-[#6D28D9] bg-slate-100 hover:bg-slate-200 rounded-full p-2 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="border-b border-slate-200 pb-4 space-y-2">
              <span className="bg-[#F3E8FF] text-[#6D28D9] text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider border border-[#E9D5FF]">
                {selectedCase.badge}
              </span>
              <h2 className="text-3xl font-extrabold text-[#0F172A] pt-2">{selectedCase.title}</h2>
              <p className="text-xs font-semibold text-[#6D28D9]">Industry: {selectedCase.category}</p>
            </div>

            <div className="space-y-4 text-xs leading-relaxed text-slate-700">
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl">
                <h4 className="font-bold text-sm text-[#0F172A] mb-1">The Challenge / Problem</h4>
                <p>{selectedCase.problem}</p>
              </div>

              <div className="bg-gradient-to-b from-[#F3E8FF] to-white border border-[#E9D5FF] p-4 rounded-2xl">
                <h4 className="font-bold text-sm text-[#6D28D9] mb-1">Our Engineering Solution</h4>
                <p>{selectedCase.solution}</p>
              </div>

              <div>
                <h4 className="font-bold text-sm text-[#0F172A] mb-2">Verified Results</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {selectedCase.results.map((res, idx) => (
                    <div key={idx} className="bg-white border border-[#E9D5FF] p-3 rounded-xl text-center font-bold text-[#6D28D9]">
                      {res}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-bold text-sm text-[#0F172A] mb-2">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedCase.techStack.map((tech, idx) => (
                    <span key={idx} className="bg-[#0F172A] text-purple-300 font-mono text-[11px] px-3 py-1 rounded-lg">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 flex justify-end">
              <Link
                to="/contact"
                onClick={() => setSelectedCase(null)}
                className="bg-[#6D28D9] hover:bg-[#5B21B6] text-white text-xs font-bold px-6 py-3 rounded-xl transition-all shadow-md"
              >
                Schedule Architecture Review
              </Link>
            </div>

          </div>
        </div>
      )}

      {/* 4. BOTTOM CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-r from-[#5B21B6] via-[#6D28D9] to-[#4C1D95] rounded-3xl p-8 sm:p-12 text-white shadow-xl text-center">
          <h2 className="text-3xl font-extrabold mb-4">Want Similar Results for Your Business?</h2>
          <p className="text-purple-100 text-sm max-w-xl mx-auto mb-8">
            Speak directly with our solution architects to build a customized technical roadmap.
          </p>
          <Link
            to="/contact"
            className="bg-white hover:bg-purple-50 text-[#6D28D9] font-bold px-8 py-4 rounded-xl transition-all shadow-lg text-sm inline-block"
          >
            Request Free Technical Proposal
          </Link>
        </div>
      </section>

    </div>
  );
}
