import React from 'react';
import './CareerBlog.css';

const CareerBlog = () => {
  return (
    <div className="career-blog-container">
      <div className="career-blog-header">
        <h1>Careers in Turkey for International Students</h1>
        <p className="blog-subtitle">Your Guide to Professional Opportunities in Turkey</p>
      </div>

      <div className="career-blog-content">
        <section className="blog-section">
          <h2>Why Choose Turkey for Your Career?</h2>
          <p>Turkey's strategic location between Europe and Asia, combined with its growing economy and international business environment, makes it an attractive destination for international students seeking career opportunities.</p>
          <div className="benefits-grid">
            <div className="benefit-card">
              <h3>Growing Economy</h3>
              <p>Turkey's economy is one of the fastest-growing in the world, offering numerous opportunities in various sectors.</p>
            </div>
            <div className="benefit-card">
              <h3>Strategic Location</h3>
              <p>Bridging Europe and Asia, Turkey serves as a hub for international business and trade.</p>
            </div>
            <div className="benefit-card">
              <h3>Multicultural Environment</h3>
              <p>Experience a diverse work environment with professionals from around the world.</p>
            </div>
          </div>
        </section>

        <section className="blog-section">
          <h2>Top Career Sectors</h2>
          <div className="sectors-grid">
            <div className="sector-card">
              <h3>Technology & IT</h3>
              <ul>
                <li>Software Development</li>
                <li>Cybersecurity</li>
                <li>Data Science</li>
                <li>AI & Machine Learning</li>
              </ul>
            </div>
            <div className="sector-card">
              <h3>Business & Finance</h3>
              <ul>
                <li>Banking</li>
                <li>Consulting</li>
                <li>International Trade</li>
                <li>Marketing</li>
              </ul>
            </div>
            <div className="sector-card">
              <h3>Engineering</h3>
              <ul>
                <li>Civil Engineering</li>
                <li>Mechanical Engineering</li>
                <li>Electrical Engineering</li>
                <li>Industrial Engineering</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="blog-section">
          <h2>Work Permit Requirements</h2>
          <div className="requirements-list">
            <div className="requirement-item">
              <h3>Student Work Permit</h3>
              <p>International students can work up to 24 hours per week during their studies.</p>
            </div>
            <div className="requirement-item">
              <h3>Post-Graduation Work Permit</h3>
              <p>Graduates can apply for a work permit valid for up to 1 year after graduation.</p>
            </div>
            <div className="requirement-item">
              <h3>Required Documents</h3>
              <ul>
                <li>Valid passport</li>
                <li>Graduation certificate</li>
                <li>Job offer letter</li>
                <li>Health insurance</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="blog-section">
          <h2>Job Search Resources</h2>
          <div className="resources-grid">
            <div className="resource-card">
              <h3>Online Job Portals</h3>
              <ul>
                <li>LinkedIn Turkey</li>
                <li>Kariyer.net</li>
                <li>Indeed Turkey</li>
                <li>Glassdoor Turkey</li>
              </ul>
            </div>
            <div className="resource-card">
              <h3>University Career Centers</h3>
              <p>Most Turkish universities have dedicated career centers that help international students with job placement and career development.</p>
            </div>
            <div className="resource-card">
              <h3>Professional Networks</h3>
              <p>Join professional associations and attend networking events to connect with potential employers.</p>
            </div>
          </div>
        </section>

        <section className="blog-section">
          <h2>Salary Expectations</h2>
          <div className="salary-info">
            <div className="salary-range">
              <h3>Entry-Level Positions</h3>
              <p>₺15,000 - ₺25,000 per month</p>
            </div>
            <div className="salary-range">
              <h3>Mid-Level Positions</h3>
              <p>₺25,000 - ₺40,000 per month</p>
            </div>
            <div className="salary-range">
              <h3>Senior-Level Positions</h3>
              <p>₺40,000+ per month</p>
            </div>
          </div>
          <p className="salary-note">* Salaries vary based on industry, experience, and location</p>
        </section>
      </div>
    </div>
  );
};

export default CareerBlog; 