import React, { useEffect } from 'react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className="modal-container"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="modal-close-icon-btn"
          onClick={onClose}
          aria-label="Close modal dialog"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>

        <div className="modal-header-visual">
          <img
            src={project.image}
            alt={project.title}
            className="modal-header-img"
            onError={(e) => {
              if (project.fallbackImage) {
                e.target.src = project.fallbackImage;
              }
            }}
          />
          <div className="modal-category-badge">{project.category}</div>
        </div>

        <div className="modal-content-body">
          <h2 className="modal-project-title">{project.title}</h2>
          <h4 className="modal-project-subtitle">{project.subtitle}</h4>

          <div className="modal-tech-stack">
            {project.technologies.map((tech) => (
              <span key={tech} className="tech-tag-pill">
                {tech}
              </span>
            ))}
          </div>

          <div className="modal-section-block">
            <h4>Project Overview</h4>
            <p>{project.details || project.description}</p>
          </div>

          {project.highlights && (
            <div className="modal-section-block">
              <h4>Key Highlights & Architecture</h4>
              <ul className="modal-highlights-list">
                {project.highlights.map((item, idx) => (
                  <li key={idx}>
                    <i className="fa-solid fa-circle-check"></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="modal-actions-footer">
            <a
              href={project.githubUrl || "https://github.com/dilliprasathB"}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-royal-solid"
            >
              <i className="fa-brands fa-github"></i>
              <span>View Source Code</span>
            </a>

            {project.demoUrl ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-royal-outline"
              >
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
                <span>Open Live Demo</span>
              </a>
            ) : null}

            <button
              type="button"
              className="btn-modal-close"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
