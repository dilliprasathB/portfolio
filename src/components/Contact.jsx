import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const { contact } = personalInfo;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate sending message
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      // Reset notification after 6 seconds
      setTimeout(() => setSubmitted(false), 6000);
    }, 800);
  };

  return (
    <section className="section-wrapper" id="contents">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Get In Touch</span>
          <h2 className="section-title">
            Let's Build Something <span className="text-gradient">Amazing Together</span>
          </h2>
          <p className="section-subtitle">
            Have a project in mind, seeking a developer, or want to say hello? Reach out directly!
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-headline">
              <h3>Connect Directly</h3>
              <p>Feel free to reach out via phone, email, or WhatsApp. I usually respond within a few hours.</p>
            </div>

            <div className="contact-channels">
              <a
                href="https://maps.google.com/?q=Chennai"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
              >
                <div className="contact-item-icon">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div className="contact-item-details">
                  <span>Location</span>
                  <strong>{contact.location}</strong>
                </div>
              </a>

              <a
                href={`tel:${contact.phone.replace(/\s+/g, '')}`}
                className="contact-item"
              >
                <div className="contact-item-icon">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div className="contact-item-details">
                  <span>Phone Number</span>
                  <strong>{contact.phone}</strong>
                </div>
              </a>

              <a
                href={`mailto:${contact.email}`}
                className="contact-item"
              >
                <div className="contact-item-icon">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div className="contact-item-details">
                  <span>Email Address</span>
                  <strong>{contact.email}</strong>
                </div>
              </a>

              <a
                href="https://wa.me/918610140943"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
              >
                <div className="contact-item-icon" style={{ color: '#25d366' }}>
                  <i className="fa-brands fa-whatsapp"></i>
                </div>
                <div className="contact-item-details">
                  <span>WhatsApp Chat</span>
                  <strong>+91 8610140943</strong>
                </div>
              </a>
            </div>
          </div>

          <div className="contact-form-box">
            {submitted && (
              <div className="alert-box alert-success">
                <i className="fa-solid fa-circle-check"></i>
                <span>Thank you! Your message has been sent successfully. I will get back to you soon.</span>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="e.g. John Doe"
                  className="form-input"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="e.g. johndoe@example.com"
                  className="form-input"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  placeholder="e.g. Project Collaboration or Job Opportunity"
                  className="form-input"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Share details about your inquiry or project..."
                  className="form-textarea"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: '100%', padding: '15px' }}
                disabled={loading}
              >
                {loading ? (
                  <span>Sending message...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <i className="fa-regular fa-paper-plane"></i>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
