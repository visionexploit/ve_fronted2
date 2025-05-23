import React, { useState } from 'react';
import './Bartin.css';

function Bartin() {
  const [expandedFaculty, setExpandedFaculty] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currencyView, setCurrencyView] = useState('TL');

  const universityData = {
    "LITERATURE FACULTY": {
      fee: { TL: '₺15 000', USD: '$400', RANDS: 'R7 220' },
      programs: [
        "Information and document management",
        "Contemporary Turkish Dialects & Literature",
        "Translation and Interpreting (English)",
        "Philosophy",
        "Psychology",
        "History of art",
        "Sociology",
        "History",
        "Turkish language and literature"
      ]
    },
    "FACULTY OF EDUCATION": {
      fee: { TL: '₺15 000', USD: '$400', RANDS: 'R7 220' },
      programs: [
        "Science Teaching",
        "Primary Mathematics Teaching",
        "English Teaching",
        "Guidance and Psychological Counselling",
        "Classroom Teaching",
        "Social studies Teaching",
        "Turkish Teaching",
        "Art Teaching"
      ]
    },
    "FACULTY OF SCIENCE": {
      fee: { TL: '₺16 500', USD: '$440', RANDS: 'R7 940' },
      programs: [
        "Computer Technology & Information Systems",
        "Mathematics",
        "Molecular Biology & Genetics",
        "Biotechnology"
      ]
    },
    "FACULTY OF ECONOMICS & ADMINISTRATIVE SCIENCES": {
      fee: { TL: '₺16 500', USD: '$440', RANDS: 'R7 940' },
      programs: [
        "Political Science and Public Administration",
        "Management Information Systems",
        "Economics",
        "Business Administration",
        "International Trade and Logistics"
      ]
    },
    "FACULTY OF ENGINEERING ARCHITECTURE & DESIGN": {
      fee: { TL: '₺20 000', USD: '$530', RANDS: 'R9 620' },
      programs: [
        "Computer Engineering",
        "Electrical Electronics Engineering",
        "Mechanical Engineering",
        "Landscape Architecture"
      ]
    },
    "FACULTY OF HEALTH SCIENCES": {
      fee: { TL: '₺20 000', USD: '$530', RANDS: 'R9 620' },
      programs: [
        "Nursing",
        "Social Services"
      ]
    },
    "FACULTY OF FORESTRY": {
      fee: { TL: '₺15 000', USD: '$400', RANDS: 'R7 220' },
      programs: [
        "Forest Engineering",
        "Forest Industrial Engineering"
      ]
    },
    "SPORTS SCIENCE FACULTY": {
      fee: { TL: '₺13 500', USD: '$360', RANDS: 'R6 500' },
      programs: [
        "Couching",
        "Sports Management",
        "Physical education & Sports Teaching",
        "Recreation"
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
          <h1>Bartın University</h1>
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
            className={currencyView === 'TL' ? 'active' : ''}
            onClick={() => setCurrencyView('TL')}
          >
            Turkish Lira (₺)
          </button>
          <button 
            className={currencyView === 'USD' ? 'active' : ''}
            onClick={() => setCurrencyView('USD')}
          >
            US Dollar ($)
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
                  {universityData[faculty].fee[currencyView]} per semester
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
        <p>© 2025 Bartın University. All programs are 4-year duration. Fees are shown per semester.</p>
      </footer>
    </div>
  );
}

export default Bartin;