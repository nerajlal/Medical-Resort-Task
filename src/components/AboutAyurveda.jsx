import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import './AboutAyurveda.css';

const AboutAyurveda = () => {
  return (
    <section className="about section-padding">
      <div className="container about-container">
        <div className="about-image-wrapper">
          <img 
            src="/images/kerala_houseboat_1785412368231.png" 
            alt="Kerala Backwaters Houseboat" 
            className="about-image"
          />
        </div>
        
        <div className="about-content">
          <h2 className="section-title">
            What Makes Kerala the Home <br/>
            of <span className="text-primary-green">Authentic Ayurveda?</span>
          </h2>
          <p className="about-description">
            Kerala is widely recognised for preserving Ayurveda in its traditional form. Its favourable climate, rich biodiversity, and generations of skilled practitioners make Ayurvedic treatment in Kerala a trusted choice for healing, rejuvenation, and holistic well-being.
          </p>
          
          <div className="about-features">
            <div className="feature-item">
              <CheckCircle2 className="feature-icon" size={20} />
              <span>Centuries-old Ayurvedic tradition</span>
            </div>
            <div className="feature-item">
              <CheckCircle2 className="feature-icon" size={20} />
              <span>Abundance of medicinal plants</span>
            </div>
            <div className="feature-item">
              <CheckCircle2 className="feature-icon" size={20} />
              <span>Qualified Ayurvedic doctors</span>
            </div>
            <div className="feature-item">
              <CheckCircle2 className="feature-icon" size={20} />
              <span>Authentic therapies and medicines</span>
            </div>
            <div className="feature-item">
              <CheckCircle2 className="feature-icon" size={20} />
              <span>Peaceful natural surroundings</span>
            </div>
            <div className="feature-item">
              <CheckCircle2 className="feature-icon" size={20} />
              <span>Holistic approach to well-being</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAyurveda;
