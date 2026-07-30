import React from 'react';
import { doctors } from '../data';
import './ExpertDoctors.css';

const ExpertDoctors = () => {
  return (
    <section className="doctors section-padding">
      <div className="container">
        <h2 className="section-title text-center">
          Meet Our <span className="text-primary-green">Expert Doctors</span>
        </h2>
        
        <div className="doctors-slider">
          <div className="doctors-track">
            {[...doctors, ...doctors].map((doc, index) => (
              <div key={index} className="doctor-card">
                <div className="doc-image-wrapper">
                  {doc.image ? (
                    <img src={doc.image} alt={doc.name} className="doc-avatar" />
                  ) : (
                    <div className="doc-avatar"></div>
                  )}
                  <div className="doc-badge">10+ Years</div>
                </div>
                <h3 className="doc-name">{doc.name}</h3>
                <p className="doc-quals">{doc.quals}</p>
                <p className="doc-role">{doc.role}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-50">
          <button className="btn btn-outline-dark">View All Doctors</button>
        </div>
      </div>
    </section>
  );
};

export default ExpertDoctors;
