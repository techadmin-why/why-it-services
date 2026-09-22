import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Compass, Code2, Database, Bot, Server, 
  ArrowRight, CheckCircle2, ShieldCheck, Sparkles, 
  Zap, Layers, Terminal, Activity, Check, Quote, Sliders
} from 'lucide-react';

export default function Services() {
  const [activeTab, setActiveTab] = useState('digital-strategy');

  const services = [
    {
      id: 'digital-strategy',
      title: 'Digital Strategy',
      quote: '“Vision and Strategy before Execution”',
      icon: Compass,
      tagline: 'Discovery, Experience Engineering & Technology Audits',
      description: 'Aligning business vision with technical execution before writing code. We assess legacy debts, user journeys, data compliance, and GRC risk frameworks.',
      subServices: [
        {
          name: 'Discovery & Ideation',
          desc: 'Vision and roadmap to introduce next-generation applications and assess AI/ML integration into existing digital portfolios.'
        },
        {
          name: 'Experience Engineering',
          desc: 'Understand user journey, needs, and behavior. Create rapid prototypes to validate product strategy before execution.'
        },
        {
          name: 'Technology & Data Audits',
          desc: 'Comprehensive assessment of technical debt, codebase modularity, and data regulatory compliance.'
        },
        {
          name: 'Digital Transformation & GRC',
          desc: 'Application rationalization, data strategy, IT infrastructure optimization, and GRC governance risk implementation.'
        }
      ],
      codeSnippet: `// Digital Strategy Audit Framework
export const DigitalStrategyAudit = {
  quote: "Vision and Strategy before Execution",
  assessment: {
    techDebtScore: "MODERATE",
    aiReadiness: "HIGH_POTENTIAL",
    grcCompliance: "ISO_27001_ALIGNED",
    roadmapTimeline: "Q4_NEXT_GEN_LAUNCH"
  }
};`
    },
    {
      id: 'digital-engineering',
      title: 'Digital Engineering',
      quote: '“Digitize to Transform”',
      icon: Code2,
      tagline: 'Enterprise Buildout, Sustenance & QA Engineering',
      description: 'End-to-end web & mobile software development, QA verification & validation, legacy system sustenance, and model-based engineering.',
      subServices: [
        {
          name: 'App Development & Deployment',
          desc: 'Enterprise-grade custom web and mobile application buildout with agile sprint execution and continuous integration.'
        },
        {
          name: 'Verification & Validation (QA Engineering)',
          desc: 'Rigorous functional and non-functional QA testing, automation frameworks, and industry best practices.'
        },
        {
          name: 'Application Sustenance & Support',
          desc: 'Managing legacy products, optimizing developer productivity, improving code quality, and team augmentation.'
        },
        {
          name: 'Modernization & Data Migration',
          desc: 'Technology upgrades, database migrations, concurrent engineering, and model-based engineering.'
        }
      ],
      codeSnippet: `// Digital Engineering QA & Deployment Handler
export async function executeDigitalEngineeringPipeline(appSpec) {
  const qaResults = await QAEngine.runVerificationAndValidation(appSpec);
  if (qaResults.passed) {
    return await DeploymentEngine.deployToEnterpriseCluster(appSpec);
  }
  return qaResults.remediationReport;
}`
    },
    {
      id: 'data-engineering',
      title: 'Data Engineering & Analytics',
      quote: '“Harness the power of data to serve and enhance user experiences.”',
      icon: Database,
      tagline: 'Structured/Unstructured Data Lakes, ETL & Predictive Analytics',
      description: 'Building robust ingestion layers for structured, semi-structured, and unstructured data. Real-time data infrastructure, ETL orchestration, and data monetization.',
      subServices: [
        {
          name: 'Data Lake & Pipeline Ingestion',
          desc: 'Identify and ingest data sources across structured, semi-structured, and unstructured formats into scalable data lakes.'
        },
        {
          name: 'ETL Orchestration & Infrastructure',
          desc: 'Optimizing data pipeline throughput, building real-time data infrastructure, and enabling data democratization.'
        },
        {
          name: 'Data Modeling & BI Analytics',
          desc: 'Building logical and physical data models with BI reporting dashboards tailored to business requirements.'
        },
        {
          name: 'Predictive Analytics & Monetization',
          desc: 'Building AI/ML algorithms to generate predictive analytics and turn raw data assets into revenue opportunities.'
        }
      ],
      codeSnippet: `# Real-Time Data Pipeline & ETL Ingestion
def ingest_data_pipeline(data_source):
    cleaned_data = etl_cleanse(data_source.raw_stream)
    data_lake.write_partition(cleaned_data)
    bi_engine.refresh_dashboards()
    return predictive_model.evaluate_trends(cleaned_data)`
    },
    {
      id: 'generative-ai',
      title: 'Artificial Intelligence & GenAI',
      quote: '“Make Intelligence readily available”',
      icon: Bot,
      tagline: 'Generative AI, LLMs, AI SDLC & Intelligent Automation (RPA)',
      description: 'Integrating Large Language Models, AI-driven software development lifecycles, creative content generation models, and RPA attended/unattended BOTs.',
      subServices: [
        {
          name: 'Generative AI & Content Generation',
          desc: 'Automate image and text content creation across marketing channels to increase brand visibility and creative efficiency.'
        },
        {
          name: 'Machine & Deep Learning (LLMs)',
          desc: 'Extract qualitative insights from unstructured text using Large Language Models (LLMs) and multi-modal AI models.'
        },
        {
          name: 'AI-Driven Software Development (SDLC)',
          desc: 'Accelerate software development with AI code generation, automated error reduction, and DevOps integration.'
        },
        {
          name: 'Intelligent Automation & RPA',
          desc: 'Attended and unattended BOTs, task automation, workflow automation, and Low-Code / No-Code platforms.'
        }
      ],
      codeSnippet: `// Generative AI & RPA Workflow Orchestration
const GenAIAutomationEngine = {
  llmModel: 'LLM_MULTI_MODAL_ENTERPRISE',
  sdlcAcceleration: 'ENABLED',
  rpaBots: {
    attended: 'ACTIVE_WORKFLOW_BOT',
    unattended: 'SCHEDULED_DATA_BOT'
  }
};`
    },
    {
      id: 'infrastructure-services',
      title: 'Infrastructure Managed Services',
      quote: '“Manage your infrastructure for them to manage your business”',
      icon: Server,
      tagline: 'Datacenter Support, L1/L2 Support & Infrastructure Optimization',
      description: 'Comprehensive IT infrastructure optimization, datacenter support operations, L1/L2 escalation handling, and proactive system maintenance.',
      subServices: [
        {
          name: 'Datacenter & Cloud Operations',
          desc: 'Managing datacenter environments, cloud workloads, and network infrastructure with industry best practices.'
        },
        {
          name: 'L1 & L2 Technical Support',
          desc: '24/7 continuous L1 and L2 technical support teams ensuring high availability and swift incident resolution.'
        },
        {
          name: 'IT Infrastructure Optimization',
          desc: 'Ongoing cost rationalization, server capacity planning, security patch management, and hardware lifecycle management.'
        },
        {
          name: 'Proactive Monitoring & Failover',
          desc: 'Automated monitoring alerts, zero-downtime failover systems, and disaster recovery execution.'
        }
      ],
      codeSnippet: `# Infrastructure Managed Operations Matrix
datacenter_ops:
  l1_support: "24/7_ACTIVE"
  l2_escalation: "ACTIVE"
  monitoring_status: "HEALTHY_99.99_SLA"
  cost_optimization: "CONTINUOUS"`
    }
  ];

  const activeService = services.find(s => s.id === activeTab) || services[0];

  return (
    <div className="bg-[#FAFAFC] text-[#0F172A] pt-8 pb-20">
      
      {/* 1. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="inline-flex items-center gap-2 bg-[#F3E8FF] border border-[#E9D5FF] text-[#6D28D9] px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6">
          <Sparkles className="w-4 h-4 text-[#6D28D9]" />
          5 Core Enterprise Offerings
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight mb-6">
          Our Service Offerings & <span className="text-[#6D28D9]">Engineering Capabilities</span>
        </h1>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
          From digital strategy and enterprise application buildout to real-time data lakes, generative AI, and managed infrastructure—WHY IT Services delivers end-to-end technical excellence.
        </p>
      </section>

      {/* 2. INTERACTIVE SERVICE PILLARS DEEP-DIVE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm">
          
          {/* Pillar Tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-8 border-b border-slate-200 pb-6">
            {services.map((s) => {
              const Icon = s.icon;
              const isActive = activeTab === s.id;
              return (
                <button
                  key={s.id}
                  onClick={() => setActiveTab(s.id)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-bold transition-all ${
                    isActive
                      ? 'bg-[#6D28D9] text-white shadow-md'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[#6D28D9]'}`} />
                  {s.title}
                </button>
              );
            })}
          </div>

          {/* Active Service Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-bold text-[#6D28D9] uppercase tracking-wider">Pillar Details</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] mt-1">{activeService.title}</h2>
                <div className="mt-2 inline-flex items-center gap-2 text-xs font-semibold text-purple-700 bg-purple-50 px-3 py-1 rounded-full border border-purple-200">
                  <Quote className="w-3.5 h-3.5 text-[#6D28D9]" />
                  <span>{activeService.quote}</span>
                </div>
                <p className="text-slate-600 mt-4 text-sm leading-relaxed">{activeService.description}</p>
              </div>

              {/* Sub-services breakdown */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold text-[#0F172A] uppercase tracking-wider">Sub-Service Offerings</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeService.subServices.map((sub, idx) => (
                    <div key={idx} className="bg-slate-50 border border-slate-100 p-4 rounded-xl space-y-1">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#6D28D9] shrink-0" />
                        <h4 className="text-xs font-bold text-[#0F172A]">{sub.name}</h4>
                      </div>
                      <p className="text-[11px] text-slate-600 leading-relaxed pl-6">{sub.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Terminal / Architecture Code Box */}
            <div className="lg:col-span-5 bg-[#0F172A] rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
              <div className="bg-slate-900 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                <span className="text-xs font-mono text-purple-300">{activeService.id}.ts</span>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded">Corporate Profile V.2</span>
              </div>
              <pre className="p-5 font-mono text-xs text-slate-200 overflow-x-auto leading-relaxed">
                <code>{activeService.codeSnippet}</code>
              </pre>
              <div className="bg-slate-900/90 px-4 py-3 border-t border-slate-800/80 text-[11px] text-slate-400 font-mono flex items-center justify-between">
                <span className="text-purple-300 font-semibold">Leadership Experience: 200+ Years</span>
                <span className="text-emerald-400">STATUS: READY</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. BOTTOM CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-r from-[#5B21B6] via-[#6D28D9] to-[#4C1D95] rounded-3xl p-8 sm:p-12 text-white shadow-xl text-center">
          <h2 className="text-3xl font-extrabold mb-4">Need Tailored Service Engineering for Your Company?</h2>
          <p className="text-purple-100 text-sm max-w-xl mx-auto mb-8">
            Speak directly with our senior technology leaders and solution architects today.
          </p>
          <Link
            to="/contact"
            className="bg-white hover:bg-purple-50 text-[#6D28D9] font-bold px-8 py-4 rounded-xl transition-all shadow-lg text-sm inline-block"
          >
            Schedule Technical Consultation
          </Link>
        </div>
      </section>

    </div>
  );
}
