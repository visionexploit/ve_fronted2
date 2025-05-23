import React, { useState } from 'react';
import './YildizTech.css';

function YildizTech() {
  const [expandedFaculty, setExpandedFaculty] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currencyView, setCurrencyView] = useState('TL');

  const universityData = {
    "FACULTY OF ENGINEERING": {
      fee: { TL: '₺65 460', USD: '$2,000', RANDS: 'R36 100' },
      programs: [
        "Computer Engineering",
        "Electrical Engineering",
        "Electronics and Communication Engineering",
        "Industrial Engineering",
        "Civil Engineering",
        "Mechanical Engineering",
        "Metallurgical and Materials Engineering",
        "Control and Automation Engineering"
      ]
    },
    "FACULTY OF ARCHITECTURE": {
      fee: { TL: '₺65 460', USD: '$2,000', RANDS: 'R36 100' },
      programs: [
        "Architecture",
        "Urban and Regional Planning",
        "Interior Architecture"
      ]
    },
    "FACULTY OF ARTS AND SCIENCES": {
      fee: { TL: '₺65 460', USD: '$2,000', RANDS: 'R36 100' },
      programs: [
        "Mathematics",
        "Physics",
        "Chemistry",
        "Molecular Biology and Genetics",
        "Statistics",
        "Turkish Language and Literature",
        "Western Languages and Literatures"
      ]
    },
    "FACULTY OF ECONOMICS AND ADMINISTRATIVE SCIENCES": {
      fee: { TL: '₺65 460', USD: '$2,000', RANDS: 'R36 100' },
      programs: [
        "Economics",
        "Business Administration",
        "Political Science and International Relations",
        "Business Informatics"
      ]
    },
    "FACULTY OF EDUCATION": {
      fee: { TL: '₺65 460', USD: '$2,000', RANDS: 'R36 100' },
      programs: [
        "Computer and Instructional Technologies Education",
        "Educational Sciences",
        "Mathematics and Science Education",
        "Turkish and Social Sciences Education",
        "Foreign Languages Education"
      ]
    },
    "FACULTY OF ART AND DESIGN": {
      fee: { TL: '₺65 460', USD: '$2,000', RANDS: 'R36 100' },
      programs: [
        "Communication Design",
        "Music and Performing Arts",
        "Art"
      ]
    },
    "FACULTY OF CHEMISTRY AND METALLURGY": {
      fee: { TL: '₺65 460', USD: '$2,000', RANDS: 'R36 100' },
      programs: [
        "Chemical Engineering",
        "Food Engineering",
        "Bioengineering",
        "Mathematical Engineering"
      ]
    },
    "FACULTY OF NAVAL ARCHITECTURE AND MARITIME": {
      fee: { TL: '₺65 460', USD: '$2,000', RANDS: 'R36 100' },
      programs: [
        "Naval Architecture and Marine Engineering",
        "Marine and Maritime Technology Engineering",
        "Maritime Transportation and Management Engineering"
      ]
    },
    "FACULTY OF AERONAUTICS AND ASTRONAUTICS": {
      fee: { TL: '₺65 460', USD: '$2,000', RANDS: 'R36 100' },
      programs: [
        "Aeronautical Engineering",
        "Meteorological Engineering",
        "Aerospace Engineering"
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
          <h1>Yildiz Technical University</h1>
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

      <div className="fee-info-container">
        <div className="fee-info-card">
          <h3>2024-2025 Academic Year Fee Information</h3>
          <div className="fee-info-table">
            <div className="fee-info-row">
              <div className="fee-info-cell header">FALL SEMESTER</div>
              <div className="fee-info-cell header">SPRING SEMESTER</div>
              <div className="fee-info-cell header">ANNUAL PAYMENT AMOUNT</div>
            </div>
            <div className="fee-info-row">
              <div className="fee-info-cell">
                {currencyView === 'TL' ? '₺32 730' : currencyView === 'USD' ? '$1,000' : 'R18 050'}
              </div>
              <div className="fee-info-cell">
                {currencyView === 'TL' ? '₺32 730' : currencyView === 'USD' ? '$1,000' : 'R18 050'}
              </div>
              <div className="fee-info-cell">
                {currencyView === 'TL' ? '₺65 460' : currencyView === 'USD' ? '$2,000' : 'R36 100'}
              </div>
            </div>
          </div>
          <p className="fee-info-note">* Each year, on the first Monday of July, international student tuition fees are determined by converting USD to TL according to the Central Bank's effective selling rate.</p>
        </div>
      </div>

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

      <div className="payment-info">
        <h3>Payment Information</h3>
        <p>You can make your tuition fee payment through Is Bank ATM, Internet Banking, and IsCep Branch (Transactions are not processed at Bank Branches) by selecting Yildiz Technical University under Payments-Education Payments-University-Fee Payments and entering your Student Number.</p>
        <p className="warning">No refunds will be made for students who have earned the right to register and paid the contribution fee but later withdraw their registration, renounce their registration right, or have their registration cancelled.</p>
      </div>

      <footer className="footer">
        <p>© 2025 Yildiz Technical University. Fees are annual for all faculties and apply to international students.</p>
      </footer>
    </div>
  );
}

export default YildizTech;