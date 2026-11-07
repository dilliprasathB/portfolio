import React from 'react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section className="section-wrapper bg-alt" id="experience">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Career Journey</span>
          <h2 className="section-title">
            Internship & <span className="text-royal">Work Experience</span>
          </h2>
          <p className="section-subtitle">
            Professional background, hands-on internships, and engineering contributions across full-stack applications.
          </p>
        </div>

        <div className="experience-timeline">
          {experienceData.map((item, index) => (
            <div key={item.id} className="timeline-item">
              <div className="timeline-marker">
                <div className="timeline-dot">
                  <i className="fa-solid fa-briefcase"></i>
                </div>
                {index < experienceData.length - 1 && <div className="timeline-line"></div>}
              </div>

              <div className="timeline-content">
                <div className="experience-card">
                  <div className="exp-card-header">
                    <div className="exp-role-info">
                      <div className="exp-type-badge">{item.type}</div>
                      <h3 className="exp-role">{item.role}</h3>
                      <h4 className="exp-company">
                        <i className="fa-regular fa-building"></i>
                        <span>{item.company}</span>
                      </h4>
                    </div>

                    <div className="exp-meta">
                      <span className="exp-duration">
                        <i className="fa-regular fa-calendar-days"></i>
                        <span>{item.duration}</span>
                      </span>
                      <span className="exp-location">
                        <i className="fa-solid fa-location-dot"></i>
                        <span>{item.location}</span>
                      </span>
                    </div>
                  </div>

                  <p className="exp-desc">{item.description}</p>

                  <div className="exp-responsibilities">
                    <h5>Key Responsibilities & Deliverables:</h5>
                    <ul>
                      {item.responsibilities.map((resp, i) => (
                        <li key={i}>
                          <i className="fa-solid fa-circle-check"></i>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

