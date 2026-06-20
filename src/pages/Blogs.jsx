import React, { useState, useEffect } from 'react';
import { Calendar, User, Clock, ArrowRight, X, Share2, MessageCircle, Search } from 'lucide-react';
import AdSenseAd from '../components/AdSenseAd';

export default function Blogs() {
  const [activeArticle, setActiveArticle] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [scrollPercent, setScrollPercent] = useState(0);

  // Synchronize articles state with localStorage
  const [articles, setArticles] = useState(() => {
    const saved = localStorage.getItem('digitexa_blogs');
    if (saved) {
      return JSON.parse(saved);
    } else {
      const initialBlogs = [
        {
          id: 1,
          title: "7 Best AI Automation Tools Powering Modern Businesses",
          excerpt: "Most days at work aren't hard—they're just repetitive. Copy this, paste that, update a sheet, send the same email. AI automation steps into these small moments...",
          date: "Dec 25, 2025",
          author: "Sanjeev Kumar",
          readTime: "4 min read",
          category: "AI Automation",
          contentRaw: `<p>Most days at work aren’t hard—they’re just repetitive. Copy this, paste that, follow up, update a sheet, send the same email again. AI automation steps into these small moments, not to impress, but to help. When used well, it quietly takes work off your plate and gives your time back where it belongs.</p>
<h2>1. Zapier – The Silent Worker of Automation</h2>
<p>If you think about the backbone of AI automation, that is Zapier. It connects thousands of apps to talk to each other without a single line of code. With simple AI steps, logic paths, and filters, Zapier acts like a lightweight automation brain.</p>
<p><strong>Why is it powerful?</strong></p>
<ul>
  <li>Connects 6,000+ apps seamlessly.</li>
  <li>Handles multi-step workflows with strict conditions.</li>
  <li>AI-powered actions for content drafting, summarization, and lead routing.</li>
</ul>
<!-- ad -->
<h2>2. Make (Formerly Integromat) – For Total Flow Control</h2>
<p>Make is what power users graduate to when Zapier feels too linear. It’s highly visual, flexible, and lets you build deeply customized automation flows. If Zapier is building with blocks, Make is a full workshop with tools on the wall.</p>
<p><strong>Why is it powerful?</strong></p>
<ul>
  <li>Visual flow builder with branching paths and loops.</li>
  <li>Excellent API mapping and raw HTTP JSON handling.</li>
  <li>Strong error management and fallback route logs.</li>
</ul>
<h2>3. UiPath – Enterprise-Grade RPA</h2>
<p>UiPath plays in a different league. This is Robotic Process Automation (RPA) for enterprises that rely on legacy desktop software, spreadsheets, scanned PDFs, and human-heavy workflows. Banks, insurance agencies, and hospitals use UiPath because it automates what APIs cannot reach.</p>`
        },
        {
          id: 2,
          title: "AI-Powered Content Marketing and Strategy",
          excerpt: "Content marketing is undergoing a massive shift. With large language models, teams can generate outline concepts, copy, and SEO schemas in fractions of the time...",
          date: "Dec 23, 2025",
          author: "Sanjeev Kumar",
          readTime: "5 min read",
          category: "Digital Marketing",
          contentRaw: `<p>Content marketing is undergoing a major technological shift. Traditional content models that rely entirely on slow, manual drafting are struggling to keep up. By pairing human insights with AI operations, teams can publish research-backed content faster while improving their search visibility.</p>
<h2>SEO Optimization & Semantic Structuring</h2>
<p>Search engines do not just read words; they analyze search intent and semantic relationships. AI tools help analyze top rankings and generate structured HTML outline briefs, showing you exactly what questions your content must answer to satisfy users.</p>
<!-- ad -->
<h2>Personalized Content Scaling</h2>
<p>Instead of writing a single generic post, marketing teams use AI to repackage primary content into multiple tailored formats: newsletter digests, social media threads, slide decks, and detailed email courses.</p>
<h2>Key Strategy Focus Areas:</h2>
<ul>
  <li><strong>Keyword Clustered Outlines:</strong> Identify and target keyword hubs rather than single terms.</li>
  <li><strong>JSON-LD Schema Automation:</strong> Make your site visible to search crawlers using structured review, product, and blog schemas.</li>
  <li><strong>Editorial Quality Controls:</strong> Keep the human review loop solid. Use AI for drafts and structuring, but rely on human editing for accuracy, voice, and unique research insights.</li>
</ul>`
        },
        {
          id: 3,
          title: "These Are the Top 10 AI Tools People Use Every Day",
          excerpt: "Beyond the ChatGPT headlines, there is an entire ecosystem of AI tools that have integrated into regular business operations and daily personal routines...",
          date: "Dec 22, 2025",
          author: "Sanjeev Kumar",
          readTime: "3 min read",
          category: "AI Tools",
          contentRaw: `<p>Beyond the primary news headlines, an array of utility tools have become standard parts of modern daily operations. These tools go beyond chat prompts to offer direct help with audio cleanups, interface designs, code assistance, and document summaries.</p>
<h2>The Top 10 Everyday AI List:</h2>
<ol>
  <li><strong>ChatGPT (OpenAI):</strong> The default conversational interface for brainstorming, coding, and text editing.</li>
  <li><strong>Claude (Anthropic):</strong> Preferred by developers and writers for complex logical reasoning, code reviews, and long-document analysis.</li>
  <li><strong>v0 by Vercel:</strong> Generates beautiful, responsive frontend UI code from simple descriptive prompts.</li>
  <li><strong>Midjourney:</strong> High-fidelity image and asset creation for mockups, campaigns, and social media visuals.</li>
</ol>
<!-- ad -->
<ol start="5">
  <li><strong>ElevenLabs:</strong> Industry-standard natural text-to-speech audio rendering.</li>
  <li><strong>Perplexity AI:</strong> Conversational search engine providing real-time references and citations.</li>
  <li><strong>Cursor Code Editor:</strong> An AI-first code editor that speeds up development through contextual codebase auto-completes.</li>
  <li><strong>Descript:</strong> Text-based video and audio editing that transcribes content and allows editing media by modifying text.</li>
</ol>`
        },
        {
          id: 4,
          title: "Building Secure OT Networks: Isolating Factory Floors from Cyber Threats",
          excerpt: "Industrial manufacturing plants run on Operational Technology (OT) networks. Securing these environments requires strict firewall rules, DMZ configurations...",
          date: "Dec 18, 2025",
          author: "Sanjeev Kumar",
          readTime: "6 min read",
          category: "IT Infrastructure",
          contentRaw: `<p>Industrial manufacturing plants run on Operational Technology (OT) networks that connect PLCs, SCADA databases, and assembly lines. While historically air-gapped, modern telemetry demands connecting OT to corporate IT, exposing plant floors to serious cyber threats. Securing these environments requires strict containment schemes.</p>
<h2>1. Establishing the OT Demilitarized Zone (DMZ)</h2>
<p>You should never allow direct packet routing between your corporate office IT and your production plant OT. A secure DMZ acts as a buffer zone. Server databases in the DMZ collect manufacturing data and transfer it to the corporate network, keeping the plant network completely hidden.</p>
<!-- ad -->
<h2>2. Network Micro-Segmentation</h2>
<p>In a standard warehouse network, once a malicious entity gains entry, it can access any endpoint. Micro-segmentation breaks the network down into isolated segments (cells). A compromised device on one conveyor belt cannot connect to or damage the assembly lines in another building.</p>
<h2>3. Secure Remote Support Gateways</h2>
<p>Vendors and technicians often require remote portal access to update PLC software. Avoid legacy TeamViewer setups. Utilize hardware-enforced MFA gateways that session-log remote connections, automatically timing out sessions after work completes.</p>`
        },
        {
          id: 5,
          title: "How Custom Responsive Web Apps Direct Commercial Growth",
          excerpt: "Building high-performance custom websites in React is not just about aesthetics. Learn how light bundles, semantic tags, and fast layouts convert readers to leads...",
          date: "Dec 15, 2025",
          author: "Sanjeev Kumar",
          readTime: "4 min read",
          category: "Website Solutions",
          contentRaw: `<p>In web design, a delay of just one second can drop conversions by over 20%. Custom responsive websites built with clean codebase frameworks are not just vanity projects; they are foundational pipelines that directly drive inbound sales and user retention.</p>
<h2>Optimizing the Critical Rendering Path</h2>
<p>Standard builder platforms inject massive JS packages that delay page loads. Custom React/Vite builds ship minimal CSS and static assets. The browser displays visual grids instantly, retaining users who would otherwise navigate away.</p>
<!-- ad -->
<h2>Mobile-First Elastic Grids</h2>
<p>Over 60% of commercial traffic initiates on smartphones. A layout that breaks on mobile destroys brand credibility. By designing custom elastic flex elements rather than heavy framework columns, your pages adjust seamlessly, providing readable and accessible contact CTAs.</p>
<h2>SEO Indexing & Metadata Integrations</h2>
<p>Search crawlers prefer semantic HTML5 tags (header, main, section, footer) and JSON-LD schema blocks. Standard builder packages structure pages using nested div chains, obscuring critical metadata. Clean custom markup allows search engines to categorize your services easily, increasing organic traffic.</p>`
        },
        {
          id: 6,
          title: "The 2026 Blueprint for Search Engine Optimization and Domain Authority",
          excerpt: "Search engine algorithms are shifting toward search intent satisfaction and expert authority. Here is how to structure content that ranks on search pages...",
          date: "Dec 10, 2025",
          author: "Sanjeev Kumar",
          readTime: "5 min read",
          category: "Digital Marketing",
          contentRaw: `<p>Search algorithms are moving past simple keyword density checks. Modern search engines evaluate user search intent, semantic clusters, and verified expert author credentials. Here is the framework for structuring search-visible articles in 2026.</p>
<h2>1. Targeting Semantic Intent over Search Keywords</h2>
<p>Writing three separate articles for slightly different search terms creates self-competition (keyword cannibalization). Create comprehensive master hubs that answer multiple related search queries in a clear, structured format.</p>
<!-- ad -->
<h2>2. Meeting Google E-E-A-T Quality Guidelines</h2>
<p>To rank well in highly competitive industries, your site must showcase Experience, Expertise, Authoritativeness, and Trustworthiness (E-E-A-T). You can build authority by including detailed biographical author boxes, linking to external expert profiles, and adding structured schema code.</p>
<h2>3. Dynamic XML Sitemaps and Real-time Search Indexing</h2>
<p>Publishing content is only useful if search crawlers can find it. By maintaining clean, lightweight XML sitemaps and immediately pinging API indexes upon publishing, search engines can index your articles in seconds, capturing trending search queries before your competitors do.</p>`
        }
      ];
      localStorage.setItem('digitexa_blogs', JSON.stringify(initialBlogs));
      return initialBlogs;
    }
  });

  // Pull latest updates on mount (in case changed in admin tab)
  useEffect(() => {
    const saved = localStorage.getItem('digitexa_blogs');
    if (saved) {
      setArticles(JSON.parse(saved));
    }
  }, []);

  // Helper lists
  const categories = ["All", "AI Automation", "IT Infrastructure", "Digital Marketing", "Website Solutions", "AI Tools"];

  // Open/Close handlers
  const handleOpenArticle = (art) => {
    setActiveArticle(art);
    setScrollPercent(0);
    document.body.style.overflow = 'hidden'; // Lock background scrolling
  };

  const handleCloseArticle = () => {
    setActiveArticle(null);
    document.body.style.overflow = 'auto'; // Restore scrolling
  };

  // Modal scroll progress tracker
  const handleModalScroll = (e) => {
    const target = e.target;
    const scrollTop = target.scrollTop;
    const scrollHeight = target.scrollHeight - target.clientHeight;
    if (scrollHeight > 0) {
      const pct = (scrollTop / scrollHeight) * 100;
      setScrollPercent(pct);
    }
  };

  // Content string parser that dynamically splits at <!-- ad --> to insert rectangle ad block
  const renderArticleContent = (contentString) => {
    if (!contentString) return null;
    const parts = contentString.split('<!-- ad -->');
    if (parts.length > 1) {
      return (
        <>
          <div dangerouslySetInnerHTML={{ __html: parts[0] }} />
          <AdSenseAd simulatedType="rectangle" slot="dynamic-mid-article" />
          <div dangerouslySetInnerHTML={{ __html: parts[1] }} />
        </>
      );
    }
    return <div dangerouslySetInnerHTML={{ __html: contentString }} />;
  };

  // Filtering Logic
  const filteredArticles = articles.filter((art) => {
    const matchesCategory = selectedCategory === "All" || art.category === selectedCategory;
    const matchesSearch = 
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      art.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="container animate-fade-in" style={{ paddingBottom: '60px' }}>
      {/* Page Title Header */}
      <div className="section-title-wrap">
        <div className="hero-tagline">Company Insights</div>
        <h1 className="section-title">Knowledge Base & Blog</h1>
        <p className="section-desc">
          Stay ahead of the curve with expert guides on network configurations, web optimizations, system automations, and search engines.
        </p>
      </div>

      {/* Top Leaderboard Ad Slot */}
      <AdSenseAd simulatedType="leaderboard" slot="1234567890" />

      {/* Two-Column Layout Wrapper */}
      <div className="blog-layout-wrapper">
        
        {/* Left Column: Feed Content */}
        <div className="blog-feed-container">
          {/* Category Navigation Filter Chips */}
          <div className="category-chips-list" style={{ marginBottom: '24px' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`category-chip ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {filteredArticles.length > 0 ? (
            <div className="blogs-grid">
              {filteredArticles.map((art) => (
                <div 
                  key={art.id} 
                  className="glass-card blog-card" 
                  onClick={() => handleOpenArticle(art)}
                >
                  <div className="blog-img-placeholder">
                    {art.category}
                  </div>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <span className="blog-category" style={{ color: 'var(--accent-primary)', fontWeight: '700' }}>
                        {art.category}
                      </span>
                      <span>•</span>
                      <span>{art.date}</span>
                    </div>
                    <h3>{art.title}</h3>
                    <p>{art.excerpt}</p>
                    <div className="blog-read-more">
                      Read Article
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="glass-card" style={{ padding: '40px', textAlign: 'center', color: 'var(--text-secondary)' }}>
              <h3>No articles found matching "{searchQuery}"</h3>
              <p style={{ marginTop: '10px' }}>Try resetting your category filter or search query words.</p>
              <button 
                type="button" 
                className="btn btn-primary" 
                style={{ marginTop: '20px', padding: '8px 24px', fontSize: '0.85rem' }}
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>

        {/* Right Column: Sticky Sidebar */}
        <aside className="blog-sidebar">
          
          {/* Search Box Widget */}
          <div className="glass-card sidebar-widget">
            <h4>Search Base</h4>
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
              <input
                type="text"
                className="search-widget-input"
                placeholder="Type keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search size={18} style={{ position: 'absolute', right: '12px', color: 'var(--text-tertiary)' }} />
            </div>
          </div>

          {/* Vertical Skyscraper Ad Widget */}
          <div className="glass-card sidebar-widget" style={{ padding: '12px', display: 'flex', justifyContent: 'center' }}>
            <AdSenseAd simulatedType="skyscraper" slot="9876543210" />
          </div>

          {/* Recent Articles Widget */}
          <div className="glass-card sidebar-widget">
            <h4>Recent Posts</h4>
            <div className="recent-posts-list">
              {articles.slice(0, 4).map((art) => (
                <div 
                  key={art.id} 
                  className="recent-post-item"
                  onClick={() => handleOpenArticle(art)}
                >
                  <div className="recent-post-thumb">
                    {art.category.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="recent-post-details">
                    <div className="recent-post-title">{art.title}</div>
                    <div className="recent-post-date">{art.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </aside>
      </div>

      {/* Bottom Large Horizontal Ad Slot */}
      <AdSenseAd simulatedType="leaderboard" slot="1122334455" />

      {/* Blog Article Reader Modal */}
      {activeArticle && (
        <div className="modal-overlay" onClick={handleCloseArticle}>
          <div 
            className="glass-card modal-content" 
            onClick={(e) => e.stopPropagation()} 
            onScroll={handleModalScroll}
          >
            {/* Dynamic Reading Progress Bar */}
            <div className="reading-progress-container">
              <div 
                className="reading-progress-bar" 
                style={{ width: `${scrollPercent}%` }}
              ></div>
            </div>

            {/* Sticky Close Icon */}
            <button 
              type="button"
              className="modal-close-btn" 
              onClick={handleCloseArticle}
              title="Close Reader"
            >
              <X size={20} />
            </button>

            {/* Modal Header */}
            <div className="blog-reader-header">
              <span style={{ display: 'inline-block', padding: '4px 12px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: '700', backgroundColor: 'var(--bg-tertiary)', color: 'var(--accent-primary)', marginBottom: '16px' }}>
                {activeArticle.category}
              </span>
              <h2 className="blog-reader-title">{activeArticle.title}</h2>
              <div className="blog-reader-meta">
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <User size={16} />
                  <span>{activeArticle.author}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Calendar size={16} />
                  <span>{activeArticle.date}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Clock size={16} />
                  <span>{activeArticle.readTime}</span>
                </div>
              </div>
            </div>

            {/* Modal Body (Contains dynamic html render and ads) */}
            <div className="blog-reader-body">
              {renderArticleContent(activeArticle.contentRaw)}
            </div>

            {/* E-E-A-T Compliance Author Profile Box */}
            <div className="author-profile-card">
              <div className="author-avatar">
                {activeArticle.author.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="author-info">
                <div className="author-name-tag">
                  {activeArticle.author}
                  <span className="author-title-badge">Verified Expert</span>
                </div>
                <p className="author-bio">
                  {activeArticle.author} is a senior writer and developer with the Digitexa Technical Desk. Over the past decade, he has published extensive research on enterprise cloud virtualization, system isolation, and organic web-search content structures.
                </p>
              </div>
            </div>

            {/* Modal Footer actions */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '40px', paddingTop: '24px', borderTop: '1px solid var(--border-color)', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              <div style={{ display: 'flex', gap: '16px' }}>
                <button 
                  type="button"
                  style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'none', border: 'none', cursor: 'pointer', color: 'inherit' }}
                  onClick={() => alert(`Shared URL for: ${activeArticle.title}`)}
                >
                  <Share2 size={16} /> Share
                </button>
                <button 
                  type="button"
                  style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'none', border: 'none', cursor: 'pointer', color: 'inherit' }}
                  onClick={() => alert('Comments system loading...')}
                >
                  <MessageCircle size={16} /> Comment
                </button>
              </div>
              <span>Digitexa AI © 2026</span>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}

