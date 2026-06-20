import React, { useRef, useEffect } from 'react';
import { ArrowRight, Server, Globe, Megaphone, Shield } from 'lucide-react';
import homeImg from '../assets/home.jpg';
import gsap from 'gsap';

export default function Home({ setPage }) {
  const heroRef = useRef(null);
  const taglineRef = useRef(null);
  const headingRef = useRef(null);
  const descRef = useRef(null);
  const ctaRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(taglineRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6 }
    )
    .fromTo(headingRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7 },
      '-=0.3'
    )
    .fromTo(descRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6 },
      '-=0.3'
    )
    .fromTo(ctaRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5 },
      '-=0.2'
    )
    .fromTo(imageRef.current,
      { x: 60, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
      '-=0.4'
    );

    return () => tl.kill();
  }, []);

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
    <div className="animate-fade-in" ref={heroRef}>
      {/* Hero Section */}
      <section className="container hero-grid">
        <div className="hero-section">
          <div className="hero-tagline" ref={taglineRef}>Digitexa AI Studio</div>
          <h1 className="hero-heading" ref={headingRef}>
            Elevate Your Business With <span className="gradient-text">Intelligent Digital Solutions</span>
          </h1>
          <p className="hero-desc" ref={descRef}>
            Digitexa delivers end-to-end technology solutions—from website design and digital marketing to IT infrastructure and cybersecurity—helping businesses grow, operate efficiently, and stay secure in an evolving digital landscape.
          </p>
          <div className="hero-ctas" ref={ctaRef}>
            <a href="#/contact-us" className="btn btn-primary" onClick={handleGetStarted}>
              Get Started
              <ArrowRight size={18} />
            </a>
            <button className="btn btn-secondary" onClick={handleViewServices}>
              Explore Services
            </button>
          </div>
        </div>
        <div className="hero-image-wrap" ref={imageRef}>
          <img src={homeImg} alt="Digitexa AI Future Tech Solutions" className="hero-image" />
        </div>
      </section>

      {/* Services Section */}
      <section id="services-section" className="container" style={{ padding: '60px 0 80px' }}>
        <div className="section-title-wrap">
          <div className="hero-tagline">What We Do</div>
          <h2 className="section-title">Built for <span className="gradient-text">Performance & Scale</span></h2>
          <p className="section-desc">
            End-to-end digital services engineered for modern businesses.
          </p>
        </div>

        <div className="services-grid">
          {[
            { icon: <Globe size={28} />, color: '#3b82f6', title: 'Website Design & Development', desc: 'Modern, responsive websites designed for performance, user engagement, and long-term business growth.', link: '#/website-solutions', label: 'Explore Web Solutions' },
            { icon: <Megaphone size={28} />, color: '#ec4899', title: 'Digital Marketing', desc: 'Strategic SEO, social media, and online marketing solutions that increase visibility and generate qualified leads.', link: '#/digital-marketing', label: 'View Marketing Services' },
            { icon: <Server size={28} />, color: '#10b981', title: 'IT Infrastructure Support', desc: 'Reliable infrastructure management, network support, cloud solutions, and proactive monitoring to keep your business running efficiently.', link: '#/it-infrastructure', label: 'Infrastructure Services' },
            { icon: <Shield size={28} />, color: '#8b5cf6', title: 'IT Security Services', desc: 'Advanced cybersecurity solutions that protect your systems, data, and operations from modern digital threats.', link: '#/it-infrastructure', label: 'Security Solutions' }
          ].map((item, i) => (
            <div key={i} className="glass-card service-card" style={{ transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,0.3)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '' }}>
              <div className="service-icon-wrap" style={{ color: item.color, borderColor: `${item.color}33` }}>
                {item.icon}
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <a href={item.link} className="service-learn-more">
                {item.label}
                <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
