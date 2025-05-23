import React from 'react';
import './Cards.css';
// Import images
//import heroBackground from '../assets/images/hero-bg.jpg';
import missionImage from '../assets/images/mission.png';
import teamMember1 from '../assets/images/team1.jpg';
//import teamMember2 from '../assets/images/team2.jpg';
//import teamMember3 from '../assets/images/team3.jpg';
import historyImage from '../assets/images/journey.jpeg';

const Cards = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="content-wrapper">
          <h1>Who We Are</h1>
          <p className="hero-subtitle">Dedicated to transforming education through innovation and excellence</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="content-wrapper">
          <div className="two-column">
            <div className="column">
              
              <p>We are committed to providing exceptional educational services that inspire growth, foster creativity, and empower students to reach their full potential. Our approach combines innovative teaching methods with personalized attention to create transformative learning experiences.</p>
            </div>
            <div className="column">
              <div className="mission-image">
                <img src={missionImage} alt="Students collaborating" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="content-wrapper">
          <h2 className="center-text">Our Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>Excellence</h3>
              <p>We strive for excellence in everything we do, setting high standards for ourselves and our students.</p>
            </div>
            <div className="value-card">
              <h3>Innovation</h3>
              <p>We embrace innovative approaches to education, constantly exploring new methods and technologies.</p>
            </div>
            <div className="value-card">
              <h3>Inclusivity</h3>
              <p>We believe in creating an inclusive environment where every student feels valued and supported.</p>
            </div>
            <div className="value-card">
              <h3>Integrity</h3>
              <p>We operate with honesty, transparency, and a commitment to ethical practices in all our interactions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section 
      <section className="team-section">
        <div className="content-wrapper">
          <h2 className="center-text">Meet Our Team</h2>
          <p className="section-subtitle">Passionate educators dedicated to your success</p>
          
          <div className="team-grid">
            <div className="team-member">
              <div className="member-image">
                <img src={teamMember1} alt="Sarah Johnson" />
              </div>
              <h3>Thamsanqa Ncube</h3>
              <p className="member-title">Chief Executive Director</p>
              <p>With over 15 years of experience in education, Sarah leads our team with passion and vision.</p>
            </div>
            <div className="team-member">
              <div className="member-image">
                <img src={teamMember2} alt="Michael Chen" />
              </div>
              <h3>Tshidiso M Dube</h3>
              <p className="member-title">Chief Operations Director</p>
              <p>Michael specializes in developing innovative teaching methodologies that engage and inspire.</p>
            </div>
            <div className="team-member">
              <div className="member-image">
                <img src={teamMember3} alt="Elena Rodriguez" />
              </div>
              <h3>Walter Ndlovu</h3>
              <p className="member-title">Marketing & Advertisement Director</p>
              <p>Elena ensures every student receives the personalized guidance they need to succeed.</p>
            </div>
            <div className="team-member">
              <div className="member-image">
                <img src={heroBackground} alt="Elena Rodriguez" />
              </div>
              <h3>Clemens C Makwengura</h3>
              <p className="member-title">Business Growth & Research Director</p>
              <p>Elena ensures every student receives the personalized guidance they need to succeed.</p>
            </div>
          </div>
        </div>
      </section>*/}

      {/* History Section */}
      <section className="history-section">
        <div className="content-wrapper">
          <div className="two-column">
            <div className="column">
              <div className="history-image">
                <img src={historyImage} alt="Our journey" />
              </div>
            </div>
            <div className="column">
              <h2>Our Journey</h2>
              <p>Founded in 2022, we began with a simple vision: to transform education through personalized learning experiences. What started as a small tutoring service has grown into a comprehensive educational institution serving thousands of students.</p>
              <p>Throughout our journey, we've remained committed to our founding principles while continuously evolving to meet the changing needs of students in today's dynamic world.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="content-wrapper">
          <h2>Join Our Learning Community</h2>
          <p>Discover how we can help you achieve your educational goals and unlock your full potential.</p>
          <a href="https://whatsapp.com/channel/0029VallfVQKAwEr474NrW3P" className="cta-button">Contact Us Today</a>
        </div>
      </section>
    </div>
  );
};

export default Cards;