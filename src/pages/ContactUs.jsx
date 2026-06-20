import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Standard client-side validation logic
  const validate = () => {
    let tempErrors = {};
    if (!formData.firstName.trim()) tempErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) tempErrors.lastName = "Last name is required";
    
    // Email regex check - standard RFC 5322 compliance wrapper
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address";
    }

    if (!formData.subject.trim()) tempErrors.subject = "Subject is required";
    if (!formData.message.trim()) tempErrors.message = "Message content is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Proactively clear validation error once the user types (improves UX flow)
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSending(true);

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: 'ef528605-3feb-44e0-b438-4b7560b7170b',
          subject: formData.subject,
          from_name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          message: formData.message
        })
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setShowSuccess(true);
        setFormData({ firstName: '', lastName: '', email: '', subject: '', message: '' });
        setTimeout(() => setShowSuccess(false), 5000);
      } else {
        alert(data.message || 'Send failed. Check your Web3Forms dashboard email settings.');
      }
    } catch (err) {
      alert('Failed to send. Please try again.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="container animate-fade-in">
      <div className="section-title-wrap">
        <div className="hero-tagline" style={{ letterSpacing: '3px', fontSize: '0.8rem' }}>Get In Touch</div>
        <h1 className="section-title" style={{ fontSize: '2.8rem', letterSpacing: '-1px' }}>
          Let's <span className="gradient-text">Build Something</span> Together
        </h1>
        <p className="section-desc" style={{ fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--text-secondary)', maxWidth: '650px', margin: '0 auto' }}>
          Have a project you'd like to discuss? We'd love to hear about it.
        </p>
        <p className="section-desc" style={{ marginTop: '12px', maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto', fontSize: '0.95rem', lineHeight: '1.8', color: 'var(--text-tertiary)' }}>
          Whether you're looking to build a new website, improve your online presence through digital marketing, or strengthen your IT infrastructure, we're here to help. Tell us a little about your business and your goals, and we'll get back to you with the right solution.
        </p>
        <p className="section-desc" style={{ marginTop: '16px', fontWeight: '600', fontSize: '1rem', color: 'var(--accent-primary)', letterSpacing: '0.5px' }}>
          ✦ Send us a message, and we'll be in touch within 24 hours ✦
        </p>
      </div>

      <div className="contact-container">
        {/* Form area */}
        <div className="glass-card" style={{ padding: '40px', textAlign: 'left' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '8px', letterSpacing: '-0.5px' }}>Send Us a Message</h3>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-tertiary)', marginBottom: '28px' }}>Fill out the form below and we'll respond promptly.</p>
          <form onSubmit={handleSubmit} noValidate>
            
            {/* Name Fields Row */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '20px' }}>
              <div className="form-group">
                <label className="form-label" htmlFor="firstName" style={{ fontSize: '0.8rem', letterSpacing: '0.5px', textTransform: 'uppercase', fontWeight: '700', color: 'var(--text-tertiary)' }}>First Name</label>
                <input 
                  type="text" 
                  name="firstName" 
                  id="firstName"
                  className="form-input" 
                  value={formData.firstName}
                  onChange={handleInputChange}
                  style={{ borderColor: errors.firstName ? '#ef4444' : '' }}
                />
                {errors.firstName && (
                  <span className="form-error">
                    <AlertCircle size={12} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'middle' }} />
                    {errors.firstName}
                  </span>
                )}
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="lastName" style={{ fontSize: '0.8rem', letterSpacing: '0.5px', textTransform: 'uppercase', fontWeight: '700', color: 'var(--text-tertiary)' }}>Last Name</label>
                <input 
                  type="text" 
                  name="lastName" 
                  id="lastName"
                  className="form-input" 
                  value={formData.lastName}
                  onChange={handleInputChange}
                  style={{ borderColor: errors.lastName ? '#ef4444' : '' }}
                />
                {errors.lastName && (
                  <span className="form-error">
                    <AlertCircle size={12} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'middle' }} />
                    {errors.lastName}
                  </span>
                )}
              </div>
            </div>

            {/* Email Field */}
            <div className="form-group" style={{ marginBottom: '20px' }}>
              <label className="form-label" htmlFor="email" style={{ fontSize: '0.8rem', letterSpacing: '0.5px', textTransform: 'uppercase', fontWeight: '700', color: 'var(--text-tertiary)' }}>Email Address</label>
              <input 
                type="email" 
                name="email" 
                id="email"
                className="form-input" 
                value={formData.email}
                onChange={handleInputChange}
                style={{ borderColor: errors.email ? '#ef4444' : '' }}
              />
              {errors.email && (
                <span className="form-error">
                  <AlertCircle size={12} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'middle' }} />
                  {errors.email}
                </span>
              )}
            </div>

            {/* Subject Field */}
            <div className="form-group" style={{ marginBottom: '20px' }}>
              <label className="form-label" htmlFor="subject" style={{ fontSize: '0.8rem', letterSpacing: '0.5px', textTransform: 'uppercase', fontWeight: '700', color: 'var(--text-tertiary)' }}>Subject</label>
              <input 
                type="text" 
                name="subject" 
                id="subject"
                className="form-input" 
                value={formData.subject}
                onChange={handleInputChange}
                style={{ borderColor: errors.subject ? '#ef4444' : '' }}
              />
              {errors.subject && (
                <span className="form-error">
                  <AlertCircle size={12} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'middle' }} />
                  {errors.subject}
                </span>
              )}
            </div>

            {/* Message Textarea */}
            <div className="form-group" style={{ marginBottom: '32px' }}>
              <label className="form-label" htmlFor="message" style={{ fontSize: '0.8rem', letterSpacing: '0.5px', textTransform: 'uppercase', fontWeight: '700', color: 'var(--text-tertiary)' }}>Message</label>
              <textarea 
                name="message" 
                id="message"
                rows="6" 
                className="form-input"
                value={formData.message}
                onChange={handleInputChange}
                style={{ borderColor: errors.message ? '#ef4444' : '', resize: 'vertical' }}
              />
              {errors.message && (
                <span className="form-error">
                  <AlertCircle size={12} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'middle' }} />
                  {errors.message}
                </span>
              )}
            </div>

            {/* Submit button */}
            <button 
              type="submit" 
              className="btn btn-primary" 
              style={{ width: '100%', padding: '16px', fontSize: '1rem', fontWeight: '700', letterSpacing: '0.5px', borderRadius: '12px' }}
              disabled={isSending}
            >
              {isSending ? (
                <>
                  <span style={{ display: 'inline-block', width: '16px', height: '16px', border: '2px solid rgba(255,255,255,0.3)', borderTopColor: '#fff', borderRadius: '50%', animation: 'spin 0.8s linear infinite', marginRight: '8px', verticalAlign: 'middle' }}></span>
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send size={16} style={{ marginLeft: '6px' }} />
                </>
              )}
            </button>

          </form>
        </div>

        {/* Contact details */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div className="glass-card contact-info-card" style={{ textAlign: 'left' }}>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '24px', letterSpacing: '-0.5px' }}>Contact Information</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-tertiary)', marginBottom: '24px', marginTop: '-16px' }}>We're here to help with your next project.</p>
            
            <div className="info-item">
              <div className="info-icon" style={{ background: 'linear-gradient(135deg, #3b82f6, #6366f1)', borderRadius: '12px', width: '44px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                <Mail size={20} />
              </div>
              <div className="info-text">
                <h5 style={{ fontSize: '0.8rem', letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--text-tertiary)', marginBottom: '4px' }}>Email Us</h5>
                <p style={{ fontWeight: '600', fontSize: '1rem' }}>info@digitexaai.in</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon" style={{ background: 'linear-gradient(135deg, #10b981, #059669)', borderRadius: '12px', width: '44px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                <Phone size={20} />
              </div>
              <div className="info-text">
                <h5 style={{ fontSize: '0.8rem', letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--text-tertiary)', marginBottom: '4px' }}>Call Us</h5>
                <p style={{ fontWeight: '600', fontSize: '1rem' }}>+91 8595008703</p>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>Mon - Fri, 9am - 6pm</p>
              </div>
            </div>

            <div className="info-item" style={{ marginBottom: 0 }}>
              <div className="info-icon" style={{ background: 'linear-gradient(135deg, #f59e0b, #d97706)', borderRadius: '12px', width: '44px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                <MapPin size={20} />
              </div>
              <div className="info-text">
                <h5 style={{ fontSize: '0.8rem', letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--text-tertiary)', marginBottom: '4px' }}>Location</h5>
                <p style={{ fontWeight: '600', fontSize: '1rem' }}>1671, Sector 65, Faridabad</p>
              </div>
            </div>
          </div>


        </div>
      </div>

      {/* Success Notification Toast */}
      {showSuccess && (
        <div className="toast-success" style={{ backdropFilter: 'blur(12px)', borderRadius: '16px', padding: '20px 28px', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
          <CheckCircle2 size={22} style={{ color: '#10b981' }} />
          <div>
            <div style={{ fontWeight: '800', fontSize: '1rem', letterSpacing: '-0.3px' }}>Message Sent!</div>
            <div style={{ fontSize: '0.8rem', opacity: 0.85, marginTop: '2px' }}>Thank you, we will contact you shortly.</div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
