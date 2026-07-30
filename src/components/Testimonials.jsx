import React from 'react';
import './Testimonials.css';

const testimonials = [
  { name: 'Sarah Mitchell', loc: 'United Kingdom', text: 'I came to Kerala for Panchakarma after years of chronic fatigue. The physicians took time to truly understand my condition before recommending any therapy. The personalised care I received was unlike anything I had experienced before.' },
  { name: 'Ravi Nair', loc: 'Singapore', text: "After a back injury that conventional treatment couldn't fully resolve, I explored Ayurvedic care in Kerala. The Kati Vasthi and Elakizhi therapies were administered with great care and precision." },
  { name: 'Amelia Torres', loc: 'Australia', text: 'The consultation process was thorough and the doctors were very knowledgeable. Every therapy was explained before it began, and I always felt safe and well cared for.' },
  { name: 'Thomas Weber', loc: 'Germany', text: 'I visited for a stress and anxiety programme. The combination of Shirodhara and personalised herbal treatments made a noticeable difference to my sleep and overall sense of calm.' },
  { name: 'Elena Rostova', loc: 'Russia', text: 'The holistic approach to wellness is exactly what I needed. The diet, the daily routines, and the treatments all worked together to help me regain my balance and energy.' },
  { name: 'David Chen', loc: 'USA', text: 'An incredibly authentic experience. The facilities were excellent, but it was the profound knowledge of the practitioners that impressed me most. I left feeling completely rejuvenated.' }
];

const Testimonials = () => {
  return (
    <section className="testimonials bg-primary-dark section-padding">
      <div className="container">
        <div className="testimonials-header text-center">
          <h2 className="section-title light mb-10">
            What Our <span className="text-primary-green">Patients Say</span>
          </h2>
          <div className="testimonials-rating">
            <span className="rating-score">4.5/5</span>
            <span className="stars">★★★★★</span>
            <span className="rating-text">(Trusted by 148+ users)</span>
          </div>
        </div>
        
        <div className="testimonials-grid-wrapper mt-50">
          <div className="testimonials-grid">
            {testimonials.map((test, index) => (
              <div key={index} className="testimonial-card">
                <p className="testimonial-text">{test.text}</p>
                
                <div className="testimonial-footer">
                  <div className="testimonial-author">
                    <img 
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBvfsVRzvZ5DWkdqUmYMA2tS4wHQDYLGclFSZNHrp-XA&s=10" 
                      alt={test.name} 
                      className="author-avatar" 
                    />
                    <div>
                      <h4 className="author-name">{test.name}</h4>
                      <p className="author-loc">{test.loc}</p>
                    </div>
                  </div>
                  <div className="testimonial-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="testimonials-fade"></div>
        </div>

        <div className="testimonials-action text-center">
          <button className="btn btn-primary">View all Reviews</button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
