import React, { useState } from 'react';
import './BursaTech.css';

function BursaTech() {
  const [expandedFaculty, setExpandedFaculty] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currencyView, setCurrencyView] = useState('TL');

  const universityData = {
    "FACULTY OF FORESTRY": {
      fee: { TL: '₺34.000,00', USD: '$1,000', EURO: '€900' },
      semesterFee: { TL: '₺17.000,00', USD: '$500', EURO: '€450' },
      programs: [
        "Forest Engineering",
        "Forest Industry Engineering",
        "Landscape Architecture",
        "Wildlife Ecology and Management"
      ]
    },
    "FACULTY OF ENGINEERING AND NATURAL SCIENCES": {
      fee: { TL: '₺34.000,00', USD: '$1,000', EURO: '€900' },
      semesterFee: { TL: '₺17.000,00', USD: '$500', EURO: '€450' },
      programs: [
        "Computer Engineering",
        "Electrical-Electronics Engineering",
        "Industrial Engineering",
        "Civil Engineering",
        "Mechanical Engineering",
        "Biology",
        "Physics",
        "Chemistry",
        "Mathematics"
      ]
    },
    "FACULTY OF ARCHITECTURE AND DESIGN": {
      fee: { TL: '₺34.000,00', USD: '$1,000', EURO: '€900' },
      semesterFee: { TL: '₺17.000,00', USD: '$500', EURO: '€450' },
      programs: [
        "Architecture",
        "Interior Architecture",
        "Urban and Regional Planning",
        "Industrial Design",
        "Graphic Design"
      ]
    },
    "FACULTY OF HUMANITIES AND SOCIAL SCIENCES": {
      fee: { TL: '₺27.000,00', USD: '$800', EURO: '€720' },
      semesterFee: { TL: '₺13.500,00', USD: '$400', EURO: '€360' },
      programs: [
        "Psychology",
        "Sociology",
        "History",
        "Turkish Language and Literature",
        "Philosophy",
        "English Language and Literature",
        "Art History"
      ]
    },
    "FACULTY OF MARITIME": {
      fee: { TL: '₺40.000,00', USD: '$1,200', EURO: '€1,080' },
      semesterFee: { TL: '₺20.000,00', USD: '$600', EURO: '€540' },
      programs: [
        "Maritime Transportation and Management Engineering",
        "Marine Engineering",
        "Maritime Business Management"
      ]
    },
    "GRADUATE SCHOOL": {
      fee: { TL: '₺24.000,00', USD: '$700', EURO: '€630' },
      semesterFee: { TL: '₺12.000,00', USD: '$350', EURO: '€315' },
      programs: [
        "Master's Programs",
        "PhD Programs",
        "Integrated PhD Programs"
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
          <h1>Bursa University</h1>
          <p>2024-2025 Academic Year Fee Structure</p>
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
                <div className="fees-container">
                  <div className="fee-badge">
                    {universityData[faculty].semesterFee[currencyView]} <span>per semester</span>
                  </div>
                  <div className="fee-badge yearly">
                    {universityData[faculty].fee[currencyView]} <span>per year</span>
                  </div>
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
        <p>© 2025 Bursa University. All fees are valid for the 2024-2025 academic year.</p>
      </footer>
    </div>
  );
}

export default BursaTech;