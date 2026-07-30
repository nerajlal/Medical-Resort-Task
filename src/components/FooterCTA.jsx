import React from 'react';
import './FooterCTA.css';

const FooterCTA = () => {
  return (
    <footer className="footer-cta bg-primary-dark section-padding">
      <div className="container text-center">
        <h2 className="section-title light">
          Start Your Healing Journey with <br/>
          <span className="text-primary-green">Heal in Kerala</span>
        </h2>
        <p className="cta-desc">
          Our care team is here to guide you through consultations, treatment planning, and every stage of your Ayurvedic care experience.
        </p>
        
        <div className="cta-actions">
          <button className="btn btn-primary">Book Consultation</button>
          <button className="btn btn-outline">WhatsApp Us</button>
        </div>
      </div>
    </footer>
  );
};

export default FooterCTA;
