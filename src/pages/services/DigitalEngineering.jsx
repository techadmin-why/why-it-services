import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Code2, ArrowRight, CheckCircle2, Layers, Cpu, Award, Zap
} from 'lucide-react';
import PartnerTicker from '../../components/PartnerTicker';

export default function DigitalEngineering() {
  const capabilities = [
    {
      title: 'Enterprise Software & Web App Development',
      desc: 'Build high-performance web applications and enterprise software using modern frameworks (React, Next.js, Node.js, Python, Java) with clean architecture and maximum velocity.'
    },
    {
      title: 'Mobile App Development (iOS & Android)',
      desc: 'Native and cross-platform mobile apps built with React Native and Flutter, delivering ultra-smooth 60fps user experiences and scalable backend API integrations.'
    },
    {
      title: 'Verification & Validation (QA Automation)',
      desc: 'Full-spectrum test automation using Playwright, Selenium, and Cypress. End-to-end load testing, security audits, and continuous regression suites.'
    },
    {
      title: 'Application Sustenance & Maintenance',
      desc: 'Proactive application lifecycle management, bug patching, SLA-backed performance optimization, and 24/7 feature rollout support.'
    },
    {
      title: 'Legacy Application Modernization',
      desc: 'Refactor monoliths into microservices, containerize workloads using Docker and Kubernetes, and migrate legacy codebases to cloud-native platforms.'
    },
    {
      title: 'Dedicated Software Engineering Squads',
      desc: 'Access top 1% tech talent. Hire dedicated frontend, backend, full-stack, and QA engineers seamlessly integrated with your agile sprints.'
    }
  ];

  const valueProcess = [
    {
      step: '01',
      phase: 'Requirements & Architecture',
      desc: 'We map technical user stories, API contracts, domain boundaries, and cloud architecture before writing the first line of code.'
    },
    {
      step: '02',
      phase: 'UI/UX & Interactive Design',
      desc: 'Crafting responsive design systems, micro-animations, and intuitive user workflows aligned with modern design aesthetics.'
    },
    {
      step: '03',
      phase: 'Agile Development Sprints',
      desc: 'Iterative 2-week sprints with CI/CD automation, automated testing, continuous code reviews, and transparent sprint demos.'
    },
    {
      step: '04',
      phase: 'QA Automation & Security Audit',
      desc: 'Rigorous automated testing, static code analysis, vulnerability scanning, and performance benchmarking for zero-defect releases.'
    },
    {
      step: '05',
      phase: 'Cloud Deployment & Launch',
      desc: 'Zero-downtime deployment pipelines using AWS, Azure, or GCP with automated rollback capabilities and real-time telemetry.'
    },
    {
      step: '06',
      phase: 'Continuous Sustenance',
      desc: 'Ongoing feature enhancements, performance monitoring, dependency updates, and SLA-backed production maintenance.'
    }
  ];

  const faqs = [
    {
      q: 'What tech stack do your Digital Engineering teams specialize in?',
      a: 'We excel in React, Next.js, Vue, Node.js, Python (FastAPI/Django), Java Spring Boot, Go, React Native, Flutter, AWS, GCP, and Azure.'
    },
    {
      q: 'How quickly can a dedicated engineering squad be deployed?',
      a: 'We can onboard pre-vetted senior engineers, solution architects, and QA leads within 3 to 5 business days.'
    },
    {
      q: 'Do you offer custom software modernizations for legacy applications?',
      a: 'Yes, we specialize in microservices extraction, database re-platforming, and zero-downtime cloud migration for complex enterprise monoliths.'
    }
  ];

  return (
    <div className="bg-[#FAFAFC] text-[#0F172A] min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 bg-[#F3E8FF] border border-[#E9D5FF] text-[#6D28D9] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
              <Code2 className="w-4 h-4 text-[#6D28D9]" />
              Digital Engineering Services
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F172A] tracking-tight leading-[1.1]">
              Custom Digital Engineering & <span className="italic font-normal text-[#6D28D9]">Software Solutions</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Accelerate product development with top-tier software engineering teams. We build custom web apps, mobile solutions, cloud-native architectures, and robust QA automation systems.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-[#6D28D9] to-[#5B21B6] hover:from-[#5B21B6] hover:to-[#4C1D95] text-white font-extrabold px-8 py-4 rounded-xl text-xs uppercase tracking-wider shadow-lg flex items-center gap-2"
              >
                <span>Talk to Engineering Experts</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group">
              <img
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop"
                alt="Digital Engineering Squad"
                className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="text-[10px] font-mono text-purple-300 font-bold uppercase tracking-wider">Full-Stack Development</span>
                <h3 className="text-lg font-bold">Scalable Web & Mobile Apps</h3>
                <p className="text-xs text-slate-300">Modern frameworks, microservices & 60fps mobile interfaces.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PARTNER TICKER */}
      <PartnerTicker />

      {/* 3. TESTIMONIAL BANNER */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-[#0F172A] text-white rounded-3xl p-8 text-center space-y-4 shadow-xl border border-slate-800">
          <p className="text-sm sm:text-base text-slate-300 italic leading-relaxed">
            “WHY IT Services delivered our enterprise application ahead of schedule with 99.9% uptime. Their MERN stack developers and QA leads integrated seamlessly into our engineering workflow.”
          </p>
          <div className="pt-2">
            <div className="font-bold text-xs text-white">Ariane Gorin / CEO</div>
            <div className="text-[10px] text-purple-400 uppercase font-semibold">Verified Tech Enterprise</div>
          </div>
        </div>
      </section>

      {/* 4. CAPABILITIES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#6D28D9] uppercase tracking-wider">Engineering Capabilities</span>
          <h2 className="text-3xl font-extrabold text-[#0F172A] mt-1">
            End-to-End Digital Engineering Services
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Scalable software development, legacy modernization, and rigorous quality assurance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((item, idx) => (
            <div key={idx} className="bg-gradient-to-b from-[#F3E8FF] via-[#F8F3FF] to-white border border-[#E9D5FF] rounded-3xl p-6 shadow-sm hover:border-[#6D28D9] transition-all space-y-3">
              <div className="w-8 h-8 rounded-xl bg-[#6D28D9] text-white flex items-center justify-center font-bold text-xs">
                0{idx + 1}
              </div>
              <h3 className="font-bold text-base text-[#0F172A]">{item.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. SEGMENT CALLOUTS */}
      <section className="bg-white border-y border-slate-200/80 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold text-[#0F172A]">Engineering Solutions for Every Stage</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#FAFAFC] border border-[#E9D5FF] rounded-3xl p-8 space-y-3">
              <div className="text-xs font-bold text-[#6D28D9] uppercase tracking-wider">For Startups</div>
              <h3 className="font-extrabold text-lg text-[#0F172A]">Fast MVP Build & Launch</h3>
              <p className="text-xs text-slate-600 leading-relaxed">Turn concepts into production-ready web and mobile products in weeks with scalable code architecture.</p>
            </div>
            <div className="bg-[#FAFAFC] border border-[#E9D5FF] rounded-3xl p-8 space-y-3">
              <div className="text-xs font-bold text-[#6D28D9] uppercase tracking-wider">For Growth SMBs</div>
              <h3 className="font-extrabold text-lg text-[#0F172A]">Feature Acceleration</h3>
              <p className="text-xs text-slate-600 leading-relaxed">Scale engineering velocity with dedicated frontend and backend developers driving sprint delivery.</p>
            </div>
            <div className="bg-[#FAFAFC] border border-[#E9D5FF] rounded-3xl p-8 space-y-3">
              <div className="text-xs font-bold text-[#6D28D9] uppercase tracking-wider">For Enterprises</div>
              <h3 className="font-extrabold text-lg text-[#0F172A]">Core System Modernization</h3>
              <p className="text-xs text-slate-600 leading-relaxed">De-risk complex legacy systems through microservices, automated regression, and cloud containerization.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. 6-STEP METHODOLOGY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#6D28D9] uppercase tracking-wider">Engineering Delivery</span>
          <h2 className="text-3xl font-extrabold text-[#0F172A] mt-1">Our SDLC Software Delivery Framework</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {valueProcess.map((step, idx) => (
            <div key={idx} className="bg-white border border-[#E9D5FF] rounded-3xl p-6 shadow-sm space-y-3 relative">
              <span className="text-xs font-mono font-bold text-[#6D28D9] bg-[#F3E8FF] px-2.5 py-1 rounded-full">{step.step}</span>
              <h3 className="font-bold text-base text-[#0F172A] mt-2">{step.phase}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. FAQS */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-extrabold text-[#0F172A] text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white border border-[#E9D5FF] rounded-2xl p-6 shadow-sm space-y-2">
              <h3 className="font-bold text-sm text-[#0F172A]">{faq.q}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. CTA SECTION */}
      <section className="bg-gradient-to-r from-[#5B21B6] via-[#6D28D9] to-[#4C1D95] text-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold">Ready to Build Scalable Digital Products?</h2>
          <p className="text-purple-100 text-sm max-w-xl mx-auto">Get in touch with our engineering architects and receive a detailed technical proposal within 24 hours.</p>
          <div>
            <Link
              to="/contact"
              className="bg-white text-[#6D28D9] font-extrabold text-xs px-8 py-4 rounded-xl uppercase tracking-wider inline-block shadow-lg hover:bg-purple-50 transition-colors"
            >
              Request Custom Quote -&gt;
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
