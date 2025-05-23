import React, { useState } from 'react';
import './Itu.css';

function Itu() {
  const [expandedFaculty, setExpandedFaculty] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currencyView, setCurrencyView] = useState('TL');

  const universityData = {
    "CIVIL ENGINEERING FACULTY": {
      fee: { TL: '₺66,500', USD: '$1,770', RANDS: 'R32,000' },
      departments: [
        "Construction Engineering",
        "Geomatics Engineering",
        "Environmental Engineering",
        "Structural Engineering"
      ]
    },
    "ARCHITECTURE FACULTY": {
      fee: { TL: '₺66,500', USD: '$1,770', RANDS: 'R32,000' },
      departments: [
        "Architecture",
        "Urban and Regional Planning",
        "Interior Architecture",
        "Landscape Architecture"
      ]
    },
    "MECHANICAL ENGINEERING FACULTY": {
      fee: { TL: '₺66,500', USD: '$1,770', RANDS: 'R32,000' },
      departments: [
        "Mechanical Engineering",
        "Manufacturing Engineering",
        "Industrial Engineering",
        "Energy Systems Engineering"
      ]
    },
    "ELECTRICAL-ELECTRONICS ENGINEERING FACULTY": {
      fee: { TL: '₺66,500', USD: '$1,770', RANDS: 'R32,000' },
      departments: [
        "Electrical Engineering",
        "Electronics and Communication Engineering",
        "Control and Automation Engineering",
        "Computer Engineering"
      ]
    },
    "MINING FACULTY": {
      fee: { TL: '₺66,500', USD: '$1,770', RANDS: 'R32,000' },
      departments: [
        "Mining Engineering",
        "Geological Engineering",
        "Petroleum and Natural Gas Engineering",
        "Geophysical Engineering"
      ]
    },
    "CHEMICAL-METALLURGICAL ENGINEERING FACULTY": {
      fee: { TL: '₺66,500', USD: '$1,770', RANDS: 'R32,000' },
      departments: [
        "Chemical Engineering",
        "Metallurgical and Materials Engineering",
        "Food Engineering",
        "Bioengineering"
      ]
    },
    "AERONAUTICS AND ASTRONAUTICS FACULTY": {
      fee: { TL: '₺66,500', USD: '$1,770', RANDS: 'R32,000' },
      departments: [
        "Aeronautical Engineering",
        "Astronautical Engineering",
        "Meteorological Engineering"
      ]
    },
    "COMPUTER AND INFORMATICS FACULTY": {
      fee: { TL: '₺66,500', USD: '$1,770', RANDS: 'R32,000' },
      departments: [
        "Computer Engineering",
        "Information Systems Engineering",
        "Software Engineering",
        "Artificial Intelligence and Data Engineering"
      ]
    },
    "BUSINESS FACULTY": {
      fee: { TL: '₺66,500', USD: '$1,770', RANDS: 'R32,000' },
      departments: [
        "Business Administration",
        "Economics",
        "Management Engineering",
        "International Business"
      ]
    },
    "NAVAL ARCHITECTURE AND OCEAN ENGINEERING FACULTY": {
      fee: { TL: '₺83,300', USD: '$2,220', RANDS: 'R40,000' },
      departments: [
        "Naval Architecture and Marine Engineering",
        "Ocean Engineering",
        "Shipbuilding and Ocean Engineering"
      ]
    },
    "MARITIME FACULTY": {
      fee: { TL: '₺83,300', USD: '$2,220', RANDS: 'R40,000' },
      departments: [
        "Maritime Transportation and Management Engineering",
        "Marine Engineering",
        "Maritime Business Administration"
      ]
    },
    "TEXTILE TECHNOLOGIES AND DESIGN FACULTY": {
      fee: { TL: '₺83,300', USD: '$2,220', RANDS: 'R40,000' },
      departments: [
        "Textile Engineering",
        "Fashion Design",
        "Textile Technology",
        "Fiber and Polymer Engineering"
      ]
    },
    "SCIENCE AND LITERATURE FACULTY": {
      fee: { TL: '₺66,500', USD: '$1,770', RANDS: 'R32,000' },
      departments: [
        "Mathematics Engineering",
        "Physics Engineering",
        "Chemistry",
        "Molecular Biology and Genetics",
        "Humanities and Social Sciences"
      ]
    },
    "CONSERVATORY": {
      fee: { TL: '₺184,750', USD: '$4,920', RANDS: 'R88,800' },
      departments: [
        "Turkish Music",
        "Classical Music",
        "Performing Arts",
        "Musicology"
      ]
    },
    "VOCATIONAL SCHOOL": {
      fee: { TL: '₺33,400', USD: '$890', RANDS: 'R16,000' },
      departments: [
        "Computer Programming",
        "Electronics Technology",
        "Construction Technology",
        "Machinery",
        "Automotive"
      ]
    },
    "GRADUATE PROGRAMS": {
      fee: { TL: '₺33,300', USD: '$885', RANDS: 'R16,000' },
      departments: [
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
    universityData[faculty].departments.some(department => 
      department.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="app-container">
      <header className="header">
        <div className="logo-container">
          <h1>İstanbul Technical University</h1>
          <p>Faculties and Fee Structure</p>
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
              placeholder="Search for departments or faculties..." 
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
          <div className="no-results">No departments or faculties match your search.</div>
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
                <div className="departments-list">
                  {universityData[faculty].departments.map((department, index) => (
                    <div 
                      className={`department-item ${department.toLowerCase().includes(searchTerm.toLowerCase()) ? 'highlight' : ''}`} 
                      key={index}
                    >
                      {department}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))
        )}
      </div>

      <footer className="footer">
        <p>© 2025 İstanbul Technical University. All undergraduate programs are 4-year duration. Fees are shown per academic year.</p>
      </footer>
    </div>
  );
}

export default Itu;