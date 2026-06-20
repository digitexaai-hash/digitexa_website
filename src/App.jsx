/**
 * @project Digitexa AI Corporate Site
 * @author Sanjeev Kumar & Digitexa Engineering Team
 * @description Premium client-side React SPA with customized glassmorphic design and modular pages.
 * @notes Zero external CSS libraries (Tailwind-free), custom client-side router, optimized asset delivery.
 */

import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, ArrowUp } from 'lucide-react';
import './App.css';

// Page Imports
import Home from './pages/Home';
import ITInfrastructure from './pages/ITInfrastructure';
import DigitalMarketing from './pages/DigitalMarketing';
import WebsiteSolutions from './pages/WebsiteSolutions';
import Blogs from './pages/Blogs';
import ContactUs from './pages/ContactUs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CookieConsent from './components/CookieConsent';
import Admin from './pages/Admin';

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });
  const [currentRoute, setCurrentRoute] = useState(() => {
    return window.location.hash || '#/';
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Apply theme attributes
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Developer Console Easter Egg (Signature from human dev)
  useEffect(() => {
    console.log(
      "%cDigitexa AI %c- Handcrafted Web Solutions\n%cHello developer! Inspecting our DOM? This site was custom coded in React & Vanilla CSS by our engineering desk. Zero templates, maximum speed.%c\n\nQuestions? Reach us at info@digitexaai.in",
      "color: #3b82f6; font-size: 20px; font-weight: 800; font-family: 'Outfit', sans-serif;",
      "color: #10b981; font-size: 14px; font-weight: 600;",
      "color: #94a3b8; font-size: 12px; line-height: 1.5;",
      "color: #6366f1; font-weight: bold;"
    );
  }, []);

  // Handle hash routing
  useEffect(() => {
    const handleHashChange = () => {
      let hash = window.location.hash;
      if (!hash) {
        hash = '#/';
        window.location.hash = '#/';
      }
      setCurrentRoute(hash);
      setMobileMenuOpen(false); // Close mobile drawer on route change
      window.scrollTo(0, 0);   // Scroll to top of the page
    };

    window.addEventListener('hashchange', handleHashChange);
    // Execute on initial render
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Handle scroll-to-top visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Switch pages based on current route hash
  const renderPage = () => {
    switch (currentRoute) {
      case '#/':
        return <Home />;
      case '#/it-infrastructure':
        return <ITInfrastructure />;
      case '#/digital-marketing':
        return <DigitalMarketing />;
      case '#/website-solutions':
        return <WebsiteSolutions />;
      case '#/blogs':
        return <Blogs />;
      case '#/contact-us':
        return <ContactUs />;
      case '#/privacy-policy':
        return <PrivacyPolicy />;
      case '#/admin':
        return <Admin />;
      default:
        return <Home />;
    }
  };

  // Nav link helper
  const isLinkActive = (hash) => {
    return currentRoute === hash;
  };

  return (
    <div className="app-container">
      {/* Sticky Header Nav */}
      <header className="app-header">
        <div className="container header-container">
          <a href="#/" className="logo">
            Digitexa AI
            <span className="logo-dot"></span>
          </a>

          {/* Desktop Nav */}
          <nav>
            <ul className="nav-menu">
              <li>
                <a href="#/" className={`nav-link ${isLinkActive('#/') ? 'active' : ''}`}>
                  Home
                </a>
              </li>
              <li>
                <a href="#/it-infrastructure" className={`nav-link ${isLinkActive('#/it-infrastructure') ? 'active' : ''}`}>
                  IT Infrastructure
                </a>
              </li>
              <li>
                <a href="#/digital-marketing" className={`nav-link ${isLinkActive('#/digital-marketing') ? 'active' : ''}`}>
                  Digital Marketing
                </a>
              </li>
              <li>
                <a href="#/website-solutions" className={`nav-link ${isLinkActive('#/website-solutions') ? 'active' : ''}`}>
                  Website Solutions
                </a>
              </li>
              <li>
                <a href="#/blogs" className={`nav-link ${isLinkActive('#/blogs') ? 'active' : ''}`}>
                  Blogs
                </a>
              </li>
              <li>
                <a href="#/contact-us" className={`nav-link ${isLinkActive('#/contact-us') ? 'active' : ''}`}>
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>

          {/* Theme & Mobile Actions */}
          <div className="header-actions">
            <button 
              type="button" 
              className="theme-toggle" 
              onClick={toggleTheme}
              aria-label="Toggle Theme Mode"
              title="Toggle Light/Dark Theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button 
              type="button" 
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Mobile Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay Navigation */}
      <div className={`mobile-nav-overlay ${mobileMenuOpen ? 'open' : ''}`}>
        <a href="#/" className={`mobile-nav-link ${isLinkActive('#/') ? 'active' : ''}`}>
          Home
        </a>
        <a href="#/it-infrastructure" className={`mobile-nav-link ${isLinkActive('#/it-infrastructure') ? 'active' : ''}`}>
          IT Infrastructure
        </a>
        <a href="#/digital-marketing" className={`mobile-nav-link ${isLinkActive('#/digital-marketing') ? 'active' : ''}`}>
          Digital Marketing
        </a>
        <a href="#/website-solutions" className={`mobile-nav-link ${isLinkActive('#/website-solutions') ? 'active' : ''}`}>
          Website Solutions
        </a>
        <a href="#/blogs" className={`mobile-nav-link ${isLinkActive('#/blogs') ? 'active' : ''}`}>
          Blogs
        </a>
        <a href="#/contact-us" className={`mobile-nav-link ${isLinkActive('#/contact-us') ? 'active' : ''}`}>
          Contact Us
        </a>
      </div>

      {/* Main Page Content */}
      <main className="main-content">
        {renderPage()}
      </main>

      {/* Footer Wrapper */}
      <footer className="app-footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-brand">
              <a href="#/" className="logo" style={{ marginBottom: '16px' }}>
                Digitexa AI
                <span className="logo-dot"></span>
              </a>
              <p>Delivering scalable web, marketing, infrastructure, and security solutions for forward-thinking businesses.</p>
            </div>
            
            <div className="footer-links">
              <div className="footer-column">
                <h4>Services</h4>
                <ul className="footer-list">
                  <li><a href="#/website-solutions">Web Solutions</a></li>
                  <li><a href="#/digital-marketing">Digital Marketing</a></li>
                  <li><a href="#/it-infrastructure">IT Infrastructure</a></li>
                </ul>
              </div>

              <div className="footer-column">
                <h4>Company</h4>
                <ul className="footer-list">
                  <li><a href="#/blogs">Blogs & Insights</a></li>
                  <li><a href="#/contact-us">Contact Support</a></li>
                  <li><a href="#/privacy-policy">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2026 Digitexa AI. All rights reserved. Built with care by the Digitexa Engineering Team.</p>
            <p style={{ display: 'flex', gap: '16px' }}>
              <a href="#/privacy-policy">Privacy Terms</a>
              <span>•</span>
              <a href="#/contact-us">Support Desk</a>
              <span>•</span>
              <a href="#/admin">Admin Cockpit</a>
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top floating arrow */}
      {showScrollTop && (
        <button 
          onClick={scrollToTop} 
          style={{
            position: 'fixed',
            bottom: '24px',
            left: '24px',
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            backgroundColor: 'var(--accent-primary)',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: 'var(--shadow-lg)',
            zIndex: 90,
            transition: 'opacity var(--transition-fast)'
          }}
          aria-label="Scroll to Top"
        >
          <ArrowUp size={20} />
        </button>
      )}

      {/* Global GDPR/AdSense Cookie Consent Banner */}
      <CookieConsent />
    </div>
  );
}

export default App;

