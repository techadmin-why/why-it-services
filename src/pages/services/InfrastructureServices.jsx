import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Server, ArrowRight, ShieldCheck, Cpu, HardDrive, Lock, Activity
} from 'lucide-react';
import PartnerTicker from '../../components/PartnerTicker';

export default function InfrastructureServices() {
  const capabilities = [
    {
      title: '24/7 Managed Cloud Operations (SRE)',
      desc: 'Round-the-clock infrastructure monitoring, Incident Management, Site Reliability Engineering (SRE), and proactive 99.99% availability SLAs.'
    },
    {
      title: 'Multi-Cloud Architecture (AWS, GCP, Azure)',
      desc: 'Architect resilient multi-cloud environments, automated failover pipelines, and infrastructure-as-code (Terraform, CloudFormation).'
    },
    {
      title: 'DevOps & CI/CD Automated Pipelines',
      desc: 'Streamline deployments with automated GitOps pipelines (GitHub Actions, GitLab CI, ArgoCD) for rapid zero-downtime application updates.'
    },
    {
      title: 'Cloud Security, Compliance & GRC',
      desc: 'Comprehensive cloud security posture management (CSPM), threat monitoring, vulnerability scanning, and ISO 27001/SOC2 compliance.'
    },
    {
      title: 'Kubernetes Container Orchestration',
      desc: 'Deploy, scale, and manage containerized microservices on Amazon EKS, Google GKE, and Azure AKS with automated auto-scaling.'
    },
    {
      title: 'FinOps Cloud Cost Optimization',
      desc: 'Identify unused cloud resources, right-size instances, optimize reserved capacity, and reduce cloud infrastructure spending by up to 35%.'
    }
  ];

  const valueProcess = [
    {
      step: '01',
      phase: 'Infrastructure Audit',
      desc: 'We perform a deep vulnerability, security, and cost audit across your multi-cloud environment.'
    },
    {
      step: '02',
      phase: 'Terraform & IaC Architecture',
      desc: 'Standardizing all infrastructure into version-controlled Infrastructure-as-Code (IaC) templates.'
    },
    {
      step: '03',
      phase: 'CI/CD & Kubernetes Migration',
      desc: 'Containerizing workloads and deploying automated zero-downtime deployment pipelines.'
    },
    {
      step: '04',
      phase: 'Security & Compliance Hardening',
      desc: 'Applying strict network firewalls, IAM role restrictions, and automated threat monitoring.'
    },
    {
      step: '05',
      phase: '24/7 SRE Monitoring Setup',
      desc: 'Configuring Datadog, Prometheus, Grafana dashboards, and automated page-alerting protocols.'
    },
    {
      step: '06',
      phase: 'Continuous FinOps Optimization',
      desc: 'Quarterly cloud bill optimization, instance right-sizing, and performance tuning.'
    }
  ];

  const faqs = [
    {
      q: 'What is your uptime SLA for Managed Infrastructure Services?',
      a: 'We provide up to 99.99% uptime SLAs backed by 24/7 SRE engineers operating around the clock.'
    },
    {
      q: 'Which cloud providers do you manage?',
      a: 'We manage AWS, Microsoft Azure, Google Cloud Platform (GCP), DigitalOcean, and hybrid on-premise infrastructure.'
    },
    {
      q: 'How does FinOps Cloud Cost Optimization work?',
      a: 'Our FinOps specialists inspect cloud metrics, eliminate idle compute, transition workloads to spot/reserved instances, and optimize database provisioning to cut costs without degrading speed.'
    }
  ];

  return (
    <div className="bg-[#FAFAFC] text-[#0F172A] min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 bg-[#F3E8FF] border border-[#E9D5FF] text-[#6D28D9] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
              <Server className="w-4 h-4 text-[#6D28D9]" />
              Infrastructure Managed Services
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F172A] tracking-tight leading-[1.1]">
              24/7 Cloud Operations & <span className="italic font-normal text-[#6D28D9]">Managed Infrastructure</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Ensure maximum system reliability with round-the-clock cloud operations, Kubernetes management, DevOps pipelines, and cloud cost optimization.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-[#6D28D9] to-[#5B21B6] hover:from-[#5B21B6] hover:to-[#4C1D95] text-white font-extrabold px-8 py-4 rounded-xl text-xs uppercase tracking-wider shadow-lg flex items-center gap-2"
              >
                <span>Talk to Infrastructure SREs</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group">
              <img
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000&auto=format&fit=crop"
                alt="Cloud Infrastructure Operations"
                className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/70 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="text-[10px] font-mono text-purple-300 font-bold uppercase tracking-wider">Multi-Cloud Operations</span>
                <h3 className="text-lg font-bold text-white">AWS, Azure & Kubernetes (EKS/GKE)</h3>
                <p className="text-xs text-slate-300">24/7 SRE monitoring, zero-downtime CI/CD & FinOps cost optimization.</p>
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
            “WHY IT Services transformed our cloud security posture and took over our 24/7 infrastructure ops. We went 18 months without a single critical incident while saving 30% on AWS costs.”
          </p>
          <div className="pt-2">
            <div className="font-bold text-xs text-white">David K. / VP of Engineering</div>
            <div className="text-[10px] text-purple-400 uppercase font-semibold">Verified Enterprise Customer</div>
          </div>
        </div>
      </section>

      {/* 4. CAPABILITIES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#6D28D9] uppercase tracking-wider">Infrastructure Offerings</span>
          <h2 className="text-3xl font-extrabold text-[#0F172A] mt-1">
            24/7 Managed Infrastructure & DevOps Capabilities
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Reliable cloud management, SRE monitoring, containerization, and cost control.
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
            <h2 className="text-3xl font-extrabold text-[#0F172A]">Infrastructure Operations for Every Scale</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#FAFAFC] border border-[#E9D5FF] rounded-3xl p-8 space-y-3">
              <div className="text-xs font-bold text-[#6D28D9] uppercase tracking-wider">For Startups</div>
              <h3 className="font-extrabold text-lg text-[#0F172A]">Automated DevOps Setup</h3>
              <p className="text-xs text-slate-600 leading-relaxed">Setup zero-downtime CI/CD deployment pipelines on AWS/GCP without hiring full-time DevOps engineers.</p>
            </div>
            <div className="bg-[#FAFAFC] border border-[#E9D5FF] rounded-3xl p-8 space-y-3">
              <div className="text-xs font-bold text-[#6D28D9] uppercase tracking-wider">For Growth SMBs</div>
              <h3 className="font-extrabold text-lg text-[#0F172A]">Kubernetes Migration</h3>
              <p className="text-xs text-slate-600 leading-relaxed">Scale application capacity seamlessly with managed Kubernetes clusters and automated monitoring.</p>
            </div>
            <div className="bg-[#FAFAFC] border border-[#E9D5FF] rounded-3xl p-8 space-y-3">
              <div className="text-xs font-bold text-[#6D28D9] uppercase tracking-wider">For Enterprises</div>
              <h3 className="font-extrabold text-lg text-[#0F172A]">24/7 Managed Ops & FinOps</h3>
              <p className="text-xs text-slate-600 leading-relaxed">Round-the-clock SRE incident response, cloud cost reduction audits, and ISO 27001 compliance management.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. 6-STEP METHODOLOGY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#6D28D9] uppercase tracking-wider">Operational Process</span>
          <h2 className="text-3xl font-extrabold text-[#0F172A] mt-1">Our Infrastructure Management Framework</h2>
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
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Ensure Zero-Downtime Infrastructure Performance</h2>
          <p className="text-purple-100 text-sm max-w-xl mx-auto">Talk to our Site Reliability Engineers and optimize your cloud operations today.</p>
          <div>
            <Link
              to="/contact"
              className="bg-white text-[#6D28D9] font-extrabold text-xs px-8 py-4 rounded-xl uppercase tracking-wider inline-block shadow-lg hover:bg-purple-50 transition-colors"
            >
              Request Infra Audit -&gt;
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
