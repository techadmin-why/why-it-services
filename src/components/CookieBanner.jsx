import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('why_cookie_consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('why_cookie_consent', 'accepted_all');
    setIsVisible(false);
  };

  const handleNecessaryOnly = () => {
    localStorage.setItem('why_cookie_consent', 'necessary_only');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 shadow-2xl p-4 sm:p-6 transition-all duration-300 animate-in slide-in-from-bottom-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        
        <div className="space-y-1 max-w-3xl">
          <h4 className="font-bold text-sm text-[#0F172A]">Cookie Preferences</h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            We use cookies to improve your experience, remember your preferences, and understand how our website is used. Necessary cookies are always enabled. You can accept or reject optional cookies.{' '}
            <Link to="/privacy" className="text-[#6D28D9] font-semibold underline hover:text-[#5B21B6]">
              Read our Cookie Notice
            </Link>
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 shrink-0 w-full md:w-auto justify-end">
          <button
            onClick={handleNecessaryOnly}
            className="w-full sm:w-auto bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 text-xs font-semibold px-5 py-2.5 rounded-lg transition-all"
          >
            Only Necessary Cookies
          </button>
          <button
            onClick={handleAcceptAll}
            className="w-full sm:w-auto bg-[#009688] hover:bg-[#00897B] text-white text-xs font-bold px-6 py-2.5 rounded-lg transition-all shadow-sm"
          >
            Accept All Cookies
          </button>
        </div>

      </div>
    </div>
  );
}
