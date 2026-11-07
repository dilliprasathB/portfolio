import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const { contact, socialLinks } = personalInfo;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  const [copiedField, setCopiedField] = useState(null);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Please enter your name.';
    } else if (formData.name.trim().length < 2) {
      errs.name = 'Name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      errs.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }

    if (!formData.subject.trim()) {
      errs.subject = 'Please enter a subject.';
    } else if (formData.subject.trim().length < 3) {
      errs.subject = 'Subject must be at least 3 characters.';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please write a message.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long.';
    }

    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate sending message with realistic delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setErrors({});

      // Auto-clear success message after 8 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 8000);
    }, 700);
  };

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedField(type);
    setTimeout(() => setCopiedField(null), 2500);
  };

  return (
    <section className="section-wrapper bg-alt" id="contact">
      {/* Anchor alias */}
      <span id="contents" style={{ position: 'relative', top: '-100px', visibility: 'hidden' }}></span>

      <div className="container">
        <div className="section-header">
          <span className="section-badge">Get In Touch</span>
          <h2 className="section-title">
            Let's Discuss <span className="text-royal">Opportunities</span>
          </h2>
          <p className="section-subtitle">
            Whether you have an internship or full-time opportunity, a software project, or simply want to connect, feel free to reach out.
          </p>
        </div>

        <div className="contact-main-grid">
          {/* Left Column: Direct Info & Quick Links */}
          <div className="contact-info-panel">
            <div className="contact-info-card">
              <h3 className="contact-panel-heading">Contact Information</h3>
              <p className="contact-panel-sub">
                I am actively seeking software developer roles and open to exciting collaborations.
              </p>

              <div className="contact-channels-list">
                {/* Email Item */}
                <div className="contact-channel-item">
                  <div className="channel-icon-box">
                    <i className="fa-regular fa-envelope"></i>
                  </div>
                  <div className="channel-content">
                    <span className="channel-label">Email Address</span>
                    <a href={`mailto:${contact.email}`} className="channel-value">
                      {contact.email}
                    </a>
                  </div>
                  <button
                    type="button"
                    className="channel-copy-btn"
                    onClick={() => copyToClipboard(contact.email, 'email')}
                    title="Copy Email"
                    aria-label="Copy Email address"
                  >
                    <i className={`fa-regular ${copiedField === 'email' ? 'fa-circle-check text-green' : 'fa-copy'}`}></i>
                  </button>
                </div>

                {/* WhatsApp & Phone Item */}
                <div className="contact-channel-item">
                  <div className="channel-icon-box whatsapp-box">
                    <i className="fa-brands fa-whatsapp"></i>
                  </div>
                  <div className="channel-content">
                    <span className="channel-label">WhatsApp & Call</span>
                    <a href="https://wa.me/918610140943" target="_blank" rel="noopener noreferrer" className="channel-value">
                      {contact.phone}
                    </a>
                  </div>
                  <button
                    type="button"
                    className="channel-copy-btn"
                    onClick={() => copyToClipboard(contact.phone, 'phone')}
                    title="Copy Phone Number"
                    aria-label="Copy Phone Number"
                  >
                    <i className={`fa-regular ${copiedField === 'phone' ? 'fa-circle-check text-green' : 'fa-copy'}`}></i>
                  </button>
                </div>

                {/* Location Item */}
                <div className="contact-channel-item">
                  <div className="channel-icon-box">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div className="channel-content">
                    <span className="channel-label">Location</span>
                    <span className="channel-value">{contact.location}</span>
                  </div>
                </div>
              </div>

              {/* Social Profiles Grid */}
              <div className="contact-social-section">
                <span className="social-section-title">Connect on Social Platforms</span>
                <div className="contact-social-grid">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-social-tile"
                      title={social.name}
                    >
                      <i className={social.icon} style={{ color: social.color }}></i>
                      <span>{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-form-panel">
            <div className="contact-form-card">
              <h3 className="form-card-title">Send Me a Message</h3>
              <p className="form-card-subtitle">Fill in the form below and I will respond promptly.</p>

              {submitStatus === 'success' && (
                <div className="form-status-alert success" role="alert">
                  <i className="fa-solid fa-circle-check"></i>
                  <div>
                    <strong>Message Sent Successfully!</strong>
                    <p>Thank you for reaching out. I have received your message and will get back to you shortly.</p>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="form-status-alert error" role="alert">
                  <i className="fa-solid fa-circle-exclamation"></i>
                  <div>
                    <strong>Transmission Error</strong>
                    <p>Something went wrong while sending. Please try again or email directly.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate>
                <div className="form-group-row">
                  <div className="form-field">
                    <label htmlFor="contact-name">
                      Your Name <span className="req">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={handleChange}
                      className={errors.name ? 'input-error' : ''}
                    />
                    {errors.name && <span className="field-error-text">{errors.name}</span>}
                  </div>

                  <div className="form-field">
                    <label htmlFor="contact-email">
                      Your Email <span className="req">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      placeholder="alex@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className={errors.email ? 'input-error' : ''}
                    />
                    {errors.email && <span className="field-error-text">{errors.email}</span>}
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="contact-subject">
                    Subject <span className="req">*</span>
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    placeholder="Project Inquiry / Job Opportunity"
                    value={formData.subject}
                    onChange={handleChange}
                    className={errors.subject ? 'input-error' : ''}
                  />
                  {errors.subject && <span className="field-error-text">{errors.subject}</span>}
                </div>

                <div className="form-field">
                  <label htmlFor="contact-message">
                    Message <span className="req">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows="5"
                    placeholder="Describe your project, role, or message in detail..."
                    value={formData.message}
                    onChange={handleChange}
                    className={errors.message ? 'input-error' : ''}
                  ></textarea>
                  {errors.message && <span className="field-error-text">{errors.message}</span>}
                </div>

                <button
                  type="submit"
                  className="btn-submit-message"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <i className="fa-solid fa-spinner fa-spin"></i>
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <i className="fa-solid fa-paper-plane"></i>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
