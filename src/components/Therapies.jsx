import React from 'react';
import { therapies } from '../data';
import './Therapies.css';

const Therapies = () => {
  return (
    <section className="therapies bg-primary-dark section-padding">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title light">Ayurvedic Therapies</h2>
          <p className="therapies-desc">
            Traditional Ayurvedic therapies prescribed by qualified physicians and tailored to your individual health needs.
          </p>
        </div>

        <div className="therapies-slider">
          <div className="therapies-track">
            {[...therapies, ...therapies].map((therapy, index) => (
              <div key={index} className="therapy-card">
                <img src={therapy.image} alt={therapy.title} className="therapy-image" />
                <div className="therapy-overlay">
                  <h3 className="therapy-title">{therapy.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Therapies;
