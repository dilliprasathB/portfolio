import React, { useState } from 'react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Frontend', 'Backend', 'Database', 'Analytics', 'AI & Tech'];

  const filteredSkills = activeCategory === 'All'
    ? skillsData
    : skillsData.filter((s) => s.category.toLowerCase().includes(activeCategory.toLowerCase()));

  return (
    <section className="section-wrapper" id="skil" style={{ background: 'rgba(255, 255, 255, 0.01)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Technical Expertise</span>
          <h2 className="section-title">
            Tech Stack <span className="text-gradient">I Work With</span>
          </h2>
          <p className="section-subtitle">
            Languages, libraries, databases, and frameworks I use to bring ideas to life.
          </p>
        </div>

        <div className="skills-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`tab-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="skills-grid">
          {filteredSkills.map((skill) => (
            <div key={skill.name} className="skill-card">
              <div className="skill-icon-box" style={{ color: skill.color }}>
                <i className={skill.icon}></i>
              </div>
              <div className="skill-info">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-category">{skill.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
