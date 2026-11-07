import React, { useState } from 'react';
import { skillsData, skillsCategories } from '../data/portfolioData';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = activeCategory === 'all'
    ? skillsData
    : skillsData.filter((skill) => skill.categoryKey === activeCategory);

  return (
    <section className="section-wrapper" id="skills">
      {/* Anchor alias */}
      <span id="skil" style={{ position: 'relative', top: '-100px', visibility: 'hidden' }}></span>

      <div className="container">
        <div className="section-header">
          <span className="section-badge">Technical Competence</span>
          <h2 className="section-title">
            Skills & <span className="text-royal">Technologies</span>
          </h2>
          <p className="section-subtitle">
            Languages, frameworks, databases, and enterprise tools I leverage to build dependable software.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="skills-filter-container">
          <div className="skills-filter-tabs" role="tablist" aria-label="Skills Category Filters">
            {skillsCategories.map((cat) => (
              <button
                key={cat.id}
                role="tab"
                aria-selected={activeCategory === cat.id}
                className={`skill-tab-btn ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid-container">
          {filteredSkills.map((skill) => (
            <div key={skill.name} className="skill-card-item">
              <div className="skill-card-top">
                <div className="skill-icon-holder" style={{ color: skill.color }}>
                  <i className={skill.icon}></i>
                </div>
                <span className="skill-level-pill">{skill.level}</span>
              </div>

              <div className="skill-card-details">
                <h4 className="skill-title">{skill.name}</h4>
                <p className="skill-category-name">{skill.category}</p>
              </div>

              <div className="skill-card-bottom-accent"></div>
            </div>
          ))}
        </div>

        {/* Skills Summary Banner */}
        <div className="skills-summary-banner">
          <div className="summary-banner-icon">
            <i className="fa-solid fa-code"></i>
          </div>
          <div className="summary-banner-text">
            <h4>Continuous Upskilling & Modern Architecture</h4>
            <p>
              Dedicated to writing clean, maintainable code, adhering to SOLID principles, and building scalable full-stack applications with optimal database schema performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
