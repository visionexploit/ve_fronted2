import React, { useState } from 'react';
import './Ostim.css';

function Ostim() {
  const [expandedFaculty, setExpandedFaculty] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [discountView, setDiscountView] = useState('full');

  const universityData = {
    "FACULTY OF ENGINEERING": {
      programs: [
        {
          name: "Computer Engineering (English)",
          fullFee: "₺600.500",
          discountedFee: "₺300.250",
          language: "English"
        },
        {
          name: "Computer Engineering (Turkish)",
          fullFee: "₺600.500",
          discountedFee: "₺300.250",
          language: "Turkish"
        },
        {
          name: "Electrical Electronics Engineering (English)",
          fullFee: "₺525.000",
          discountedFee: "₺262.500",
          language: "English"
        },
        {
          name: "Electrical Electronics Engineering (Turkish)",
          fullFee: "₺525.000",
          discountedFee: "₺262.500",
          language: "Turkish"
        },
        {
          name: "Industrial Engineering (English)",
          fullFee: "₺475.000",
          discountedFee: "₺237.500",
          language: "English"
        },
        {
          name: "Industrial Engineering (Turkish)",
          fullFee: "₺475.000",
          discountedFee: "₺237.500",
          language: "Turkish"
        },
        {
          name: "Aerospace Engineering (English)",
          fullFee: "₺550.000",
          discountedFee: "₺275.000",
          language: "English"
        },
        {
          name: "Mechanical Engineering (English)",
          fullFee: "₺475.000",
          discountedFee: "₺237.500",
          language: "English"
        },
        {
          name: "Nanotechnology Engineering (English)",
          fullFee: "₺475.000",
          discountedFee: "₺237.500",
          language: "English"
        },
        {
          name: "Artificial Intelligence Engineering (Turkish)",
          fullFee: "₺600.500",
          discountedFee: "₺450.375",
          language: "Turkish"
        },
        {
          name: "Software Engineering (English)",
          fullFee: "₺600.500",
          discountedFee: "₺300.250",
          language: "English"
        },
        {
          name: "Software Engineering (Turkish)",
          fullFee: "₺600.500",
          discountedFee: "₺300.250",
          language: "Turkish"
        }
      ]
    },
    "FACULTY OF ECONOMICS AND ADMINISTRATIVE SCIENCES": {
      programs: [
        {
          name: "Economics (English)",
          fullFee: "₺440.000",
          discountedFee: "₺220.000",
          language: "English"
        },
        {
          name: "Business Administration (English)",
          fullFee: "₺440.000",
          discountedFee: "₺220.000",
          language: "English"
        },
        {
          name: "Marketing (English)",
          fullFee: "₺440.000",
          discountedFee: "₺220.000",
          language: "English"
        },
        {
          name: "International Trade and Finance (English)",
          fullFee: "₺440.000",
          discountedFee: "₺220.000",
          language: "English"
        },
        {
          name: "Management Information Systems (English)",
          fullFee: "₺520.000",
          discountedFee: "₺260.000",
          language: "English"
        },
        {
          name: "Management Information Systems (Turkish)",
          fullFee: "₺520.000",
          discountedFee: "₺260.000",
          language: "Turkish"
        }
      ]
    },
    "FACULTY OF ARCHITECTURE AND DESIGN": {
      programs: [
        {
          name: "Industrial Design (Turkish)",
          fullFee: "₺400.000",
          discountedFee: "₺200.000",
          language: "Turkish"
        },
        {
          name: "Interior Architecture and Environmental Design (Turkish)",
          fullFee: "₺468.000",
          discountedFee: "₺234.000",
          language: "Turkish"
        }
      ]
    },
    "VOCATIONAL SCHOOL": {
      programs: [
        {
          name: "Computer Programming (Turkish)",
          fullFee: "₺275.000",
          discountedFee: "₺137.500",
          language: "Turkish"
        },
        {
          name: "Information Security Technology (Turkish)",
          fullFee: "₺275.000",
          discountedFee: "₺137.500",
          language: "Turkish"
        },
        {
          name: "Biomedical Device Technology (Turkish)",
          fullFee: "₺275.000",
          discountedFee: "₺137.500",
          language: "Turkish"
        },
        {
          name: "Electrical (Turkish)",
          fullFee: "₺275.000",
          discountedFee: "₺137.500",
          language: "Turkish"
        },
        {
          name: "Electronic Technology (Turkish)",
          fullFee: "₺275.000",
          discountedFee: "₺137.500",
          language: "Turkish"
        },
        {
          name: "E-Commerce and Marketing (Turkish)",
          fullFee: "₺275.000",
          discountedFee: "₺137.500",
          language: "Turkish"
        },
        {
          name: "Hybrid and Electric Vehicles Technology (Turkish)",
          fullFee: "₺275.000",
          discountedFee: "₺137.500",
          language: "Turkish"
        },
        {
          name: "UAV Technology and Operation (Turkish)",
          fullFee: "₺275.000",
          discountedFee: "₺137.500",
          language: "Turkish"
        },
        {
          name: "Logistics (Turkish)",
          fullFee: "₺275.000",
          discountedFee: "₺137.500",
          language: "Turkish"
        },
        {
          name: "Machinery (Turkish)",
          fullFee: "₺275.000",
          discountedFee: "₺137.500",
          language: "Turkish"
        },
        {
          name: "Mechatronics (Turkish)",
          fullFee: "₺275.000",
          discountedFee: "₺137.500",
          language: "Turkish"
        },
        {
          name: "Weapons Industry Technician (Turkish)",
          fullFee: "₺275.000",
          discountedFee: "₺137.500",
          language: "Turkish"
        },
        {
          name: "Quality Control in Production (Turkish)",
          fullFee: "₺275.000",
          discountedFee: "₺137.500",
          language: "Turkish"
        }
      ]
    }
  };

  const toggleFaculty = (faculty) => {
    setExpandedFaculty(expandedFaculty === faculty ? null : faculty);
  };

  const filteredFaculties = Object.keys(universityData).filter(faculty => 
    faculty.toLowerCase().includes(searchTerm.toLowerCase()) ||
    universityData[faculty].programs.some(program => 
      program.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="app-container">
      <header className="header">
        <div className="logo-container">
          <h1>OSTIM Technical University</h1>
          <p>2024-2025 Tuition Fees and Scholarships</p>
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

      <div className="fee-toggle">
        <p>Fee view:</p>
        <div className="toggle-buttons">
          <button 
            className={discountView === 'full' ? 'active' : ''}
            onClick={() => setDiscountView('full')}
          >
            Full Fee
          </button>
          <button 
            className={discountView === 'discounted' ? 'active' : ''}
            onClick={() => setDiscountView('discounted')}
          >
            50% YKS Discount
          </button>
        </div>
      </div>

      <div className="info-banner">
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="info-icon"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="16" x2="12" y2="12"></line>
          <line x1="12" y1="8" x2="12.01" y2="8"></line>
        </svg>
        <p>Preparatory Class full fee: <strong>₺550.000</strong> (VAT Included)</p>
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
                      className={`program-item ${program.name.toLowerCase().includes(searchTerm.toLowerCase()) ? 'highlight' : ''}`} 
                      key={index}
                    >
                      <div className="program-name">{program.name}</div>
                      <div className="program-details">
                        <span className="language-badge">{program.language}</span>
                        <span className="fee-badge">
                          {discountView === 'full' ? program.fullFee : program.discountedFee}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))
        )}
      </div>

      <div className="scholarships-section">
        <h3>Scholarship Opportunities</h3>
        <ul className="scholarships-list">
          <li>ÖSYS/YKS/DGS placement scholarship</li>
          <li>Disability discount</li>
          <li>Sibling discount</li>
          <li>Preference discount</li>
          <li>Institutional affiliation discount</li>
          <li>Cevat Dündar discount</li>
          <li>Maarif foundation discount</li>
          <li>Academic achievement discount</li>
          <li>Sports achievement discount</li>
          <li>Outstanding achievement support</li>
        </ul>
      </div>

      <footer className="footer">
        <p>© 2025 OSTIM Technical University. All fees include VAT.</p>
      </footer>
    </div>
  );
}

export default Ostim;