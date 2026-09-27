import React, { useState, useEffect, useRef } from 'react';
import { 
  BookOpen, X, Newspaper, Plus, Search, Filter, Trash2, Edit3, Star, Play, 
  Check, Eye, FileText, Download, Sparkles, Bold, Italic, Underline, Strikethrough,
  List, ListOrdered, Quote, Code, Link as LinkIcon, Image as ImageIcon, Video,
  Type, AlignLeft, RemoveFormatting, ExternalLink, Calendar, User, MapPin,
  LayoutDashboard, Code2, Briefcase, Layers, ShieldCheck, Activity, Settings, Bell
} from 'lucide-react';

const defaultNewsArticles = [
  {
    id: 'news-1',
    slug: 'why-it-services-expands-bangalore-engineering-center',
    title: 'WHY IT Services expands engineering center in Bengaluru to support growing global demand',
    category: 'Press Release',
    date: 'September 26, 2026',
    author: 'WHY IT Services Media Relations',
    location: 'Bengaluru, India',
    status: 'Published',
    isFeatured: true,
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    heroBgImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80',
    summary: 'The new Bengaluru presence expands WHY IT Services\' global delivery capabilities, adding highly skilled AI & digital engineering pods to provide clients with greater flexibility, efficiency, and enterprise software expertise.',
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
    `,
    seoTitle: 'WHY IT Services Expands Engineering Center in Bengaluru',
    seoDescription: 'WHY IT Services expands its Global Engineering Center in Bengaluru with AI and enterprise software engineering pods.'
  }
];

function convertGoogleDriveLink(url) {
  if (!url) return '';
  if (url.includes('drive.google.com')) {
    const match = url.match(/\/d\/([^\/]+)/) || url.match(/id=([^&]+)/);
    if (match && match[1]) {
      return `https://lh3.googleusercontent.com/d/${match[1]}`;
    }
  }
  return url;
}

function getYouTubeEmbedUrl(url) {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  if (match && match[2] && match[2].length === 11) {
    return `https://www.youtube.com/embed/${match[2]}`;
  }
  return url.startsWith('http') ? url : `https://www.youtube.com/embed/${url}`;
}

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-');
}

export default function Admin() {
  const [activeTab, setActiveTab] = useState('news');
  const [newsArticles, setNewsArticles] = useState([]);
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

  const initialForm = {
    title: '',
    summary: '',
    category: 'Press Release',
    status: 'Draft',
    image: '',
    videoUrl: '',
    heroBgImage: '',
    content: '',
    seoTitle: '',
    seoDescription: '',
    author: 'WHY IT Services Media Relations',
    location: 'Bengaluru, India',
    date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
    isFeatured: false
  };

  const [form, setForm] = useState(initialForm);
  const contentTextareaRef = useRef(null);

  useEffect(() => {
    const storedNews = JSON.parse(localStorage.getItem('why_news_articles') || '[]');
    if (storedNews.length === 0) {
      localStorage.setItem('why_news_articles', JSON.stringify(defaultNewsArticles));
      setNewsArticles(defaultNewsArticles);
    } else {
      setNewsArticles(storedNews);
    }
  }, []);

  const saveArticles = (articles) => {
    setNewsArticles(articles);
    localStorage.setItem('why_news_articles', JSON.stringify(articles));
  };

  const handleOpenCreateModal = () => {
    setEditingArticleId(null);
    setForm(initialForm);
    setViewMode('edit');
    setShowModal(true);
  };

  const handleOpenEditModal = (article) => {
    setEditingArticleId(article.id);
    setForm({ ...article });
    setViewMode('edit');
    setShowModal(true);
  };

  const handleAddCategory = () => {
    const newCat = prompt('Enter new category name:');
    if (newCat && newCat.trim()) {
      const trimmed = newCat.trim();
      if (!categories.includes(trimmed)) setCategories([...categories, trimmed]);
      setForm({ ...form, category: trimmed });
    }
  };

  const handleFormImageChange = (val) => {
    const converted = convertGoogleDriveLink(val);
    setForm({ ...form, image: converted });
  };

  const handleSavePost = (e) => {
    if (e) e.preventDefault();
    if (!form.title.trim()) {
      alert('Please enter an article title.');
      return;
    }

    const slug = slugify(form.title);
    let updated;

    if (editingArticleId) {
      updated = newsArticles.map(a => a.id === editingArticleId ? { ...form, slug, id: editingArticleId } : a);
    } else {
      const newPost = {
        ...form,
        id: `news-${Date.now()}`,
        slug
      };
      updated = [newPost, ...newsArticles];
    }

    saveArticles(updated);
    setShowModal(false);
    alert(editingArticleId ? 'Post updated successfully!' : 'New post published successfully!');
  };

  const handleToggleStatus = (id) => {
    const updated = newsArticles.map(a => a.id === id ? { ...a, status: a.status === 'Published' ? 'Draft' : 'Published' } : a);
    saveArticles(updated);
  };

  const handleDelete = (id, title) => {
    if (window.confirm(`Delete post "${title}"?`)) {
      const updated = newsArticles.filter(a => a.id !== id);
      saveArticles(updated);
    }
  };

  const insertFormatting = (tagStart, tagEnd = '') => {
    const ta = contentTextareaRef.current;
    if (!ta) {
      setForm(prev => ({ ...prev, content: prev.content + tagStart + tagEnd }));
      return;
    }
    const start = ta.selectionStart;
    const end = ta.selectionEnd;
    const selectedText = ta.value.substring(start, end);
    const replacement = tagStart + (selectedText || 'Text') + tagEnd;
    const newContent = ta.value.substring(0, start) + replacement + ta.value.substring(end);
    setForm(prev => ({ ...prev, content: newContent }));
  };

  const handleHeadingSelect = (val) => {
    if (val === 'H1') insertFormatting('<h1 class="text-3xl font-extrabold text-[#0F172A] my-4">', '</h1>');
    if (val === 'H2') insertFormatting('<h2 class="text-2xl font-bold text-[#0F172A] my-4">', '</h2>');
    if (val === 'H3') insertFormatting('<h3 class="text-xl font-bold text-[#0F172A] my-3">', '</h3>');
    if (val === 'Normal') insertFormatting('<p class="my-3 text-slate-700">', '</p>');
  };

  const handleInsertLink = () => {
    const url = prompt('Enter URL:', 'https://');
    const text = prompt('Enter link display text:', 'Click here');
    if (url && text) {
      insertFormatting(`<a href="${url}" target="_blank" class="text-[#6D28D9] font-bold underline hover:text-[#5B21B6]">${text}</a>`);
    }
  };

  const handleInsertImage = () => {
    const url = prompt('Enter Image URL or Google Drive Link:');
    if (url) {
      const converted = convertGoogleDriveLink(url);
      const caption = prompt('Enter image caption (optional):');
      insertFormatting(`<figure class="my-5 rounded-2xl overflow-hidden border border-slate-200"><img src="${converted}" alt="${caption || ''}" class="w-full object-cover max-h-[400px]" /><figcaption class="p-2 text-center text-xs text-slate-500 font-semibold bg-slate-50">${caption || ''}</figcaption></figure>`);
    }
  };

  const filtered = newsArticles.filter(a => {
    const matchesSearch = a.title.toLowerCase().includes(newsSearchQuery.toLowerCase());
    const matchesCat = newsCategoryFilter === 'All' || a.category === newsCategoryFilter;
    const matchesStat = newsStatusFilter === 'All' || a.status === newsStatusFilter;
    return matchesSearch && matchesCat && matchesStat;
  });

  const ytEmbed = getYouTubeEmbedUrl(form.videoUrl);

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
          <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
          <span>WHY IT EXECUTIVE CORE</span>
        </div>

        <div className="flex items-center gap-3">
          <a 
            href="/"
            className="bg-[#6D28D9] hover:bg-[#5B21B6] text-white px-4 py-1.5 rounded-xl text-xs font-extrabold transition-all flex items-center gap-1.5 shadow-md"
          >
            <span>Live Site</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </header>

      {/* MAIN CONTAINER */}
      <div className="flex-1 flex flex-col md:flex-row">
        
        {/* SIDEBAR */}
        <aside className="w-full md:w-64 bg-[#0D121F] border-r border-slate-800/80 p-4 space-y-6">
          <div>
            <div className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider mb-3 px-3">
              MAIN MENU
            </div>
            
            <nav className="space-y-1">
              <button
                onClick={() => setActiveTab('news')}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'news' ? 'bg-[#6D28D9] text-white shadow-lg' : 'text-slate-300 hover:bg-[#161C2E] hover:text-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Newspaper className="w-4 h-4 text-purple-300" />
                  <span>News & Press Releases</span>
                </div>
                <span className="bg-purple-900/90 text-purple-200 border border-purple-700 text-[9px] font-extrabold px-1.5 py-0.5 rounded uppercase">
                  NEW
                </span>
              </button>
            </nav>
          </div>

          <div className="pt-4 border-t border-slate-800/80">
            <button
              onClick={handleOpenCreateModal}
              className="w-full bg-[#6D28D9] hover:bg-[#5B21B6] text-white font-extrabold py-3 px-3 rounded-xl text-xs flex items-center justify-center gap-2 shadow-lg transition-all uppercase tracking-wider"
            >
              <Plus className="w-4 h-4" />
              <span>New Post / Article</span>
            </button>
          </div>
        </aside>

        {/* MAIN BODY */}
        <main className="flex-1 p-6 md:p-8 space-y-6 overflow-y-auto">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#0D121F] p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-xl">
            <div>
              <div className="inline-flex items-center gap-2 bg-purple-950 text-purple-300 border border-purple-800 text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider mb-2">
                <BookOpen className="w-3.5 h-3.5 text-purple-400" />
                BLOGGER & WORDPRESS NEWS MANAGER
              </div>
              <h1 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight">
                News & Articles Section
              </h1>
            </div>

            <button
              onClick={handleOpenCreateModal}
              className="bg-[#6D28D9] hover:bg-[#5B21B6] text-white font-extrabold px-6 py-3 rounded-2xl text-xs flex items-center justify-center gap-2 shadow-lg transition-all uppercase tracking-wider whitespace-nowrap"
            >
              <Plus className="w-4 h-4" />
              <span>New Post / Article</span>
            </button>
          </div>

          {/* TABLE */}
          <div className="bg-[#0D121F] border border-slate-800 rounded-3xl overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-300">
                <thead className="bg-[#0B0F19] border-b border-slate-800 text-slate-400 font-extrabold uppercase">
                  <tr>
                    <th className="p-4">Cover</th>
                    <th className="p-4">Article Title & Permalink</th>
                    <th className="p-4">Category</th>
                    <th className="p-4">Date</th>
                    <th className="p-4">Status</th>
                    <th className="p-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80 bg-[#161C2E]/40">
                  {filtered.map((art) => (
                    <tr key={art.id} className="hover:bg-[#161C2E] transition-colors">
                      <td className="p-4">
                        <img
                          src={art.image || 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80'}
                          alt={art.title}
                          className="w-16 h-11 object-cover rounded-xl border border-slate-700 shadow-sm"
                        />
                      </td>
                      <td className="p-4 max-w-xs sm:max-w-md">
                        <div className="font-bold text-white text-xs leading-snug line-clamp-2">
                          {art.title}
                        </div>
                        <div className="text-[10px] font-mono text-purple-400 mt-1 flex items-center gap-2">
                          <span>/about/news/{art.slug || art.id}</span>
                          {art.videoUrl && <span className="bg-red-950 text-red-400 text-[9px] px-1.5 rounded font-mono font-bold">Video</span>}
                        </div>
                      </td>
                      <td className="p-4 font-semibold text-slate-200">{art.category}</td>
                      <td className="p-4 font-medium text-slate-300">{art.date}</td>
                      <td className="p-4">
                        <button
                          onClick={() => handleToggleStatus(art.id)}
                          className={`px-3 py-1 rounded-full text-[10px] font-extrabold uppercase transition-all ${
                            art.status === 'Published'
                              ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                              : 'bg-amber-950 text-amber-400 border border-amber-800'
                          }`}
                        >
                          {art.status}
                        </button>
                      </td>
                      <td className="p-4 text-right space-x-2 whitespace-nowrap">
                        <button
                          onClick={() => handleOpenEditModal(art)}
                          className="bg-slate-800 hover:bg-slate-700 text-slate-200 p-2 rounded-xl text-[11px] transition-colors border border-slate-700"
                        >
                          <Edit3 className="w-3.5 h-3.5" />
                        </button>

                        <a
                          href={`/about/news/${art.slug || art.id}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex bg-slate-800 hover:bg-slate-700 text-purple-300 p-2 rounded-xl text-[11px] transition-colors border border-slate-700"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>

                        <button
                          onClick={() => handleDelete(art.id, art.title)}
                          className="bg-rose-950/80 hover:bg-rose-900 text-rose-300 p-2 rounded-xl text-[11px] transition-colors border border-rose-800"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </main>
      </div>

      {/* EXACT USER MOCKUP MODAL WITH LIVE PREVIEW */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          
          <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full text-slate-800 overflow-hidden my-6 border border-slate-200">
            
            {/* MODAL HEADER */}
            <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-white sticky top-0 z-10">
              <div className="flex items-center gap-2.5">
                <BookOpen className="w-5 h-5 text-teal-600" />
                <h2 className="text-lg font-bold text-slate-800">
                  {editingArticleId ? 'Edit Post / Article' : 'New Post / Article'}
                </h2>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-slate-100 p-1 rounded-xl flex items-center border border-slate-200">
                  <button
                    type="button"
                    onClick={() => setViewMode('edit')}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                      viewMode === 'edit' ? 'bg-white text-teal-700 shadow-sm' : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    Editor Form
                  </button>
                  <button
                    type="button"
                    onClick={() => setViewMode('preview')}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                      viewMode === 'preview' ? 'bg-[#6D28D9] text-white shadow-sm' : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    Live Reader Preview
                  </button>
                </div>

                <button onClick={() => setShowModal(false)} className="text-slate-400 hover:text-slate-600 p-1">
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {viewMode === 'edit' ? (
              <form onSubmit={handleSavePost} className="p-6 space-y-5 max-h-[80vh] overflow-y-auto">
                
                <div>
                  <label className="block text-xs font-extrabold text-slate-700 mb-1.5">
                    Title <span className="text-rose-500">*</span>
                  </label>
                  <input
                    required
                    type="text"
                    value={form.title}
                    onChange={e => setForm({ ...form, title: e.target.value })}
                    placeholder="Write article title..."
                    className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 outline-none focus:border-teal-500 focus:bg-white transition-all placeholder:text-slate-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-extrabold text-slate-700 mb-1.5">
                    Excerpt / Subtitle
                  </label>
                  <textarea
                    rows={3}
                    value={form.summary}
                    onChange={e => setForm({ ...form, summary: e.target.value })}
                    placeholder="Brief summary or hero subtitle..."
                    className="w-full bg-slate-50/50 border border-slate-200 rounded-xl p-3.5 text-xs text-slate-800 outline-none focus:border-teal-500 focus:bg-white transition-all placeholder:text-slate-400 resize-y"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="text-xs font-extrabold text-slate-700">
                        Category <span className="text-rose-500">*</span>
                      </label>
                      <button
                        type="button"
                        onClick={handleAddCategory}
                        className="text-[11px] font-bold text-teal-600 hover:underline flex items-center gap-1"
                      >
                        + Add Category
                      </button>
                    </div>
                    <select
                      value={form.category}
                      onChange={e => setForm({ ...form, category: e.target.value })}
                      className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-700 outline-none focus:border-teal-500"
                    >
                      <option value="">— Select category —</option>
                      {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold text-slate-700 mb-1.5">
                      Status
                    </label>
                    <select
                      value={form.status}
                      onChange={e => setForm({ ...form, status: e.target.value })}
                      className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-700 outline-none focus:border-teal-500 font-semibold"
                    >
                      <option value="Draft">Draft</option>
                      <option value="Published">Published</option>
                    </select>
                  </div>
                </div>

                <div className="bg-blue-50/30 border border-blue-100 rounded-2xl p-4 sm:p-5 space-y-4">
                  <h3 className="text-xs font-extrabold text-blue-900 tracking-tight">
                    Media and Video Options
                  </h3>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Featured Image URL (Google Drive links auto-convert)
                    </label>
                    <input
                      type="text"
                      value={form.image}
                      onChange={e => handleFormImageChange(e.target.value)}
                      placeholder="Paste image URL or Google Drive share link..."
                      className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2 text-xs text-slate-800 outline-none focus:border-blue-400 placeholder:text-slate-400"
                    />
                    <p className="text-[10px] text-slate-500 mt-1">
                      Note: Google Drive sharing links are automatically converted into working images.
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      YouTube Video URL (Adds Watch Video button only if provided)
                    </label>
                    <input
                      type="text"
                      value={form.videoUrl}
                      onChange={e => setForm({ ...form, videoUrl: e.target.value })}
                      placeholder="https://www.youtube.com/watch?v=... or https://youtu.be/..."
                      className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2 text-xs text-slate-800 outline-none focus:border-blue-400 placeholder:text-slate-400"
                    />
                    <p className="text-[10px] text-slate-500 mt-1">
                      Leave blank if this article has no video.
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Hero Background Image URL (Optional)
                    </label>
                    <input
                      type="text"
                      value={form.heroBgImage}
                      onChange={e => setForm({ ...form, heroBgImage: convertGoogleDriveLink(e.target.value) })}
                      placeholder="Background banner image URL..."
                      className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2 text-xs text-slate-800 outline-none focus:border-blue-400 placeholder:text-slate-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-extrabold text-slate-700 mb-1.5">
                    Article Body Content <span className="text-rose-500">*</span>
                  </label>
                  
                  <div className="border border-slate-200 rounded-t-xl bg-slate-50 p-2 flex flex-wrap items-center gap-1 text-slate-700 text-xs">
                    <select onChange={e => handleHeadingSelect(e.target.value)} className="bg-white border border-slate-200 rounded px-2 py-1 text-[11px]">
                      <option value="Sans Serif">Sans Serif</option>
                      <option value="Serif">Serif</option>
                      <option value="Monospace">Monospace</option>
                    </select>

                    <select onChange={e => handleHeadingSelect(e.target.value)} className="bg-white border border-slate-200 rounded px-2 py-1 text-[11px]">
                      <option value="Normal">Normal</option>
                      <option value="H1">Heading 1</option>
                      <option value="H2">Heading 2</option>
                      <option value="H3">Heading 3</option>
                    </select>

                    <div className="h-4 w-[1px] bg-slate-300 mx-1"></div>

                    <button type="button" onClick={() => insertFormatting('<b>', '</b>')} className="p-1.5 hover:bg-slate-200 rounded font-bold">B</button>
                    <button type="button" onClick={() => insertFormatting('<i>', '</i>')} className="p-1.5 hover:bg-slate-200 rounded italic">I</button>
                    <button type="button" onClick={() => insertFormatting('<u>', '</u>')} className="p-1.5 hover:bg-slate-200 rounded underline">U</button>
                    <button type="button" onClick={() => insertFormatting('<s>', '</s>')} className="p-1.5 hover:bg-slate-200 rounded line-through">S</button>
                    
                    <div className="h-4 w-[1px] bg-slate-300 mx-1"></div>

                    <button type="button" onClick={() => insertFormatting('<ul class="list-disc pl-5 my-3"><li>', '</li></ul>')} className="p-1.5 hover:bg-slate-200 rounded"><List className="w-3.5 h-3.5" /></button>
                    <button type="button" onClick={() => insertFormatting('<ol class="list-decimal pl-5 my-3"><li>', '</li></ol>')} className="p-1.5 hover:bg-slate-200 rounded"><ListOrdered className="w-3.5 h-3.5" /></button>
                    <button type="button" onClick={() => insertFormatting('<blockquote class="border-l-4 border-[#6D28D9] pl-4 italic my-4 text-slate-700">', '</blockquote>')} className="p-1.5 hover:bg-slate-200 rounded"><Quote className="w-3.5 h-3.5" /></button>
                    <button type="button" onClick={() => insertFormatting('<pre class="bg-slate-900 text-purple-300 p-4 rounded-xl font-mono text-xs"><code>', '</code></pre>')} className="p-1.5 hover:bg-slate-200 rounded"><Code className="w-3.5 h-3.5" /></button>

                    <div className="h-4 w-[1px] bg-slate-300 mx-1"></div>

                    <button type="button" onClick={handleInsertLink} className="p-1.5 hover:bg-slate-200 rounded"><LinkIcon className="w-3.5 h-3.5" /></button>
                    <button type="button" onClick={handleInsertImage} className="p-1.5 hover:bg-slate-200 rounded"><ImageIcon className="w-3.5 h-3.5" /></button>
                  </div>

                  <textarea
                    ref={contentTextareaRef}
                    rows={8}
                    required
                    value={form.content}
                    onChange={e => setForm({ ...form, content: e.target.value })}
                    placeholder="Write your content here..."
                    className="w-full bg-white border border-t-0 border-slate-200 rounded-b-xl p-4 text-xs text-slate-800 outline-none focus:border-teal-500 font-mono leading-relaxed"
                  />
                </div>

                <div className="bg-indigo-50/30 border border-indigo-100 rounded-2xl p-4 sm:p-5 space-y-3">
                  <h3 className="text-xs font-extrabold text-indigo-900 tracking-tight">
                    SEO Meta Settings
                  </h3>

                  <div>
                    <input
                      type="text"
                      value={form.seoTitle}
                      onChange={e => setForm({ ...form, seoTitle: e.target.value })}
                      placeholder="SEO Title..."
                      className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2 text-xs text-slate-800 outline-none focus:border-indigo-400 placeholder:text-slate-400"
                    />
                  </div>

                  <div>
                    <textarea
                      rows={2}
                      value={form.seoDescription}
                      onChange={e => setForm({ ...form, seoDescription: e.target.value })}
                      placeholder="SEO Description..."
                      className="w-full bg-white border border-slate-200 rounded-xl p-3 text-xs text-slate-800 outline-none focus:border-indigo-400 placeholder:text-slate-400"
                    />
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 font-bold px-6 py-2.5 rounded-xl text-xs transition-all"
                  >
                    Cancel
                  </button>
                  
                  <button
                    type="submit"
                    className="bg-[#2B95A3] hover:bg-[#237B87] text-white font-extrabold px-7 py-2.5 rounded-xl text-xs uppercase tracking-wider shadow-md transition-all"
                  >
                    Publish Post
                  </button>
                </div>

              </form>
            ) : (
              <div className="p-6 sm:p-10 space-y-6 max-h-[80vh] overflow-y-auto bg-[#FAFAFC]">
                <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                  <span className="bg-[#6D28D9] text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase">
                    {form.category || 'PRESS RELEASE'}
                  </span>
                  <span className="text-xs font-semibold text-slate-500">{form.date} • {form.location}</span>
                </div>

                <h1 className="text-2xl sm:text-4xl font-extrabold text-[#0F172A]">
                  {form.title || 'Untitled Post'}
                </h1>

                {form.summary && (
                  <p className="text-sm sm:text-base text-slate-600 border-l-2 border-[#6D28D9] pl-3 italic">
                    {form.summary}
                  </p>
                )}

                {ytEmbed ? (
                  <div className="rounded-2xl overflow-hidden shadow-lg aspect-video bg-black">
                    <iframe
                      src={ytEmbed}
                      title="YouTube preview"
                      className="w-full h-full border-0"
                      allowFullScreen
                    ></iframe>
                  </div>
                ) : form.image ? (
                  <img src={form.image} alt="Preview" className="w-full h-[320px] object-cover rounded-2xl shadow-md" />
                ) : null}

                <div
                  className="prose prose-purple max-w-none text-xs sm:text-sm text-slate-700 space-y-4 pt-4 border-t border-slate-200"
                  dangerouslySetInnerHTML={{ __html: form.content || '<p class="text-slate-400">Write content to preview...</p>' }}
                />
              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
}
