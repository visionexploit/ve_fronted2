import React, { useState } from 'react';
import './Kastamonu.css';

function Kastamonu() {
  const [expandedFaculty, setExpandedFaculty] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currencyView, setCurrencyView] = useState('TL');

  // Conversion rates (approximate)
  const conversionRates = {
    USD: 0.0267, // 1 TL = 0.0267 USD
    RANDS: 0.481  // 1 TL = 0.481 RANDS
  };

  const formatCurrency = (amount, currency) => {
    // Remove the TL symbol and commas, then convert to number
    const numericValue = parseFloat(amount.replace('₺', '').replace(/\./g, '').replace(/,/g, '.'));
    
    switch(currency) {
      case 'USD':
        return `$${Math.round(numericValue * conversionRates.USD)}`;
      case 'RANDS':
        return `R${Math.round(numericValue * conversionRates.RANDS)}`;
      default:
        return amount;
    }
  };

  const universityData = {
    "FACULTY OF EDUCATION": {
      fee: { TL: '₺11.500,00', USD: formatCurrency('₺11.500,00', 'USD'), RANDS: formatCurrency('₺11.500,00', 'RANDS') },
      programs: [
        "Early Childhood Education",
        "Primary School Teaching",
        "Mathematics Teaching",
        "Turkish Language Teaching",
        "Science Teaching",
        "English Language Teaching",
        "Guidance and Psychological Counseling"
      ]
    },
    "FACULTY OF SCIENCE": {
      fee: { TL: '₺14.000,00', USD: formatCurrency('₺14.000,00', 'USD'), RANDS: formatCurrency('₺14.000,00', 'RANDS') },
      programs: [
        "Mathematics",
        "Physics",
        "Chemistry",
        "Biology",
        "Statistics",
        "Molecular Biology and Genetics"
      ]
    },
    "FACULTY OF HUMANITIES AND SOCIAL SCIENCES": {
      fee: { TL: '₺11.500,00', USD: formatCurrency('₺11.500,00', 'USD'), RANDS: formatCurrency('₺11.500,00', 'RANDS') },
      programs: [
        "History",
        "Sociology",
        "Philosophy",
        "Psychology",
        "Geography"
      ]
    },
    "FACULTY OF FINE ARTS": {
      fee: { TL: '₺21.000,00', USD: formatCurrency('₺21.000,00', 'USD'), RANDS: formatCurrency('₺21.000,00', 'RANDS') },
      programs: [
        "Painting",
        "Graphic Design",
        "Ceramics and Glass",
        "Traditional Turkish Arts",
        "Music"
      ]
    },
    "FACULTY OF ECONOMICS AND ADMINISTRATIVE SCIENCES": {
      fee: { TL: '₺12.500,00', USD: formatCurrency('₺12.500,00', 'USD'), RANDS: formatCurrency('₺12.500,00', 'RANDS') },
      programs: [
        "Economics",
        "Business Administration",
        "Political Science and Public Administration",
        "International Relations",
        "Finance and Banking"
      ]
    },
    "FACULTY OF THEOLOGY": {
      fee: { TL: '₺11.500,00', USD: formatCurrency('₺11.500,00', 'USD'), RANDS: formatCurrency('₺11.500,00', 'RANDS') },
      programs: [
        "Theology",
        "Islamic Studies"
      ]
    },
    "FACULTY OF COMMUNICATION": {
      fee: { TL: '₺10.500,00', USD: formatCurrency('₺10.500,00', 'USD'), RANDS: formatCurrency('₺10.500,00', 'RANDS') },
      programs: [
        "Journalism",
        "Public Relations and Advertising",
        "Radio, Television and Cinema"
      ]
    },
    "FACULTY OF ENGINEERING AND ARCHITECTURE": {
      fee: { TL: '₺16.500,00', USD: formatCurrency('₺16.500,00', 'USD'), RANDS: formatCurrency('₺16.500,00', 'RANDS') },
      programs: [
        "Computer Engineering",
        "Electrical-Electronics Engineering",
        "Civil Engineering",
        "Mechanical Engineering",
        "Architecture",
        "Food Engineering"
      ]
    },
    "FACULTY OF FORESTRY": {
      fee: { TL: '₺16.500,00', USD: formatCurrency('₺16.500,00', 'USD'), RANDS: formatCurrency('₺16.500,00', 'RANDS') },
      programs: [
        "Forest Engineering",
        "Forest Industry Engineering",
        "Landscape Architecture"
      ]
    },
    "FACULTY OF HEALTH SCIENCES": {
      fee: { TL: '₺11.500,00', USD: formatCurrency('₺11.500,00', 'USD'), RANDS: formatCurrency('₺11.500,00', 'RANDS') },
      programs: [
        "Nursing",
        "Physiotherapy and Rehabilitation",
        "Nutrition and Dietetics",
        "Midwifery"
      ]
    },
    "FACULTY OF SPORTS SCIENCES": {
      fee: { TL: '₺11.500,00', USD: formatCurrency('₺11.500,00', 'USD'), RANDS: formatCurrency('₺11.500,00', 'RANDS') },
      programs: [
        "Physical Education and Sports Teaching",
        "Coaching Education",
        "Sports Management",
        "Recreation"
      ]
    },
    "FACULTY OF TOURISM": {
      fee: { TL: '₺11.500,00', USD: formatCurrency('₺11.500,00', 'USD'), RANDS: formatCurrency('₺11.500,00', 'RANDS') },
      programs: [
        "Tourism Management",
        "Tourism Guidance",
        "Gastronomy and Culinary Arts"
      ]
    },
    "FACULTY OF TOURISM (ENGLISH)": {
      fee: { TL: '₺17.000,00', USD: formatCurrency('₺17.000,00', 'USD'), RANDS: formatCurrency('₺17.000,00', 'RANDS') },
      programs: [
        "Tourism and Hotel Management (English)"
      ]
    },
    "FACULTY OF MEDICINE": {
      fee: { TL: '₺100.000,00', USD: formatCurrency('₺100.000,00', 'USD'), RANDS: formatCurrency('₺100.000,00', 'RANDS') },
      programs: [
        "Medicine"
      ]
    },
    "FACULTY OF VETERINARY MEDICINE": {
      fee: { TL: '₺23.500,00', USD: formatCurrency('₺23.500,00', 'USD'), RANDS: formatCurrency('₺23.500,00', 'RANDS') },
      programs: [
        "Veterinary Medicine"
      ]
    },
    "SCHOOL OF CIVIL AVIATION": {
      fee: { TL: '₺16.500,00', USD: formatCurrency('₺16.500,00', 'USD'), RANDS: formatCurrency('₺16.500,00', 'RANDS') },
      programs: [
        "Aviation Management",
        "Pilot Training"
      ]
    },
    "KASTAMONU VOCATIONAL SCHOOL": {
      fee: { TL: '₺8.500,00', USD: formatCurrency('₺8.500,00', 'USD'), RANDS: formatCurrency('₺8.500,00', 'RANDS') },
      programs: [
        "Computer Programming",
        "Electrical",
        "Electronic Technology",
        "Construction Technology",
        "Occupational Health and Safety",
        "Accounting and Tax Applications"
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
          <h1>Kastamonu University</h1>
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
          <div className="no-results">No matching programs or faculties found.</div>
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
        <p>© 2025 Kastamonu University. All programs are 4 years in duration. Fees are shown per semester.</p>
      </footer>
    </div>
  );
}

export default Kastamonu;