import React, { useState } from 'react';
import './IstanbulAydin.css';

function IstanbulAydin() {
  const [expandedFaculty, setExpandedFaculty] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currencyView, setCurrencyView] = useState('TL');
  const [discountFilter, setDiscountFilter] = useState('all');

  // Data structured from the PDF
  const universityData = {
    "LANGUAGE PROGRAMS": {
      type: "LANGUAGE",
      programs: [
        { name: "English Translation and Interpretation", discount: "50% Scholarship", fee: { TL: '78.750 ₺', USD: '$2,625', EUR: '€2,190' } },
        { name: "Arabic Teaching", discount: "50% Scholarship", fee: { TL: '77.250 ₺', USD: '$2,575', EUR: '€2,150' } },
        { name: "English Teaching", discount: "50% Scholarship", fee: { TL: '77.250 ₺', USD: '$2,575', EUR: '€2,150' } },
        { name: "English Language and Literature", discount: "50% Scholarship", fee: { TL: '72.450 ₺', USD: '$2,415', EUR: '€2,015' } },
        { name: "Arabic Translation and Interpretation", discount: "50% Scholarship", fee: { TL: '66.400 ₺', USD: '$2,213', EUR: '€1,845' } },
        { name: "Russian Translation and Interpretation", discount: "50% Scholarship", fee: { TL: '66.400 ₺', USD: '$2,213', EUR: '€1,845' } }
      ]
    },
    "BUSINESS & MANAGEMENT": {
      type: "EA",
      programs: [
        { name: "Aviation Management (English)", discount: "50% Scholarship", fee: { TL: '78.750 ₺', USD: '$2,625', EUR: '€2,190' } },
        { name: "Business Administration", discount: "50% Scholarship", fee: { TL: '78.750 ₺', USD: '$2,625', EUR: '€2,190' } },
        { name: "Business Administration (English)", discount: "50% Scholarship", fee: { TL: '78.750 ₺', USD: '$2,625', EUR: '€2,190' } },
        { name: "International Trade and Finance (English)", discount: "50% Scholarship", fee: { TL: '78.750 ₺', USD: '$2,625', EUR: '€2,190' } },
        { name: "Management Information Systems", discount: "50% Scholarship", fee: { TL: '74.850 ₺', USD: '$2,495', EUR: '€2,080' } },
        { name: "Economics and Finance", discount: "50% Scholarship", fee: { TL: '72.450 ₺', USD: '$2,415', EUR: '€2,015' } },
        { name: "Public Administration", discount: "50% Scholarship", fee: { TL: '72.450 ₺', USD: '$2,415', EUR: '€2,015' } },
        { name: "Accounting and Financial Management", discount: "50% Scholarship", fee: { TL: '72.450 ₺', USD: '$2,415', EUR: '€2,015' } },
        { name: "Political Science and International Relations (English)", discount: "50% Scholarship", fee: { TL: '72.450 ₺', USD: '$2,415', EUR: '€2,015' } }
      ]
    },
    "EDUCATION": {
      type: "EA/VERBAL",
      programs: [
        { name: "Guidance and Psychological Counseling", discount: "50% Scholarship", fee: { TL: '77.250 ₺', USD: '$2,575', EUR: '€2,150' } },
        { name: "Primary School Teaching", discount: "50% Scholarship", fee: { TL: '77.250 ₺', USD: '$2,575', EUR: '€2,150' } },
        { name: "Elementary Mathematics Teaching", discount: "50% Scholarship", fee: { TL: '77.250 ₺', USD: '$2,575', EUR: '€2,150' } },
        { name: "Early Childhood Education", discount: "50% Scholarship", fee: { TL: '77.250 ₺', USD: '$2,575', EUR: '€2,150' } },
        { name: "Special Education Teaching", discount: "50% Scholarship", fee: { TL: '77.250 ₺', USD: '$2,575', EUR: '€2,150' } },
        { name: "Turkish Language Teaching", discount: "50% Scholarship", fee: { TL: '77.250 ₺', USD: '$2,575', EUR: '€2,150' } },
        { name: "Music Teaching", discount: "50% Scholarship", fee: { TL: '77.250 ₺', USD: '$2,575', EUR: '€2,150' } },
        { name: "Physical Education and Sports Teaching", discount: "50% Scholarship", fee: { TL: '77.250 ₺', USD: '$2,575', EUR: '€2,150' } }
      ]
    },
    "SOCIAL SCIENCES": {
      type: "EA/VERBAL",
      programs: [
        { name: "Sociology", discount: "50% Scholarship", fee: { TL: '72.450 ₺', USD: '$2,415', EUR: '€2,015' } },
        { name: "Child Development", discount: "50% Scholarship", fee: { TL: '62.750 ₺', USD: '$2,092', EUR: '€1,743' } },
        { name: "Healthcare Management", discount: "50% Scholarship", fee: { TL: '62.750 ₺', USD: '$2,092', EUR: '€1,743' } },
        { name: "Social Work", discount: "50% Scholarship", fee: { TL: '62.750 ₺', USD: '$2,092', EUR: '€1,743' } },
        { name: "History", discount: "50% Scholarship", fee: { TL: '72.450 ₺', USD: '$2,415', EUR: '€2,015' } },
        { name: "Turkish Language and Literature", discount: "50% Scholarship", fee: { TL: '72.450 ₺', USD: '$2,415', EUR: '€2,015' } },
        { name: "Psychology", discount: "Full Tuition", fee: { TL: '154.500 ₺', USD: '$5,150', EUR: '€4,292' } }
      ]
    },
    "LAW & LEGAL STUDIES": {
      type: "EA/BASE",
      programs: [
        { name: "Law", discount: "50% Scholarship", fee: { TL: '103.850 ₺', USD: '$3,462', EUR: '€2,885' } },
        { name: "Justice", discount: "Full Tuition", fee: { TL: '82.100 ₺', USD: '$2,737', EUR: '€2,281' } },
        { name: "Justice", discount: "50% Scholarship", fee: { TL: '41.050 ₺', USD: '$1,368', EUR: '€1,140' } }
      ]
    },
    "ENGINEERING": {
      type: "MATH/SCIENCE",
      programs: [
        { name: "Computer Engineering (English)", discount: "50% Scholarship", fee: { TL: '89.250 ₺', USD: '$2,975', EUR: '€2,479' } },
        { name: "Electrical-Electronics Engineering (English)", discount: "50% Scholarship", fee: { TL: '89.250 ₺', USD: '$2,975', EUR: '€2,479' } },
        { name: "Industrial Engineering (English)", discount: "50% Scholarship", fee: { TL: '89.250 ₺', USD: '$2,975', EUR: '€2,479' } },
        { name: "Software Engineering (English)", discount: "50% Scholarship", fee: { TL: '89.250 ₺', USD: '$2,975', EUR: '€2,479' } },
        { name: "Software Development (English)", discount: "50% Scholarship", fee: { TL: '74.850 ₺', USD: '$2,495', EUR: '€2,080' } },
        { name: "Food Engineering", discount: "50% Scholarship", fee: { TL: '74.850 ₺', USD: '$2,495', EUR: '€2,080' } },
        { name: "Aerospace Engineering (English)", discount: "50% Scholarship", fee: { TL: '74.850 ₺', USD: '$2,495', EUR: '€2,080' } },
        { name: "Civil Engineering", discount: "50% Scholarship", fee: { TL: '74.850 ₺', USD: '$2,495', EUR: '€2,080' } },
        { name: "Civil Engineering (English)", discount: "50% Scholarship", fee: { TL: '74.850 ₺', USD: '$2,495', EUR: '€2,080' } },
        { name: "Mechanical Engineering", discount: "50% Scholarship", fee: { TL: '74.850 ₺', USD: '$2,495', EUR: '€2,080' } },
        { name: "Mechanical Engineering (English)", discount: "50% Scholarship", fee: { TL: '74.850 ₺', USD: '$2,495', EUR: '€2,080' } }
      ]
    },
    "DESIGN & ARCHITECTURE": {
      type: "MATH/SCIENCE",
      programs: [
        { name: "Digital Game Design", discount: "50% Scholarship", fee: { TL: '78.750 ₺', USD: '$2,625', EUR: '€2,190' } },
        { name: "Industrial Product Design", discount: "50% Scholarship", fee: { TL: '77.250 ₺', USD: '$2,575', EUR: '€2,150' } },
        { name: "Interior Architecture", discount: "50% Scholarship", fee: { TL: '77.250 ₺', USD: '$2,575', EUR: '€2,150' } },
        { name: "Architecture", discount: "50% Scholarship", fee: { TL: '77.250 ₺', USD: '$2,575', EUR: '€2,150' } },
        { name: "Animation and Cartoon", discount: "50% Scholarship", fee: { TL: '78.750 ₺', USD: '$2,625', EUR: '€2,190' } },
        { name: "Graphic Design", discount: "50% Scholarship", fee: { TL: '78.750 ₺', USD: '$2,625', EUR: '€2,190' } },
        { name: "Textile and Fashion Design", discount: "50% Scholarship", fee: { TL: '66.400 ₺', USD: '$2,213', EUR: '€1,845' } }
      ]
    },
    "HEALTH SCIENCES": {
      type: "MATH/SCIENCE/BASE",
      programs: [
        { name: "Physiotherapy and Rehabilitation", discount: "50% Scholarship", fee: { TL: '78.750 ₺', USD: '$2,625', EUR: '€2,190' } },
        { name: "Audiology", discount: "50% Scholarship", fee: { TL: '62.750 ₺', USD: '$2,092', EUR: '€1,743' } },
        { name: "Faculty of Dentistry", discount: "Full Tuition", fee: { TL: '253.500 ₺', USD: '$8,450', EUR: '€7,042' } },
        { name: "Faculty of Medicine", discount: "Full Tuition", fee: { TL: '253.500 ₺', USD: '$8,450', EUR: '€7,042' } },
        { name: "Faculty of Dentistry (English)", discount: "25% Scholarship", fee: { TL: '190.125 ₺', USD: '$6,338', EUR: '€5,281' } },
        { name: "Faculty of Medicine (English)", discount: "25% Scholarship", fee: { TL: '190.125 ₺', USD: '$6,338', EUR: '€5,281' } },
        { name: "Nutrition and Dietetics", discount: "25% Scholarship", fee: { TL: '118.125 ₺', USD: '$3,938', EUR: '€3,281' } },
        { name: "Nursing", discount: "25% Scholarship", fee: { TL: '118.125 ₺', USD: '$3,938', EUR: '€3,281' } }
      ]
    },
    "COMMUNICATION & MEDIA": {
      type: "VERBAL",
      programs: [
        { name: "Journalism", discount: "50% Scholarship", fee: { TL: '78.750 ₺', USD: '$2,625', EUR: '€2,190' } },
        { name: "Visual Communication Design", discount: "50% Scholarship", fee: { TL: '78.750 ₺', USD: '$2,625', EUR: '€2,190' } },
        { name: "Public Relations and Publicity", discount: "50% Scholarship", fee: { TL: '78.750 ₺', USD: '$2,625', EUR: '€2,190' } },
        { name: "Radio, Television and Cinema", discount: "50% Scholarship", fee: { TL: '78.750 ₺', USD: '$2,625', EUR: '€2,190' } },
        { name: "Advertising", discount: "50% Scholarship", fee: { TL: '78.750 ₺', USD: '$2,625', EUR: '€2,190' } },
        { name: "Television News and Programming", discount: "50% Scholarship", fee: { TL: '78.750 ₺', USD: '$2,625', EUR: '€2,190' } },
        { name: "New Media and Communication", discount: "50% Scholarship", fee: { TL: '78.750 ₺', USD: '$2,625', EUR: '€2,190' } },
        { name: "Gastronomy and Culinary Arts", discount: "Full Tuition", fee: { TL: '157.500 ₺', USD: '$5,250', EUR: '€4,375' } },
        { name: "Drama and Acting", discount: "50% Scholarship", fee: { TL: '66.400 ₺', USD: '$2,213', EUR: '€1,845' } }
      ]
    },
    "SPORTS & RECREATION": {
      type: "BASE",
      programs: [
        { name: "Coaching Education", discount: "50% Scholarship", fee: { TL: '77.250 ₺', USD: '$2,575', EUR: '€2,150' } },
        { name: "Sports Management", discount: "50% Scholarship", fee: { TL: '77.250 ₺', USD: '$2,575', EUR: '€2,150' } },
        { name: "Recreation", discount: "50% Scholarship", fee: { TL: '66.400 ₺', USD: '$2,213', EUR: '€1,845' } }
      ]
    },
    "AVIATION": {
      type: "MATH/SCIENCE",
      programs: [
        { name: "Pilotage (English)", discount: "Full Tuition", fee: { TL: '200.600 ₺', USD: '$6,687', EUR: '€5,572' } }
      ]
    },
    "HEALTH VOCATIONAL PROGRAMS": {
      type: "BASE",
      programs: [
        { name: "Operating Room Services", discount: "Full Tuition", fee: { TL: '77.300 ₺', USD: '$2,577', EUR: '€2,147' } },
        { name: "Anesthesia", discount: "Full Tuition", fee: { TL: '77.300 ₺', USD: '$2,577', EUR: '€2,147' } },
        { name: "Anesthesia (Evening Education)", discount: "Full Tuition", fee: { TL: '77.300 ₺', USD: '$2,577', EUR: '€2,147' } },
        { name: "Physiotherapy", discount: "Full Tuition", fee: { TL: '77.300 ₺', USD: '$2,577', EUR: '€2,147' } },
        { name: "First Aid and Emergency Care", discount: "Full Tuition", fee: { TL: '77.300 ₺', USD: '$2,577', EUR: '€2,147' } },
        { name: "First Aid and Emergency Care (Evening)", discount: "Full Tuition", fee: { TL: '77.300 ₺', USD: '$2,577', EUR: '€2,147' } },
        { name: "Oral and Dental Health", discount: "25% Scholarship", fee: { TL: '57.975 ₺', USD: '$1,933', EUR: '€1,610' } },
        { name: "Anesthesia", discount: "25% Scholarship", fee: { TL: '57.975 ₺', USD: '$1,933', EUR: '€1,610' } },
        { name: "Anesthesia (Evening Education)", discount: "25% Scholarship", fee: { TL: '57.975 ₺', USD: '$1,933', EUR: '€1,610' } },
        { name: "Physiotherapy", discount: "25% Scholarship", fee: { TL: '57.975 ₺', USD: '$1,933', EUR: '€1,610' } },
        { name: "Physiotherapy (Evening Education)", discount: "25% Scholarship", fee: { TL: '57.975 ₺', USD: '$1,933', EUR: '€1,610' } },
        { name: "Oral and Dental Health (Evening)", discount: "50% Scholarship", fee: { TL: '38.650 ₺', USD: '$1,288', EUR: '€1,074' } },
        { name: "Operating Room Services", discount: "50% Scholarship", fee: { TL: '38.650 ₺', USD: '$1,288', EUR: '€1,074' } },
        { name: "Operating Room Services (Evening)", discount: "50% Scholarship", fee: { TL: '38.650 ₺', USD: '$1,288', EUR: '€1,074' } },
        { name: "Dental Prosthetics Technology", discount: "50% Scholarship", fee: { TL: '38.650 ₺', USD: '$1,288', EUR: '€1,074' } },
        { name: "Dental Prosthetics Technology (Evening)", discount: "50% Scholarship", fee: { TL: '38.650 ₺', USD: '$1,288', EUR: '€1,074' } },
        { name: "Dialysis", discount: "50% Scholarship", fee: { TL: '38.650 ₺', USD: '$1,288', EUR: '€1,074' } },
        { name: "Dialysis (Evening Education)", discount: "50% Scholarship", fee: { TL: '38.650 ₺', USD: '$1,288', EUR: '€1,074' } },
        { name: "Pharmacy Services", discount: "50% Scholarship", fee: { TL: '38.650 ₺', USD: '$1,288', EUR: '€1,074' } },
        { name: "Electroneurophysiology", discount: "50% Scholarship", fee: { TL: '38.650 ₺', USD: '$1,288', EUR: '€1,074' } },
        { name: "Electroneurophysiology (Evening)", discount: "50% Scholarship", fee: { TL: '38.650 ₺', USD: '$1,288', EUR: '€1,074' } },
        { name: "Audiometry", discount: "50% Scholarship", fee: { TL: '38.650 ₺', USD: '$1,288', EUR: '€1,074' } },
        { name: "Audiometry (Evening Education)", discount: "50% Scholarship", fee: { TL: '38.650 ₺', USD: '$1,288', EUR: '€1,074' } },
        { name: "Opticianry", discount: "50% Scholarship", fee: { TL: '38.650 ₺', USD: '$1,288', EUR: '€1,074' } },
        { name: "Opticianry (Evening Education)", discount: "50% Scholarship", fee: { TL: '38.650 ₺', USD: '$1,288', EUR: '€1,074' } },
        { name: "Orthopedic Prosthetics and Orthotics", discount: "50% Scholarship", fee: { TL: '38.650 ₺', USD: '$1,288', EUR: '€1,074' } },
        { name: "Orthopedic Prosthetics and Orthotics (Evening)", discount: "50% Scholarship", fee: { TL: '38.650 ₺', USD: '$1,288', EUR: '€1,074' } },
        { name: "Pathology Laboratory Techniques", discount: "50% Scholarship", fee: { TL: '38.650 ₺', USD: '$1,288', EUR: '€1,074' } },
        { name: "Pathology Laboratory Techniques (Evening)", discount: "50% Scholarship", fee: { TL: '38.650 ₺', USD: '$1,288', EUR: '€1,074' } },
        { name: "Radiotherapy", discount: "50% Scholarship", fee: { TL: '38.650 ₺', USD: '$1,288', EUR: '€1,074' } },
        { name: "Radiotherapy (Evening Education)", discount: "50% Scholarship", fee: { TL: '38.650 ₺', USD: '$1,288', EUR: '€1,074' } },
        { name: "Social Services", discount: "50% Scholarship", fee: { TL: '38.650 ₺', USD: '$1,288', EUR: '€1,074' } },
        { name: "Social Services (Evening Education)", discount: "50% Scholarship", fee: { TL: '38.650 ₺', USD: '$1,288', EUR: '€1,074' } },
        { name: "Medical Documentation and Secretarial", discount: "50% Scholarship", fee: { TL: '38.650 ₺', USD: '$1,288', EUR: '€1,074' } },
        { name: "Medical Documentation and Secretarial (Evening)", discount: "50% Scholarship", fee: { TL: '38.650 ₺', USD: '$1,288', EUR: '€1,074' } },
        { name: "Medical Imaging Techniques", discount: "50% Scholarship", fee: { TL: '38.650 ₺', USD: '$1,288', EUR: '€1,074' } },
        { name: "Medical Imaging Techniques (Evening)", discount: "50% Scholarship", fee: { TL: '38.650 ₺', USD: '$1,288', EUR: '€1,074' } },
        { name: "Medical Laboratory Techniques", discount: "50% Scholarship", fee: { TL: '38.650 ₺', USD: '$1,288', EUR: '€1,074' } },
        { name: "Medical Laboratory Techniques (Evening)", discount: "50% Scholarship", fee: { TL: '38.650 ₺', USD: '$1,288', EUR: '€1,074' } }
      ]
    }
  };

  const prepInfo = {
    "Undergraduate Preparation": {
      full: { TL: '132.800 TL' },
      "50% Scholarship": { TL: '66.400 TL' },
      "25% Scholarship": { TL: '99.600 TL' }
    },
    "Associate Degree Preparation": {
      full: { TL: '67.600 TL' },
      "50% Scholarship": { TL: '33.800 TL' },
      "25% Scholarship": { TL: '50.700 TL' }
    }
  };

  const toggleFaculty = (faculty) => {
    setExpandedFaculty(expandedFaculty === faculty ? null : faculty);
  };

  const filteredFaculties = Object.keys(universityData).filter(faculty => {
    // First check if the faculty name matches the search term
    if (faculty.toLowerCase().includes(searchTerm.toLowerCase())) {
      return true;
    }
    
    // Then check if any program matches the search term and the discount filter
    return universityData[faculty].programs.some(program => {
      const programMatches = program.name.toLowerCase().includes(searchTerm.toLowerCase());
      
      if (discountFilter === 'all') {
        return programMatches;
      } else {
        return programMatches && program.discount === discountFilter;
      }
    });
  });

  const getFilteredPrograms = (faculty) => {
    return universityData[faculty].programs.filter(program => {
      const programMatches = program.name.toLowerCase().includes(searchTerm.toLowerCase());
      
      if (discountFilter === 'all') {
        return programMatches || faculty.toLowerCase().includes(searchTerm.toLowerCase());
      } else {
        return (programMatches || faculty.toLowerCase().includes(searchTerm.toLowerCase())) && 
               program.discount === discountFilter;
      }
    });
  };

  return (
    <div className="app-container">
      <header className="header">
        <div className="logo-container">
          <h1>Istanbul Aydin University</h1>
          <p>Programs and Fee Structure 2025</p>
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

      <div className="filters-container">
        <div className="filter-group">
          <p>Currency:</p>
          <div className="toggle-buttons">
            <button 
              className={currencyView === 'TL' ? 'active' : ''}
              onClick={() => setCurrencyView('TL')}
            >
              TL
            </button>
            <button 
              className={currencyView === 'USD' ? 'active' : ''}
              onClick={() => setCurrencyView('USD')}
            >
              USD
            </button>
            <button 
              className={currencyView === 'EUR' ? 'active' : ''}
              onClick={() => setCurrencyView('EUR')}
            >
              EUR
            </button>
          </div>
        </div>

        <div className="filter-group">
          <p>Scholarship:</p>
          <div className="toggle-buttons">
            <button 
              className={discountFilter === 'all' ? 'active' : ''}
              onClick={() => setDiscountFilter('all')}
            >
              All Options
            </button>
            <button 
              className={discountFilter === 'Full Tuition' ? 'active' : ''}
              onClick={() => setDiscountFilter('Full Tuition')}
            >
              Full Tuition
            </button>
            <button 
              className={discountFilter === '25% Scholarship' ? 'active' : ''}
              onClick={() => setDiscountFilter('25% Scholarship')}
            >
              25% Scholarship
            </button>
            <button 
              className={discountFilter === '50% Scholarship' ? 'active' : ''}
              onClick={() => setDiscountFilter('50% Scholarship')}
            >
              50% Scholarship
            </button>
          </div>
        </div>
      </div>

      <div className="faculties-container">
        {filteredFaculties.length === 0 ? (
          <div className="no-results">No programs or faculties match your search.</div>
        ) : (
          filteredFaculties.map((faculty) => {
            const filteredPrograms = getFilteredPrograms(faculty);
            if (filteredPrograms.length === 0) return null;
            
            return (
              <div key={faculty} className="faculty-section">
                <div 
                  className="faculty-header"
                  onClick={() => toggleFaculty(faculty)}
                >
                  <h2>{faculty}</h2>
                  <span className={`arrow ${expandedFaculty === faculty ? 'expanded' : ''}`}>
                    ▼
                  </span>
                </div>
                
                {expandedFaculty === faculty && (
                  <div className="programs-container">
                    {filteredPrograms.map((program, index) => (
                      <div key={index} className="program-card">
                        <div className="program-header">
                          <h3>{program.name}</h3>
                          <span className={`discount-badge ${
                            program.discount === '25% Scholarship' ? 'discount-25' :
                            program.discount === '50% Scholarship' ? 'discount-50' :
                            'full-tuition'
                          }`}>
                            {program.discount}
                          </span>
                        </div>
                        
                        <div className="program-details">
                          <div className="fee">
                            <span>Fee:</span>
                            <strong>{program.fee[currencyView]}</strong>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default IstanbulAydin;