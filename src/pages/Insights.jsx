import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, ArrowRight, BookOpen, Clock, Tag, Search, 
  Share2, ChevronRight, User, Calendar, Cpu, Layers, ShieldCheck
} from 'lucide-react';

export default function Insights() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Generative AI', 'Cloud & Data', 'Digital Engineering', 'Infrastructure'];

  const articles = [
    {
      id: 'rag-architecture-2026',
      title: 'Architecting Production-Ready RAG Pipelines with LangChain, Pinecone & OpenAI',
      excerpt: 'Discover how enterprise engineering teams build hybrid vector search, chunking strategies, and semantic reranking to reduce hallucination rate to < 0.5%.',
      category: 'Generative AI',
      readTime: '6 min read',
      date: 'Sept 22, 2026',
      author: 'WHY AI Research Pod',
      image: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=800&q=80',
      tags: ['LangChain', 'RAG', 'VectorDB', 'LLM']
    },
    {
      id: 'legacy-modernization-framework',
      title: 'From Legacy Monolith to Cloud-Native Microservices: Application Rationalization Framework',
      excerpt: 'A step-by-step GRC audit guide for enterprise CTOs migrating legacy codebase debt into high-velocity Docker/Kubernetes containerized pods.',
      category: 'Digital Engineering',
      readTime: '8 min read',
      date: 'Sept 18, 2026',
      author: 'Enterprise Architecture Squad',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
      tags: ['Cloud Native', 'Microservices', 'GRC', 'DevOps']
    },
    {
      id: 'realtime-data-lake-ingestion',
      title: 'Real-Time Data Lake Engineering: Processing 10M+ Daily Telemetry Events',
      excerpt: 'Building structured and unstructured ETL pipelines using Apache Spark, Snowflake, and AWS Kinesis for real-time telemetry streaming.',
      category: 'Cloud & Data',
      readTime: '7 min read',
      date: 'Sept 14, 2026',
      author: 'Data Engineering Lead',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      tags: ['Data Lake', 'Snowflake', 'ETL', 'BigData']
    },
    {
      id: 'ai-driven-sdlc-automation',
      title: 'How AI-Driven SDLC Code Generation Accelerates Sprint Velocity by 40%',
      excerpt: 'Leveraging automated unit test generation, AI code reviews, and low-code BOTs to maintain 100% code quality assurance.',
      category: 'Generative AI',
      readTime: '5 min read',
      date: 'Sept 10, 2026',
      author: 'WHY Engineering Pod',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
      tags: ['AI SDLC', 'Code Quality', 'DevOps', 'Automation']
    },
    {
      id: 'zero-downtime-sre-monitoring',
      title: '24/7 Datacenter Managed Operations: SRE Incident Failover & Resilience',
      excerpt: 'Proactive L1/L2 incident response, multi-cloud redundancy, and continuous automated backup monitoring for mission-critical banking and healthcare systems.',
      category: 'Infrastructure',
      readTime: '9 min read',
      date: 'Sept 04, 2026',
      author: 'SRE Infrastructure Squad',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80',
      tags: ['SRE', '24/7 Support', 'Cloud Infra', 'Security']
    }
  ];

  const filteredArticles = articles.filter(item => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-[#FAFAFC] min-h-screen py-12">
      
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-gradient-to-br from-[#0F172A] via-[#1E1B4B] to-[#0F172A] rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 bg-purple-950/80 border border-purple-800 text-purple-300 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <BookOpen className="w-3.5 h-3.5 text-purple-400" />
              <span>Engineering Insights & Thought Leadership</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Tech Insights, AI Architecture & Engineering Whitepapers
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Explore in-depth technical analysis, Generative AI implementation guides, data lake engineering strategies, and enterprise software best practices from WHY IT Services engineering pods.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs & Search */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-[#E9D5FF] shadow-sm">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeCategory === cat
                    ? 'bg-[#6D28D9] text-white shadow-md'
                    : 'bg-slate-100 text-slate-700 hover:bg-[#F3E8FF] hover:text-[#6D28D9]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[260px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search AI, Data, Cloud guides..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2 text-xs font-medium text-[#0F172A] focus:outline-none focus:border-[#6D28D9]"
            />
          </div>

        </div>
      </section>

      {/* Articles Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex lg:grid overflow-x-auto snap-x snap-mandatory lg:overflow-visible pb-4 gap-4 lg:grid-cols-3 lg:gap-8 no-scrollbar">
          {filteredArticles.map((article) => (
            <article 
              key={article.id}
              className="shrink-0 w-[85vw] max-w-sm snap-center lg:w-auto lg:shrink bg-white border border-[#E9D5FF] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:border-[#6D28D9] transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#6D28D9] text-white text-[10px] font-extrabold uppercase px-3 py-1 rounded-full shadow-md">
                    {article.category}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-[11px] text-slate-500 font-medium">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-purple-600" />
                      {article.readTime}
                    </span>
                    <span>{article.date}</span>
                  </div>

                  <h3 className="font-extrabold text-base text-[#0F172A] group-hover:text-[#6D28D9] transition-colors leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {article.tags.map((t) => (
                      <span key={t} className="text-[10px] font-bold bg-[#F3E8FF] text-[#6D28D9] px-2 py-0.5 rounded-md">
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-slate-500">{article.author}</span>
                <Link 
                  to="/schedule-discovery"
                  className="text-xs font-bold text-[#6D28D9] hover:underline flex items-center gap-1"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-16 bg-white border border-[#E9D5FF] rounded-3xl p-8">
            <h3 className="text-lg font-bold text-slate-700">No articles matched your filter criteria</h3>
            <p className="text-xs text-slate-500 mt-1">Try changing your search terms or active category tab.</p>
          </div>
        )}
      </section>

    </div>
  );
}
