import React, { useState } from 'react';
import './IstanbulUni.css';

function IstanbulUni() {
  const [expandedFaculty, setExpandedFaculty] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currencyView, setCurrencyView] = useState('TRY');
  const [programType, setProgramType] = useState('all');

  // Data from the provided PDF
  const universityData = {
    "FACULTY OF MEDICINE": {
      programs: [
        { name: "MEDICINE (DAY PROGRAM)", fee: { TRY: '₺2.557,00', USD: '$80', EUR: '€70' }, type: "DAY" },
        { name: "MEDICINE (ENGLISH)", fee: { TRY: '₺3.835,50', USD: '$120', EUR: '€105' }, type: "DAY" }
      ]
    },
    "FACULTY OF LAW": {
      programs: [
        { name: "LAW (DAY PROGRAM)", fee: { TRY: '₺1.354,00', USD: '$42', EUR: '€37' }, type: "DAY" },
        { name: "LAW (EVENING PROGRAM)", fee: { TRY: '₺4.998,00', USD: '$155', EUR: '€135' }, type: "EVENING" },
        { name: "LAW PR. (UOLP-HAMBURG UNIVERSITY)", fee: { TRY: '₺4.998,00', USD: '$155', EUR: '€135' }, type: "DAY" }
      ]
    },
    "FACULTY OF LITERATURE": {
      programs: [
        { name: "LITERATURE PROGRAMS (DAY)", fee: { TRY: '₺1.231,00', USD: '$38', EUR: '€33' }, type: "DAY" },
        { name: "LANGUAGE PROGRAMS (DAY)", fee: { TRY: '₺1.846,50', USD: '$57', EUR: '€50' }, type: "DAY" },
        { name: "LANGUAGE PROGRAMS (EVENING)", fee: { TRY: '₺4.444,00', USD: '$138', EUR: '€120' }, type: "EVENING" },
        { name: "DISTANCE EDUCATION PROGRAMS", fee: { TRY: '₺4.444,00', USD: '$138', EUR: '€120' }, type: "DISTANCE" }
      ]
    },
    "FACULTY OF SCIENCE": {
      programs: [
        { name: "SCIENCE PROGRAMS (DAY)", fee: { TRY: '₺1.231,00', USD: '$38', EUR: '€33' }, type: "DAY" },
        { name: "ENGLISH PROGRAMS (DAY)", fee: { TRY: '₺1.846,50', USD: '$57', EUR: '€50' }, type: "DAY" },
        { name: "SCIENCE PROGRAMS (EVENING)", fee: { TRY: '₺5.544,00', USD: '$172', EUR: '€150' }, type: "EVENING" }
      ]
    },
    "FACULTY OF ECONOMICS": {
      programs: [
        { name: "ECONOMICS PROGRAMS (DAY)", fee: { TRY: '₺1.354,00', USD: '$42', EUR: '€37' }, type: "DAY" },
        { name: "ENGLISH PROGRAMS (DAY)", fee: { TRY: '₺2.031,00', USD: '$63', EUR: '€55' }, type: "DAY" },
        { name: "ECONOMICS PROGRAMS (EVENING)", fee: { TRY: '₺4.998,00', USD: '$155', EUR: '€135' }, type: "EVENING" },
        { name: "DISTANCE EDUCATION PROGRAMS", fee: { TRY: '₺4.998,00', USD: '$155', EUR: '€135' }, type: "DISTANCE" },
        { name: "ECONOMICS PR. (ENGLISH) (UOLP-INTERNATIONAL SARAJEVO UNIVERSITY)", fee: { TRY: '₺30.000,00', USD: '$930', EUR: '€810' }, type: "DAY" }
      ]
    },
    "FACULTY OF PHARMACY": {
      programs: [
        { name: "PHARMACY (DAY)", fee: { TRY: '₺2.139,00', USD: '$66', EUR: '€58' }, type: "DAY" },
        { name: "PHARMACY (ENGLISH)", fee: { TRY: '₺3.208,50', USD: '$99', EUR: '€87' }, type: "DAY" }
      ]
    },
    "FACULTY OF DENTISTRY": {
      programs: [
        { name: "DENTISTRY (DAY)", fee: { TRY: '₺2.139,00', USD: '$66', EUR: '€58' }, type: "DAY" },
        { name: "DENTISTRY (ENGLISH)", fee: { TRY: '₺3.208,50', USD: '$99', EUR: '€87' }, type: "DAY" }
      ]
    },
    "FACULTY OF BUSINESS": {
      programs: [
        { name: "BUSINESS PROGRAMS (DAY)", fee: { TRY: '₺1.354,00', USD: '$42', EUR: '€37' }, type: "DAY" },
        { name: "ENGLISH PROGRAMS (DAY)", fee: { TRY: '₺2.031,00', USD: '$63', EUR: '€55' }, type: "DAY" },
        { name: "BUSINESS PR. (ENGLISH) (UOLP-INTERNATIONAL SARAJEVO UNIVERSITY)", fee: { TRY: '₺30.000,00', USD: '$930', EUR: '€810' }, type: "DAY" }
      ]
    },
    "FACULTY OF POLITICAL SCIENCES": {
      programs: [
        { name: "POLITICAL SCIENCES PROGRAMS (DAY)", fee: { TRY: '₺1.354,00', USD: '$42', EUR: '€37' }, type: "DAY" },
        { name: "ENGLISH PROGRAMS (DAY)", fee: { TRY: '₺2.031,00', USD: '$63', EUR: '€55' }, type: "DAY" },
        { name: "POLITICAL SCIENCE AND INTERNATIONAL RELATIONS PR. (ENGLISH) (UOLP-INTERNATIONAL SARAJEVO UNIVERSITY)", fee: { TRY: '₺30.000,00', USD: '$930', EUR: '€810' }, type: "DAY" }
      ]
    },
    "FACULTY OF COMMUNICATION": {
      programs: [
        { name: "COMMUNICATION PROGRAMS (DAY)", fee: { TRY: '₺1.231,00', USD: '$38', EUR: '€33' }, type: "DAY" },
        { name: "COMMUNICATION PROGRAMS (EVENING)", fee: { TRY: '₺4.162,00', USD: '$129', EUR: '€112' }, type: "EVENING" },
        { name: "DISTANCE EDUCATION PROGRAMS", fee: { TRY: '₺4.162,00', USD: '$129', EUR: '€112' }, type: "DISTANCE" }
      ]
    },
    "FACULTY OF AQUATIC SCIENCES": {
      programs: [
        { name: "AQUATIC SCIENCES PROGRAMS (DAY)", fee: { TRY: '₺1.366,00', USD: '$42', EUR: '€37' }, type: "DAY" },
        { name: "ENGLISH 30% PROGRAMS", fee: { TRY: '₺2.049,00', USD: '$64', EUR: '€55' }, type: "DAY" }
      ]
    },
    "GRADUATE PROGRAMS": {
      programs: [
        { name: "GRADUATE PROGRAMS (DAY)", fee: { TRY: '₺1.115,00', USD: '$35', EUR: '€30' }, type: "DAY" },
        { name: "PROGRAMS WITH FOREIGN LANGUAGE INSTRUCTION", fee: { TRY: '₺1.672,50', USD: '$52', EUR: '€45' }, type: "DAY" }
      ]
    },
    "FACULTY OF OPEN AND DISTANCE EDUCATION": {
      programs: [
        { name: "OPEN EDUCATION PROGRAMS", fee: { TRY: '₺279,00', USD: '$9', EUR: '€8' }, type: "OPEN" },
        { name: "DISTANCE EDUCATION PROGRAMS", fee: { TRY: '₺3.098,00', USD: '$96', EUR: '€84' }, type: "DISTANCE" }
      ]
    }
  };

  const toggleFaculty = (faculty) => {
    setExpandedFaculty(expandedFaculty === faculty ? null : faculty);
  };

  // Filter faculties and programs based on search term and program type
  const filteredFaculties = Object.keys(universityData).filter(faculty => {
    // Filter by faculty name
    const facultyMatches = faculty.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Filter by program name and type
    const hasMatchingPrograms = universityData[faculty].programs.some(program => {
      const programNameMatches = program.name.toLowerCase().includes(searchTerm.toLowerCase());
      const programTypeMatches = programType === 'all' || program.type === programType;
      return programNameMatches && programTypeMatches;
    });
    
    return facultyMatches || hasMatchingPrograms;
  });

  // Get filtered programs for a faculty
  const getFilteredPrograms = (faculty) => {
    return universityData[faculty].programs.filter(program => {
      const programNameMatches = program.name.toLowerCase().includes(searchTerm.toLowerCase());
      const programTypeMatches = programType === 'all' || program.type === programType;
      return programNameMatches && programTypeMatches;
    });
  };

  // Check if any faculty has programs that match the filters
  const hasAnyPrograms = filteredFaculties.some(faculty => getFilteredPrograms(faculty).length > 0);

  return (
    <div className="app-container">
      <header className="header">
        <div className="logo-container">
          <h1>Istanbul University</h1>
          <p>2024-2025 Academic Year Tuition Fees</p>
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
              placeholder="Search for faculty or program..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
        </div>
      </header>

      <div className="filter-container">
        <div className="currency-toggle">
          <p>Currency:</p>
          <div className="toggle-buttons">
            <button 
              className={currencyView === 'TRY' ? 'active' : ''}
              onClick={() => setCurrencyView('TRY')}
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

        <div className="program-type-toggle">
          <p>Program type:</p>
          <div className="toggle-buttons">
            <button 
              className={programType === 'all' ? 'active' : ''}
              onClick={() => setProgramType('all')}
            >
              All
            </button>
            <button 
              className={programType === 'DAY' ? 'active' : ''}
              onClick={() => setProgramType('DAY')}
            >
              Day Program
            </button>
            <button 
              className={programType === 'EVENING' ? 'active' : ''}
              onClick={() => setProgramType('EVENING')}
            >
              Evening Program
            </button>
            <button 
              className={programType === 'DISTANCE' ? 'active' : ''}
              onClick={() => setProgramType('DISTANCE')}
            >
              Distance Education
            </button>
          </div>
        </div>
      </div>

      <div className="faculties-container">
        {!hasAnyPrograms ? (
          <div className="no-results">No programs or faculties match your search.</div>
        ) : (
          filteredFaculties.map((faculty) => {
            const filteredPrograms = getFilteredPrograms(faculty);
            
            // Skip faculties with no matching programs
            if (filteredPrograms.length === 0) {
              return null;
            }
            
            return (
              <div className="faculty-card" key={faculty}>
                <div 
                  className="faculty-header" 
                  onClick={() => toggleFaculty(faculty)}
                >
                  <h2>{faculty}</h2>
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
                    {filteredPrograms.map((program, index) => (
                      <div 
                        className={`program-item ${program.name.toLowerCase().includes(searchTerm.toLowerCase()) ? 'highlight' : ''}`} 
                        key={index}
                      >
                        <div className="program-name">{program.name}</div>
                        <div className="program-fee">
                          {program.fee[currencyView]}
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

      <footer className="footer">
        <p>© 2025 Istanbul University. All fees are per semester and apply to international students.</p>
      </footer>
    </div>
  );
}

export default IstanbulUni;