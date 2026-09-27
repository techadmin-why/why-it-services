import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Database, ArrowRight, CheckCircle2, BarChart3, ShieldCheck, Zap
} from 'lucide-react';
import PartnerTicker from '../../components/PartnerTicker';

export default function DataEngineering() {
  const capabilities = [
    {
      title: 'Data Lake Ingestion Layer',
      desc: 'Architect robust multi-source data ingestion pipelines connecting relational databases, SaaS tools, and IoT streams into unified Delta Lakes and cloud data warehouses.'
    },
    {
      title: 'Real-Time ETL & ELT Pipelines',
      desc: 'High-throughput streaming ETL pipelines built with Apache Spark, Kafka, Snowflake, and dbt for instant operational visibility and analytics.'
    },
    {
      title: 'Business Intelligence & BI Dashboarding',
      desc: 'Custom executive dashboards in PowerBI, Tableau, and Metabase providing real-time KPI tracking, financial forecasting, and interactive data visualization.'
    },
    {
      title: 'Enterprise Data Governance & Quality',
      desc: 'Implement strict data lineage tracking, automated data quality checks, data masking, and role-based access control (RBAC) across data assets.'
    },
    {
      title: 'Data Warehouse Modernization',
      desc: 'Migrate on-premise legacy databases (Oracle, SQL Server) to cloud data warehouses (Snowflake, Databricks, BigQuery) with zero data loss.'
    },
    {
      title: 'Predictive Analytics & Data Science',
      desc: 'Deploy custom machine learning models for customer churn prediction, demand forecasting, algorithmic pricing, and anomaly detection.'
    }
  ];

  const valueProcess = [
    {
      step: '01',
      phase: 'Data Architecture Assessment',
      desc: 'We audit your data sources, schemas, storage bottlenecks, and analytics needs to formulate an enterprise data strategy.'
    },
    {
      step: '02',
      phase: 'Pipeline & Schema Design',
      desc: 'Designing scalable star/snowflake schemas, ingestion protocols, and automated transformation rules using dbt and Spark.'
    },
    {
      step: '03',
      phase: 'Data Lake & Warehouse Setup',
      desc: 'Provisioning secure cloud data warehouses (Snowflake, BigQuery, Redshift) with automated backup and encryption at rest.'
    },
    {
      step: '04',
      phase: 'ETL Pipeline Execution',
      desc: 'Building streaming and batch data pipelines with automated retry logic, dead-letter queues, and real-time alerting.'
    },
    {
      step: '05',
      phase: 'BI & Analytics Integration',
      desc: 'Connecting self-service BI platforms, building interactive dashboards, and training enterprise stakeholders.'
    },
    {
      step: '06',
      phase: 'Data Governance & Tuning',
      desc: 'Continuous query optimization, cost monitoring for cloud warehouses, and automated compliance auditing.'
    }
  ];

  const faqs = [
    {
      q: 'Which cloud data platforms do you support?',
      a: 'We specialize in Snowflake, Databricks, AWS Redshift, Google BigQuery, Apache Spark, Kafka, Airflow, and dbt.'
    },
    {
      q: 'How do you ensure data security and compliance?',
      a: 'We enforce end-to-end encryption (TLS 1.3/AES-256), strict RBAC permissions, PII data masking, and SOC2/HIPAA compliance frameworks.'
    },
    {
      q: 'Can you migrate legacy databases to cloud data warehouses without downtime?',
      a: 'Yes, we use Change Data Capture (CDC) technologies like Debezium and Fivetran for continuous, zero-downtime database migration.'
    }
  ];

  return (
    <div className="bg-[#FAFAFC] text-[#0F172A] min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 bg-[#F3E8FF] border border-[#E9D5FF] text-[#6D28D9] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
              <Database className="w-4 h-4 text-[#6D28D9]" />
              Data Engineering & Analytics
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F172A] tracking-tight leading-[1.1]">
              Enterprise Data Engineering & <span className="italic font-normal text-[#6D28D9]">Analytics Platforms</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Turn raw enterprise data into actionable intelligence. We design real-time ETL pipelines, cloud data lakes, and BI dashboards that power smart business decisions.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-[#6D28D9] to-[#5B21B6] hover:from-[#5B21B6] hover:to-[#4C1D95] text-white font-extrabold px-8 py-4 rounded-xl text-xs uppercase tracking-wider shadow-lg flex items-center gap-2"
              >
                <span>Talk to Data Architects</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop"
                alt="Data Engineering & Analytics"
                className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="text-[10px] font-mono text-purple-300 font-bold uppercase tracking-wider">Cloud Data Lakehouse</span>
                <h3 className="text-lg font-bold">Snowflake & Spark Pipelines</h3>
                <p className="text-xs text-slate-300">Real-time ETL, sub-second queries & executive BI dashboards.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PARTNER TICKER */}
      <PartnerTicker />

      {/* 3. TESTIMONIAL BANNER */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="bg-[#0F172A] text-white rounded-3xl p-6 sm:p-8 text-center space-y-3 shadow-xl border border-slate-800">
          <p className="text-xs sm:text-base text-slate-300 italic leading-relaxed">
            “WHY IT Services transformed our scattered analytics into a unified Snowflake data lake. Our query speeds improved by 4x and reporting time dropped from days to seconds.”
          </p>
          <div className="pt-1">
            <div className="font-bold text-xs text-white">Matthew Cifelli / Director of Analytics</div>
            <div className="text-[10px] text-purple-400 uppercase font-semibold">Verified Fintech Enterprise</div>
          </div>
        </div>
      </section>

      {/* 4. CAPABILITIES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#6D28D9] uppercase tracking-wider">Data Offerings</span>
          <h2 className="text-3xl font-extrabold text-[#0F172A] mt-1">
            Data Engineering & Analytics Capabilities
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Modernize your data stack with cloud data pipelines, governance, and business intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
            <h2 className="text-3xl font-extrabold text-[#0F172A]">Data Solutions for Every Scale</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#FAFAFC] border border-[#E9D5FF] rounded-3xl p-8 space-y-3">
              <div className="text-xs font-bold text-[#6D28D9] uppercase tracking-wider">For Startups</div>
              <h3 className="font-extrabold text-lg text-[#0F172A]">Modern Data Stack Setup</h3>
              <p className="text-xs text-slate-600 leading-relaxed">Quickly launch lean data pipelines using dbt, Fivetran, and Metabase for immediate growth metrics.</p>
            </div>
            <div className="bg-[#FAFAFC] border border-[#E9D5FF] rounded-3xl p-8 space-y-3">
              <div className="text-xs font-bold text-[#6D28D9] uppercase tracking-wider">For Growth SMBs</div>
              <h3 className="font-extrabold text-lg text-[#0F172A]">Real-Time BI Dashboards</h3>
              <p className="text-xs text-slate-600 leading-relaxed">Consolidate customer and operational data into executive dashboards with automated data validation.</p>
            </div>
            <div className="bg-[#FAFAFC] border border-[#E9D5FF] rounded-3xl p-8 space-y-3">
              <div className="text-xs font-bold text-[#6D28D9] uppercase tracking-wider">For Enterprises</div>
              <h3 className="font-extrabold text-lg text-[#0F172A]">Enterprise Data Lakehouse</h3>
              <p className="text-xs text-slate-600 leading-relaxed">Scale high-throughput Databricks or Snowflake lakehouses with enterprise GRC governance and PII protection.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. 6-STEP METHODOLOGY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#6D28D9] uppercase tracking-wider">Data Lifecycle</span>
          <h2 className="text-3xl font-extrabold text-[#0F172A] mt-1">Our Data Engineering Implementation Roadmap</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
          <h2 className="text-3xl sm:text-4xl font-extrabold">Ready to Supercharge Your Data Infrastructure?</h2>
          <p className="text-purple-100 text-sm max-w-xl mx-auto">Connect with our lead data architects today for a free data architecture audit.</p>
          <div>
            <Link
              to="/contact"
              className="bg-white text-[#6D28D9] font-extrabold text-xs px-8 py-4 rounded-xl uppercase tracking-wider inline-block shadow-lg hover:bg-purple-50 transition-colors"
            >
              Request Data Audit -&gt;
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
