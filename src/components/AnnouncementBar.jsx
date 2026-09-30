import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AnnouncementBar() {
  return (
    <div className="bg-white border-b border-slate-200/80 text-[#6D28D9] py-2 px-3 sm:px-4 text-xs font-semibold relative z-30 overflow-hidden w-full max-w-full hover:bg-purple-50/50 transition-colors">
      <Link to="/reserve-spot" className="max-w-7xl mx-auto flex items-center justify-between gap-2 min-w-0 group">
        
        {/* Left / Center Announcement Text */}
        <div className="flex items-center gap-2 min-w-0 max-w-full overflow-hidden mx-auto sm:mx-0">
          <span className="bg-[#6D28D9] text-white px-2 py-0.5 rounded-full text-[10px] uppercase font-bold tracking-wider hidden sm:flex items-center gap-1 shrink-0">
            <Sparkles className="w-3 h-3" /> Event
          </span>
          <span className="bg-[#6D28D9] text-white px-1.5 py-0.5 rounded-full text-[9px] uppercase font-bold tracking-wider sm:hidden flex items-center gap-0.5 shrink-0">
            <Sparkles className="w-2.5 h-2.5" /> EVENT
          </span>
          <span className="text-purple-950 font-medium truncate text-[11.5px] sm:text-xs">
            WHY Digital Engineering Summit 2026: Modernizing Infrastructure & Connected Services
          </span>
        </div>

        {/* Right: Reserve Link Action */}
        <div className="flex items-center gap-1 text-[#6D28D9] font-bold shrink-0 text-xs">
          <span className="hidden md:inline whitespace-nowrap group-hover:underline">Reserve Your Spot</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </div>

      </Link>
    </div>
  );
}


