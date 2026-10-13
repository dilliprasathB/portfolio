import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Update active section based on scroll position
      const sections = ['home', 'abouts', 'skil', 'ject', 'contents'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#abouts', id: 'abouts' },
    { label: 'Skills', href: '#skil', id: 'skil' },
    { label: 'Projects', href: '#ject', id: 'ject' },
    { label: 'Contact', href: '#contents', id: 'contents' }
  ];

  return (
    <>
      <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <a href="#home" className="nav-brand">
            <span className="brand-badge">Dil̥l̥i</span>
            <span style={{ color: 'var(--purple-bright)' }}>Prāśāṭh</span>
          </a>

          {/* Desktop Navigation */}
          <nav>
            <ul className="nav-menu">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="nav-actions">
            <a
              href={personalInfo.resumeUrl}
              download
              className="btn btn-primary"
            >
              <span>Download CV</span>
              <i className="fa-solid fa-arrow-down"></i>
            </a>

            <button
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <button
          className="modal-close-btn"
          style={{ top: 25, right: 25 }}
          onClick={() => setMobileMenuOpen(false)}
          aria-label="Close menu"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>

        {navLinks.map((link) => (
          <a
            key={link.id}
            href={link.href}
            className={`mobile-nav-link ${activeSection === link.id ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}

        <a
          href={personalInfo.resumeUrl}
          download
          className="btn btn-primary"
          style={{ marginTop: 20 }}
          onClick={() => setMobileMenuOpen(false)}
        >
          <span>Download CV</span>
          <i className="fa-solid fa-arrow-down"></i>
        </a>
      </div>
    </>
  );
}
