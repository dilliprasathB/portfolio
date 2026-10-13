import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const { contact } = personalInfo;

  return (
    <section className="section-wrapper" id="abouts">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">About Me</span>
          <h2 className="section-title">
            Get to Know <span className="text-gradient">Me Better</span>
          </h2>
          <p className="section-subtitle">
            A quick glimpse into my background, technical passion, and aspirations.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-text">
            {personalInfo.aboutParagraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}

            <div className="about-cards-row">
              <div className="info-card">
                <div className="info-card-icon">
                  <i className="fa-regular fa-calendar-days"></i>
                </div>
                <h4>Birthday</h4>
                <p>{contact.birthday}</p>
              </div>

              <div className="info-card">
                <div className="info-card-icon">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <h4>Location</h4>
                <p>{contact.location.split(',')[0]}</p>
              </div>

              <div className="info-card">
                <div className="info-card-icon">
                  <i className="fa-regular fa-envelope"></i>
                </div>
                <h4>Email</h4>
                <p style={{ fontSize: '0.85rem' }}>{contact.email}</p>
              </div>

              <div className="info-card">
                <div className="info-card-icon">
                  <i className="fa-solid fa-graduation-cap"></i>
                </div>
                <h4>Degree</h4>
                <p>B.Tech AI & DS</p>
              </div>
            </div>
          </div>

          <div className="about-visual">
            <div className="about-image-card">
              <img
                src="/img/my_image.png"
                alt="Dilli Prasath Portrait"
                className="about-img"
              />
              <h3>Dilli Prasath</h3>
              <p className="role-sub">AI & Full Stack Developer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
