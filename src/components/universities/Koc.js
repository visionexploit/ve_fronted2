import React, { useState } from 'react';
import './Koc.css';

function Koc() {
  const [expandedCollege, setExpandedCollege] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currencyView, setCurrencyView] = useState('USD');
  
  // Data from the provided PDF
  const universityData = {
    "School of Medicine (SOM)": {
      fee: { USD: '$59,000', TRY: '₺2,478,000', EUR: '€54,280' },
      programs: [
        "MD Medicine (MEDI)",
      ]
    },
    "Law School": {
      fee: { USD: '$38,000', TRY: '₺1,596,000', EUR: '€34,960' },
      programs: [
        "BA Law (LAW)",
      ]
    },
    "School of Nursing (SON)": {
      fee: { USD: '$38,000', TRY: '₺1,596,000', EUR: '€34,960' },
      programs: [
        "BSc Nursing (NURS)",
      ]
    },
    "College of Social Sciences and Humanities (CSSH)": {
      fee: { USD: '$38,000', TRY: '₺1,596,000', EUR: '€34,960' },
      programs: [
        "BA Archaeology and History of Art (ARHA)",
        "BA Philosophy (PHIL)",
        "BA Comparative Literature (CLTR)",
        "BA Media and Visual Arts (MAVA)",
        "BA Psychology (PSYC)",
        "BA Sociology (SOCI)",
        "BA History (HIST)",
      ]
    },
    "College of Administrative Sciences and Economics (CASE)": {
      fee: { USD: '$38,000', TRY: '₺1,596,000', EUR: '€34,960' },
      programs: [
        "BA Economics (ECON)",
        "BA Business Administration (BUSAD)",
        "BA International Relations (INTL)",
      ]
    },
    "College of Engineering (CE)": {
      fee: { USD: '$38,000', TRY: '₺1,596,000', EUR: '€34,960' },
      programs: [
        "BSc Computer Engineering (COMP)",
        "BSc Electrical and Electronics Engineering (ELEC)",
        "BSc Industrial Engineering (INDR)",
        "BSc Chemical and Biological Engineering (CHBI)",
        "BSc Mechanical Engineering (MECH)",
      ]
    },
    "College of Sciences (CS)": {
      fee: { USD: '$38,000', TRY: '₺1,596,000', EUR: '€34,960' },
      programs: [
        "BSc Physics (PHYS)",
        "BSc Chemistry (CHEM)",
        "BSc Mathematics (MATH)",
      ]
    },
  };

  const toggleCollege = (college) => {
    setExpandedCollege(expandedCollege === college ? null : college);
  };

  const filteredColleges = Object.keys(universityData).filter(college => 
    college.toLowerCase().includes(searchTerm.toLowerCase()) ||
    universityData[college].programs.some(program => 
      program.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  // Exchange rates (approximate)
  // 1 USD = 42 TRY (Turkish Lira)
  // 1 USD = 0.92 EUR (Euro)

  return (
    <div className="app-container">
      <header className="header">
        <div className="logo-container">
          <h1>Koç University</h1>
          <p>Tuition Fees for International Students 2025/2026</p>
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
              placeholder="Search for programs or colleges..." 
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

      <div className="colleges-container">
        {filteredColleges.length === 0 ? (
          <div className="no-results">No programs or colleges match your search.</div>
        ) : (
          filteredColleges.map((college) => (
            <div className="college-card" key={college}>
              <div 
                className="college-header" 
                onClick={() => toggleCollege(college)}
              >
                <h2>{college}</h2>
                <div className="fee-badge">
                  {universityData[college].fee[currencyView]} per year
                </div>
                <button className="expand-button">
                  {expandedCollege === college ? (
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
              
              {expandedCollege === college && (
                <div className="programs-list">
                  {universityData[college].programs.map((program, index) => (
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
        <p>© 2025 Koç University. All fees shown are annual tuition for international students. Programs may have additional costs.</p>
      </footer>
    </div>
  );
}

export default Koc;