import React, { useState } from 'react';
import './Topkapi.css';

function Topkapi() {
  const [expandedFaculty, setExpandedFaculty] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currencyView, setCurrencyView] = useState('TL');

  // Fictional Topkapı University data
  const universityData = {
    "FACULTY OF HUMANITIES": {
      fee: { TL: '₺16 500', USD: '$440', RANDS: 'R7 940' },
      programs: [
        "Turkish Literature",
        "English Language and Literature",
        "Cultural Studies",
        "Philosophy",
        "Archaeology",
        "Ottoman History",
        "Islamic Studies",
        "Media and Communication"
      ]
    },
    "FACULTY OF SOCIAL SCIENCES": {
      fee: { TL: '₺16 500', USD: '$440', RANDS: 'R7 940' },
      programs: [
        "Psychology",
        "Sociology",
        "Political Science",
        "International Relations",
        "Public Administration",
        "Social Work"
      ]
    },
    "FACULTY OF BUSINESS": {
      fee: { TL: '₺18 000', USD: '$480', RANDS: 'R8 650' },
      programs: [
        "Business Administration",
        "Economics",
        "Finance",
        "Marketing",
        "International Trade",
        "Management Information Systems",
        "Tourism Management"
      ]
    },
    "FACULTY OF ENGINEERING": {
      fee: { TL: '₺21 500', USD: '$570', RANDS: 'R10 350' },
      programs: [
        "Computer Engineering",
        "Civil Engineering",
        "Electrical and Electronics Engineering",
        "Industrial Engineering",
        "Mechanical Engineering",
        "Software Engineering",
        "Biomedical Engineering"
      ]
    },
    "FACULTY OF ARCHITECTURE AND DESIGN": {
      fee: { TL: '₺21 500', USD: '$570', RANDS: 'R10 350' },
      programs: [
        "Architecture",
        "Urban Planning",
        "Interior Design",
        "Industrial Design",
        "Landscape Architecture",
        "Visual Communication Design"
      ]
    },
    "FACULTY OF HEALTH SCIENCES": {
      fee: { TL: '₺23 000', USD: '$610', RANDS: 'R11 070' },
      programs: [
        "Medicine",
        "Dentistry",
        "Pharmacy",
        "Nursing",
        "Physiotherapy and Rehabilitation",
        "Nutrition and Dietetics",
        "Audiology"
      ]
    },
    "FACULTY OF LAW": {
      fee: { TL: '₺19 500', USD: '$520', RANDS: 'R9 380' },
      programs: [
        "Law"
      ]
    },
    "FACULTY OF EDUCATION": {
      fee: { TL: '₺16 500', USD: '$440', RANDS: 'R7 940' },
      programs: [
        "Early Childhood Education",
        "Primary Education",
        "Mathematics Education",
        "Science Education",
        "English Language Teaching",
        "Psychological Counseling and Guidance",
        "Special Education"
      ]
    },
    "FACULTY OF FINE ARTS": {
      fee: { TL: '₺17 800', USD: '$475', RANDS: 'R8 550' },
      programs: [
        "Painting",
        "Sculpture",
        "Graphic Design",
        "Ceramic and Glass",
        "Music",
        "Performing Arts",
        "Traditional Turkish Arts"
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
          <h1>Topkapı University</h1>
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
        <p>© 2025 Topkapı University. All programs are 4-year duration. Fees are shown per semester.</p>
      </footer>
    </div>
  );
}

export default Topkapi;