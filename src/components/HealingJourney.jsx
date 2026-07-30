import React from 'react';
import { journeySteps } from '../data';
import { ArrowRight } from 'lucide-react';
import './HealingJourney.css';

const HealingJourney = () => {
  return (
    <section className="journey section-padding">
      <div className="container">
        <h2 className="section-title text-center">Your Healing Journey</h2>
        
        <div className="journey-timeline">
          <div className="timeline-line"></div>
          {journeySteps.map((step, index) => (
            <div key={index} className="journey-step">
              <div className="step-circle">
                <span className="step-number">{step.step}</span>
              </div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-50">
          <button className="btn btn-primary bg-primary-dark text-white hover-green">
            Begin Your Journey <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HealingJourney;
