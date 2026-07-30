import React from 'react';
import { ArrowRight } from 'lucide-react';
import './YogaComplement.css';

const YogaComplement = () => {
  return (
    <section className="yoga section-padding">
      <div className="container yoga-container">
        <div className="yoga-content">
          <h2 className="section-title">
            Yoga as a Complement to <br/>
            <span className="text-primary-green">Ayurvedic Care</span>
          </h2>
          <p className="yoga-desc">
            Yoga is a holistic practice that supports harmony between the mind, body, and breath. When integrated with Ayurvedic principles, it encourages balance, mindful living, and overall well-being.
          </p>
          <p className="yoga-desc">
            In therapeutic settings, yoga may help reduce stress, improve flexibility, support emotional well-being, and promote relaxation. Practices are recommended according to an individual's health needs and abilities.
          </p>
          
          <div className="yoga-features">
            <ul>
              <li>Asanas (Physical Postures)</li>
              <li>Meditation</li>
              <li>Kriyas (Cleansing)</li>
            </ul>
            <ul>
              <li>Pranayama (Breathing)</li>
              <li>Relaxation Techniques</li>
              <li>Yoga Nidra</li>
            </ul>
          </div>

          <a href="#" className="yoga-link">
            Learn more about Yoga for Breast Cancer Support <ArrowRight size={16} />
          </a>
        </div>

        <div className="yoga-image-wrapper">
          <img 
            src="/images/yoga_sunset_1785412379893.png" 
            alt="Yoga Practice" 
            className="yoga-image"
          />
        </div>
      </div>
    </section>
  );
};

export default YogaComplement;
