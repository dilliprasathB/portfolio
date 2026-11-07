import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="footer-container">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-brand-column">
            <a href="#home" className="footer-brand">
              <span className="brand-logo-badge">
                <span className="brand-logo-text">Dilli</span>
              </span>
              <span className="brand-surname">Prasath</span>
            </a>
            <p className="footer-bio">
              Java Full Stack Developer & AI Enthusiast crafting scalable backends, intuitive user experiences, and intelligent digital systems.
            </p>
            <div className="footer-availability">
              <span className="footer-status-dot"></span>
              <span>Available for Roles & Projects</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links-column">
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-nav-list">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="footer-nav-link">
                    <i className="fa-solid fa-chevron-right"></i>
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Profiles & Download */}
          <div className="footer-social-column">
            <h4 className="footer-heading">Connect & Socials</h4>
            <p className="footer-subtext">Reach out on social networks or view open source repositories.</p>
            <div className="footer-social-icons">
              {personalInfo.socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-btn"
                  title={social.name}
                  aria-label={social.name}
                >
                  <i className={social.icon} style={{ color: social.color }}></i>
                </a>
              ))}
            </div>

            <a
              href={personalInfo.resumeUrl}
              download="Dilli_Prasath_Resume.pdf"
              className="footer-resume-link"
            >
              <i className="fa-solid fa-file-arrow-down"></i>
              <span>Download Resume (PDF)</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="footer-copyright">
            © {new Date().getFullYear()} <strong>{personalInfo.fullName}</strong>. Designed with pure white & royal blue theme.
          </p>

          <button
            type="button"
            className="btn-back-to-top"
            onClick={scrollToTop}
            aria-label="Back to top"
            title="Back to Top"
          >
            <span>Top</span>
            <i className="fa-solid fa-arrow-up"></i>
          </button>
        </div>
      </div>
    </footer>
  );
}
