import React, { useEffect, useState } from 'react';

/**
 * Reusable Google AdSense wrapper for React Single Page Applications (SPA).
 * Detects script state, dynamically pushes slots, and displays high-fidelity 
 * visual placeholders on localhost or if blocked.
 */
export default function AdSenseAd({ 
  slot, 
  format = 'auto', 
  responsive = 'true', 
  style = { display: 'block' },
  simulatedType = 'leaderboard' // leaderboard, rectangle, skyscraper
}) {
  const [adBlockedOrLocal, setAdBlockedOrLocal] = useState(true);
  const [adsEnabled, setAdsEnabled] = useState(true);

  useEffect(() => {
    // Read global toggle switch
    const enabled = localStorage.getItem('digitexa_ads_enabled') !== 'false';
    setAdsEnabled(enabled);

    // Check if the AdSense script is loaded and active
    const scriptLoaded = window.adsbygoogle && typeof window.adsbygoogle.push === 'function';
    if (scriptLoaded && enabled) {
      setAdBlockedOrLocal(false);
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.warn('AdSense push failed: ', e);
        setAdBlockedOrLocal(true); // Fallback to simulation if push fails
      }
    }
  }, [slot]);

  // If ads are disabled globally, collapse and hide
  if (!adsEnabled) {
    return null;
  }

  // If local, show a highly polished mock ad banner matching the dark/light theme
  if (adBlockedOrLocal) {
    const getDetails = () => {
      switch (simulatedType) {
        case 'leaderboard':
          return {
            title: 'Responsive Leaderboard Banner',
            dimensions: '728 × 90 (Fills Available Width)',
            className: 'mock-leaderboard'
          };
        case 'skyscraper':
          return {
            title: 'Vertical Skyscraper',
            dimensions: '300 × 600 (High-Yield Sidebar)',
            className: 'mock-skyscraper'
          };
        case 'rectangle':
        default:
          return {
            title: 'Medium In-Article Rectangle',
            dimensions: '336 × 280 (Native Inline)',
            className: 'mock-rectangle'
          };
      }
    };

    const details = getDetails();

    return (
      <div className={`mock-ad-container ${details.className}`}>
        <div className="mock-ad-badge">Sponsored Advertisement</div>
        <div className="mock-ad-content">
          <div className="mock-ad-icon">⚡</div>
          <div className="mock-ad-title">{details.title}</div>
          <div className="mock-ad-size">{details.dimensions}</div>
          <div className="mock-ad-tag">Google AdSense Simulated Unit</div>
        </div>
      </div>
    );
  }

  // Production AdSense markup
  return (
    <div className="adsense-prod-wrap" style={{ margin: '24px auto', textAlign: 'center' }}>
      <div className="adsense-label" style={{ fontSize: '0.65rem', color: 'var(--text-tertiary)', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '1px' }}>
        Advertisement
      </div>
      <ins 
        className="adsbygoogle"
        style={style}
        data-ad-client="ca-pub-1029384756102938"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive}
      />
    </div>
  );
}
