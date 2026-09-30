import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Sparkles, MapPin, Calendar, CheckCircle2, ArrowRight, Share2, Building, Play, User, Globe } from 'lucide-react';
import NotFound from './NotFound';

function getYouTubeEmbedUrl(url) {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  if (match && match[2] && match[2].length === 11) {
    return `https://www.youtube.com/embed/${match[2]}`;
  }
  return url.startsWith('http') ? url : `https://www.youtube.com/embed/${url}`;
}

function sanitizeHtml(htmlStr) {
  if (!htmlStr) return '';
  try {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlStr, 'text/html');
    const scripts = doc.querySelectorAll('script, iframe[src*="javascript:"], object, embed, style');
    scripts.forEach(s => s.remove());
    const allElements = doc.querySelectorAll('*');
    allElements.forEach(el => {
      [...el.attributes].forEach(attr => {
        if (attr.name.startsWith('on') || attr.value.trim().toLowerCase().startsWith('javascript:')) {
          el.removeAttribute(attr.name);
        }
      });
    });
    return doc.body.innerHTML;
  } catch (err) {
    return htmlStr;
  }
}

const defaultArticles = [
  {
    id: 'why-it-services-expands-bangalore-engineering-center',
    slug: 'why-it-services-expands-bangalore-engineering-center',
    title: 'WHY IT Services expands engineering center in Bengaluru to support growing global demand',
    category: 'PRESS RELEASE',
    date: 'September 2026',
    author: 'WHY IT Services Media Relations',
    location: 'Bengaluru, India',
    status: 'Published',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=80',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    summary: 'The expanded Bengaluru delivery center strengthens WHY IT Services\' global capabilities, bringing together senior AI, cloud data lakes, and dedicated agile software engineering pods.',
    content: `
      <p class="font-semibold text-[#0F172A]"><strong class="text-[#6D28D9] font-extrabold uppercase">BENGALURU, INDIA — September 2026</strong> — WHY IT Services, a leading enterprise software engineering and AI solutions provider, today announced the formal expansion of its primary Global Engineering Center in Bengaluru, Karnataka.</p>
      <p>The expansion comes in response to rapid adoption of custom Generative AI models, enterprise cloud data lakes, and high-velocity developer pod models by client organizations across North America, Europe, and Asia-Pacific.</p>
      <blockquote class="bg-gradient-to-r from-[#F3E8FF] to-[#F8F3FF] border-l-4 border-[#6D28D9] p-6 rounded-r-2xl my-4 text-[#0F172A] italic">“Our expanded presence in Bengaluru allows us to accelerate modern product delivery for our enterprise clients. By coupling senior software architects with dedicated agile pod governance, we provide companies with unmatched execution velocity and zero legacy debt.” — Leadership Team, WHY IT Services</blockquote>
      <h3 class="text-lg font-bold text-[#0F172A] mt-4 mb-2">Key Center Capabilities & Operations:</h3>
      <ul class="list-disc pl-5 space-y-2">
        <li>Deployment of 100+ Senior Full-Stack, AI, and Cloud SRE Developers in dedicated pods.</li>
        <li>Dedicated R&D lab for Large Language Model (LLM) fine-tuning, RAG architectures, and RPA BOT automation.</li>
        <li>SOC2 & ISO 27001 compliant security governance for GRC data privacy and enterprise protection.</li>
        <li>Rapid 48-hour squad onboarding for clients requiring specialized tech talent scaling.</li>
      </ul>
      <div class="bg-[#F8F3FF] border border-[#E9D5FF] rounded-2xl p-5 my-4 space-y-1">
        <div class="font-extrabold text-[#6D28D9] uppercase text-xs">Official Registered Headquarters</div>
        <div class="font-bold text-[#0F172A]">WHY Services India Private Limited</div>
        <div class="text-xs text-slate-600">1st Floor, No. 14/1, Balaji Krupa, 2nd Main Road, Seshadripuram, Bengaluru – 560020, Karnataka, India</div>
      </div>
    `
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
    image: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=800&q=80',
    videoUrl: '',
    summary: 'Introducing customized LLM fine-tuning, multi-modal code generation, and automated RPA bots engineered for Fortune enterprise applications.',
    content: `
      <p class="font-semibold text-[#0F172A]"><strong class="text-[#6D28D9] font-extrabold uppercase">GLOBAL ANNOUNCEMENT — August 2026</strong> — WHY IT Services announces the release of its enterprise-grade Generative AI pod orchestration framework.</p>
    `
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
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    videoUrl: '',
    summary: 'Accelerating data lake ingestion for structured and unstructured datasets with BI dashboarding and SOC2 GRC compliance.',
    content: `
      <p class="font-semibold text-[#0F172A]"><strong class="text-[#6D28D9] font-extrabold uppercase">BENGALURU, INDIA — July 2026</strong> — WHY IT Services unveils its high-throughput real-time data lake ingestion pipeline architecture.</p>
    `
  }
];

export default function PressReleaseDetail() {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const isInitialized = localStorage.getItem('why_news_initialized');
    const storedArticlesRaw = localStorage.getItem('why_news_articles');
    const storedArticles = storedArticlesRaw !== null ? JSON.parse(storedArticlesRaw) : null;
    
    let allArticles = [];
    if (storedArticles !== null) {
      allArticles = storedArticles;
    } else if (!isInitialized) {
      allArticles = defaultArticles;
    }

    const currentSlug = slug || 'why-it-services-expands-bangalore-engineering-center';
    
    let found = allArticles.find(a => a.slug === currentSlug || a.id === currentSlug);
    
    if (!found && !isInitialized) {
      found = defaultArticles.find(a => a.slug === currentSlug || a.id === currentSlug);
    }

    if (found) {
      if (found.status && found.status !== 'Published') {
        setNotFound(true);
        setArticle(null);
        document.title = 'Page Not Found | WHY IT Services';
      } else {
        setArticle(found);
        setNotFound(false);
        const articleTitle = found.seoTitle || found.title;
        document.title = `${articleTitle} | WHY IT Services`;
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
          metaDesc.setAttribute('content', found.seoDescription || found.summary || articleTitle);
        }
      }
    } else {
      setNotFound(true);
      setArticle(null);
      document.title = 'Page Not Found | WHY IT Services';
    }
  }, [slug]);

  if (notFound) {
    return <NotFound />;
  }

  if (!article) return null;

  const youtubeEmbed = getYouTubeEmbedUrl(article.videoUrl);

  return (
    <div className="bg-[#FAFAFC] text-[#0F172A] min-h-screen py-10 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top Back Navigation Link */}
        <div className="flex items-center justify-start pb-2">
          <Link 
            to="/about/news"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold text-[#6D28D9] hover:text-[#5B21B6] bg-[#F3E8FF] hover:bg-[#E9D5FF] px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl border border-[#E9D5FF] transition-all shadow-sm group"
          >
            <ArrowLeft className="w-4 h-4 text-[#6D28D9] group-hover:-translate-x-0.5 transition-transform" />
            <span>Back to All News & Press Releases</span>
          </Link>
        </div>

        {/* Article Header */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="bg-[#6D28D9] text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
              {article.category || 'PRESS RELEASE'}
            </span>
            <span className="text-xs font-semibold text-slate-500 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#6D28D9]" />
              {article.date || 'September 2026'}
            </span>
            {article.location && (
              <span className="text-xs font-semibold text-slate-500 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#6D28D9]" />
                {article.location}
              </span>
            )}
            {article.author && (
              <span className="text-xs font-semibold text-slate-500 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-[#6D28D9]" />
                {article.author}
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
            {article.title}
          </h1>

          {article.summary && (
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal border-l-2 border-[#6D28D9] pl-4 italic">
              {article.summary}
            </p>
          )}
        </div>

        {/* Media Showcase: YouTube Video Embed or Featured Image */}
        {youtubeEmbed ? (
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-black aspect-video">
            <iframe
              src={youtubeEmbed}
              title={article.title}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ) : article.image ? (
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group">
            <img 
              src={article.image} 
              alt={article.title}
              className="w-full h-[280px] sm:h-[420px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/70 to-transparent flex items-end p-6 text-white justify-between">
              <div>
                <span className="text-[10px] font-mono text-purple-300 font-bold uppercase tracking-wider block">WHY IT Services Global Newsroom</span>
                <h3 className="text-base sm:text-xl font-extrabold">{article.title}</h3>
              </div>
            </div>
          </div>
        ) : null}

        {/* Main Press Release Body */}
        <div className="bg-white border border-[#E9D5FF] rounded-3xl p-6 sm:p-10 shadow-sm space-y-6 text-slate-700 text-sm sm:text-base leading-relaxed">
          
          <div 
            className="prose prose-purple max-w-none space-y-4"
            dangerouslySetInnerHTML={{ __html: sanitizeHtml(article.content || '<p>No additional content provided.</p>') }}
          />

          {/* Official Registered HQ Box */}
          <div className="bg-[#F8F3FF] border border-[#E9D5FF] rounded-2xl p-5 space-y-2 text-xs sm:text-sm mt-8">
            <div className="flex items-center gap-2 font-extrabold text-[#6D28D9] uppercase tracking-wider">
              <Building className="w-4 h-4 text-[#6D28D9]" />
              <span>Official Registered Headquarters</span>
            </div>
            <p className="font-bold text-[#0F172A]">WHY Services India Private Limited</p>
            <p className="text-slate-600">
              1st Floor, No. 14/1, Balaji Krupa, 2nd Main Road, Seshadripuram, Bengaluru – 560020, Karnataka, India
            </p>
          </div>

          <div className="pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              to="/schedule-discovery"
              className="bg-[#6D28D9] hover:bg-[#5B21B6] text-white text-xs font-extrabold px-8 py-3.5 rounded-xl uppercase tracking-wider transition-all shadow-md inline-flex items-center gap-2"
            >
              <span>Schedule Discovery Call</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            
            <Link
              to="/about/news"
              className="text-xs font-bold text-slate-600 hover:text-[#6D28D9] transition-colors"
            >
              Explore More Corporate News →
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}

