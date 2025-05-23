import React, { useState } from 'react';
import './Zonguldak.css';

function Zonguldak() {
  const [expandedFaculty, setExpandedFaculty] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currencyView, setCurrencyView] = useState('TL');
  const [programType, setProgramType] = useState('normal');

  const universityData = {
    "FACULTY OF MEDICINE": {
      fee: { 
        normal: { TL: '₺150 000', USD: '$4500', RANDS: 'R81 000' },
        evening: { TL: 'Not Available', USD: 'Not Available', RANDS: 'Not Available' }
      },
      programs: ["Medicine"]
    },
    "FACULTY OF DENTISTRY": {
      fee: { 
        normal: { TL: '₺80 000', USD: '$2400', RANDS: 'R43 200' },
        evening: { TL: 'Not Available', USD: 'Not Available', RANDS: 'Not Available' }
      },
      programs: ["Dentistry"]
    },
    "FACULTY OF PHARMACY": {
      fee: { 
        normal: { TL: '₺60 000', USD: '$1800', RANDS: 'R32 400' },
        evening: { TL: 'Not Available', USD: 'Not Available', RANDS: 'Not Available' }
      },
      programs: ["Pharmacy"]
    },
    "FACULTY OF ENGINEERING": {
      fee: { 
        normal: { TL: '₺30 000', USD: '$900', RANDS: 'R16 200' },
        evening: { TL: '₺38 000', USD: '$1140', RANDS: 'R20 520' }
      },
      programs: [
        "Computer Engineering",
        "Electrical-Electronics Engineering",
        "Environmental Engineering",
        "Civil Engineering",
        "Mechanical Engineering"
      ]
    },
    "FACULTY OF MARITIME": {
      fee: { 
        normal: { TL: '₺35 000', USD: '$1050', RANDS: 'R18 900' },
        evening: { TL: '₺45 000', USD: '$1350', RANDS: 'R24 300' }
      },
      programs: [
        "Maritime Transportation and Management Engineering",
        "Marine Engineering"
      ]
    },
    "FACULTY OF SCIENCE": {
      fee: { 
        normal: { TL: '₺25 000', USD: '$750', RANDS: 'R13 500' },
        evening: { TL: '₺30 000', USD: '$900', RANDS: 'R16 200' }
      },
      programs: [
        "Molecular Biology and Genetics",
        "Mathematics",
        "Physics",
        "Chemistry",
        "Biology"
      ]
    },
    "FACULTY OF ARTS AND SCIENCES": {
      departments: {
        "Literature": {
          fee: { 
            normal: { TL: '₺20 000', USD: '$600', RANDS: 'R10 800' },
            evening: { TL: '₺25 000', USD: '$750', RANDS: 'R13 500' }
          },
          programs: ["Turkish Language and Literature"]
        },
        "English Language and Literature": {
          fee: { 
            normal: { TL: '₺25 000', USD: '$750', RANDS: 'R13 500' },
            evening: { TL: '₺30 000', USD: '$900', RANDS: 'R16 200' }
          },
          programs: ["English Language and Literature"]
        },
        "Other Departments": {
          fee: { 
            normal: { TL: '₺25 000', USD: '$750', RANDS: 'R13 500' },
            evening: { TL: '₺30 000', USD: '$900', RANDS: 'R16 200' }
          },
          programs: [
            "History",
            "Archaeology",
            "Sociology"
          ]
        }
      }
    },
    "FACULTY OF ECONOMICS AND ADMINISTRATIVE SCIENCES": {
      departments: {
        "Economics (English)": {
          fee: { 
            normal: { TL: '₺28 000', USD: '$840', RANDS: 'R15 120' },
            evening: { TL: 'Not Available', USD: 'Not Available', RANDS: 'Not Available' }
          },
          programs: ["Economics (English)"]
        },
        "Other Departments": {
          fee: { 
            normal: { TL: '₺20 000', USD: '$600', RANDS: 'R10 800' },
            evening: { TL: '₺25 000', USD: '$750', RANDS: 'R13 500' }
          },
          programs: [
            "Business Administration",
            "Economics",
            "International Relations",
            "Public Finance",
            "Political Science and Public Administration"
          ]
        }
      }
    },
    "FACULTY OF THEOLOGY": {
      fee: { 
        normal: { TL: '₺20 000', USD: '$600', RANDS: 'R10 800' },
        evening: { TL: '₺25 000', USD: '$750', RANDS: 'R13 500' }
      },
      programs: ["Theology"]
    },
    "EREĞLI FACULTY OF EDUCATION": {
      fee: { 
        normal: { TL: '₺20 000', USD: '$600', RANDS: 'R10 800' },
        evening: { TL: 'Not Available', USD: 'Not Available', RANDS: 'Not Available' }
      },
      programs: [
        "Elementary Mathematics Teaching",
        "Science Teaching",
        "Early Childhood Education",
        "Primary School Teaching"
      ]
    },
    "FACULTY OF HEALTH SCIENCES": {
      fee: { 
        normal: { TL: '₺20 000', USD: '$600', RANDS: 'R10 800' },
        evening: { TL: 'Not Available', USD: 'Not Available', RANDS: 'Not Available' }
      },
      programs: [
        "Nursing",
        "Nutrition and Dietetics",
        "Physiotherapy and Rehabilitation"
      ]
    },
    "KARADENIZ EREĞLI FACULTY OF TOURISM": {
      fee: { 
        normal: { TL: '₺20 000', USD: '$600', RANDS: 'R10 800' },
        evening: { TL: '₺25 000', USD: '$750', RANDS: 'R13 500' }
      },
      programs: [
        "Tourism Management",
        "Gastronomy and Culinary Arts"
      ]
    },
    "FACULTY OF HUMANITIES AND SOCIAL SCIENCES": {
      fee: { 
        normal: { TL: '₺20 000', USD: '$600', RANDS: 'R10 800' },
        evening: { TL: 'Not Available', USD: 'Not Available', RANDS: 'Not Available' }
      },
      programs: [
        "Psychology",
        "Geography",
        "Philosophy"
      ]
    },
    "FACULTY OF COMMUNICATION": {
      fee: { 
        normal: { TL: '₺20 000', USD: '$600', RANDS: 'R10 800' },
        evening: { TL: '₺25 000', USD: '$750', RANDS: 'R13 500' }
      },
      programs: [
        "Journalism",
        "Public Relations and Advertising",
        "Radio, Television and Cinema"
      ]
    },
    "FACULTY OF FINE ARTS": {
      fee: { 
        normal: { TL: '₺75 000', USD: '$2250', RANDS: 'R40 500' },
        evening: { TL: 'Not Available', USD: 'Not Available', RANDS: 'Not Available' }
      },
      programs: [
        "Painting",
        "Graphic Design",
        "Ceramics"
      ]
    },
    "VOCATIONAL SCHOOLS": {
      departments: {
        "Applied English Translation": {
          fee: { 
            normal: { TL: '₺17 000', USD: '$510', RANDS: 'R9 180' },
            evening: { TL: '₺25 000', USD: '$750', RANDS: 'R13 500' }
          },
          programs: ["Applied English Translation"]
        },
        "Other Departments": {
          fee: { 
            normal: { TL: '₺15 000', USD: '$450', RANDS: 'R8 100' },
            evening: { TL: '₺20 000', USD: '$600', RANDS: 'R10 800' }
          },
          programs: [
            "Computer Programming",
            "Electronic Technology",
            "Construction Technology",
            "Machinery",
            "Accounting and Tax Applications",
            "Business Management",
            "Tourism and Hotel Management"
          ]
        }
      }
    }
  };

  const toggleFaculty = (faculty) => {
    setExpandedFaculty(expandedFaculty === faculty ? null : faculty);
  };

  const renderFaculty = (faculty) => {
    const facultyData = universityData[faculty];
    
    if (facultyData.departments) {
      return Object.keys(facultyData.departments).map((department) => {
        const departmentData = facultyData.departments[department];
        const searchInPrograms = departmentData.programs.some(program => 
          program.toLowerCase().includes(searchTerm.toLowerCase())
        );
        
        if (department.toLowerCase().includes(searchTerm.toLowerCase()) || searchInPrograms) {
          return (
            <div className="faculty-card" key={`${faculty}-${department}`}>
              <div className="faculty-header" onClick={() => toggleFaculty(`${faculty}-${department}`)}>
                <h2>{faculty} - {department}</h2>
                <div className="fee-badge">
                  {departmentData.fee[programType][currencyView]} per year
                </div>
                <button className="expand-button">
                  {expandedFaculty === `${faculty}-${department}` ? (
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
              
              {expandedFaculty === `${faculty}-${department}` && (
                <div className="programs-list">
                  {departmentData.programs.map((program, index) => (
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
          );
        }
        return null;
      }).filter(item => item !== null);
    } else {
      const searchInPrograms = facultyData.programs.some(program => 
        program.toLowerCase().includes(searchTerm.toLowerCase())
      );
      
      if (faculty.toLowerCase().includes(searchTerm.toLowerCase()) || searchInPrograms) {
        return (
          <div className="faculty-card" key={faculty}>
            <div className="faculty-header" onClick={() => toggleFaculty(faculty)}>
              <h2>{faculty}</h2>
              <div className="fee-badge">
                {facultyData.fee[programType][currencyView]} per year
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
                {facultyData.programs.map((program, index) => (
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
        );
      }
      return null;
    }
  };

  const filteredFaculties = Object.keys(universityData).filter(faculty => {
    const facultyData = universityData[faculty];
    
    if (facultyData.departments) {
      return Object.keys(facultyData.departments).some(department => {
        const departmentData = facultyData.departments[department];
        return department.toLowerCase().includes(searchTerm.toLowerCase()) || 
               departmentData.programs.some(program => program.toLowerCase().includes(searchTerm.toLowerCase()));
      });
    } else {
      return faculty.toLowerCase().includes(searchTerm.toLowerCase()) || 
             facultyData.programs.some(program => program.toLowerCase().includes(searchTerm.toLowerCase()));
    }
  });

  return (
    <div className="app-container">
      <header className="header">
        <div className="logo-container">
          <h1>Zonguldak Bülent Ecevit University</h1>
          <p>Fee Structure for 2024-2025 Academic Year</p>
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

      <div className="filters-container">
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
              className={programType === 'normal' ? 'active' : ''}
              onClick={() => setProgramType('normal')}
            >
              Day Program
            </button>
            <button 
              className={programType === 'evening' ? 'active' : ''}
              onClick={() => setProgramType('evening')}
            >
              Evening Program
            </button>
          </div>
        </div>
      </div>

      <div className="faculties-container">
        {filteredFaculties.length === 0 ? (
          <div className="no-results">No matching departments or faculties found.</div>
        ) : (
          filteredFaculties.map((faculty) => renderFaculty(faculty))
        )}
      </div>

      <footer className="footer">
        <p>© 2025 Zonguldak Bülent Ecevit University. All fees are shown per year.</p>
      </footer>
    </div>
  );
}

export default Zonguldak;