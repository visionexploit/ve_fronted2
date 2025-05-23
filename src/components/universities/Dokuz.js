import React, { useState } from 'react';
import './Dokuz.css';

function Dokuz() {
  const [expandedFaculty, setExpandedFaculty] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currencyView, setCurrencyView] = useState('TL');

  // Data extracted from the PDF
  const universityData = {
    "BUCA EDUCATION FACULTY": {
      fee: { TL: '₺45.000,00', USD: '$1,500', EUR: '€1,350' },
      language: "Turkish/German/English/French",
      location: "BUCA/IZMIR",
      duration: 4,
      programs: [
        "German Language Teaching (German)",
        "Computer and Instructional Technologies Teaching (Turkish)",
        "Biology Teaching (Turkish)",
        "Geography Teaching (Turkish)",
        "Science Teaching (Turkish)",
        "Physics Teaching (Turkish)",
        "French Language Teaching (French)",
        "Elementary Mathematics Teaching (Turkish)",
        "English Language Teaching (English)",
        "Chemistry Teaching (Turkish)",
        "Mathematics Teaching (Turkish)",
        "Early Childhood Education (Turkish)",
        "Special Education Teaching (Turkish)",
        "Guidance and Psychological Counseling (Turkish)",
        "Primary School Teaching (Turkish)",
        "Social Studies Teaching (Turkish)",
        "History Teaching (Turkish)",
        "Turkish Language and Literature Teaching (Turkish)",
        "Turkish Language Teaching (Turkish)"
      ]
    },
    "MARITIME FACULTY": {
      fee: { TL: '₺84.000,00', USD: '$2,800', EUR: '€2,520' },
      language: "English",
      location: "BUCA/IZMIR",
      duration: 4,
      programs: [
        "Maritime Business Administration (English)",
        "Logistics Management (English)"
      ]
    },
    "DENTISTRY FACULTY": {
      fee: { TL: '₺150.000,00', USD: '$5,000', EUR: '€4,500' },
      language: "Turkish",
      location: "BALÇOVA/IZMIR",
      duration: 5,
      programs: [
        "Dentistry (Turkish)"
      ]
    },
    "FACULTY OF ARTS AND SCIENCES": {
      fee: { TL: '₺45.000,00', USD: '$1,500', EUR: '€1,350' },
      language: "Turkish/English/Russian",
      location: "BUCA/IZMIR",
      duration: 4,
      programs: [
        "American Culture and Literature (English)",
        "Archaeology (Turkish)",
        "Linguistics (Turkish)",
        "Philosophy (Turkish)",
        "English Translation and Interpretation (English)",
        "Comparative Literature (30% English)",
        "Museology (Turkish)",
        "Psychology (30% English)",
        "Russian Language and Literature (Russian)",
        "Sociology (Turkish)",
        "History (Turkish)",
        "Turkish Language and Literature (Turkish)"
      ]
    },
    "FACULTY OF SCIENCE": {
      fee: { TL: '₺56.000,00', USD: '$1,867', EUR: '€1,680' },
      language: "Turkish/English",
      location: "BUCA/IZMIR",
      duration: 4,
      programs: [
        "Computer Science (Turkish)",
        "Biology (Turkish)",
        "Physics (30% English)",
        "Statistics (30% English)",
        "Chemistry (30% English)",
        "Mathematics (English)"
      ]
    },
    "FACULTY OF PHYSICAL THERAPY AND REHABILITATION": {
      fee: { TL: '₺50.000,00', USD: '$1,667', EUR: '€1,500' },
      language: "Turkish",
      location: "BALÇOVA/IZMIR",
      duration: 4,
      programs: [
        "Physiotherapy and Rehabilitation (Turkish)"
      ]
    },
    "FACULTY OF FINE ARTS": {
      fee: { TL: '₺84.000,00', USD: '$2,800', EUR: '€2,520' },
      language: "Turkish",
      location: "BUCA/IZMIR",
      duration: 4,
      programs: [
        "Film Design and Screenwriting (Turkish)",
        "Film Design and Directing (Turkish)",
        "Photography (Turkish)",
        "Editing, Sound and Image Management (Turkish)"
      ]
    },
    "FACULTY OF NURSING": {
      fee: { TL: '₺50.000,00', USD: '$1,667', EUR: '€1,500' },
      language: "Turkish",
      location: "BALÇOVA/IZMIR",
      duration: 4,
      programs: [
        "Nursing (Turkish)"
      ]
    },
    "FACULTY OF LAW": {
      fee: { TL: '₺51.000,00', USD: '$1,700', EUR: '€1,530' },
      language: "Turkish",
      location: "BUCA/IZMIR",
      duration: 4,
      programs: [
        "Law (Turkish)"
      ]
    },
    "FACULTY OF ECONOMICS AND ADMINISTRATIVE SCIENCES": {
      fee: { TL: '₺51.000,00', USD: '$1,700', EUR: '€1,530' },
      language: "Turkish",
      location: "BUCA/IZMIR",
      duration: 4,
      programs: [
        "Labor Economics and Industrial Relations (Turkish)",
        "Econometrics (Turkish)",
        "Economics (Turkish)",
        "Business Administration (Turkish)",
        "Public Administration (Turkish)",
        "Public Finance (Turkish)",
        "Management Information Systems (Turkish)"
      ]
    },
    "FACULTY OF THEOLOGY": {
      fee: { TL: '₺45.000,00', USD: '$1,500', EUR: '€1,350' },
      language: "30% Arabic",
      location: "KARABAĞLAR/IZMIR",
      duration: 4,
      programs: [
        "Theology (30% Arabic)"
      ]
    },
    "FACULTY OF BUSINESS": {
      fee: { TL: '₺45.000,00', USD: '$1,500', EUR: '€1,350' },
      feeUOLP: { TL: '₺100.000,00', USD: '$3,333', EUR: '€3,000' },
      language: "English",
      location: "BUCA/IZMIR",
      duration: 4,
      programs: [
        "Economics (English)",
        "Economics (English) (UOLP-State University of New York (SUNY Albany))",
        "Business Administration (English)",
        "Business Administration (English) (UOLP-State University of New York (SUNY Albany))",
        "Political Science and International Relations (English)",
        "Political Science and International Relations (English) (UOLP-State University of New York (SUNY Albany))",
        "Tourism Management (English)",
        "International Trade and Business (English)"
      ]
    },
    "FACULTY OF ARCHITECTURE": {
      fee: { TL: '₺75.000,00', USD: '$2,500', EUR: '€2,250' },
      language: "Turkish",
      location: "BUCA/IZMIR",
      duration: 4,
      programs: [
        "Architecture (Turkish)",
        "Urban and Regional Planning (Turkish)"
      ]
    },
    "FACULTY OF ENGINEERING": {
      fee: { TL: '₺67.000,00', USD: '$2,233', EUR: '€2,010' },
      language: "Turkish/English",
      location: "BUCA/IZMIR",
      duration: 4,
      programs: [
        "Computer Engineering (English)",
        "Environmental Engineering (Turkish)",
        "Electrical-Electronics Engineering (English)",
        "Industrial Engineering (Turkish)",
        "Civil Engineering (Turkish)",
        "Geophysics Engineering (Turkish)",
        "Geology Engineering (Turkish)",
        "Mining Engineering (Turkish)",
        "Mechanical Engineering (30% English)",
        "Metallurgical and Materials Engineering (30% English)",
        "Textile Engineering (30% English)"
      ]
    },
    "FACULTY OF MEDICINE": {
      fee: { TL: '₺350.000,00', USD: '$11,667', EUR: '€10,500' },
      language: "Turkish",
      location: "BALÇOVA/IZMIR",
      duration: 6,
      programs: [
        "Medicine (Turkish)"
      ]
    },
    "FACULTY OF TOURISM": {
      fee: { TL: '₺45.000,00', USD: '$1,500', EUR: '€1,350' },
      language: "Turkish/30% English",
      location: "BUCA/IZMIR",
      duration: 4,
      programs: [
        "Gastronomy and Culinary Arts (Turkish)",
        "Tourism Management (30% English)"
      ]
    },
    "FACULTY OF VETERINARY MEDICINE": {
      fee: { TL: '₺94.000,00', USD: '$3,133', EUR: '€2,820' },
      language: "Turkish",
      location: "KİRAZ/IZMIR",
      duration: 5,
      programs: [
        "Veterinary Medicine (Turkish)"
      ]
    },
    "SCHOOL OF APPLIED SCIENCES": {
      fee: { TL: '₺51.000,00', USD: '$1,700', EUR: '€1,530' },
      language: "Turkish",
      location: "BUCA/IZMIR",
      duration: 4,
      programs: [
        "Gastronomy and Culinary Arts (Turkish)",
        "Tourism Management (Turkish)",
        "International Trade (Turkish)"
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
    ) ||
    universityData[faculty].location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getCurrencyFee = (faculty) => {
    const feeObj = universityData[faculty].fee;
    return feeObj[currencyView];
  };

  return (
    <div className="app-container">
      <header className="header">
        <div className="logo-container">
          <h1>Dokuz Eylül University</h1>
          <p>Programs and Fee Structure for International Students</p>
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
              placeholder="Search for programs, faculties, or locations..." 
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
                <div className="header-main">
                  <h2>{faculty}</h2>
                  <div className="faculty-info">
                    <span className="location-badge">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      {universityData[faculty].location}
                    </span>
                    <span className="duration-badge">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                      {universityData[faculty].duration} years
                    </span>
                    <span className="language-badge">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                      </svg>
                      {universityData[faculty].language}
                    </span>
                  </div>
                </div>
                <div className="header-right">
                  <div className="fee-badge">
                    {getCurrencyFee(faculty)} per year
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
              </div>
              
              {expandedFaculty === faculty && (
                <div className="programs-list">
                  {universityData[faculty].programs.map((program, index) => {
                    const isUOLP = program.includes("UOLP");
                    return (
                      <div 
                        className={`program-item ${isUOLP ? 'uolp' : ''} ${program.toLowerCase().includes(searchTerm.toLowerCase()) ? 'highlight' : ''}`} 
                        key={index}
                      >
                        <div className="program-name">
                          {program}
                        </div>
                        {isUOLP && (
                          <div className="program-fee">
                            {universityData[faculty].feeUOLP[currencyView]} per year
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          ))
        )}
      </div>

      <footer className="footer">
        <p>© 2025 Dokuz Eylül University. Tuition fees are for new international students for the 2024-2025 academic year.</p>
      </footer>
    </div>
  );
}

export default Dokuz;