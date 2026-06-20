import React from 'react';
import { ArrowRight, Server, Globe, Megaphone, CheckCircle } from 'lucide-react';
import heroImg from '../assets/hero.png';

export default function Home({ setPage }) {
  const handleGetStarted = (e) => {
    e.preventDefault();
    window.location.hash = '#/contact-us';
  };

  const handleViewServices = (e) => {
    e.preventDefault();
    const element = document.getElementById('services-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="container hero-grid">
        <div className="hero-section">
          <div className="hero-tagline">Digitexa AI Studio</div>
          <h1 className="hero-heading">
            Elevate Your Brand With <span className="gradient-text">Intelligent Digital Solutions</span>
          </h1>
          <p className="hero-desc">
            Digitexa AI crafts premium digital experiences and automated workflows that scale your business while you sleep.
          </p>
          <div className="hero-ctas">
            <a href="#/contact-us" className="btn btn-primary" onClick={handleGetStarted}>
              Get Started
              <ArrowRight size={18} />
            </a>
            <button className="btn btn-secondary" onClick={handleViewServices}>
              Explore Services
            </button>
          </div>
        </div>
        <div className="hero-image-wrap animate-fade-in-up">
          <img src={heroImg} alt="Digitexa AI Future Tech Solutions" className="hero-image" />
        </div>
      </section>

      {/* Services Section */}
      <section id="services-section" className="container" style={{ padding: '60px 0' }}>
        <div className="section-title-wrap">
          <h2 className="section-title">Digital Services Redefined</h2>
          <p className="section-desc">
            We combine human creativity with AI precision to deliver results that matter.
          </p>
        </div>

        <div className="services-grid">
          {/* Card 1: Web Design */}
          <div className="glass-card service-card">
            <div className="service-icon-wrap">
              <Globe size={28} />
            </div>
            <h3>Web Design & Development</h3>
            <p>
              High-performance, custom-coded web architectures that load instantly and drive conversion. Built using React and modern lightweight frameworks.
            </p>
            <a href="#/website-solutions" className="service-learn-more">
              Website Solutions
              <ArrowRight size={16} />
            </a>
          </div>

          {/* Card 2: Digital Marketing */}
          <div className="glass-card service-card">
            <div className="service-icon-wrap">
              <Megaphone size={28} />
            </div>
            <h3>Digital Marketing</h3>
            <p>
              Strategic search engine optimization, paid media campaigns, and structured social media strategies designed to acquire customers efficiently.
            </p>
            <a href="#/digital-marketing" className="service-learn-more">
              Marketing Strategy
              <ArrowRight size={16} />
            </a>
          </div>

          {/* Card 3: IT Infrastructure */}
          <div className="glass-card service-card">
            <div className="service-icon-wrap">
              <Server size={28} />
            </div>
            <h3>IT Infrastructure Services</h3>
            <p>
              Shopfloor networks, virtualization servers (Proxmox/Hyper-V), structured backups, and firewall configurations built specifically for SMBs and Manufacturing plants.
            </p>
            <a href="#/it-infrastructure" className="service-learn-more">
              Infrastructure Setup
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container" style={{ padding: '40px 0 80px' }}>
        <div className="section-title-wrap">
          <h2 className="section-title">Why Choose Digitexa AI?</h2>
          <p className="section-desc">
            We build for performance, security, and long-term scalability.
          </p>
        </div>

        <div className="features-grid">
          <div className="features-list" style={{ marginTop: 0 }}>
            <div className="feature-item">
              <CheckCircle className="feature-check-icon" size={24} />
              <div className="feature-info">
                <h4>Modern Architecture</h4>
                <p>No bloated WordPress code. We deliver lightning-fast static builds and modular React setups.</p>
              </div>
            </div>

            <div className="feature-item">
              <CheckCircle className="feature-check-icon" size={24} />
              <div className="feature-info">
                <h4>Telemetry & Monitoring</h4>
                <p>We configure background system agents to track memory pool levels, processor loads, and backup validations 24/7.</p>
              </div>
            </div>

            <div className="feature-item">
              <CheckCircle className="feature-check-icon" size={24} />
              <div className="feature-info">
                <h4>Built-in SEO Practices</h4>
                <p>Proper title hierarchies, lightning page speeds, meta tags, and structured schema markup standard on every project.</p>
              </div>
            </div>

            <div className="feature-item">
              <CheckCircle className="feature-check-icon" size={24} />
              <div className="feature-info">
                <h4>Transparent Analytics</h4>
                <p>Track your conversions, organic page views, and client sign-ups through custom lightweight reporting boards.</p>
              </div>
            </div>
          </div>
          <div className="hero-image-wrap">
            <img src="/it_server_diagnostics.png" alt="Server Operations Monitoring Diagnostics" className="hero-image" />
          </div>
        </div>
      </section>
    </div>
  );
}
