import React, { useState } from 'react';
import { ToggleLeft, ToggleRight, Plus, Pencil, Trash, Lock, FileText, Settings, LogOut, ArrowRight, Eye, ShieldAlert, X } from 'lucide-react';

export default function Admin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Ad toggle states
  const [adsEnabled, setAdsEnabled] = useState(() => {
    return localStorage.getItem('digitexa_ads_enabled') !== 'false';
  });

  // Blog CRUD states
  const [blogs, setBlogs] = useState(() => {
    const saved = localStorage.getItem('digitexa_blogs');
    if (saved) return JSON.parse(saved);
    // If not visited blogs page first, returns empty or we load initial schema
    return [];
  });

  // Editor Modal States
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingPost, setEditingPost] = useState(null);
  const [formTitle, setFormTitle] = useState('');
  const [formExcerpt, setFormExcerpt] = useState('');
  const [formCategory, setFormCategory] = useState('AI Automation');
  const [formReadTime, setFormReadTime] = useState('4 min read');
  const [formAuthor, setFormAuthor] = useState('Sanjeev Kumar');
  const [formContent, setFormContent] = useState('');
  
  // Tab Management
  const [activeTab, setActiveTab] = useState('blogs'); // blogs, settings

  const handleLogin = (e) => {
    e.preventDefault();
    // Validate credentials
    if (username === 'admin' && password === 'admin@digitexa2026') {
      setIsLoggedIn(true);
      setError('');
      // Reload blogs database to get current localStorage values
      const currentBlogs = JSON.parse(localStorage.getItem('digitexa_blogs') || '[]');
      setBlogs(currentBlogs);
    } else {
      setError('Invalid username or password.');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  const handleToggleAds = () => {
    const nextVal = !adsEnabled;
    setAdsEnabled(nextVal);
    localStorage.setItem('digitexa_ads_enabled', nextVal ? 'true' : 'false');
  };

  const handleOpenNewPost = () => {
    setEditingPost(null);
    setFormTitle('');
    setFormExcerpt('');
    setFormCategory('AI Automation');
    setFormReadTime('4 min read');
    setFormAuthor('Sanjeev Kumar');
    setFormContent('<p>Write your article paragraphs here...</p>\n<!-- ad -->\n<h2>Section Header</h2>\n<p>Write rest of article here...</p>');
    setIsFormOpen(true);
  };

  const handleOpenEditPost = (post) => {
    setEditingPost(post);
    setFormTitle(post.title);
    setFormExcerpt(post.excerpt);
    setFormCategory(post.category);
    setFormReadTime(post.readTime);
    setFormAuthor(post.author);
    setFormContent(post.contentRaw || '');
    setIsFormOpen(true);
  };

  const handleSavePost = (e) => {
    e.preventDefault();
    if (!formTitle || !formExcerpt || !formContent) {
      alert("Please fill in Title, Excerpt, and Article Content.");
      return;
    }

    let updatedBlogs = [...blogs];

    if (editingPost) {
      // Edit mode
      updatedBlogs = updatedBlogs.map((b) => {
        if (b.id === editingPost.id) {
          return {
            ...b,
            title: formTitle,
            excerpt: formExcerpt,
            category: formCategory,
            readTime: formReadTime,
            author: formAuthor,
            contentRaw: formContent
          };
        }
        return b;
      });
    } else {
      // Create mode
      const newId = blogs.length > 0 ? Math.max(...blogs.map(b => b.id)) + 1 : 1;
      const newPost = {
        id: newId,
        title: formTitle,
        excerpt: formExcerpt,
        category: formCategory,
        readTime: formReadTime,
        author: formAuthor,
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        contentRaw: formContent
      };
      updatedBlogs = [newPost, ...updatedBlogs];
    }

    setBlogs(updatedBlogs);
    localStorage.setItem('digitexa_blogs', JSON.stringify(updatedBlogs));
    setIsFormOpen(false);
    setEditingPost(null);
  };

  const handleDeletePost = (id) => {
    if (window.confirm("Are you sure you want to permanently delete this blog article?")) {
      const updatedBlogs = blogs.filter(b => b.id !== id);
      setBlogs(updatedBlogs);
      localStorage.setItem('digitexa_blogs', JSON.stringify(updatedBlogs));
    }
  };

  // If not logged in, render the secure authentication gate
  if (!isLoggedIn) {
    return (
      <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '70vh', padding: '40px 24px' }}>
        <div className="glass-card login-card animate-fade-in" style={{ width: '100%', maxWidth: '420px', padding: '40px' }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <div className="login-icon-circle">
              <Lock size={28} />
            </div>
            <h2 className="gradient-text" style={{ fontSize: '1.75rem', marginBottom: '8px' }}>Admin Login</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Digitexa AI Infrastructure Panel</p>
          </div>

          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <label htmlFor="username" style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', marginBottom: '8px', color: 'var(--text-secondary)' }}>
                Username
              </label>
              <input
                id="username"
                type="text"
                className="form-input"
                placeholder="Enter admin username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="password" style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', marginBottom: '8px', color: 'var(--text-secondary)' }}>
                Password
              </label>
              <input
                id="password"
                type="password"
                className="form-input"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {error && (
              <div className="login-error-box animate-fade-in">
                <ShieldAlert size={16} />
                <span>{error}</span>
              </div>
            )}

            <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '14px', marginTop: '10px' }}>
              Verify Identity
              <ArrowRight size={18} />
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Admin Panel Dashboard view once authenticated
  return (
    <div className="container animate-fade-in" style={{ paddingBottom: '80px' }}>
      <div className="admin-header-row">
        <div>
          <div className="admin-badge">COCKPIT CONSOLE</div>
          <h1 className="admin-title">Digitexa Control Center</h1>
        </div>
        <button onClick={handleLogout} className="admin-logout-btn">
          <LogOut size={16} />
          Sign Out
        </button>
      </div>

      <div className="admin-layout">
        {/* Sidebar Nav */}
        <aside className="admin-nav-sidebar glass-card">
          <button 
            onClick={() => setActiveTab('blogs')} 
            className={`admin-sidebar-link ${activeTab === 'blogs' ? 'active' : ''}`}
          >
            <FileText size={18} />
            Manage Blogs
          </button>
          <button 
            onClick={() => setActiveTab('settings')} 
            className={`admin-sidebar-link ${activeTab === 'settings' ? 'active' : ''}`}
          >
            <Settings size={18} />
            Ad Control Room
          </button>
          <div className="admin-sidebar-footer">
            <span style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>Logged in as admin</span>
          </div>
        </aside>

        {/* Dashboard Panels */}
        <main className="admin-main-panel">
          {activeTab === 'blogs' ? (
            <div className="glass-card panel-card animate-fade-in">
              <div className="panel-header-row">
                <h3>Articles Repository ({blogs.length})</h3>
                <button onClick={handleOpenNewPost} className="btn btn-primary btn-new-post">
                  <Plus size={16} />
                  Write Article
                </button>
              </div>

              {blogs.length > 0 ? (
                <div className="admin-table-wrap">
                  <table className="admin-blogs-table">
                    <thead>
                      <tr>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Date</th>
                        <th>Author</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {blogs.map((post) => (
                        <tr key={post.id}>
                          <td style={{ fontWeight: '600', color: 'var(--text-primary)' }}>{post.title}</td>
                          <td>
                            <span className="admin-category-tag">{post.category}</span>
                          </td>
                          <td>{post.date}</td>
                          <td>{post.author}</td>
                          <td>
                            <div className="table-actions">
                              <button 
                                onClick={() => handleOpenEditPost(post)} 
                                className="table-btn-edit" 
                                title="Edit Post"
                              >
                                <Pencil size={14} />
                              </button>
                              <button 
                                onClick={() => handleDeletePost(post.id)} 
                                className="table-btn-delete" 
                                title="Delete Post"
                              >
                                <Trash size={14} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div style={{ padding: '60px 20px', textAlign: 'center', color: 'var(--text-secondary)' }}>
                  <h4>No custom articles in storage.</h4>
                  <p style={{ fontSize: '0.85rem', marginTop: '8px' }}>Please visit the client-facing Blog page first to populate default articles, or write a new one here.</p>
                </div>
              )}
            </div>
          ) : (
            <div className="glass-card panel-card animate-fade-in">
              <div className="panel-header-row" style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '16px' }}>
                <h3>Global Advertising Controls</h3>
              </div>

              <div style={{ padding: '24px 0', display: 'flex', flexDirection: 'column', gap: '32px' }}>
                <div className="settings-toggle-row">
                  <div className="settings-desc">
                    <h4>Enable Google AdSense Sections</h4>
                    <p>Toggle this master switch to display or collapse all Leaderboard, Skyscraper, and native Rectangle simulated ads across the website blogs grid and modal readers.</p>
                  </div>
                  <button 
                    onClick={handleToggleAds} 
                    className={`toggle-switch-btn ${adsEnabled ? 'active' : ''}`}
                    aria-label="Toggle AdSense Sections"
                  >
                    {adsEnabled ? <ToggleRight size={44} className="toggle-icon-on" /> : <ToggleLeft size={44} className="toggle-icon-off" />}
                  </button>
                </div>

                <div className="settings-status-box" style={{ borderColor: adsEnabled ? 'var(--border-glow)' : 'var(--border-color)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div className={`status-dot ${adsEnabled ? 'active' : ''}`}></div>
                    <div>
                      <strong>System Status: {adsEnabled ? 'ADS LIVE' : 'ADS INACTIVE'}</strong>
                      <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
                        {adsEnabled 
                          ? 'Ad units are currently active in headers, sidebars, and reader modals.' 
                          : 'Ad units are blocked. Slots are collapsed and hidden from visitors.'
                        }
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Write/Edit Blog Modal Form */}
      {isFormOpen && (
        <div className="modal-overlay" style={{ zIndex: 10000 }}>
          <div className="glass-card modal-content admin-editor-modal animate-fade-in-up" style={{ maxWidth: '850px', maxHeight: '90vh' }}>
            <button onClick={() => setIsFormOpen(false)} className="modal-close-btn" style={{ position: 'absolute', top: '16px', right: '16px', marginTop: '0', marginBottom: '0' }}>
              <X size={20} />
            </button>

            <h3 style={{ fontSize: '1.5rem', marginBottom: '24px' }}>
              {editingPost ? 'Edit Blog Article' : 'Write New Blog Article'}
            </h3>

            <form onSubmit={handleSavePost} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div className="form-row-2">
                <div style={{ flex: 1 }}>
                  <label className="admin-form-label">Article Title</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="e.g. 7 Best AI Automation Tools..."
                    value={formTitle}
                    onChange={(e) => setFormTitle(e.target.value)}
                    required
                  />
                </div>
                <div style={{ width: '220px' }}>
                  <label className="admin-form-label">Category</label>
                  <select
                    className="form-input"
                    value={formCategory}
                    onChange={(e) => setFormCategory(e.target.value)}
                  >
                    <option value="AI Automation">AI Automation</option>
                    <option value="IT Infrastructure">IT Infrastructure</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="Website Solutions">Website Solutions</option>
                    <option value="AI Tools">AI Tools</option>
                  </select>
                </div>
              </div>

              <div className="form-row-3">
                <div style={{ flex: 1 }}>
                  <label className="admin-form-label">Excerpt Description</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Short summary for the index card view..."
                    value={formExcerpt}
                    onChange={(e) => setFormExcerpt(e.target.value)}
                    required
                  />
                </div>
                <div style={{ width: '150px' }}>
                  <label className="admin-form-label">Read Time</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="e.g. 4 min read"
                    value={formReadTime}
                    onChange={(e) => setFormReadTime(e.target.value)}
                    required
                  />
                </div>
                <div style={{ width: '180px' }}>
                  <label className="admin-form-label">Author Name</label>
                  <input
                    type="text"
                    className="form-input"
                    value={formAuthor}
                    onChange={(e) => setFormAuthor(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div>
                <label className="admin-form-label" style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Article Content (HTML supported)</span>
                  <span style={{ color: 'var(--accent-primary)', fontSize: '0.75rem', fontWeight: 'normal' }}>Use &lt;!-- ad --&gt; to place in-article ad slot</span>
                </label>
                <textarea
                  className="form-input"
                  style={{ minHeight: '300px', fontFamily: 'monospace', fontSize: '0.85rem', lineHeight: '1.5' }}
                  placeholder="<p>Write your article paragraphs...</p>"
                  value={formContent}
                  onChange={(e) => setFormContent(e.target.value)}
                  required
                />
              </div>

              <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', marginTop: '12px' }}>
                <button type="button" onClick={() => setIsFormOpen(false)} className="btn btn-secondary" style={{ padding: '10px 20px' }}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary" style={{ padding: '10px 24px' }}>
                  Save and Publish
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
