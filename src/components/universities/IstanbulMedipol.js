import React, { useState } from 'react';
import './IstanbulMedipol.css';

function IstanbulMedipol() {
  const [expandedSchool, setExpandedSchool] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currencyView, setCurrencyView] = useState('USD');

  const universityData = {
    "SCHOOL OF MEDICINE": {
      programs: [
        { name: "International School of Medicine 100% English", fee: { USD: '$44,000' } },
        { name: "School of Medicine 30% English & 70% Turkish", fee: { USD: '$34,000' } }
      ]
    },
    "SCHOOL OF DENTISTRY": {
      programs: [
        { name: "School of Dentistry 100% English", fee: { USD: '$36,000' } },
        { name: "School of Dentistry 30% English 70% Turkish", fee: { USD: '$33,000' } }
      ]
    },
    "SCHOOL OF PHARMACY": {
      programs: [
        { name: "School of Pharmacy 100% English", fee: { USD: '$18,000' } },
        { name: "School of Pharmacy", fee: { USD: '$15,000' } }
      ]
    },
    "SCHOOL OF LAW": {
      programs: [
        { name: "School of Law 30% English 70% Turkish", fee: { USD: '$8,000' } }
      ]
    },
    "SCHOOL OF HEALTH SCIENCES": {
      programs: [
        { name: "Nursing 100% English", fee: { USD: '$7,700' } },
        { name: "Nursing", fee: { USD: '$7,700' } },
        { name: "Physiotherapy and Rehabilitation 100% English", fee: { USD: '$8,000' } },
        { name: "Physiotherapy and Rehabilitation", fee: { USD: '$8,000' } },
        { name: "Nutrition and Dietetics", fee: { USD: '$6,000' } },
        { name: "Health Management 100% English", fee: { USD: '$5,500' } },
        { name: "Health Management", fee: { USD: '$5,500' } },
        { name: "Audiology", fee: { USD: '$6,500' } },
        { name: "Orthotics and Prosthetics", fee: { USD: '$5,500' } },
        { name: "Child Development", fee: { USD: '$5,500' } },
        { name: "Midwifery", fee: { USD: '$7,000' } },
        { name: "Ergotherapy", fee: { USD: '$5,000' } },
        { name: "Social Services", fee: { USD: '$5,500' } },
        { name: "Speech and Language Therapy 100% English", fee: { USD: '$5,500' } },
        { name: "Speech and Language Therapy", fee: { USD: '$5,500' } }
      ]
    },
    "SCHOOL OF ENGINEERING AND NATURAL SCIENCES": {
      programs: [
        { name: "Electrical-Electronic Engineering 100% English", fee: { USD: '$6,500' } },
        { name: "Biomedical Engineering 100% English", fee: { USD: '$7,000' } },
        { name: "Industrial Engineering 100% English", fee: { USD: '$5,000' } },
        { name: "Computer Engineering 100% English", fee: { USD: '$7,000' } },
        { name: "Civil Engineering 100% English", fee: { USD: '$7,000' } },
        { name: "Civil Engineering", fee: { USD: '$6,000' } }
      ]
    },
    "SCHOOL OF BUSINESS": {
      programs: [
        { name: "Business Administration 100% English", fee: { USD: '$5,500' } },
        { name: "Economics and Finance 100% English", fee: { USD: '$5,500' } },
        { name: "International Trade and Finance 100% English", fee: { USD: '$5,500' } },
        { name: "International Trade and Finance", fee: { USD: '$5,500' } },
        { name: "Management Information Systems 100% English", fee: { USD: '$5,500' } },
        { name: "Management Information Systems", fee: { USD: '$5,500' } },
        { name: "Logistic Management 100% English", fee: { USD: '$5,500' } },
        { name: "Logistic Management", fee: { USD: '$5,500' } },
        { name: "Human Resources Management", fee: { USD: '$5,500' } },
        { name: "Aviation Management", fee: { USD: '$5,500' } },
        { name: "Banking and Insurance", fee: { USD: '$5,500' } }
      ]
    },
    "SCHOOL OF HUMANITIES AND SOCIAL SCIENCES": {
      programs: [
        { name: "Psychology 100% English", fee: { USD: '$6,000' } },
        { name: "Psychology", fee: { USD: '$6,000' } },
        { name: "Political Science and International Relations 100% English", fee: { USD: '$5,500' } },
        { name: "Political Science and Public Administration 100% English", fee: { USD: '$5,500' } },
        { name: "Political Science and Public Administration", fee: { USD: '$5,500' } }
      ]
    },
    "SCHOOL OF FINE ARTS DESIGN AND ARCHITECTURE": {
      programs: [
        { name: "Architecture 100% English", fee: { USD: '$5,500' } },
        { name: "Architecture", fee: { USD: '$5,500' } },
        { name: "Industrial Design", fee: { USD: '$5,000' } },
        { name: "Interior Architecture and Environmental Design 100% English", fee: { USD: '$5,000' } },
        { name: "Interior Architecture and Environmental Design", fee: { USD: '$5,500' } },
        { name: "Visual Communication Design", fee: { USD: '$5,000' } },
        { name: "Turkish Music Art", fee: { USD: '$5,000' } },
        { name: "Gastronomy and Culinary Arts", fee: { USD: '$6,000' } },
        { name: "Urban Design and Landscape Architecture", fee: { USD: '$5,000' } }
      ]
    },
    "SCHOOL OF EDUCATION": {
      programs: [
        { name: "Psychological Counselling and Guidance", fee: { USD: '$5,000' } },
        { name: "English Language Teaching 100% English", fee: { USD: '$5,000' } },
        { name: "Primary Mathematics Teaching", fee: { USD: '$5,000' } },
        { name: "Special Education Teaching", fee: { USD: '$5,000' } },
        { name: "Pre-School Teaching", fee: { USD: '$5,000' } },
        { name: "Psychological Counselling and Guidance 100% English", fee: { USD: '$5,000' } }
      ]
    },
    "SCHOOL OF COMMUNICATION": {
      programs: [
        { name: "Journalism", fee: { USD: '$5,000' } },
        { name: "Public Relations and Advertising 100% English", fee: { USD: '$5,000' } },
        { name: "Public Relations and Advertising", fee: { USD: '$5,000' } },
        { name: "Media and Visual Arts", fee: { USD: '$5,000' } },
        { name: "New Media and Communication Systems", fee: { USD: '$5,500' } },
        { name: "Radio Television and Cinema", fee: { USD: '$5,500' } }
      ]
    },
    "COLLEGE OF HEALTH SCIENCES (HALİÇ CAMPUS)": {
      programs: [
        { name: "Nutrition and Dietetics", fee: { USD: '$5,000' } },
        { name: "Child Development", fee: { USD: '$5,000' } },
        { name: "Midwifery", fee: { USD: '$7,000' } },
        { name: "Physiotherapy and Rehabilitation", fee: { USD: '$6,000' } },
        { name: "Audiology", fee: { USD: '$5,000' } },
        { name: "Social Services", fee: { USD: '$5,000' } }
      ]
    },
    "VOCATIONAL SCHOOL OF FORENSIC SCIENCES": {
      programs: [
        { name: "Justice", fee: { USD: '$3,500' } }
      ]
    },
    "VOCATIONAL SCHOOL OF HEALTH SERVICES": {
      programs: [
        { name: "Oral and Dental Health", fee: { USD: '$3,500' } },
        { name: "Operating Room Services", fee: { USD: '$3,500' } },
        { name: "Anesthesia 100% English", fee: { USD: '$4,000' } },
        { name: "Anesthesia", fee: { USD: '$3,500' } },
        { name: "Child Development", fee: { USD: '$3,500' } },
        { name: "Dental Prosthesis Technology", fee: { USD: '$4,000' } },
        { name: "Dialysis", fee: { USD: '$3,500' } },
        { name: "Pharmacy Services", fee: { USD: '$3,500' } },
        { name: "Electroneurophysiology", fee: { USD: '$3,500' } },
        { name: "Physiotherapy 100% English", fee: { USD: '$3,500' } },
        { name: "Physiotherapy", fee: { USD: '$3,500' } },
        { name: "First and Emergency Aid 100% English", fee: { USD: '$4,000' } },
        { name: "First and Emergency Aid", fee: { USD: '$3,500' } },
        { name: "Occupational Health and Safety", fee: { USD: '$3,500' } },
        { name: "Audiometry", fee: { USD: '$3,500' } },
        { name: "Opticianry", fee: { USD: '$3,500' } },
        { name: "Pathology Laboratory Techniques", fee: { USD: '$3,500' } },
        { name: "Radiotherapy", fee: { USD: '$3,500' } },
        { name: "Management of Health institutions", fee: { USD: '$3,500' } },
        { name: "Medical Documentation and Secretary", fee: { USD: '$3,500' } },
        { name: "Medical Imaging Techniques", fee: { USD: '$3,500' } },
        { name: "Medical Laboratory Techniques", fee: { USD: '$3,500' } }
      ]
    },
    "VOCATIONAL SCHOOL (HALİÇ CAMPUS)": {
      programs: [
        { name: "Oral and Dental Health", fee: { USD: '$3,500' } },
        { name: "Operating Room Services", fee: { USD: '$3,500' } },
        { name: "Anesthesia", fee: { USD: '$3,500' } },
        { name: "Computer Programming", fee: { USD: '$3,500' } },
        { name: "Biomedical Device Technology", fee: { USD: '$3,500' } },
        { name: "Child Development", fee: { USD: '$3,500' } },
        { name: "Dental Prosthesis Technology", fee: { USD: '$3,500' } },
        { name: "Dialysis", fee: { USD: '$3,500' } },
        { name: "Electroneurophysiology", fee: { USD: '$3,500' } },
        { name: "Physiotherapy", fee: { USD: '$3,500' } },
        { name: "Interior Design", fee: { USD: '$3,500' } },
        { name: "First and Emergency Aid", fee: { USD: '$3,500' } },
        { name: "Construction Technology", fee: { USD: '$3,500' } },
        { name: "Occupational Health and Safety", fee: { USD: '$3,500' } },
        { name: "Architectural Restoration", fee: { USD: '$3,500' } },
        { name: "Audiometry", fee: { USD: '$3,500' } },
        { name: "Opticianry", fee: { USD: '$3,500' } },
        { name: "Radiotherapy", fee: { USD: '$3,500' } },
        { name: "Management of Health Institutions", fee: { USD: '$3,500' } },
        { name: "Civil Aviation Transportation Management", fee: { USD: '$3,500' } },
        { name: "Medical Documentation and Secretary", fee: { USD: '$3,500' } },
        { name: "Medical Imaging Techniques", fee: { USD: '$3,500' } },
        { name: "Medical Laboratory Techniques", fee: { USD: '$3,500' } }
      ]
    },
    "VOCATIONAL SCHOOL OF SOCIAL SCIENCES": {
      programs: [
        { name: "Banking and Insurance", fee: { USD: '$3,500' } },
        { name: "Foreign Trade", fee: { USD: '$3,500' } },
        { name: "Public Relations and Publicity", fee: { USD: '$3,500' } },
        { name: "Human Resources Management", fee: { USD: '$3,500' } },
        { name: "Business Administration", fee: { USD: '$3,500' } },
        { name: "Logistics", fee: { USD: '$3,500' } },
        { name: "Finance", fee: { USD: '$3,500' } },
        { name: "Accounting and Taxation", fee: { USD: '$3,500' } },
        { name: "Radio and Television Programming", fee: { USD: '$3,500' } },
        { name: "Civil Aviation Cabin Services", fee: { USD: '$3,500' } },
        { name: "Social Services", fee: { USD: '$3,500' } },
        { name: "Sports Management", fee: { USD: '$3,500' } },
        { name: "Applied English and Translation 50% English 50% Turkish", fee: { USD: '$3,500' } }
      ]
    },
    "ENGLISH FOUNDATION SCHOOL": {
      programs: [
        { name: "All Programs", fee: { USD: '$17,000' } }
      ]
    },
    "TURKISH FOUNDATION SCHOOL": {
      programs: [
        { name: "All Programs", fee: { USD: '$1,250' } }
      ]
    }
  };

  const toggleSchool = (school) => {
    setExpandedSchool(expandedSchool === school ? null : school);
  };

  const filteredSchools = Object.keys(universityData).filter(school => 
    school.toLowerCase().includes(searchTerm.toLowerCase()) ||
    universityData[school].programs.some(program => 
      program.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="app-container">
      <header className="header">
        <div className="logo-container">
          <h1>Istanbul Medipol University</h1>
          <p>2025-2026 Academic Intake - International Students Tuition Fee List</p>
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
              placeholder="Search for programs or schools..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
        </div>
      </header>

      <div className="currency-toggle">
        <p>Tuition fees are shown in:</p>
        <div className="toggle-buttons">
          <button 
            className={currencyView === 'USD' ? 'active' : ''}
            onClick={() => setCurrencyView('USD')}
          >
            US Dollar ($)
          </button>
        </div>
      </div>

      <div className="info-banner">
        <div className="info-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="16" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
        </div>
        <p>Tuition fees are for the full academic year. Advance payment is 90% of the total fee.</p>
      </div>

      <div className="schools-container">
        {filteredSchools.length === 0 ? (
          <div className="no-results">No programs or schools match your search.</div>
        ) : (
          filteredSchools.map((school) => (
            <div className="school-card" key={school}>
              <div 
                className="school-header" 
                onClick={() => toggleSchool(school)}
              >
                <h2>{school}</h2>
                <button className="expand-button">
                  {expandedSchool === school ? (
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
              
              {expandedSchool === school && (
                <div className="programs-list">
                  <table className="programs-table">
                    <thead>
                      <tr>
                        <th>Program</th>
                        <th>Tuition Fee</th>
                        <th>Advance Payment</th>
                      </tr>
                    </thead>
                    <tbody>
                      {universityData[school].programs.map((program, index) => {
                        const isHighlighted = program.name.toLowerCase().includes(searchTerm.toLowerCase());
                        const fee = program.fee[currencyView];
                        // Calculate advance payment (90% of the fee)
                        const numericFee = parseFloat(fee.replace(/[^0-9.]/g, ''));
                        const advancePayment = (numericFee * 0.9).toFixed(0);
                        const formattedAdvancePayment = `$${advancePayment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
                        
                        return (
                          <tr 
                            className={`program-row ${isHighlighted ? 'highlight' : ''}`} 
                            key={index}
                          >
                            <td className="program-name">{program.name}</td>
                            <td className="program-fee">{fee}</td>
                            <td className="program-advance">{formattedAdvancePayment}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          ))
        )}
      </div>

      <footer className="footer">
        <p>© 2025 Istanbul Medipol University. All rights reserved.</p>
        <p className="website">mio.medipol.edu.tr</p>
      </footer>
    </div>
  );
}

export default IstanbulMedipol;