// TestItem.js
import React from 'react';
import './Testimonials.css';

const TestItem = ({ testimonial }) => {
  return (
    <div 
      className="testimonial-card"
      style={{ 
        boxShadow: `0 4px 20px ${testimonial.color}40` // Adding 40 for 25% opacity
      }}
    >
      <div className="testimonial-header">
        <div 
          className="testimonial-image-container"
          style={{ borderColor: testimonial.color }}
        >
          <img 
            src={testimonial.image} 
            alt={testimonial.name} 
            className="testimonial-image"
            loading="lazy"
          />
        </div>
        <div className="testimonial-info">
          <h3 className="testimonial-name">{testimonial.name}</h3>
          <p className="testimonial-position">{testimonial.position}</p>
        </div>
      </div>
      
      <div className="testimonial-content">
        <p className="testimonial-text">"{testimonial.text}"</p>
      </div>
      
      <div 
        className="testimonial-accent"
        style={{ backgroundColor: testimonial.color }}
      ></div>
    </div>
  );
};

export default TestItem;