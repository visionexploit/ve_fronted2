import React from 'react';
import './Services.css';
import studyAbroad from './pages/images/1.jpg';
import careerCounseling from './pages/images/2.jpg';
import universityApp from './pages/images/3.jpg';
import visaAssist from './pages/images/4.png';
import airportPickup from './pages/images/5.jpg';
import accommodation from './pages/images/6.png';
import languageLearning from './pages/images/7.jpg';
import registration from './pages/images/8.jpeg';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Study Abroad Programs',
      description: 'Expand your horizons with our international study opportunities. We handle everything from university applications to visa assistance, ensuring your international education experience is smooth and rewarding.',
      image: studyAbroad,
      shape: 'circle'
    },
    {
      id: 2,
      title: 'Career Based Counseling',
      description: 'Discover programs aligned with your interests, skills, and values. Our counselors provide insights into best universities, career opportunities, and help with application requirements information.',
      image: careerCounseling,
      shape: 'circle'
    },
    {
      id: 3,
      title: 'University Applications',
      description: 'We help students to get enrolled in highly ranked and affordable universities, ensuring they find the best fit for their academic and career goals.',
      image: universityApp,
      shape: 'circle'
    },
    {
      id: 4,
      title: 'Visa Assistance',
      description: 'Our team has updated information on the requirements to obtain your visa with little or no chance of failure. We ensure that the university is aware in case of any delay from the embassy.',
      image: visaAssist,
      shape: 'circle'
    },
    {
      id: 5,
      title: 'Airport Pickup',
      description: 'At VisionExploit, we understand that arriving in a new country can be overwhelming. To ensure a smooth and stress-free transition, we offer a complimentary airport pickup service for our students.',
      image: airportPickup,
      shape: 'circle'
    },
    {
      id: 6,
      title: 'Accommodation',
      description: "Finding the right place to live is crucial for your comfort and academic success. That's why we offer personalized accommodation support to help you secure safe, convenient, and affordable housing options in your study destination.",
      image: accommodation,
      shape: 'circle'
    },
    {
      id: 7,
      title: 'Language Learning',
      description: 'Mastering a new language is the key to unlocking academic success, career opportunities, and cultural connections. We provide tailored language learning solutions to help you achieve fluency with confidence.',
      image: languageLearning,
      shape: 'circle'
    },
    {
      id: 8,
      title: 'Registration & Residence Permit',
      description: 'Navigating university registrations and attaining a residence permit can be complex, but VisionExploit is here to simplify the process. Our expert team provides step-by-step guidance to ensure your legal transition to your study destination is smooth and stress-free.',
      image: registration,
      shape: 'circle'
    }
  ];

  const getShapeClass = (shape) => {
    return `service-image-container ${shape}`;
  };

  return (
    <div className="services-container">
      <div className="services-header">
        <h1>Our Services</h1>
        <p className="services-intro">
        At the heart of our service lies reliability and excellence. With us, you'll experience personalized solutions, unwavering support, and a commitment to guiding you every step of the way—your success is our priority.
        </p>
      </div>

      <div className="services-flex">
        {services.map((service) => (
          <div className="service-card" key={service.id}>
            <div className={getShapeClass(service.shape)}>
              {service.image && (
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="service-image"
                />
              )}
            </div>
            <h2 className="service-title">{service.title}</h2>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Services;