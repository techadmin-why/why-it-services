import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#1E40AF] flex items-center justify-center text-white font-extrabold text-xl shadow-md">
                W
              </div>
              <span className="text-xl font-bold text-white tracking-tight">WHY IT Services</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Building technology solutions that turn real-world needs into practical digital experiences. Connecting people, services, and opportunities.
            </p>
          </div>

          {/* Col 2: Services */}
          <div>
            <h5 className="text-sm font-bold uppercase tracking-wider text-white mb-4">Technology Services</h5>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><a href="#it-services-grid" className="hover:text-white transition-colors">Custom Software Development</a></li>
              <li><a href="#it-services-grid" className="hover:text-white transition-colors">Cloud & IT Infrastructure</a></li>
              <li><a href="#it-services-grid" className="hover:text-white transition-colors">Digital Transformation</a></li>
              <li><a href="#it-services-grid" className="hover:text-white transition-colors">Tech Talent Solutions</a></li>
            </ul>
          </div>

          {/* Col 3: Company */}
          <div>
            <h5 className="text-sm font-bold uppercase tracking-wider text-white mb-4">Company</h5>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><Link to="/about" className="hover:text-white transition-colors">About WHY IT Services</Link></li>
              <li><a href="#why-advantage" className="hover:text-white transition-colors">The WHY Advantage</a></li>
              <li><a href="#case-studies" className="hover:text-white transition-colors">Featured Case Study</a></li>
              <li><a href="#it-contact" className="hover:text-white transition-colors">Contact Experts</a></li>
            </ul>
          </div>

          {/* Col 4: Trust & Compliance */}
          <div>
            <h5 className="text-sm font-bold uppercase tracking-wider text-white mb-4">Trust & Compliance</h5>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Enterprise Security Standards</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-rose-400" />
                <span>Purpose-Driven Engineering</span>
              </div>
              <p className="text-[11px] text-slate-500 pt-2">
                Part of the WHY Ecosystem connecting companion services, healthcare assistance, and enterprise digital solutions.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} WHY IT Services. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Security Statement</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
