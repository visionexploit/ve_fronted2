import React, { useState } from 'react';
import './Ankara.css';

function Ankara() {
  const [expandedFaculty, setExpandedFaculty] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currencyView, setCurrencyView] = useState('TL');
  const [programType, setProgramType] = useState('all');

  const universityData = {
    "FACULTY OF LANGUAGE, HISTORY AND GEOGRAPHY": {
      fee: { TL: '₺53.200,00 - ₺79.800,00', USD: '$1.774 - $2.660', RANDS: 'R32.000 - R48.000' },
      programs: [
        { name: "German Language and Literature (German)", fee: "₺79.800,00", period: 4, type: "bachelor" },
        { name: "American Culture and Literature (English)", fee: "₺79.800,00", period: 4, type: "bachelor" },
        { name: "Anthropology", fee: "₺53.200,00", period: 4, type: "bachelor" },
        { name: "Archaeology (English)", fee: "₺79.800,00", period: 4, type: "bachelor" },
        { name: "Bulgarian Language and Literature", fee: "₺79.800,00", period: 4, type: "bachelor" },
        { name: "Geography", fee: "₺53.200,00", period: 4, type: "bachelor" },
        { name: "Geography (English)", fee: "₺79.800,00", period: 4, type: "bachelor" },
        { name: "Contemporary Turkish Dialects and Literatures", fee: "₺53.200,00", period: 4, type: "bachelor" },
        { name: "Linguistics", fee: "₺53.200,00", period: 4, type: "bachelor" },
        { name: "Armenian Language and Culture (Armenian)", fee: "₺79.800,00", period: 4, type: "bachelor" },
        { name: "Philosophy", fee: "₺53.200,00", period: 4, type: "bachelor" },
        { name: "Philosophy (English)", fee: "₺79.800,00", period: 4, type: "bachelor" }
      ]
    },
    "FACULTY OF DENTISTRY": {
      fee: { TL: '₺212.600,00 - ₺318.900,00', USD: '$7.087 - $10.630', RANDS: 'R128.000 - R192.000' },
      programs: [
        { name: "Dentist", fee: "₺212.600,00", period: 5, type: "bachelor" },
        { name: "Dentist (English)", fee: "₺318.900,00", period: 5, type: "bachelor" }
      ]
    },
    "FACULTY OF PHARMACY": {
      fee: { TL: '₺199.400,00 - ₺299.100,00', USD: '$6.647 - $9.970', RANDS: 'R120.000 - R180.000' },
      programs: [
        { name: "Pharmacy", fee: "₺199.400,00", period: 5, type: "bachelor" },
        { name: "Pharmacy (English)", fee: "₺299.100,00", period: 5, type: "bachelor" }
      ]
    },
    "FACULTY OF EDUCATIONAL SCIENCES": {
      fee: { TL: '₺79.800,00', USD: '$2.660', RANDS: 'R48.000' },
      programs: [
        { name: "Teacher Training in Computer Sciences and Teaching Technologies", fee: "₺79.800,00", period: 4, type: "bachelor" },
        { name: "Teacher Training at Pre-School Level", fee: "₺79.800,00", period: 4, type: "bachelor" },
        { name: "Special Education Teacher", fee: "₺79.800,00", period: 4, type: "bachelor" },
        { name: "Guidance and Psychology Counseling", fee: "₺79.800,00", period: 4, type: "bachelor" },
        { name: "Teacher Training at Primary School Level", fee: "₺79.800,00", period: 4, type: "bachelor" },
        { name: "Teacher Training in Social Studies", fee: "₺79.800,00", period: 4, type: "bachelor" }
      ]
    },
    "FACULTY OF SCIENCES": {
      fee: { TL: '₺53.200,00 - ₺79.800,00', USD: '$1.774 - $2.660', RANDS: 'R32.000 - R48.000' },
      programs: [
        { name: "Astronomy and Space Sciences", fee: "₺53.200,00", period: 4, type: "bachelor" },
        { name: "Biology", fee: "₺53.200,00", period: 4, type: "bachelor" },
        { name: "Biology (English)", fee: "₺79.800,00", period: 4, type: "bachelor" },
        { name: "Physics", fee: "₺53.200,00", period: 4, type: "bachelor" },
        { name: "Chemistry", fee: "₺53.200,00", period: 4, type: "bachelor" },
        { name: "Chemistry (English)", fee: "₺79.800,00", period: 4, type: "bachelor" },
        { name: "Mathematics", fee: "₺53.200,00", period: 4, type: "bachelor" },
        { name: "Mathematics (English)", fee: "₺79.800,00", period: 4, type: "bachelor" }
      ]
    },
    "FACULTY OF FINE ARTS": {
      fee: { TL: '₺79.800,00', USD: '$2.660', RANDS: 'R48.000' },
      programs: [
        { name: "Conservation and Restoration of Cultural Assets", fee: "₺79.800,00", period: 4, type: "bachelor" }
      ]
    },
    "FACULTY OF NURSING": {
      fee: { TL: '₺79.800,00', USD: '$2.660', RANDS: 'R48.000' },
      programs: [
        { name: "Obstetrics", fee: "₺79.800,00", period: 4, type: "bachelor" },
        { name: "Nursing", fee: "₺79.800,00", period: 4, type: "bachelor" }
      ]
    },
    "FACULTY OF LAW": {
      fee: { TL: '₺106.300,00 - ₺159.450,00', USD: '$3.544 - $5.315', RANDS: 'R64.000 - R96.000' },
      programs: [
        { name: "Law", fee: "₺106.300,00", period: 4, type: "bachelor" },
        { name: "Law (English) (International Student)", fee: "₺159.450,00", period: 4, type: "bachelor" }
      ]
    },
    "FACULTY OF THEOLOGY": {
      fee: { TL: '₺66.600,00 - ₺99.900,00', USD: '$2.220 - $3.330', RANDS: 'R40.000 - R60.000' },
      programs: [
        { name: "Theology (30% Arabic)", fee: "₺66.600,00", period: 4, type: "bachelor" },
        { name: "Theology (English)", fee: "₺99.900,00", period: 4, type: "bachelor" }
      ]
    },
    "FACULTY OF COMMUNICATION": {
      fee: { TL: '₺66.600,00', USD: '$2.220', RANDS: 'R40.000' },
      programs: [
        { name: "Journalism", fee: "₺66.600,00", period: 4, type: "bachelor" },
        { name: "Public Relations and Presentation", fee: "₺66.600,00", period: 4, type: "bachelor" },
        { name: "Radio, Television and Cinema", fee: "₺66.600,00", period: 4, type: "bachelor" }
      ]
    },
    "FACULTY OF ENGINEERING": {
      fee: { TL: '₺119.700,00 - ₺179.550,00', USD: '$3.990 - $5.985', RANDS: 'R72.000 - R108.000' },
      programs: [
        { name: "Computer Engineering (English)", fee: "₺179.550,00", period: 4, type: "bachelor" },
        { name: "Biomedical Engineering (English)", fee: "₺179.550,00", period: 4, type: "bachelor" },
        { name: "Electrical & Electronic Engineering (English)", fee: "₺179.550,00", period: 4, type: "bachelor" },
        { name: "Engineering in Physics (English)", fee: "₺179.550,00", period: 4, type: "bachelor" },
        { name: "Food Engineering (English)", fee: "₺179.550,00", period: 4, type: "bachelor" },
        { name: "Constructional Engineering", fee: "₺119.700,00", period: 4, type: "bachelor" },
        { name: "Geophysical Engineering (English)", fee: "₺179.550,00", period: 4, type: "bachelor" },
        { name: "Geological Engineering (English)", fee: "₺179.550,00", period: 4, type: "bachelor" },
        { name: "Chemical Engineering (English)", fee: "₺179.550,00", period: 4, type: "bachelor" },
        { name: "Artificial Intelligence and Data Engineering", fee: "₺119.700,00", period: 4, type: "bachelor" },
        { name: "Software Engineering", fee: "₺119.700,00", period: 4, type: "bachelor" }
      ]
    },
    "FACULTY OF HEALTH SCIENCES": {
      fee: { TL: '₺66.600,00', USD: '$2.220', RANDS: 'R40.000' },
      programs: [
        { name: "Nutrition and Dietetics", fee: "₺66.600,00", period: 4, type: "bachelor" },
        { name: "Child Development", fee: "₺66.600,00", period: 4, type: "bachelor" },
        { name: "Orthosis and Prosthesis", fee: "₺66.600,00", period: 4, type: "bachelor" },
        { name: "Health Management", fee: "₺66.600,00", period: 4, type: "bachelor" }
      ]
    },
    "FACULTY OF POLITICAL SCIENCES": {
      fee: { TL: '₺79.800,00 - ₺119.700,00', USD: '$2.660 - $3.990', RANDS: 'R48.000 - R72.000' },
      programs: [
        { name: "Labor Economics and Industrial Relations (30% English)", fee: "₺79.800,00", period: 4, type: "bachelor" },
        { name: "Economics (30% English)", fee: "₺79.800,00", period: 4, type: "bachelor" },
        { name: "Business Administration (30% English)", fee: "₺79.800,00", period: 4, type: "bachelor" },
        { name: "Business Administration (English)", fee: "₺119.700,00", period: 4, type: "bachelor" },
        { name: "Public Finance (30% English)", fee: "₺79.800,00", period: 4, type: "bachelor" },
        { name: "Politics and Economics (English)", fee: "₺119.700,00", period: 4, type: "bachelor" },
        { name: "Political Science and Public Administration (30% English)", fee: "₺79.800,00", period: 4, type: "bachelor" },
        { name: "International Relations (30% English)", fee: "₺79.800,00", period: 4, type: "bachelor" }
      ]
    },
    "FACULTY OF MEDICINE": {
      fee: { TL: '₺318.900,00 - ₺478.350,00', USD: '$10.630 - $15.945', RANDS: 'R192.000 - R288.000' },
      programs: [
        { name: "Medicine", fee: "₺318.900,00", period: 6, type: "bachelor" },
        { name: "Medicine (English)", fee: "₺478.350,00", period: 6, type: "bachelor" }
      ]
    },
    "FACULTY OF APPLIED SCIENCES": {
      fee: { TL: '₺79.800,00', USD: '$2.660', RANDS: 'R48.000' },
      programs: [
        { name: "Actuary Sciences", fee: "₺79.800,00", period: 4, type: "bachelor" },
        { name: "Real Estate Development and Management", fee: "₺79.800,00", period: 4, type: "bachelor" }
      ]
    },
    "FACULTY OF VETERINARY SCIENCES": {
      fee: { TL: '₺146.300,00 - ₺219.450,00', USD: '$4.877 - $7.315', RANDS: 'R88.000 - R132.000' },
      programs: [
        { name: "Veterinary", fee: "₺146.300,00", period: 5, type: "bachelor" },
        { name: "Veterinary (English)", fee: "₺219.450,00", period: 5, type: "bachelor" }
      ]
    },
    "FACULTY OF AGRICULTURE": {
      fee: { TL: '₺79.800,00 - ₺119.700,00', USD: '$2.660 - $3.990', RANDS: 'R48.000 - R72.000' },
      programs: [
        { name: "Garden Plants", fee: "₺79.800,00", period: 4, type: "bachelor" },
        { name: "Plant Protection", fee: "₺79.800,00", period: 4, type: "bachelor" },
        { name: "Landscape Architecture", fee: "₺79.800,00", period: 4, type: "bachelor" },
        { name: "Aquaculture Engineering", fee: "₺79.800,00", period: 4, type: "bachelor" },
        { name: "Aquaculture Engineering (English)", fee: "₺119.700,00", period: 4, type: "bachelor" },
        { name: "Dairy Technology", fee: "₺79.800,00", period: 4, type: "bachelor" },
        { name: "Agricultural Economy", fee: "₺79.800,00", period: 4, type: "bachelor" },
        { name: "Agricultural Machinery and Technology Engineering", fee: "₺79.800,00", period: 4, type: "bachelor" },
        { name: "Agricultural Structures and Irrigation", fee: "₺79.800,00", period: 4, type: "bachelor" },
        { name: "Field Crops", fee: "₺79.800,00", period: 4, type: "bachelor" },
        { name: "Soil Science and Plant Nourishment", fee: "₺79.800,00", period: 4, type: "bachelor" },
        { name: "Animal Science", fee: "₺79.800,00", period: 4, type: "bachelor" },
        { name: "Agricultural Sciences (International Student)", fee: "₺79.800,00", period: 4, type: "bachelor" }
      ]
    },
    "STATE CONSERVATORY": {
      fee: { TL: '₺132.900,00', USD: '$4.430', RANDS: 'R80.000' },
      programs: [
        { name: "Composition", fee: "₺132.900,00", period: 4, type: "special" },
        { name: "Flute", fee: "₺132.900,00", period: 4, type: "special" },
        { name: "Violin", fee: "₺132.900,00", period: 4, type: "special" },
        { name: "Contrbas", fee: "₺132.900,00", period: 4, type: "special" },
        { name: "Piano", fee: "₺132.900,00", period: 4, type: "special" },
        { name: "Singing", fee: "₺132.900,00", period: 4, type: "special" },
        { name: "Viola", fee: "₺132.900,00", period: 4, type: "special" },
        { name: "Cello", fee: "₺132.900,00", period: 4, type: "special" }
      ]
    },
    "VOCATIONAL SCHOOLS": {
      fee: { TL: '₺40.000,00 - ₺53.200,00', USD: '$1.334 - $1.774', RANDS: 'R24.000 - R32.000' },
      programs: [
        { name: "Digital Factory Technologies", fee: "₺53.200,00", period: 2, type: "associate" },
        { name: "Mechatronics", fee: "₺53.200,00", period: 2, type: "associate" },
        { name: "Geographic Information Systems", fee: "₺40.000,00", period: 2, type: "associate" },
        { name: "Private Security and Protection", fee: "₺40.000,00", period: 2, type: "associate" },
        { name: "Social Security", fee: "₺40.000,00", period: 2, type: "associate" },
        { name: "Dairy and Livestock Farming", fee: "₺40.000,00", period: 2, type: "associate" },
        { name: "Emergency and Disaster Management", fee: "₺40.000,00", period: 2, type: "associate" },
        { name: "Cookery", fee: "₺40.000,00", period: 2, type: "associate" },
        { name: "Computer Programming", fee: "₺40.000,00", period: 2, type: "associate" },
        { name: "Accounting and Tax Applications", fee: "₺40.000,00", period: 2, type: "associate" },
        { name: "Food Technology", fee: "₺40.000,00", period: 2, type: "associate" },
        { name: "Physiotherapy", fee: "₺53.200,00", period: 2, type: "associate" },
        { name: "Anesthesia", fee: "₺53.200,00", period: 2, type: "associate" },
        { name: "Cyber Security Analyst and Operator (30% English)", fee: "₺53.200,00", period: 2, type: "associate" }
      ]
    }
  };

  const convertCurrency = (tlFee) => {
    const numericValue = parseFloat(tlFee.replace(/[^\d,]/g, '').replace(',', '.'));
    const usdRate = 30; // TL to USD exchange rate
    const randRate = 1.66; // TL to Rand exchange rate
    
    const usdValue = (numericValue / usdRate).toFixed(0);
    const randValue = (numericValue / randRate).toFixed(0);
    
    return {
      TL: tlFee,
      USD: `$${usdValue}`,
      RANDS: `R${randValue}`
    };
  };

  const toggleFaculty = (faculty) => {
    setExpandedFaculty(expandedFaculty === faculty ? null : faculty);
  };

  const filteredFaculties = Object.keys(universityData).filter(faculty => {
    // First filter by program type if not 'all'
    const facultyMatchesType = programType === 'all' || 
                               universityData[faculty].programs.some(program => 
                                 program.type === programType || 
                                 (programType === 'bachelor' && program.type === 'special')
                               );
                               
    // Then filter by search term
    const facultyMatchesSearch = faculty.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                 universityData[faculty].programs.some(program => 
                                   program.name.toLowerCase().includes(searchTerm.toLowerCase())
                                 );
                                 
    return facultyMatchesType && facultyMatchesSearch;
  });

  const getFeeBadgeClass = (fee) => {
    const numericValue = parseFloat(fee.replace(/[^\d,]/g, '').replace(',', '.'));
    if (numericValue <= 60000) return 'fee-badge low';
    if (numericValue <= 100000) return 'fee-badge medium';
    if (numericValue <= 200000) return 'fee-badge high';
    return 'fee-badge very-high';
  };

  const formatFee = (fee, currency) => {
    if (currency === 'TL') return fee;
    return convertCurrency(fee)[currency];
  };

  return (
    <div className="app-container">
      <header className="header">
        <div className="logo-container">
          <h1>Ankara University</h1>
          <p>Programs and Fee Structure 2024-2025</p>
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

      <div className="filter-options">
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

        <div className="program-type-toggle">
          <p>Program type:</p>
          <div className="toggle-buttons">
            <button 
              className={programType === 'all' ? 'active' : ''}
              onClick={() => setProgramType('all')}
            >
              All Programs
            </button>
            <button 
              className={programType === 'bachelor' ? 'active' : ''}
              onClick={() => setProgramType('bachelor')}
            >
              Bachelor's Degrees
            </button>
            <button 
              className={programType === 'associate' ? 'active' : ''}
              onClick={() => setProgramType('associate')}
            >
              Associate's Degrees
            </button>
            <button 
              className={programType === 'special' ? 'active' : ''}
              onClick={() => setProgramType('special')}
            >
              Special Talent Programs
            </button>
          </div>
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
                <div className="fee-range">
                  {universityData[faculty].fee[currencyView]}
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
                  <div className="program-header">
                    <span className="program-name-header">Program Name</span>
                    <span className="program-fee-header">Fee per Year</span>
                    <span className="program-duration-header">Duration</span>
                  </div>
                  {universityData[faculty].programs
                    .filter(program => programType === 'all' || program.type === programType || (programType === 'bachelor' && program.type === 'special'))
                    .filter(program => program.name.toLowerCase().includes(searchTerm.toLowerCase()))
                    .map((program, index) => (
                      <div 
                        className={`program-item ${program.name.toLowerCase().includes(searchTerm.toLowerCase()) && searchTerm ? 'highlight' : ''}`} 
                        key={index}
                      >
                        <span className="program-name">{program.name}</span>
                        <span className={getFeeBadgeClass(program.fee)}>
                          {formatFee(program.fee, currencyView)}
                        </span>
                        <span className="program-duration">{program.period} {program.period === 1 ? 'year' : 'years'}</span>
                      </div>
                    ))}
                </div>
              )}
            </div>
          ))
        )}
      </div>

      <footer className="footer">
        <p>© 2025 Ankara University. All fees are for the 2024-2025 academic year and are subject to change.</p>
      </footer>
    </div>
  );
}

export default Ankara;