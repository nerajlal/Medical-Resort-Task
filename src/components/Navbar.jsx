import React, { useState } from 'react';
import { Phone } from 'lucide-react';
import { navLinks } from '../data';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <div className="logo">
          <span className="logo-icon">🌿</span>
          <div className="logo-text">
            <strong>Heal in Kerala</strong>
            <span>AYURVEDIC WELLNESS</span>
          </div>
        </div>
        
        <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {isOpen ? (
              <><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></>
            ) : (
              <><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></>
            )}
          </svg>
        </button>

        <div className={`nav-menu-wrapper ${isOpen ? 'open' : ''}`}>
          <div className="nav-links">
            {navLinks.map((link, index) => (
              <a key={index} href={link.href} className="nav-item">{link.name}</a>
            ))}
          </div>

          <div className="nav-actions">
            <a href="tel:+910000000000" className="nav-phone">
              <Phone size={16} /> Call Us
            </a>
            <button className="btn btn-primary nav-btn">Book Consultation</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
