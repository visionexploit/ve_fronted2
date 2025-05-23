import React, { useState } from 'react';
import './Karabuk.css';

function Karabuk() {
  const [expandedFaculty, setExpandedFaculty] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currencyView, setCurrencyView] = useState('TL');

  const universityData = {
    "GRADUATE PROGRAMS": {
      programs: [
        "Basic Islamic Sciences (Master's/PhD)",
        "Business Administration (Master's/PhD)",
        "International Relations (Master's/PhD)",
        "English Language and Literature (Master's/PhD)",
        "Computer Engineering (Master's/PhD)",
        "Other Graduate Programs (Master's/PhD)"
      ],
      fees: {
        "Basic Islamic Sciences (Master's/PhD)": { TL: '₺50 000', USD: '$1 600', RANDS: 'R24 000' },
        "Business Administration (Master's/PhD)": { TL: '₺50 000', USD: '$1 600', RANDS: 'R24 000' },
        "International Relations (Master's/PhD)": { TL: '₺50 000', USD: '$1 600', RANDS: 'R24 000' },
        "English Language and Literature (Master's/PhD)": { TL: '₺60 000', USD: '$1 920', RANDS: 'R28 800' },
        "Computer Engineering (Master's/PhD)": { TL: '₺50 000', USD: '$1 600', RANDS: 'R24 000' },
        "Other Graduate Programs (Master's/PhD)": { TL: '₺40 000', USD: '$1 280', RANDS: 'R19 200' }
      }
    },
    "MEDICAL FACULTIES": {
      programs: [
        "Faculty of Medicine",
        "Faculty of Dentistry"
      ],
      fees: {
        "Faculty of Medicine": { TL: '₺200 000', USD: '$6 400', RANDS: 'R96 000' },
        "Faculty of Dentistry": { TL: '₺140 000', USD: '$4 480', RANDS: 'R67 200' }
      }
    },
    "ENGINEERING FACULTIES": {
      programs: [
        "Computer Engineering",
        "Computer Engineering (English)",
        "Software Engineering",
        "Electrical-Electronic Engineering",
        "Electrical-Electronic Engineering (English)",
        "Mechanical Engineering",
        "Mechanical Engineering (English)",
        "Other Engineering Programs"
      ],
      fees: {
        "Computer Engineering": { TL: '₺60 000', USD: '$1 920', RANDS: 'R28 800' },
        "Computer Engineering (English)": { TL: '₺90 000', USD: '$2 880', RANDS: 'R43 200' },
        "Software Engineering": { TL: '₺60 000', USD: '$1 920', RANDS: 'R28 800' },
        "Electrical-Electronic Engineering": { TL: '₺50 000', USD: '$1 600', RANDS: 'R24 000' },
        "Electrical-Electronic Engineering (English)": { TL: '₺75 000', USD: '$2 400', RANDS: 'R36 000' },
        "Mechanical Engineering": { TL: '₺40 000', USD: '$1 280', RANDS: 'R19 200' },
        "Mechanical Engineering (English)": { TL: '₺60 000', USD: '$1 920', RANDS: 'R28 800' },
        "Other Engineering Programs": { TL: '₺35 000', USD: '$1 120', RANDS: 'R16 800' }
      }
    },
    "ARCHITECTURE & DESIGN FACULTIES": {
      programs: [
        "Safranbolu Basak Cengiz Faculty of Architecture",
        "Safranbolu Fethi Toker Faculty of Fine Arts and Design"
      ],
      fees: {
        "Safranbolu Basak Cengiz Faculty of Architecture": { TL: '₺45 000', USD: '$1 440', RANDS: 'R21 600' },
        "Safranbolu Fethi Toker Faculty of Fine Arts and Design": { TL: '₺35 000', USD: '$1 120', RANDS: 'R16 800' }
      }
    },
    "HEALTH SCIENCES": {
      programs: [
        "Faculty of Health Sciences",
        "School of Health",
        "Safranbolu School of Health Services"
      ],
      fees: {
        "Faculty of Health Sciences": { TL: '₺45 000', USD: '$1 440', RANDS: 'R21 600' },
        "School of Health": { TL: '₺21 000', USD: '$670', RANDS: 'R10 080' },
        "Safranbolu School of Health Services": { TL: '₺25 000', USD: '$800', RANDS: 'R12 000' }
      }
    },
    "BUSINESS & ECONOMICS FACULTIES": {
      programs: [
        "Faculty of Business",
        "Faculty of Business (English)",
        "Faculty of Economics and Administrative Sciences",
        "Faculty of Economics and Administrative Sciences (English)"
      ],
      fees: {
        "Faculty of Business": { TL: '₺30 000', USD: '$960', RANDS: 'R14 400' },
        "Faculty of Business (English)": { TL: '₺45 000', USD: '$1 440', RANDS: 'R21 600' },
        "Faculty of Economics and Administrative Sciences": { TL: '₺25 000', USD: '$800', RANDS: 'R12 000' },
        "Faculty of Economics and Administrative Sciences (English)": { TL: '₺38 000', USD: '$1 216', RANDS: 'R18 240' }
      }
    },
    "OTHER FACULTIES": {
      programs: [
        "Safranbolu Tourism Faculty",
        "Technology Faculty",
        "Faculty of Forestry",
        "Hasan Doğan Faculty of Sports Sciences",
        "Faculty of Science",
        "Faculty of Literature",
        "Faculty of Education",
        "Faculty of Theology",
        "Safranbolu Türker İnanoğlu Faculty of Communication"
      ],
      fees: {
        "Safranbolu Tourism Faculty": { TL: '₺30 000', USD: '$960', RANDS: 'R14 400' },
        "Technology Faculty": { TL: '₺30 000', USD: '$960', RANDS: 'R14 400' },
        "Faculty of Forestry": { TL: '₺27 000', USD: '$864', RANDS: 'R12 960' },
        "Hasan Doğan Faculty of Sports Sciences": { TL: '₺25 000', USD: '$800', RANDS: 'R12 000' },
        "Faculty of Science": { TL: '₺25 000', USD: '$800', RANDS: 'R12 000' },
        "Faculty of Literature": { TL: '₺20 000', USD: '$640', RANDS: 'R9 600' },
        "Faculty of Education": { TL: '₺30 000', USD: '$960', RANDS: 'R14 400' },
        "Faculty of Theology": { TL: '₺20 000', USD: '$640', RANDS: 'R9 600' },
        "Safranbolu Türker İnanoğlu Faculty of Communication": { TL: '₺20 000', USD: '$640', RANDS: 'R9 600' }
      }
    },
    "VOCATIONAL SCHOOLS": {
      programs: [
        "School of Justice",
        "School of Information Technologies",
        "Eflani Vocational School",
        "Eskipazar Vocational School",
        "Safranbolu Şefik Yılmaz Dizdar Vocational School",
        "Safranbolu Şefik Yılmaz Dizdar Vocational School (English)",
        "TOBB Vocational School (KARORSAN)",
        "Yenice Vocational School"
      ],
      fees: {
        "School of Justice": { TL: '₺20 000', USD: '$640', RANDS: 'R9 600' },
        "School of Information Technologies": { TL: '₺30 000', USD: '$960', RANDS: 'R14 400' },
        "Eflani Vocational School": { TL: '₺20 000', USD: '$640', RANDS: 'R9 600' },
        "Eskipazar Vocational School": { TL: '₺20 000', USD: '$640', RANDS: 'R9 600' },
        "Safranbolu Şefik Yılmaz Dizdar Vocational School": { TL: '₺20 000', USD: '$640', RANDS: 'R9 600' },
        "Safranbolu Şefik Yılmaz Dizdar Vocational School (English)": { TL: '₺30 000', USD: '$960', RANDS: 'R14 400' },
        "TOBB Vocational School (KARORSAN)": { TL: '₺20 000', USD: '$640', RANDS: 'R9 600' },
        "Yenice Vocational School": { TL: '₺20 000', USD: '$640', RANDS: 'R9 600' }
      }
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
          <h1>Karabük University</h1>
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
                      <div className="program-info">
                        <span className="program-name">{program}</span>
                        <span className="fee-badge">
                          {universityData[faculty].fees[program][currencyView]} per year
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

      <footer className="footer">
        <p>© 2025 Karabük University. All fees are shown for the academic year 2024-2025.</p>
      </footer>
    </div>
  );
}

export default Karabuk;