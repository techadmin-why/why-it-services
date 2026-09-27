import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  HeartHandshake, Stethoscope, Compass, Building2, 
  ArrowRight, ShieldCheck, CheckCircle2, Sparkles, 
  Bot, Database, Activity, Lock, Cpu, Server
} from 'lucide-react';

export default function Solutions() {
  const [activeDomain, setActiveDomain] = useState('family-care');
  const [pipelineStage, setPipelineStage] = useState(0);
  const [matrixMode, setMatrixMode] = useState('industry'); // 'industry' | 'capability'

  const domains = [
    {
      id: 'family-care',
      title: 'Family & Companion Support Ecosystems',
      badge: 'WHY Companion Platform',
      tagline: 'Connecting Families with Verified Companion Care & Support',
      description: 'Engineered as a high-trust digital bridge connecting individuals with vetted companion professionals for home support, travel accompaniment, and active daily engagement.',
      capabilities: [
        'Real-time GPS-assisted companion matching & dispatch',
        'Multi-tiered identity verification & background checks',
        'Secure in-app chat, call, and emergency protocols',
        'Automated time tracking & transparent family reporting'
      ],
      impactMetrics: [
        { value: '100%', label: 'Dedicated Focus' },
        { value: 'Zero', label: 'Legacy Tech Debt' },
        { value: '99.4%', label: 'Positive Family Rating' }
      ],
      architecture: 'Event-driven WebSocket architecture with Redis state caching & PostgreSQL audit logs.'
    },
    {
      id: 'healthcare',
      title: 'Healthcare & Senior Wellness Tech',
      badge: 'HIPAA & GRC Aligned',
      tagline: 'Digital Health Telemetry & Remote Wellness Monitoring',
      description: 'Developing secure telemetry dashboards, appointment schedulers, and remote monitoring tools that give healthcare teams and families continuous visibility into patient wellbeing.',
      capabilities: [
        'Secure patient vitals telemetry & alert triggers',
        'HIPAA & GRC compliant document sharing & consent forms',
        'Automated medication & check-in reminder engines',
        'Integration with electronic health records (EHR)'
      ],
      impactMetrics: [
        { value: '< 2s', label: 'Telemetry Alert Latency' },
        { value: '100%', label: 'Audit Trail Coverage' },
        { value: '24/7', label: 'System Uptime SLA' }
      ],
      architecture: 'Encrypted microservices pipeline using AWS KMS encryption and role-based access control.'
    },
    {
      id: 'ai-automation',
      title: 'Intelligent Automation & Generative AI',
      badge: 'GenAI & RPA BOTs',
      tagline: 'RPA Workflows, Attended/Unattended BOTs & LLM Insights',
      description: 'Automating high-volume business workflows, social content creation, and data extraction using Large Language Models (LLMs) and RPA automation bots.',
      capabilities: [
        'Attended & Unattended BOT workflow automation',
        'LLM-driven qualitative insight extraction & analysis',
        'AI-assisted software development lifecycle (SDLC)',
        'Low-Code / No-Code business process automation'
      ],
      impactMetrics: [
        { value: '65%', label: 'Efficiency Gain via BOTs' },
        { value: '3x', label: 'Faster Content Generation' },
        { value: '0%', label: 'Manual Data Extraction Errors' }
      ],
      architecture: 'Multi-modal LLM API orchestrator integrated with enterprise RPA task engines.'
    },
    {
      id: 'enterprise',
      title: 'Enterprise Digital Modernisation & Data Lakes',
      badge: 'Managed Infra & ETL',
      tagline: 'Legacy Refactoring, Real-Time Data Lakes & GRC Risk Compliance',
      description: 'Helping established enterprises modernize legacy software stacks, automate manual operations, build real-time ETL data lakes, and manage IT infrastructure under strict GRC compliance.',
      capabilities: [
        'Legacy monolithic system decomposition & refactoring',
        'Real-time data lake ingestion & ETL orchestration',
        '24/7 L1/L2 Infrastructure Managed Services',
        'IT Governance & Risk Management (GRC) implementation'
      ],
      impactMetrics: [
        { value: 'Agile', label: 'Founding Tech Lead Pods' },
        { value: '45%', label: 'Avg Ops Cost Optimization' },
        { value: '99.99%', label: 'Infrastructure Availability' }
      ],
      architecture: 'Containerised Docker microservices orchestrated via Kubernetes on multi-AZ AWS infrastructure.'
    }
  ];

  const capabilityMatrix = [
    {
      title: 'Generative AI & LLM Agents',
      stack: 'OpenAI, Claude 3.5, LangChain, PyTorch, vLLM',
      focus: 'Enterprise RAG, Automated Document QA, AI Customer Support & Code Gen',
      sla: '99.9% Model Availability'
    },
    {
      title: 'Cloud Native & Microservices',
      stack: 'AWS EKS, Docker, NestJS, Spring Boot, Go',
      focus: 'Distributed Architectures, Zero-Downtime CI/CD, High-Throughput REST',
      sla: '99.99% Cloud SLA'
    },
    {
      title: 'Real-Time Data Lakes & ETL',
      stack: 'PostgreSQL, Redis, Snowflake, Apache Spark, Kafka',
      focus: 'Streaming Telemetry, Data Normalization, BI Dashboarding',
      sla: '< 50ms Query Latency'
    },
    {
      title: 'Enterprise GRC & Cyber Resilience',
      stack: 'ISO 27001, SOC 2, AWS KMS, OAuth2, Vault',
      focus: 'Zero-Trust Role-Based Access, SAST/DAST Auditing, End-to-End Encryption',
      sla: '100% Audit Compliance'
    }
  ];

  const activeData = domains.find(d => d.id === activeDomain) || domains[0];

  const pipelineSteps = [
    { title: '1. Strategy & Discovery', desc: 'Assess AI/ML suitability, data compliance, and technical debt.' },
    { title: '2. Verification Gate', desc: 'Automated QA verification & validation testing.' },
    { title: '3. Data Lake Ingestion', desc: 'Structured & unstructured real-time ETL data pipeline.' },
    { title: '4. AI & RPA Execution', desc: 'LLM insights generation & RPA BOT task execution.' },
    { title: '5. Managed Infra Operations', desc: '24/7 L1/L2 support, monitoring, and failover.' }
  ];

  return (
    <div className="bg-[#FAFAFC] text-[#0F172A] pt-8 pb-20">
      
      {/* 1. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="inline-flex items-center gap-2 bg-[#F3E8FF] border border-[#E9D5FF] text-[#6D28D9] px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6">
          <Sparkles className="w-4 h-4 text-[#6D28D9]" />
          Purpose-Built Solutions
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight mb-6">
          Industry Solutions Built for <span className="text-[#6D28D9]">Sustainable Growth</span>
        </h1>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
          Combining digital strategy, enterprise engineering, data lake analytics, generative AI, and managed infrastructure across high-trust domains.
        </p>

        {/* Matrix View Selector Toggle */}
        <div className="inline-flex items-center p-1.5 bg-[#F3E8FF] border border-[#E9D5FF] rounded-2xl shadow-inner">
          <button
            onClick={() => setMatrixMode('industry')}
            className={`px-5 py-2 rounded-xl text-xs font-bold transition-all ${
              matrixMode === 'industry'
                ? 'bg-[#6D28D9] text-white shadow-md'
                : 'text-[#6D28D9] hover:bg-white/50'
            }`}
          >
            By Industry Domains
          </button>
          <button
            onClick={() => setMatrixMode('capability')}
            className={`px-5 py-2 rounded-xl text-xs font-bold transition-all ${
              matrixMode === 'capability'
                ? 'bg-[#6D28D9] text-white shadow-md'
                : 'text-[#6D28D9] hover:bg-white/50'
            }`}
          >
            By Tech Capability Matrix
          </button>
        </div>
      </section>

      {/* 2. DOMAIN OR CAPABILITY SELECTOR */}
      {matrixMode === 'industry' ? (
        <>
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {domains.map((dom) => {
                const isSelected = activeDomain === dom.id;
                return (
                  <button
                    key={dom.id}
                    onClick={() => setActiveDomain(dom.id)}
                    className={`text-left p-6 rounded-3xl border transition-all ${
                      isSelected
                        ? 'bg-gradient-to-b from-[#F3E8FF] via-[#F8F3FF] to-white border-[#6D28D9] shadow-md ring-2 ring-[#6D28D9]/20'
                        : 'bg-white border-slate-200 hover:bg-[#F3E8FF]/40 hover:border-[#E9D5FF] shadow-sm'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-bold text-[#6D28D9] bg-[#F3E8FF] px-2.5 py-1 rounded-full border border-[#E9D5FF]">
                        {dom.badge}
                      </span>
                    </div>
                    <h3 className="font-bold text-base text-[#0F172A] mb-1">{dom.title}</h3>
                    <p className="text-xs text-slate-500 line-clamp-2">{dom.tagline}</p>
                  </button>
                );
              })}
            </div>
          </section>

          {/* 3. SELECTED DOMAIN DETAIL DISPLAY */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="bg-gradient-to-b from-[#F8F3FF] via-white to-[#FAFAFC] border border-[#E9D5FF] rounded-3xl p-6 sm:p-10 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <span className="text-xs font-bold text-[#6D28D9] uppercase tracking-wider">Solution Architecture</span>
                    <h2 className="text-3xl font-extrabold text-[#0F172A] mt-1">{activeData.title}</h2>
                    <p className="text-sm font-semibold text-[#6D28D9] mt-1">{activeData.tagline}</p>
                    <p className="text-slate-600 mt-3 text-sm leading-relaxed">{activeData.description}</p>
                  </div>

                  <div>
                    <h3 className="text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-3">Key Solution Features</h3>
                    <div className="space-y-2.5">
                      {activeData.capabilities.map((cap, idx) => (
                        <div key={idx} className="flex items-center gap-3 bg-gradient-to-b from-[#F3E8FF]/60 to-white border border-[#E9D5FF] p-3.5 rounded-2xl">
                          <CheckCircle2 className="w-4 h-4 text-[#6D28D9] shrink-0" />
                          <span className="text-xs font-semibold text-slate-700">{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white border border-slate-200 p-4 rounded-2xl">
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">Architecture Standard</span>
                    <p className="text-xs font-mono text-slate-700">{activeData.architecture}</p>
                  </div>
                </div>

                {/* Impact & Architecture Image Card */}
                <div className="lg:col-span-5 relative rounded-3xl overflow-hidden shadow-xl border border-[#E9D5FF] group">
                  <img 
                    src={
                      activeData.id === 'family-care' ? 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80' :
                      activeData.id === 'healthcare' ? 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=80' :
                      activeData.id === 'ai-automation' ? 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=1200&q=80' :
                      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80'
                    } 
                    alt={activeData.title} 
                    className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/20 to-transparent flex flex-col justify-end p-6 text-white space-y-1">
                    <div className="text-xs font-mono font-bold text-purple-300 uppercase tracking-wider">{activeData.badge}</div>
                    <div className="text-base font-extrabold">{activeData.title}</div>
                    <div className="text-[11px] text-slate-300">Targeted enterprise architecture & agile delivery</div>
                  </div>
                </div>

              </div>
            </div>
          </section>
        </>
      ) : (
        /* CAPABILITY MATRIX GRID */
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {capabilityMatrix.map((item, idx) => (
              <div key={idx} className="bg-white border border-[#E9D5FF] p-6 sm:p-8 rounded-3xl shadow-sm hover:border-[#6D28D9] transition-all space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold bg-[#6D28D9] text-white px-3 py-1 rounded-full uppercase">
                    Core Capability #{idx + 1}
                  </span>
                  <span className="text-xs font-mono font-bold text-emerald-600">{item.sla}</span>
                </div>
                <h3 className="text-xl font-extrabold text-[#0F172A]">{item.title}</h3>
                <div className="text-xs font-mono text-purple-950 bg-[#F8F3FF] p-3 rounded-xl border border-[#E9D5FF]">
                  {item.stack}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{item.focus}</p>
                <div className="pt-3 border-t border-slate-100 flex justify-end">
                  <Link to="/contact" className="text-xs font-bold text-[#6D28D9] hover:underline flex items-center gap-1">
                    Request Custom Specs <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 4. INTERACTIVE WORKFLOW PIPELINE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-[#0F172A] rounded-3xl p-8 sm:p-12 text-white border border-slate-800 shadow-xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-purple-400 uppercase tracking-wider">Enterprise Transformation Engine</span>
            <h2 className="text-3xl font-extrabold mt-1">5-Step Solution Pipeline</h2>
            <p className="text-slate-400 text-sm mt-2">Interactive walkthrough of how WHY IT Services executes transformation pipelines.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 mb-8">
            {pipelineSteps.map((step, idx) => (
              <button
                key={idx}
                onClick={() => setPipelineStage(idx)}
                className={`p-4 rounded-xl text-left border transition-all ${
                  pipelineStage === idx
                    ? 'bg-[#6D28D9] border-purple-400 text-white shadow-lg'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:bg-slate-850'
                }`}
              >
                <div className="text-[10px] font-mono uppercase tracking-wider mb-1 opacity-80">Phase 0{idx + 1}</div>
                <div className="text-xs font-bold truncate">{step.title.split('. ')[1]}</div>
              </button>
            ))}
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-800/50">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                ACTIVE PIPELINE PHASE #{pipelineStage + 1}
              </div>
              <h3 className="text-xl font-bold">{pipelineSteps[pipelineStage].title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed">{pipelineSteps[pipelineStage].desc}</p>
            </div>
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs font-mono text-purple-300 w-full sm:w-auto min-w-[240px]">
              <div>status: 200_OK</div>
              <div>leadership: FOUNDING_LEADS</div>
              <div>audit: GRC_PASSED</div>
              <div>sla: 99.99_PERCENT</div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. BOTTOM CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-r from-[#5B21B6] via-[#6D28D9] to-[#4C1D95] rounded-3xl p-8 sm:p-12 text-white shadow-xl text-center">
          <h2 className="text-3xl font-extrabold mb-4">Have an Enterprise Challenge to Solve?</h2>
          <p className="text-purple-100 text-sm max-w-xl mx-auto mb-8">
            Our engineering team builds custom solution pipelines tailored precisely to your domain needs.
          </p>
          <Link
            to="/contact"
            className="bg-white hover:bg-purple-50 text-[#6D28D9] font-bold px-8 py-4 rounded-xl transition-all shadow-lg text-sm inline-block"
          >
            Get Started with WHY IT Services
          </Link>
        </div>
      </section>

    </div>
  );
}

