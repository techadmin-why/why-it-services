import React, { useState } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight, Sparkles, Building2, CheckCircle2 } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "WHY IT Services delivered our event-driven dispatch engine with zero production downtime. Their engineering pod integrated seamlessly into our daily sprints and cut our operational dispatch latency by 85%.",
      author: "Engineering Pod Review",
      role: "VP of Digital Engineering",
      company: "WHY Platform Ecosystem",
      badge: "Care & Companion Tech",
      rating: 5
    },
    {
      quote: "The LLM RAG pipeline built by WHY IT Services processes over 10,000 document queries daily with sub-second response times and zero hallucination errors. High velocity and top-tier code quality.",
      author: "Product Leadership",
      role: "Chief Technology Officer",
      company: "Enterprise SaaS Client",
      badge: "Artificial Intelligence",
      rating: 5
    },
    {
      quote: "Migrating our legacy monolithic architecture to Kubernetes AWS EKS saved us 45% in monthly cloud infrastructure costs. Their 24/7 SRE monitoring pod ensures 99.99% system availability.",
      author: "Cloud Operations Pod",
      role: "Director of Infrastructure",
      company: "Logistics Enterprise",
      badge: "Cloud Modernization",
      rating: 5
    }
  ];

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const t = testimonials[currentIndex];

  return (
    <div className="bg-gradient-to-b from-[#F8F3FF] via-white to-[#FAFAFC] border border-[#E9D5FF] rounded-3xl p-6 sm:p-10 shadow-lg my-12 relative overflow-hidden">
      
      {/* Background Decorator */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#F3E8FF]/60 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200/80 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#F3E8FF] border border-[#E9D5FF] text-[#6D28D9] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#6D28D9]" />
              <span>Engineering Excellence Feedback</span>
            </div>
            <h3 className="text-2xl font-extrabold text-[#0F172A]">Client & Architecture Feedback</h3>
          </div>

          {/* Slider Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-xl bg-white border border-slate-200 hover:border-[#6D28D9] hover:bg-[#F3E8FF] text-slate-700 hover:text-[#6D28D9] flex items-center justify-center transition-all shadow-sm"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-xl bg-white border border-slate-200 hover:border-[#6D28D9] hover:bg-[#F3E8FF] text-slate-700 hover:text-[#6D28D9] flex items-center justify-center transition-all shadow-sm"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Testimonial Card */}
        <div className="bg-white border border-[#E9D5FF] rounded-2xl p-6 sm:p-8 shadow-sm space-y-6 relative">
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(t.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <span className="bg-[#6D28D9] text-white text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full">
              {t.badge}
            </span>
          </div>

          <blockquote className="text-sm sm:text-base text-slate-700 leading-relaxed italic font-medium">
            “{t.quote}”
          </blockquote>

          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#F3E8FF] border border-[#E9D5FF] text-[#6D28D9] flex items-center justify-center font-bold text-xs">
                {t.author.slice(0, 2).toUpperCase()}
              </div>
              <div>
                <div className="font-extrabold text-xs text-[#0F172A]">{t.author}</div>
                <div className="text-[10px] text-slate-500 font-semibold">{t.role} • {t.company}</div>
              </div>
            </div>

            <div className="flex items-center gap-1 text-emerald-600 text-[11px] font-bold">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>Verified Delivery</span>
            </div>
          </div>

        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 pt-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all ${
                currentIndex === idx ? 'w-8 bg-[#6D28D9]' : 'w-2 bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>

      </div>

    </div>
  );
}
