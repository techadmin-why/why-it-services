import React from 'react';

// Exact image mapping using local files in public/tech-logos
export const TechLogoImagePaths = {
  // AI & GenAI (Downloaded Official Brand Vector SVGs in public/tech-logos)
  'OpenAI (GPT-4o & o3)': '/tech-logos/openai.svg',
  'Anthropic Claude 3.5': '/tech-logos/anthropic.svg',
  'Google Gemini & Vertex': '/tech-logos/googlegemini.svg',
  'Meta Llama 3.2': '/tech-logos/meta.svg',
  'LangChain & RAG': '/tech-logos/langchain.svg',
  'DeepSeek R1 & AI': '/tech-logos/deepseek.svg',
  'PyTorch & ML': '/tech-logos/pytorch.svg',
  'TensorFlow & Keras': '/tech-logos/tensorflow.svg',
  'Pinecone & Milvus DB': '/tech-logos/pinecone.svg',
  'Hugging Face AI': '/tech-logos/huggingface.svg',
  'Midjourney & SDXL': '/tech-logos/midjourney.svg',
  'vLLM & Ollama': '/tech-logos/ollama.svg',
  'CrewAI & Agents': '/tech-logos/crewai.svg',
  'ChromaDB & Qdrant': '/tech-logos/chromadb.svg',
  'LlamaIndex': '/tech-logos/llamaindex.svg',
  'Mistral AI': '/tech-logos/mistralai.svg',

  // Mobile
  'Android': '/tech-logos/Android.webp',
  'iOS': '/tech-logos/Apple.webp',
  'Apple': '/tech-logos/Apple.webp',
  'Swift': '/tech-logos/Swift.webp',
  'Ionic': '/tech-logos/Ionic.webp',
  'Flutter': '/tech-logos/Flutter.webp',
  'React Native': '/tech-logos/React.webp',
  'Xamarin': '/tech-logos/Xamarin.webp',
  'Kotlin': '/tech-logos/Kotlin.webp',

  // Frontend
  'React JS': '/tech-logos/React.webp',
  'Vue JS': '/tech-logos/Vue.webp',
  'Javascript': '/tech-logos/JavaScript.webp',
  'JavaScript': '/tech-logos/JavaScript.webp',
  'Svelte.js': '/tech-logos/Svelte.webp',
  'Nuxt.js': '/tech-logos/Nuxt-JS.webp',
  'Gatsby.js': '/tech-logos/gatsby-js.webp',
  'Next.js': '/tech-logos/next-js.webp',
  'Angular': '/tech-logos/Angular.webp',
  'Backbone.js': '/tech-logos/Backbone-js.webp',

  // Backend
  'Python': '/tech-logos/Python.webp',
  'Node.js': '/tech-logos/Node.webp',
  'Java': '/tech-logos/Java.webp',
  'FastAPI': '/tech-logos/Fastify.webp',
  'Express.js': '/tech-logos/express.webp',
  '.NET / C#': '/tech-logos/NET.webp',
  '.NET': '/tech-logos/NET.webp',
  '.NET Core': '/tech-logos/netcore.png',
  'PHP': '/tech-logos/PHP.webp',

  // Frameworks
  'Laravel': '/tech-logos/laravel.webp',
  'CodeIgniter': '/tech-logos/CodeIgniter.webp',
  'Django': '/tech-logos/Django.webp',
  'Ruby on Rails': '/tech-logos/Ruby.png',
  'CakePHP': '/tech-logos/CakePHP.webp',

  // CMS
  'WordPress': '/tech-logos/wordpress.webp',
  'Drupal': '/tech-logos/drupal.webp',
  'Squarespace': '/tech-logos/squarespace.webp',

  // Database
  'MongoDB': '/tech-logos/Mongodb.png',
  'MySQL': '/tech-logos/MYSQL.png',
  'PostgreSQL': '/tech-logos/PostgreSQL_logo.3colors.svg',
  'Oracle': '/tech-logos/oracle-logo-png_seeklogo-103838.png',
  'SQLite': '/tech-logos/SQlite.jpg',

  // DevOps & Cloud
  'AWS': '/tech-logos/AWS.webp',
  'Jenkins': '/tech-logos/jenkins.jpg',
  'Gradle': '/tech-logos/Gradle--Streamline-Simple-Icons.svg',

  // Ecommerce
  'Shopify': '/tech-logos/shopify.webp',
  'WooCommerce': '/tech-logos/woo-commerce.webp',
  'Magento': '/tech-logos/magento.webp',
  'Odoo': '/tech-logos/Odoo.webp'
};

// Pure Standalone Crisp SVG Vector Brand Logos for AI & GenAI (Zero External CDN Dependency)
export const AiTechSvgLogos = {
  'OpenAI (GPT-4o & o3)': () => (
    <svg className="w-8 h-8 text-[#10A37F] group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0813 4.779-2.7582a.7938.7938 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.5045 4.5045 0 0 1-4.4952 4.4952zm-10.12-4.5048a4.483 4.483 0 0 1-.535-3.0031l.142.0831 4.779 2.7582a.7938.7938 0 0 0 .7938 0l5.8338-3.3692v2.3325a.0805.0805 0 0 1-.0332.0617l-4.836 2.7938a4.5045 4.5045 0 0 1-6.1444-1.657zm-1.222-10.963a4.4755 4.4755 0 0 1 2.3414-1.9623l-.0047.1634V10.92a.7938.7938 0 0 0 .4011.6813l5.8338 3.3692-2.02 1.1686a.0758.0758 0 0 1-.0678.0047l-4.836-2.7938a4.5045 4.5045 0 0 1-1.6478-6.1444zm16.597 3.8558l-5.8338-3.3692 2.02-1.1686a.0758.0758 0 0 1 .0678-.0047l4.836 2.7938a4.5045 4.5045 0 0 1 .535 7.7475l-.142-.0831-4.779-2.7582a.7938.7938 0 0 0-.704 0zm2.02-4.4952l-5.8338-3.3692v-2.3325a.0805.0805 0 0 1 .0332-.0617l4.836-2.7938a4.5045 4.5045 0 0 1 6.6794 4.6601l-.142-.0831-4.779-2.7582a.7938.7938 0 0 0-.7938 0zm-10.963-3.8558l2.02-1.1686a.0758.0758 0 0 1 .0678-.0047l4.836 2.7938a4.5045 4.5045 0 0 1 1.6478 6.1444l-.1419.0813-4.779-2.7582a.7938.7938 0 0 0-.3927-.6813V4.1818a.071.071 0 0 1-.038-.052z"/>
    </svg>
  ),
  'Anthropic Claude 3.5': () => (
    <svg className="w-8 h-8 text-[#D97757] group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 4.5h-3.568l-7.07 15h3.568l1.41-3.136h6.776l1.41 3.136h3.568l-7.07-15zm-4.32 8.728l2.544-5.656 2.544 5.656h-5.088z"/>
    </svg>
  ),
  'Google Gemini & Vertex': () => (
    <svg className="w-8 h-8 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none">
      <path d="M12 2C12 7.52285 7.52285 12 2 12C7.52285 12 12 16.4771 12 22C12 16.4771 16.4771 12 22 12C16.4771 12 12 7.52285 12 2Z" fill="url(#gemini_grad)" />
      <defs>
        <linearGradient id="gemini_grad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1A73E8" />
          <stop offset="0.5" stopColor="#8E75FF" />
          <stop offset="1" stopColor="#E57373" />
        </linearGradient>
      </defs>
    </svg>
  ),
  'Meta Llama 3.2': () => (
    <svg className="w-8 h-8 text-[#0467DF] group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.5 12c0 3.3-2.7 6-6 6-2.5 0-4.6-1.5-5.5-3.7C10.1 16.5 8 18 5.5 18c-3.3 0-6-2.7-6-6s2.7-6 6-6c2.5 0 4.6 1.5 5.5 3.7C11.9 7.5 14 6 16.5 6c3.3 0 6 2.7 6 6zm-17 3.5c1.9 0 3.5-1.6 3.5-3.5s-1.6-3.5-3.5-3.5S2 10.1 2 12s1.6 3.5 3.5 3.5zm13 0c1.9 0 3.5-1.6 3.5-3.5s-1.6-3.5-3.5-3.5-3.5 1.6-3.5 3.5 1.6 3.5 3.5 3.5z"/>
    </svg>
  ),
  'LangChain & RAG': () => (
    <svg className="w-8 h-8 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none">
      <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" fill="#00A67E" opacity="0.18"/>
      <path d="M12 4l7 3.88v8.24L12 20l-7-3.88V7.88L12 4z" stroke="#00A67E" strokeWidth="2" strokeLinejoin="round"/>
      <path d="M12 8l4 2.25v4.5L12 17l-4-2.25v-4.5L12 8z" fill="#00A67E"/>
    </svg>
  ),
  'DeepSeek R1 & AI': () => (
    <svg className="w-8 h-8 text-[#4D6BFE] group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.5 12c.83 0 1.5-.67 1.5-1.5S19.33 9 18.5 9 17 9.67 17 10.5s.67 1.5 1.5 1.5zm-13 0C6.33 12 7 11.33 7 10.5S6.33 9 5.5 9 4 9.67 4 10.5 4.67 12 5.5 12zm6.5 8c4.41 0 8-3.59 8-8s-3.59-8-8-8-8 3.59-8 8 3.59 8 8 8zm0-14c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6 2.69-6 6-6z"/>
    </svg>
  ),
  'PyTorch & ML': () => (
    <svg className="w-8 h-8 text-[#EE4C2C] group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.5 2l1.6 2.7a8.5 8.5 0 11-6.2 0L10.5 2h3z"/>
    </svg>
  ),
  'TensorFlow & Keras': () => (
    <svg className="w-8 h-8 text-[#FF6F00] group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L2 8v8l10 6 10-6V8L12 2zm0 3.5l6.5 3.5-2.5 4.5H8l-2.5-4.5L12 5.5z"/>
    </svg>
  ),
  'Pinecone & Milvus DB': () => (
    <svg className="w-8 h-8 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none">
      <path d="M12 2L4 7v10l8 5 8-5V7l-8-5z" fill="#00F0FF" opacity="0.2"/>
      <path d="M12 2L4 7l8 5 8-5-8-5z" fill="#000000"/>
      <path d="M4 7v10l8 5V12L4 7z" fill="#1A1A1A"/>
      <path d="M20 7v10l-8 5V12l8-5z" fill="#333333"/>
    </svg>
  ),
  'Hugging Face AI': () => (
    <svg className="w-8 h-8 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#FFD21E"/>
      <circle cx="8.5" cy="9.5" r="1.5" fill="#000000"/>
      <circle cx="15.5" cy="9.5" r="1.5" fill="#000000"/>
      <path d="M8 15c1.5 2 6.5 2 8 0" stroke="#000000" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  'Midjourney & SDXL': () => (
    <svg className="w-8 h-8 text-[#000000] group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3.5 19.5L12 4.5l8.5 15-8.5-4.5-8.5 4.5zm8.5-7.5l-4 7 4-2 4 2-4-7z"/>
    </svg>
  ),
  'vLLM & Ollama': () => (
    <svg className="w-8 h-8 text-[#000000] group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 10a1 1 0 100-2 1 1 0 000 2zm6 0a1 1 0 100-2 1 1 0 000 2zm-7 5c1 1.5 4 1.5 5 0M7 3v4M17 3v4M5 7h14a2 2 0 012 2v9a3 3 0 01-3 3H6a3 3 0 01-3-3V9a2 2 0 012-2z" />
    </svg>
  ),
  'CrewAI & Agents': () => (
    <svg className="w-8 h-8 text-[#FF4F00] group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z"/>
    </svg>
  ),
  'ChromaDB & Qdrant': () => (
    <svg className="w-8 h-8 text-[#DC2626] group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L3.5 7v10L12 22l8.5-5V7L12 2zm0 3.5l5.5 3.25v6.5L12 18.5l-5.5-3.25v-6.5L12 5.5z"/>
    </svg>
  ),
  'LlamaIndex': () => (
    <svg className="w-8 h-8 text-[#059669] group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm2 4v2h8V6H8zm0 4v2h8v-2H8zm0 4v2h5v-2H8z"/>
    </svg>
  ),
  'Mistral AI': () => (
    <svg className="w-8 h-8 text-[#FF7000] group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 3h3v3H3V3zm6 0h3v3H9V3zm6 0h3v3h-3V3zm3 0h3v3h-3V3zM3 9h3v3H3V9zm6 0h3v3H9V9zm6 0h3v3h-3V9zm3 0h3v3h-3V9zM3 15h3v3H3v-3zm6 0h3v3H9v-3zm6 0h3v3h-3v-3zm3 0h3v3h-3v-3zM3 21h3v3H3v-3zm15 0h3v3h-3v-3z"/>
    </svg>
  )
};

export const TechCompetencyData = {
  'React JS': { tier: 'Production Gold', mastery: '98%', engineers: '35+ Certified', summary: 'High-performance React 18 & SSR web applications with Redux, Tailwind, and custom micro-frontends.' },
  'Next.js': { tier: 'Production Gold', mastery: '96%', engineers: '28+ Certified', summary: 'Server-side rendered enterprise portals, Edge runtime API routing, and ultra-fast SEO web architectures.' },
  'Node.js': { tier: 'Production Gold', mastery: '97%', engineers: '40+ Certified', summary: 'Scalable event-driven backend microservices, NestJS pipelines, and high-throughput REST/GraphQL APIs.' },
  'Python': { tier: 'Production Gold', mastery: '99%', engineers: '45+ Certified', summary: 'Enterprise AI/ML models, FastAPI async backends, PyTorch pipelines, and pandas data science orchestration.' },
  'OpenAI (GPT-4o & o3)': { tier: 'Enterprise AI Tier 1', mastery: '98%', engineers: '22+ AI Specialists', summary: 'Fine-tuned LLM agents, function calling, custom RAG architectures, and automated prompt engineering.' },
  'Anthropic Claude 3.5': { tier: 'Enterprise AI Tier 1', mastery: '95%', engineers: '18+ AI Specialists', summary: 'Complex reasoning workflows, multi-modal vision document analysis, and long-context enterprise RAG.' },
  'Google Gemini & Vertex': { tier: 'Enterprise AI Tier 1', mastery: '96%', engineers: '20+ AI Specialists', summary: 'Vertex AI enterprise pipelines, multi-modal video/audio LLM analytics, and Google Cloud AI integrations.' },
  'Meta Llama 3.2': { tier: 'Open Source AI Gold', mastery: '94%', engineers: '15+ AI Specialists', summary: 'Self-hosted privacy-first LLMs, quantized local deployments, and specialized domain fine-tuning.' },
  'DeepSeek R1 & AI': { tier: 'Enterprise AI Tier 1', mastery: '97%', engineers: '16+ AI Specialists', summary: 'DeepSeek R1 reasoning models, chain-of-thought distillation, and low-cost enterprise inference.' },
  'AWS': { tier: 'Cloud Native Elite', mastery: '99%', engineers: '50+ AWS Certified', summary: 'AWS Lambda serverless, ECS/EKS Kubernetes clusters, CloudFront CDN, and KMS encrypted data lakes.' },
  'PostgreSQL': { tier: 'Database Gold', mastery: '98%', engineers: '32+ DB Architects', summary: 'High-availability relational databases, pgvector similarity search, and automated multi-AZ replication.' },
  'MongoDB': { tier: 'NoSQL Enterprise', mastery: '95%', engineers: '25+ DB Engineers', summary: 'Flexible document stores, high-write volume IoT telemetry, and distributed sharded cluster management.' },
  'Flutter': { tier: 'Cross-Platform Gold', mastery: '96%', engineers: '30+ Mobile Developers', summary: 'Single-codebase high-fps iOS & Android native apps with Dart, Bloc state management, and offline sync.' },
  'React Native': { tier: 'Cross-Platform Gold', mastery: '95%', engineers: '26+ Mobile Developers', summary: 'Native iOS and Android bridges, Expo enterprise workflows, and performant mobile UX designs.' }
};

export function getTechLogo(name, onClick) {
  const imagePath = TechLogoImagePaths[name];
  const AiSvg = AiTechSvgLogos[name];

  return (
    <div 
      onClick={() => onClick && onClick(name)}
      className={`group relative flex items-center justify-center p-2 rounded-xl border border-transparent hover:border-[#E9D5FF] hover:bg-[#F3E8FF]/30 transition-all ${onClick ? 'cursor-pointer' : ''}`}
      title={`Click to view ${name} Enterprise Competency`}
    >
      {imagePath ? (
        <img 
          src={imagePath} 
          alt={name} 
          className="w-8 h-8 sm:w-9 sm:h-9 object-contain transition-transform group-hover:scale-110" 
          onError={(e) => {
            // Fallback badge if local file fails
            e.target.style.display = 'none';
          }}
        />
      ) : AiSvg ? (
        <AiSvg />
      ) : (
        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#F3E8FF] border border-[#E9D5FF] text-[#6D28D9] flex items-center justify-center font-bold text-xs group-hover:scale-110 transition-transform">
          {name.slice(0, 2).toUpperCase()}
        </div>
      )}
    </div>
  );
}

export function TechCompetencyModal({ techName, onClose }) {
  if (!techName) return null;
  const info = TechCompetencyData[techName] || {
    tier: 'Enterprise Standard',
    mastery: '95%',
    engineers: '20+ Certified Engineers',
    summary: `${techName} integrated under WHY IT Services software engineering standards, fully backed by QA verification and GRC governance.`
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0F172A]/70 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-[#E9D5FF] relative space-y-6">
        
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-800 flex items-center justify-center font-bold transition-colors"
        >
          ✕
        </button>

        <div className="flex items-center gap-4 border-b border-slate-100 pb-5">
          <div className="w-14 h-14 rounded-2xl bg-[#F3E8FF] border border-[#E9D5FF] flex items-center justify-center p-2 shadow-sm">
            {getTechLogo(techName)}
          </div>
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-wider bg-[#6D28D9] text-white px-2.5 py-0.5 rounded-full">
              {info.tier}
            </span>
            <h3 className="text-xl font-extrabold text-[#0F172A] mt-1">{techName}</h3>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="bg-[#F8F3FF] border border-[#E9D5FF] p-3.5 rounded-2xl">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Mastery Score</span>
            <span className="text-lg font-extrabold text-[#6D28D9]">{info.mastery}</span>
          </div>
          <div className="bg-[#F8F3FF] border border-[#E9D5FF] p-3.5 rounded-2xl">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Dedicated Team</span>
            <span className="text-lg font-extrabold text-[#0F172A]">{info.engineers}</span>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="text-xs font-bold text-[#0F172A] uppercase tracking-wider">Enterprise Capability</h4>
          <p className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
            {info.summary}
          </p>
        </div>

        <button
          onClick={onClose}
          className="w-full bg-[#6D28D9] hover:bg-[#5B21B6] text-white font-bold text-xs py-3.5 rounded-xl transition-all shadow-md"
        >
          Done Exploring Competency
        </button>

      </div>
    </div>
  );
}
