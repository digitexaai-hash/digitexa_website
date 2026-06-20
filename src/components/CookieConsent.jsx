import React, { useState, useEffect } from 'react';
import { ShieldCheck, X } from 'lucide-react';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted or declined cookies
    const consent = localStorage.getItem('digitexa_cookie_consent');
    if (!consent) {
      // Delay showing the banner slightly for better UX/transition
      const timer = setTimeout(() => {
        setVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('digitexa_cookie_consent', 'accepted');
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('digitexa_cookie_consent', 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-consent-bar glass-card animate-fade-in-up">
      <div className="cookie-consent-content">
        <div className="cookie-consent-icon-wrap">
          <ShieldCheck size={28} className="cookie-icon" />
        </div>
        <div className="cookie-consent-text">
          <h4>Cookie Consent & Privacy</h4>
          <p>
            We use cookies to personalize content and ads, analyze our traffic, and enhance your digital experience. By clicking "Accept All", you agree to our use of tracking tools in compliance with AdSense Policies. Review our{' '}
            <a href="#/privacy-policy" className="cookie-policy-link">
              Privacy Policy
            </a>{' '}
            for full details.
          </p>
        </div>
      </div>
      <div className="cookie-consent-actions">
        <button 
          onClick={handleDecline} 
          className="btn btn-secondary cookie-btn-decline"
        >
          Decline
        </button>
        <button 
          onClick={handleAccept} 
          className="btn btn-primary cookie-btn-accept"
        >
          Accept All
        </button>
        <button 
          onClick={() => setVisible(false)} 
          className="cookie-close-btn"
          aria-label="Dismiss cookie notice"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  );
}
