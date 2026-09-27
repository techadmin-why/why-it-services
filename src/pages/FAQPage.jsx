import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Search, Sparkles, ShieldCheck, ArrowRight, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [openIdx, setOpenIdx] = useState(0); // open first item by default

  const categories = ['All', 'Engagement & Pricing', 'Security & IP', 'AI & Tech Stack', 'Delivery & Pods'];

  const faqs = [
    {
      q: 'What engagement models do you offer for software development?',
      a: 'We offer three primary engagement models: 1) Dedicated Full-Time Engineering Pods (160h/mo per dev), 2) Milestone-Based Fixed-Scope Projects, and 3) Hourly On-Demand Senior Architect Consulting.',
      category: 'Engagement & Pricing'
    },
    {
      q: 'Who owns the intellectual property and source code?',
      a: '100% of all intellectual property, source code, repositories, custom ML models, and infrastructure code belong entirely to your enterprise upon project execution under standard NDA and assignment agreements.',
      category: 'Security & IP'
    },
    {
      q: 'How fast can WHY IT Services deploy a dedicated engineering pod?',
      a: 'Our pre-vetted senior software engineers, AI specialists, and cloud architects can be onboarded and integrated into your daily Git, Jira, and Slack channels within 48 hours.',
      category: 'Delivery & Pods'
    },
    {
      q: 'What compliance and security standards do your systems adhere to?',
      a: 'We design systems aligned with SOC 2 Type II controls, HIPAA healthcare data encryption, GDPR data privacy rules, and AES-256 / TLS 1.3 encryption protocols managed via AWS KMS.',
      category: 'Security & IP'
    },
    {
      q: 'How does WHY IT Services leverage Generative AI in software development?',
      a: 'We build production RAG (Retrieval-Augmented Generation) pipelines, fine-tune open-source LLMs (Llama 3, Mistral, DeepSeek), automate SDLC unit testing, and deploy attended/unattended RPA BOTs.',
      category: 'AI & Tech Stack'
    },
    {
      q: 'Where are your corporate headquarters located?',
      a: 'Our main corporate office is located at 1st Floor, No. 14/1, Balaji Krupa, 2nd Main Road, Seshadripuram, Bengaluru – 560020, Karnataka, India.',
      category: 'Delivery & Pods'
    },
    {
      q: 'Do you offer a risk-free trial period for new engineering squads?',
      a: 'Yes, we offer a 3-day risk-free engineering trial where you can assign a real task to one of our senior developers to experience our communication, code quality, and velocity firsthand.',
      category: 'Engagement & Pricing'
    },
    {
      q: 'How is code quality and QA verification handled?',
      a: 'Our QA pods execute automated regression suites, static analysis (SAST), vulnerability scans (DAST), and continuous integration pipelines prior to every production release.',
      category: 'AI & Tech Stack'
    }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesCat = activeCategory === 'All' || faq.category === activeCategory;
    const matchesSearch = faq.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          faq.a.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="bg-[#FAFAFC] text-[#0F172A] pt-8 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#F3E8FF] border border-[#E9D5FF] text-[#6D28D9] px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
            <HelpCircle className="w-4 h-4 text-[#6D28D9]" />
            <span>Knowledge Base & FAQs</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight">
            Frequently Asked <span className="italic font-normal text-[#6D28D9]">Questions</span>
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Everything you need to know about engaging with WHY IT Services, IP ownership, security compliance, and developer pod onboarding.
          </p>
        </div>

        {/* Search Bar & Category Switcher */}
        <div className="space-y-4">
          <div className="relative max-w-xl mx-auto">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions about security, pricing, AI pods..."
              className="w-full pl-11 pr-4 py-3.5 bg-white border border-slate-200 rounded-2xl text-xs font-medium text-[#0F172A] focus:outline-none focus:border-[#6D28D9] focus:ring-2 focus:ring-[#6D28D9]/20 shadow-sm"
            />
          </div>

          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto no-scrollbar py-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 ${
                  activeCategory === cat
                    ? 'bg-[#6D28D9] text-white shadow-md'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-[#F3E8FF] hover:text-[#6D28D9]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-[#E9D5FF] rounded-2xl overflow-hidden shadow-sm transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm text-[#0F172A] hover:text-[#6D28D9] transition-colors"
                >
                  <span className="flex-1">{faq.q}</span>
                  <div className={`w-8 h-8 rounded-full bg-[#F3E8FF] text-[#6D28D9] flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 bg-[#6D28D9] text-white' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-0 text-xs text-slate-600 leading-relaxed border-t border-slate-100 mt-1">
                    <p className="pt-3">{faq.a}</p>
                    <div className="mt-3 inline-block bg-[#F3E8FF] text-[#6D28D9] text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-md">
                      Category: {faq.category}
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {filteredFaqs.length === 0 && (
            <div className="text-center py-12 bg-white border border-slate-200 rounded-2xl p-6">
              <h3 className="font-bold text-slate-700">No matching questions found</h3>
              <p className="text-xs text-slate-500 mt-1">Try refining your search keyword or selecting a different category.</p>
            </div>
          )}
        </div>

        {/* Bottom CTA Box */}
        <div className="mt-12 text-center bg-gradient-to-b from-[#F8F3FF] via-white to-[#FAFAFC] border border-[#E9D5FF] rounded-3xl p-8 shadow-sm space-y-3">
          <h2 className="text-xl font-bold text-[#0F172A]">Still Have Technical Questions?</h2>
          <p className="text-xs text-slate-600 max-w-md mx-auto">
            Our principal solution architects are available for a 30-minute discovery call to review your architecture requirements.
          </p>
          <div className="pt-2">
            <Link
              to="/schedule-discovery"
              className="bg-[#6D28D9] hover:bg-[#5B21B6] text-white text-xs font-bold px-7 py-3.5 rounded-xl transition-all inline-flex items-center gap-2 shadow-md"
            >
              <span>Schedule Architecture Session</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
