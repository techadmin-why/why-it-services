import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Calendar, ArrowRight, MapPin, Play, Building } from 'lucide-react';

const defaultNewsArticles = [
  {
    id: 'why-it-services-expands-bangalore-engineering-center',
    slug: 'why-it-services-expands-bangalore-engineering-center',
    title: 'WHY IT Services expands engineering center in Bengaluru to support growing global demand',
    category: 'Press Release',
    date: 'September 2026',
    author: 'WHY IT Services Media Relations',
    location: 'Bengaluru, India',
    status: 'Published',
    isFeatured: true,
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    summary: 'The new Bengaluru presence expands WHY IT Services\' global delivery capabilities, adding highly skilled AI & digital engineering pods to provide clients with greater flexibility, efficiency, and enterprise software expertise.'
  },
  {
    id: 'generative-ai-sdlc-framework-launch',
    slug: 'generative-ai-sdlc-framework-launch',
    title: 'WHY IT Services launches enterprise Generative AI & RAG code generation pods',
    category: 'AI Innovation',
    date: 'August 2026',
    author: 'AI Division',
    location: 'Global HQ',
    status: 'Published',
    isFeatured: false,
    image: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=800&q=80',
    videoUrl: '',
    summary: 'Introducing customized LLM fine-tuning, multi-modal code generation, and automated RPA bots engineered for Fortune enterprise applications.'
  },
  {
    id: 'real-time-data-lake-ingestion-architecture',
    slug: 'real-time-data-lake-ingestion-architecture',
    title: 'WHY IT Services announces zero-downtime ETL & real-time Data Lake architecture',
    category: 'Data & Analytics',
    date: 'July 2026',
    author: 'Data Platform Team',
    location: 'Bengaluru, India',
    status: 'Published',
    isFeatured: false,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    videoUrl: '',
    summary: 'Accelerating data lake ingestion for structured and unstructured datasets with BI dashboarding and SOC2 GRC compliance.'
  }
];

export default function NewsPage() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const isInitialized = localStorage.getItem('why_news_initialized');
    const storedRaw = localStorage.getItem('why_news_articles');
    const stored = storedRaw !== null ? JSON.parse(storedRaw) : null;

    if (stored === null && !isInitialized) {
      localStorage.setItem('why_news_articles', JSON.stringify(defaultNewsArticles));
      localStorage.setItem('why_news_initialized', 'true');
      setArticles(defaultNewsArticles.filter(a => a.status === 'Published'));
    } else {
      setArticles((stored || []).filter(a => a.status === 'Published'));
    }
  }, []);

  const featuredArticle = articles.find(a => a.isFeatured) || articles[0] || null;
  const otherArticles = featuredArticle ? articles.filter(a => a.id !== featuredArticle.id && a.slug !== featuredArticle.slug) : articles;

  return (
    <div className="bg-[#FAFAFC] text-[#0F172A] min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#F3E8FF] border border-[#E9D5FF] text-[#6D28D9] px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-[#6D28D9]" />
            Corporate Newsroom & Press Releases
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight">
            News & <span className="text-[#6D28D9]">Press Releases</span>
          </h1>
          <p className="text-slate-600 text-sm leading-relaxed">
            Stay updated with corporate expansions, technology breakthroughs, and engineering pod announcements at WHY IT Services.
          </p>
        </div>

        {/* Featured Press Release Card */}
        {featuredArticle && (
          <div className="bg-gradient-to-br from-[#F8F3FF] via-white to-[#F3E8FF] border border-[#E9D5FF] rounded-3xl p-6 sm:p-10 shadow-lg space-y-6">
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-2 bg-[#6D28D9] text-white px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider shadow-sm">
                FEATURED NEWS
              </div>
              <span className="text-xs text-purple-700 font-bold">{featuredArticle.category} • {featuredArticle.date}</span>
            </div>
            
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
              {featuredArticle.title}
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
              <div className="lg:col-span-7 relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 group">
                <img
                  src={featuredArticle.image || 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80'}
                  alt={featuredArticle.title}
                  className="w-full h-[260px] sm:h-[340px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {featuredArticle.videoUrl && (
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-transparent to-transparent flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-[#6D28D9] text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                      <Play className="w-7 h-7 text-white fill-white ml-1" />
                    </div>
                  </div>
                )}
              </div>

              <div className="lg:col-span-5 space-y-6">
                <p className="text-sm text-slate-700 leading-relaxed">
                  {featuredArticle.summary}
                </p>

                <Link
                  to={`/about/news/${featuredArticle.slug || featuredArticle.id}`}
                  className="bg-[#6D28D9] hover:bg-[#5B21B6] text-white text-xs font-extrabold px-7 py-3.5 rounded-xl uppercase tracking-wider transition-all shadow-md inline-flex items-center gap-2"
                >
                  <span>Read the press release</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
          {otherArticles.map((news) => (
            <div key={news.id} className="bg-white border border-[#E9D5FF] rounded-3xl overflow-hidden shadow-sm hover:border-[#6D28D9] hover:shadow-lg transition-all flex flex-col justify-between group">
              <div>
                <img src={news.image} alt={news.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-500 font-semibold">
                    <span className="text-[#6D28D9] font-bold">{news.category}</span>
                    <span>{news.date}</span>
                  </div>
                  <h3 className="font-extrabold text-base text-[#0F172A] group-hover:text-[#6D28D9] transition-colors leading-snug">
                    {news.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {news.summary}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  to={`/about/news/${news.slug || news.id}`}
                  className="text-xs font-extrabold text-[#6D28D9] hover:underline flex items-center gap-1"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
