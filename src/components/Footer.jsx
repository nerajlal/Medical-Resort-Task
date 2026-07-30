import React from 'react';
import { Leaf } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-primary-dark">
      <div className="container footer-container">
        <div className="footer-logo">
          <span className="footer-logo-icon">🌿</span>
          <div className="footer-logo-text-wrapper">
            <strong>Heal in Kerala</strong>
            {/* <span>AYURVEDIC WELLNESS</span> */}
          </div>
        </div>

        <div className="footer-copyright">
          © 2025 Heal in Kerala. All rights reserved. · Authentic Ayurvedic Treatment in Kerala
        </div>

        <div className="footer-links">
          <a href="#" className="footer-link">Privacy Policy</a>
          <a href="#" className="footer-link">Terms</a>
          <a href="#" className="footer-link">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
