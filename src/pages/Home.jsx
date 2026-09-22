import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Compass, Code2, Database, Bot, Server, 
  ArrowRight, CheckCircle2, ShieldCheck, Sparkles, 
  Zap, Layers, Terminal, Activity, Users, Cpu, Quote, Check, FileCode, Sliders
} from 'lucide-react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('digital-strategy');
  const [selectedCase, setSelectedCase] = useState(null);

  const pillars = [
    {
      id: 'digital-strategy',
      title: 'Digital Strategy',
      quote: 'Vision and Strategy before Execution',
      icon: Compass,
      tagline: 'Strategic Roadmaps & Technical Audits',
      description: 'Discovery, ideation, experience engineering, technology & data audits, and GRC risk implementation to align technology with business goals.',
      deliverables: [
        'Discovery & Ideation Roadmaps',
        'Experience Engineering & Prototypes',
        'Technology & Data Compliance Audits',
        'Application Rationalization & GRC'
      ],
      metrics: { metric: '200+', label: 'Person-Years Executive Leadership' },
      snippet: `// Digital Strategy Audit Matrix
export const StrategyMatrix = {
  phase: 'DISCOVERY_AND_IDEATION',
  readinessScore: 94.8,
  aiIntegrationPotential: 'HIGH',
  governanceCompliance: 'GRC_SOC2_ALIGNED'
};`
    },
    {
      id: 'digital-engineering',
      title: 'Digital Engineering',
      quote: 'Digitize to Transform',
      icon: Code2,
      tagline: 'Enterprise Buildout & QA Verification',
      description: 'End-to-end web & mobile application development, legacy code refactoring, QA verification & validation, and concurrent engineering.',
      deliverables: [
        'Enterprise App Buildout & Deployment',
        'Verification & Validation (QA Engineering)',
        'Application Sustenance & Support',
        'Model-Based Engineering & Migration'
      ],
      metrics: { metric: '99.99%', label: 'Guaranteed System SLA Uptime' },
      snippet: `// Enterprise Microservice Handler
export async function processEnterpriseTask(event: AppEvent) {
  const verified = await QAEngine.validatePayload(event);
  if (!verified.isValid) throw new ValidationError(verified.errors);
  return await DeploymentPipeline.execute(event);
}`
    },
    {
      id: 'data-engineering',
      title: 'Data Engineering & Analytics',
      quote: 'Harness the power of data to serve and enhance user experiences.',
      icon: Database,
      tagline: 'Data Lakes, ETL Pipelines & BI Analytics',
      description: 'Building robust ingestion layers for structured/unstructured sources, real-time data lakes, ETL orchestration, and predictive analytics models.',
      deliverables: [
        'Data Lake & Pipeline Ingestion (Structured/Unstructured)',
        'Real-Time ETL & Data Orchestration',
        'Data Modeling & BI Visualization Dashboards',
        'Predictive Analytics & Data Monetization'
      ],
      metrics: { metric: '< 50ms', label: 'Real-Time Pipeline Ingestion Latency' },
      snippet: `# Real-Time Data Lake Pipeline (ETL)
def process_data_stream(stream_event):
    cleaned = transform_outliers(stream_event.raw)
    data_lake.write_batch(cleaned, partition_key='timestamp')
    predictive_ml.trigger_scoring(cleaned)`
    },
    {
      id: 'generative-ai',
      title: 'Generative AI & Automation',
      quote: 'Make Intelligence readily available',
      icon: Bot,
      tagline: 'LLMs, AI SDLC & Intelligent Automation',
      description: 'Leveraging Large Language Models, AI-driven software development lifecycles, content generation models, and RPA attended/unattended BOTs.',
      deliverables: [
        'LLM Fine-Tuning & Multi-Modal Models',
        'AI-Driven SDLC & Code Generation',
        'RPA & Workflow Automation (Attended/Unattended BOTs)',
        'Low-Code / No-Code Enterprise Automation'
      ],
      metrics: { metric: '3x', label: 'Faster Feature SDLC Execution' },
      snippet: `// AI-Driven SDLC Pipeline
const AIAutomation = {
  model: 'LLM_CODE_GEN_V4',
  autofixSyntax: true,
  rpaBotStatus: 'ATTENDED_BOT_ACTIVE',
  taskEfficiencyGain: '65%'
};`
    },
    {
      id: 'infrastructure-services',
      title: 'Infrastructure Managed Services',
      quote: 'Manage your infrastructure for them to manage your business',
      icon: Server,
      tagline: '24/7 Managed Infra, Cloud & Datacenter Support',
      description: 'Comprehensive IT infrastructure optimization, datacenter management, L1/L2 support, and continuous automated backup monitoring.',
      deliverables: [
        '24/7 Datacenter & Cloud Management',
        'L1 & L2 Support Operations',
        'Infrastructure Cost Optimization',
        'Proactive Incident Response & Failover'
      ],
      metrics: { metric: '24/7/365', label: 'Continuous Ops Support' },
      snippet: `# Infrastructure Managed Operations
services:
  datacenter_support: 'ACTIVE_L2'
  failover_automation: 'ENABLED'
  cost_optimization: 'SAVINGS_35_PERCENT'`
    }
  ];

  const activePillar = pillars.find(p => p.id === activeTab) || pillars[0];

  return (
    <div className="bg-[#FAFAFC] text-[#0F172A] overflow-hidden">
      
      {/* 1. HERO BANNER */}
      <section className="relative pt-12 pb-20 md:pt-16 md:pb-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 bg-[#F3E8FF] border border-[#E9D5FF] text-[#6D28D9] px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6 shadow-sm">
            <Sparkles className="w-4 h-4 text-[#6D28D9]" />
            <span>AI-POWERED DIGITAL TRANSFORMATION</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl font-extrabold text-[#0F172A] tracking-tight leading-[1.1] mb-6">
            Technology That Connects People, Services & <span className="text-[#6D28D9]">Possibilities</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8 font-normal">
            WHY IT Services delivers innovative, AI-driven digital strategy, enterprise engineering, data lakes, and managed infrastructure—accelerating digital transformation in the new AI paradigm.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-[#6D28D9] hover:bg-[#5B21B6] text-white font-bold px-7 py-4 rounded-xl transition-all shadow-md hover:shadow-xl gap-2 text-base group"
            >
              <span>Talk to Our Experts</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center bg-white hover:bg-slate-50 text-slate-800 font-semibold px-7 py-4 rounded-xl transition-all border border-slate-200 shadow-sm hover:border-slate-300 gap-2 text-base"
            >
              Explore 5 Core Pillars
            </Link>
          </div>

          {/* Platform Interactive Frame */}
          <div className="relative mx-auto max-w-5xl rounded-2xl bg-[#0F172A] p-3 sm:p-4 shadow-2xl border border-slate-800">
            <div className="bg-slate-900 rounded-xl p-4 sm:p-6 text-left border border-slate-800/80 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  <span className="ml-2 text-purple-400">why-ai-engine-v2.4.ts</span>
                </div>
                <span className="text-emerald-400 font-semibold">● 200+ Person-Years Leadership Certified</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-2">
                <div className="bg-slate-950 p-4 rounded-lg border border-slate-800/80">
                  <div className="text-xs text-slate-400 mb-1 font-mono">VISION & MISSION</div>
                  <div className="text-sm font-bold text-white">AI-Powered Paradigm</div>
                  <div className="text-[11px] text-purple-300 mt-1">Accelerating customer growth sustainably</div>
                </div>
                <div className="bg-slate-950 p-4 rounded-lg border border-slate-800/80">
                  <div className="text-xs text-slate-400 mb-1 font-mono">CORE OFFERINGS</div>
                  <div className="text-sm font-bold text-white">5 Core IT Pillars</div>
                  <div className="text-[11px] text-purple-300 mt-1">Strategy, Engineering, Data, GenAI, Infra</div>
                </div>
                <div className="bg-slate-950 p-4 rounded-lg border border-slate-800/80">
                  <div className="text-xs text-slate-400 mb-1 font-mono">QUALITY GUARANTEE</div>
                  <div className="text-sm font-bold text-white">100% Customer Delight</div>
                  <div className="text-[11px] text-emerald-400 mt-1">Strive to be of value</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. TRUST STRIP & METRICS */}
      <section className="bg-white border-y border-slate-200/80 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
              Trusted by People. Built on Proven Technology & Leadership.
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-[#6D28D9]">200+</div>
              <div className="text-xs font-bold text-slate-600 uppercase tracking-wider mt-1">Person-Years Leadership</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-[#6D28D9]">500+</div>
              <div className="text-xs font-bold text-slate-600 uppercase tracking-wider mt-1">Families Supported</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-[#6D28D9]">1,200+</div>
              <div className="text-xs font-bold text-slate-600 uppercase tracking-wider mt-1">Service Engagements</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-[#6D28D9]">5 Pillars</div>
              <div className="text-xs font-bold text-slate-600 uppercase tracking-wider mt-1">End-to-End Enterprise Coverage</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MISSION & VISION PARADIGM BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-[#F3E8FF] to-white border border-[#E9D5FF] p-8 rounded-3xl shadow-sm space-y-4">
            <div className="w-10 h-10 rounded-xl bg-[#6D28D9] text-white flex items-center justify-center font-bold text-lg">
              M
            </div>
            <span className="text-xs font-bold text-[#6D28D9] uppercase tracking-wider block">OUR MISSION</span>
            <blockquote className="text-xl font-extrabold text-[#0F172A] leading-snug">
              “To deliver innovative AI-driven solutions that empower customers to achieve sustainable growth.”
            </blockquote>
            <p className="text-xs text-slate-600 leading-relaxed">
              Every system we build combines customer-centric design with robust engineering standards to drive long-term business value.
            </p>
          </div>

          <div className="bg-gradient-to-br from-slate-900 to-[#0F172A] text-white p-8 rounded-3xl shadow-xl space-y-4 border border-slate-800">
            <div className="w-10 h-10 rounded-xl bg-purple-500 text-white flex items-center justify-center font-bold text-lg">
              V
            </div>
            <span className="text-xs font-bold text-purple-400 uppercase tracking-wider block">OUR VISION</span>
            <blockquote className="text-xl font-extrabold text-white leading-snug">
              “To accelerate customers’ digital transformation in the new AI-powered paradigm.”
            </blockquote>
            <p className="text-xs text-slate-400 leading-relaxed">
              Pioneering next-generation AI, data lake architectures, and continuous cloud optimization for modern enterprises.
            </p>
          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE 5 CORE PILLARS SWITCHER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-[#6D28D9] uppercase tracking-wider">Corporate Profile V.2 Capabilities</span>
            <h2 className="text-3xl font-extrabold text-[#0F172A] mt-1">Our 5 Core Enterprise Service Pillars</h2>
            <p className="text-slate-600 text-sm mt-2">Select a pillar below to inspect deliverables, leadership quotes, and architecture code.</p>
          </div>

          {/* Pillars Navigation Tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-8 border-b border-slate-200 pb-6">
            {pillars.map((p) => {
              const Icon = p.icon;
              const isActive = activeTab === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => setActiveTab(p.id)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-bold transition-all ${
                    isActive
                      ? 'bg-[#6D28D9] text-white shadow-md'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[#6D28D9]'}`} />
                  {p.title}
                </button>
              );
            })}
          </div>

          {/* Active Pillar Inspector */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-bold text-[#6D28D9] uppercase tracking-wider">{activePillar.title}</span>
                <h3 className="text-2xl font-bold text-[#0F172A] mt-1">{activePillar.tagline}</h3>
                <div className="mt-2 inline-flex items-center gap-2 text-xs font-semibold text-purple-700 bg-purple-50 px-3 py-1 rounded-full border border-purple-200">
                  <Quote className="w-3.5 h-3.5 text-[#6D28D9]" />
                  <span>“{activePillar.quote}”</span>
                </div>
                <p className="text-slate-600 mt-4 text-sm leading-relaxed">{activePillar.description}</p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-3">Key Deliverables</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activePillar.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 bg-slate-50 border border-slate-100 p-3 rounded-lg">
                      <CheckCircle2 className="w-4 h-4 text-[#6D28D9] shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#F3E8FF] border border-[#E9D5FF] p-4 rounded-xl flex items-center justify-between">
                <div>
                  <div className="text-2xl font-extrabold text-[#6D28D9]">{activePillar.metrics.metric}</div>
                  <div className="text-xs text-slate-700 font-medium">{activePillar.metrics.label}</div>
                </div>
                <Link
                  to="/services"
                  className="bg-[#6D28D9] hover:bg-[#5B21B6] text-white text-xs font-bold px-4 py-2 rounded-lg transition-all"
                >
                  Explore Full Pillar Details
                </Link>
              </div>
            </div>

            {/* Code Panel */}
            <div className="lg:col-span-6 bg-[#0F172A] rounded-2xl overflow-hidden shadow-xl border border-slate-800">
              <div className="bg-slate-900 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                <span className="text-xs font-mono text-purple-300">{activePillar.id}-architecture.ts</span>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded">VERIFIED STACK</span>
              </div>
              <pre className="p-5 font-mono text-xs text-slate-200 overflow-x-auto leading-relaxed">
                <code>{activePillar.snippet}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* 5. BOTTOM ROBOFLOW CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-[#5B21B6] via-[#6D28D9] to-[#4C1D95] rounded-3xl p-8 sm:p-14 text-white shadow-2xl text-center relative overflow-hidden">
          <div className="max-w-3xl mx-auto relative z-10 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Ready to Accelerate Your AI & Digital Transformation?
            </h2>
            <p className="text-purple-100 text-base max-w-2xl mx-auto leading-relaxed">
              Connect directly with our leadership team featuring over 200+ person-years of enterprise experience.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <Link
                to="/contact"
                className="bg-white hover:bg-purple-50 text-[#6D28D9] font-bold px-8 py-4 rounded-xl transition-all shadow-lg text-sm"
              >
                Book a Free Discovery Session
              </Link>
              <Link
                to="/about"
                className="bg-purple-800/60 hover:bg-purple-800/80 border border-purple-400/30 text-white font-semibold px-8 py-4 rounded-xl transition-all text-sm"
              >
                Learn About Our Leadership
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
