import React, { useEffect } from 'react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <i className="fa-solid fa-xmark"></i>
        </button>

        <img
          src={project.image}
          alt={project.title}
          className="modal-img"
          onError={(e) => {
            if (project.fallbackImage) {
              e.target.src = project.fallbackImage;
            }
          }}
        />

        <div className="modal-header">
          <h3>{project.title}</h3>
          <p className="modal-subtitle">{project.subtitle}</p>
        </div>

        <div className="project-tags" style={{ marginBottom: 16 }}>
          {project.technologies.map((tech) => (
            <span key={tech} className="tag-badge">
              {tech}
            </span>
          ))}
        </div>

        <p className="modal-details">{project.details || project.description}</p>

        {project.highlights && (
          <div className="modal-highlights">
            <h4>Key Features & Technical Highlights:</h4>
            <ul>
              {project.highlights.map((h, i) => (
                <li key={i}>
                  <i className="fa-solid fa-circle-check"></i>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div style={{ display: 'flex', gap: 12, marginTop: 20 }}>
          <a
            href="https://github.com/dilliprasathB"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ flex: 1 }}
          >
            <i className="fa-brands fa-github"></i>
            <span>View GitHub Repository</span>
          </a>
        </div>
      </div>
    </div>
  );
}
