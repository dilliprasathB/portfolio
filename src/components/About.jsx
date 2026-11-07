import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const { contact } = personalInfo;

  return (
    <section className="section-wrapper bg-alt" id="about">
      {/* Also keep id="abouts" as an anchor anchor target for compatibility */}
      <span id="abouts" style={{ position: 'relative', top: '-100px', visibility: 'hidden' }}></span>
      
      <div className="container">
        <div className="section-header">
          <span className="section-badge">About Me</span>
          <h2 className="section-title">
            Passionate Engineer, <span className="text-royal">Lifelong Learner</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive look into my academic journey, core engineering philosophies, and career goals.
          </p>
        </div>

        <div className="about-grid">
          {/* Left Column: Text & Structured Info Cards */}
          <div className="about-text-content">
            <div className="about-intro-highlight">
              <h3>Hello! I am Dilli Prasath</h3>
              <p className="intro-lead">
                A Java Full Stack Developer and AI Enthusiast based in Chennai, committed to creating scalable, user-centric software that makes a tangible impact.
              </p>
            </div>

            <div className="about-paragraphs">
              {personalInfo.aboutParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Quick Information Cards */}
            <div className="about-info-grid">
              <div className="about-info-card">
                <div className="info-icon-wrapper">
                  <i className="fa-solid fa-graduation-cap"></i>
                </div>
                <div className="info-card-text">
                  <span className="info-label">Education</span>
                  <strong className="info-value">B.Tech in AI & Data Science</strong>
                  <span className="info-sub">{contact.college}</span>
                </div>
              </div>

              <div className="about-info-card">
                <div className="info-icon-wrapper">
                  <i className="fa-solid fa-laptop-code"></i>
                </div>
                <div className="info-card-text">
                  <span className="info-label">Specialization</span>
                  <strong className="info-value">Java Full Stack & AI</strong>
                  <span className="info-sub">Spring Boot, React & SQL</span>
                </div>
              </div>

              <div className="about-info-card">
                <div className="info-icon-wrapper">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div className="info-card-text">
                  <span className="info-label">Location</span>
                  <strong className="info-value">{contact.location}</strong>
                  <span className="info-sub">Open to Remote & On-site</span>
                </div>
              </div>

              <div className="about-info-card">
                <div className="info-icon-wrapper">
                  <i className="fa-regular fa-envelope"></i>
                </div>
                <div className="info-card-text">
                  <span className="info-label">Direct Contact</span>
                  <strong className="info-value">{contact.email}</strong>
                  <span className="info-sub">{contact.phone}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Portrait Card */}
          <div className="about-visual-column">
            <div className="about-card-container">
              <div className="about-card-decorative-layer"></div>
              <div className="about-card-content">
                <div className="about-image-frame">
                  <img
                    src="/img/my_image.png"
                    alt="Dilli Prasath - Profile"
                    className="about-profile-img"
                    onError={(e) => {
                      e.target.src = '/img/dilli_portrait_clean.png';
                    }}
                  />
                  <div className="about-image-overlay-badge">
                    <span className="overlay-pulse"></span>
                    <span>Ready for New Opportunities</span>
                  </div>
                </div>

                <div className="about-card-meta">
                  <h3 className="about-card-name">Dilli Prasath B</h3>
                  <p className="about-card-title">Java Full Stack Developer</p>
                  
                  <div className="about-tags-row">
                    <span className="about-mini-tag">Java</span>
                    <span className="about-mini-tag">Spring Boot</span>
                    <span className="about-mini-tag">React</span>
                    <span className="about-mini-tag">MySQL</span>
                    <span className="about-mini-tag">AI/DS</span>
                  </div>

                  <a
                    href={personalInfo.resumeUrl}
                    download="Dilli_Prasath_Resume.pdf"
                    className="btn-about-cv"
                  >
                    <i className="fa-solid fa-file-arrow-down"></i>
                    <span>Download Full Resume</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
