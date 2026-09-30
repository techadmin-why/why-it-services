import React, { useState, useEffect, useRef } from 'react';
import { 
  FileText, Calculator, Users, Rocket, Sparkles, Check, 
  ArrowRight, Activity, Cpu, ShieldCheck, Zap, ChevronRight, CornerDownRight
} from 'lucide-react';

export default function EngineeringDeliverySystem() {
  const [activeStep, setActiveStep] = useState(0); // 0, 1, 2, 3
  const [isVisible, setIsVisible] = useState(true);
  const sectionRef = useRef(null);

  // IntersectionObserver to pause signal pulse animations when section is outside viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const steps = [
    {
      num: '01',
      code: 'SYS.01 // ANALYSIS',
      title: 'Define Scope of Work',
      subtitle: 'REQUIREMENT ANALYSIS',
      desc: 'Specify your core technical requirements. We match specialized software architects and product experts to your domain.',
      bullets: ['Branding & UX Design', 'Architecture Audit', 'Web & Mobile Scope'],
      nodeId: 'node-scope',
      status: 'PHASE_VERIFIED'
    },
    {
      num: '02',
      code: 'SYS.02 // PRICING',
      title: 'Time & Cost Estimation',
      subtitle: 'TRANSPARENT PRICING',
      desc: 'Based on your scope, we provide a detailed cost breakdown with transparent Fixed-Price or Time & Materials options.',
      bullets: ['Fixed Price Option', 'Time & Materials', 'Milestone Roadmaps'],
      nodeId: 'node-pricing',
      status: 'PRICE_AUDITED'
    },
    {
      num: '03',
      code: 'SYS.03 // ALIGNMENT',
      title: 'Kick-off & Squad Match',
      subtitle: 'ACCOUNT ALIGNMENT',
      desc: 'Meet your dedicated engineers, technical project manager, and account leads during an aligned kickoff sprint.',
      bullets: ['Prepare Scope Agenda', 'Sprint Goal Alignment', 'Slack / Jira Setup'],
      nodeId: 'node-squad',
      status: 'SQUAD_MATCHED'
    },
    {
      num: '04',
      code: 'SYS.04 // EXECUTION',
      title: 'Ready? Let\'s Build!',
      subtitle: 'HIGH VELOCITY EXECUTION',
      desc: 'With team onboarding complete and sprint milestones agreed upon, we immediately begin agile sprint deployment.',
      bullets: ['Dedicated PM Included', '24/7 SRE Support', 'Weekly Demo Sprints'],
      nodeId: 'node-build',
      status: 'DEPLOYS_ACTIVE'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      aria-label="Engineering Delivery Blueprint"
      className="relative bg-[#070B14] text-white py-12 sm:py-16 lg:py-20 overflow-hidden border-y border-slate-800/80 font-sans"
    >
      {/* Precision Blueprint Grid Overlay & Subtle Radial Background Accent */}
      <div 
        className="absolute inset-0 opacity-[0.12] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(147, 51, 234, 0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(147, 51, 234, 0.25) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-purple-900/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Top Eyebrow & Technical Metadata */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-slate-800/80 pb-6 mb-8 gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-purple-400 font-mono text-[11px] font-semibold uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
              <span>AGILE DELIVERY FRAMEWORK</span>
              <span className="text-slate-600">//</span>
              <span className="text-slate-400">ENGINEERING DELIVERY BLUEPRINT</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-[46px] font-extrabold tracking-tight text-white leading-tight">
              Our Commitment to <span className="text-purple-400">Consistent Quality</span>
            </h2>
          </div>

          <div className="text-left md:text-right font-mono text-xs text-slate-400 space-y-1 shrink-0">
            <div className="text-slate-300 font-bold">SYSTEM VERIFIED // 01—04 STAGES</div>
            <div className="text-[11px] text-purple-400">STATUS: {steps[activeStep].status}</div>
          </div>
        </div>

        {/* Main Composition: Architectural Blueprint (Left/Right) + Process Index Navigation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT: Lightweight SVG Architecture Blueprint Diagram (45% Width on Desktop) */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="bg-[#0D1322] border border-slate-800/90 rounded-2xl p-5 sm:p-6 shadow-2xl relative overflow-hidden group">
              
              {/* Blueprint Decorative Corner Markers */}
              <div className="absolute top-2 left-2 text-[9px] font-mono text-slate-600">SYS_MAP_v2.6</div>
              <div className="absolute top-2 right-2 text-[9px] font-mono text-purple-400">ACTIVE: STAGE_{steps[activeStep].num}</div>
              <div className="absolute bottom-2 left-2 text-[9px] font-mono text-slate-600">SCALE: 1:1 // VECTOR</div>
              <div className="absolute bottom-2 right-2 text-[9px] font-mono text-slate-600">WHY_IT_OPS</div>

              {/* Interactive Dynamic SVG Architecture Canvas */}
              <svg className="w-full h-auto min-h-[260px] sm:min-h-[300px] my-2" viewBox="0 0 540 320" fill="none">
                <defs>
                  <linearGradient id="activeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#A855F7" />
                    <stop offset="100%" stopColor="#6D28D9" />
                  </linearGradient>
                  <filter id="blueprintGlow">
                    <feGaussianBlur stdDeviation="2.5" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Grid Background Lines inside Blueprint */}
                <path d="M 0 80 L 540 80 M 0 160 L 540 160 M 0 240 L 540 240" stroke="#1E293B" strokeWidth="1" strokeDasharray="3 3" />
                <path d="M 135 0 L 135 320 M 270 0 L 270 320 M 405 0 L 405 320" stroke="#1E293B" strokeWidth="1" strokeDasharray="3 3" />

                {/* Process Flow Interconnecting Paths */}
                {/* 01 -> 02 */}
                <path d="M 135 90 L 405 90" stroke={activeStep >= 1 ? '#9333EA' : '#334155'} strokeWidth="2" strokeDasharray="5 5" />
                {/* 02 -> 03 */}
                <path d="M 405 90 L 405 230" stroke={activeStep >= 2 ? '#9333EA' : '#334155'} strokeWidth="2" strokeDasharray="5 5" />
                {/* 03 -> 04 */}
                <path d="M 405 230 L 135 230" stroke={activeStep >= 3 ? '#9333EA' : '#334155'} strokeWidth="2" strokeDasharray="5 5" />

                {/* Traveling Signal Pulse Dot */}
                {isVisible && (
                  <circle r="4" fill="#C084FC" filter="url(#blueprintGlow)">
                    <animateMotion 
                      path={
                        activeStep === 0 ? "M 70 90 L 135 90" :
                        activeStep === 1 ? "M 135 90 L 405 90" :
                        activeStep === 2 ? "M 405 90 L 405 230" :
                        "M 405 230 L 135 230"
                      }
                      dur="2.5s" 
                      repeatCount="indefinite" 
                    />
                  </circle>
                )}

                {/* Stage Node 01: Requirement Analysis */}
                <g 
                  onClick={() => setActiveStep(0)} 
                  className="cursor-pointer transition-all duration-300"
                >
                  <rect 
                    x="50" y="55" width="170" height="70" rx="10" 
                    fill={activeStep === 0 ? '#1E1B4B' : '#0F172A'} 
                    stroke={activeStep === 0 ? '#A855F7' : '#334155'} 
                    strokeWidth={activeStep === 0 ? '2' : '1'} 
                  />
                  <circle cx="80" cy="90" r="14" fill={activeStep === 0 ? 'url(#activeGrad)' : '#1E293B'} />
                  <text x="80" y="94" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontFamily="monospace" fontWeight="bold">01</text>
                  <text x="105" y="82" fill="#E2E8F0" fontSize="11" fontWeight="bold">REQUIREMENT</text>
                  <text x="105" y="98" fill="#94A3B8" fontSize="9.5" fontFamily="monospace">Scope Audit & UX</text>
                </g>

                {/* Stage Node 02: Transparent Pricing */}
                <g 
                  onClick={() => setActiveStep(1)} 
                  className="cursor-pointer transition-all duration-300"
                >
                  <rect 
                    x="320" y="55" width="170" height="70" rx="10" 
                    fill={activeStep === 1 ? '#1E1B4B' : '#0F172A'} 
                    stroke={activeStep === 1 ? '#A855F7' : '#334155'} 
                    strokeWidth={activeStep === 1 ? '2' : '1'} 
                  />
                  <circle cx="350" cy="90" r="14" fill={activeStep === 1 ? 'url(#activeGrad)' : '#1E293B'} />
                  <text x="350" y="94" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontFamily="monospace" fontWeight="bold">02</text>
                  <text x="375" y="82" fill="#E2E8F0" fontSize="11" fontWeight="bold">ESTIMATION</text>
                  <text x="375" y="98" fill="#94A3B8" fontSize="9.5" fontFamily="monospace">Fixed or T&M Cost</text>
                </g>

                {/* Stage Node 03: Account Alignment */}
                <g 
                  onClick={() => setActiveStep(2)} 
                  className="cursor-pointer transition-all duration-300"
                >
                  <rect 
                    x="320" y="195" width="170" height="70" rx="10" 
                    fill={activeStep === 2 ? '#1E1B4B' : '#0F172A'} 
                    stroke={activeStep === 2 ? '#A855F7' : '#334155'} 
                    strokeWidth={activeStep === 2 ? '2' : '1'} 
                  />
                  <circle cx="350" cy="230" r="14" fill={activeStep === 2 ? 'url(#activeGrad)' : '#1E293B'} />
                  <text x="350" y="234" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontFamily="monospace" fontWeight="bold">03</text>
                  <text x="375" y="222" fill="#E2E8F0" fontSize="11" fontWeight="bold">ALIGNMENT</text>
                  <text x="375" y="238" fill="#94A3B8" fontSize="9.5" fontFamily="monospace">Squad & Jira Match</text>
                </g>

                {/* Stage Node 04: High Velocity Execution */}
                <g 
                  onClick={() => setActiveStep(3)} 
                  className="cursor-pointer transition-all duration-300"
                >
                  <rect 
                    x="50" y="195" width="170" height="70" rx="10" 
                    fill={activeStep === 3 ? '#1E1B4B' : '#0F172A'} 
                    stroke={activeStep === 3 ? '#A855F7' : '#334155'} 
                    strokeWidth={activeStep === 3 ? '2' : '1'} 
                  />
                  <circle cx="80" cy="230" r="14" fill={activeStep === 3 ? 'url(#activeGrad)' : '#1E293B'} />
                  <text x="80" y="234" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontFamily="monospace" fontWeight="bold">04</text>
                  <text x="105" y="222" fill="#E2E8F0" fontSize="11" fontWeight="bold">EXECUTION</text>
                  <text x="105" y="238" fill="#94A3B8" fontSize="9.5" fontFamily="monospace">Agile Sprint Build</text>
                </g>

                {/* Central System Bus Connector Label */}
                <rect x="210" y="142" width="120" height="36" rx="8" fill="#090D16" stroke="#9333EA" strokeWidth="1" />
                <text x="270" y="158" textAnchor="middle" fill="#C084FC" fontSize="9.5" fontFamily="monospace" fontWeight="bold">WHY IT CORE</text>
                <text x="270" y="170" textAnchor="middle" fill="#94A3B8" fontSize="8" fontFamily="monospace">DELIVERY PIPELINE</text>
              </svg>

              {/* Blueprint Footer Metadata */}
              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-purple-300">
                  <Activity className="w-3.5 h-3.5 text-purple-400" />
                  <span>Click nodes or stages on right to inspect architecture</span>
                </span>
                <span className="text-slate-500 font-bold">STAGE {steps[activeStep].num} / 04</span>
              </div>

            </div>
          </div>

          {/* RIGHT: Process Navigation Index + Single Expanded Active Inspector (55% Width on Desktop) */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-3">
            
            {/* Process Index Rows */}
            <div className="space-y-2">
              {steps.map((step, idx) => {
                const isActive = activeStep === idx;

                return (
                  <div 
                    key={idx}
                    onClick={() => setActiveStep(idx)}
                    onMouseEnter={() => setActiveStep(idx)}
                    tabIndex={0}
                    role="button"
                    aria-expanded={isActive}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        setActiveStep(idx);
                      }
                    }}
                    className={`rounded-xl border transition-all duration-300 cursor-pointer outline-none overflow-hidden ${
                      isActive 
                        ? 'bg-[#0E1526] border-purple-500/80 shadow-lg ring-1 ring-purple-500/30' 
                        : 'bg-[#090E1A]/80 border-slate-800/90 hover:border-slate-700 hover:bg-[#0D1424]'
                    }`}
                  >
                    {/* Compact Stage Navigation Row Header */}
                    <div className="p-3 sm:p-4 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3 min-w-0">
                        <span className={`text-xs font-mono font-extrabold px-2.5 py-1 rounded-md shrink-0 transition-colors ${
                          isActive 
                            ? 'bg-purple-600 text-white shadow-sm' 
                            : 'bg-slate-800/80 text-purple-300 border border-slate-700'
                        }`}>
                          {step.num}
                        </span>

                        <div className="min-w-0">
                          <div className="text-[10px] font-mono text-purple-400 font-bold uppercase tracking-wider truncate">
                            {step.subtitle}
                          </div>
                          <div className="text-sm sm:text-base font-extrabold text-white tracking-tight truncate">
                            {step.title}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        {isActive && (
                          <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 border border-emerald-800/60 px-2 py-0.5 rounded hidden sm:inline-block">
                            ACTIVE INSPECTOR
                          </span>
                        )}
                        <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${isActive ? 'rotate-90 text-purple-400' : 'text-slate-500'}`} />
                      </div>
                    </div>

                    {/* Single Expanded Inspector Panel (Visible ONLY for the Active Stage) */}
                    {isActive && (
                      <div className="px-3 pb-3 sm:px-4 sm:pb-4 pt-1 border-t border-purple-900/40 space-y-3 animate-in fade-in duration-200">
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                          {step.desc}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-1.5 pt-1">
                          {step.bullets.map((bullet, i) => (
                            <div key={i} className="bg-purple-950/60 border border-purple-800/50 px-2.5 py-1.5 rounded-lg text-xs text-purple-200 font-medium flex items-center gap-2">
                              <Check className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                              <span className="truncate">{bullet}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                  </div>
                );
              })}
            </div>

            {/* Supporting Caption */}
            <div className="text-xs text-slate-400 flex items-center gap-2 pt-1 font-normal">
              <CornerDownRight className="w-3.5 h-3.5 text-purple-400 shrink-0" />
              <span>Hover or tap any stage to activate dynamic software architecture blueprint.</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
