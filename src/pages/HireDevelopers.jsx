import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, Code2, ShieldCheck, CheckCircle2, Sparkles, 
  ArrowRight, Clock, DollarSign, Award, Check, X, Sliders, Send
} from 'lucide-react';
import { submitHiringRequest } from '../api/client';

export default function HireDevelopers() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDossier, setSelectedDossier] = useState(null);

  // Hiring Request Modal State
  const [isHiringModalOpen, setIsHiringModalOpen] = useState(false);
  const [hiringSubmitted, setHiringSubmitted] = useState(false);
  const [hiringRefId, setHiringRefId] = useState('');
  const [isSubmittingHiring, setIsSubmittingHiring] = useState(false);
  const [hiringErrorMsg, setHiringErrorMsg] = useState(null);

  const [hiringForm, setHiringForm] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    roleNeeded: 'Senior Full Stack Engineer',
    teamSize: '1-2 Developers',
    commitment: 'Full-Time (160h/mo)',
    message: ''
  });

  const openHiringModal = (role = '', commitment = '') => {
    setHiringForm(prev => ({
      ...prev,
      roleNeeded: role || prev.roleNeeded,
      commitment: commitment || prev.commitment
    }));
    setHiringSubmitted(false);
    setHiringErrorMsg(null);
    setIsHiringModalOpen(true);
  };

  const handleHiringSubmit = async (e) => {
    e.preventDefault();
    if (isSubmittingHiring) return;

    setIsSubmittingHiring(true);
    setHiringErrorMsg(null);

    try {
      const response = await submitHiringRequest({
        name: hiringForm.name,
        email: hiringForm.email,
        company: hiringForm.company || null,
        phone: hiringForm.phone || null,
        roleNeeded: hiringForm.roleNeeded || null,
        teamSize: hiringForm.teamSize || null,
        commitment: hiringForm.commitment || null,
        message: hiringForm.message
      });

      if (response && response.success) {
        setHiringRefId(response.inquiryId || response.data?.refId || 'HIRE-' + Date.now());
        setHiringSubmitted(true);
      } else {
        throw new Error('Unexpected server response format.');
      }
    } catch (err) {
      setHiringErrorMsg(err.message || 'Failed to submit hiring request. Please try again.');
    } finally {
      setIsSubmittingHiring(false);
    }
  };

  const developerRoles = [
    { 
      id: 'WHY-DEV-8924',
      name: 'Senior React / Next.js Developer', 
      category: 'frontend', 
      exp: '5+ Years', 
      stack: 'React, Next.js, TypeScript, Tailwind, Redux', 
      bio: 'Ex-Tier 1 tech lead specializing in server-side rendering, micro-frontends, and enterprise design systems with 99.9% uptime record.',
      tzMatch: 'EST / PST / CET / IST Compatible',
      milestones: ['Built 5M+ user SaaS web portal', 'Reduced web bundle size by 45%', '100% test coverage automation']
    },
    { 
      id: 'WHY-DEV-7102',
      name: 'Node.js Microservices Engineer', 
      category: 'backend', 
      exp: '6+ Years', 
      stack: 'Node.js, Express, NestJS, PostgreSQL, Redis', 
      bio: 'High-throughput event-driven microservices architect. Expert in distributed caching, Kafka event streaming, and SQL optimization.',
      tzMatch: 'EST / CET / IST Compatible',
      milestones: ['Scaled API to 50,000 req/sec', 'Zero-downtime database migration', 'SOC2 compliance auditor']
    },
    { 
      id: 'WHY-DEV-4391',
      name: 'Python & AI / LLM Engineer', 
      category: 'ai', 
      exp: '5+ Years', 
      stack: 'Python, FastAPI, LangChain, PyTorch, OpenAI API', 
      bio: 'Generative AI developer building enterprise RAG pipelines, fine-tuned Llama models, vector search, and automated RPA workflows.',
      tzMatch: 'PST / EST / IST Compatible',
      milestones: ['Deployed custom RAG for Fortune 500', 'Automated document processing by 80%', 'PyTorch ML model optimization']
    },
    { 
      id: 'WHY-DEV-9083',
      name: 'Flutter & React Native Developer', 
      category: 'mobile', 
      exp: '4+ Years', 
      stack: 'Flutter, React Native, iOS, Android, Dart', 
      bio: 'Cross-platform mobile apps lead with over 15 published Apps on App Store & Google Play store with offline telemetry capabilities.',
      tzMatch: 'EST / CET / IST Compatible',
      milestones: ['4.9 Stars average App Store rating', 'Integrated biometric security', 'Real-time WebSocket chat']
    },
    { 
      id: 'WHY-DEV-1249',
      name: 'Cloud DevOps & K8s Specialist', 
      category: 'devops', 
      exp: '7+ Years', 
      stack: 'AWS, Kubernetes, Terraform, Docker, CI/CD', 
      bio: 'AWS Certified Solutions Architect & Kubernetes administrator. Infrastructure as Code (IaC) specialist with zero-downtime deployment pipelines.',
      tzMatch: '24/7 On-Call Pod / EST / IST',
      milestones: ['Automated Terraform multi-cloud infra', 'Achieved 99.999% cloud uptime SLA', 'Reduced AWS monthly spend by 35%']
    },
    { 
      id: 'WHY-DEV-3310',
      name: 'QA Automation Engineer', 
      category: 'qa', 
      exp: '5+ Years', 
      stack: 'Selenium, Cypress, Playwright, Jest, Postman', 
      bio: 'Full-stack QA Automation engineer creating robust E2E test suites, security regression tests, and continuous integration gate checks.',
      tzMatch: 'EST / PST / IST Compatible',
      milestones: ['Created 1,200+ automated test suites', 'Prevented 95+ critical release bugs', 'Automated API load testing']
    }
  ];

  const filteredRoles = selectedCategory === 'all'
    ? developerRoles
    : developerRoles.filter(r => r.category === selectedCategory);

  return (
    <div className="bg-[#FAFAFC] text-[#0F172A] pt-8 pb-20">
      
      {/* 1. HERO BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="inline-flex items-center gap-2 bg-[#F3E8FF] border border-[#E9D5FF] text-[#6D28D9] px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6">
          <Sparkles className="w-4 h-4 text-[#6D28D9]" />
          Top 3% Vetted Senior Tech Talent
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-[#0F172A] tracking-tight leading-tight mb-6">
          Hire Dedicated Senior Developers <span className="italic font-normal text-[#6D28D9]">in 48 Hours</span>
        </h1>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
          Scale your engineering capabilities with pre-vetted full-stack developers, AI engineers, and cloud architects working 100% dedicated to your agile roadmap.
        </p>

        {/* Visual Team Pod Banner */}
        <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-xl border border-[#E9D5FF] mb-10 group relative">
          <img
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop"
            alt="Dedicated Software Engineers"
            className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/40 to-transparent flex flex-col justify-end p-6 text-white text-left">
            <span className="text-[10px] font-mono text-purple-300 font-bold uppercase tracking-wider">Top 3% Vetted Talent</span>
            <h3 className="text-lg font-extrabold">Agile Full-Stack & AI Squads</h3>
            <p className="text-xs text-slate-300">Seamlessly integrated into your daily Git, Jira, and Slack channels.</p>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => openHiringModal()}
            className="bg-[#6D28D9] hover:bg-[#5B21B6] text-white font-bold px-8 py-4 rounded-xl transition-all shadow-md hover:shadow-xl inline-flex items-center gap-2 text-sm"
          >
            <span>Hire Developers Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <a
            href="#comparison-matrix"
            className="bg-white border border-slate-200 text-slate-700 font-semibold px-8 py-4 rounded-xl hover:bg-slate-50 transition-all text-sm"
          >
            Compare Hiring Models
          </a>
        </div>
      </section>

      {/* 2. 3 HIRING ENGAGEMENT MODELS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {[
            {
              title: 'Full-Time Dedicated Team',
              badge: 'Most Popular',
              hours: '160 Hours / Month',
              desc: 'Engineers work exclusively for your company, integrating into your daily Git, Jira, and Slack channels.',
              features: ['Dedicated project manager option', 'Direct team management', '100% code IP ownership']
            },
            {
              title: 'Part-Time Dedicated Model',
              badge: 'Flexible Scope',
              hours: '80 Hours / Month',
              desc: 'Ideal for mid-sized projects, ongoing feature updates, code refactoring, and quality maintenance.',
              features: ['Flexible allocation', 'Agile sprint participation', 'Cost-optimized rates']
            },
            {
              title: 'Hourly & On-Demand Support',
              badge: 'Pay-As-You-Go',
              hours: 'Flexible Hours',
              desc: 'Access specialized senior architects for code reviews, security audits, AI model fine-tuning, or urgent bug fixes.',
              features: ['Zero long-term commitment', 'Immediate senior access', 'Transparent hourly billing']
            }
          ].map((m, idx) => (
            <div key={idx} className="bg-gradient-to-b from-[#F3E8FF] via-[#F8F3FF] to-white border border-[#E9D5FF] rounded-3xl p-8 shadow-sm flex flex-col justify-between space-y-6 hover:border-[#6D28D9] transition-all">
              <div className="space-y-4">
                <span className="bg-[#6D28D9] text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider inline-block">
                  {m.badge}
                </span>
                <h3 className="text-xl font-extrabold text-[#0F172A]">{m.title}</h3>
                <div className="text-xs font-mono text-[#6D28D9] bg-white px-3 py-1 rounded-lg border border-[#E9D5FF] inline-block">
                  {m.hours}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{m.desc}</p>
                <div className="space-y-2 pt-2 border-t border-slate-200/60">
                  {m.features.map((f, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                      <Check className="w-4 h-4 text-[#6D28D9]" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
              <button
                onClick={() => openHiringModal('', m.title)}
                className="w-full bg-[#6D28D9] hover:bg-[#5B21B6] text-white text-xs font-bold py-3.5 rounded-xl text-center transition-all block shadow-sm"
              >
                Inquire About {m.title}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 3. FILTERABLE DEVELOPER ROLES MATRIX */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-b from-[#F8F3FF] via-white to-[#FAFAFC] border border-[#E9D5FF] rounded-3xl p-6 sm:p-10 shadow-sm space-y-8">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-slate-200/80 pb-6 gap-4">
            <div>
              <span className="text-xs font-bold text-[#6D28D9] uppercase tracking-wider">Talent Inventory</span>
              <h2 className="text-2xl font-extrabold text-[#0F172A] mt-0.5">Available Senior Developers</h2>
            </div>

            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
              {[
                { label: 'All Roles', val: 'all' },
                { label: 'Frontend', val: 'frontend' },
                { label: 'Backend', val: 'backend' },
                { label: 'AI & ML', val: 'ai' },
                { label: 'Mobile', val: 'mobile' },
                { label: 'DevOps', val: 'devops' },
                { label: 'QA', val: 'qa' }
              ].map((c) => (
                <button
                  key={c.val}
                  type="button"
                  onClick={() => setSelectedCategory(c.val)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 ${
                    selectedCategory === c.val
                      ? 'bg-[#6D28D9] text-white shadow-sm'
                      : 'bg-white border border-slate-200 text-slate-600 hover:bg-[#F3E8FF] hover:text-[#6D28D9]'
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filteredRoles.map((role, idx) => (
              <div 
                key={idx} 
                onClick={() => setSelectedDossier(role)}
                className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm hover:border-[#6D28D9] hover:shadow-md transition-all space-y-4 cursor-pointer group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-[#6D28D9] bg-[#F3E8FF] px-2.5 py-1 rounded-full uppercase">
                    {role.category}
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-500">{role.exp} Exp</span>
                </div>
                <div>
                  <div className="text-[10px] font-mono text-purple-600 font-bold mb-0.5">{role.id} • Verified</div>
                  <h3 className="font-bold text-base text-[#0F172A] group-hover:text-[#6D28D9] transition-colors">{role.name}</h3>
                  <p className="text-xs text-slate-500 mt-1">Tech Stack: <span className="font-mono text-slate-700">{role.stack}</span></p>
                </div>
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-extrabold text-[#6D28D9]">Dedicated Senior Pod</span>
                  <button type="button" className="text-xs font-bold text-[#6D28D9] hover:underline flex items-center gap-1">
                    View Dossier & Book <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* TALENT PROFILE DOSSIER MODAL */}
      {selectedDossier && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0F172A]/70 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#E9D5FF] relative space-y-6">
            
            <button 
              onClick={() => setSelectedDossier(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 flex items-center justify-center font-bold"
            >
              ✕
            </button>

            <div className="border-b border-slate-100 pb-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="bg-[#6D28D9] text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase">
                  Top 3% Vetted Candidate
                </span>
                <span className="text-xs font-mono font-bold text-purple-600">{selectedDossier.id}</span>
              </div>
              <h3 className="text-2xl font-extrabold text-[#0F172A]">{selectedDossier.name}</h3>
              <p className="text-xs font-semibold text-slate-500 mt-0.5">{selectedDossier.exp} Seniority • <span className="text-[#6D28D9] font-bold">Immediate Pod Onboarding</span></p>
            </div>

            <div className="space-y-4 text-xs">
              <div>
                <h4 className="font-bold text-[#0F172A] uppercase tracking-wider mb-1">Professional Bio</h4>
                <p className="text-slate-600 leading-relaxed bg-slate-50 p-3.5 rounded-xl border border-slate-200/70">
                  {selectedDossier.bio}
                </p>
              </div>

              <div>
                <h4 className="font-bold text-[#0F172A] uppercase tracking-wider mb-1">Primary Tech Stack</h4>
                <div className="font-mono text-purple-950 font-bold bg-[#F8F3FF] p-3 rounded-xl border border-[#E9D5FF]">
                  {selectedDossier.stack}
                </div>
              </div>

              <div>
                <h4 className="font-bold text-[#0F172A] uppercase tracking-wider mb-1">Key Enterprise Milestones</h4>
                <ul className="space-y-1.5">
                  {selectedDossier.milestones.map((m, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#6D28D9] shrink-0" />
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-emerald-50 border border-emerald-200 p-3 rounded-xl text-emerald-800 text-[11px] font-semibold flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{selectedDossier.tzMatch}</span>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => {
                  const roleName = selectedDossier.name;
                  setSelectedDossier(null);
                  openHiringModal(roleName);
                }}
                className="flex-1 bg-[#6D28D9] hover:bg-[#5B21B6] text-white font-bold text-xs py-3.5 rounded-xl text-center shadow-md transition-all"
              >
                Schedule Candidate Interview
              </button>
              <button
                onClick={() => setSelectedDossier(null)}
                className="px-5 py-3.5 bg-slate-100 text-slate-700 font-bold text-xs rounded-xl hover:bg-slate-200 transition-colors"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

      {/* 4. COMPARISON MATRIX: IN-HOUSE VS FREELANCERS VS WHY DEDICATED TEAMS */}
      <section id="comparison-matrix" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-[#6D28D9] uppercase tracking-wider">Hiring Comparison</span>
            <h2 className="text-3xl font-extrabold text-[#0F172A] mt-1">Why Hire WHY IT Services Developers?</h2>
            <p className="text-slate-600 text-sm mt-2">See how our dedicated engineering model compares against traditional in-house hiring or freelancers.</p>
          </div>

          <div className="overflow-x-auto no-scrollbar">
            <table className="w-full min-w-[640px] text-left text-xs">
              <thead>
                <tr className="border-b border-slate-200 bg-[#F8F3FF] text-[#0F172A]">
                  <th className="p-4 font-bold uppercase tracking-wider">Evaluation Factors</th>
                  <th className="p-4 font-bold text-[#6D28D9] uppercase tracking-wider bg-[#F3E8FF] rounded-t-xl">WHY Dedicated Developers</th>
                  <th className="p-4 font-bold uppercase tracking-wider">In-House Engineers</th>
                  <th className="p-4 font-bold uppercase tracking-wider">Freelance Developers</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                {[
                  { factor: 'Onboarding & Deployment Time', why: '< 48 Hours', inhouse: '4 - 8 Weeks', freelance: '1 - 2 Weeks' },
                  { factor: 'Recruitment & HR Overhead Cost', why: '$0 (Zero Overhead)', inhouse: 'High Hiring & HR Fees', freelance: 'Variable' },
                  { factor: 'Senior Code Quality & QA Verification', why: 'Guaranteed (SOC2 & ISO Standard)', inhouse: 'High (Dependent on Team)', freelance: 'Inconsistent' },
                  { factor: '100% IP Ownership & NDA Security', why: 'Strict Legal Contract Guaranteed', inhouse: 'Guaranteed', freelance: 'High Risk' },
                  { factor: 'Replacement & Scale Flexibility', why: 'Immediate Free Replacement', inhouse: 'Difficult & Costly', freelance: 'High Churn Risk' },
                  { factor: '24/7 SLA Support Backup', why: 'Included (L1/L2 Operations)', inhouse: 'Extra Overtime Cost', freelance: 'None' }
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 font-bold text-[#0F172A]">{row.factor}</td>
                    <td className="p-4 font-extrabold text-[#6D28D9] bg-[#F3E8FF]/30">{row.why}</td>
                    <td className="p-4 text-slate-500">{row.inhouse}</td>
                    <td className="p-4 text-slate-500">{row.freelance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. 4-STEP ONBOARDING WORKFLOW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-[#0F172A] rounded-3xl p-8 sm:p-12 text-white shadow-2xl border border-slate-800">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-purple-400 uppercase tracking-wider">Fast Onboarding</span>
            <h2 className="text-3xl font-extrabold mt-1">4-Step Onboarding Process</h2>
            <p className="text-slate-400 text-sm mt-2">From initial intake to active sprint code delivery in under 48 hours.</p>
          </div>

          <div className="flex md:grid overflow-x-auto snap-x snap-mandatory md:overflow-visible pb-4 gap-4 md:grid-cols-4 no-scrollbar">
            {[
              { step: '01', title: 'Submit Requirements', desc: 'Share your tech stack needs, project scope, and preferred developer experience level.' },
              { step: '02', title: 'Review Candidate Resumes', desc: 'Receive pre-screened senior developer profiles matching your technical stack within 24 hours.' },
              { step: '03', title: 'Conduct Video Interview', desc: 'Interview selected candidates directly to assess technical proficiency and team culture fit.' },
              { step: '04', title: 'Deploy & Start Sprints', desc: 'Sign NDA, integrate developer into your Git/Jira, and start active sprint execution.' }
            ].map((s, idx) => (
              <div key={idx} className="shrink-0 w-[78vw] max-w-xs snap-center md:w-auto md:shrink bg-slate-900 border border-slate-800 p-6 rounded-2xl relative space-y-3">
                <div className="text-3xl font-extrabold text-purple-400/30">{s.step}</div>
                <h3 className="text-base font-bold text-white">{s.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. BOTTOM CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-r from-[#5B21B6] via-[#6D28D9] to-[#4C1D95] rounded-3xl p-8 sm:p-12 text-white shadow-xl text-center">
          <h2 className="text-3xl font-extrabold mb-4">Ready to Scale Your Engineering Team?</h2>
          <p className="text-purple-100 text-sm max-w-xl mx-auto mb-8">
            Schedule a 15-minute developer matching call with our technical leadership team today.
          </p>
          <button
            onClick={() => openHiringModal()}
            className="bg-white hover:bg-purple-50 text-[#6D28D9] font-bold px-8 py-4 rounded-xl transition-all shadow-lg text-sm inline-block"
          >
            Schedule Interview Call
          </button>
        </div>
      </section>

      {/* HIRING REQUEST MODAL */}
      {isHiringModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white border border-[#E9D5FF] rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative overflow-hidden space-y-4">
            
            <button
              onClick={() => { setIsHiringModalOpen(false); setHiringSubmitted(false); setHiringErrorMsg(null); }}
              className="absolute top-5 right-5 text-slate-400 hover:text-[#6D28D9] bg-white border border-slate-200 rounded-full p-2 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {hiringSubmitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-14 h-14 bg-[#F3E8FF] border border-[#E9D5FF] text-[#6D28D9] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                {hiringRefId && (
                  <span className="text-[11px] font-mono font-bold text-[#6D28D9] bg-[#F3E8FF] px-3 py-1 rounded-full border border-[#E9D5FF] uppercase inline-block">
                    Request Ref: {hiringRefId}
                  </span>
                )}
                <h3 className="text-2xl font-bold text-[#0F172A]">Hiring Request Received!</h3>
                <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you for submitting your developer hiring request to WHY IT Services. {hiringRefId && <span>Your reference code is <strong className="font-mono text-[#6D28D9]">{hiringRefId}</strong>. </span>}Our talent acquisition directors will review your scope and contact you within 24 hours.
                </p>
                <button
                  onClick={() => setIsHiringModalOpen(false)}
                  className="bg-[#6D28D9] text-white text-xs font-bold px-6 py-2.5 rounded-xl hover:bg-[#5B21B6] transition-all"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <form onSubmit={handleHiringSubmit} className="space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <div className="inline-flex items-center gap-1.5 bg-[#F3E8FF] border border-[#E9D5FF] text-[#6D28D9] px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider mb-1">
                    <Users className="w-3 h-3" />
                    Developer Hiring Intake
                  </div>
                  <h3 className="text-xl font-extrabold text-[#0F172A]">Hire Dedicated Engineers</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Scale your squad with top 3% pre-vetted senior software talent.</p>
                </div>

                {hiringErrorMsg && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-3.5 py-2.5 rounded-xl text-xs font-semibold">
                    {hiringErrorMsg}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={hiringForm.name}
                      onChange={e => setHiringForm({ ...hiringForm, name: e.target.value })}
                      placeholder="Alex Morgan"
                      className="w-full px-3.5 py-2.5 bg-[#FAFAFC] border border-slate-200 rounded-xl text-xs focus:border-[#6D28D9] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Work Email *</label>
                    <input
                      type="email"
                      required
                      value={hiringForm.email}
                      onChange={e => setHiringForm({ ...hiringForm, email: e.target.value })}
                      placeholder="alex@enterprise.com"
                      className="w-full px-3.5 py-2.5 bg-[#FAFAFC] border border-slate-200 rounded-xl text-xs focus:border-[#6D28D9] outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Company Name</label>
                    <input
                      type="text"
                      value={hiringForm.company}
                      onChange={e => setHiringForm({ ...hiringForm, company: e.target.value })}
                      placeholder="Acme Global Inc"
                      className="w-full px-3.5 py-2.5 bg-[#FAFAFC] border border-slate-200 rounded-xl text-xs focus:border-[#6D28D9] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Phone Number</label>
                    <input
                      type="text"
                      value={hiringForm.phone}
                      onChange={e => setHiringForm({ ...hiringForm, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-3.5 py-2.5 bg-[#FAFAFC] border border-slate-200 rounded-xl text-xs focus:border-[#6D28D9] outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Role Needed</label>
                    <select
                      value={hiringForm.roleNeeded}
                      onChange={e => setHiringForm({ ...hiringForm, roleNeeded: e.target.value })}
                      className="w-full px-3 py-2.5 bg-[#FAFAFC] border border-slate-200 rounded-xl text-xs focus:border-[#6D28D9] outline-none"
                    >
                      <option value="Senior Full Stack Engineer">Full Stack React/Node</option>
                      <option value="Python & AI / LLM Engineer">Python AI & LLM</option>
                      <option value="Node.js Microservices Engineer">Node.js Backend</option>
                      <option value="Flutter & Mobile Engineer">Mobile Cross-Platform</option>
                      <option value="Cloud DevOps & SRE">Cloud DevOps & SRE</option>
                      <option value="QA Automation Lead">QA Automation</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Team Size</label>
                    <select
                      value={hiringForm.teamSize}
                      onChange={e => setHiringForm({ ...hiringForm, teamSize: e.target.value })}
                      className="w-full px-3 py-2.5 bg-[#FAFAFC] border border-slate-200 rounded-xl text-xs focus:border-[#6D28D9] outline-none"
                    >
                      <option value="1-2 Developers">1-2 Developers</option>
                      <option value="3-5 Developers">3-5 Developers</option>
                      <option value="Dedicated Pod (5+ Devs)">Dedicated Pod (5+)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Commitment</label>
                    <select
                      value={hiringForm.commitment}
                      onChange={e => setHiringForm({ ...hiringForm, commitment: e.target.value })}
                      className="w-full px-3 py-2.5 bg-[#FAFAFC] border border-slate-200 rounded-xl text-xs focus:border-[#6D28D9] outline-none"
                    >
                      <option value="Full-Time (160h/mo)">Full-Time (160h/mo)</option>
                      <option value="Part-Time (80h/mo)">Part-Time (80h/mo)</option>
                      <option value="Hourly / On-Demand">Hourly / On-Demand</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Hiring & Technical Requirements *</label>
                  <textarea
                    rows={3}
                    required
                    value={hiringForm.message}
                    onChange={e => setHiringForm({ ...hiringForm, message: e.target.value })}
                    placeholder="Describe your tech stack, estimated start date, timezone requirements, or project goals..."
                    className="w-full p-3 bg-[#FAFAFC] border border-slate-200 rounded-xl text-xs focus:border-[#6D28D9] outline-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmittingHiring}
                  className="w-full bg-[#6D28D9] hover:bg-[#5B21B6] disabled:opacity-50 text-white font-bold py-3.5 rounded-xl text-xs uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  {isSubmittingHiring ? 'Submitting Request...' : 'Submit Hiring Request'}
                </button>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
}

