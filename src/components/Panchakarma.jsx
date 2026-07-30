import React, { useState } from 'react';
import { panchakarmaTabs } from '../data';
import './Panchakarma.css';

const Panchakarma = () => {
  const [activeTab, setActiveTab] = useState(panchakarmaTabs[0].id);
  const activeIndex = panchakarmaTabs.findIndex(t => t.id === activeTab);

  return (
    <section className="panchakarma section-padding">
      <div className="container">
        <div className="panchakarma-header">
          <h2 className="section-title">
            Panchakarma Treatment <span className="text-primary-green">in Kerala</span>
          </h2>
          <p className="panchakarma-desc">
            Panchakarma comprises five cleansing therapies, traditionally known as Pancha Shodhana, performed under a physician's guidance and tailored to individual needs.
          </p>
        </div>

        <div className="panchakarma-layout">
          {/* Left side: Content Card */}
          <div className="tab-content">
            <div className="tab-card">
              <div className="tab-text-content">
                <span className="tab-index">0{activeIndex + 1} / 0{panchakarmaTabs.length}</span>
                <h3 className="tab-title">{panchakarmaTabs[activeIndex].label}</h3>
                <p className="tab-details">
                  {panchakarmaTabs[activeIndex].desc}
                </p>
              </div>
              <div className="tab-image-wrapper">
                <img 
                  src="/images/kerala_houseboat_1785412368231.png" 
                  alt={panchakarmaTabs[activeIndex].label}
                  className="tab-image"
                />
              </div>
            </div>
          </div>

          {/* Right side: Vertical Tabs */}
          <div className="vertical-tabs">
            {panchakarmaTabs.map((tab, index) => (
              <button 
                key={tab.id}
                className={`v-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <div className="v-tab-info">
                  <span className="v-tab-number">0{index + 1}</span>
                  <span className="v-tab-label">{tab.label}</span>
                </div>
                <span className="v-tab-arrow">→</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Panchakarma;
