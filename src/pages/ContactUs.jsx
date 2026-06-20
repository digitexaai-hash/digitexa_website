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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSending(true);

    // Mock API Network Latency: Simulate contact endpoint request delay (2000ms)
    // In production, swap this block with standard fetch() or axios POST requests
    setTimeout(() => {
      setIsSending(false);
      setShowSuccess(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
      });

      // Dismiss Success Toast after 5 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    }, 2000);
  };

  return (
    <div className="container animate-fade-in">
      <div className="section-title-wrap">
        <div className="hero-tagline">Get In Touch</div>
        <h1 className="section-title">Contact Us</h1>
        <p className="section-desc">
          Have an automation project in mind or need custom web architectures? Reach out and we will respond within 24 hours.
        </p>
      </div>

      <div className="contact-container">
        {/* Form area */}
        <div className="glass-card" style={{ padding: '40px', textAlign: 'left' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '24px' }}>Send Us a Message</h3>
          <form onSubmit={handleSubmit} noValidate>
            
            {/* Name Fields Row */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '20px' }}>
              <div className="form-group">
                <label className="form-label" htmlFor="firstName">First Name</label>
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
                <label className="form-label" htmlFor="lastName">Last Name</label>
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
              <label className="form-label" htmlFor="email">Email Address</label>
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
              <label className="form-label" htmlFor="subject">Subject</label>
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
              <label className="form-label" htmlFor="message">Message</label>
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
              style={{ width: '100%', padding: '14px' }}
              disabled={isSending}
            >
              {isSending ? (
                <>
                  <span style={{ display: 'inline-block', width: '16px', height: '16px', border: '2px solid rgba(255,255,255,0.3)', borderTopColor: '#fff', borderRadius: '50%', animation: 'spin 0.8s linear infinite', marginRight: '8px', verticalAlign: 'middle' }}></span>
                  Sending message...
                </>
              ) : (
                <>
                  Send Message
                  <Send size={16} />
                </>
              )}
            </button>

          </form>
        </div>

        {/* Contact details */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div className="glass-card contact-info-card" style={{ textAlign: 'left' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '24px' }}>Office Contact Info</h3>
            
            <div className="info-item">
              <Mail className="info-icon" size={20} />
              <div className="info-text">
                <h5>Email Us</h5>
                <p>hello@digitexaai.in</p>
                <p>support@digitexaai.in</p>
              </div>
            </div>

            <div className="info-item">
              <Phone className="info-icon" size={20} />
              <div className="info-text">
                <h5>Call Us</h5>
                <p>+91 (800) 555-0199</p>
                <p>Mon - Fri, 9am - 6pm IST</p>
              </div>
            </div>

            <div className="info-item" style={{ marginBottom: 0 }}>
              <MapPin className="info-icon" size={20} />
              <div className="info-text">
                <h5>Location</h5>
                <p>Digitexa AI Headquarters</p>
                <p>Bengaluru, Karnataka, India</p>
              </div>
            </div>
          </div>

          <div className="glass-card" style={{ padding: '32px', textAlign: 'left' }}>
            <h4 style={{ fontSize: '1.1rem', marginBottom: '12px' }}>Project Discovery call</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '16px' }}>
              Want to skip the email draft? Schedule a direct video consultation with our lead technical architect to maps requirements.
            </p>
            <button className="btn btn-secondary" style={{ padding: '8px 16px', fontSize: '0.8rem', width: '100%' }}>
              Book 15min Call
            </button>
          </div>
        </div>
      </div>

      {/* Success Notification Toast */}
      {showSuccess && (
        <div className="toast-success">
          <CheckCircle2 size={20} />
          <div>
            <div style={{ fontWeight: '700', fontSize: '0.9rem' }}>Message Sent!</div>
            <div style={{ fontSize: '0.75rem', opacity: 0.9 }}>Thank you, we will contact you shortly.</div>
          </div>
        </div>
      )}

      {/* Inline styles for spinner animation */}
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
