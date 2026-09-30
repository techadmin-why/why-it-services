import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [view, setView] = useState('initial'); // 'initial' | 'customize'

  // Preferences toggle states
  const [preferences, setPreferences] = useState({
    necessary: true,
    preferences: true,
    analytics: true,
    marketing: true
  });

  useEffect(() => {
    const consent = localStorage.getItem('why_cookie_consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const consentData = {
      status: 'accepted_all',
      preferences: { necessary: true, preferences: true, analytics: true, marketing: true },
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('why_cookie_consent', JSON.stringify(consentData));
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    const consentData = {
      status: 'rejected_optional',
      preferences: { necessary: true, preferences: false, analytics: false, marketing: false },
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('why_cookie_consent', JSON.stringify(consentData));
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    const consentData = {
      status: 'custom',
      preferences,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('why_cookie_consent', JSON.stringify(consentData));
    setIsVisible(false);
  };

  const toggleCategory = (key) => {
    if (key === 'necessary') return; // Strictly necessary cookies are always enabled
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  if (!isVisible) return null;

  return (
    <div
      style={{ zoom: 0.9090909 }}
      className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-50 max-w-[350px] w-[calc(100%-2rem)] bg-white border border-slate-200/90 shadow-2xl rounded-2xl p-4 sm:p-5 text-[#0F172A] font-sans antialiased animate-in fade-in slide-in-from-bottom-5 duration-300"
    >
      
      {view === 'initial' ? (
        /* INITIAL CARD VIEW (Narrower floating card & custom copy text) */
        <div className="space-y-3.5">
          <div className="space-y-1">
            <h3 className="font-extrabold text-sm sm:text-base text-[#0F172A] tracking-tight">
              Cookie Preferences
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              We use cookies to optimize site security, analyze traffic, and enhance your digital experience. Read our{' '}
              <Link to="/privacy" className="text-[#6D28D9] font-semibold underline hover:text-[#5B21B6] transition-colors">
                Privacy Policy
              </Link>
              .
            </p>
          </div>

          <div className="grid grid-cols-3 gap-1.5 pt-0.5">
            <button
              type="button"
              onClick={handleRejectAll}
              className="bg-[#F1F5F9] hover:bg-slate-200 text-slate-700 text-[11px] font-bold py-2 px-2.5 rounded-xl transition-all text-center"
            >
              Decline
            </button>
            
            <button
              type="button"
              onClick={() => setView('customize')}
              className="bg-[#F1F5F9] hover:bg-slate-200 text-slate-700 text-[11px] font-bold py-2 px-2.5 rounded-xl transition-all text-center"
            >
              Preferences
            </button>
            
            <button
              type="button"
              onClick={handleAcceptAll}
              className="bg-[#6D28D9] hover:bg-[#5B21B6] text-white text-[11px] font-extrabold py-2 px-2.5 rounded-xl transition-all shadow-sm text-center"
            >
              Allow All
            </button>
          </div>
        </div>
      ) : (
        /* CUSTOMIZE PREFERENCES TOGGLES VIEW */
        <div className="space-y-3.5 max-h-[70vh] overflow-y-auto pr-0.5">
          
          <div className="space-y-1 border-b border-slate-100 pb-2.5">
            <div className="flex items-center justify-between">
              <h3 className="font-extrabold text-sm sm:text-base text-[#0F172A] tracking-tight">
                Privacy Controls
              </h3>
              <button
                type="button"
                onClick={() => setView('initial')}
                className="text-[11px] font-bold text-slate-400 hover:text-[#6D28D9] transition-colors"
              >
                &larr; Back
              </button>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              Manage your cookie choices below. Read our{' '}
              <Link to="/privacy" className="text-[#6D28D9] font-semibold underline hover:text-[#5B21B6] transition-colors">
                Privacy Policy
              </Link>
              .
            </p>
          </div>

          {/* TOGGLE CATEGORIES LIST */}
          <div className="space-y-2">
            
            {/* 1. Necessary */}
            <div className="bg-[#F8FAFC] border border-slate-100 rounded-xl p-3 flex items-center justify-between gap-2.5">
              <div className="space-y-0.5">
                <div className="font-bold text-xs text-[#0F172A]">Strictly Necessary</div>
                <div className="text-[10px] text-slate-500 font-medium leading-tight">Essential for platform security and basic operations.</div>
              </div>
              
              {/* Locked Switch */}
              <button
                type="button"
                disabled
                className="w-10 h-5 bg-[#0F172A] rounded-full p-0.5 flex items-center justify-end cursor-not-allowed opacity-90 shrink-0"
              >
                <div className="w-4 h-4 bg-white rounded-full shadow-md" />
              </button>
            </div>

            {/* 2. Preferences */}
            <div className="bg-[#F8FAFC] border border-slate-100 rounded-xl p-3 flex items-center justify-between gap-2.5">
              <div className="space-y-0.5">
                <div className="font-bold text-xs text-[#0F172A]">User Preferences</div>
                <div className="text-[10px] text-slate-500 font-medium leading-tight">Remembers your display choices and settings.</div>
              </div>
              
              {/* Interactive Switch */}
              <button
                type="button"
                onClick={() => toggleCategory('preferences')}
                className={`w-10 h-5 rounded-full p-0.5 flex items-center transition-colors shrink-0 ${
                  preferences.preferences ? 'bg-[#0F172A] justify-end' : 'bg-slate-300 justify-start'
                }`}
              >
                <div className="w-4 h-4 bg-white rounded-full shadow-md transition-transform" />
              </button>
            </div>

            {/* 3. Analytics */}
            <div className="bg-[#F8FAFC] border border-slate-100 rounded-xl p-3 flex items-center justify-between gap-2.5">
              <div className="space-y-0.5">
                <div className="font-bold text-xs text-[#0F172A]">Performance & Analytics</div>
                <div className="text-[10px] text-slate-500 font-medium leading-tight">Helps us measure traffic and optimize performance.</div>
              </div>
              
              <button
                type="button"
                onClick={() => toggleCategory('analytics')}
                className={`w-10 h-5 rounded-full p-0.5 flex items-center transition-colors shrink-0 ${
                  preferences.analytics ? 'bg-[#0F172A] justify-end' : 'bg-slate-300 justify-start'
                }`}
              >
                <div className="w-4 h-4 bg-white rounded-full shadow-md transition-transform" />
              </button>
            </div>

            {/* 4. Marketing */}
            <div className="bg-[#F8FAFC] border border-slate-100 rounded-xl p-3 flex items-center justify-between gap-2.5">
              <div className="space-y-0.5">
                <div className="font-bold text-xs text-[#0F172A]">Marketing & Outreach</div>
                <div className="text-[10px] text-slate-500 font-medium leading-tight">Allows us to share tailored technology updates.</div>
              </div>
              
              <button
                type="button"
                onClick={() => toggleCategory('marketing')}
                className={`w-10 h-5 rounded-full p-0.5 flex items-center transition-colors shrink-0 ${
                  preferences.marketing ? 'bg-[#0F172A] justify-end' : 'bg-slate-300 justify-start'
                }`}
              >
                <div className="w-4 h-4 bg-white rounded-full shadow-md transition-transform" />
              </button>
            </div>

          </div>

          {/* SAVE PREFERENCES BUTTON */}
          <div className="pt-1">
            <button
              type="button"
              onClick={handleSavePreferences}
              className="w-full bg-[#6D28D9] hover:bg-[#5B21B6] text-white font-extrabold text-xs py-2.5 rounded-xl uppercase tracking-wider shadow-sm transition-all text-center"
            >
              Confirm Choices
            </button>
          </div>

        </div>
      )}

    </div>
  );
}


