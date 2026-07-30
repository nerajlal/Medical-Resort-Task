import React from 'react';
import { treatments } from '../data';
import { Activity, Beaker, Heart, Shield, Droplet, Sun, Wind, Leaf } from 'lucide-react';
import './Treatments.css';

// A simple map to assign an icon to each treatment based on its title
const getIcon = (index) => {
  const icons = [Beaker, Activity, Shield, Wind, Droplet, Heart, Leaf, Sun];
  const IconComponent = icons[index % icons.length];
  return <IconComponent size={24} color="#85c249" />;
};

const Treatments = () => {
  return (
    <section className="treatments section-padding">
      <div className="container">
        <h2 className="section-title text-center">Ayurvedic Treatments We Offer</h2>
        
        <div className="treatments-grid">
          {treatments.map((treatment, index) => (
            <div key={index} className="treatment-card">
              <div className="treatment-icon-wrapper">
                {getIcon(index)}
              </div>
              <h3 className="treatment-title">{treatment.title}</h3>
              <p className="treatment-desc">{treatment.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Treatments;
