import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calculator, CheckCircle2, ArrowRight, Cpu, Layers, Sparkles, 
  Clock, ShieldCheck, Users, Code, Zap
} from 'lucide-react';

export default function ProjectEstimator() {
  const [selectedCategory, setSelectedCategory] = useState('ai');
  const [squadSize, setSquadSize] = useState('medium'); // small (3-4), medium (5-7), enterprise (8-12)
  const [duration, setDuration] = useState('3m'); // 1m, 3m, 6m, 12m
  const [includeSRE, setIncludeSRE] = useState(true);
  const [includeQA, setIncludeQA] = useState(true);

  const categories = [
    { id: 'ai', name: 'Generative AI & LLM Pod', icon: Cpu, desc: 'RAG pipelines, custom model fine-tuning & prompt engineering' },
    { id: 'web_saas', name: 'Cloud SaaS & Web Platform', icon: Code, desc: 'Full-stack React/Node/Python microservices architecture' },
    { id: 'mobile', name: 'Native / Cross-Platform Mobile', icon: Zap, desc: 'iOS & Android native apps with real-time telemetry' },
    { id: 'data_lake', name: 'Data Engineering & Lakes', icon: Layers, desc: 'Real-time ETL pipelines, Snowflake/BigQuery data warehousing' }
  ];

  const squadOptions = {
    small: { title: 'Agile Pod (3-4 Devs)', devs: '1 Lead Architect, 2 Full-Stack Devs, 1 QA', velocity: 'Fast MVP' },
    medium: { title: 'Scale Pod (5-7 Devs)', devs: '1 Lead Architect, 3 Full-Stack Devs, 1 AI/Data Specialist, 1 QA, 1 DevOps', velocity: 'High Velocity' },
    enterprise: { title: 'Enterprise Squad (8-12 Devs)', devs: '2 Architects, 5 Senior Devs, 2 AI Specialists, 2 QA, 1 SRE Lead', velocity: 'Full Scale Delivery' }
  };

  const calculateEstimate = () => {
    let baseWeekly = squadSize === 'small' ? 4500 : squadSize === 'medium' ? 8500 : 16000;
    if (includeSRE) baseWeekly += 1200;
    if (includeQA) baseWeekly += 1000;
    
    let weeks = duration === '1m' ? 4 : duration === '3m' ? 12 : duration === '6m' ? 24 : 48;
    let totalEstimate = baseWeekly * weeks;

    return {
      weekly: baseWeekly,
      total: totalEstimate,
      weeks
    };
  };

  const est = calculateEstimate();
  const durationMonths = duration.replace('m', '');

  const getServiceInterest = (cat) => {
    if (cat === 'ai') return 'generative-ai';
    if (cat === 'web_saas' || cat === 'mobile') return 'digital-engineering';
    if (cat === 'data_lake') return 'data-engineering';
    return 'digital-strategy';
  };

  return (
    <div className="bg-gradient-to-b from-[#F8F3FF] via-white to-[#FAFAFC] border border-[#E9D5FF] rounded-3xl p-5 sm:p-7 shadow-lg my-6 sm:my-8">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-6">
        <div className="inline-flex items-center gap-2 bg-[#F3E8FF] border border-[#E9D5FF] text-[#6D28D9] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
          <Calculator className="w-3.5 h-3.5 text-[#6D28D9]" />
          <span>Interactive Estimator</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#0F172A]">
          Configure Your Dedicated Engineering Pod
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
          Estimate team composition, sprint velocity, and budget scope for your upcoming digital project.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Options Controls */}
        <div className="lg:col-span-7 space-y-4">
          
          {/* 1. Category Selection */}
          <div>
            <label className="text-[11px] font-extrabold text-[#0F172A] uppercase tracking-wider block mb-2">
              1. Select Project Domain & Architecture
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {categories.map((cat) => {
                const Icon = cat.icon;
                const isSelected = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`p-3 rounded-xl border text-left transition-all flex flex-col justify-between ${
                      isSelected 
                        ? 'bg-gradient-to-br from-[#F3E8FF] to-white border-[#6D28D9] shadow-md ring-2 ring-[#6D28D9]/20' 
                        : 'bg-white border-slate-200 hover:border-[#E9D5FF] hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${
                        isSelected ? 'bg-[#6D28D9] text-white' : 'bg-slate-100 text-slate-600'
                      }`}>
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      {isSelected && <CheckCircle2 className="w-4 h-4 text-[#6D28D9]" />}
                    </div>
                    <div>
                      <div className="font-bold text-xs text-[#0F172A]">{cat.name}</div>
                      <div className="text-[10px] text-slate-500 mt-0.5 leading-tight">{cat.desc}</div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. Squad Size */}
          <div>
            <label className="text-[11px] font-extrabold text-[#0F172A] uppercase tracking-wider block mb-2">
              2. Choose Engineering Pod Size
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {Object.keys(squadOptions).map((key) => {
                const opt = squadOptions[key];
                const isSelected = squadSize === key;
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setSquadSize(key)}
                    className={`p-2.5 rounded-xl border text-center transition-all ${
                      isSelected 
                        ? 'bg-[#6D28D9] text-white border-[#6D28D9] shadow-md' 
                        : 'bg-white text-slate-700 border-slate-200 hover:border-[#E9D5FF]'
                    }`}
                  >
                    <div className="text-xs font-bold">{opt.title.split(' (')[0]}</div>
                    <div className={`text-[10px] mt-0.5 ${isSelected ? 'text-purple-200' : 'text-slate-500'}`}>
                      {opt.title.split(' (')[1]?.replace(')', '') || ''}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 3. Duration & Add-ons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="text-[11px] font-extrabold text-[#0F172A] uppercase tracking-wider block mb-1.5">
                3. Engagement Timeline
              </label>
              <select
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="w-full bg-white border border-slate-200 rounded-xl p-2.5 text-xs font-bold text-[#0F172A] focus:outline-none focus:border-[#6D28D9]"
              >
                <option value="1m">1 Month Proof-of-Concept Sprint</option>
                <option value="3m">3 Months Core MVP Build</option>
                <option value="6m">6 Months Scale-Up Deployment</option>
                <option value="12m">12 Months Dedicated Pod Partnership</option>
              </select>
            </div>

            <div>
              <label className="text-[11px] font-extrabold text-[#0F172A] uppercase tracking-wider block mb-1.5">
                4. Value Add-on Pod Features
              </label>
              <div className="space-y-1.5">
                <label className="flex items-center gap-2 cursor-pointer bg-white p-2 rounded-xl border border-slate-200 text-xs text-slate-700">
                  <input 
                    type="checkbox" 
                    checked={includeSRE} 
                    onChange={(e) => setIncludeSRE(e.target.checked)}
                    className="accent-[#6D28D9]"
                  />
                  <span className="font-semibold text-[11px]">Include 24/7 SRE Cloud Ops</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer bg-white p-2 rounded-xl border border-slate-200 text-xs text-slate-700">
                  <input 
                    type="checkbox" 
                    checked={includeQA} 
                    onChange={(e) => setIncludeQA(e.target.checked)}
                    className="accent-[#6D28D9]"
                  />
                  <span className="font-semibold text-[11px]">Include Automated QA Suite</span>
                </label>
              </div>
            </div>
          </div>

        </div>

        {/* Right Summary Box */}
        <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-3xl p-5 sm:p-6 text-white space-y-4 shadow-2xl relative overflow-hidden">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-xs font-bold uppercase tracking-wider text-purple-300">Pod Summary</span>
            </div>
            <span className="text-[10px] font-mono bg-purple-950/80 text-purple-300 border border-purple-800 px-2 py-0.5 rounded-md font-bold">
              EST-2026
            </span>
          </div>

          <div className="space-y-2">
            <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Allocated Team</div>
            <div className="text-xs font-bold text-slate-200 bg-slate-800/60 p-2.5 rounded-xl border border-slate-700/60 leading-relaxed">
              {squadOptions[squadSize].devs}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 border-t border-slate-800 pt-3">
            <div>
              <div className="text-[10px] text-slate-400 font-semibold uppercase">Sprint Velocity</div>
              <div className="text-xs sm:text-sm font-extrabold text-purple-400 mt-0.5">{squadOptions[squadSize].velocity}</div>
            </div>
            <div>
              <div className="text-[10px] text-slate-400 font-semibold uppercase">Timeline Scope</div>
              <div className="text-xs sm:text-sm font-extrabold text-purple-400 mt-0.5">{est.weeks} Weeks</div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-3 space-y-0.5">
            <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Estimated Investment Scope</div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white">
              ${est.total.toLocaleString()} <span className="text-xs font-normal text-slate-400">USD</span>
            </div>
            <div className="text-[10px] text-purple-300">
              Approx. ${est.weekly.toLocaleString()} / week inclusive of pod management
            </div>
          </div>

          <div className="pt-1">
            <Link
              to="/contact"
              state={{
                serviceInterest: getServiceInterest(selectedCategory),
                budget: `$${est.total.toLocaleString()} USD (${durationMonths} mos, ${squadOptions[squadSize].title})`,
                notes: `Squad: ${squadOptions[squadSize].title} (${squadOptions[squadSize].devs}), Category: ${selectedCategory.toUpperCase()}, Duration: ${durationMonths} Months, Estimated Scope: $${est.total.toLocaleString()} USD`
              }}
              className="w-full bg-gradient-to-r from-[#6D28D9] to-[#5B21B6] hover:from-[#5B21B6] hover:to-[#4C1D95] text-white font-extrabold py-3.5 px-5 rounded-xl transition-all shadow-lg text-xs uppercase tracking-wider flex items-center justify-center gap-2 ring-2 ring-purple-500/30 text-center"
            >
              <span>LOCK IN THIS SQUAD ESTIMATE</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <div className="text-[10px] text-slate-400 text-center mt-2">
              Zero obligation • Custom SOW & NDA provided upon initial discovery call
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
