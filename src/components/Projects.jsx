import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Frontend', 'AI & Tech', 'Analytics', 'Database'];

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeFilter);

  return (
    <section className="section-wrapper" id="ject">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Portfolio</span>
          <h2 className="section-title">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="section-subtitle">
            Some things I have engineered across web development, computer vision, data analytics, and database design.
          </p>
        </div>

        <div className="skills-tabs" style={{ marginBottom: 35 }}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`tab-btn ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image-box">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-img"
                  onError={(e) => {
                    if (project.fallbackImage) {
                      e.target.src = project.fallbackImage;
                    }
                  }}
                />
                <div className="project-overlay"></div>
                <span className="project-category-badge">{project.category}</span>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>

                <div className="project-tags">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tag-badge">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-actions">
                  <button
                    className="btn-card"
                    onClick={() => setSelectedProject(project)}
                  >
                    <i className="fa-solid fa-circle-info"></i>
                    <span>Details</span>
                  </button>
                  <a
                    href="https://github.com/dilliprasathB"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-card"
                  >
                    <i className="fa-brands fa-github"></i>
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
