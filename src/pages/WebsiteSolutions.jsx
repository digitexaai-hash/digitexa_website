import React from 'react';
import { Shield, Sparkles, Smartphone, Code, Lightbulb, Compass, Bolt } from 'lucide-react';

export default function WebsiteSolutions() {
  return (
    <div className="container animate-fade-in">
      <div className="section-title-wrap">
        <div className="hero-tagline">Development Services</div>
        <h1 className="section-title">Website Solutions</h1>
        <p className="section-desc">
          High-fidelity, ultra-fast websites engineered to support business growth and establish professional credibility.
        </p>
      </div>

      {/* Main Pillars of development */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px', marginBottom: '60px' }}>
        {/* Pillar 1 */}
        <div className="glass-card" style={{ padding: '40px 32px', textAlign: 'left' }}>
          <div className="service-icon-wrap" style={{ color: '#3b82f6', marginBottom: '20px' }}>
            <Code size={26} />
          </div>
          <h3 style={{ fontSize: '1.3rem', marginBottom: '12px' }}>Custom Coded Frontends</h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
            We bypass heavy theme templates and drag-and-drop page builders. By writing clean React codes styled with modular Vanilla CSS, we eliminate unused script baggage.
          </p>
          <div style={{ marginTop: '20px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <span style={{ padding: '4px 10px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: '700', backgroundColor: 'var(--bg-tertiary)' }}>React</span>
            <span style={{ padding: '4px 10px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: '700', backgroundColor: 'var(--bg-tertiary)' }}>Vite</span>
            <span style={{ padding: '4px 10px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: '700', backgroundColor: 'var(--bg-tertiary)' }}>Vanilla CSS</span>
            <span style={{ padding: '4px 10px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: '700', backgroundColor: 'var(--bg-tertiary)' }}>HTML5</span>
          </div>
        </div>

        {/* Pillar 2 */}
        <div className="glass-card" style={{ padding: '40px 32px', textAlign: 'left' }}>
          <div className="service-icon-wrap" style={{ color: '#10b981', marginBottom: '20px' }}>
            <Smartphone size={26} />
          </div>
          <h3 style={{ fontSize: '1.3rem', marginBottom: '12px' }}>Responsive & Device-First</h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
            More than half of your client leads originate on mobile viewports. We test every block, breakpoint, button margin, and navigation popup to deliver fluid rendering from 320px up to 4K displays.
          </p>
          <div style={{ marginTop: '20px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <span style={{ padding: '4px 10px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: '700', backgroundColor: 'var(--bg-tertiary)' }}>Fluid Grids</span>
            <span style={{ padding: '4px 10px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: '700', backgroundColor: 'var(--bg-tertiary)' }}>Flexbox Layouts</span>
            <span style={{ padding: '4px 10px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: '700', backgroundColor: 'var(--bg-tertiary)' }}>Dynamic Breakpoints</span>
          </div>
        </div>

        {/* Pillar 3 */}
        <div className="glass-card" style={{ padding: '40px 32px', textAlign: 'left' }}>
          <div className="service-icon-wrap" style={{ color: '#6366f1', marginBottom: '20px' }}>
            <Bolt size={26} />
          </div>
          <h3 style={{ fontSize: '1.3rem', marginBottom: '12px' }}>Core Performance Targets</h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
            A delay of just one second in page load times drops conversion metrics by up to 20%. We target perfect scores on Google Lighthouse checks, optimizing asset payloads and critical paths.
          </p>
          <div style={{ marginTop: '20px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <span style={{ padding: '4px 10px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: '700', backgroundColor: 'var(--bg-tertiary)' }}>LCP Optimization</span>
            <span style={{ padding: '4px 10px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: '700', backgroundColor: 'var(--bg-tertiary)' }}>Zero Layout Shifts</span>
            <span style={{ padding: '4px 10px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: '700', backgroundColor: 'var(--bg-tertiary)' }}>Asset Bundling</span>
          </div>
        </div>
      </div>

      {/* Feature Showcase List */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center', textAlign: 'left', margin: '80px 0 40px' }}>
        <div>
          <h3 style={{ fontSize: '1.75rem', marginBottom: '24px' }}>Standard Features in All Builds</h3>
          
          <div style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
            <Shield size={24} style={{ color: '#10b981', flexShrink: 0, marginTop: '4px' }} />
            <div>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '4px' }}>Secure & Serverless Hosting</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Deploy on global content delivery networks (CDNs) for distributed coverage, automatic SSL encryption, and high protection against DDOS limits.</p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
            <Sparkles size={24} style={{ color: '#10b981', flexShrink: 0, marginTop: '4px' }} />
            <div>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '4px' }}>Micro-Animations & Transitions</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Add refined slide-ins, glow fades, and click responses that guide the eye without slowing down user interactions.</p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '16px' }}>
            <Lightbulb size={24} style={{ color: '#10b981', flexShrink: 0, marginTop: '4px' }} />
            <div>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '4px' }}>SEO Semantics Standard</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Strict execution of HTML5 elements (header, footer, nav, article), alt descriptions, meta headers, and unique ID mappings.</p>
            </div>
          </div>
        </div>

        {/* Visual Element Mock */}
        <div className="glass-card chart-container" style={{ padding: '32px', textAlign: 'center' }}>
          <div className="chart-title">Developer Inspection Board</div>
          <div style={{ fontFamily: 'var(--mono)', fontSize: '0.85rem', color: 'var(--text-secondary)', textAlign: 'left', background: 'var(--bg-primary)', padding: '16px', borderRadius: '8px', border: '1px solid var(--border-color)', margin: '16px 0' }}>
            <span style={{ color: '#f43f5e' }}>&lt;section</span> <span style={{ color: '#3b82f6' }}>className</span>=<span style={{ color: '#10b981' }}>"website-showcase"</span><span style={{ color: '#f43f5e' }}>&gt;</span><br />
            &nbsp;&nbsp;<span style={{ color: '#f43f5e' }}>&lt;div</span> <span style={{ color: '#3b82f6' }}>id</span>=<span style={{ color: '#10b981' }}>"interactive-panel"</span><span style={{ color: '#f43f5e' }}>&gt;</span><br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#eab308' }}>&#123;</span><span style={{ color: 'var(--text-primary)' }}>loading ? </span><span style={{ color: '#f43f5e' }}>&lt;Spinner /&gt;</span><span style={{ color: 'var(--text-primary)' }}> : </span><span style={{ color: '#f43f5e' }}>&lt;Dashboard /&gt;</span><span style={{ color: 'eab308' }}>&#125;</span><br />
            &nbsp;&nbsp;<span style={{ color: '#f43f5e' }}>&lt;/div&gt;</span><br />
            <span style={{ color: '#f43f5e' }}>&lt;/section&gt;</span>
          </div>
          <h4 style={{ fontSize: '1.1rem', marginBottom: '8px' }}>Clean, Lightweight Syntax</h4>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Our code is fully human-authored, componentized, and documented, making maintenance straightforward for your team.</p>
        </div>
      </div>
    </div>
  );
}
