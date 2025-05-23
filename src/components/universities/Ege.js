import React, { useState } from 'react';
import './Ege.css';

function Ege() {
  const [expandedFaculty, setExpandedFaculty] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currencyView, setCurrencyView] = useState('USD');

  const universityData = {
    "FACULTY OF MEDICINE": {
      fee: { USD: '$10,000', TL: '₺380,000', RANDS: 'R180,000' },
      programs: [
        "Medicine"
      ]
    },
    "FACULTY OF DENTISTRY": {
      fee: { USD: '$10,000', TL: '₺380,000', RANDS: 'R180,000' },
      programs: [
        "Dentistry"
      ]
    },
    "FACULTY OF PHARMACY": {
      fee: { USD: '$8,450', TL: '₺321,100', RANDS: 'R152,100' },
      programs: [
        "Pharmacy"
      ]
    },
    "FACULTY OF NURSING": {
      fee: { USD: '$4,500', TL: '₺171,000', RANDS: 'R81,000' },
      programs: [
        "Nursing"
      ]
    },
    "FACULTY OF HEALTH SCIENCES": {
      fee: { USD: '$3,000', TL: '₺114,000', RANDS: 'R54,000' },
      programs: [
        "Nutrition and Dietetics",
        "Physiotherapy and Rehabilitation",
        "Midwifery"
      ]
    },
    "FACULTY OF FINE ARTS, DESIGN AND ARCHITECTURE": {
      fee: { USD: '$2,000', TL: '₺76,000', RANDS: 'R36,000' },
      programs: [
        "Architecture",
        "Interior Architecture",
        "Visual Communication Design",
        "Graphic Design"
      ]
    },
    "SCHOOL OF FASHION AND DESIGN": {
      fee: { USD: '$3,076', TL: '₺116,888', RANDS: 'R55,368' },
      programs: [
        "Fashion Design",
        "Textile Design"
      ]
    },
    "FACULTY OF ECONOMICS AND ADMINISTRATIVE SCIENCES": {
      fee: { USD: '$3,000', TL: '₺114,000', RANDS: 'R54,000' },
      programs: [
        "Economics",
        "Business Administration",
        "International Relations",
        "Political Science and Public Administration"
      ]
    },
    "FACULTY OF ECONOMICS AND ADMINISTRATIVE SCIENCES (EVENING EDUCATION)": {
      fee: { USD: '$3,500', TL: '₺133,000', RANDS: 'R63,000' },
      programs: [
        "Economics (Evening)",
        "Business Administration (Evening)",
        "International Relations (Evening)"
      ]
    },
    "FACULTY OF ENGINEERING": {
      fee: { USD: '$3,450', TL: '₺131,100', RANDS: 'R62,100' },
      programs: [
        "Computer Engineering",
        "Electrical and Electronics Engineering",
        "Civil Engineering",
        "Mechanical Engineering",
        "Chemical Engineering",
        "Food Engineering"
      ]
    },
    "FACULTY OF AGRICULTURE": {
      fee: { USD: '$2,000', TL: '₺76,000', RANDS: 'R36,000' },
      programs: [
        "Agricultural Economics",
        "Agricultural Engineering",
        "Horticulture",
        "Plant Protection"
      ]
    },
    "FACULTY OF SCIENCE": {
      fee: { USD: '$1,000', TL: '₺38,000', RANDS: 'R18,000' },
      programs: [
        "Mathematics",
        "Physics",
        "Chemistry",
        "Biology",
        "Biochemistry"
      ]
    },
    "FACULTY OF LITERATURE": {
      fee: { USD: '$1,000', TL: '₺38,000', RANDS: 'R18,000' },
      programs: [
        "Turkish Language and Literature",
        "English Language and Literature",
        "Psychology",
        "History",
        "Philosophy",
        "Sociology"
      ]
    },
    "FACULTY OF COMMUNICATION": {
      fee: { USD: '$1,000', TL: '₺38,000', RANDS: 'R18,000' },
      programs: [
        "Journalism",
        "Public Relations and Publicity",
        "Radio, Television and Cinema"
      ]
    },
    "FACULTY OF EDUCATION": {
      fee: { USD: '$1,000', TL: '₺38,000', RANDS: 'R18,000' },
      programs: [
        "Primary Education",
        "Science Education",
        "Mathematics Education",
        "Social Sciences Education",
        "Turkish Education"
      ]
    },
    "FACULTY OF TOURISM": {
      fee: { USD: '$1,000', TL: '₺38,000', RANDS: 'R18,000' },
      programs: [
        "Tourism Management",
        "Gastronomy and Culinary Arts"
      ]
    },
    "FACULTY OF AQUATIC PRODUCTS": {
      fee: { USD: '$2,919', TL: '₺110,922', RANDS: 'R52,542' },
      programs: [
        "Aquaculture",
        "Fisheries Technology"
      ]
    },
    "FACULTY OF SPORT SCIENCES": {
      fee: { USD: '$770', TL: '₺29,260', RANDS: 'R13,860' },
      programs: [
        "Physical Education and Sports Teaching",
        "Sports Management",
        "Coaching Education"
      ]
    },
    "FACULTY OF SPORT SCIENCES (EVENING EDUCATION)": {
      fee: { USD: '$1,000', TL: '₺38,000', RANDS: 'R18,000' },
      programs: [
        "Sports Management (Evening)",
        "Coaching Education (Evening)"
      ]
    },
    "FACULTY OF ISLAMIC SCIENCES": {
      fee: { USD: '$770', TL: '₺29,260', RANDS: 'R13,860' },
      programs: [
        "Islamic Sciences"
      ]
    },
    "STATE CONSERVATORY OF TURKISH MUSIC": {
      fee: { USD: '$2,500', TL: '₺95,000', RANDS: 'R45,000' },
      programs: [
        "Turkish Music",
        "Traditional Turkish Music"
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
          <h1>Ege University</h1>
          <p>Programs and Fee Structure for International Students (2024-2025)</p>
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
            className={currencyView === 'RANDS' ? 'active' : ''}
            onClick={() => setCurrencyView('RANDS')}
          >
            South African Rand (R)
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
        <p>© 2025 Ege University. All fees are annual for international students. Program durations vary by faculty.</p>
      </footer>
    </div>
  );
}

export default Ege;