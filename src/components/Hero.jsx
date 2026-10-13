import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="container hero-grid">
        <div className="hero-content">
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <span className="hero-greeting">{personalInfo.greeting}</span>
            <div className="status-indicator">
              <span className="pulse-dot"></span>
              <span>Available for Roles & Projects</span>
            </div>
          </div>

          <h1 className="hero-name">
            Dilli <span className="text-gradient">Prasath</span>
          </h1>

          <h2 className="hero-subtitle">
            Java Full Stack Developer & AI Enthusiast
          </h2>

          <p className="hero-description">
            {personalInfo.bioShort}
          </p>

          <div className="hero-cta">
            <a href="#ject" className="btn btn-primary">
              <span>View my works</span>
              <i className="fa-solid fa-right-long"></i>
            </a>
            <a href="#contents" className="btn btn-outline">
              <span>Hire Me</span>
              <i className="fa-regular fa-message"></i>
            </a>
          </div>

          <div className="social-links">
            {personalInfo.socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                title={social.name}
                aria-label={social.name}
              >
                <i className={social.icon}></i>
              </a>
            ))}
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image-wrapper">
            <div className="hero-glow-ring"></div>
            <img
              src="/img/casual_photo-removebg-preview.png"
              alt="Dilli Prasath"
              className="hero-img"
            />
            <div className="hero-floating-badge">
              <i className="fa-solid fa-circle fa-2xs" style={{ color: '#10b981' }}></i>
              <span>Java Full Stack</span>
              <i className="fa-solid fa-code" style={{ color: '#a855f7', marginLeft: 4 }}></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
