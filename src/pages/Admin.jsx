import React, { useState, useEffect, useRef } from 'react';
import { 
  BookOpen, X, Newspaper, Plus, Search, Filter, Trash2, Edit3, Star, Play, 
  Check, Eye, FileText, Download, Sparkles, Bold, Italic, Underline, Strikethrough,
  List, ListOrdered, Quote, Code, Link as LinkIcon, Image as ImageIcon, Video,
  Type, AlignLeft, RemoveFormatting, ExternalLink, Calendar, User, MapPin,
  LayoutDashboard, Code2, Briefcase, Layers, ShieldCheck, Activity, Settings, Bell,
  LogOut, Mail, Lock, CheckCircle2, AlertCircle, RefreshCw
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { apiRequest } from '../api/client';

export default function Admin() {
  const { user, token, isAuthenticated, login: authLogin, logout } = useAuth();

  // Login Form state
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState(null);
  const [isSubmittingLogin, setIsSubmittingLogin] = useState(false);

  // Tab & Content states
  const [activeTab, setActiveTab] = useState('dashboard');
  const [newsArticles, setNewsArticles] = useState([]);
  const [inquiries, setInquiries] = useState([]);
  const [jobOpenings, setJobOpenings] = useState([]);
  const [jobApplications, setJobApplications] = useState([]);
  const [auditLogs, setAuditLogs] = useState([]);
  const [dashboardStats, setDashboardStats] = useState({
    totalInquiries: 0,
    newInquiries: 0,
    totalServices: 4,
    totalArticles: 0,
    activeJobs: 0
  });

  const [categories, setCategories] = useState([
    'Press Release', 'AI Innovation', 'Data Engineering', 
    'Expansion & Operations', 'Digital Strategy', 'Corporate Update'
  ]);

  const [newsSearchQuery, setNewsSearchQuery] = useState('');
  const [newsCategoryFilter, setNewsCategoryFilter] = useState('All');
  const [newsStatusFilter, setNewsStatusFilter] = useState('All');
  const [showModal, setShowModal] = useState(false);
  const [viewMode, setViewMode] = useState('edit');
  const [editingArticleId, setEditingArticleId] = useState(null);

  // CMS Additional Tab States
  const [servicesList, setServicesList] = useState([]);
  const [showServiceModal, setShowServiceModal] = useState(false);
  const [editingServiceId, setEditingServiceId] = useState(null);
  const [serviceForm, setServiceForm] = useState({ title: '', category: 'Artificial Intelligence', summary: '', description: '', tagline: '', icon: 'Code', is_published: true });

  const [domainsList, setDomainsList] = useState([]);
  const [showDomainModal, setShowDomainModal] = useState(false);
  const [editingDomainId, setEditingDomainId] = useState(null);
  const [domainForm, setDomainForm] = useState({ title: '', subtitle: '', description: '', icon: 'Building', is_published: true });

  const [testimonialsList, setTestimonialsList] = useState([]);
  const [showTestimonialModal, setShowTestimonialModal] = useState(false);
  const [editingTestimonialId, setEditingTestimonialId] = useState(null);
  const [testimonialForm, setTestimonialForm] = useState({ author_name: '', designation: '', company: '', content: '', rating: 5, is_published: true });

  const initialForm = {
    title: '',
    summary: '',
    category: 'Press Release',
    status: 'Published',
    image_url: '',
    content: '',
    author: 'WHY IT Services Media Relations'
  };

  const [form, setForm] = useState(initialForm);

  // Load backend data from API when authenticated
  useEffect(() => {
    if (isAuthenticated) {
      fetchAdminData();
    }
  }, [isAuthenticated, activeTab]);

  const fetchAdminData = async () => {
    try {
      // Fetch Stats
      const statsRes = await apiRequest('/api/v1/admin/stats', { credentials: 'include' });
      if (statsRes.success) setDashboardStats(statsRes.stats);

      // Fetch News from Backend Database API
      const newsRes = await apiRequest('/api/v1/admin/news', { credentials: 'include' });
      if (newsRes.success && Array.isArray(newsRes.data)) {
        setNewsArticles(newsRes.data);
      }

      // Fetch Inquiries
      if (activeTab === 'inquiries' || activeTab === 'dashboard') {
        const inqRes = await apiRequest('/api/v1/admin/inquiries', { credentials: 'include' });
        if (inqRes.success && Array.isArray(inqRes.data)) setInquiries(inqRes.data);
      }

      // Fetch Jobs & Applications
      if (activeTab === 'careers') {
        const jobsRes = await apiRequest('/api/v1/admin/jobs', { credentials: 'include' });
        if (jobsRes.success && Array.isArray(jobsRes.data)) setJobOpenings(jobsRes.data);

        const appsRes = await apiRequest('/api/v1/admin/job-applications', { credentials: 'include' });
        if (appsRes.success && Array.isArray(appsRes.data)) setJobApplications(appsRes.data);
      }

      // Fetch Services
      if (activeTab === 'services' || activeTab === 'dashboard') {
        const servRes = await apiRequest('/api/v1/admin/services', { credentials: 'include' });
        if (servRes.success && Array.isArray(servRes.data)) setServicesList(servRes.data);
      }

      // Fetch Domains
      if (activeTab === 'domains' || activeTab === 'dashboard') {
        const domRes = await apiRequest('/api/v1/admin/domains', { credentials: 'include' });
        if (domRes.success && Array.isArray(domRes.data)) setDomainsList(domRes.data);
      }

      // Fetch Testimonials
      if (activeTab === 'testimonials' || activeTab === 'dashboard') {
        const testRes = await apiRequest('/api/v1/admin/testimonials', { credentials: 'include' });
        if (testRes.success && Array.isArray(testRes.data)) setTestimonialsList(testRes.data);
      }

      // Fetch Audit Logs
      if (activeTab === 'audit') {
        const auditRes = await apiRequest('/api/v1/admin/audit-logs', { credentials: 'include' });
        if (auditRes.success && Array.isArray(auditRes.data)) setAuditLogs(auditRes.data);
      }
    } catch (err) {
      console.warn('API fetch notification:', err.message);
    }
  };

  // Services CRUD Handlers
  const handleOpenCreateService = () => {
    setEditingServiceId(null);
    setServiceForm({ title: '', category: 'Artificial Intelligence', summary: '', description: '', tagline: '', icon: 'Code', is_published: true });
    setShowServiceModal(true);
  };

  const handleOpenEditService = (serv) => {
    setEditingServiceId(serv.id);
    setServiceForm({
      title: serv.title || '',
      category: serv.category || 'Artificial Intelligence',
      summary: serv.summary || '',
      description: serv.description || '',
      tagline: serv.tagline || '',
      icon: serv.icon || 'Code',
      is_published: serv.is_published !== false
    });
    setShowServiceModal(true);
  };

  const handleSaveService = async (e) => {
    if (e) e.preventDefault();
    if (!serviceForm.title.trim()) return alert('Service title is required');
    try {
      if (editingServiceId) {
        await apiRequest(`/api/v1/admin/services/${editingServiceId}`, {
          method: 'PUT',
          body: JSON.stringify(serviceForm),
          credentials: 'include'
        });
      } else {
        await apiRequest('/api/v1/admin/services', {
          method: 'POST',
          body: JSON.stringify(serviceForm),
          credentials: 'include'
        });
      }
      setShowServiceModal(false);
      fetchAdminData();
      alert(editingServiceId ? 'Service updated successfully!' : 'Service created successfully!');
    } catch (err) {
      alert('Failed to save service: ' + err.message);
    }
  };

  const handleDeleteService = async (id, title) => {
    if (window.confirm(`Delete service "${title}"?`)) {
      try {
        await apiRequest(`/api/v1/admin/services/${id}`, { method: 'DELETE', credentials: 'include' });
        fetchAdminData();
      } catch (err) {
        alert('Failed to delete service: ' + err.message);
      }
    }
  };

  // Domains CRUD Handlers
  const handleOpenCreateDomain = () => {
    setEditingDomainId(null);
    setDomainForm({ title: '', subtitle: '', description: '', icon: 'Building', is_published: true });
    setShowDomainModal(true);
  };

  const handleOpenEditDomain = (dom) => {
    setEditingDomainId(dom.id);
    setDomainForm({
      title: dom.title || '',
      subtitle: dom.subtitle || '',
      description: dom.description || '',
      icon: dom.icon || 'Building',
      is_published: dom.is_published !== false
    });
    setShowDomainModal(true);
  };

  const handleSaveDomain = async (e) => {
    if (e) e.preventDefault();
    if (!domainForm.title.trim()) return alert('Domain title is required');
    try {
      if (editingDomainId) {
        await apiRequest(`/api/v1/admin/domains/${editingDomainId}`, {
          method: 'PUT',
          body: JSON.stringify(domainForm),
          credentials: 'include'
        });
      } else {
        await apiRequest('/api/v1/admin/domains', {
          method: 'POST',
          body: JSON.stringify(domainForm),
          credentials: 'include'
        });
      }
      setShowDomainModal(false);
      fetchAdminData();
      alert(editingDomainId ? 'Domain updated successfully!' : 'Domain created successfully!');
    } catch (err) {
      alert('Failed to save domain: ' + err.message);
    }
  };

  const handleDeleteDomain = async (id, title) => {
    if (window.confirm(`Delete domain "${title}"?`)) {
      try {
        await apiRequest(`/api/v1/admin/domains/${id}`, { method: 'DELETE', credentials: 'include' });
        fetchAdminData();
      } catch (err) {
        alert('Failed to delete domain: ' + err.message);
      }
    }
  };

  // Testimonials CRUD Handlers
  const handleOpenCreateTestimonial = () => {
    setEditingTestimonialId(null);
    setTestimonialForm({ author_name: '', designation: '', company: '', content: '', rating: 5, is_published: true });
    setShowTestimonialModal(true);
  };

  const handleOpenEditTestimonial = (t) => {
    setEditingTestimonialId(t.id);
    setTestimonialForm({
      author_name: t.author_name || t.authorName || '',
      designation: t.designation || '',
      company: t.company || '',
      content: t.content || '',
      rating: t.rating || 5,
      is_published: t.is_published !== false
    });
    setShowTestimonialModal(true);
  };

  const handleSaveTestimonial = async (e) => {
    if (e) e.preventDefault();
    if (!testimonialForm.content.trim()) return alert('Testimonial content is required');
    try {
      if (editingTestimonialId) {
        await apiRequest(`/api/v1/admin/testimonials/${editingTestimonialId}`, {
          method: 'PUT',
          body: JSON.stringify(testimonialForm),
          credentials: 'include'
        });
      } else {
        await apiRequest('/api/v1/admin/testimonials', {
          method: 'POST',
          body: JSON.stringify(testimonialForm),
          credentials: 'include'
        });
      }
      setShowTestimonialModal(false);
      fetchAdminData();
      alert(editingTestimonialId ? 'Testimonial updated successfully!' : 'Testimonial created successfully!');
    } catch (err) {
      alert('Failed to save testimonial: ' + err.message);
    }
  };

  const handleDeleteTestimonial = async (id, authorName) => {
    if (window.confirm(`Delete testimonial by "${authorName}"?`)) {
      try {
        await apiRequest(`/api/v1/admin/testimonials/${id}`, { method: 'DELETE', credentials: 'include' });
        fetchAdminData();
      } catch (err) {
        alert('Failed to delete testimonial: ' + err.message);
      }
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setLoginError(null);
    setIsSubmittingLogin(true);
    try {
      await authLogin(loginEmail, loginPassword);
      setActiveTab('dashboard');
    } catch (err) {
      setLoginError(err.message || 'Invalid credentials. Please try again.');
    } finally {
      setIsSubmittingLogin(false);
    }
  };

  const handleOpenCreateModal = () => {
    setEditingArticleId(null);
    setForm(initialForm);
    setViewMode('edit');
    setShowModal(true);
  };

  const handleOpenEditModal = (article) => {
    setEditingArticleId(article.id);
    setForm({
      title: article.title || '',
      summary: article.summary || '',
      category: article.category || 'Press Release',
      status: article.status || (article.is_published ? 'Published' : 'Draft'),
      image_url: article.image_url || article.image || '',
      content: article.content || '',
      author: article.author || 'WHY IT Services Media Relations'
    });
    setViewMode('edit');
    setShowModal(true);
  };

  const handleSavePost = async (e) => {
    if (e) e.preventDefault();
    if (!form.title.trim()) {
      alert('Please enter an article title.');
      return;
    }

    try {
      const payload = {
        title: form.title,
        summary: form.summary,
        content: form.content,
        category: form.category,
        image_url: form.image_url,
        is_published: form.status === 'Published'
      };

      if (editingArticleId) {
        await apiRequest(`/api/v1/admin/news/${editingArticleId}`, {
          method: 'PUT',
          body: JSON.stringify(payload),
          credentials: 'include'
        });
      } else {
        await apiRequest('/api/v1/admin/news', {
          method: 'POST',
          body: JSON.stringify(payload),
          credentials: 'include'
        });
      }

      setShowModal(false);
      fetchAdminData();
      alert(editingArticleId ? 'Post updated successfully in Database!' : 'New post published successfully to Database!');
    } catch (err) {
      alert('Failed to save post: ' + (err.message || 'Server error'));
    }
  };

  const handleDelete = async (id, title) => {
    if (window.confirm(`Delete post "${title}" from Database?`)) {
      try {
        await apiRequest(`/api/v1/admin/news/${id}`, {
          method: 'DELETE',
          credentials: 'include'
        });
        fetchAdminData();
      } catch (err) {
        alert('Failed to delete post: ' + err.message);
      }
    }
  };

  const filtered = newsArticles.filter(a => {
    const matchesSearch = (a.title || '').toLowerCase().includes(newsSearchQuery.toLowerCase());
    const matchesCat = newsCategoryFilter === 'All' || a.category === newsCategoryFilter;
    const matchesStat = newsStatusFilter === 'All' || (a.is_published ? 'Published' : 'Draft') === newsStatusFilter;
    return matchesSearch && matchesCat && matchesStat;
  });

  // Render Login Modal if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="bg-[#0B0F19] text-slate-100 min-h-screen flex items-center justify-center p-4 font-sans">
        <div className="bg-[#0D121F] border border-slate-800 rounded-3xl p-8 max-w-md w-full shadow-2xl space-y-6">
          <div className="text-center space-y-2">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#6D28D9] to-[#4C1D95] mx-auto flex items-center justify-center text-white text-2xl font-extrabold shadow-lg">
              W
            </div>
            <h1 className="text-2xl font-extrabold text-white">WHY IT Admin Console</h1>
            <p className="text-xs text-slate-400 font-medium">Enterprise Security & Persistent CMS</p>
          </div>

          {loginError && (
            <div className="bg-rose-950/80 border border-rose-800 text-rose-300 p-3.5 rounded-xl text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-rose-400 flex-shrink-0" />
              <span>{loginError}</span>
            </div>
          )}

          <form onSubmit={handleLoginSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">Email Address</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
                <input
                  type="email"
                  required
                  value={loginEmail}
                  onChange={e => setLoginEmail(e.target.value)}
                  placeholder="admin@whyitservices.com"
                  className="w-full bg-[#161C2E] border border-slate-700/80 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-[#6D28D9]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">Password</label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
                <input
                  type="password"
                  required
                  value={loginPassword}
                  onChange={e => setLoginPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full bg-[#161C2E] border border-slate-700/80 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-[#6D28D9]"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmittingLogin}
              className="w-full bg-[#6D28D9] hover:bg-[#5B21B6] text-white font-extrabold py-3 rounded-xl text-xs flex items-center justify-center gap-2 shadow-lg transition-all"
            >
              {isSubmittingLogin ? <RefreshCw className="w-4 h-4 animate-spin" /> : <span>Sign In with HTTP-Only Cookie</span>}
            </button>
          </form>

          <div className="text-center pt-2">
            <a href="/" className="text-xs text-slate-400 hover:text-purple-400 transition-colors">
              ← Return to WHY IT Public Website
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#0B0F19] text-slate-100 min-h-screen flex flex-col font-sans selection:bg-[#6D28D9] selection:text-white">
      {/* HEADER */}
      <header className="bg-[#0D121F] border-b border-slate-800/80 px-6 py-3.5 flex items-center justify-between sticky top-0 z-40">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#6D28D9] to-[#4C1D95] flex items-center justify-center font-extrabold text-white text-base shadow-md">
            W
          </div>
          <div>
            <div className="font-extrabold text-sm text-white flex items-center gap-2">
              <span>WHY IT Services</span>
            </div>
            <div className="text-[10px] font-mono text-purple-400 uppercase tracking-widest font-bold">ADMIN CONSOLE</div>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-2 bg-[#161C2E] border border-slate-800 px-3.5 py-1 rounded-full text-[11px] font-bold text-purple-300">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>AUTHENTICATED: {user?.email} ({user?.role})</span>
        </div>

        <div className="flex items-center gap-3">
          <a href="/" target="_blank" rel="noopener noreferrer" className="bg-[#161C2E] text-slate-200 border border-slate-700 px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5">
            <span>Live Site</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <button onClick={logout} className="bg-rose-950/80 hover:bg-rose-900 border border-rose-800 text-rose-300 px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5">
            <LogOut className="w-3.5 h-3.5" />
            <span>Logout</span>
          </button>
        </div>
      </header>

      {/* MAIN CONTAINER */}
      <div className="flex-1 flex flex-col md:flex-row">
        {/* SIDEBAR */}
        <aside className="w-full md:w-64 bg-[#0D121F] border-r border-slate-800/80 p-4 space-y-6">
          <div>
            <div className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider mb-3 px-3">
              ADMINISTRATION
            </div>
            
            <nav className="space-y-1">
              <button
                onClick={() => setActiveTab('dashboard')}
                className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'dashboard' ? 'bg-[#6D28D9] text-white shadow-lg' : 'text-slate-300 hover:bg-[#161C2E]'
                }`}
              >
                <LayoutDashboard className="w-4 h-4 text-purple-300" />
                <span>Dashboard Overview</span>
              </button>

              <button
                onClick={() => setActiveTab('services')}
                className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'services' ? 'bg-[#6D28D9] text-white shadow-lg' : 'text-slate-300 hover:bg-[#161C2E]'
                }`}
              >
                <Layers className="w-4 h-4 text-purple-300" />
                <span>Services CMS</span>
              </button>

              <button
                onClick={() => setActiveTab('domains')}
                className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'domains' ? 'bg-[#6D28D9] text-white shadow-lg' : 'text-slate-300 hover:bg-[#161C2E]'
                }`}
              >
                <Code2 className="w-4 h-4 text-purple-300" />
                <span>Domains & Solutions</span>
              </button>

              <button
                onClick={() => setActiveTab('testimonials')}
                className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'testimonials' ? 'bg-[#6D28D9] text-white shadow-lg' : 'text-slate-300 hover:bg-[#161C2E]'
                }`}
              >
                <Quote className="w-4 h-4 text-purple-300" />
                <span>Testimonials CMS</span>
              </button>

              <button
                onClick={() => setActiveTab('news')}
                className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'news' ? 'bg-[#6D28D9] text-white shadow-lg' : 'text-slate-300 hover:bg-[#161C2E]'
                }`}
              >
                <Newspaper className="w-4 h-4 text-purple-300" />
                <span>News & Press Releases</span>
              </button>

              <button
                onClick={() => setActiveTab('careers')}
                className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'careers' ? 'bg-[#6D28D9] text-white shadow-lg' : 'text-slate-300 hover:bg-[#161C2E]'
                }`}
              >
                <Briefcase className="w-4 h-4 text-purple-300" />
                <span>Careers & Applications</span>
              </button>

              <button
                onClick={() => setActiveTab('inquiries')}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'inquiries' ? 'bg-[#6D28D9] text-white shadow-lg' : 'text-slate-300 hover:bg-[#161C2E]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-purple-300" />
                  <span>Inquiries & RFPs</span>
                </div>
                {dashboardStats.newInquiries > 0 && (
                  <span className="bg-rose-500 text-white text-[9px] font-extrabold px-1.5 py-0.5 rounded-full">
                    {dashboardStats.newInquiries}
                  </span>
                )}
              </button>

              <button
                onClick={() => setActiveTab('audit')}
                className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'audit' ? 'bg-[#6D28D9] text-white shadow-lg' : 'text-slate-300 hover:bg-[#161C2E]'
                }`}
              >
                <Activity className="w-4 h-4 text-purple-300" />
                <span>Security Audit Logs</span>
              </button>
            </nav>
          </div>
        </aside>

        {/* MAIN BODY */}
        <main className="flex-1 p-6 md:p-8 space-y-6 overflow-y-auto">
          {activeTab === 'dashboard' && (
            <div className="space-y-6">
              <div className="bg-[#0D121F] p-6 rounded-3xl border border-slate-800 shadow-xl">
                <h1 className="text-2xl font-extrabold text-white">System Architecture & Stats Overview</h1>
                <p className="text-xs text-slate-400 mt-1">Authenticated via HTTP-Only Cookies & Neon PostgreSQL.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-[#0D121F] border border-slate-800 p-5 rounded-2xl">
                  <div className="text-xs font-bold text-slate-400">TOTAL INQUIRIES & RFPs</div>
                  <div className="text-3xl font-extrabold text-white mt-2">{dashboardStats.totalInquiries}</div>
                </div>

                <div className="bg-[#0D121F] border border-slate-800 p-5 rounded-2xl">
                  <div className="text-xs font-bold text-slate-400">PUBLISHED SERVICES</div>
                  <div className="text-3xl font-extrabold text-white mt-2">{servicesList.length}</div>
                </div>

                <div className="bg-[#0D121F] border border-slate-800 p-5 rounded-2xl">
                  <div className="text-xs font-bold text-slate-400">PUBLISHED ARTICLES</div>
                  <div className="text-3xl font-extrabold text-white mt-2">{newsArticles.length}</div>
                </div>

                <div className="bg-[#0D121F] border border-slate-800 p-5 rounded-2xl">
                  <div className="text-xs font-bold text-slate-400">ACTIVE JOB OPENINGS</div>
                  <div className="text-3xl font-extrabold text-white mt-2">{dashboardStats.activeJobs}</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'services' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#0D121F] p-6 rounded-3xl border border-slate-800 shadow-xl">
                <div>
                  <h1 className="text-2xl font-extrabold text-white">Services CMS Management</h1>
                  <p className="text-xs text-slate-400 mt-1">Manage core IT services, capabilities, and offerings.</p>
                </div>
                <button onClick={handleOpenCreateService} className="bg-[#6D28D9] text-white font-extrabold px-5 py-2.5 rounded-2xl text-xs flex items-center gap-2">
                  <Plus className="w-4 h-4" />
                  <span>Add Service</span>
                </button>
              </div>

              <div className="bg-[#0D121F] border border-slate-800 rounded-3xl overflow-hidden shadow-xl">
                <table className="w-full text-left text-xs text-slate-300">
                  <thead className="bg-[#0B0F19] border-b border-slate-800 text-slate-400 font-extrabold uppercase">
                    <tr>
                      <th className="p-4">Title & Slug</th>
                      <th className="p-4">Category</th>
                      <th className="p-4">Summary</th>
                      <th className="p-4">Status</th>
                      <th className="p-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/80 bg-[#161C2E]/40">
                    {servicesList.map((serv) => (
                      <tr key={serv.id} className="hover:bg-[#161C2E] transition-colors">
                        <td className="p-4 font-bold text-white max-w-xs">{serv.title}<div className="text-[10px] text-slate-500 font-mono">{serv.slug}</div></td>
                        <td className="p-4 text-purple-300 font-semibold">{serv.category}</td>
                        <td className="p-4 max-w-sm truncate text-slate-400">{serv.summary}</td>
                        <td className="p-4">
                          <span className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase ${serv.is_published !== false ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' : 'bg-amber-950 text-amber-400 border border-amber-800'}`}>
                            {serv.is_published !== false ? 'Published' : 'Draft'}
                          </span>
                        </td>
                        <td className="p-4 text-right space-x-2">
                          <button onClick={() => handleOpenEditService(serv)} className="bg-slate-800 p-2 rounded-xl border border-slate-700">
                            <Edit3 className="w-3.5 h-3.5" />
                          </button>
                          <button onClick={() => handleDeleteService(serv.id, serv.title)} className="bg-rose-950 text-rose-300 p-2 rounded-xl border border-rose-800">
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'domains' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#0D121F] p-6 rounded-3xl border border-slate-800 shadow-xl">
                <div>
                  <h1 className="text-2xl font-extrabold text-white">Domains & Solutions CMS</h1>
                  <p className="text-xs text-slate-400 mt-1">Manage industry domains, vertical solutions, and specializations.</p>
                </div>
                <button onClick={handleOpenCreateDomain} className="bg-[#6D28D9] text-white font-extrabold px-5 py-2.5 rounded-2xl text-xs flex items-center gap-2">
                  <Plus className="w-4 h-4" />
                  <span>Add Domain</span>
                </button>
              </div>

              <div className="bg-[#0D121F] border border-slate-800 rounded-3xl overflow-hidden shadow-xl">
                <table className="w-full text-left text-xs text-slate-300">
                  <thead className="bg-[#0B0F19] border-b border-slate-800 text-slate-400 font-extrabold uppercase">
                    <tr>
                      <th className="p-4">Title & Subtitle</th>
                      <th className="p-4">Description</th>
                      <th className="p-4">Icon</th>
                      <th className="p-4">Status</th>
                      <th className="p-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/80 bg-[#161C2E]/40">
                    {domainsList.map((dom) => (
                      <tr key={dom.id} className="hover:bg-[#161C2E] transition-colors">
                        <td className="p-4 font-bold text-white max-w-xs">{dom.title}<div className="text-[10px] text-purple-300 font-normal">{dom.subtitle}</div></td>
                        <td className="p-4 max-w-md truncate text-slate-400">{dom.description}</td>
                        <td className="p-4 font-mono text-[10px] text-slate-400">{dom.icon}</td>
                        <td className="p-4">
                          <span className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase ${dom.is_published !== false ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' : 'bg-amber-950 text-amber-400 border border-amber-800'}`}>
                            {dom.is_published !== false ? 'Published' : 'Draft'}
                          </span>
                        </td>
                        <td className="p-4 text-right space-x-2">
                          <button onClick={() => handleOpenEditDomain(dom)} className="bg-slate-800 p-2 rounded-xl border border-slate-700">
                            <Edit3 className="w-3.5 h-3.5" />
                          </button>
                          <button onClick={() => handleDeleteDomain(dom.id, dom.title)} className="bg-rose-950 text-rose-300 p-2 rounded-xl border border-rose-800">
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'testimonials' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#0D121F] p-6 rounded-3xl border border-slate-800 shadow-xl">
                <div>
                  <h1 className="text-2xl font-extrabold text-white">Testimonials & Client Feedback</h1>
                  <p className="text-xs text-slate-400 mt-1">Manage client testimonials, executive endorsements, and reviews.</p>
                </div>
                <button onClick={handleOpenCreateTestimonial} className="bg-[#6D28D9] text-white font-extrabold px-5 py-2.5 rounded-2xl text-xs flex items-center gap-2">
                  <Plus className="w-4 h-4" />
                  <span>Add Testimonial</span>
                </button>
              </div>

              <div className="bg-[#0D121F] border border-slate-800 rounded-3xl overflow-hidden shadow-xl">
                <table className="w-full text-left text-xs text-slate-300">
                  <thead className="bg-[#0B0F19] border-b border-slate-800 text-slate-400 font-extrabold uppercase">
                    <tr>
                      <th className="p-4">Author & Designation</th>
                      <th className="p-4">Company</th>
                      <th className="p-4">Content</th>
                      <th className="p-4">Rating</th>
                      <th className="p-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/80 bg-[#161C2E]/40">
                    {testimonialsList.map((t) => (
                      <tr key={t.id} className="hover:bg-[#161C2E] transition-colors">
                        <td className="p-4 font-bold text-white">{t.author_name || t.authorName}<div className="text-[10px] text-purple-300 font-normal">{t.designation}</div></td>
                        <td className="p-4 text-slate-300">{t.company}</td>
                        <td className="p-4 max-w-sm truncate text-slate-400">{t.content}</td>
                        <td className="p-4 font-bold text-amber-400">★ {t.rating || 5}/5</td>
                        <td className="p-4 text-right space-x-2">
                          <button onClick={() => handleOpenEditTestimonial(t)} className="bg-slate-800 p-2 rounded-xl border border-slate-700">
                            <Edit3 className="w-3.5 h-3.5" />
                          </button>
                          <button onClick={() => handleDeleteTestimonial(t.id, t.author_name || t.authorName)} className="bg-rose-950 text-rose-300 p-2 rounded-xl border border-rose-800">
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'news' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#0D121F] p-6 rounded-3xl border border-slate-800 shadow-xl">
                <div>
                  <h1 className="text-2xl font-extrabold text-white">News & Press Releases (DB Persisted)</h1>
                  <p className="text-xs text-slate-400 mt-1">All mutations persist to PostgreSQL database with audit logs.</p>
                </div>
                <button onClick={handleOpenCreateModal} className="bg-[#6D28D9] text-white font-extrabold px-5 py-2.5 rounded-2xl text-xs flex items-center gap-2">
                  <Plus className="w-4 h-4" />
                  <span>New Post</span>
                </button>
              </div>

              <div className="bg-[#0D121F] border border-slate-800 rounded-3xl overflow-hidden shadow-xl">
                <table className="w-full text-left text-xs text-slate-300">
                  <thead className="bg-[#0B0F19] border-b border-slate-800 text-slate-400 font-extrabold uppercase">
                    <tr>
                      <th className="p-4">Cover</th>
                      <th className="p-4">Article Title & Permalink</th>
                      <th className="p-4">Category</th>
                      <th className="p-4">Status</th>
                      <th className="p-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/80 bg-[#161C2E]/40">
                    {filtered.map((art) => (
                      <tr key={art.id} className="hover:bg-[#161C2E] transition-colors">
                        <td className="p-4">
                          <img src={art.image_url || art.image || 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80'} alt="" className="w-16 h-11 object-cover rounded-xl border border-slate-700" />
                        </td>
                        <td className="p-4 font-bold text-white max-w-md">{art.title}</td>
                        <td className="p-4">{art.category}</td>
                        <td className="p-4">
                          <span className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase ${art.is_published ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' : 'bg-amber-950 text-amber-400 border border-amber-800'}`}>
                            {art.is_published ? 'Published' : 'Draft'}
                          </span>
                        </td>
                        <td className="p-4 text-right space-x-2">
                          <button onClick={() => handleOpenEditModal(art)} className="bg-slate-800 p-2 rounded-xl border border-slate-700">
                            <Edit3 className="w-3.5 h-3.5" />
                          </button>
                          <button onClick={() => handleDelete(art.id, art.title)} className="bg-rose-950 text-rose-300 p-2 rounded-xl border border-rose-800">
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'inquiries' && (
            <div className="space-y-6">
              <div className="bg-[#0D121F] p-6 rounded-3xl border border-slate-800 shadow-xl">
                <h1 className="text-2xl font-extrabold text-white">Client Inquiries & RFPs</h1>
              </div>
              <div className="bg-[#0D121F] border border-slate-800 rounded-3xl overflow-hidden">
                <table className="w-full text-left text-xs text-slate-300">
                  <thead className="bg-[#0B0F19] border-b border-slate-800 text-slate-400 font-extrabold uppercase">
                    <tr>
                      <th className="p-4">Type</th>
                      <th className="p-4">Contact</th>
                      <th className="p-4">Company</th>
                      <th className="p-4">Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/80 bg-[#161C2E]/40">
                    {inquiries.map((inq) => (
                      <tr key={inq.id}>
                        <td className="p-4 font-bold text-purple-400 uppercase">{inq.type}</td>
                        <td className="p-4 font-bold text-white">{inq.full_name} ({inq.email})</td>
                        <td className="p-4">{inq.company || 'N/A'}</td>
                        <td className="p-4 text-slate-400">{new Date(inq.created_at).toLocaleDateString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'audit' && (
            <div className="space-y-6">
              <div className="bg-[#0D121F] p-6 rounded-3xl border border-slate-800 shadow-xl">
                <h1 className="text-2xl font-extrabold text-white">Security Audit Log</h1>
              </div>
              <div className="bg-[#0D121F] border border-slate-800 rounded-3xl overflow-hidden">
                <table className="w-full text-left text-xs text-slate-300">
                  <thead className="bg-[#0B0F19] border-b border-slate-800 text-slate-400 font-extrabold uppercase">
                    <tr>
                      <th className="p-4">Time</th>
                      <th className="p-4">User</th>
                      <th className="p-4">Action</th>
                      <th className="p-4">IP Address</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/80 bg-[#161C2E]/40">
                    {auditLogs.map((log) => (
                      <tr key={log.id}>
                        <td className="p-4 text-slate-400 font-mono text-[10px]">{new Date(log.created_at).toLocaleString()}</td>
                        <td className="p-4 font-bold text-white">{log.user_email}</td>
                        <td className="p-4 font-semibold text-purple-300">{log.action}</td>
                        <td className="p-4 text-slate-400 font-mono text-[10px]">{log.ip_address}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* ARTICLE MODAL */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full text-slate-800 overflow-hidden p-6 space-y-4">
            <h2 className="text-lg font-bold">{editingArticleId ? 'Edit Article' : 'New Article'}</h2>
            <form onSubmit={handleSavePost} className="space-y-3">
              <div>
                <label className="block text-xs font-bold mb-1">Title *</label>
                <input required type="text" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} className="w-full border rounded-xl p-2.5 text-xs text-slate-800" />
              </div>
              <div>
                <label className="block text-xs font-bold mb-1">Summary</label>
                <textarea rows={3} value={form.summary} onChange={e => setForm({ ...form, summary: e.target.value })} className="w-full border rounded-xl p-2.5 text-xs text-slate-800" />
              </div>
              <div>
                <label className="block text-xs font-bold mb-1">Content</label>
                <textarea rows={5} value={form.content} onChange={e => setForm({ ...form, content: e.target.value })} className="w-full border rounded-xl p-2.5 text-xs text-slate-800 font-mono" />
              </div>
              <div className="flex justify-end gap-2 pt-2">
                <button type="button" onClick={() => setShowModal(false)} className="px-4 py-2 text-xs font-bold text-slate-600">Cancel</button>
                <button type="submit" className="px-5 py-2 bg-[#6D28D9] text-white text-xs font-bold rounded-xl">Save to Database</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* SERVICE MODAL */}
      {showServiceModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-xl w-full text-slate-800 overflow-hidden p-6 space-y-4">
            <h2 className="text-lg font-bold">{editingServiceId ? 'Edit Service' : 'Add New Service'}</h2>
            <form onSubmit={handleSaveService} className="space-y-3">
              <div>
                <label className="block text-xs font-bold mb-1">Title *</label>
                <input required type="text" value={serviceForm.title} onChange={e => setServiceForm({ ...serviceForm, title: e.target.value })} className="w-full border rounded-xl p-2.5 text-xs text-slate-800" />
              </div>
              <div>
                <label className="block text-xs font-bold mb-1">Category *</label>
                <input required type="text" value={serviceForm.category} onChange={e => setServiceForm({ ...serviceForm, category: e.target.value })} className="w-full border rounded-xl p-2.5 text-xs text-slate-800" />
              </div>
              <div>
                <label className="block text-xs font-bold mb-1">Summary *</label>
                <textarea required rows={2} value={serviceForm.summary} onChange={e => setServiceForm({ ...serviceForm, summary: e.target.value })} className="w-full border rounded-xl p-2.5 text-xs text-slate-800" />
              </div>
              <div>
                <label className="block text-xs font-bold mb-1">Description</label>
                <textarea rows={4} value={serviceForm.description} onChange={e => setServiceForm({ ...serviceForm, description: e.target.value })} className="w-full border rounded-xl p-2.5 text-xs text-slate-800" />
              </div>
              <div className="flex justify-end gap-2 pt-2">
                <button type="button" onClick={() => setShowServiceModal(false)} className="px-4 py-2 text-xs font-bold text-slate-600">Cancel</button>
                <button type="submit" className="px-5 py-2 bg-[#6D28D9] text-white text-xs font-bold rounded-xl">Save Service</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* DOMAIN MODAL */}
      {showDomainModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-xl w-full text-slate-800 overflow-hidden p-6 space-y-4">
            <h2 className="text-lg font-bold">{editingDomainId ? 'Edit Domain' : 'Add New Domain'}</h2>
            <form onSubmit={handleSaveDomain} className="space-y-3">
              <div>
                <label className="block text-xs font-bold mb-1">Title *</label>
                <input required type="text" value={domainForm.title} onChange={e => setDomainForm({ ...domainForm, title: e.target.value })} className="w-full border rounded-xl p-2.5 text-xs text-slate-800" />
              </div>
              <div>
                <label className="block text-xs font-bold mb-1">Subtitle</label>
                <input type="text" value={domainForm.subtitle} onChange={e => setDomainForm({ ...domainForm, subtitle: e.target.value })} className="w-full border rounded-xl p-2.5 text-xs text-slate-800" />
              </div>
              <div>
                <label className="block text-xs font-bold mb-1">Description *</label>
                <textarea required rows={4} value={domainForm.description} onChange={e => setDomainForm({ ...domainForm, description: e.target.value })} className="w-full border rounded-xl p-2.5 text-xs text-slate-800" />
              </div>
              <div className="flex justify-end gap-2 pt-2">
                <button type="button" onClick={() => setShowDomainModal(false)} className="px-4 py-2 text-xs font-bold text-slate-600">Cancel</button>
                <button type="submit" className="px-5 py-2 bg-[#6D28D9] text-white text-xs font-bold rounded-xl">Save Domain</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* TESTIMONIAL MODAL */}
      {showTestimonialModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-xl w-full text-slate-800 overflow-hidden p-6 space-y-4">
            <h2 className="text-lg font-bold">{editingTestimonialId ? 'Edit Testimonial' : 'Add New Testimonial'}</h2>
            <form onSubmit={handleSaveTestimonial} className="space-y-3">
              <div>
                <label className="block text-xs font-bold mb-1">Author Name *</label>
                <input required type="text" value={testimonialForm.author_name} onChange={e => setTestimonialForm({ ...testimonialForm, author_name: e.target.value })} className="w-full border rounded-xl p-2.5 text-xs text-slate-800" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold mb-1">Designation</label>
                  <input type="text" value={testimonialForm.designation} onChange={e => setTestimonialForm({ ...testimonialForm, designation: e.target.value })} className="w-full border rounded-xl p-2.5 text-xs text-slate-800" />
                </div>
                <div>
                  <label className="block text-xs font-bold mb-1">Company</label>
                  <input type="text" value={testimonialForm.company} onChange={e => setTestimonialForm({ ...testimonialForm, company: e.target.value })} className="w-full border rounded-xl p-2.5 text-xs text-slate-800" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold mb-1">Content *</label>
                <textarea required rows={4} value={testimonialForm.content} onChange={e => setTestimonialForm({ ...testimonialForm, content: e.target.value })} className="w-full border rounded-xl p-2.5 text-xs text-slate-800" />
              </div>
              <div>
                <label className="block text-xs font-bold mb-1">Rating (1 to 5)</label>
                <input type="number" min={1} max={5} value={testimonialForm.rating} onChange={e => setTestimonialForm({ ...testimonialForm, rating: parseInt(e.target.value, 10) || 5 })} className="w-full border rounded-xl p-2.5 text-xs text-slate-800" />
              </div>
              <div className="flex justify-end gap-2 pt-2">
                <button type="button" onClick={() => setShowTestimonialModal(false)} className="px-4 py-2 text-xs font-bold text-slate-600">Cancel</button>
                <button type="submit" className="px-5 py-2 bg-[#6D28D9] text-white text-xs font-bold rounded-xl">Save Testimonial</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
