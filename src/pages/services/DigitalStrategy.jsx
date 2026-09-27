import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Compass, ArrowRight, CheckCircle2, Star, ShieldCheck, 
  Sparkles, Check, ChevronDown, ChevronRight, HelpCircle, 
  Zap, Layers, Cpu, Award
} from 'lucide-react';
import PartnerTicker from '../../components/PartnerTicker';

export default function DigitalStrategy() {
  const [openFaq, setOpenFaq] = useState(null);

  const capabilities = [
    {
      title: 'Enterprise Architecture Consulting',
      desc: 'Upgrade from outdated IT systems to modern cloud solutions with WHY IT Services enterprise architects, ensuring seamless technology integration tailored to your business goals.'
    },
    {
      title: 'Technology & Data Portfolio Audits',
      desc: 'Identify pain points in your current systems and discover improvement opportunities with emerging tech through a detailed software portfolio analysis and technical debt audit.'
    },
    {
      title: 'Digital Transformation Strategy',
      desc: 'Uncover the potential of your existing systems and identify areas for immediate upgrade or replacement. Our consultants help integrate the right technology across business functions.'
    },
    {
      title: 'Application Rationalization & GRC',
      desc: 'Determine the optimal time to phase out legacy systems with a WHY IT software audit. We design sustainable roadmaps for governance, risk, and compliance.'
    },
    {
      title: 'Experience Engineering & Prototypes',
      desc: 'Understand user journey, needs, and behavior. Create rapid interactive prototypes to validate product strategy before executing full-scale development.'
    },
    {
      title: 'IT Infrastructure & Cost Optimization',
      desc: 'Streamline infrastructure spending and accelerate digital product development. Our strategy experts help optimize cloud resource allocation and IT investments.'
    }
  ];

  const valueProcess = [
    {
      step: '01',
      phase: 'Discovery Session',
      desc: 'We begin by understanding your business goals, existing challenges, and technical gaps to assess where consulting brings immediate and long-term value.'
    },
    {
      step: '02',
      phase: 'Strategic Roadmap',
      desc: 'We build a clear strategy—aligning tech initiatives with business objectives through a phased roadmap for smarter, cost-effective decisions.'
    },
    {
      step: '03',
      phase: 'Tech Stack Review',
      desc: 'We evaluate your current technologies and recommend modern, scalable tools fitting your business model with vendor-neutral guidance.'
    },
    {
      step: '04',
      phase: 'Solution Design',
      desc: 'We craft a scalable architecture blueprint for the proposed software system including user flow, modularity, integrations, and security planning.'
    },
    {
      step: '05',
      phase: 'Execution Support',
      desc: 'We collaborate with your internal or external development teams to ensure smooth execution across agile sprint cycles and tech adoption.'
    },
    {
      step: '06',
      phase: 'Optimization & Advisory',
      desc: 'After deployment, we help fine-tune performance, remove bottlenecks, and drive continuous innovation with regular insights and decision support.'
    }
  ];

  const faqs = [
    {
      q: 'What do Digital Strategy & Consulting services include?',
      a: 'They encompass strategic discovery, technology debt audits, enterprise architecture planning, application rationalization, GRC compliance frameworks, and digital transformation roadmaps.'
    },
    {
      q: 'How does WHY IT Services handle technology debt audits?',
      a: 'Our senior architects and technology specialists analyze codebases, infrastructure costs, security risks, and technical bottlenecks to provide clear remediation steps.'
    },
    {
      q: 'Can digital strategy consulting support our in-house team?',
      a: 'Yes, our consultants seamlessly collaborate with your internal engineering leads to align technical decisions with long-term business objectives.'
    }
  ];

  return (
    <div className="bg-[#FAFAFC] text-[#0F172A] min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 bg-[#F3E8FF] border border-[#E9D5FF] text-[#6D28D9] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
              <Compass className="w-4 h-4 text-[#6D28D9]" />
              Digital Strategy & Audits
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F172A] tracking-tight leading-[1.1]">
              Digital Strategy & <span className="italic font-normal text-[#6D28D9]">Technology Consulting</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Start your digital journey with comprehensive software strategy services. We align software needs with top tech talent, enhance technology architecture, and maximize ROI.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-[#6D28D9] to-[#5B21B6] hover:from-[#5B21B6] hover:to-[#4C1D95] text-white font-extrabold px-8 py-4 rounded-xl text-xs uppercase tracking-wider shadow-lg flex items-center gap-2"
              >
                <span>Talk to Expert Consultants</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop"
                alt="Digital Strategy Consulting"
                className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="text-[10px] font-mono text-purple-300 font-bold uppercase tracking-wider">Agile Advisory Pods</span>
                <h3 className="text-lg font-bold">Enterprise Software Roadmap</h3>
                <p className="text-xs text-slate-300">Evaluating cloud architecture, data pipelines & code quality.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PARTNER MARQUEE */}
      <PartnerTicker />

      {/* 3. TESTIMONIAL BANNER */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-[#0F172A] text-white rounded-3xl p-8 text-center space-y-4 shadow-xl border border-slate-800">
          <p className="text-sm sm:text-base text-slate-300 italic leading-relaxed">
            “Custom software development and strategy for our enterprise platform. I wasn't sure which technology architecture to choose, but WHY IT Services recommended the exact right cloud tech stack and guided our roadmap with 100% precision.”
          </p>
          <div className="pt-2">
            <div className="font-bold text-xs text-white">Jacob Webb / Founder</div>
            <div className="text-[10px] text-purple-400 uppercase font-semibold">Verified Enterprise Client</div>
          </div>
        </div>
      </section>

      {/* 4. CAPABILITIES BREAKDOWN GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#6D28D9] uppercase tracking-wider">Strategy Solutions</span>
          <h2 className="text-3xl font-extrabold text-[#0F172A] mt-1">
            Software Consulting & Digital Transformation
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Delivering result-driven software consulting services to accelerate business transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            <h2 className="text-3xl font-extrabold text-[#0F172A]">Targeted Strategy for Every Scale</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#FAFAFC] border border-[#E9D5FF] rounded-3xl p-8 space-y-3">
              <div className="text-xs font-bold text-[#6D28D9] uppercase tracking-wider">For Startups</div>
              <h3 className="font-extrabold text-lg text-[#0F172A]">Rapid Architecture & MVP</h3>
              <p className="text-xs text-slate-600 leading-relaxed">Build robust IT infrastructures to guide market entry and optimize early-stage tech choices.</p>
            </div>
            <div className="bg-[#FAFAFC] border border-[#E9D5FF] rounded-3xl p-8 space-y-3">
              <div className="text-xs font-bold text-[#6D28D9] uppercase tracking-wider">For Growth SMBs</div>
              <h3 className="font-extrabold text-lg text-[#0F172A]">Scalable Integrations</h3>
              <p className="text-xs text-slate-600 leading-relaxed">Support software expansion with integrations and infrastructure optimizations that drive competitive edge.</p>
            </div>
            <div className="bg-[#FAFAFC] border border-[#E9D5FF] rounded-3xl p-8 space-y-3">
              <div className="text-xs font-bold text-[#6D28D9] uppercase tracking-wider">For Enterprise</div>
              <h3 className="font-extrabold text-lg text-[#0F172A]">Modernization & GRC</h3>
              <p className="text-xs text-slate-600 leading-relaxed">Streamline operations, optimize legacy infrastructure, and enforce strict ISO/SOC2 security compliance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. 6-STEP VALUE ADD PROCESS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#6D28D9] uppercase tracking-wider">Our Methodology</span>
          <h2 className="text-3xl font-extrabold text-[#0F172A] mt-1">How We Add Value with Software Consulting</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
          <h2 className="text-3xl sm:text-4xl font-extrabold">Do We Seem Like a Perfect Fit?</h2>
          <p className="text-purple-100 text-sm max-w-xl mx-auto">Let's discuss your software consulting and digital strategy requirements with our leadership team.</p>
          <div>
            <Link
              to="/contact"
              className="bg-white text-[#6D28D9] font-extrabold text-xs px-8 py-4 rounded-xl uppercase tracking-wider inline-block shadow-lg hover:bg-purple-50 transition-colors"
            >
              Request Custom Strategy Quote -&gt;
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
