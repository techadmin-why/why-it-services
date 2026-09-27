import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home as HomeIcon, HelpCircle } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] bg-[#FAFAFC] flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full text-center space-y-6 bg-white p-8 sm:p-10 rounded-3xl border border-[#E9D5FF] shadow-lg">
        <div className="w-16 h-16 bg-[#F3E8FF] border border-[#E9D5FF] text-[#6D28D9] rounded-2xl flex items-center justify-center mx-auto shadow-sm">
          <HelpCircle className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#6D28D9] bg-[#F3E8FF] px-3 py-1 rounded-full border border-[#E9D5FF]">
            404 Error
          </span>
          <h1 className="text-3xl font-extrabold text-[#0F172A] tracking-tight">
            Page Not Found
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            The page or resource you are looking for doesn't exist, has been moved, or is temporarily unavailable.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto bg-[#6D28D9] hover:bg-[#5B21B6] text-white text-xs font-bold px-6 py-3.5 rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
          >
            <HomeIcon className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
          <Link
            to="/services"
            className="w-full sm:w-auto bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold px-6 py-3.5 rounded-xl transition-all flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Explore Offerings</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
