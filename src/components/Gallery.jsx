import React from 'react';
import './Gallery.css';

const galleryImages = [
  { src: '/images/resort_exterior.jpg', alt: 'Resort Exterior', size: 'large' },
  { src: '/images/guest_room.jpg', alt: 'Guest Room', size: 'tall' },
  { src: '/images/treatment_room.jpg', alt: 'Treatment Room', size: 'small' },
  { src: '/images/oils.webp', alt: 'Ayurvedic Oils', size: 'small' },
];

const Gallery = () => {
  return (
    <section className="gallery section-padding bg-light">
      <div className="container">
        <div className="gallery-header">
          <div className="gallery-header-text">
            <h2 className="section-title" style={{ textAlign: 'left' }}>Facility Tour</h2>
            <p className="section-subtitle">
              Experience the serene ambiance and premium facilities designed to accelerate your healing journey in the heart of Kerala.
            </p>
          </div>
          <div className="gallery-header-action">
            <button className="btn btn-primary gallery-btn">See Full Gallery</button>
          </div>
        </div>

        <div className="gallery-grid">
          {galleryImages.map((img, index) => (
            <div key={index} className={`gallery-item ${img.size}`}>
              <img src={img.src} alt={img.alt} className="gallery-image" />
              <div className="gallery-overlay">
                <span className="gallery-text">{img.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
