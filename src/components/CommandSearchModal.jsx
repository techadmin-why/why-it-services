import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, Command, Code2, Compass, Layers, BookOpen, ShieldCheck, ArrowRight } from 'lucide-react';

export default function CommandSearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Trigger open via parent
          const searchBtn = document.getElementById('global-search-trigger');
          if (searchBtn) searchBtn.click();
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const searchItems = [
    { title: 'Generative AI & LLM Fine-Tuning', path: '/services/generative-ai', category: 'Services', icon: Code2 },
    { title: 'Digital Strategy & Technology Audits', path: '/services/digital-strategy', category: 'Services', icon: Compass },
    { title: 'Digital Engineering & QA Verification', path: '/services/digital-engineering', category: 'Services', icon: Code2 },
    { title: 'Data Engineering & Data Lake Pipelines', path: '/services/data-engineering', category: 'Services', icon: Layers },
    { title: 'Infrastructure Managed Services (L1/L2)', path: '/services/infrastructure-services', category: 'Services', icon: Layers },
    { title: 'Healthcare & Telemetry Solutions', path: '/solutions/healthcare', category: 'Solutions', icon: Compass },
    { title: 'Fintech & Enterprise Banking Solutions', path: '/solutions/fintech', category: 'Solutions', icon: Compass },
    { title: 'Family Ecosystem Care Platform', path: '/solutions/family-care', category: 'Solutions', icon: Compass },
    { title: 'Enterprise SaaS & Data Lakes', path: '/solutions/saas', category: 'Solutions', icon: Compass },
    { title: 'Hire Dedicated Senior Developers (48h)', path: '/hire', category: 'Talent', icon: Code2 },
    { title: 'Enterprise Case Studies Showcase', path: '/case-studies', category: 'Portfolio', icon: BookOpen },
    { title: 'Engineering Insights & Tech Blog', path: '/insights', category: 'Insights', icon: BookOpen },
    { title: 'Security Statement & SOC2 Controls', path: '/security', category: 'Governance', icon: ShieldCheck },
    { title: 'Trust & Safety Framework', path: '/trust-safety', category: 'Governance', icon: ShieldCheck },
    { title: 'Knowledge Base & FAQs', path: '/faq', category: 'Help', icon: BookOpen }
  ];

  const results = searchItems.filter(item => 
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (path) => {
    navigate(path);
    onClose();
    setQuery('');
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-start justify-center pt-16 sm:pt-24 p-4 animate-in fade-in duration-150">
      <div className="bg-white border border-[#E9D5FF] rounded-3xl max-w-2xl w-full shadow-2xl overflow-hidden relative">
        
        {/* Search Header Input */}
        <div className="p-4 border-b border-slate-200 flex items-center gap-3 bg-slate-50">
          <Search className="w-5 h-5 text-[#6D28D9] shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Search offerings, tech stack, case studies... (Ctrl + K)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm font-bold text-[#0F172A] focus:outline-none placeholder:text-slate-400"
          />
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white border border-slate-200 text-slate-400 hover:text-[#6D28D9] flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-3 space-y-1">
          {results.map((item, idx) => {
            const Icon = item.icon;
            return (
              <button
                key={idx}
                onClick={() => handleSelect(item.path)}
                className="w-full text-left p-3 rounded-xl hover:bg-[#F3E8FF] transition-colors flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white border border-[#E9D5FF] text-[#6D28D9] flex items-center justify-center shadow-sm">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#0F172A] group-hover:text-[#6D28D9] transition-colors">{item.title}</div>
                    <div className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">{item.category}</div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-[#6D28D9] group-hover:translate-x-1 transition-all" />
              </button>
            );
          })}

          {results.length === 0 && (
            <div className="text-center py-12 text-slate-500">
              <p className="text-xs font-semibold">No results matching "{query}"</p>
            </div>
          )}
        </div>

        {/* Footer Shortcut Bar */}
        <div className="p-3 border-t border-slate-100 bg-slate-50 flex items-center justify-between text-[11px] text-slate-400 font-semibold">
          <span className="flex items-center gap-1">
            <Command className="w-3 h-3" /> Navigation Command Palette
          </span>
          <span>Press <kbd className="bg-white border border-slate-200 px-1.5 py-0.5 rounded text-[10px] text-slate-600 font-mono">ESC</kbd> to close</span>
        </div>

      </div>
    </div>
  );
}
