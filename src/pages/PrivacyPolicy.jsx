import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="container animate-fade-in" style={{ textAlign: 'left', maxWidth: '800px', paddingBottom: '60px' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '24px' }}>Privacy Policy</h1>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '32px' }}>Last updated: January 2, 2026</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: '1.75' }}>
        <section>
          <h2 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '12px' }}>1. Information We Collect</h2>
          <p>
            We collect information that you directly provide to us when using our Contact forms, request support, or communicate with us. This includes your name, email address, phone number, and details regarding your business workflows or projects.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '12px' }}>2. How We Use Your Information</h2>
          <p>
            The details we gather are utilized solely to:
          </p>
          <ul style={{ paddingLeft: '24px', marginTop: '8px' }}>
            <li>Provide, maintain, and optimize our digital and web services.</li>
            <li>Analyze lead inquiries and communicate proposal materials.</li>
            <li>Send technical notices, service updates, and support messages.</li>
          </ul>
        </section>

        <section>
          <h2 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '12px' }}>3. Data Sharing & Security</h2>
          <p>
            Digitexa AI does not sell, lease, or distribute your email addresses or private inquiries to third-party databases. We implement standard encryption systems and database vault parameters to protect user data from unauthorized access or leakage.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '12px' }}>4. Cookies and Analytical Trackers</h2>
          <p>
            We may use session cookies and web beacons to track page load performance, layout speeds, and client traffic paths. You can modify your web browser preferences to decline all cookies if you prefer.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '12px' }}>5. Contact Information</h2>
          <p>
            If you have questions or concerns regarding these privacy terms, please email our security officer at: <strong style={{ color: 'var(--text-primary)' }}>security@digitexaai.in</strong>.
          </p>
        </section>
      </div>
    </div>
  );
}
