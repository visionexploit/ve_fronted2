import React, { useState } from 'react';
import './IstanbulMedeniyet.css';

function IstanbulMedeniyet() {
  const [expandedFaculty, setExpandedFaculty] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currencyView, setCurrencyView] = useState('TL');

  const universityData = {
    "FACULTY OF MEDICINE": {
      fee: { TL: '₺134 576', USD: '$3,590', RANDS: 'R64 860' },
      programs: [
        "Medicine",
        "Basic Medical Sciences",
        "Surgical Medical Sciences",
        "Internal Medical Sciences"
      ]
    },
    "FACULTY OF ENGINEERING AND NATURAL SCIENCES": {
      fee: { TL: '₺26 468', USD: '$705', RANDS: 'R12 750' },
      programs: [
        "Computer Engineering",
        "Electrical-Electronics Engineering",
        "Civil Engineering",
        "Mathematics",
        "Physics",
        "Bioengineering",
        "Chemistry"
      ]
    },
    "FACULTY OF ARTS AND DESIGN": {
      fee: { TL: '₺33 318', USD: '$890', RANDS: 'R16 050' },
      programs: [
        "Visual Communication Design",
        "Architecture",
        "Interior Architecture",
        "Industrial Design",
        "Traditional Turkish Arts"
      ]
    },
    "FACULTY OF POLITICAL SCIENCES": {
      fee: { TL: '₺20 000', USD: '$535', RANDS: 'R9 640' },
      programs: [
        "Economics",
        "Business Administration",
        "International Relations",
        "Political Science and Public Administration",
        "Public Finance",
        "Econometrics"
      ]
    },
    "FACULTY OF HEALTH SCIENCES": {
      fee: { TL: '₺17 778', USD: '$475', RANDS: 'R8 570' },
      programs: [
        "Nursing",
        "Physiotherapy and Rehabilitation",
        "Healthcare Management",
        "Nutrition and Dietetics",
        "Social Work"
      ]
    },
    "FACULTY OF TOURISM": {
      fee: { TL: '₺17 778', USD: '$475', RANDS: 'R8 570' },
      programs: [
        "Tourism Management",
        "Gastronomy and Culinary Arts",
        "Recreation Management",
        "Tourism Guidance"
      ]
    },
    "FACULTY OF EDUCATIONAL SCIENCES": {
      fee: { TL: '₺17 778', USD: '$475', RANDS: 'R8 570' },
      programs: [
        "Guidance and Psychological Counseling",
        "Educational Sciences",
        "Turkish Language Education",
        "Mathematics Education",
        "Science Education",
        "English Language Education",
        "Early Childhood Education",
        "Special Education"
      ]
    },
    "FACULTY OF LITERATURE": {
      fee: { TL: '₺17 778', USD: '$475', RANDS: 'R8 570' },
      programs: [
        "Turkish Language and Literature",
        "History",
        "Philosophy",
        "Sociology",
        "Psychology",
        "English Language and Literature",
        "Information and Records Management"
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
          <h1>Istanbul Medeniyet University</h1>
          <p>2024-2025 Academic Year International Student Tuition Fees</p>
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
        <p>© 2025 Istanbul Medeniyet University. Fees are annual and apply to international students.</p>
      </footer>
    </div>
  );
}

export default IstanbulMedeniyet;
