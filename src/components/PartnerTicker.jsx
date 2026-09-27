import React from 'react';
import { 
  Sparkles, 
  Compass, 
  Code2, 
  Database, 
  Cpu, 
  Bot, 
  Server, 
  ShieldCheck, 
  RefreshCw 
} from 'lucide-react';

export default function PartnerTicker() {
  const partnerLogos = [
    { name: 'Digital Strategy', tag: 'Discovery, Experience & GRC', icon: Compass },
    { name: 'Digital Engineering', tag: 'App Buildout & QA Verification', icon: Code2 },
    { name: 'Data Engineering & Analytics', tag: 'Data Lakes, ETL & BI Tools', icon: Database },
    { name: 'Generative AI', tag: 'LLMs, Content Gen & AI SDLC', icon: Cpu },
    { name: 'Intelligent Automation', tag: 'Attended & Unattended RPA BOTs', icon: Bot },
    { name: 'Infrastructure Managed Services', tag: 'Datacenter & L1/L2 Support Operations', icon: Server },
    { name: 'Verification & Validation', tag: 'Functional & Non-Functional QA', icon: ShieldCheck },
    { name: 'Application Sustenance', tag: 'Legacy Support & Productivity', icon: RefreshCw }
  ];

  // Duplicate for seamless infinite loop
  const doubleLogos = [...partnerLogos, ...partnerLogos];

  return (
    <section className="bg-white border-y border-slate-200/80 py-12 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <div className="inline-flex items-center gap-2 bg-[#F3E8FF] border border-[#E9D5FF] text-[#6D28D9] px-3.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          5 CORE ENTERPRISE OFFERINGS
        </div>
        <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] tracking-tight">
          Enterprise Engineering & Technology Capabilities
        </h3>
        <p className="text-xs text-slate-500 mt-1 font-medium">
          Delivering Digital Strategy, Digital Engineering, Data Engineering, Generative AI & Managed Infrastructure.
        </p>
      </div>

      {/* Infinite Marquee Wrapper with Gradient Edges */}
      <div className="relative w-full overflow-hidden py-4">
        
        {/* Left Fade Gradient */}
        <div className="absolute top-0 left-0 bottom-0 w-24 sm:w-36 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
        
        {/* Right Fade Gradient */}
        <div className="absolute top-0 right-0 bottom-0 w-24 sm:w-36 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>

        {/* Scrolling Ticker Track */}
        <div className="flex w-max animate-marquee space-x-6 sm:space-x-8">
          {doubleLogos.map((logo, idx) => {
            const IconComponent = logo.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3 bg-gradient-to-b from-[#F3E8FF]/60 via-[#F8F3FF]/40 to-white border border-[#E9D5FF] px-6 py-3.5 rounded-2xl shadow-sm hover:border-[#6D28D9] transition-all shrink-0 group cursor-default"
              >
                <div className="w-9 h-9 rounded-xl bg-[#6D28D9] text-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                  <IconComponent className="w-4.5 h-4.5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-extrabold text-sm text-[#0F172A] tracking-tight group-hover:text-[#6D28D9] transition-colors">
                    {logo.name}
                  </span>
                  <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
                    {logo.tag}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

