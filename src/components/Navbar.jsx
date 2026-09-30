import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ChevronDown, ChevronRight, ArrowRight, Sparkles, Menu, X, 
  Award
} from 'lucide-react';
import AnnouncementBar from './AnnouncementBar';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        setActiveDropdown(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const [expandedMobileSection, setExpandedMobileSection] = useState(null);

  const toggleMobileSection = (section) => {
    setExpandedMobileSection(prev => prev === section ? null : section);
  };

  useEffect(() => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    setExpandedMobileSection(null);
  }, [location]);

  const closeDropdown = () => setActiveDropdown(null);
  const closeMobileMenu = () => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    setExpandedMobileSection(null);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200/80 shadow-sm transition-all duration-200 w-full">
      <AnnouncementBar />

      <nav 
        aria-label="Main Navigation"
        onMouseLeave={() => setActiveDropdown(null)}
        className="relative max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 bg-white transition-all duration-200 w-full py-3.5 sm:py-4"
      >
        <div className="flex items-center justify-between gap-3 sm:gap-8">
          
          {/* Brand Logo */}
          <Link 
            to="/" 
            onClick={closeDropdown} 
            className="flex items-center gap-2.5 sm:gap-3 group shrink-0 min-w-0 max-w-[calc(100vw-80px)] sm:max-w-none outline-none focus:outline-none focus:ring-0 focus-visible:outline-none"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#6D28D9] to-[#4C1D95] flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform shrink-0">
              <span className="font-extrabold text-base sm:text-lg tracking-wider">W</span>
            </div>
            <div className="flex flex-col min-w-0 overflow-hidden">
              <span className="font-extrabold text-sm sm:text-base lg:text-lg text-[#0F172A] tracking-tight leading-none group-hover:text-[#6D28D9] transition-colors whitespace-nowrap">
                WHY <span className="text-[#6D28D9]">IT Services</span>
              </span>
              <span className="text-[8.5px] sm:text-[10px] font-semibold text-slate-500 tracking-wider uppercase mt-0.5 truncate max-w-[140px] xs:max-w-[190px] sm:max-w-none">
                AI & Enterprise Software Engineering
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Items */}
          <div className="hidden lg:flex items-center gap-5 xl:gap-7 shrink-0">

            {/* 1. OFFERINGS */}
            <div onMouseEnter={() => setActiveDropdown('offerings')}>
              <button 
                type="button"
                onClick={() => setActiveDropdown(activeDropdown === 'offerings' ? null : 'offerings')}
                className={`flex items-center gap-1.5 text-xs font-bold py-3 tracking-wider transition-colors ${
                  location.pathname.startsWith('/services') || activeDropdown === 'offerings' ? 'text-[#6D28D9]' : 'text-slate-800 hover:text-[#6D28D9]'
                }`}
              >
                OFFERINGS
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'offerings' ? 'rotate-180 text-[#6D28D9]' : ''}`} />
              </button>
            </div>

            {/* 2. DOMAINS */}
            <div onMouseEnter={() => setActiveDropdown('domains')}>
              <button 
                type="button"
                onClick={() => setActiveDropdown(activeDropdown === 'domains' ? null : 'domains')}
                className={`flex items-center gap-1.5 text-xs font-bold py-3 tracking-wider transition-colors ${
                  location.pathname.startsWith('/solutions') || activeDropdown === 'domains' ? 'text-[#6D28D9]' : 'text-slate-800 hover:text-[#6D28D9]'
                }`}
              >
                DOMAINS
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'domains' ? 'rotate-180 text-[#6D28D9]' : ''}`} />
              </button>
            </div>

            {/* 3. TALENT */}
            <div onMouseEnter={() => setActiveDropdown('talent')}>
              <button 
                type="button"
                onClick={() => setActiveDropdown(activeDropdown === 'talent' ? null : 'talent')}
                className={`flex items-center gap-1.5 text-xs font-bold py-3 tracking-wider transition-colors ${
                  location.pathname === '/hire' || activeDropdown === 'talent' ? 'text-[#6D28D9]' : 'text-slate-800 hover:text-[#6D28D9]'
                }`}
              >
                TALENT
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'talent' ? 'rotate-180 text-[#6D28D9]' : ''}`} />
              </button>
            </div>

            {/* 4. TECH STACK */}
            <div onMouseEnter={() => setActiveDropdown('tech')}>
              <button 
                type="button"
                onClick={() => setActiveDropdown(activeDropdown === 'tech' ? null : 'tech')}
                className={`flex items-center gap-1.5 text-xs font-bold py-3 tracking-wider transition-colors ${
                  activeDropdown === 'tech' ? 'text-[#6D28D9]' : 'text-slate-800 hover:text-[#6D28D9]'
                }`}
              >
                TECH STACK
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'tech' ? 'rotate-180 text-[#6D28D9]' : ''}`} />
              </button>
            </div>

            {/* 5. ABOUT WHY */}
            <div onMouseEnter={() => setActiveDropdown('company')}>
              <button 
                type="button"
                onClick={() => setActiveDropdown(activeDropdown === 'company' ? null : 'company')}
                className={`flex items-center gap-1.5 text-xs font-bold py-3 tracking-wider transition-colors ${
                  location.pathname === '/about' || activeDropdown === 'company' ? 'text-[#6D28D9]' : 'text-slate-800 hover:text-[#6D28D9]'
                }`}
              >
                ABOUT WHY
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'company' ? 'rotate-180 text-[#6D28D9]' : ''}`} />
              </button>
            </div>

          </div>

          {/* Right Action Button (Hidden when already on /schedule-discovery page) */}
          {location.pathname !== '/schedule-discovery' && (
            <div className="hidden lg:flex items-center gap-3 shrink-0">
              <Link
                to="/schedule-discovery"
                onClick={closeDropdown}
                className="whitespace-nowrap inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#6D28D9] to-[#5B21B6] hover:from-[#5B21B6] hover:to-[#4C1D95] text-white text-xs font-extrabold px-6 py-2.5 rounded-full transition-all shadow-md hover:shadow-lg group tracking-wider uppercase ring-2 ring-[#E9D5FF] shrink-0"
              >
                <span>SCHEDULE DISCOVERY</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform shrink-0" />
              </Link>
            </div>
          )}

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            className="lg:hidden p-2 text-slate-700 hover:text-[#6D28D9] focus:outline-none focus:ring-2 focus:ring-[#6D28D9] rounded-lg"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Desktop Mega Menu Dropdown Overlays (Anchored directly to relative <nav> container for full max-w-7xl width) */}
        
        {/* 1. OFFERINGS DROPDOWN OVERLAY */}
        {activeDropdown === 'offerings' && (
          <div 
            onMouseEnter={() => setActiveDropdown('offerings')}
            onMouseLeave={() => setActiveDropdown(null)}
            className="absolute top-full left-0 right-0 -mt-4 pt-4 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
          >
            <div className="max-w-5xl mx-auto bg-gradient-to-b from-[#F8F3FF] via-white to-[#FAFAFC] border border-[#E9D5FF] rounded-3xl shadow-2xl p-6 sm:p-8 grid grid-cols-12 gap-6">
              <div className="col-span-9 grid grid-cols-3 gap-6 border-r border-slate-200/80 pr-6">
                <div>
                  <Link to="/services/digital-strategy" onClick={closeDropdown} className="text-[11px] font-extrabold text-[#6D28D9] uppercase tracking-wider mb-3 pb-1 border-b border-[#E9D5FF] block hover:underline">
                    Digital Strategy & Audits
                  </Link>
                  <ul className="space-y-2 text-xs">
                    <li><Link to="/services/digital-strategy" onClick={closeDropdown} className="text-slate-700 hover:text-[#6D28D9] font-medium block">Discovery & Ideation</Link></li>
                    <li><Link to="/services/digital-strategy" onClick={closeDropdown} className="text-slate-700 hover:text-[#6D28D9] block">Experience Engineering</Link></li>
                    <li><Link to="/services/digital-strategy" onClick={closeDropdown} className="text-slate-700 hover:text-[#6D28D9] block">Tech & Data Debt Audits</Link></li>
                    <li><Link to="/services/digital-strategy" onClick={closeDropdown} className="text-slate-700 hover:text-[#6D28D9] block">Application Rationalization</Link></li>
                    <li><Link to="/services/digital-strategy" onClick={closeDropdown} className="text-slate-700 hover:text-[#6D28D9] block">IT Infrastructure Optimization</Link></li>
                    <li><Link to="/services/digital-strategy" onClick={closeDropdown} className="text-slate-700 hover:text-[#6D28D9] block">GRC & Risk Management</Link></li>
                  </ul>
                </div>

                <div>
                  <Link to="/services/digital-engineering" onClick={closeDropdown} className="text-[11px] font-extrabold text-[#6D28D9] uppercase tracking-wider mb-3 pb-1 border-b border-[#E9D5FF] block hover:underline">
                    Digital Engineering & QA
                  </Link>
                  <ul className="space-y-2 text-xs">
                    <li><Link to="/services/digital-engineering" onClick={closeDropdown} className="text-slate-700 hover:text-[#6D28D9] font-medium block">Enterprise App Development</Link></li>
                    <li><Link to="/services/digital-engineering" onClick={closeDropdown} className="text-slate-700 hover:text-[#6D28D9] block">Verification & Validation (QA)</Link></li>
                    <li><Link to="/services/digital-engineering" onClick={closeDropdown} className="text-slate-700 hover:text-[#6D28D9] block">Application Sustenance</Link></li>
                    <li><Link to="/services/digital-engineering" onClick={closeDropdown} className="text-slate-700 hover:text-[#6D28D9] block">Legacy Modernization</Link></li>
                    <li><Link to="/services/digital-engineering" onClick={closeDropdown} className="text-slate-700 hover:text-[#6D28D9] block">Model-Based Engineering</Link></li>
                    <li><Link to="/services/digital-engineering" onClick={closeDropdown} className="text-slate-700 hover:text-[#6D28D9] block">Concurrent Engineering</Link></li>
                  </ul>
                </div>

                <div>
                  <Link to="/services/data-engineering" onClick={closeDropdown} className="text-[11px] font-extrabold text-[#6D28D9] uppercase tracking-wider mb-3 pb-1 border-b border-[#E9D5FF] block hover:underline">
                    Data, AI & Managed Ops
                  </Link>
                  <ul className="space-y-2 text-xs">
                    <li><Link to="/services/data-engineering" onClick={closeDropdown} className="text-slate-700 hover:text-[#6D28D9] font-medium block">Data Lake Ingestion Layer</Link></li>
                    <li><Link to="/services/data-engineering" onClick={closeDropdown} className="text-slate-700 hover:text-[#6D28D9] block">Real-Time ETL Pipelines</Link></li>
                    <li><Link to="/services/generative-ai" onClick={closeDropdown} className="text-slate-700 hover:text-[#6D28D9] font-bold block">Generative AI & LLMs</Link></li>
                    <li><Link to="/services/generative-ai" onClick={closeDropdown} className="text-slate-700 hover:text-[#6D28D9] block">AI-Driven SDLC Code Gen</Link></li>
                    <li><Link to="/services/generative-ai" onClick={closeDropdown} className="text-slate-700 hover:text-[#6D28D9] block">RPA BOTs (Attended/Unattended)</Link></li>
                    <li><Link to="/services/infrastructure-services" onClick={closeDropdown} className="text-slate-700 hover:text-[#6D28D9] block">24/7 Infrastructure Managed Ops</Link></li>
                  </ul>
                </div>
              </div>

              <div className="col-span-3 bg-gradient-to-b from-[#F3E8FF] to-white border border-[#E9D5FF] rounded-2xl p-4 flex flex-col justify-between shadow-sm">
                <div>
                  <div className="w-8 h-8 rounded-lg bg-[#6D28D9] text-white flex items-center justify-center font-bold text-xs mb-3">
                    <Award className="w-4 h-4" />
                  </div>
                  <h4 className="font-extrabold text-xs text-[#0F172A] leading-snug">
                    Next-Gen AI & Engineering Pods
                  </h4>
                  <p className="text-[11px] text-slate-600 mt-2 leading-relaxed">
                    Agile software teams guiding enterprise strategy, data pipelines, and AI transformations.
                  </p>
                </div>
                <Link
                  to="/schedule-discovery"
                  onClick={closeDropdown}
                  className="mt-4 bg-[#6D28D9] hover:bg-[#5B21B6] text-white text-xs font-bold py-2.5 px-3 rounded-xl text-center transition-all flex items-center justify-center gap-1.5 shadow-sm whitespace-nowrap"
                >
                  <span>SCHEDULE DISCOVERY</span>
                  <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* 2. DOMAINS DROPDOWN OVERLAY */}
        {activeDropdown === 'domains' && (
          <div 
            onMouseEnter={() => setActiveDropdown('domains')}
            onMouseLeave={() => setActiveDropdown(null)}
            className="absolute top-full left-0 right-0 -mt-4 pt-4 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
          >
            <div className="max-w-4xl mx-auto bg-gradient-to-b from-[#F8F3FF] via-white to-[#FAFAFC] border border-[#E9D5FF] rounded-3xl shadow-2xl p-6 sm:p-8 grid grid-cols-12 gap-6">
              <div className="col-span-8 grid grid-cols-2 gap-4 border-r border-slate-200/80 pr-6">
                <ul className="space-y-2 text-xs">
                  <li><Link to="/solutions/family-care" onClick={closeDropdown} className="text-slate-700 hover:text-[#6D28D9] block">Family Ecosystem Care</Link></li>
                  <li><Link to="/solutions/healthcare" onClick={closeDropdown} className="text-slate-700 hover:text-[#6D28D9] block">Healthcare & Telemetry</Link></li>
                  <li><Link to="/solutions/fintech" onClick={closeDropdown} className="text-slate-700 hover:text-[#6D28D9] block">Fintech & Enterprise Banking</Link></li>
                  <li><Link to="/solutions/saas" onClick={closeDropdown} className="text-slate-700 hover:text-[#6D28D9] block">Enterprise SaaS & Data Lakes</Link></li>
                  <li><Link to="/solutions/ecommerce" onClick={closeDropdown} className="text-slate-700 hover:text-[#6D28D9] block">E-Commerce & Digital Retail</Link></li>
                </ul>
                <ul className="space-y-2 text-xs">
                  <li><Link to="/solutions/logistics" onClick={closeDropdown} className="text-slate-700 hover:text-[#6D28D9] block">Smart Logistics & Supply Chain</Link></li>
                  <li><Link to="/solutions/education" onClick={closeDropdown} className="text-slate-700 hover:text-[#6D28D9] block">EdTech & Digital Learning</Link></li>
                  <li><Link to="/solutions/real-estate" onClick={closeDropdown} className="text-slate-700 hover:text-[#6D28D9] block">Real Estate & Smart Buildings</Link></li>
                  <li><Link to="/solutions/manufacturing" onClick={closeDropdown} className="text-slate-700 hover:text-[#6D28D9] block">Manufacturing & Industry 4.0</Link></li>
                </ul>
              </div>

              <div className="col-span-4 bg-gradient-to-b from-[#F3E8FF] to-white border border-[#E9D5FF] rounded-2xl p-4 flex flex-col justify-between shadow-sm">
                <div>
                  <div className="inline-flex items-center gap-1 bg-[#6D28D9] text-white px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider mb-2">
                    <Sparkles className="w-3 h-3" /> FEATURED SOLUTION
                  </div>
                  <h4 className="font-extrabold text-xs text-[#0F172A] leading-snug">
                    WHY Family Care Platform
                  </h4>
                  <p className="text-[10px] text-slate-600 mt-1.5 leading-relaxed">
                    Comprehensive assistive care telemetry & real-time family health monitoring ecosystem.
                  </p>
                </div>
                <Link
                  to="/solutions/family-care"
                  onClick={closeDropdown}
                  className="mt-3 bg-[#6D28D9] hover:bg-[#5B21B6] text-white text-[11px] font-bold py-2 px-3 rounded-xl text-center transition-all flex items-center justify-center gap-1"
                >
                  <span>Explore Family Solution</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* 3. TALENT DROPDOWN OVERLAY */}
        {activeDropdown === 'talent' && (
          <div 
            onMouseEnter={() => setActiveDropdown('talent')}
            onMouseLeave={() => setActiveDropdown(null)}
            className="absolute top-full left-0 right-0 -mt-4 pt-4 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
          >
            <div className="max-w-3xl mx-auto bg-gradient-to-b from-[#F8F3FF] via-white to-[#FAFAFC] border border-[#E9D5FF] rounded-3xl shadow-2xl p-6 sm:p-8 grid grid-cols-3 gap-6">
              <div>
                <h4 className="text-[11px] font-extrabold text-[#6D28D9] uppercase tracking-wider mb-2.5 pb-1 border-b border-[#E9D5FF]">
                  Frontend & Web
                </h4>
                <ul className="space-y-1.5 text-xs">
                  <li><Link to="/hire" onClick={closeDropdown} className="text-slate-700 hover:text-[#6D28D9] block font-medium">React / Next.js Engineers</Link></li>
                  <li><Link to="/hire" onClick={closeDropdown} className="text-slate-700 hover:text-[#6D28D9] block">Angular Specialists</Link></li>
                  <li><Link to="/hire" onClick={closeDropdown} className="text-slate-700 hover:text-[#6D28D9] block">Vue.js Developers</Link></li>
                  <li><Link to="/hire" onClick={closeDropdown} className="text-slate-700 hover:text-[#6D28D9] block">TypeScript Full-Stackers</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="text-[11px] font-extrabold text-[#6D28D9] uppercase tracking-wider mb-2.5 pb-1 border-b border-[#E9D5FF]">
                  Backend & Mobile
                </h4>
                <ul className="space-y-1.5 text-xs">
                  <li><Link to="/hire" onClick={closeDropdown} className="text-slate-700 hover:text-[#6D28D9] block font-medium">Python & Node.js Leads</Link></li>
                  <li><Link to="/hire" onClick={closeDropdown} className="text-slate-700 hover:text-[#6D28D9] block">Java & .NET Architects</Link></li>
                  <li><Link to="/hire" onClick={closeDropdown} className="text-slate-700 hover:text-[#6D28D9] block">Flutter Mobile Developers</Link></li>
                  <li><Link to="/hire" onClick={closeDropdown} className="text-slate-700 hover:text-[#6D28D9] block">iOS & Android Native Devs</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="text-[11px] font-extrabold text-[#6D28D9] uppercase tracking-wider mb-2.5 pb-1 border-b border-[#E9D5FF]">
                  Dedicated Pods
                </h4>
                <ul className="space-y-1.5 text-xs">
                  <li><Link to="/hire" onClick={closeDropdown} className="text-[#6D28D9] font-bold hover:underline block">Dedicated Developer Teams (48h)</Link></li>
                  <li><Link to="/hire" onClick={closeDropdown} className="text-slate-700 hover:text-[#6D28D9] block">AI & LLM Specialists</Link></li>
                  <li><Link to="/hire" onClick={closeDropdown} className="text-slate-700 hover:text-[#6D28D9] block">Cloud & DevOps Leads</Link></li>
                  <li><Link to="/hire" onClick={closeDropdown} className="text-slate-700 hover:text-[#6D28D9] block">QA Automation Engineers</Link></li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* 4. TECH STACK DROPDOWN OVERLAY */}
        {activeDropdown === 'tech' && (
          <div 
            onMouseEnter={() => setActiveDropdown('tech')}
            onMouseLeave={() => setActiveDropdown(null)}
            className="absolute top-full left-0 right-0 -mt-4 pt-4 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
          >
            <div className="max-w-4xl mx-auto bg-gradient-to-b from-[#F8F3FF] via-white to-[#FAFAFC] border border-[#E9D5FF] rounded-3xl shadow-2xl p-6 sm:p-8 grid grid-cols-4 gap-6">
              <div>
                <h4 className="text-[11px] font-extrabold text-[#6D28D9] uppercase tracking-wider mb-2 pb-1 border-b border-[#E9D5FF]">AI & Data Science</h4>
                <ul className="space-y-1 text-xs text-slate-700">
                  <li>Python / PyTorch</li><li>OpenAI & LLMs</li><li>LangChain / RAG</li><li>Snowflake / Spark</li>
                </ul>
              </div>
              <div>
                <h4 className="text-[11px] font-extrabold text-[#6D28D9] uppercase tracking-wider mb-2 pb-1 border-b border-[#E9D5FF]">Cloud & Infra</h4>
                <ul className="space-y-1 text-xs text-slate-700">
                  <li>AWS / Azure / GCP</li><li>Docker & Kubernetes</li><li>Terraform / Ansible</li><li>CI/CD Pipelines</li>
                </ul>
              </div>
              <div>
                <h4 className="text-[11px] font-extrabold text-[#6D28D9] uppercase tracking-wider mb-2 pb-1 border-b border-[#E9D5FF]">Modern Web</h4>
                <ul className="space-y-1 text-xs text-slate-700">
                  <li>React / Next.js</li><li>TypeScript</li><li>Vue.js / Nuxt</li><li>Tailwind CSS</li>
                </ul>
              </div>
              <div>
                <h4 className="text-[11px] font-extrabold text-[#6D28D9] uppercase tracking-wider mb-2 pb-1 border-b border-[#E9D5FF]">Databases & Backend</h4>
                <ul className="space-y-1 text-xs text-slate-700">
                  <li>PostgreSQL / MySQL</li><li>MongoDB / Redis</li><li>Node.js / Express</li><li>Java / .NET Core</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* 5. ABOUT WHY DROPDOWN OVERLAY */}
        {activeDropdown === 'company' && (
          <div 
            onMouseEnter={() => setActiveDropdown('company')}
            onMouseLeave={() => setActiveDropdown(null)}
            className="absolute top-full left-0 right-0 -mt-4 pt-4 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
          >
            <div className="max-w-3xl mx-auto bg-gradient-to-b from-[#F8F3FF] via-white to-[#FAFAFC] border border-[#E9D5FF] rounded-3xl shadow-2xl p-6 sm:p-8 grid grid-cols-3 gap-6">
              <div>
                <h4 className="text-[11px] font-extrabold text-[#6D28D9] uppercase tracking-wider mb-2.5 pb-1 border-b border-[#E9D5FF]">Corporate</h4>
                <ul className="space-y-2 text-xs">
                  <li><Link to="/about" onClick={closeDropdown} className="text-slate-700 hover:text-[#6D28D9] font-bold block">About Us & Overview</Link></li>
                  <li><Link to="/about/news" onClick={closeDropdown} className="text-[#6D28D9] font-extrabold block hover:underline">News & Press Releases</Link></li>
                  <li><Link to="/about#leadership" onClick={closeDropdown} className="text-slate-700 hover:text-[#6D28D9] block">Leadership & Core Values</Link></li>
                  <li><Link to="/careers" onClick={closeDropdown} className="text-slate-700 hover:text-[#6D28D9] block">Careers at WHY</Link></li>
                  <li><Link to="/contact" onClick={closeDropdown} className="text-slate-700 hover:text-[#6D28D9] block">Contact Global HQ</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="text-[11px] font-extrabold text-[#6D28D9] uppercase tracking-wider mb-2.5 pb-1 border-b border-[#E9D5FF]">Trust & Insights</h4>
                <ul className="space-y-2 text-xs">
                  <li><Link to="/case-studies" onClick={closeDropdown} className="text-slate-700 hover:text-[#6D28D9] font-medium block">Case Studies Showcase</Link></li>
                  <li><Link to="/trust-safety" onClick={closeDropdown} className="text-slate-700 hover:text-[#6D28D9] block">Trust & ISO Compliance</Link></li>
                  <li><Link to="/faq" onClick={closeDropdown} className="text-slate-700 hover:text-[#6D28D9] block">Help Center & FAQs</Link></li>
                </ul>
              </div>

              <div className="bg-gradient-to-b from-[#F3E8FF] to-white border border-[#E9D5FF] rounded-2xl p-4">
                <h4 className="text-xs font-bold text-[#0F172A]">WHY IT Services</h4>
                <p className="text-[10px] text-slate-600 mt-1">Pioneering AI & enterprise software engineering pods built for agile product innovation.</p>
              </div>
            </div>
          </div>
        )}

        {/* Mobile Navigation Fullscreen Viewport Modal */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-[999] bg-[#0F172A]/75 backdrop-blur-md flex items-center justify-center p-3.5 sm:p-5 animate-in fade-in duration-200">
            
            {/* Modal Card Container */}
            <div 
              id="mobile-navigation"
              className="w-full max-w-lg bg-white rounded-3xl p-4 sm:p-5 shadow-2xl border border-slate-200/90 flex flex-col justify-between max-h-[90vh] overflow-hidden animate-in zoom-in-95 duration-200"
            >
              {/* Top Modal Header */}
              <div className="pb-3 border-b border-slate-100 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#6D28D9] to-[#4C1D95] flex items-center justify-center text-white shadow-sm font-extrabold text-sm">
                    W
                  </div>
                  <div>
                    <span className="text-xs font-extrabold text-[#0F172A] tracking-tight block">EXPLORE WHY DIGITAL</span>
                    <span className="text-[9.5px] font-bold text-[#6D28D9] tracking-wider uppercase block">Enterprise AI & Engineering</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={closeMobileMenu}
                  aria-label="Close navigation menu"
                  className="w-9 h-9 rounded-full bg-slate-100 text-slate-700 hover:bg-[#6D28D9] hover:text-white transition-colors flex items-center justify-center"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable Navigation Body */}
              <div className="flex-1 overflow-y-auto py-3 my-1 pr-1 space-y-2 no-scrollbar">
                
                {/* 1. HOME */}
                <Link 
                  to="/" 
                  onClick={closeMobileMenu} 
                  className="flex items-center justify-between text-xs sm:text-sm font-bold text-slate-800 py-2.5 px-3.5 rounded-2xl hover:bg-[#F3E8FF] hover:text-[#6D28D9] transition-colors"
                >
                  <span>Home</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </Link>

                {/* 2. OFFERINGS - ACCORDION */}
                <div className="rounded-2xl border border-slate-100 overflow-hidden">
                  <button
                    type="button"
                    onClick={() => toggleMobileSection('offerings')}
                    className={`w-full flex items-center justify-between text-xs sm:text-sm font-bold py-2.5 px-3.5 transition-colors ${
                      expandedMobileSection === 'offerings' ? 'bg-[#F8F3FF] text-[#6D28D9]' : 'text-slate-800 hover:bg-slate-50'
                    }`}
                  >
                    <span>Offerings</span>
                    <ChevronDown className={`w-4 h-4 text-[#6D28D9] transition-transform duration-200 ${expandedMobileSection === 'offerings' ? 'rotate-180' : ''}`} />
                  </button>

                  {expandedMobileSection === 'offerings' && (
                    <div className="bg-[#F8F3FF]/70 p-3 space-y-2.5 border-t border-[#E9D5FF]/60 text-xs animate-in fade-in duration-150">
                      
                      {/* Subgroup 1 */}
                      <div>
                        <div className="font-extrabold text-[#6D28D9] uppercase tracking-wider text-[10px] pb-0.5 border-b border-[#E9D5FF]/60 mb-1">
                          Digital Strategy & Audits
                        </div>
                        <div className="space-y-0.5 pl-1">
                          <Link to="/services/digital-strategy" onClick={closeMobileMenu} className="block py-0.5 text-slate-700 hover:text-[#6D28D9] font-medium">Discovery & Ideation</Link>
                          <Link to="/services/digital-strategy" onClick={closeMobileMenu} className="block py-0.5 text-slate-700 hover:text-[#6D28D9]">Experience Engineering</Link>
                          <Link to="/services/digital-strategy" onClick={closeMobileMenu} className="block py-0.5 text-slate-700 hover:text-[#6D28D9]">Tech & Data Debt Audits</Link>
                          <Link to="/services/digital-strategy" onClick={closeMobileMenu} className="block py-0.5 text-slate-700 hover:text-[#6D28D9]">Application Rationalization</Link>
                          <Link to="/services/digital-strategy" onClick={closeMobileMenu} className="block py-0.5 text-slate-700 hover:text-[#6D28D9]">IT Infrastructure Optimization</Link>
                          <Link to="/services/digital-strategy" onClick={closeMobileMenu} className="block py-0.5 text-slate-700 hover:text-[#6D28D9]">GRC & Risk Management</Link>
                        </div>
                      </div>

                      {/* Subgroup 2 */}
                      <div>
                        <div className="font-extrabold text-[#6D28D9] uppercase tracking-wider text-[10px] pb-0.5 border-b border-[#E9D5FF]/60 mb-1">
                          Digital Engineering & QA
                        </div>
                        <div className="space-y-0.5 pl-1">
                          <Link to="/services/digital-engineering" onClick={closeMobileMenu} className="block py-0.5 text-slate-700 hover:text-[#6D28D9] font-medium">Enterprise App Development</Link>
                          <Link to="/services/digital-engineering" onClick={closeMobileMenu} className="block py-0.5 text-slate-700 hover:text-[#6D28D9]">Verification & Validation (QA)</Link>
                          <Link to="/services/digital-engineering" onClick={closeMobileMenu} className="block py-0.5 text-slate-700 hover:text-[#6D28D9]">Application Sustenance</Link>
                          <Link to="/services/digital-engineering" onClick={closeMobileMenu} className="block py-0.5 text-slate-700 hover:text-[#6D28D9]">Legacy Modernization</Link>
                          <Link to="/services/digital-engineering" onClick={closeMobileMenu} className="block py-0.5 text-slate-700 hover:text-[#6D28D9]">Model-Based Engineering</Link>
                          <Link to="/services/digital-engineering" onClick={closeMobileMenu} className="block py-0.5 text-slate-700 hover:text-[#6D28D9]">Concurrent Engineering</Link>
                        </div>
                      </div>

                      {/* Subgroup 3 */}
                      <div>
                        <div className="font-extrabold text-[#6D28D9] uppercase tracking-wider text-[10px] pb-0.5 border-b border-[#E9D5FF]/60 mb-1">
                          Data, AI & Managed Ops
                        </div>
                        <div className="space-y-0.5 pl-1">
                          <Link to="/services/data-engineering" onClick={closeMobileMenu} className="block py-0.5 text-slate-700 hover:text-[#6D28D9] font-medium">Data Lake Ingestion Layer</Link>
                          <Link to="/services/data-engineering" onClick={closeMobileMenu} className="block py-0.5 text-slate-700 hover:text-[#6D28D9]">Real-Time ETL Pipelines</Link>
                          <Link to="/services/generative-ai" onClick={closeMobileMenu} className="block py-0.5 text-purple-700 font-bold">Generative AI & LLMs</Link>
                          <Link to="/services/generative-ai" onClick={closeMobileMenu} className="block py-0.5 text-slate-700 hover:text-[#6D28D9]">AI-Driven SDLC Code Gen</Link>
                          <Link to="/services/generative-ai" onClick={closeMobileMenu} className="block py-0.5 text-slate-700 hover:text-[#6D28D9]">RPA BOTs (Attended/Unattended)</Link>
                          <Link to="/services/infrastructure-services" onClick={closeMobileMenu} className="block py-0.5 text-slate-700 hover:text-[#6D28D9]">24/7 Infrastructure Managed Ops</Link>
                        </div>
                      </div>

                      <div className="pt-1 text-right">
                        <Link to="/services" onClick={closeMobileMenu} className="inline-flex items-center gap-1 font-extrabold text-[#6D28D9] hover:underline text-xs">
                          <span>View All Services</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>

                    </div>
                  )}
                </div>

                {/* 3. DOMAINS & INDUSTRIES - ACCORDION */}
                <div className="rounded-2xl border border-slate-100 overflow-hidden">
                  <button
                    type="button"
                    onClick={() => toggleMobileSection('domains')}
                    className={`w-full flex items-center justify-between text-xs sm:text-sm font-bold py-2.5 px-3.5 transition-colors ${
                      expandedMobileSection === 'domains' ? 'bg-[#F8F3FF] text-[#6D28D9]' : 'text-slate-800 hover:bg-slate-50'
                    }`}
                  >
                    <span>Domains & Industries</span>
                    <ChevronDown className={`w-4 h-4 text-[#6D28D9] transition-transform duration-200 ${expandedMobileSection === 'domains' ? 'rotate-180' : ''}`} />
                  </button>

                  {expandedMobileSection === 'domains' && (
                    <div className="bg-[#F8F3FF]/70 p-3 space-y-1 border-t border-[#E9D5FF]/60 text-xs animate-in fade-in duration-150">
                      <Link to="/solutions/family-care" onClick={closeMobileMenu} className="block py-0.5 text-slate-700 hover:text-[#6D28D9] font-medium">Family Ecosystem Care</Link>
                      <Link to="/solutions/healthcare" onClick={closeMobileMenu} className="block py-0.5 text-slate-700 hover:text-[#6D28D9]">Healthcare & Telemetry</Link>
                      <Link to="/solutions/fintech" onClick={closeMobileMenu} className="block py-0.5 text-slate-700 hover:text-[#6D28D9]">Fintech & Enterprise Banking</Link>
                      <Link to="/solutions/saas" onClick={closeMobileMenu} className="block py-0.5 text-slate-700 hover:text-[#6D28D9]">Enterprise SaaS & Data Lakes</Link>
                      <Link to="/solutions/ecommerce" onClick={closeMobileMenu} className="block py-0.5 text-slate-700 hover:text-[#6D28D9]">E-Commerce & Digital Retail</Link>
                      <Link to="/solutions/logistics" onClick={closeMobileMenu} className="block py-0.5 text-slate-700 hover:text-[#6D28D9]">Smart Logistics & Supply Chain</Link>
                      <Link to="/solutions/education" onClick={closeMobileMenu} className="block py-0.5 text-slate-700 hover:text-[#6D28D9]">EdTech & Digital Learning</Link>
                      <Link to="/solutions/real-estate" onClick={closeMobileMenu} className="block py-0.5 text-slate-700 hover:text-[#6D28D9]">Real Estate & Smart Buildings</Link>
                      <Link to="/solutions/manufacturing" onClick={closeMobileMenu} className="block py-0.5 text-slate-700 hover:text-[#6D28D9]">Manufacturing & Industry 4.0</Link>

                      <div className="pt-1 text-right border-t border-[#E9D5FF]/40">
                        <Link to="/solutions" onClick={closeMobileMenu} className="inline-flex items-center gap-1 font-extrabold text-[#6D28D9] hover:underline text-xs">
                          <span>Explore All Domains</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>

                {/* 4. TALENT & AGILE PODS - ACCORDION */}
                <div className="rounded-2xl border border-slate-100 overflow-hidden">
                  <button
                    type="button"
                    onClick={() => toggleMobileSection('talent')}
                    className={`w-full flex items-center justify-between text-xs sm:text-sm font-bold py-2.5 px-3.5 transition-colors ${
                      expandedMobileSection === 'talent' ? 'bg-[#F8F3FF] text-[#6D28D9]' : 'text-slate-800 hover:bg-slate-50'
                    }`}
                  >
                    <span>Talent & Agile Pods</span>
                    <ChevronDown className={`w-4 h-4 text-[#6D28D9] transition-transform duration-200 ${expandedMobileSection === 'talent' ? 'rotate-180' : ''}`} />
                  </button>

                  {expandedMobileSection === 'talent' && (
                    <div className="bg-[#F8F3FF]/70 p-3 space-y-1 border-t border-[#E9D5FF]/60 text-xs animate-in fade-in duration-150">
                      <Link to="/hire" onClick={closeMobileMenu} className="block py-0.5 text-slate-700 hover:text-[#6D28D9] font-medium">React / Next.js Engineers</Link>
                      <Link to="/hire" onClick={closeMobileMenu} className="block py-0.5 text-slate-700 hover:text-[#6D28D9]">Angular & Vue Specialists</Link>
                      <Link to="/hire" onClick={closeMobileMenu} className="block py-0.5 text-slate-700 hover:text-[#6D28D9]">Python & Node.js Leads</Link>
                      <Link to="/hire" onClick={closeMobileMenu} className="block py-0.5 text-slate-700 hover:text-[#6D28D9]">Java & .NET Architects</Link>
                      <Link to="/hire" onClick={closeMobileMenu} className="block py-0.5 text-purple-700 font-bold">Dedicated Developer Teams (48h)</Link>
                      <Link to="/hire" onClick={closeMobileMenu} className="block py-0.5 text-slate-700 hover:text-[#6D28D9]">AI & LLM Specialists</Link>
                      <Link to="/hire" onClick={closeMobileMenu} className="block py-0.5 text-slate-700 hover:text-[#6D28D9]">Cloud & DevOps Leads</Link>
                      <Link to="/hire" onClick={closeMobileMenu} className="block py-0.5 text-slate-700 hover:text-[#6D28D9]">QA Automation Engineers</Link>

                      <div className="pt-1 text-right border-t border-[#E9D5FF]/40">
                        <Link to="/hire" onClick={closeMobileMenu} className="inline-flex items-center gap-1 font-extrabold text-[#6D28D9] hover:underline text-xs">
                          <span>Hire Senior Developers</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>

                {/* 5. TECH STACK - ACCORDION */}
                <div className="rounded-2xl border border-slate-100 overflow-hidden">
                  <button
                    type="button"
                    onClick={() => toggleMobileSection('tech')}
                    className={`w-full flex items-center justify-between text-xs sm:text-sm font-bold py-2.5 px-3.5 transition-colors ${
                      expandedMobileSection === 'tech' ? 'bg-[#F8F3FF] text-[#6D28D9]' : 'text-slate-800 hover:bg-slate-50'
                    }`}
                  >
                    <span>Tech Stack</span>
                    <ChevronDown className={`w-4 h-4 text-[#6D28D9] transition-transform duration-200 ${expandedMobileSection === 'tech' ? 'rotate-180' : ''}`} />
                  </button>

                  {expandedMobileSection === 'tech' && (
                    <div className="bg-[#F8F3FF]/70 p-3 space-y-2 border-t border-[#E9D5FF]/60 text-xs animate-in fade-in duration-150">
                      <div>
                        <div className="font-extrabold text-[#6D28D9] text-[10px] uppercase tracking-wider mb-0.5">AI & Data Science</div>
                        <div className="text-slate-600">Python, PyTorch, OpenAI, LLMs, LangChain, RAG, Snowflake</div>
                      </div>
                      <div>
                        <div className="font-extrabold text-[#6D28D9] text-[10px] uppercase tracking-wider mb-0.5">Cloud & Infra</div>
                        <div className="text-slate-600">AWS, Azure, GCP, Docker, Kubernetes, Terraform, CI/CD</div>
                      </div>
                      <div>
                        <div className="font-extrabold text-[#6D28D9] text-[10px] uppercase tracking-wider mb-0.5">Modern Web & Mobile</div>
                        <div className="text-slate-600">React, Next.js, TypeScript, Vue.js, Flutter, iOS, Android</div>
                      </div>
                      <div>
                        <div className="font-extrabold text-[#6D28D9] text-[10px] uppercase tracking-wider mb-0.5">Databases & Backend</div>
                        <div className="text-slate-600">PostgreSQL, MongoDB, Redis, Node.js, Express, Java, .NET</div>
                      </div>
                    </div>
                  )}
                </div>

                {/* 6. ABOUT WHY - ACCORDION */}
                <div className="rounded-2xl border border-slate-100 overflow-hidden">
                  <button
                    type="button"
                    onClick={() => toggleMobileSection('company')}
                    className={`w-full flex items-center justify-between text-xs sm:text-sm font-bold py-2.5 px-3.5 transition-colors ${
                      expandedMobileSection === 'company' ? 'bg-[#F8F3FF] text-[#6D28D9]' : 'text-slate-800 hover:bg-slate-50'
                    }`}
                  >
                    <span>About WHY IT Services</span>
                    <ChevronDown className={`w-4 h-4 text-[#6D28D9] transition-transform duration-200 ${expandedMobileSection === 'company' ? 'rotate-180' : ''}`} />
                  </button>

                  {expandedMobileSection === 'company' && (
                    <div className="bg-[#F8F3FF]/70 p-3 space-y-1 border-t border-[#E9D5FF]/60 text-xs animate-in fade-in duration-150">
                      <Link to="/about" onClick={closeMobileMenu} className="block py-0.5 text-slate-700 hover:text-[#6D28D9] font-medium">About Us & Overview</Link>
                      <Link to="/about/news" onClick={closeMobileMenu} className="block py-0.5 text-purple-700 font-bold">News & Press Releases</Link>
                      <Link to="/case-studies" onClick={closeMobileMenu} className="block py-0.5 text-slate-700 hover:text-[#6D28D9]">Case Studies Showcase</Link>
                      <Link to="/trust-safety" onClick={closeMobileMenu} className="block py-0.5 text-slate-700 hover:text-[#6D28D9]">Trust & ISO Compliance</Link>
                      <Link to="/faq" onClick={closeMobileMenu} className="block py-0.5 text-slate-700 hover:text-[#6D28D9]">Help Center & FAQs</Link>
                      <Link to="/careers" onClick={closeMobileMenu} className="block py-0.5 text-slate-700 hover:text-[#6D28D9]">Careers at WHY</Link>
                      <Link to="/contact" onClick={closeMobileMenu} className="block py-0.5 text-slate-700 hover:text-[#6D28D9]">Contact Global HQ</Link>
                    </div>
                  )}
                </div>

                {/* Direct Link: News & Press Releases */}
                <Link to="/about/news" onClick={closeMobileMenu} className="flex items-center justify-between text-xs sm:text-sm font-bold text-[#6D28D9] py-2.5 px-3.5 rounded-2xl bg-[#F8F3FF] hover:bg-[#F3E8FF] transition-colors">
                  <span className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#6D28D9]" />
                    News & Press Releases
                  </span>
                  <ChevronRight className="w-4 h-4 text-[#6D28D9]" />
                </Link>

                {/* Direct Link: Contact Global HQ */}
                <Link to="/contact" onClick={closeMobileMenu} className="flex items-center justify-between text-xs sm:text-sm font-bold text-slate-800 py-2.5 px-3.5 rounded-2xl hover:bg-[#F3E8FF] hover:text-[#6D28D9] transition-colors">
                  <span>Contact Global HQ</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </Link>

              </div>

              {/* Bottom Fixed Action Button */}
              {location.pathname !== '/schedule-discovery' && (
                <div className="pt-3 border-t border-slate-100 shrink-0">
                  <Link
                    to="/schedule-discovery"
                    onClick={closeMobileMenu}
                    className="w-full bg-gradient-to-r from-[#6D28D9] to-[#5B21B6] hover:from-[#5B21B6] hover:to-[#4C1D95] text-white font-extrabold py-3.5 px-4 rounded-2xl text-center flex items-center justify-center gap-2 text-xs sm:text-sm tracking-wider uppercase shadow-lg transition-all"
                  >
                    <span>SCHEDULE DISCOVERY</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
