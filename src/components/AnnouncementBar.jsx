import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AnnouncementBar() {
  return (
    <div className="bg-purple-50 border-b border-purple-100 text-[#6D28D9] py-2 px-4 text-xs font-semibold">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2 mx-auto sm:mx-0">
          <span className="bg-[#6D28D9] text-white px-2 py-0.5 rounded-full text-[10px] uppercase font-bold tracking-wider flex items-center gap-1">
            <Sparkles className="w-3 h-3" /> Event
          </span>
          <span className="text-purple-950 font-medium hidden sm:inline">
            WHY Digital Engineering Summit 2026: Modernizing Infrastructure & Connected Services
          </span>
          <span className="text-purple-950 font-medium sm:hidden">
            WHY Digital Engineering Summit 2026
          </span>
        </div>
        <Link 
          to="/contact" 
          className="hidden md:flex items-center gap-1 text-[#6D28D9] hover:text-purple-900 font-bold hover:underline"
        >
          <span>Reserve Your Spot</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
