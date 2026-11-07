import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section className="hero-section" id="home">
      {/* Subtle decorative background accents */}
      <div className="hero-bg-accent hero-bg-accent-left" aria-hidden="true"></div>
      <div className="hero-bg-accent hero-bg-accent-right" aria-hidden="true"></div>

      <div className="container hero-grid">
        {/* Left Column: Hero Content */}
        <div className="hero-content">
          <div className="hero-top-row">
            <span className="hero-greeting">{personalInfo.greeting}</span>
            <div className="availability-badge" title="Actively looking for exciting roles">
              <span className="status-dot"></span>
              <span className="status-text">{personalInfo.availability}</span>
            </div>
          </div>

          <h1 className="hero-name">
            Dilli <span>Prasath</span>
          </h1>

          <h2 className="hero-role-title">
            {personalInfo.title}
          </h2>

          <p className="hero-description">
            {personalInfo.bioShort}
          </p>

          <div className="hero-cta-group">
            <a href="#projects" className="btn-royal-solid">
              <span>View My Works</span>
              <i className="fa-solid fa-arrow-right-long"></i>
            </a>

            <a href="#contact" className="btn-royal-outline">
              <span>Hire Me</span>
              <i className="fa-regular fa-comment-dots"></i>
            </a>
          </div>

          {/* Social Media Cards */}
          <div className="hero-social-row">
            {personalInfo.socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-card-btn"
                title={social.name}
                aria-label={`Visit Dilli's ${social.name} profile`}
              >
                <i className={social.icon} style={{ color: social.color }}></i>
              </a>
            ))}
          </div>
        </div>

        {/* Right Column: Portrait Visual with Abstract Blue Shapes */}
        <div className="hero-visual">
          <div className="hero-visual-stage">
            {/* Layer 1: Abstract Light Blue Outer Shape */}
            <div className="abstract-shape abstract-shape-light" aria-hidden="true">
              <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M420,130 C490,210 470,350 400,420 C330,490 190,480 120,410 C50,340 50,210 110,130 C170,50 350,50 420,130 Z"
                  fill="#DCE9FF"
                />
              </svg>
            </div>

            {/* Layer 2: Abstract Royal Blue Inner Slanted Capsule Shape */}
            <div className="abstract-shape abstract-shape-royal" aria-hidden="true">
              <svg viewBox="0 0 450 450" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M380,180 C430,260 410,380 340,410 C270,440 160,390 100,320 C40,250 50,150 110,90 C170,30 330,100 380,180 Z"
                  fill="url(#royalGradient)"
                />
                <defs>
                  <linearGradient id="royalGradient" x1="100" y1="50" x2="380" y2="400" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#0B4BD4" />
                    <stop offset="1" stopColor="#0645C5" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Layer 3: Soft ambient light-blue glow */}
            <div className="hero-ambient-glow" aria-hidden="true"></div>

            {/* Layer 4: Transparent PNG Profile Cutout */}
            <div className="hero-portrait-frame">
              <img
                src="/img/dilli-profile.png"
                alt="Dilli Prasath - Java Full Stack Developer & AI Enthusiast"
                className="profile-image"
                loading="eager"
                onError={(e) => {
                  e.target.src = '/dilli-profile.png';
                }}
              />
            </div>

            {/* Layer 5: Floating Label Badge: Java Full Stack </> */}
            <div className="hero-floating-badge" title="Java Full Stack Developer">
              <span className="badge-dot"></span>
              <span className="badge-text">Java Full Stack</span>
              <span className="badge-code-icon">&lt;/&gt;</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
