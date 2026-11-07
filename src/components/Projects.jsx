import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Full Stack', 'Backend', 'Frontend', 'AI & Tech', 'Analytics', 'Database'];

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeFilter);

  return (
    <section className="section-wrapper" id="projects">
      {/* Anchor alias */}
      <span id="ject" style={{ position: 'relative', top: '-100px', visibility: 'hidden' }}></span>

      <div className="container">
        <div className="section-header">
          <span className="section-badge">Featured Work</span>
          <h2 className="section-title">
            Recent Engineering <span className="text-royal">Projects</span>
          </h2>
          <p className="section-subtitle">
            A showcase of real-world full stack applications, AI integrations, data analytics, and database architectures.
          </p>
        </div>

        {/* Project Filter Tabs */}
        <div className="skills-filter-container">
          <div className="skills-filter-tabs" role="tablist" aria-label="Project Categories">
            {categories.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={activeFilter === cat}
                className={`skill-tab-btn ${activeFilter === cat ? 'active' : ''}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid-container">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-modern-card">
              <div className="project-media-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-media-img"
                  loading="lazy"
                  onError={(e) => {
                    if (project.fallbackImage) {
                      e.target.src = project.fallbackImage;
                    }
                  }}
                />
                <div className="project-category-tag">
                  {project.category}
                </div>
              </div>

              <div className="project-card-body">
                <h3 className="project-card-title">{project.title}</h3>
                <h4 className="project-card-subtitle">{project.subtitle}</h4>
                <p className="project-card-desc">{project.description}</p>

                <div className="project-tech-tags">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag-pill">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-card-actions">
                  <button
                    type="button"
                    className="btn-project-details"
                    onClick={() => setSelectedProject(project)}
                  >
                    <i className="fa-solid fa-circle-info"></i>
                    <span>Details</span>
                  </button>

                  <a
                    href={project.githubUrl || "https://github.com/dilliprasathB"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-project-code"
                    title={`View ${project.title} code on GitHub`}
                  >
                    <i className="fa-brands fa-github"></i>
                    <span>GitHub</span>
                  </a>

                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-project-demo"
                      title={`Visit ${project.title} live demo`}
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square"></i>
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
