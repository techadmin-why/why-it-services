import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Code2, Users, DollarSign, ShieldCheck, Layers3, Activity, 
  RefreshCw, Clock, ArrowRight, CheckCircle2, Star, Play, 
  Sparkles, Check, ChevronRight, Award, Compass, Database, 
  Bot, Server, ExternalLink, HelpCircle, Monitor, Smartphone, 
  Globe, Laptop, Cpu, Heart, Rocket, FileText, Calculator
} from 'lucide-react';
import PartnerTicker from '../components/PartnerTicker';
import { getTechLogo } from '../components/TechLogos';
import ProjectEstimator from '../components/ProjectEstimator';
import Testimonials from '../components/Testimonials';
import GlobalDeliveryMap from '../components/GlobalDeliveryMap';

export default function Home() {
  const [techTab, setTechTab] = useState('mobile');
  const [activePillarTab, setActivePillarTab] = useState('digital-strategy');
  const [isNewsModalOpen, setIsNewsModalOpen] = useState(false);

  // 4-Card Grid: "Why Work With WHY IT Services?" with Background Images
  const whyWorkWithUs = [
    {
      title: 'Custom Software Solutions',
      desc: 'Tailored enterprise software, SaaS platforms, and mobile apps built using secure, scalable full-stack technologies.',
      badge: 'Full-Stack & Cloud',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
      link: '/services/digital-engineering'
    },
    {
      title: 'Dedicated Agile Squads',
      desc: 'Hire senior full-stack, AI, cloud, and mobile developers onboarded within 48 hours for your custom project needs.',
      badge: '48h Squad Onboarding',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
      link: '/hire'
    },
    {
      title: 'Enterprise AI & Data Lakes',
      desc: 'Leverage custom GenAI models, LLM fine-tuning, automated ETL data ingestion pipelines, and RPA bots.',
      badge: 'AI & Automation',
      image: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=800&q=80',
      link: '/services/generative-ai'
    },
    {
      title: '24/7 Cloud Managed Ops',
      desc: 'Continuous performance benchmarking, zero-downtime CI/CD pipelines, ISO-grade compliance, and 24/7 SRE support.',
      badge: '24/7 Managed Ops',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
      link: '/services/infrastructure-services'
    }
  ];

  // Services 4 Core Cards from PPT / TENJUMPS reference layout
  const servicesList = [
    {
      title: 'Digital Strategy & Engineering',
      desc: 'Architecting scalable web, mobile, and enterprise SaaS platforms aligned with modern business goals.',
      badge: 'Strategy & Build',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
      link: '/services/digital-strategy'
    },
    {
      title: 'Data Engineering & Analytics',
      desc: 'Real-time ETL pipelines, data lake ingestion layers, and BI dashboards for enterprise decision-making.',
      badge: 'Data & Analytics',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      link: '/services/data-engineering'
    },
    {
      title: 'Generative AI & LLM Integration',
      desc: 'Custom LLM fine-tuning, enterprise RAG architectures, and AI-driven SDLC code generation.',
      badge: 'GenAI & LLMs',
      image: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=800&q=80',
      link: '/services/generative-ai'
    },
    {
      title: '24/7 Cloud Managed Ops & Squads',
      desc: '24/7 SRE infrastructure support, continuous DevOps CI/CD, and 48-hour agile pod onboarding.',
      badge: 'Cloud & 24/7 Ops',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
      link: '/services/infrastructure-services'
    }
  ];

  // Technologies Tab Switcher Data
  const techCategories = {
    ai_genai: [
      { name: 'OpenAI (GPT-4o & o3)' },
      { name: 'Anthropic Claude 3.5' },
      { name: 'Google Gemini & Vertex' },
      { name: 'Meta Llama 3.2' },
      { name: 'LangChain & RAG' },
      { name: 'DeepSeek R1 & AI' },
      { name: 'PyTorch & ML' },
      { name: 'TensorFlow & Keras' },
      { name: 'Pinecone & Milvus DB' },
      { name: 'Hugging Face AI' },
      { name: 'Midjourney & SDXL' },
      { name: 'vLLM & Ollama' },
      { name: 'CrewAI & Agents' },
      { name: 'ChromaDB & Qdrant' },
      { name: 'LlamaIndex' },
      { name: 'Mistral AI' }
    ],
    mobile: [
      { name: 'Android' },
      { name: 'iOS' },
      { name: 'Swift' },
      { name: 'Ionic' },
      { name: 'Flutter' },
      { name: 'React Native' },
      { name: 'Xamarin' },
      { name: 'Kotlin' }
    ],
    frontend: [
      { name: 'React JS' },
      { name: 'Vue JS' },
      { name: 'Javascript' },
      { name: 'Svelte.js' },
      { name: 'Nuxt.js' },
      { name: 'Gatsby.js' },
      { name: 'Next.js' },
      { name: 'Angular' }
    ],
    backend: [
      { name: 'Python' },
      { name: 'Node.js' },
      { name: 'Java' },
      { name: 'FastAPI' },
      { name: 'Express.js' },
      { name: '.NET / C#' },
      { name: 'PHP' }
    ],
    frameworks: [
      { name: 'Laravel' },
      { name: 'CodeIgniter' },
      { name: 'Django' },
      { name: 'Ruby on Rails' }
    ],
    cms: [
      { name: 'WordPress' },
      { name: 'Drupal' },
      { name: 'Squarespace' }
    ],
    database: [
      { name: 'MongoDB' },
      { name: 'MySQL' },
      { name: 'PostgreSQL' },
      { name: 'Oracle' },
      { name: 'SQLite' }
    ],
    devops: [
      { name: 'AWS' },
      { name: 'Jenkins' },
      { name: 'Gradle' }
    ],
    ecommerce: [
      { name: 'Shopify' },
      { name: 'WooCommerce' },
      { name: 'Magento' },
      { name: 'Odoo' }
    ]
  };

  // 4-Step Quality Process with Icons & Custom Metadata
  const qualitySteps = [
    {
      num: '01',
      title: 'Define Scope of Work',
      subtitle: 'Requirement Analysis',
      desc: 'Specify your core technical requirements. We match specialized software architects and product experts to your domain.',
      bullets: ['Branding & UX Design', 'Architecture Audit', 'Web & Mobile Scope'],
      icon: FileText
    },
    {
      num: '02',
      title: 'Time & Cost Estimation',
      subtitle: 'Transparent Pricing',
      desc: 'Based on your scope, we provide a detailed cost breakdown with transparent Fixed-Price or Time & Materials options.',
      bullets: ['Fixed Price Option', 'Time & Materials', 'Milestone Roadmaps'],
      icon: Calculator
    },
    {
      num: '03',
      title: 'Kick-off & Squad Match',
      subtitle: 'Account Alignment',
      desc: 'Meet your dedicated engineers, technical project manager, and account leads during an aligned kickoff sprint.',
      bullets: ['Prepare Scope Agenda', 'Sprint Goal Alignment', 'Slack / Jira Setup'],
      icon: Users
    },
    {
      num: '04',
      title: 'Ready? Let\'s Build!',
      subtitle: 'High Velocity Execution',
      desc: 'With team onboarding complete and sprint milestones agreed upon, we immediately begin agile sprint deployment.',
      bullets: ['Dedicated PM Included', '24/7 SRE Support', 'Weekly Demo Sprints'],
      icon: Rocket
    }
  ];

  // 3-Column Capability Links
  const capabilityColumns = [
    {
      title: 'Mobile App Development',
      badge: 'iOS & Android',
      items: [
        'iOS App Development',
        'Android App Development',
        'Cross Platform Development',
        'Flutter App Development',
        'Swift App Development',
        'App Maintenance & Support'
      ]
    },
    {
      title: 'Software Development',
      badge: 'Custom & Cloud',
      items: [
        'Custom Software Development',
        'SaaS Development',
        'ERP Software Development',
        'Cloud & DevOps',
        'Custom CRM Development',
        'AI / ML Development'
      ]
    },
    {
      title: 'Web Development',
      badge: 'Full Stack',
      items: [
        'Web App Development',
        'eCommerce Development',
        'API Development',
        'Frontend Development',
        'Backend Development',
        'Hire a Dedicated Developer'
      ]
    }
  ];

  // 5 Core Pillars
  const pillars = [
    {
      id: 'digital-strategy',
      title: 'Digital Strategy',
      tagline: 'Strategic Roadmaps & Technical Audits',
      description: 'Discovery, ideation, experience engineering, technology & data audits, and GRC risk implementation to align technology with business goals.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
      deliverables: ['Discovery & Ideation Roadmaps', 'Experience Engineering', 'Technology Audits', 'GRC Compliance']
    },
    {
      id: 'digital-engineering',
      title: 'Digital Engineering',
      tagline: 'Enterprise Buildout & QA Verification',
      description: 'End-to-end web & mobile application development, legacy code refactoring, QA verification & validation, and concurrent engineering.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
      deliverables: ['Enterprise App Buildout', 'QA Verification & Validation', 'Application Sustenance', 'Migration Services']
    },
    {
      id: 'data-engineering',
      title: 'Data Engineering',
      tagline: 'Data Lakes, ETL Pipelines & BI Analytics',
      description: 'Building robust ingestion layers for structured/unstructured sources, real-time data lakes, ETL orchestration, and predictive analytics models.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
      deliverables: ['Data Lake Ingestion', 'Real-Time ETL Pipelines', 'BI Dashboards', 'Predictive Analytics']
    },
    {
      id: 'generative-ai',
      title: 'Generative AI',
      tagline: 'LLMs, AI SDLC & Intelligent Automation',
      description: 'Leveraging Large Language Models, AI-driven software development lifecycles, content generation models, and RPA attended/unattended BOTs.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=1200&q=80',
      deliverables: ['LLM Fine-Tuning', 'AI-Driven SDLC', 'RPA Automation BOTs', 'Enterprise Low-Code']
    },
    {
      id: 'infrastructure-services',
      title: 'Infrastructure Managed Services',
      tagline: '24/7 Managed Infra & Cloud Operations',
      description: 'Comprehensive IT infrastructure optimization, datacenter management, L1/L2 support, and continuous automated backup monitoring.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
      deliverables: ['24/7 Datacenter Ops', 'L1 & L2 Support', 'Cost Optimization', 'Proactive Incident Response']
    }
  ];

  const activePillar = pillars.find(p => p.id === activePillarTab) || pillars[0];

  return (
    <div className="bg-[#FAFAFC] text-[#0F172A] overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-6 pb-10 sm:pt-12 sm:pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#F3E8FF] border border-[#E9D5FF] text-[#6D28D9] px-3.5 py-1 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#6D28D9]" />
              Enterprise AI & Software Engineering
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-semibold text-[#0F172A] tracking-normal leading-tight sm:leading-[1.25]">
              <span className="block text-[#0F172A]">
                Ideas are only the beginning.
              </span>
              <span className="block font-accent-italic font-normal text-[#6D28D9] pt-1">
                Let's build what's next.
              </span>
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
              We bring together custom software development, cloud data lakes, and enterprise AI to solve complex technical challenges and build high-velocity digital capabilities.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <Link
                to="/schedule-discovery"
                className="bg-gradient-to-r from-[#6D28D9] to-[#5B21B6] hover:from-[#5B21B6] hover:to-[#4C1D95] text-white font-extrabold px-7 py-3.5 sm:px-8 sm:py-4 rounded-xl transition-all shadow-lg text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 ring-2 ring-[#E9D5FF]"
              >
                <span>SCHEDULE DISCOVERY CALL</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/services"
                className="bg-white hover:bg-slate-50 text-slate-800 font-bold px-6 py-3.5 sm:px-7 sm:py-4 rounded-xl transition-all border border-slate-200 shadow-sm text-xs text-center"
              >
                Explore All Offerings
              </Link>
            </div>
          </div>

          {/* Hero Professional Enterprise Media Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 group">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80" 
                alt="Enterprise AI & Cloud Engineering"
                className="w-full h-[220px] sm:h-[380px] lg:h-[420px] object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/95 via-[#0F172A]/20 to-transparent flex flex-col justify-end p-4 sm:p-7 text-white space-y-1 sm:space-y-1.5">
                <span className="bg-[#6D28D9] text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider w-max shadow-sm">
                  Enterprise Technology Partner
                </span>
                <h3 className="text-sm sm:text-2xl font-extrabold tracking-tight text-white leading-snug">
                  Enterprise AI & Cloud Infrastructure
                </h3>
                <p className="text-[11px] sm:text-xs text-purple-200 font-medium leading-relaxed hidden sm:block">
                  High-velocity engineering squads deployed for modern enterprise digital acceleration.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. FEATURED PRESS RELEASE / NEWS ANNOUNCEMENT BANNER (TENJUMPS STYLE) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        <div className="bg-gradient-to-br from-[#F8F3FF] via-white to-[#F3E8FF] border border-[#E9D5FF] rounded-3xl p-5 sm:p-8 shadow-lg space-y-4 sm:space-y-6">
          
          <div className="inline-flex items-center gap-2 bg-[#F3E8FF] text-[#6D28D9] border border-[#E9D5FF] px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#6D28D9]" />
            <span>Featured</span>
          </div>

          <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-tight max-w-5xl leading-snug sm:leading-tight">
            WHY IT Services expands engineering center in Bengaluru to support growing global demand
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center pt-1">
            
            {/* Left Media Video Thumbnail Container */}
            <div 
              className="lg:col-span-7 relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 group cursor-pointer"
              onClick={() => setIsNewsModalOpen(true)}
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                alt="WHY IT Services Bangalore Engineering Expansion"
                className="w-full h-[180px] sm:h-[240px] lg:h-[260px] object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/85 via-transparent to-transparent flex items-center justify-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#6D28D9] text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform ring-4 ring-white/30">
                  <Play className="w-5 h-5 sm:w-7 sm:h-7 text-white fill-white ml-0.5" />
                </div>
              </div>
              <div className="absolute bottom-3 left-3 right-3 text-white text-[11px] sm:text-xs font-extrabold bg-slate-950/70 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/20 flex items-center justify-between">
                <span>Bengaluru Engineering Center Expansion</span>
                <span className="text-purple-300 font-mono hidden sm:inline-block">Watch Highlight</span>
              </div>
            </div>

            {/* Right Summary Excerpt & Action Button */}
            <div className="lg:col-span-5 space-y-4">
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                The new Bengaluru presence expands WHY IT Services' global delivery capabilities, adding highly skilled local talent to provide clients with greater flexibility, efficiency, and cost-effective access to data and digital engineering expertise.
              </p>

              <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link
                  to="/about/news/why-it-services-expands-bangalore-engineering-center"
                  className="bg-[#6D28D9] hover:bg-[#5B21B6] text-white text-xs font-extrabold px-6 py-3 rounded-xl uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 group text-center"
                >
                  <span>Read the press release</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. "EXPERT MINDS: WHY WORK WITH WHY IT SERVICES?" 4-CARD GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <span className="text-xs font-bold text-[#6D28D9] uppercase tracking-wider">Expert Minds</span>
          <h2 className="text-xl sm:text-3xl lg:text-3xl font-bold text-[#0F172A] mt-1 tracking-tight">
            Why Partner With <span className="text-[#6D28D9]">WHY IT Services</span>?
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-1">
            We assemble dedicated engineering squads to build custom web, app, data, and AI software with modern velocity.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {whyWorkWithUs.map((card, idx) => (
            <Link 
              key={idx}
              to={card.link}
              className="relative overflow-hidden rounded-3xl min-h-[200px] sm:min-h-[240px] lg:min-h-[300px] p-4 sm:p-5 bg-slate-900 shadow-md hover:shadow-xl border border-slate-200/80 hover:border-[#6D28D9] transition-all flex flex-col justify-between group cursor-pointer"
            >
              {/* Background Image with Zoom on Hover */}
              <img 
                src={card.image} 
                alt="" 
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
              />

              {/* Rich Dark Purple Gradient Overlay for High Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/80 to-[#1E1B4B]/40 transition-opacity duration-300"></div>

              {/* Top Header: Circular Number Badge (Left) & Circular Arrow Button (Right) */}
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md text-white font-extrabold text-xs flex items-center justify-center border border-white/30 shadow-md">
                    {idx + 1}
                  </span>
                  <span className="bg-[#6D28D9] text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-sm hidden sm:inline-block">
                    {card.badge}
                  </span>
                </div>

                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center border border-white/30 group-hover:bg-[#6D28D9] group-hover:border-[#6D28D9] transition-all shadow-md group-hover:scale-105">
                  <ArrowRight className="w-3.5 h-3.5 text-white group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>

              {/* Bottom Card Title, Description & Action */}
              <div className="relative z-10 space-y-1.5 mt-auto pt-4">
                <span className="bg-[#6D28D9] text-white text-[9px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider shadow-sm inline-block sm:hidden">
                  {card.badge}
                </span>
                <h3 className="font-extrabold text-base sm:text-lg text-white group-hover:text-purple-200 transition-colors leading-snug">
                  {card.title}
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-300 leading-relaxed font-normal line-clamp-3">
                  {card.desc}
                </p>
                
                <div className="pt-2 border-t border-white/15 flex items-center justify-between text-xs font-bold text-purple-300 group-hover:text-white transition-colors">
                  <span>Learn More</span>
                  <ChevronRight className="w-3.5 h-3.5 text-purple-400 group-hover:text-white transition-colors" />
                </div>
              </div>

            </Link>
          ))}
        </div>
      </section>

      {/* 4. AGILE ENGINEERING BANNER CARD */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div className="bg-gradient-to-r from-[#5B21B6] via-[#6D28D9] to-[#4C1D95] rounded-3xl p-5 sm:p-8 text-white shadow-xl text-center space-y-3">
          <div className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-widest text-purple-200">
            AGILE ENGINEERING
          </div>
          <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold text-white tracking-tight max-w-4xl mx-auto">
            Engineering Leadership Focused on <span className="font-medium text-purple-200">Modern Software Excellence</span>
          </h2>
          <p className="text-xs sm:text-sm text-purple-100 max-w-3xl mx-auto leading-relaxed">
            Our technology leads and software architects specialize in digital strategy, full-stack enterprise development, real-time data lakes, QA automation, and cloud infrastructure management.
          </p>
          <div className="pt-1">
            <Link
              to="/schedule-discovery"
              className="bg-white hover:bg-purple-50 text-[#6D28D9] font-extrabold px-6 py-3 rounded-xl text-xs uppercase tracking-wider inline-block shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              Connect with Our Engineering Pods
            </Link>
          </div>
        </div>
      </section>

      {/* 5. STARTUP METRICS & MISSION BANNER */}
      <section className="bg-gradient-to-br from-[#0F172A] via-[#1E1B4B] to-[#0F172A] text-white py-10 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
              Built for <span className="text-purple-300">Agile Product Innovation</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
            <div className="shrink-0 w-[78vw] max-w-xs snap-center sm:w-auto sm:shrink bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-8 text-center space-y-1 sm:space-y-2">
              <div className="text-3xl sm:text-5xl font-extrabold text-purple-400">100%</div>
              <div className="text-[11px] sm:text-xs text-slate-400 font-semibold uppercase tracking-wider">Dedicated Engineering Pods</div>
              <div className="text-[10px] text-purple-300 font-mono">/ 01</div>
            </div>
            <div className="shrink-0 w-[78vw] max-w-xs snap-center sm:w-auto sm:shrink bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-8 text-center space-y-1 sm:space-y-2">
              <div className="text-3xl sm:text-5xl font-extrabold text-purple-400">48 hrs</div>
              <div className="text-[11px] sm:text-xs text-slate-400 font-semibold uppercase tracking-wider">Squad Onboarding Time</div>
              <div className="text-[10px] text-purple-300 font-mono">/ 02</div>
            </div>
            <div className="shrink-0 w-[78vw] max-w-xs snap-center sm:w-auto sm:shrink bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-8 text-center space-y-1 sm:space-y-2">
              <div className="text-3xl sm:text-5xl font-extrabold text-purple-400">24 / 7</div>
              <div className="text-[11px] sm:text-xs text-slate-400 font-semibold uppercase tracking-wider">SRE Cloud Monitoring</div>
              <div className="text-[10px] text-purple-300 font-mono">/ 03</div>
            </div>
          </div>

          {/* Mission Statement Banner */}
          <div className="max-w-4xl mx-auto bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 text-center space-y-3">
            <p className="text-xs sm:text-base text-slate-300 italic leading-relaxed">
              “At WHY IT Services, we engineered our core architecture from the ground up to empower ambitious founders and growing companies with modern AI, cloud data lakes, and custom software solutions.”
            </p>
            <div className="pt-1">
              <div className="font-bold text-xs text-white">WHY IT Services Engineering Leadership</div>
              <div className="text-[10px] text-purple-400 font-semibold uppercase">AI & Software Engineering Pods</div>
            </div>
          </div>

        </div>
      </section>

      {/* 6. "OUR OFFERINGS: EXPLORE PROVEN IT SOLUTIONS" GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-8 gap-4 sm:gap-6">
          <div>
            <span className="text-xs font-bold text-[#6D28D9] uppercase tracking-wider">Our Offerings</span>
            <h2 className="text-xl sm:text-3xl lg:text-3xl font-bold text-[#0F172A] mt-1 tracking-tight">
              Explore Proven Enterprise Solutions
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1 max-w-xl">
              Designed to accelerate your growth, efficiency, and digital transformation journey.
            </p>
          </div>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-[#6D28D9] to-[#5B21B6] hover:from-[#5B21B6] hover:to-[#4C1D95] text-white text-xs font-bold px-6 py-3 rounded-xl uppercase tracking-wider shrink-0 transition-all shadow-md text-center"
          >
            Get a Custom Proposal Now
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {servicesList.map((service, idx) => (
            <Link 
              key={idx}
              to={service.link}
              className="relative overflow-hidden rounded-3xl min-h-[200px] sm:min-h-[240px] lg:min-h-[300px] p-4 sm:p-5 bg-slate-900 shadow-md hover:shadow-xl border border-slate-200/80 hover:border-[#6D28D9] transition-all flex flex-col justify-between group cursor-pointer"
            >
              {/* Background Image with Zoom on Hover */}
              <img 
                src={service.image} 
                alt="" 
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
              />

              {/* Rich Dark Purple Gradient Overlay for High Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/80 to-[#1E1B4B]/40 transition-opacity duration-300"></div>

              {/* Top Header: Circular Number Badge (Left) & Circular Arrow Button (Right) */}
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md text-white font-extrabold text-xs flex items-center justify-center border border-white/30 shadow-md">
                    {idx + 1}
                  </span>
                  <span className="bg-[#6D28D9] text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-sm hidden sm:inline-block">
                    {service.badge}
                  </span>
                </div>

                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center border border-white/30 group-hover:bg-[#6D28D9] group-hover:border-[#6D28D9] transition-all shadow-md group-hover:scale-105">
                  <ArrowRight className="w-3.5 h-3.5 text-white group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>

              {/* Bottom Card Title, Description & Action */}
              <div className="relative z-10 space-y-1.5 mt-auto pt-4">
                <span className="bg-[#6D28D9] text-white text-[9px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider shadow-sm inline-block sm:hidden">
                  {service.badge}
                </span>
                <h3 className="font-extrabold text-base sm:text-lg text-white group-hover:text-purple-200 transition-colors leading-snug">
                  {service.title}
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-300 leading-relaxed font-normal line-clamp-3">
                  {service.desc}
                </p>
                
                <div className="pt-2 border-t border-white/15 flex items-center justify-between">
                  <span className="text-xs font-bold text-purple-300 group-hover:text-white flex items-center gap-1 transition-colors">
                    <span>Explore Solution</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

            </Link>
          ))}
        </div>
      </section>

      {/* 7B. INTERACTIVE SQUAD ESTIMATOR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProjectEstimator />
      </section>

      {/* 8. 5 CORE PILLARS ENTERPRISE SWITCHER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        <div className="bg-gradient-to-b from-[#F8F3FF] via-white to-[#FAFAFC] border border-[#E9D5FF] rounded-3xl p-4 sm:p-8 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
            <span className="text-xs font-bold text-[#6D28D9] uppercase tracking-wider">Enterprise Architecture</span>
            <h2 className="text-xl sm:text-3xl lg:text-3xl font-bold text-[#0F172A] mt-1">5 Core Enterprise Service Pillars</h2>
          </div>

          <div className="flex flex-wrap gap-2 justify-center mb-5 sm:mb-6 overflow-x-auto no-scrollbar py-1">
            {pillars.map((p) => (
              <button
                key={p.id}
                onClick={() => setActivePillarTab(p.id)}
                className={`px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl text-xs font-bold transition-all shrink-0 ${
                  activePillarTab === p.id
                    ? 'bg-[#6D28D9] text-white shadow-md'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-[#F3E8FF]'
                }`}
              >
                {p.title}
              </button>
            ))}
          </div>

          <div className="bg-white p-4 sm:p-6 rounded-3xl border border-[#E9D5FF] shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-center">
            <div className="lg:col-span-7 space-y-3">
              <div className="text-xs font-bold text-[#6D28D9] uppercase tracking-wider">{activePillar.title}</div>
              <h3 className="text-lg sm:text-xl font-extrabold text-[#0F172A]">{activePillar.tagline}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{activePillar.description}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                {activePillar.deliverables.map((item, idx) => (
                  <div key={idx} className="bg-[#F3E8FF]/60 border border-[#E9D5FF] p-2 rounded-xl text-xs font-semibold text-slate-700 flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#6D28D9] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5 relative rounded-2xl overflow-hidden shadow-md group">
              <img 
                src={activePillar.image} 
                alt={activePillar.title} 
                className="w-full h-40 sm:h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-transparent to-transparent flex items-end p-3.5 text-white text-xs font-bold">
                {activePillar.title} Architecture
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8B. CLIENT & ARCHITECTURE FEEDBACK SLIDER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Testimonials />
      </section>

      {/* 8C. GLOBAL DELIVERY NETWORK & HQ MAP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GlobalDeliveryMap />
      </section>

      {/* 9. "OUR COMMITMENT TO CONSISTENT QUALITY" 4-STEP PROCESS */}
      <section className="relative bg-gradient-to-b from-[#0B0F19] via-[#0F172A] to-[#1E1B4B] text-white py-10 sm:py-16 overflow-hidden">
        {/* Ambient Radial Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/30 via-slate-900/0 to-transparent pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-2">
            <div className="inline-flex items-center gap-2 bg-purple-950/80 border border-purple-800/60 text-purple-300 px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-widest shadow-md">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span>AGILE DELIVERY FRAMEWORK</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Our Commitment to <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-indigo-300 to-purple-200">Consistent Quality</span>
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
              Understand our proven 4-step engineering workflow for delivering transparent, high-velocity results on every project.
            </p>
          </div>

          {/* 4-Step Interactive Timeline Grid */}
          <div className="relative">
            {/* Desktop Connecting Line */}
            <div className="hidden lg:block absolute top-[44px] left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-purple-600 via-indigo-500 to-purple-600 opacity-40 z-0"></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 relative z-10">
              {qualitySteps.map((step, idx) => {
                const StepIcon = step.icon;
                return (
                  <div 
                    key={idx} 
                    className="shrink-0 w-[85vw] max-w-xs snap-center lg:w-auto lg:shrink bg-[#131C31]/90 backdrop-blur-xl border border-purple-500/20 hover:border-purple-500/60 rounded-3xl p-5 sm:p-6 space-y-3.5 flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1 shadow-xl hover:shadow-2xl hover:shadow-purple-900/30 cursor-pointer"
                  >
                    <div>
                      {/* Step Header: Icon + Number Pill */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#8B5CF6] to-[#6D28D9] text-white flex items-center justify-center shadow-lg shadow-purple-900/40 ring-4 ring-purple-500/20 group-hover:scale-110 transition-transform duration-300">
                          <StepIcon className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-[11px] font-mono font-extrabold text-purple-300 bg-purple-950/70 border border-purple-800/60 px-2.5 py-0.5 rounded-full">
                          STEP {step.num}
                        </span>
                      </div>

                      {/* Subtitle & Title */}
                      <div className="space-y-0.5">
                        <div className="text-[10px] font-bold uppercase tracking-wider text-purple-400 font-mono">
                          {step.subtitle}
                        </div>
                        <h3 className="font-extrabold text-base text-white group-hover:text-purple-200 transition-colors leading-snug">
                          {step.title}
                        </h3>
                      </div>

                      <p className="text-xs text-slate-300 mt-2 leading-relaxed font-normal">
                        {step.desc}
                      </p>
                    </div>

                    {/* Bullet Points */}
                    <div className="pt-3 border-t border-purple-900/40 space-y-1.5">
                      {step.bullets.map((b, i) => (
                        <div key={i} className="bg-purple-950/50 border border-purple-800/40 px-2.5 py-1 rounded-xl text-[11px] text-purple-200 font-medium flex items-center gap-2 group-hover:bg-purple-900/40 transition-colors">
                          <Check className="w-3 h-3 text-purple-400 shrink-0" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>

                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* 10. "PARTNER WITH SKILLED SPECIALISTS" 3-COLUMN CAPABILITY GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-3xl lg:text-3xl font-bold text-[#0F172A] tracking-tight">
            Partner with Skilled Specialists to Elevate Your Project's Success
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-1">
            Our team offers ongoing technical and expert support throughout the entire process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {capabilityColumns.map((col, idx) => (
            <div key={idx} className="shrink-0 w-[85vw] max-w-sm snap-center md:w-auto md:shrink bg-gradient-to-b from-[#F3E8FF] via-[#F8F3FF] to-white border border-[#E9D5FF] rounded-3xl p-4 sm:p-5 shadow-sm space-y-3">
              <div className="flex items-center justify-between border-b border-[#E9D5FF] pb-2.5">
                <h3 className="font-bold text-sm sm:text-base text-[#0F172A]">{col.title}</h3>
                <span className="text-[10px] font-bold text-[#6D28D9] bg-[#F3E8FF] px-2 py-0.5 rounded">{col.badge}</span>
              </div>
              <ul className="space-y-1.5 text-xs text-slate-700">
                {col.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 hover:text-[#6D28D9] font-medium transition-colors cursor-pointer">
                    <ChevronRight className="w-3.5 h-3.5 text-[#6D28D9]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 11. UNIFIED HIGH-CONVERTING PARTNERSHIP CTA */}
      <section className="bg-gradient-to-r from-[#5B21B6] via-[#6D28D9] to-[#4C1D95] text-white py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 bg-purple-950/80 border border-purple-800 text-purple-200 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-purple-300" />
            <span>Risk-Free 3-Day Engineering Trial</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight">
            Ready to Build Your Next <span className="font-accent-italic font-normal text-purple-200">Digital Capability</span>?
          </h2>

          <p className="text-xs sm:text-base text-purple-100 max-w-2xl mx-auto leading-relaxed font-normal">
            Assign a trial task to one of our dedicated senior developers or schedule an architecture discovery call with our leadership team.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              to="/schedule-discovery"
              className="w-full sm:w-auto bg-white hover:bg-purple-50 text-[#6D28D9] font-extrabold px-8 py-4 rounded-xl text-xs uppercase tracking-wider shadow-xl transition-all flex items-center justify-center gap-2"
            >
              <span>SCHEDULE DISCOVERY CALL</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/hire"
              className="w-full sm:w-auto bg-purple-950/70 border border-purple-400/40 hover:bg-purple-900 text-white font-bold px-8 py-4 rounded-xl text-xs uppercase tracking-wider transition-all text-center"
            >
              Explore Developer Squads
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED PRESS RELEASE PREVIEW MODAL */}
      {isNewsModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white border border-slate-200 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-10 shadow-2xl relative space-y-6">
            <button 
              onClick={() => setIsNewsModalOpen(false)}
              className="absolute top-6 right-6 text-slate-400 hover:text-slate-700 bg-slate-100 p-2 rounded-full transition-colors font-bold text-xs"
            >
              ✕ Close
            </button>

            <div className="space-y-3">
              <span className="bg-[#6D28D9] text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                PRESS RELEASE
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] leading-tight">
                WHY IT Services expands engineering center in Bengaluru to support growing global demand
              </h3>
              <p className="text-xs font-mono text-purple-600 font-bold">BENGALURU, INDIA — SEPTEMBER 2026</p>
            </div>

            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
              alt="Bangalore Center Expansion"
              className="w-full h-64 object-cover rounded-2xl"
            />

            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              WHY IT Services today announced the expansion of its Global Delivery Headquarters in Bengaluru, Karnataka. The new facility expands client capacity for dedicated Generative AI, cloud data lakes, and high-velocity developer squads.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200">
              <Link
                to="/about/news/why-it-services-expands-bangalore-engineering-center"
                onClick={() => setIsNewsModalOpen(false)}
                className="bg-[#6D28D9] hover:bg-[#5B21B6] text-white text-xs font-extrabold px-7 py-3.5 rounded-xl uppercase tracking-wider transition-all shadow-md inline-flex items-center gap-2"
              >
                <span>Read Full Article & Address</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
