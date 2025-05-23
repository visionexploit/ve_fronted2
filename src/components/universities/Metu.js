import React, { useState } from 'react';
import './Metu.css';

function Metu() {
  const [expandedFaculty, setExpandedFaculty] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currencyView, setCurrencyView] = useState('USD');

  const universityData = {
    "ARCHITECTURE FACULTY": {
      fee: { USD: '$1,500', TL: '₺56,250', EUR: '€1,380' },
      programs: [
        "Architecture"
      ]
    },
    "ENGINEERING FACULTY": {
      fee: { USD: '$1,500', TL: '₺56,250', EUR: '€1,380' },
      programs: [
        "Computer Engineering",
        "Electrical and Electronics Engineering",
        "Mechanical Engineering",
        "Civil Engineering",
        "Chemical Engineering",
        "Aerospace Engineering",
        "Metallurgical and Materials Engineering",
        "Mining Engineering",
        "Petroleum and Natural Gas Engineering",
        "Environmental Engineering",
        "Food Engineering",
        "Industrial Engineering"
      ]
    },
    "FACULTY OF ARTS AND SCIENCES": {
      programs: [
        {
          category: "Science Programs",
          fee: { USD: '$1,500', TL: '₺56,250', EUR: '€1,380' },
          departments: [
            "Mathematics",
            "Physics",
            "Chemistry",
            "Biology",
            "Molecular Biology and Genetics",
            "Statistics"
          ]
        },
        {
          category: "Social Sciences",
          fee: { USD: '$1,000', TL: '₺37,500', EUR: '€920' },
          departments: [
            "Sociology",
            "Psychology",
            "History",
            "Philosophy"
          ]
        }
      ]
    },
    "FACULTY OF ECONOMICS AND ADMINISTRATIVE SCIENCES": {
      fee: { USD: '$1,000', TL: '₺37,500', EUR: '€920' },
      programs: [
        "Economics",
        "Business Administration",
        "International Relations",
        "Political Science and Public Administration"
      ]
    },
    "FACULTY OF EDUCATION": {
      fee: { USD: '$1,000', TL: '₺37,500', EUR: '€920' },
      programs: [
        "Mathematics Education",
        "Physics Education",
        "Chemistry Education",
        "Biology Education",
        "English Language Teaching",
        "Early Childhood Education",
        "Elementary Science Education",
        "Computer Education and Instructional Technology"
      ]
    }
  };

  const toggleFaculty = (faculty) => {
    setExpandedFaculty(expandedFaculty === faculty ? null : faculty);
  };

  const filteredFaculties = Object.keys(universityData).filter(faculty => {
    if (faculty.toLowerCase().includes(searchTerm.toLowerCase())) {
      return true;
    }
    
    // Special handling for Faculty of Arts and Sciences which has a different structure
    if (faculty === "FACULTY OF ARTS AND SCIENCES") {
      return universityData[faculty].programs.some(program => 
        program.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        program.departments.some(dept => dept.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    // For other faculties
    return universityData[faculty].programs && 
      universityData[faculty].programs.some(program => 
        program.toLowerCase().includes(searchTerm.toLowerCase())
      );
  });

  const renderPrograms = (faculty) => {
    if (faculty === "FACULTY OF ARTS AND SCIENCES") {
      return universityData[faculty].programs.map((program, categoryIndex) => (
        <div key={categoryIndex} className="program-category">
          <h3 className="category-title">{program.category}</h3>
          <div className="fee-badge-small">
            {program.fee[currencyView]} per semester
          </div>
          {program.departments.map((dept, index) => (
            <div 
              className={`program-item ${dept.toLowerCase().includes(searchTerm.toLowerCase()) ? 'highlight' : ''}`} 
              key={index}
            >
              {dept}
            </div>
          ))}
        </div>
      ));
    } else {
      return universityData[faculty].programs.map((program, index) => (
        <div 
          className={`program-item ${program.toLowerCase().includes(searchTerm.toLowerCase()) ? 'highlight' : ''}`} 
          key={index}
        >
          {program}
        </div>
      ));
    }
  };

  const getFacultyFee = (faculty) => {
    if (faculty === "FACULTY OF ARTS AND SCIENCES") {
      // For the special faculty, show a range
      const minFee = universityData[faculty].programs[1].fee[currencyView]; // Social Sciences
      const maxFee = universityData[faculty].programs[0].fee[currencyView]; // Science Programs
      return `${minFee} - ${maxFee}`;
    } else {
      return universityData[faculty].fee[currencyView];
    }
  };

  return (
    <div className="app-container">
      <header className="header">
        <div className="logo-container">
          <h1>Middle East Technical University</h1>
          <p>Programs and Fee Structure (2024-2025)</p>
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
                  {getFacultyFee(faculty)} per semester
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
                  {renderPrograms(faculty)}
                </div>
              )}
            </div>
          ))
        )}
      </div>

      <footer className="footer">
        <p>© 2025 Middle East Technical University. All programs are undergraduate degrees.</p>
        <p className="footnote">Note: After the regular program duration plus two semesters, fees increase by 1.5 times.</p>
      </footer>
    </div>
  );
}

export default Metu;