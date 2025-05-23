// Testimonials.js
import React, { useState, useEffect } from 'react';
import TestItem from './TestItem';
import './Testimonials.css';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  const testimonials = [
    {
      id: 1,
      name: "Thubelihle Mguni",
      position: "Student",
      image: "images/thuba-test.jpg",
      text: "My name is Thubelihle Mguni. I'm from Zimbabwe. I did my Advanced level /grade 12 in J. Z Moyo High School. I'm a dedicated student pursuing a degree at Bartin University in Turkey. I am the first student that VisionExploit applied for in 2022 to study abroad.",
      color: "#ff6b6b" // Red shadow
    },
    {
      id: 2,
      name: "Thando Ngwenya",
      position: "Student",
      image: "images/thando-test.jpg",
      text: "Greetings my dearest brothers and sisters I hope this message finds you in good health.I am Thando Ngwenya and I am delighted to have worked with VisionExploit as they made my dream come true.",
      color: "#4ecdc4" // Teal shadow
    },
    {
      id: 3,
      name: "Simbarashe Machiridza",
      position: "Student",
      image: "images/simba-testimony.jpg",
      text: "I am Simbarashe Machiridza. I am a client of Vision Exploit. I reached out to Vision Exploit because a friend of a friend had been helped by them and they said to try their services. Despite my doubt on how legit they appeared, the services they provided we well beyond my expectations.",
      color: "#ffd166" // Yellow shadow
    },
    {
      id: 4,
      name: "Dumisile J Nkomo",
      position: "Student",
      image: "images/Dumi_test.jpg",
      text: "Hello everyone, my name is Dumisile Nkomo. In 2024, I had the incredible opportunity to enroll in a university in Turkey, and this life-changing journey was made possible by Vision Exploit. From the very beginning, Vision Exploit stood out as a reliable and professional partner, guiding me every step of the way with unmatched expertise and care.",
      color: "#6a0572" // Purple shadow
    },
    {
      id: 5,
      name: "Mpilo Nyoni",
      position: "Student",
      image: "images/mpilo.jpg",
      text: "My name is Mpilo Nyoni.Im an 18 year old from Zimbabwe currently pursuing my degree at Bartın University in Turkey.I finished my Advanced level/grade 12 at Msiteli high School in 2023 ,upon getting my results i reserved my appointment with VisionExploit to assist me with shaping my future pathway.",
      color: "#06d6a0" // Green shadow
    }
  ];

  // Handle auto rotation
  useEffect(() => {
    let interval;
    
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000); // Change slide every 5 seconds
    }
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  return (
    <div className="testimonials-container">
      <h2 className="testimonials-title">What Our Clients Say</h2>
      
      <div className="carousel-container">
        <button 
          className="carousel-button prev" 
          onClick={prevSlide}
          aria-label="Previous testimonial"
        >
          &#10094;
        </button>
        
        <div className="carousel-track">
          {testimonials.map((testimonial, index) => (
            <div 
              className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
              key={testimonial.id}
              style={{
                transform: `translateX(${(index - currentIndex) * 100}%)`
              }}
            >
              <TestItem testimonial={testimonial} />
            </div>
          ))}
        </div>
        
        <button 
          className="carousel-button next" 
          onClick={nextSlide}
          aria-label="Next testimonial"
        >
          &#10095;
        </button>
      </div>
      
      <div className="carousel-indicators">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
      
      <button 
        className="autoplay-toggle"
        onClick={toggleAutoPlay}
        aria-label={isAutoPlaying ? "Pause autoplay" : "Start autoplay"}
      >
        {isAutoPlaying ? "Pause" : "Play"}
      </button>
    </div>
  );
};

export default Testimonials;