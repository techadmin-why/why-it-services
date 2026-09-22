import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, Award, Sparkles, ArrowRight, ShieldCheck, 
  CheckCircle2, Heart, Lightbulb, Target, Compass, Zap, Quote
} from 'lucide-react';

export default function About() {
  const coreValues = [
    {
      icon: Heart,
      title: 'Customer Centric',
      quote: '“It’s all about customer delight”',
      desc: 'We place customer success at the center of every architectural decision, user interface, and system deployment.'
    },
    {
      icon: Users,
      title: 'Passionate Team',
      quote: '“Strive not to be a success, but to be of value”',
      desc: 'Our senior engineering leadership brings over 200+ person-years of collective industry experience to deliver lasting value.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Mindset',
      quote: '“Vision and Strategy before Execution”',
      desc: 'We assess AI/ML and next-gen technologies before execution, ensuring aligned digital roadmaps.'
    },
    {
      icon: Target,
      title: 'Excellence',
      quote: '“Digitize to Transform”',
      desc: 'Maintaining rigorous QA verification & validation, high SLAs, and enterprise-grade reliability.'
    }
  ];

  return (
    <div className="bg-[#FAFAFC] text-[#0F172A] pt-8 pb-20">
      
      {/* 1. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="inline-flex items-center gap-2 bg-[#F3E8FF] border border-[#E9D5FF] text-[#6D28D9] px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6">
          <Sparkles className="w-4 h-4 text-[#6D28D9]" />
          Corporate Profile V.2 Certified
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight mb-6">
          Accelerating Digital Transformation in the <span className="text-[#6D28D9]">AI-Powered Paradigm</span>
        </h1>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
          WHY IT Services combines over 200+ person-years of senior leadership experience with cutting-edge AI, data engineering, and digital strategy to deliver sustainable customer growth.
        </p>
      </section>

      {/* 2. MISSION & VISION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white border border-[#E9D5FF] p-8 rounded-3xl shadow-sm space-y-4 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#F3E8FF] text-[#6D28D9] text-[10px] font-bold px-4 py-1 rounded-bl-xl uppercase tracking-wider">
              Corporate Mission
            </div>
            <h2 className="text-xl font-bold text-[#0F172A]">Our Mission</h2>
            <blockquote className="text-lg font-extrabold text-[#6D28D9] leading-snug">
              “To deliver innovative AI-driven solutions that empower customers to achieve sustainable growth.”
            </blockquote>
            <p className="text-xs text-slate-600 leading-relaxed">
              Focused on customer delight, we engineer AI systems and digital platforms tailored to practical operational realities.
            </p>
          </div>

          <div className="bg-[#0F172A] text-white p-8 rounded-3xl shadow-xl space-y-4 border border-slate-800 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-purple-900/80 text-purple-300 text-[10px] font-bold px-4 py-1 rounded-bl-xl uppercase tracking-wider">
              Corporate Vision
            </div>
            <h2 className="text-xl font-bold text-white">Our Vision</h2>
            <blockquote className="text-lg font-extrabold text-purple-300 leading-snug">
              “To accelerate customers’ digital transformation in the new AI-powered paradigm.”
            </blockquote>
            <p className="text-xs text-slate-400 leading-relaxed">
              Bridging strategy, engineering, data pipelines, and infrastructure to keep our clients ahead in the AI era.
            </p>
          </div>
        </div>
      </section>

      {/* 3. CORE VALUES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#6D28D9] uppercase tracking-wider">Guiding Principles</span>
          <h2 className="text-3xl font-extrabold text-[#0F172A] mt-1">Our Core Values</h2>
          <p className="text-slate-600 text-sm mt-2">“Strive not to be a success, but to be of value”</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((val, idx) => {
            const Icon = val.icon;
            return (
              <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:border-[#6D28D9]/40 transition-all space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#F3E8FF] border border-[#E9D5FF] text-[#6D28D9] flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0F172A]">{val.title}</h3>
                  <p className="text-[11px] font-semibold text-[#6D28D9] mt-0.5">{val.quote}</p>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">{val.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. LEADERSHIP BENCHMARK CARD */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-gradient-to-r from-[#5B21B6] via-[#6D28D9] to-[#4C1D95] rounded-3xl p-8 sm:p-12 text-white shadow-xl text-center">
          <span className="text-xs font-bold text-purple-200 uppercase tracking-widest block mb-2">EXPERIENCE MATTERS</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Seasoned Leadership Team with Over 200+ Person-Years of Experience
          </h2>
          <p className="text-purple-100 text-sm max-w-2xl mx-auto mb-8 leading-relaxed">
            Our technology directors and solution architects bring decades of experience across digital strategy, enterprise software engineering, complex ETL data pipelines, QA automation, and cloud infrastructure management.
          </p>
          <Link
            to="/contact"
            className="bg-white text-[#6D28D9] font-bold px-8 py-3.5 rounded-xl hover:bg-purple-50 transition-all shadow-lg inline-block text-sm"
          >
            Connect with Our Leadership Team
          </Link>
        </div>
      </section>

    </div>
  );
}
