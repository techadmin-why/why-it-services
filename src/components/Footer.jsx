import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, MessageSquare, Mail, MapPin, 
  ExternalLink, ArrowRight, ShieldCheck, ChevronDown
} from 'lucide-react';

export default function Footer() {
  const googleMapsUrl = "https://maps.app.goo.gl/TBWPpqZDwFBvMyF98";

  const [openSection, setOpenSection] = useState({
    services: false,
    industries: false,
    company: false
  });

  const toggleSection = (key) => {
    setOpenSection(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <footer className="bg-[#0B1329] text-white pt-12 sm:pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Sitemap Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-slate-800/80">
          
          {/* Brand & Corporate Address Column (4 Cols) */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-6">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#6D28D9] to-[#4C1D95] flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
                <span className="font-extrabold text-lg tracking-wider">W</span>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-lg text-white tracking-tight leading-none">
                  WHY <span className="text-purple-400">IT Services</span>
                </span>
                <span className="text-[10px] font-semibold text-slate-400 tracking-wider uppercase mt-1">
                  WHY Services India Private Limited
                </span>
              </div>
            </Link>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              Connecting enterprises with verified software engineering, AI-driven solutions, and dependable cloud digital platforms.
            </p>

            {/* Direct Contact Coordinates */}
            <div className="space-y-2.5 pt-2 text-xs text-slate-300">
              
              {/* Phone */}
              <a 
                href="tel:+919090254343" 
                className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-800/60 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-slate-800 text-purple-400 flex items-center justify-center shrink-0 border border-slate-700 group-hover:bg-[#6D28D9] group-hover:text-white transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-white group-hover:text-purple-300 transition-colors">+91 90902 54343</div>
                  <div className="text-[10px] text-slate-400">Mon – Sat: 9:00 AM – 7:00 PM</div>
                </div>
              </a>

              {/* Email */}
              <a 
                href="mailto:info@thewhyservices.com" 
                className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-800/60 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-slate-800 text-purple-400 flex items-center justify-center shrink-0 border border-slate-700 group-hover:bg-[#6D28D9] group-hover:text-white transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-white group-hover:text-purple-300 transition-colors">info@thewhyservices.com</div>
                </div>
              </a>

              {/* Clickable Office Address */}
              <a 
                href={googleMapsUrl}
                target="_blank" 
                rel="noopener noreferrer" 
                title="Click to view office location on Google Maps"
                className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-800/80 transition-all border border-slate-800 hover:border-purple-500/50 group"
              >
                <div className="w-8 h-8 rounded-lg bg-slate-800 text-purple-400 flex items-center justify-center shrink-0 border border-slate-700 group-hover:bg-[#6D28D9] group-hover:text-white transition-colors mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <div className="font-bold text-white group-hover:text-purple-300 transition-colors flex items-center gap-1 text-xs">
                    <span>WHY Services India Private Limited</span>
                    <ExternalLink className="w-3 h-3 text-purple-400 opacity-80" />
                  </div>
                  <div className="text-[11px] text-slate-300 leading-snug mt-1">
                    1st Floor, No. 14/1, Balaji Krupa,<br />
                    2nd Main Road, Seshadripuram,<br />
                    Bengaluru – 560020, Karnataka, India
                  </div>
                </div>
              </a>

            </div>
          </div>

          {/* Services Column (3 Cols) - Collapsible Accordion on Mobile */}
          <div className="lg:col-span-3 border-b border-slate-800/80 lg:border-b-0 pb-4 lg:pb-0">
            <button
              onClick={() => toggleSection('services')}
              className="w-full flex items-center justify-between text-xs font-extrabold text-white uppercase tracking-wider border-b border-slate-800 pb-2 text-left lg:cursor-default"
            >
              <span>Services</span>
              <ChevronDown className={`w-4 h-4 text-purple-400 transition-transform lg:hidden ${openSection.services ? 'rotate-180' : ''}`} />
            </button>
            <ul className={`space-y-2 text-xs text-slate-300 pt-3 transition-all ${openSection.services ? 'block' : 'hidden lg:block'}`}>
              <li><Link to="/services/digital-engineering" className="hover:text-purple-400 transition-colors block">Digital & Web Engineering</Link></li>
              <li><Link to="/services/digital-strategy" className="hover:text-purple-400 transition-colors block">Digital Strategy & Experience</Link></li>
              <li><Link to="/services/data-engineering" className="hover:text-purple-400 transition-colors block">Data Engineering & Analytics</Link></li>
              <li><Link to="/services/generative-ai" className="hover:text-purple-400 transition-colors block">Generative AI & LLMs</Link></li>
              <li><Link to="/services/infrastructure-services" className="hover:text-purple-400 transition-colors block">Cloud Infrastructure & 24/7 Managed Ops</Link></li>
              <li><Link to="/hire" className="hover:text-purple-400 transition-colors block">Hire Dedicated Engineering Squads</Link></li>
            </ul>
          </div>

          {/* Industries Column (3 Cols) - Collapsible Accordion on Mobile */}
          <div className="lg:col-span-3 border-b border-slate-800/80 lg:border-b-0 pb-4 lg:pb-0">
            <button
              onClick={() => toggleSection('industries')}
              className="w-full flex items-center justify-between text-xs font-extrabold text-white uppercase tracking-wider border-b border-slate-800 pb-2 text-left lg:cursor-default"
            >
              <span>Industries</span>
              <ChevronDown className={`w-4 h-4 text-purple-400 transition-transform lg:hidden ${openSection.industries ? 'rotate-180' : ''}`} />
            </button>
            <ul className={`space-y-2 text-xs text-slate-300 pt-3 transition-all ${openSection.industries ? 'block' : 'hidden lg:block'}`}>
              <li><Link to="/solutions/ecommerce" className="hover:text-purple-400 transition-colors block">Retail & E-Commerce</Link></li>
              <li><Link to="/solutions/healthcare" className="hover:text-purple-400 transition-colors block">Healthcare & Telemetry</Link></li>
              <li><Link to="/solutions/fintech" className="hover:text-purple-400 transition-colors block">Fintech & Digital Banking</Link></li>
              <li><Link to="/solutions/logistics" className="hover:text-purple-400 transition-colors block">Logistics & Supply Chain</Link></li>
              <li><Link to="/solutions/education" className="hover:text-purple-400 transition-colors block">Education & eLearning</Link></li>
              <li><Link to="/solutions/manufacturing" className="hover:text-purple-400 transition-colors block">Manufacturing & Industry 4.0</Link></li>
              <li><Link to="/solutions/real-estate" className="hover:text-purple-400 transition-colors block">Real Estate & PropTech</Link></li>
              <li><Link to="/solutions/family-care" className="hover:text-purple-400 transition-colors block">Family & Care Operations</Link></li>
              <li><Link to="/solutions/saas" className="hover:text-purple-400 transition-colors block">Enterprise SaaS Platforms</Link></li>
            </ul>
          </div>

          {/* Company & Models Column (2 Cols) - Collapsible Accordion on Mobile */}
          <div className="sm:col-span-2 lg:col-span-2 border-b border-slate-800/80 lg:border-b-0 pb-4 lg:pb-0">
            <button
              onClick={() => toggleSection('company')}
              className="w-full flex items-center justify-between text-xs font-extrabold text-white uppercase tracking-wider border-b border-slate-800 pb-2 text-left lg:cursor-default"
            >
              <span>Company</span>
              <ChevronDown className={`w-4 h-4 text-purple-400 transition-transform lg:hidden ${openSection.company ? 'rotate-180' : ''}`} />
            </button>
            <ul className={`space-y-2 text-xs text-slate-300 pt-3 transition-all ${openSection.company ? 'block' : 'hidden lg:block'}`}>
              <li><Link to="/about" className="hover:text-purple-400 transition-colors block">About Us</Link></li>
              <li><Link to="/hire" className="hover:text-purple-400 transition-colors block">Hire Dedicated Developers</Link></li>
              <li><Link to="/about/news" className="hover:text-purple-400 transition-colors block">News & Press Releases</Link></li>
              <li><Link to="/case-studies" className="hover:text-purple-400 transition-colors block">Case Studies Showcase</Link></li>
              <li><Link to="/careers" className="hover:text-purple-400 transition-colors block">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-purple-400 transition-colors block">Contact Us</Link></li>
              <li><Link to="/trust-safety" className="hover:text-purple-400 transition-colors block">Trust & Safety</Link></li>
              <li><Link to="/faq" className="hover:text-purple-400 transition-colors block">Help Center & FAQs</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div>
            © 2026 WHY Services India Private Limited (WHY IT Services). All rights reserved.
          </div>
          <div className="flex flex-wrap gap-4 text-[11px]">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <span>•</span>
            <Link to="/security" className="hover:text-white transition-colors">Security Statement</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

