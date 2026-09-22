import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Compass, Code2, Database, Bot, Server, 
  ChevronDown, ArrowRight, ShieldCheck, Sparkles, 
  Menu, X, CheckCircle2, Zap, Layers, Activity
} from 'lucide-react';
import AnnouncementBar from './AnnouncementBar';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
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
    setServicesOpen(false);
    setMobileMenuOpen(false);
  }, [location]);

  const corePillars = [
    {
      icon: Compass,
      title: 'Digital Strategy',
      quote: 'Vision and Strategy before Execution',
      desc: 'Discovery & ideation, experience engineering, technology audits, and GRC risk alignment.',
      link: '/services#strategy',
      badge: 'Consulting'
    },
    {
      icon: Code2,
      title: 'Digital Engineering',
      quote: 'Digitize to Transform',
      desc: 'Enterprise application buildout, legacy refactoring, and QA verification & validation.',
      link: '/services#engineering',
      badge: 'Core Build'
    },
    {
      icon: Database,
      title: 'Data Engineering & Analytics',
      quote: 'Harness the Power of Data',
      desc: 'Structured/unstructured pipelines, data lake ingestion, ETL, BI models, and ML predictive analytics.',
      link: '/services#data',
      badge: 'Data & ML'
    },
    {
      icon: Bot,
      title: 'Generative AI & Automation',
      quote: 'Make Intelligence Readily Available',
      desc: 'LLMs, AI-driven SDLC, image/content generation, and RPA attended/unattended BOTs.',
      link: '/services#ai',
      badge: 'Next-Gen AI'
    },
    {
      icon: Server,
      title: 'Infrastructure Managed Services',
      quote: 'Manage Infra so You Manage Business',
      desc: 'Cloud & datacenter operations, 24/7 L1/L2 support, and continuous infrastructure optimization.',
      link: '/services#infrastructure',
      badge: 'Managed SLA'
    }
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#FAFAFC]/95 backdrop-blur-md transition-all duration-200">
      <AnnouncementBar />

      <nav className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-200 ${
        scrolled ? 'py-3 border-b border-slate-200/80 shadow-sm bg-white/90' : 'py-5'
      }`}>
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#6D28D9] to-[#4C1D95] flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
              <span className="font-extrabold text-lg tracking-wider">W</span>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg text-[#0F172A] tracking-tight leading-none group-hover:text-[#6D28D9] transition-colors">
                WHY <span className="text-[#6D28D9]">IT Services</span>
              </span>
              <span className="text-[10px] font-semibold text-slate-500 tracking-wider uppercase mt-0.5">
                AI-Powered Transformation
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            <Link 
              to="/" 
              className={`text-sm font-semibold transition-colors ${
                location.pathname === '/' ? 'text-[#6D28D9]' : 'text-slate-700 hover:text-[#6D28D9]'
              }`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button 
                className={`flex items-center gap-1.5 text-sm font-semibold py-2 transition-colors ${
                  location.pathname === '/services' || servicesOpen ? 'text-[#6D28D9]' : 'text-slate-700 hover:text-[#6D28D9]'
                }`}
              >
                Service Offerings
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180 text-[#6D28D9]' : ''}`} />
              </button>

              {/* Mega Dropdown Menu */}
              {servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[720px] bg-white border border-slate-200 rounded-2xl shadow-2xl p-6 grid grid-cols-12 gap-6 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="col-span-8 space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                      <span className="text-xs font-bold text-[#6D28D9] uppercase tracking-wider">
                        5 Core Enterprise Pillars
                      </span>
                      <span className="text-[11px] text-slate-500">Corporate Profile V.2 Certified</span>
                    </div>

                    <div className="grid grid-cols-1 gap-2.5">
                      {corePillars.map((pillar, idx) => {
                        const Icon = pillar.icon;
                        return (
                          <Link
                            key={idx}
                            to={pillar.link}
                            className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-purple-50/70 border border-transparent hover:border-[#E9D5FF] transition-all group/item"
                          >
                            <div className="w-9 h-9 rounded-lg bg-[#F3E8FF] border border-[#E9D5FF] text-[#6D28D9] flex items-center justify-center shrink-0 group-hover/item:bg-[#6D28D9] group-hover/item:text-white transition-colors">
                              <Icon className="w-4 h-4" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <span className="text-xs font-bold text-[#0F172A] group-hover/item:text-[#6D28D9]">
                                  {pillar.title}
                                </span>
                                <span className="text-[10px] font-semibold text-[#6D28D9] bg-[#F3E8FF] px-2 py-0.5 rounded">
                                  {pillar.badge}
                                </span>
                              </div>
                              <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">
                                {pillar.desc}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>

                  {/* Mega Menu Sidebar Card */}
                  <div className="col-span-4 bg-gradient-to-b from-[#F3E8FF] to-white border border-[#E9D5FF] rounded-xl p-5 flex flex-col justify-between">
                    <div>
                      <div className="inline-flex items-center gap-1.5 bg-white text-[#6D28D9] px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-3 border border-[#E9D5FF]">
                        <Sparkles className="w-3 h-3" />
                        Leadership Edge
                      </div>
                      <h4 className="font-extrabold text-sm text-[#0F172A] leading-snug">
                        200+ Person Years of Leadership Experience
                      </h4>
                      <p className="text-[11px] text-slate-600 mt-2 leading-relaxed">
                        Seasoned architects guiding enterprise strategy, data pipelines, and AI transformations.
                      </p>
                    </div>

                    <Link
                      to="/contact"
                      className="mt-4 w-full bg-[#6D28D9] hover:bg-[#5B21B6] text-white text-xs font-bold py-2.5 px-3 rounded-lg text-center transition-all flex items-center justify-center gap-1.5 shadow-sm"
                    >
                      Schedule Discovery
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link 
              to="/solutions" 
              className={`text-sm font-semibold transition-colors ${
                location.pathname === '/solutions' ? 'text-[#6D28D9]' : 'text-slate-700 hover:text-[#6D28D9]'
              }`}
            >
              Industry Solutions
            </Link>

            <Link 
              to="/about" 
              className={`text-sm font-semibold transition-colors ${
                location.pathname === '/about' ? 'text-[#6D28D9]' : 'text-slate-700 hover:text-[#6D28D9]'
              }`}
            >
              About Us
            </Link>
          </div>

          {/* Desktop Right CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/contact"
              className="text-sm font-semibold text-slate-700 hover:text-[#6D28D9] transition-colors"
            >
              Client Login
            </Link>
            <Link
              to="/contact"
              className="bg-[#6D28D9] hover:bg-[#5B21B6] text-white text-sm font-bold px-5 py-2.5 rounded-full transition-all shadow-md hover:shadow-lg flex items-center gap-2 group"
            >
              <span>Book a Demo</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-[#6D28D9]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-slate-200 space-y-3">
            <Link to="/" className="block text-sm font-semibold text-slate-800 py-2">Home</Link>
            <Link to="/services" className="block text-sm font-semibold text-slate-800 py-2">Service Offerings (5 Pillars)</Link>
            <Link to="/solutions" className="block text-sm font-semibold text-slate-800 py-2">Industry Solutions</Link>
            <Link to="/about" className="block text-sm font-semibold text-slate-800 py-2">About Us</Link>
            <div className="pt-2 border-t border-slate-200">
              <Link
                to="/contact"
                className="w-full bg-[#6D28D9] text-white font-bold py-3 rounded-xl text-center block text-sm"
              >
                Book a Demo & Discovery Call
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
