import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-top">
          <div className="footer-quote">
            <h3>{personalInfo.fullName}</h3>
            <p>"Happiness is nothing more than a state of mind."</p>
          </div>

          <button
            className="scroll-top-btn"
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            title="Back to Top"
          >
            <i className="fa-solid fa-circle-arrow-up"></i>
          </button>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} {personalInfo.fullName}. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '20px' }}>
            <a href="#home" style={{ color: 'var(--text-secondary)' }}>Home</a>
            <a href="#abouts" style={{ color: 'var(--text-secondary)' }}>About</a>
            <a href="#skil" style={{ color: 'var(--text-secondary)' }}>Skills</a>
            <a href="#ject" style={{ color: 'var(--text-secondary)' }}>Projects</a>
            <a href="#contents" style={{ color: 'var(--text-secondary)' }}>Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
