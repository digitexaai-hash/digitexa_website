import React, { useState } from 'react';
import { Megaphone, Search, Share2, Compass, CheckCircle2, TrendingUp, ShoppingCart, Play, MapPin } from 'lucide-react';

export default function DigitalMarketing() {
  const [selectedChart, setSelectedChart] = useState('ctr');

  // Chart paths
  const chartsData = {
    ctr: {
      path: "M 50 250 L 150 210 L 250 180 L 350 120 L 450 70 L 550 40",
      points: [
        { x: 50, y: 250, val: "1.2%" },
        { x: 150, y: 210, val: "1.8%" },
        { x: 250, y: 180, val: "2.5%" },
        { x: 350, y: 120, val: "4.1%" },
        { x: 450, y: 70, val: "5.8%" },
        { x: 550, y: 40, val: "7.4%" }
      ],
      color: "#3b82f6",
      desc: "Simulated Organic Click-Through Rate (CTR) improvement over 6 months using AI structured snippets & search console enhancements."
    },
    leads: {
      path: "M 50 240 L 150 230 L 250 170 L 350 130 L 450 85 L 550 30",
      points: [
        { x: 50, y: 240, val: "120" },
        { x: 150, y: 230, val: "145" },
        { x: 250, y: 170, val: "280" },
        { x: 350, y: 130, val: "410" },
        { x: 450, y: 85, val: "630" },
        { x: 550, y: 30, val: "890" }
      ],
      color: "#10b981",
      desc: "Simulated monthly inbound marketing qualified leads (MQLs) generated using targeted paid traffic and automated drip campaigns."
    }
  };

  return (
    <div className="container animate-fade-in">
      <section className="hero-grid" style={{ marginBottom: '60px' }}>
        <div className="hero-section">
          <div className="hero-tagline">Marketing Services</div>
          <h1 className="section-title" style={{ fontSize: '2.75rem' }}>Digital Marketing <br /><span className="gradient-text">Solutions</span></h1>
          <p className="section-desc" style={{ marginLeft: 0 }}>
            Strategic growth services engineered to acquire, engage, and retain customers through data-backed methodologies.
          </p>
        </div>
        <div className="glass-card" style={{ padding: '32px', textAlign: 'center', border: '1px solid var(--border-glow)' }}>
          <div style={{ background: 'linear-gradient(135deg, #ec4899, #8b5cf6)', borderRadius: '16px', width: '72px', height: '72px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', margin: '0 auto 20px' }}>
            <Megaphone size={32} />
          </div>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>Data-Driven Approach</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
            <span style={{ padding: '6px 14px', borderRadius: '6px', fontSize: '0.8rem', fontWeight: '700', backgroundColor: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}>SEO</span>
            <span style={{ padding: '6px 14px', borderRadius: '6px', fontSize: '0.8rem', fontWeight: '700', backgroundColor: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}>PPC</span>
            <span style={{ padding: '6px 14px', borderRadius: '6px', fontSize: '0.8rem', fontWeight: '700', backgroundColor: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}>Social Media</span>
            <span style={{ padding: '6px 14px', borderRadius: '6px', fontSize: '0.8rem', fontWeight: '700', backgroundColor: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}>Content</span>
            <span style={{ padding: '6px 14px', borderRadius: '6px', fontSize: '0.8rem', fontWeight: '700', backgroundColor: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}>Analytics</span>
            <span style={{ padding: '6px 14px', borderRadius: '6px', fontSize: '0.8rem', fontWeight: '700', backgroundColor: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}>Conversion</span>
          </div>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '20px' }}>Every campaign is built on measurable KPIs, real-time tracking, and continuous optimization.</p>
        </div>
      </section>

      {/* Services breakdown grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px', marginBottom: '60px' }}>
        {/* Item 1 */}
        <div className="glass-card" style={{ padding: '32px', textAlign: 'left' }}>
          <div className="service-icon-wrap" style={{ color: '#3b82f6' }}>
            <Search size={24} />
          </div>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Search Engine Optimization</h3>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            We perform deep keyword mapping, optimize page title hierarchies, configure rank-ready schemas, and boost web performance to reach organic rankings.
          </p>
        </div>

        {/* Item 2 */}
        <div className="glass-card" style={{ padding: '32px', textAlign: 'left' }}>
          <div className="service-icon-wrap" style={{ color: '#10b981' }}>
            <TrendingUp size={24} />
          </div>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Performance Marketing</h3>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            Set up and manage search and social paid campaigns (Google, Meta, LinkedIn). Built on rigid conversion-tracking algorithms to maximize ROI.
          </p>
        </div>

        {/* Item 3 */}
        <div className="glass-card" style={{ padding: '32px', textAlign: 'left' }}>
          <div className="service-icon-wrap" style={{ color: '#6366f1' }}>
            <Share2 size={24} />
          </div>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Social Media & Brand</h3>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            Develop structured organic social content strategies that build a community around your product, establishing authority and brand loyalty.
          </p>
        </div>

        {/* Item 4 */}
        <div className="glass-card" style={{ padding: '32px', textAlign: 'left' }}>
          <div className="service-icon-wrap" style={{ color: '#ec4899' }}>
            <Compass size={24} />
          </div>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Content Operations</h3>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            Create data-informed articles, newsletters, and copy funnels written to convert readers into brand advocates.
          </p>
        </div>
      </div>

      {/* Google Marketing Services */}
      <div style={{ marginBottom: '60px' }}>
        <div className="section-title-wrap" style={{ padding: 0, marginBottom: '32px' }}>
          <h2 className="section-title">Google Marketing Services</h2>
          <p className="section-desc">
            Full-spectrum Google solutions to maximize your online visibility and drive measurable results.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
          <div className="glass-card" style={{ padding: '32px', textAlign: 'left' }}>
            <div className="service-icon-wrap" style={{ color: '#4285F4' }}>
              <Search size={24} />
            </div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Google Ads (Search & Display)</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              Targeted search and display campaigns engineered to capture high-intent traffic across the Google Network with optimized bidding and ad extensions.
            </p>
          </div>

          <div className="glass-card" style={{ padding: '32px', textAlign: 'left' }}>
            <div className="service-icon-wrap" style={{ color: '#4285F4' }}>
              <Megaphone size={24} />
            </div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Google Business Profile</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              Optimize and manage your Google Business Profile to appear in local search results and Google Maps, driving foot traffic and local inquiries.
            </p>
          </div>

          <div className="glass-card" style={{ padding: '32px', textAlign: 'left' }}>
            <div className="service-icon-wrap" style={{ color: '#4285F4' }}>
              <TrendingUp size={24} />
            </div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Google Analytics & Tag Manager</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              Implement precise tracking setups with GA4 and GTM to measure campaign performance, user behavior, and conversion events with accuracy.
            </p>
          </div>

          <div className="glass-card" style={{ padding: '32px', textAlign: 'left' }}>
            <div className="service-icon-wrap" style={{ color: '#4285F4' }}>
              <ShoppingCart size={24} />
            </div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Google Shopping Ads</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              Showcase your products directly in search results with optimized product feeds, Merchant Center management, and smart shopping campaigns.
            </p>
          </div>

          <div className="glass-card" style={{ padding: '32px', textAlign: 'left' }}>
            <div className="service-icon-wrap" style={{ color: '#4285F4' }}>
              <Play size={24} />
            </div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>YouTube Advertising</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              Reach your audience with targeted video campaigns on YouTube using in-stream ads, bumper ads, and discovery ads optimized for conversions.
            </p>
          </div>

          <div className="glass-card" style={{ padding: '32px', textAlign: 'left' }}>
            <div className="service-icon-wrap" style={{ color: '#4285F4' }}>
              <MapPin size={24} />
            </div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Google Local Services Ads</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              Get your business in front of local customers actively searching for services you offer, with pay-per-lead pricing and Google screened verification.
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Growth Chart */}
      <div className="chart-container" style={{ padding: '40px 32px', marginBottom: '60px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', marginBottom: '24px' }}>
          <div>
            <div className="chart-title" style={{ marginBottom: '4px' }}>Inbound Performance Graph</div>
            <h3 style={{ fontSize: '1.5rem' }}>Growth Acceleration Matrix</h3>
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button 
              className="btn" 
              onClick={() => setSelectedChart('ctr')}
              style={{
                padding: '8px 16px',
                fontSize: '0.85rem',
                backgroundColor: selectedChart === 'ctr' ? '#3b82f6' : 'transparent',
                color: selectedChart === 'ctr' ? '#fff' : 'var(--text-primary)',
                border: '1px solid var(--border-color)',
                borderRadius: '8px'
              }}
            >
              Organic CTR
            </button>
            <button 
              className="btn" 
              onClick={() => setSelectedChart('leads')}
              style={{
                padding: '8px 16px',
                fontSize: '0.85rem',
                backgroundColor: selectedChart === 'leads' ? '#10b981' : 'transparent',
                color: selectedChart === 'leads' ? '#fff' : 'var(--text-primary)',
                border: '1px solid var(--border-color)',
                borderRadius: '8px'
              }}
            >
              Monthly Inbound Leads
            </button>
          </div>
        </div>

        {/* Responsive SVG Chart */}
        <div style={{ position: 'relative', width: '100%', height: '300px', overflowX: 'auto' }}>
          <svg viewBox="0 0 600 280" style={{ width: '100%', height: '100%', minWidth: '500px' }}>
            {/* Grid Lines */}
            <line x1="50" y1="40" x2="550" y2="40" stroke="var(--border-color)" strokeDasharray="4 4" />
            <line x1="50" y1="100" x2="550" y2="100" stroke="var(--border-color)" strokeDasharray="4 4" />
            <line x1="50" y1="160" x2="550" y2="160" stroke="var(--border-color)" strokeDasharray="4 4" />
            <line x1="50" y1="220" x2="550" y2="220" stroke="var(--border-color)" strokeDasharray="4 4" />
            
            {/* Axes */}
            <line x1="50" y1="40" x2="50" y2="250" stroke="var(--border-color)" />
            <line x1="50" y1="250" x2="550" y2="250" stroke="var(--border-color)" />
            
            {/* Chart Line Path */}
            <path 
              d={chartsData[selectedChart].path} 
              fill="none" 
              stroke={chartsData[selectedChart].color} 
              strokeWidth="3" 
              strokeLinecap="round"
              style={{ transition: 'd 0.5s ease' }}
            />
            
            {/* Data Nodes & Values */}
            {chartsData[selectedChart].points.map((pt, i) => (
              <g key={i}>
                <circle 
                  cx={pt.x} 
                  cy={pt.y} 
                  r="6" 
                  fill="var(--bg-secondary)" 
                  stroke={chartsData[selectedChart].color} 
                  strokeWidth="3" 
                  style={{ transition: 'cy 0.5s ease, cx 0.5s ease' }}
                />
                <text 
                  x={pt.x} 
                  y={pt.y - 12} 
                  textAnchor="middle" 
                  fill="var(--text-primary)" 
                  fontSize="11" 
                  fontWeight="600"
                  style={{ transition: 'y 0.5s ease, x 0.5s ease' }}
                >
                  {pt.val}
                </text>
              </g>
            ))}

            {/* Labels */}
            <text x="50" y="270" textAnchor="middle" fill="var(--text-tertiary)" fontSize="10">Month 1</text>
            <text x="150" y="270" textAnchor="middle" fill="var(--text-tertiary)" fontSize="10">Month 2</text>
            <text x="250" y="270" textAnchor="middle" fill="var(--text-tertiary)" fontSize="10">Month 3</text>
            <text x="350" y="270" textAnchor="middle" fill="var(--text-tertiary)" fontSize="10">Month 4</text>
            <text x="450" y="270" textAnchor="middle" fill="var(--text-tertiary)" fontSize="10">Month 5</text>
            <text x="550" y="270" textAnchor="middle" fill="var(--text-tertiary)" fontSize="10">Month 6</text>
          </svg>
        </div>

        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '24px', fontStyle: 'italic' }}>
          {chartsData[selectedChart].desc}
        </p>
      </div>

      {/* Why marketing matters */}
      <div style={{ textAlign: 'left', margin: '40px 0' }}>
        <h3 style={{ fontSize: '1.75rem', marginBottom: '24px' }}>Why Marketing Operations Need Code & Logic</h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          <div style={{ display: 'flex', gap: '12px' }}>
            <CheckCircle2 size={20} style={{ color: '#10b981', flexShrink: 0, marginTop: '4px' }} />
            <div>
              <h4 style={{ fontSize: '1.05rem', marginBottom: '4px' }}>Rigid Tracking Pixels</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>We implement pixel events correctly through strict custom Javascript, capturing exact registration goals without double-counting metrics.</p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '12px' }}>
            <CheckCircle2 size={20} style={{ color: '#10b981', flexShrink: 0, marginTop: '4px' }} />
            <div>
              <h4 style={{ fontSize: '1.05rem', marginBottom: '4px' }}>Schema Markups</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>We bake JSON-LD schemas into matching products, routes, and blogs so search engines represent your site with rich results.</p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '12px' }}>
            <CheckCircle2 size={20} style={{ color: '#10b981', flexShrink: 0, marginTop: '4px' }} />
            <div>
              <h4 style={{ fontSize: '1.05rem', marginBottom: '4px' }}>Page Speed Boosts</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Lightweight web performance directly dictates ad landing costs and conversions. We target Core Web Vitals to keep load times below 1.2s.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
