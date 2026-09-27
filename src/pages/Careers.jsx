import React, { useState } from 'react';
import { Briefcase, ArrowRight, Sparkles, CheckCircle2, Upload, FileText, UserCheck, X } from 'lucide-react';

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [applyModalJob, setApplyModalJob] = useState(null);
  const [authTab, setAuthTab] = useState('apply'); // 'apply' | 'login'
  const [candidateForm, setCandidateForm] = useState({
    name: '', email: '', phone: '', experience: '3-5 years', coverLetter: '', resumeFileName: '', resumeDataUrl: null
  });
  const [appliedSuccess, setAppliedSuccess] = useState(false);
  const [appRefId, setAppRefId] = useState('');

  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setApplyModalJob(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const openPositions = [
    {
      id: 'job-1',
      title: 'Senior Full Stack Engineer (React / Node.js)',
      dept: 'Digital Engineering',
      type: 'Full-Time',
      location: 'Bengaluru / Hybrid',
      overview: 'We are seeking a Senior Full Stack Engineer with 4+ years of experience building high-scale React and Node.js enterprise microservices.',
      responsibilities: [
        'Design and implement high-performance React user interfaces and Node.js REST/GraphQL APIs.',
        'Collaborate with cloud architects to maintain high test coverage and zero-downtime CI/CD deployments.',
        'Optimize database schemas across PostgreSQL and MongoDB.'
      ]
    },
    {
      id: 'job-2',
      title: 'Lead Data Pipeline Architect (ETL / Data Lakes)',
      dept: 'Data Engineering',
      type: 'Full-Time',
      location: 'Bengaluru / Remote',
      overview: 'Lead our data engineering pod in building real-time Apache Spark and Snowflake data lakes for Fortune enterprise clients.',
      responsibilities: [
        'Architect streaming ETL/ELT data pipelines using Python, dbt, and Kafka.',
        'Implement enterprise GRC data governance, RBAC security, and PII masking.',
        'Tune Snowflake and BigQuery query speeds for real-time executive dashboarding.'
      ]
    },
    {
      id: 'job-3',
      title: 'Generative AI & LLM Specialist',
      dept: 'Artificial Intelligence',
      type: 'Full-Time',
      location: 'Bengaluru / Hybrid',
      overview: 'Develop custom RAG architectures, fine-tune open-source LLMs (Llama 3, Mistral), and build autonomous multi-agent systems.',
      responsibilities: [
        'Implement hybrid vector search retrieval (Pinecone, Qdrant, pgvector).',
        'Fine-tune domain models on private enterprise data inside air-gapped cloud VPCs.',
        'Build guardrails for PII redaction and anti-hallucination verification loops.'
      ]
    },
    {
      id: 'job-4',
      title: 'Cloud Infrastructure & SRE Lead (AWS / K8s)',
      dept: 'Infrastructure Managed Services',
      type: 'Full-Time',
      location: 'Bengaluru / Office',
      overview: 'Manage 24/7 cloud operations, Kubernetes container clusters, and FinOps cost optimization programs.',
      responsibilities: [
        'Standardize multi-cloud environments using Terraform Infrastructure-as-Code.',
        'Ensure 99.99% system availability with Datadog / Prometheus telemetry.',
        'Execute quarterly FinOps cloud cost reduction audits.'
      ]
    }
  ];

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setCandidateForm({ 
          ...candidateForm, 
          resumeFileName: file.name,
          resumeDataUrl: event.target.result 
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleApplySubmit = (e) => {
    e.preventDefault();
    const generatedRef = `WHY-APP-${Math.floor(100000 + Math.random() * 900000)}`;
    setAppRefId(generatedRef);
    setAppliedSuccess(true);
    
    // Save application to localStorage for Admin Panel access
    const newApp = {
      id: Date.now(),
      refId: generatedRef,
      jobId: applyModalJob.id,
      jobTitle: applyModalJob.title,
      dept: applyModalJob.dept,
      candidateName: candidateForm.name,
      name: candidateForm.name,
      email: candidateForm.email,
      phone: candidateForm.phone || 'N/A',
      experience: candidateForm.experience,
      coverLetter: candidateForm.coverLetter || '',
      resumeFileName: candidateForm.resumeFileName || 'Resume_Document.pdf',
      resumeDataUrl: candidateForm.resumeDataUrl || null,
      status: 'Pending',
      appliedAt: new Date().toISOString()
    };

    try {
      const existingApps = JSON.parse(localStorage.getItem('why_candidate_applications') || '[]');
      localStorage.setItem('why_candidate_applications', JSON.stringify([newApp, ...existingApps]));

      const existingApplicants = JSON.parse(localStorage.getItem('why_careers_applicants') || '[]');
      localStorage.setItem('why_careers_applicants', JSON.stringify([newApp, ...existingApplicants]));
    } catch (err) {
      console.error('Failed to save application to storage:', err);
    }
  };

  return (
    <div className="bg-[#FAFAFC] text-[#0F172A] min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HERO */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#F3E8FF] border border-[#E9D5FF] text-[#6D28D9] px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-[#6D28D9]" /> Careers at WHY IT Services
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight">
            Build Next-Gen AI & <span className="italic font-normal text-[#6D28D9]">Enterprise Software</span>
          </h1>
          <p className="text-slate-600 text-sm leading-relaxed">
            Join a senior engineering team. View detailed JDs, submit your resume, and track your application status.
          </p>

          {/* Visual Career Office Banner */}
          <div className="max-w-3xl mx-auto rounded-3xl overflow-hidden shadow-lg border border-[#E9D5FF] my-6 group relative">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop"
              alt="Careers at WHY IT Services"
              className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-transparent to-transparent flex flex-col justify-end p-6 text-white text-left">
              <span className="text-[10px] font-mono text-purple-300 font-bold uppercase tracking-wider">Join Our Pods</span>
              <h3 className="text-base font-extrabold">High-Growth Technical Environment</h3>
            </div>
          </div>
        </div>

        {/* OPEN POSITIONS GRID */}
        <div className="space-y-4 max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-[#0F172A] mb-4">Current Open Positions</h2>
          {openPositions.map((pos) => (
            <div key={pos.id} className="bg-white border border-[#E9D5FF] rounded-2xl p-6 shadow-sm hover:border-[#6D28D9] transition-all space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="inline-block bg-[#F3E8FF] text-[#6D28D9] text-[10px] font-bold px-2.5 py-0.5 rounded mb-1">
                    {pos.dept}
                  </span>
                  <h3 className="font-extrabold text-base text-[#0F172A]">{pos.title}</h3>
                  <div className="text-xs text-slate-500 mt-1">{pos.type} • {pos.location}</div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setSelectedJob(selectedJob?.id === pos.id ? null : pos)}
                    className="bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold px-4 py-2 rounded-xl transition-all"
                  >
                    {selectedJob?.id === pos.id ? 'Hide Details' : 'View Job Description'}
                  </button>
                  <button
                    onClick={() => { setApplyModalJob(pos); setAppliedSuccess(false); }}
                    className="bg-[#6D28D9] hover:bg-[#5B21B6] text-white text-xs font-bold px-5 py-2 rounded-xl transition-all"
                  >
                    Apply Now
                  </button>
                </div>
              </div>

              {/* DETAILED JOB DESCRIPTION DROPDOWN */}
              {selectedJob?.id === pos.id && (
                <div className="pt-4 border-t border-slate-200/80 space-y-3 animate-in fade-in duration-150">
                  <p className="text-xs text-slate-600 leading-relaxed">{pos.overview}</p>
                  <div>
                    <h4 className="text-xs font-bold text-[#0F172A] mb-1">Key Responsibilities:</h4>
                    <ul className="list-disc list-inside space-y-1 text-xs text-slate-600">
                      {pos.responsibilities.map((r, i) => <li key={i}>{r}</li>)}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* APPLICATION MODAL */}
        {applyModalJob && (
          <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white border border-[#E9D5FF] rounded-3xl p-6 sm:p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto relative shadow-2xl space-y-4">
              <button onClick={() => setApplyModalJob(null)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-700">
                <X className="w-5 h-5" />
              </button>

              <div className="flex gap-4 border-b border-slate-200 pb-2">
                <button
                  onClick={() => setAuthTab('apply')}
                  className={`text-xs font-bold pb-1 uppercase tracking-wider ${authTab === 'apply' ? 'text-[#6D28D9] border-b-2 border-[#6D28D9]' : 'text-slate-500'}`}
                >
                  Candidate Application
                </button>
                <button
                  onClick={() => setAuthTab('login')}
                  className={`text-xs font-bold pb-1 uppercase tracking-wider ${authTab === 'login' ? 'text-[#6D28D9] border-b-2 border-[#6D28D9]' : 'text-slate-500'}`}
                >
                  Applicant Login
                </button>
              </div>

              {authTab === 'apply' ? (
                appliedSuccess ? (
                  <div className="text-center py-6 space-y-3">
                    <CheckCircle2 className="w-12 h-12 text-[#6D28D9] mx-auto" />
                    <span className="text-[11px] font-mono font-bold text-[#6D28D9] bg-[#F3E8FF] px-3 py-1 rounded-full border border-[#E9D5FF] uppercase inline-block">
                      App Ref: {appRefId}
                    </span>
                    <h3 className="font-extrabold text-lg text-[#0F172A]">Application Submitted!</h3>
                    <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                      Our recruitment team has received your application (<strong className="font-mono text-[#6D28D9]">{appRefId}</strong>) and uploaded resume file. We will review your profile and contact you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleApplySubmit} className="space-y-3">
                    <div className="text-xs font-extrabold text-[#6D28D9]">Applying for: {applyModalJob.title}</div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                        <input required type="text" value={candidateForm.name} onChange={e => setCandidateForm({...candidateForm, name: e.target.value})} className="w-full bg-[#FAFAFC] border border-[#E9D5FF] rounded-xl px-3.5 py-2 text-xs outline-none focus:ring-2 focus:ring-[#6D28D9]" placeholder="Jane Candidate" />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
                        <input required type="email" value={candidateForm.email} onChange={e => setCandidateForm({...candidateForm, email: e.target.value})} className="w-full bg-[#FAFAFC] border border-[#E9D5FF] rounded-xl px-3.5 py-2 text-xs outline-none focus:ring-2 focus:ring-[#6D28D9]" placeholder="jane@email.com" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number *</label>
                        <input required type="tel" value={candidateForm.phone} onChange={e => setCandidateForm({...candidateForm, phone: e.target.value})} className="w-full bg-[#FAFAFC] border border-[#E9D5FF] rounded-xl px-3.5 py-2 text-xs outline-none focus:ring-2 focus:ring-[#6D28D9]" placeholder="+91 98765 43210" />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Years of Experience *</label>
                        <select value={candidateForm.experience} onChange={e => setCandidateForm({...candidateForm, experience: e.target.value})} className="w-full bg-[#FAFAFC] border border-[#E9D5FF] rounded-xl px-3.5 py-2 text-xs outline-none focus:ring-2 focus:ring-[#6D28D9]">
                          <option>1-3 years</option>
                          <option>3-5 years</option>
                          <option>5+ years</option>
                          <option>8+ Lead / Architect</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Cover Letter / Note</label>
                      <textarea rows={2} value={candidateForm.coverLetter} onChange={e => setCandidateForm({...candidateForm, coverLetter: e.target.value})} className="w-full bg-[#FAFAFC] border border-[#E9D5FF] rounded-xl px-3.5 py-2 text-xs outline-none focus:ring-2 focus:ring-[#6D28D9]" placeholder="Briefly describe your relevant tech experience..." />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Upload Resume (PDF / DOCX) *</label>
                      <div className="border-2 border-dashed border-[#E9D5FF] bg-[#FAFAFC] rounded-xl p-3.5 text-center cursor-pointer relative hover:border-[#6D28D9] transition-colors">
                        <input required type="file" accept=".pdf,.doc,.docx" onChange={handleFileUpload} className="absolute inset-0 opacity-0 cursor-pointer" />
                        <Upload className="w-5 h-5 text-[#6D28D9] mx-auto mb-1" />
                        <span className="text-xs text-slate-600 font-semibold block">
                          {candidateForm.resumeFileName ? `File selected: ${candidateForm.resumeFileName}` : 'Click to upload your resume file'}
                        </span>
                      </div>
                    </div>

                    <button type="submit" className="w-full bg-[#6D28D9] text-white font-extrabold py-3 rounded-xl text-xs uppercase tracking-wider shadow-md hover:bg-[#5B21B6] transition-all">
                      Submit Resume & Application
                    </button>
                  </form>
                )
              ) : (
                <div className="space-y-3 py-2">
                  <h3 className="text-xs font-bold text-[#0F172A]">Candidate Portal Login</h3>
                  <input type="email" placeholder="Registered Email" className="w-full bg-[#FAFAFC] border border-[#E9D5FF] rounded-xl px-3.5 py-2 text-xs outline-none focus:ring-2 focus:ring-[#6D28D9]" />
                  <input type="password" placeholder="Password" className="w-full bg-[#FAFAFC] border border-[#E9D5FF] rounded-xl px-3.5 py-2 text-xs outline-none focus:ring-2 focus:ring-[#6D28D9]" />
                  <button onClick={() => alert('Candidate portal login feature is active. Enter your registered email to view application status.')} className="w-full bg-[#6D28D9] text-white font-bold py-2.5 rounded-xl text-xs uppercase shadow-sm hover:bg-[#5B21B6]">
                    Login to Track Status
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
