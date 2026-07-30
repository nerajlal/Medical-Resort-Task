import React, { useState } from 'react';
import { faqs } from '../data';
import { Plus, Minus } from 'lucide-react';
import './FAQ.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="faq section-padding">
      <div className="container faq-layout">
        <div className="faq-sidebar">
          <span className="faq-subtitle text-primary-green">FAQ</span>
          <h2 className="section-title">
            Frequently Asked <br />
            <em className="text-primary-green" style={{fontStyle: 'italic', fontWeight: '400'}}>Questions</em>
          </h2>
          <p className="faq-sidebar-desc">
            Still not sure? Reach out to our team — we typically respond within a few hours.
          </p>
          <button className="btn btn-outline-dark faq-contact-btn">
            Contact us
          </button>
        </div>

        <div className="faq-list-container">
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className={`faq-item ${openIndex === index ? 'open' : ''}`}>
                <button 
                  className="faq-question" 
                  onClick={() => toggleFaq(index)}
                >
                  {faq.q}
                  {openIndex === index ? (
                    <Minus className="faq-icon" size={20} />
                  ) : (
                    <Plus className="faq-icon" size={20} />
                  )}
                </button>
                {openIndex === index && (
                  <div className="faq-answer">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
