import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 220;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const el = document.getElementById(sectionId);
        if (el && scrollPosition >= el.offsetTop) {
          setActiveSection(sectionId);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Contact', href: '#contact', id: 'contact' }
  ];

  const handleNavClick = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <a href="#home" className="nav-brand" onClick={() => handleNavClick('home')}>
            <span className="brand-logo-badge">
              <span className="brand-logo-text">Dilli</span>
              <span className="brand-logo-dots">
                <span className="brand-dot"></span>
                <span className="brand-line"></span>
                <span className="brand-dot"></span>
              </span>
            </span>
            <span className="brand-surname">Prasath</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            <ul className="nav-menu">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                    onClick={() => handleNavClick(link.id)}
                  >
                    <span>{link.label}</span>
                    {activeSection === link.id && <span className="active-pill-bar"></span>}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="nav-actions">
            <a
              href={personalInfo.resumeUrl}
              download="Dilli_Prasath_Resume.pdf"
              className="btn-download-cv"
              title="Download Dilli's CV"
            >
              <span>Download CV</span>
              <i className="fa-solid fa-arrow-down"></i>
            </a>

            <button
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Backdrop & Drawer */}
      <div 
        className={`mobile-backdrop ${mobileMenuOpen ? 'open' : ''}`} 
        onClick={() => setMobileMenuOpen(false)}
      />
      
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-header">
          <a href="#home" className="nav-brand" onClick={() => handleNavClick('home')}>
            <span className="brand-logo-badge">
              <span className="brand-logo-text">Dilli</span>
            </span>
            <span className="brand-surname">Prasath</span>
          </a>
          <button
            className="mobile-close-btn"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        <nav className="mobile-nav-list">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`mobile-nav-link ${activeSection === link.id ? 'active' : ''}`}
              onClick={() => handleNavClick(link.id)}
            >
              <span>{link.label}</span>
              {activeSection === link.id && <i className="fa-solid fa-check"></i>}
            </a>
          ))}
        </nav>

        <div className="mobile-drawer-footer">
          <a
            href={personalInfo.resumeUrl}
            download="Dilli_Prasath_Resume.pdf"
            className="btn-download-cv full-width"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span>Download CV</span>
            <i className="fa-solid fa-arrow-down"></i>
          </a>
        </div>
      </div>
    </>
  );
}
