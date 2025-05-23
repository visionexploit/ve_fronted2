import React, { useState } from 'react';
import './Hacettepe.css';

function Hacettepe() {
  const [expandedFaculty, setExpandedFaculty] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currencyView, setCurrencyView] = useState('USD');

  const universityData = {
    "FACULTY OF MEDICINE": {
      fee: { USD: '$12,000', TL: '₺450,000', EURO: '€11,000' },
      programs: [
        "Medicine"
      ]
    },
    "FACULTY OF DENTISTRY": {
      fee: { USD: '$8,000', TL: '₺300,000', EURO: '€7,400' },
      programs: [
        "Dentistry"
      ]
    },
    "FACULTY OF PHARMACY": {
      fee: { USD: '$8,000', TL: '₺300,000', EURO: '€7,400' },
      programs: [
        "Pharmacy"
      ]
    },
    "FACULTY OF ENGINEERING": {
      fee: { USD: '$7,500', TL: '₺280,000', EURO: '€6,900' },
      programs: [
        "Computer Engineering",
        "Electrical and Electronics Engineering",
        "Chemical Engineering",
        "Mechanical Engineering",
        "Civil Engineering",
        "Industrial Engineering",
        "Food Engineering",
        "Environmental Engineering",
        "Geomatics Engineering"
      ]
    },
    "ANKARA STATE CONSERVATORY": {
      fee: { USD: '$7,500', TL: '₺280,000', EURO: '€6,900' },
      programs: [
        "Composition and Conducting",
        "String Instruments",
        "Wind and Percussion Instruments",
        "Voice Training",
        "Musicology"
      ]
    },
    "FACULTY OF FINE ARTS": {
      fee: { USD: '$5,000', TL: '₺190,000', EURO: '€4,600' },
      programs: [
        "Painting",
        "Sculpture",
        "Graphic Design",
        "Ceramics and Glass",
        "Interior Architecture and Environmental Design"
      ]
    },
    "FACULTY OF SCIENCE": {
      fee: { USD: '$5,000', TL: '₺190,000', EURO: '€4,600' },
      programs: [
        "Mathematics",
        "Physics",
        "Chemistry",
        "Biology",
        "Statistics",
        "Actuarial Sciences"
      ]
    },
    "FACULTY OF LAW": {
      fee: { USD: '$4,000', TL: '₺150,000', EURO: '€3,700' },
      programs: [
        "Law"
      ]
    },
    "FACULTY OF ECONOMICS AND ADMINISTRATIVE SCIENCES": {
      fee: { USD: '$4,000', TL: '₺150,000', EURO: '€3,700' },
      programs: [
        "Economics",
        "Business Administration",
        "Public Finance",
        "International Relations",
        "Political Science and Public Administration",
        "Family and Consumer Sciences"
      ]
    },
    "FACULTY OF HEALTH SCIENCES": {
      fee: { USD: '$4,000', TL: '₺150,000', EURO: '€3,700' },
      programs: [
        "Nutrition and Dietetics",
        "Child Development",
        "Audiology",
        "Social Work",
        "Occupational Therapy"
      ]
    },
    "FACULTY OF EDUCATION": {
      fee: { USD: '$4,000', TL: '₺150,000', EURO: '€3,700' },
      programs: [
        "Computer Education and Instructional Technology",
        "Mathematics Education",
        "Science Education",
        "Foreign Language Education",
        "Turkish Education",
        "Social Sciences Education",
        "Educational Sciences",
        "Primary Education",
        "Special Education"
      ]
    },
    "FACULTY OF LETTERS": {
      fee: { USD: '$4,000', TL: '₺150,000', EURO: '€3,700' },
      programs: [
        "English Language and Literature",
        "French Language and Literature",
        "German Language and Literature",
        "Philosophy",
        "History",
        "Psychology",
        "Sociology",
        "Turkish Language and Literature",
        "Translation and Interpreting"
      ]
    },
    "FACULTY OF NURSING": {
      fee: { USD: '$4,000', TL: '₺150,000', EURO: '€3,700' },
      programs: [
        "Nursing"
      ]
    },
    "FACULTY OF SPORTS SCIENCES": {
      fee: { USD: '$4,000', TL: '₺150,000', EURO: '€3,700' },
      programs: [
        "Physical Education and Sports Teaching",
        "Coaching Education",
        "Recreation",
        "Sports Management"
      ]
    },
    "FACULTY OF COMMUNICATION": {
      fee: { USD: '$4,000', TL: '₺150,000', EURO: '€3,700' },
      programs: [
        "Information and Records Management",
        "Radio, Television and Cinema",
        "Journalism",
        "Public Relations and Publicity"
      ]
    },
    "FACULTY OF PHYSICAL THERAPY AND REHABILITATION": {
      fee: { USD: '$4,000', TL: '₺150,000', EURO: '€3,700' },
      programs: [
        "Physical Therapy and Rehabilitation"
      ]
    },
    "VOCATIONAL SCHOOLS": {
      fee: { USD: '$3,000', TL: '₺110,000', EURO: '€2,750' },
      programs: [
        "Social Sciences Vocational School",
        "Technical Sciences Vocational School",
        "Health Services Vocational School"
      ]
    }
  };

  const toggleFaculty = (faculty) => {
    setExpandedFaculty(expandedFaculty === faculty ? null : faculty);
  };

  const filteredFaculties = Object.keys(universityData).filter(faculty => 
    faculty.toLowerCase().includes(searchTerm.toLowerCase()) ||
    universityData[faculty].programs.some(program => 
      program.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="app-container">
      <header className="header">
        <div className="logo-container">
          <h1>Hacettepe University</h1>
          <p>2025-2026 Programs and Annual Fee Structure</p>
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
              placeholder="Search for programs or faculties..." 
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
            className={currencyView === 'EURO' ? 'active' : ''}
            onClick={() => setCurrencyView('EURO')}
          >
            Euro (€)
          </button>
        </div>
      </div>

      <div className="faculties-container">
        {filteredFaculties.length === 0 ? (
          <div className="no-results">No programs or faculties match your search.</div>
        ) : (
          filteredFaculties.map((faculty) => (
            <div className="faculty-card" key={faculty}>
              <div 
                className="faculty-header" 
                onClick={() => toggleFaculty(faculty)}
              >
                <h2>{faculty}</h2>
                <div className="fee-badge">
                  {universityData[faculty].fee[currencyView]} per year
                </div>
                <button className="expand-button">
                  {expandedFaculty === faculty ? (
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
              
              {expandedFaculty === faculty && (
                <div className="programs-list">
                  {universityData[faculty].programs.map((program, index) => (
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
        <p>© 2025 Hacettepe University. Fees are shown as annual amounts for international students.</p>
      </footer>
    </div>
  );
}

export default Hacettepe;