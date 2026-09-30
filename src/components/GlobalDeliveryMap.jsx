import React from 'react';
import { Globe, MapPin, ShieldCheck, Cpu, Clock, Users, ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function GlobalDeliveryMap() {
  const googleMapsUrl = "https://maps.app.goo.gl/TBWPpqZDwFBvMyF98";

  return (
    <div className="bg-gradient-to-br from-[#0F172A] via-[#1E1B4B] to-[#0F172A] text-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-slate-800 my-12">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
        
        {/* Left Info */}
        <div className="lg:w-1/2 space-y-6">
          <div className="inline-flex items-center gap-2 bg-purple-950/80 border border-purple-800 text-purple-300 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Globe className="w-4 h-4 text-purple-400" />
            <span>Sole Global Headquarters</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
            <span className="text-white font-extrabold">Global Engineering Delivery</span> <span className="text-purple-300">& 24/7 Operations</span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Our sole global engineering headquarters in Bengaluru, India delivers end-to-end AI software, custom web & mobile platforms, cloud data lakes, and managed IT operations for clients worldwide.
          </p>

          {/* Sole HQ Address Card */}
          <div className="bg-slate-900/90 border border-purple-500/40 p-6 rounded-2xl space-y-3.5 shadow-lg">
            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold text-purple-300 uppercase tracking-wider flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-purple-400" />
                <span>WHY Services India Private Limited</span>
              </span>
              <span className="text-[10px] font-bold bg-purple-900/80 text-purple-200 px-2 py-0.5 rounded border border-purple-700">
                GLOBAL HQ
              </span>
            </div>

            <a 
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-white flex items-start gap-2 hover:text-purple-300 transition-colors group leading-relaxed font-semibold"
            >
              <MapPin className="w-4 h-4 text-purple-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
              <span>
                1st Floor, No. 14/1, Balaji Krupa, 2nd Main Road, Seshadripuram, Bengaluru – 560020, Karnataka, India
              </span>
              <ExternalLink className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5 opacity-80" />
            </a>

            <div className="text-xs text-slate-300 flex items-center gap-2 pt-1">
              <Cpu className="w-4 h-4 text-purple-400 shrink-0" />
              <span>Core Pods: AI/ML Research, Full-Stack SaaS, Cloud Data Lakes, QA Automation</span>
            </div>

            <div className="text-xs text-purple-300 flex items-center gap-2 font-mono pt-1">
              <Clock className="w-4 h-4 text-purple-400 shrink-0" />
              <span>24/7 Operations & Core Global Engineering R&D Center</span>
            </div>
          </div>
        </div>

        {/* Right Visual Map Card */}
        <div className="lg:w-1/2 relative bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Global SLA & Quality Assurance</span>
            <span className="text-[10px] font-mono bg-emerald-950 text-emerald-400 border border-emerald-800 px-2 py-0.5 rounded font-bold">
              100% Uptime SLA
            </span>
          </div>

          <div className="space-y-4">
            <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700/60 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-bold text-white">48-Hour Rapid Pod Onboarding</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Pre-vetted senior software engineers onboarded directly into your Jira & Git workflows.</div>
              </div>
            </div>

            <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700/60 flex items-start gap-3">
              <Users className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-bold text-white">Time-Zone Aligned Daily Operations</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Seamless overlapping working hours aligned with EST, PST, GMT, and IST schedules.</div>
              </div>
            </div>
          </div>

          <div className="pt-2">
            <Link
              to="/schedule-discovery"
              className="w-full bg-[#6D28D9] hover:bg-[#5B21B6] text-white text-xs font-bold py-3.5 rounded-xl text-center transition-all flex items-center justify-center gap-2 shadow-md"
            >
              <span>Schedule Global Architecture Call</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
