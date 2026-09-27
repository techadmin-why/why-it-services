import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, ArrowRight, CheckCircle2, Cpu, Brain, Bot, ShieldCheck
} from 'lucide-react';
import PartnerTicker from '../../components/PartnerTicker';

export default function GenerativeAI() {
  const capabilities = [
    {
      title: 'Enterprise LLM Fine-Tuning & Custom RAG',
      desc: 'Build secure Retrieval-Augmented Generation (RAG) pipelines and fine-tune open-source (Llama 3, Mistral) & proprietary models (Gemini, OpenAI) on private enterprise datasets.'
    },
    {
      title: 'AI-Driven SDLC Code Generation & Automation',
      desc: 'Integrate custom AI coding assistants, automated code review bots, and synthetic data generators into your internal developer platform to boost engineering throughput.'
    },
    {
      title: 'RPA & Intelligent Process Automation Bots',
      desc: 'Deploy attended and unattended AI bots to automate document parsing, invoice processing, customer support workflows, and legacy data entry.'
    },
    {
      title: 'Domain-Specific Conversational AI Assistants',
      desc: 'Context-aware enterprise chatbots and voice agents trained on regulatory compliance, internal HR policies, and complex customer support knowledge bases.'
    },
    {
      title: 'AI Safety, Alignment & Red-Teaming Audits',
      desc: 'Enforce strict prompt injection safeguards, PII filtering, hallucination detection, and compliance controls for enterprise AI deployments.'
    },
    {
      title: 'Multi-Agent Autonomous Orchestration',
      desc: 'Architect complex multi-agent agentic workflows using LangChain, AutoGen, and CrewAI for automated multi-step decision-making.'
    }
  ];

  const valueProcess = [
    {
      step: '01',
      phase: 'AI Feasibility & Use Case Discovery',
      desc: 'We evaluate enterprise workflows to identify high-ROI Generative AI and automation opportunities.'
    },
    {
      step: '02',
      phase: 'Data Curation & Embedding Pipeline',
      desc: 'Cleaning enterprise knowledge bases, generating vector embeddings (pgvector, Pinecone, Qdrant), and structuring context stores.'
    },
    {
      step: '03',
      phase: 'RAG Architecture & Model Tuning',
      desc: 'Implementing hybrid retrieval pipelines, prompt engineering, and fine-tuning domain models for high accuracy.'
    },
    {
      step: '04',
      phase: 'Guardrails & Safety Framework',
      desc: 'Building automated PII redaction, content moderation, and anti-hallucination verification loops.'
    },
    {
      step: '05',
      phase: 'API Integration & Agentic Workflow',
      desc: 'Integrating AI capabilities directly into web apps, mobile solutions, Slack/Teams, and internal ERP systems.'
    },
    {
      step: '06',
      phase: 'Continuous Monitoring & Optimization',
      desc: 'Tracking model accuracy, latency, vector retrieval relevance, and token cost optimizations.'
    }
  ];

  const faqs = [
    {
      q: 'How do you prevent data leaks when using Generative AI LLMs?',
      a: 'We deploy air-gapped open-source models inside your cloud VPC (AWS Bedrock / Azure OpenAI Service) ensuring zero enterprise data training exposure.'
    },
    {
      q: 'What is RAG (Retrieval-Augmented Generation)?',
      a: 'RAG allows LLMs to query your proprietary internal databases and documents dynamically, producing 100% accurate, verifiable responses without hallucinating.'
    },
    {
      q: 'Can Generative AI automate our internal software development lifecycle (SDLC)?',
      a: 'Yes, our custom AI SDLC tooling accelerates boilerplate code generation, automated unit testing, and pull request reviews by up to 40%.'
    }
  ];

  return (
    <div className="bg-[#FAFAFC] text-[#0F172A] min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 bg-[#F3E8FF] border border-[#E9D5FF] text-[#6D28D9] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
              <Sparkles className="w-4 h-4 text-[#6D28D9]" />
              Generative AI & Autonomous Agents
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F172A] tracking-tight leading-[1.1]">
              Enterprise Generative AI & <span className="italic font-normal text-[#6D28D9]">Intelligent Automation</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Harness custom LLMs, RAG knowledge engines, multi-agent orchestrations, and RPA bots to transform business productivity with enterprise-grade security.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-[#6D28D9] to-[#5B21B6] hover:from-[#5B21B6] hover:to-[#4C1D95] text-white font-extrabold px-8 py-4 rounded-xl text-xs uppercase tracking-wider shadow-lg flex items-center gap-2"
              >
                <span>Schedule AI Strategy Session</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group">
              <img
                src="https://images.unsplash.com/photo-1677442136019-21780efad99a?q=80&w=1000&auto=format&fit=crop"
                alt="Generative AI Systems"
                className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="text-[10px] font-mono text-purple-300 font-bold uppercase tracking-wider">Multi-Agent Systems</span>
                <h3 className="text-lg font-bold">Custom RAG & Autonomous Agents</h3>
                <p className="text-xs text-slate-300">Fine-tuned open source LLMs with air-gapped VPC security.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PARTNER TICKER */}
      <PartnerTicker />

      {/* 3. TESTIMONIAL BANNER */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="bg-[#0F172A] text-white rounded-3xl p-6 sm:p-8 text-center space-y-3 shadow-xl border border-slate-800">
          <p className="text-xs sm:text-base text-slate-300 italic leading-relaxed">
            “WHY IT Services implemented a secure custom RAG engine across 50,000 internal documents. Our support engineers now resolve complex technical queries in under 30 seconds.”
          </p>
          <div className="pt-1">
            <div className="font-bold text-xs text-white">Elena Rostova / Chief AI Officer</div>
            <div className="text-[10px] text-purple-400 uppercase font-semibold">Verified Tech Partner</div>
          </div>
        </div>
      </section>

      {/* 4. CAPABILITIES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#6D28D9] uppercase tracking-wider">AI Offerings</span>
          <h2 className="text-3xl font-extrabold text-[#0F172A] mt-1">
            Generative AI & Machine Learning Capabilities
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Build specialized AI models, autonomous agents, and process automation solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((item, idx) => (
            <div key={idx} className="bg-gradient-to-b from-[#F3E8FF] via-[#F8F3FF] to-white border border-[#E9D5FF] rounded-3xl p-6 shadow-sm hover:border-[#6D28D9] transition-all space-y-3">
              <div className="w-8 h-8 rounded-xl bg-[#6D28D9] text-white flex items-center justify-center font-bold text-xs">
                0{idx + 1}
              </div>
              <h3 className="font-bold text-base text-[#0F172A]">{item.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. SEGMENT CALLOUTS */}
      <section className="bg-white border-y border-slate-200/80 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold text-[#0F172A]">AI Solutions Designed for Scale</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#FAFAFC] border border-[#E9D5FF] rounded-3xl p-8 space-y-3">
              <div className="text-xs font-bold text-[#6D28D9] uppercase tracking-wider">For Startups</div>
              <h3 className="font-extrabold text-lg text-[#0F172A]">Fast LLM Prototype & MVP</h3>
              <p className="text-xs text-slate-600 leading-relaxed">Launch AI-native features using OpenAI/Gemini APIs and vector search in under 3 weeks.</p>
            </div>
            <div className="bg-[#FAFAFC] border border-[#E9D5FF] rounded-3xl p-8 space-y-3">
              <div className="text-xs font-bold text-[#6D28D9] uppercase tracking-wider">For Growth SMBs</div>
              <h3 className="font-extrabold text-lg text-[#0F172A]">Workflow Automation</h3>
              <p className="text-xs text-slate-600 leading-relaxed">Automate repetitive customer support and operational tasks with custom RAG bots and RPA workflows.</p>
            </div>
            <div className="bg-[#FAFAFC] border border-[#E9D5FF] rounded-3xl p-8 space-y-3">
              <div className="text-xs font-bold text-[#6D28D9] uppercase tracking-wider">For Enterprises</div>
              <h3 className="font-extrabold text-lg text-[#0F172A]">Private Cloud LLM & Guardrails</h3>
              <p className="text-xs text-slate-600 leading-relaxed">Host fine-tuned open-source models inside your secure VPC with strict enterprise security audit trails.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. 6-STEP METHODOLOGY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#6D28D9] uppercase tracking-wider">AI Delivery Process</span>
          <h2 className="text-3xl font-extrabold text-[#0F172A] mt-1">Our Generative AI Deployment Framework</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {valueProcess.map((step, idx) => (
            <div key={idx} className="bg-white border border-[#E9D5FF] rounded-3xl p-6 shadow-sm space-y-3 relative">
              <span className="text-xs font-mono font-bold text-[#6D28D9] bg-[#F3E8FF] px-2.5 py-1 rounded-full">{step.step}</span>
              <h3 className="font-bold text-base text-[#0F172A] mt-2">{step.phase}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. FAQS */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-extrabold text-[#0F172A] text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white border border-[#E9D5FF] rounded-2xl p-6 shadow-sm space-y-2">
              <h3 className="font-bold text-sm text-[#0F172A]">{faq.q}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. CTA SECTION */}
      <section className="bg-gradient-to-r from-[#5B21B6] via-[#6D28D9] to-[#4C1D95] text-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold">Transform Your Business with Generative AI</h2>
          <p className="text-purple-100 text-sm max-w-xl mx-auto">Book a 1-on-1 architecture call with our Generative AI specialists today.</p>
          <div>
            <Link
              to="/contact"
              className="bg-white text-[#6D28D9] font-extrabold text-xs px-8 py-4 rounded-xl uppercase tracking-wider inline-block shadow-lg hover:bg-purple-50 transition-colors"
            >
              Book AI Session -&gt;
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
