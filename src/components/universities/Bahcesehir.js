import React, { useState } from 'react';
import './Bahcesehir.css';

function Bahcesehir() {
  const [expandedSchool, setExpandedSchool] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currencyView, setCurrencyView] = useState('USD');

  const universityData = {
    "SCHOOL OF MEDICINE": {
      fee: { USD: '$28,000', TL: '₺1,064,000', EUR: '€25,700' },
      duration: "6 Years",
      programs: [
        "Medicine"
      ]
    },
    "SCHOOL OF DENTISTRY": {
      fee: { USD: '$24,000', TL: '₺912,000', EUR: '€22,000' },
      duration: "5 Years",
      programs: [
        "Dental Medicine"
      ]
    },
    "SCHOOL OF PHARMACY": {
      fee: { USD: '$15,000', TL: '₺570,000', EUR: '€13,750' },
      duration: "5 Years",
      programs: [
        "Pharmacy"
      ]
    },
    "SCHOOL OF HEALTH SCIENCES": {
      fee: { USD: '$8,500', TL: '₺323,000', EUR: '€7,800' },
      duration: "4 Years",
      programs: [
        "Nursing",
        "Physiotherapy and Rehabilitation",
        "Nutrition and Dietetics",
        "Audiometry"
      ]
    },
    "SCHOOL OF ENGINEERING & NATURAL SCIENCES": {
      fee: { USD: '$9,000', TL: '₺342,000', EUR: '€8,250' },
      duration: "4 Years",
      programs: [
        "Computer Engineering",
        "Software Engineering",
        "Electrical and Electronics Engineering",
        "Industrial Engineering",
        "Civil Engineering",
        "Mechanical Engineering",
        "Energy Systems Engineering",
        "Biomedical Engineering",
        "Mathematics",
        "Molecular Biology and Genetics"
      ]
    },
    "ARTIFICIAL INTELLIGENCE ENGINEERING": {
      fee: { USD: '$12,000', TL: '₺456,000', EUR: '€11,000' },
      duration: "4 Years",
      programs: [
        "Artificial Intelligence Engineering"
      ]
    },
    "SCHOOL OF ECONOMICS, ADMINISTRATIVE AND SOCIAL SCIENCES": {
      fee: { USD: '$8,500', TL: '₺323,000', EUR: '€7,800' },
      duration: "4 Years",
      programs: [
        "Economics",
        "Political Science and International Relations",
        "Business Administration",
        "International Trade",
        "Finance",
        "Logistics Management",
        "Psychology",
        "Sociology"
      ]
    },
    "SCHOOL OF ARCHITECTURE & DESIGN": {
      fee: { USD: '$8,500', TL: '₺323,000', EUR: '€7,800' },
      duration: "4 Years",
      programs: [
        "Architecture",
        "Interior Architecture and Environmental Design",
        "Industrial Product Design",
        "Fashion Design"
      ]
    },
    "SCHOOL OF COMMUNICATION": {
      fee: { USD: '$8,500', TL: '₺323,000', EUR: '€7,800' },
      duration: "4 Years",
      programs: [
        "Public Relations",
        "New Media",
        "Digital Game Design",
        "Communication Design",
        "Film and Television"
      ]
    },
    "SCHOOL OF EDUCATIONAL SCIENCES": {
      fee: { USD: '$8,500', TL: '₺323,000', EUR: '€7,800' },
      duration: "4 Years",
      programs: [
        "English Language Teaching",
        "Guidance and Psychological Counseling",
        "Computer Education and Educational Technology"
      ]
    },
    "SCHOOL OF LAW": {
      fee: { USD: '$10,000', TL: '₺380,000', EUR: '€9,150' },
      duration: "4 Years",
      programs: [
        "Law"
      ]
    },
    "PILOTAGE": {
      fee: { USD: '$9,000 + €18,975', TL: '₺342,000 + €18,975', EUR: '€8,250 + €18,975' },
      duration: "4 Years",
      programs: [
        "Pilotage"
      ]
    },
    "GASTRONOMY & CULINARY ARTS": {
      fee: { USD: '$8,500', TL: '₺323,000', EUR: '€7,800' },
      duration: "4 Years",
      programs: [
        "Gastronomy and Culinary Arts"
      ]
    },
    "CONSERVATORY": {
      fee: { USD: '$8,500', TL: '₺323,000', EUR: '€7,800' },
      duration: "4 Years",
      programs: [
        "Performing Arts",
        "Music"
      ]
    },
    "VOCATIONAL SCHOOL OF HEALTH SCIENCES": {
      fee: { USD: '$3,500', TL: '₺133,000', EUR: '€3,200' },
      duration: "2 Years",
      programs: [
        "First and Emergency Aid",
        "Anesthesia",
        "Operating Room Services",
        "Medical Imaging Techniques",
        "Dental Prosthesis Technology"
      ]
    }
  };

  const toggleSchool = (school) => {
    setExpandedSchool(expandedSchool === school ? null : school);
  };

  const filteredSchools = Object.keys(universityData).filter(school => 
    school.toLowerCase().includes(searchTerm.toLowerCase()) ||
    universityData[school].programs.some(program => 
      program.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="app-container">
      <header className="header">
        <div className="logo-container">
          <h1>Bahçeşehir University</h1>
          <p>Programs and Fee Structure</p>
        </div>
        <div className="search-container">
          <div className="search-box">
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="search-icon"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input 
              type="text" 
              placeholder="Search for programs or schools..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
        </div>
      </header>

      <div className="currency-toggle">
        <p>View fees in:</p>
        <div className="toggle-buttons">
          <button 
            className={currencyView === 'USD' ? 'active' : ''}
            onClick={() => setCurrencyView('USD')}
          >
            US Dollar ($)
          </button>
          <button 
            className={currencyView === 'TL' ? 'active' : ''}
            onClick={() => setCurrencyView('TL')}
          >
            Turkish Lira (₺)
          </button>
          <button 
            className={currencyView === 'EUR' ? 'active' : ''}
            onClick={() => setCurrencyView('EUR')}
          >
            Euro (€)
          </button>
        </div>
      </div>

      <div className="schools-container">
        {filteredSchools.length === 0 ? (
          <div className="no-results">No programs or schools match your search.</div>
        ) : (
          filteredSchools.map((school) => (
            <div className="school-card" key={school}>
              <div 
                className="school-header" 
                onClick={() => toggleSchool(school)}
              >
                <h2>{school}</h2>
                <div className="info-container">
                  <div className="duration-badge">
                    {universityData[school].duration}
                  </div>
                  <div className="fee-badge">
                    {universityData[school].fee[currencyView]} per year
                  </div>
                </div>
                <button className="expand-button">
                  {expandedSchool === school ? (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="18 15 12 9 6 15"></polyline>
                    </svg>
                  ) : (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  )}
                </button>
              </div>
              
              {expandedSchool === school && (
                <div className="programs-list">
                  <h3>Available Programs:</h3>
                  {universityData[school].programs.map((program, index) => (
                    <div 
                      className={`program-item ${program.toLowerCase().includes(searchTerm.toLowerCase()) ? 'highlight' : ''}`} 
                      key={index}
                    >
                      {program}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))
        )}
      </div>

      <footer className="footer">
        <p>© 2025 Bahçeşehir University. Fees shown are per academic year. All programs offered in English or Turkish.</p>
      </footer>
    </div>
  );
}

export default Bahcesehir;