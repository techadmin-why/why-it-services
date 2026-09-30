import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, ArrowRight, CheckCircle2, Sparkles, ShoppingCart, Truck, Lock } from 'lucide-react';
import PartnerTicker from '../../components/PartnerTicker';

export default function EcommerceDomain() {
  const capabilities = [
    { title: 'Headless Commerce Architecture', desc: 'Next.js, Shopify Plus, and Commerce Layer integrations delivering sub-second page loads.' },
    { title: 'Omnichannel Inventory Systems', desc: 'Real-time sync across warehouses, retail storefronts, and online marketplaces.' },
    { title: 'AI Recommendation Engines', desc: 'Personalized product discovery, dynamic pricing models, and cross-selling AI bots.' },
    { title: 'High-Scale Checkout Pipelines', desc: 'Optimized multi-currency payment routing capable of handling Black Friday traffic spikes.' },
    { title: 'Mobile Commerce Apps (PWA)', desc: 'Progressive web apps with offline catalog browsing and one-touch Apple Pay/Google Pay checkout.' },
    { title: 'Order Management System (OMS)', desc: 'Automated order fulfillment, return management, and customer shipment tracking APIs.' }
  ];

  const faqs = [
    { q: 'Why switch to Headless Commerce for digital retail?', a: 'Headless decoupling separates frontend UI from backend commerce engines, enabling sub-second load times and 30%+ higher mobile checkout conversion rates.' },
    { q: 'Can your platforms handle extreme flash sales and holiday traffic spikes?', a: 'Yes, our Kubernetes microservices auto-scale horizontally to manage tens of thousands of concurrent checkouts with zero downtime.' }
  ];

  return (
    <div className="bg-[#FAFAFC] text-[#0F172A] min-h-screen">
      
      {/* 1. HERO SECTION WITH UNSPLASH IMAGE CARD */}
      <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 bg-[#F3E8FF] border border-[#E9D5FF] text-[#6D28D9] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
              <ShoppingBag className="w-4 h-4 text-[#6D28D9]" />
              E-Commerce & Digital Retail Domain
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F172A] tracking-tight leading-[1.1]">
              E-Commerce & <span className="text-[#6D28D9]">Digital Retail Tech</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Headless commerce platforms, omnichannel inventory tracking, and high-conversion storefronts.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                to="/schedule-discovery"
                className="bg-gradient-to-r from-[#6D28D9] to-[#5B21B6] hover:from-[#5B21B6] hover:to-[#4C1D95] text-white font-extrabold px-8 py-4 rounded-xl text-xs uppercase tracking-wider shadow-lg flex items-center gap-2"
              >
                <span>Schedule Retail Tech Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group">
              <img
                src="https://images.unsplash.com/photo-1556742049-0a670fc8078a?q=80&w=1000&auto=format&fit=crop"
                alt="Headless E-Commerce Tech"
                className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/70 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="text-[10px] font-mono text-purple-300 font-bold uppercase tracking-wider">Headless Storefronts</span>
                <h3 className="text-lg font-bold text-white">Sub-Second Mobile Checkout</h3>
                <p className="text-xs text-slate-300">Omnichannel inventory sync & AI product recommendations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PartnerTicker />

      {/* 2. IMPACT METRICS BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-b from-[#F3E8FF] via-[#F8F3FF] to-white border border-[#E9D5FF] rounded-3xl p-8 text-center space-y-2 shadow-sm">
            <div className="text-4xl font-extrabold text-[#6D28D9]">&lt; 1s</div>
            <div className="font-bold text-sm text-[#0F172A]">Storefront Load Time</div>
            <p className="text-xs text-slate-500">Next.js edge rendering & global CDN caching.</p>
          </div>
          <div className="bg-gradient-to-b from-[#F3E8FF] via-[#F8F3FF] to-white border border-[#E9D5FF] rounded-3xl p-8 text-center space-y-2 shadow-sm">
            <div className="text-4xl font-extrabold text-[#6D28D9]">35%</div>
            <div className="font-bold text-sm text-[#0F172A]">Avg Conversion Increase</div>
            <p className="text-xs text-slate-500">Streamlined mobile one-click checkout flows.</p>
          </div>
          <div className="bg-gradient-to-b from-[#F3E8FF] via-[#F8F3FF] to-white border border-[#E9D5FF] rounded-3xl p-8 text-center space-y-2 shadow-sm">
            <div className="text-4xl font-extrabold text-[#6D28D9]">Real-Time</div>
            <div className="font-bold text-sm text-[#0F172A]">Inventory Sync</div>
            <p className="text-xs text-slate-500">Multi-warehouse & marketplace stock orchestration.</p>
          </div>
        </div>
      </section>

      {/* 3. CAPABILITIES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#6D28D9] uppercase tracking-wider">Retail Capabilities</span>
          <h2 className="text-3xl font-extrabold text-[#0F172A] mt-1">E-Commerce & Modern Digital Retail Solutions</h2>
          <p className="text-xs text-slate-600 mt-2">High-conversion headless storefronts, AI recommendations, and omnichannel order fulfillment.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((item, idx) => (
            <div key={idx} className="bg-white border border-[#E9D5FF] rounded-3xl p-6 shadow-sm hover:border-[#6D28D9] transition-all space-y-3">
              <div className="w-8 h-8 rounded-xl bg-[#6D28D9] text-white flex items-center justify-center font-bold text-xs">
                0{idx + 1}
              </div>
              <h3 className="font-bold text-base text-[#0F172A]">{item.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. FAQS */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-extrabold text-[#0F172A] text-center mb-8">Domain FAQs</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white border border-[#E9D5FF] rounded-2xl p-6 shadow-sm space-y-2">
              <h3 className="font-bold text-sm text-[#0F172A]">{faq.q}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. CTA */}
      <section className="bg-gradient-to-r from-[#5B21B6] via-[#6D28D9] to-[#4C1D95] text-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <h2 className="text-3xl font-extrabold text-white">Ready to Scale Your E-Commerce Storefront?</h2>
          <p className="text-xs text-purple-100">Schedule a 1-on-1 discovery call with our digital retail technology team.</p>
          <Link to="/contact" className="inline-block bg-white text-[#6D28D9] font-extrabold text-xs px-8 py-4 rounded-xl uppercase shadow-md hover:bg-purple-50 transition-colors">
            Request Retail Proposal -&gt;
          </Link>
        </div>
      </section>

    </div>
  );
}
