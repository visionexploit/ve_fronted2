import React, { useState } from 'react';
import './Bogazici.css';

function Bogazici() {
  const [expandedFaculty, setExpandedFaculty] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currencyView, setCurrencyView] = useState('USD');

  const universityData = {
    "FACULTY OF ENGINEERING": {
      fee: { USD: '$5,000', TRY: '₺150,000', EUR: '€4,600' },
      programs: [
        "Chemical Engineering",
        "Civil Engineering",
        "Computer Engineering",
        "Electrical and Electronics Engineering",
        "Industrial Engineering",
        "Mechanical Engineering"
      ]
    },
    "FACULTY OF ARTS AND SCIENCES: SCIENCE PROGRAMS": {
      fee: { USD: '$4,000', TRY: '₺120,000', EUR: '€3,680' },
      programs: [
        "Chemistry",
        "Mathematics",
        "Molecular Biology and Genetics",
        "Physics"
      ]
    },
    "FACULTY OF ARTS AND SCIENCES: ART PROGRAMS": {
      fee: { USD: '$4,000', TRY: '₺120,000', EUR: '€3,680' },
      programs: [
        "History",
        "Philosophy",
        "Psychology",
        "Sociology",
        "Translation and Interpreting Studies",
        "Western Languages and Literatures"
      ]
    },
    "FACULTY OF ECONOMICS AND ADMINISTRATIVE SCIENCES": {
      fee: { USD: '$5,000', TRY: '₺150,000', EUR: '€4,600' },
      programs: [
        "Economics",
        "Management",
        "Political Science and International Relations"
      ]
    },
    "FACULTY OF EDUCATION": {
      fee: { USD: '$4,000', TRY: '₺120,000', EUR: '€3,680' },
      programs: [
        "Computer Education and Educational Technology",
        "Educational Sciences",
        "Foreign Language Education",
        "Mathematics and Science Education",
        "Primary Education"
      ]
    },
    "FACULTY OF MANAGERIAL SCIENCES": {
      fee: { USD: '$5,000', TRY: '₺150,000', EUR: '€4,600' },
      programs: [
        "Business Administration",
        "International Trade",
        "Tourism Administration"
      ]
    },
    "FACULTY OF LAW": {
      fee: { USD: '$4,000', TRY: '₺120,000', EUR: '€3,680' },
      programs: [
        "Law"
      ]
    },
    "GRADUATE PROGRAMS": {
      fee: { USD: '$500', TRY: '₺15,000', EUR: '€460' },
      programs: [
        "Master's Programs",
        "PhD Programs"
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
          <h1>Boğaziçi University</h1>
          <p>International Student Tuition Fees 2024-2025</p>
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
            className={currencyView === 'TRY' ? 'active' : ''}
            onClick={() => setCurrencyView('TRY')}
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
        <p>© 2025 Boğaziçi University. All fees shown are per semester for international students.</p>
      </footer>
    </div>
  );
}

export default Bogazici;