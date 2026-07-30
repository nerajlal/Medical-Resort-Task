import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero bg-primary-dark">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Authentic <br />
            <span className="text-primary-green">Ayurvedic</span> <br />
            Treatment in <br />
            Kerala
          </h1>
          <p className="hero-description">
            Receive authentic Ayurvedic treatment in Kerala from experienced doctors at trusted treatment centres. With personalised care rooted in centuries-old healing traditions, our programs restore balance, support recovery, and improve your overall well-being.
          </p>
          
          <div className="hero-benefits">
            <div className="benefit-item">
              <Check className="benefit-icon" size={16} />
              <span>Government-Recognised Treatment Centres</span>
            </div>
            <div className="benefit-item">
              <Check className="benefit-icon" size={16} />
              <span>Qualified Ayurvedic Doctors</span>
            </div>
            <div className="benefit-item">
              <Check className="benefit-icon" size={16} />
              <span>Authentic Kerala Ayurveda</span>
            </div>
            <div className="benefit-item">
              <Check className="benefit-icon" size={16} />
              <span>International Patient Support</span>
            </div>
          </div>

          <div className="hero-actions">
            <button className="btn btn-primary">
              Book Consultation <ArrowRight size={18} />
            </button>
            <button className="btn btn-outline">
              WhatsApp Us
            </button>
          </div>
        </div>
        
        <div className="hero-image-wrapper">
          <img 
            src="/images/hero_shirodhara_1785412358020.png" 
            alt="Ayurvedic Shirodhara Treatment" 
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
