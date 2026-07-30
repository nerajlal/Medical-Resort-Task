import React from 'react';
import './Gallery.css';

const galleryImages = [
  { src: 'https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3333/x_0,y_260,w_5000,h_2813,r_0,c_crop/q_80,w_900,dpr_1,f_auto,fl_progressive,c_limit/ayur-on-the-beach-nattika/resort-grounds-6_44d05225.jpg', alt: 'Resort Exterior', size: 'large' },
  { src: 'https://pix10.agoda.net/hotelImages/810081/4031233/d01423257df43bea8da4abacbdedd3b1.jpeg?ce=0&s=414x232', alt: 'Guest Room', size: 'tall' },
  { src: 'https://www.shutterstock.com/image-photo/create-image-premium-indian-ayurveda-260nw-2650439271.jpg', alt: 'Treatment Room', size: 'small' },
  { src: 'https://framerusercontent.com/images/AzH0lT2IVr78344ZlFgtYcnvDY.webp?width=940&height=570', alt: 'Ayurvedic Oils', size: 'small' },
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
