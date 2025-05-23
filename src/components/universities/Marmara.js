import React, { useState, useEffect } from 'react';
import './Marmara.css';

function Marmara() {
  const [expandedFaculty, setExpandedFaculty] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currencyView, setCurrencyView] = useState('TL');
  const [filterLanguage, setFilterLanguage] = useState('all');
  const [filterDegree, setFilterDegree] = useState('all');
  const [filterDuration, setFilterDuration] = useState('all');

  const universityData = {
    "ATATÜRK FACULTY OF EDUCATION": {
      fee: { 
        TL: '₺30,085', 
        USD: '$1,060', 
        RANDS: 'R19,200' 
      },
      programs: [
        {
          name: "German Language Teaching (German)",
          language: "German",
          degree: "Bachelor's Degree",
          duration: "4"
        },
        {
          name: "Computer Education and Instructional Technology",
          language: "Turkish",
          degree: "Bachelor's Degree",
          duration: "4"
        },
        {
          name: "Biology Education",
          language: "Turkish",
          degree: "Bachelor's Degree",
          duration: "4"
        },
        {
          name: "Geography Teacher Education",
          language: "Turkish",
          degree: "Bachelor's Degree",
          duration: "4"
        },
        {
          name: "Science Education",
          language: "Turkish",
          degree: "Bachelor's Degree",
          duration: "4"
        },
        {
          name: "Physics Teacher Education",
          language: "Turkish",
          degree: "Bachelor's Degree",
          duration: "4"
        },
        {
          name: "French Language Teaching (French)",
          language: "French",
          degree: "Bachelor's Degree",
          duration: "4"
        },
        {
          name: "Primary Mathematics Education",
          language: "Turkish",
          degree: "Bachelor's Degree",
          duration: "4"
        },
        {
          name: "English Language Teaching (English)",
          language: "English",
          degree: "Bachelor's Degree",
          duration: "4"
        },
        {
          name: "Chemistry Teacher Education",
          language: "Turkish",
          degree: "Bachelor's Degree",
          duration: "4"
        },
        {
          name: "Mathematics Teacher Education",
          language: "Turkish",
          degree: "Bachelor's Degree",
          duration: "4"
        },
        {
          name: "Preschool Teacher Education",
          language: "Turkish",
          degree: "Bachelor's Degree",
          duration: "4"
        },
        {
          name: "Special Education Teaching",
          language: "Turkish",
          degree: "Bachelor's Degree",
          duration: "4"
        },
        {
          name: "Guidance and Psychological Counseling",
          language: "Turkish",
          degree: "Bachelor's Degree",
          duration: "4"
        },
        {
          name: "Elementary Teacher Education",
          language: "Turkish",
          degree: "Bachelor's Degree",
          duration: "4"
        },
        {
          name: "Social Studies Teacher Education",
          language: "Turkish",
          degree: "Bachelor's Degree",
          duration: "4"
        },
        {
          name: "History Teacher Education",
          language: "Turkish",
          degree: "Bachelor's Degree",
          duration: "4"
        },
        {
          name: "Turkish Language and Literature Teaching",
          language: "Turkish",
          degree: "Bachelor's Degree",
          duration: "4"
        },
        {
          name: "Turkish Language Teaching",
          language: "Turkish",
          degree: "Bachelor's Degree",
          duration: "4"
        },
        {
          name: "Music Teacher",
          language: "Turkish",
          degree: "Bachelor's Degree",
          duration: "4"
        },
        {
          name: "Art and Crafts Teacher Education",
          language: "Turkish",
          degree: "Bachelor's Degree",
          duration: "4"
        }
      ]
    },
    "FACULTY OF DENTISTRY": {
      fee: { 
        TL: '₺85,141', 
        USD: '$3,000', 
        RANDS: 'R54,300' 
      },
      programs: [
        {
          name: "Dentistry (English)",
          language: "English",
          degree: "Bachelor's Degree",
          duration: "5"
        }
      ]
    },
    "FACULTY OF PHARMACY": {
      fee: { 
        TL: '₺80,660', 
        USD: '$2,840', 
        RANDS: 'R51,450' 
      },
      programs: [
        {
          name: "Pharmacy",
          language: "Turkish",
          degree: "Bachelor's Degree",
          duration: "5"
        }
      ]
    },
    "FACULTY OF SCIENCE": {
      fee: { 
        TL: '₺30,713', 
        USD: '$1,080', 
        RANDS: 'R19,600' 
      },
      programs: [
        {
          name: "Biology",
          language: "Turkish",
          degree: "Bachelor's Degree",
          duration: "4"
        },
        {
          name: "Physics (30% English)",
          language: "English 30%",
          degree: "Bachelor's Degree",
          duration: "4"
        },
        {
          name: "Statistics",
          language: "Turkish",
          degree: "Bachelor's Degree",
          duration: "4"
        },
        {
          name: "Chemistry (30% English)",
          language: "English 30%",
          degree: "Bachelor's Degree",
          duration: "4"
        },
        {
          name: "Mathematics",
          language: "Turkish",
          degree: "Bachelor's Degree",
          duration: "4"
        }
      ]
    },
    "SCHOOL OF BANKING AND INSURANCE": {
      fee: { 
        TL: '₺20,924', 
        USD: '$740', 
        RANDS: 'R13,350' 
      },
      programs: [
        {
          name: "Actuary",
          language: "Turkish",
          degree: "Bachelor's Degree",
          duration: "4"
        },
        {
          name: "Banking",
          language: "Turkish",
          degree: "Bachelor's Degree",
          duration: "4"
        },
        {
          name: "Capital Market",
          language: "Turkish",
          degree: "Bachelor's Degree",
          duration: "4"
        },
        {
          name: "Insurance",
          language: "Turkish",
          degree: "Bachelor's Degree",
          duration: "4"
        }
      ]
    },
    "FACULTY OF LAW": {
      fee: { 
        TL: '₺40,001', 
        USD: '$1,410', 
        RANDS: 'R25,520' 
      },
      programs: [
        {
          name: "Faculty of Law",
          language: "Turkish",
          degree: "Bachelor's Degree",
          duration: "4"
        }
      ]
    },
    "FACULTY OF ECONOMICS": {
      fee: { 
        TL: '₺25,847', 
        USD: '$910', 
        RANDS: 'R16,490' 
      },
      programs: [
        {
          name: "Labor Economics and Industrial Relations",
          language: "Turkish",
          degree: "Bachelor's Degree",
          duration: "4"
        },
        {
          name: "Econometrics",
          language: "Turkish",
          degree: "Bachelor's Degree",
          duration: "4"
        },
        {
          name: "Economics",
          language: "Turkish",
          degree: "Bachelor's Degree",
          duration: "4"
        },
        {
          name: "Economics (English)",
          language: "English",
          degree: "Bachelor's Degree",
          duration: "4"
        },
        {
          name: "Public Finances",
          language: "Turkish",
          degree: "Bachelor's Degree",
          duration: "4"
        }
      ]
    },
    "FACULTY OF THEOLOGY": {
      fee: { 
        TL: '₺25,162', 
        USD: '$890', 
        RANDS: 'R16,050' 
      },
      programs: [
        {
          name: "Theology (30% Arabic)",
          language: "Arabic 30%",
          degree: "Bachelor's Degree",
          duration: "4"
        },
        {
          name: "Theology (Arabic)",
          language: "Arabic",
          degree: "Bachelor's Degree",
          duration: "4"
        },
        {
          name: "Theology (English)",
          language: "English",
          degree: "Bachelor's Degree",
          duration: "4"
        }
      ]
    },
    "FACULTY OF COMMUNICATION": {
      fee: { 
        TL: '₺20,488', 
        USD: '$720', 
        RANDS: 'R13,070' 
      },
      programs: [
        {
          name: "Journalism (30% English)",
          language: "English 30%",
          degree: "Bachelor's Degree",
          duration: "4"
        },
        {
          name: "Public Relations and Publicity (30% English)",
          language: "English 30%",
          degree: "Bachelor's Degree",
          duration: "4"
        },
        {
          name: "Radio, Television and Cinema (30% English)",
          language: "English 30%",
          degree: "Bachelor's Degree",
          duration: "4"
        }
      ]
    },
    "FACULTY OF HUMANITIES AND SOCIAL SCIENCES": {
      fee: { 
        TL: '₺25,162', 
        USD: '$890', 
        RANDS: 'R16,050' 
      },
      programs: [
        {
          name: "German Language and Literature",
          language: "German",
          degree: "Bachelor's Degree",
          duration: "4"
        },
        {
          name: "Translation and Interpreting (German Language)",
          language: "German",
          degree: "Bachelor's Degree",
          duration: "4"
        },
        {
          name: "Information and Records Management",
          language: "Turkish",
          degree: "Bachelor's Degree",
          duration: "4"
        },
        {
          name: "Geography",
          language: "Turkish",
          degree: "Bachelor's Degree",
          duration: "4"
        },
        {
          name: "Philosophy (English)",
          language: "English",
          degree: "Bachelor's Degree",
          duration: "4"
        },
        {
          name: "Translation and Interpreting (French Language)",
          language: "French",
          degree: "Bachelor's Degree",
          duration: "4"
        },
        {
          name: "Translation and Interpreting (English Language)",
          language: "English",
          degree: "Bachelor's Degree",
          duration: "4"
        },
        {
          name: "Psychology",
          language: "Turkish",
          degree: "Bachelor's Degree",
          duration: "4"
        },
        {
          name: "Psychology (English)",
          language: "English",
          degree: "Bachelor's Degree",
          duration: "4"
        },
        {
          name: "History of Art",
          language: "Turkish",
          degree: "Bachelor's Degree",
          duration: "4"
        },
        {
          name: "Sociology (English)",
          language: "English",
          degree: "Bachelor's Degree",
          duration: "4"
        },
        {
          name: "History",
          language: "Turkish",
          degree: "Bachelor's Degree",
          duration: "4"
        },
        {
          name: "Turkish Language and Literature",
          language: "Turkish",
          degree: "Bachelor's Degree",
          duration: "4"
        }
      ]
    },
    "FACULTY OF BUSINESS ADMINISTRATION": {
      fee: { 
        TL: '₺25,231', 
        USD: '$890', 
        RANDS: 'R16,100' 
      },
      programs: [
        {
          name: "Business Administration",
          language: "Turkish",
          degree: "Bachelor's Degree",
          duration: "4"
        },
        {
          name: "Business Administration (German)",
          language: "German",
          degree: "Bachelor's Degree",
          duration: "4"
        },
        {
          name: "Business Administration (English)",
          language: "English",
          degree: "Bachelor's Degree",
          duration: "4"
        },
        {
          name: "Management Information Systems (German)",
          language: "German",
          degree: "Bachelor's Degree",
          duration: "4"
        },
        {
          name: "Management Information Systems (English)",
          language: "English",
          degree: "Bachelor's Degree",
          duration: "4"
        }
      ]
    },
    "FACULTY OF ENGINEERING": {
      fee: { 
        TL: '₺50,487', 
        USD: '$1,780', 
        RANDS: 'R32,200' 
      },
      programs: [
        {
          name: "Computer Engineering (English)",
          language: "English",
          degree: "Bachelor's Degree",
          duration: "4"
        },
        {
          name: "Bioengineering (English)",
          language: "English",
          degree: "Bachelor's Degree",
          duration: "4"
        },
        {
          name: "Environmental Engineering (English)",
          language: "English",
          degree: "Bachelor's Degree",
          duration: "4"
        },
        {
          name: "Electrical and Electronics Engineering (English)",
          language: "English",
          degree: "Bachelor's Degree",
          duration: "4"
        },
        {
          name: "Industrial Engineering (English)",
          language: "English",
          degree: "Bachelor's Degree",
          duration: "4"
        },
        {
          name: "Chemical Engineering (30% English)",
          language: "English 30%",
          degree: "Bachelor's Degree",
          duration: "4"
        },
        {
          name: "Mechanical Engineering (English)",
          language: "English",
          degree: "Bachelor's Degree",
          duration: "4"
        },
        {
          name: "Metallurgical and Materials Engineering (English)",
          language: "English",
          degree: "Bachelor's Degree",
          duration: "4"
        }
      ]
    },
    "FACULTY OF HEALTH SCIENCES": {
      fee: { 
        TL: '₺30,085', 
        USD: '$1,060', 
        RANDS: 'R19,200' 
      },
      programs: [
        {
          name: "Nutrition and Dietetic",
          language: "Turkish",
          degree: "Bachelor's Degree",
          duration: "4"
        },
        {
          name: "Midwifery",
          language: "Turkish",
          degree: "Bachelor's Degree",
          duration: "4"
        },
        {
          name: "Physiotherapy and Rehabilitation",
          language: "Turkish",
          degree: "Bachelor's Degree",
          duration: "4"
        },
        {
          name: "Nursing",
          language: "Turkish",
          degree: "Bachelor's Degree",
          duration: "4"
        },
        {
          name: "Health Management",
          language: "Turkish",
          degree: "Bachelor's Degree",
          duration: "4"
        }
      ]
    },
    "FACULTY OF POLITICAL SCIENCES": {
      fee: { 
        TL: '₺30,770', 
        USD: '$1,080', 
        RANDS: 'R19,630' 
      },
      programs: [
        {
          name: "Political Science and Public Administration (30% English)",
          language: "English 30%",
          degree: "Bachelor's Degree",
          duration: "4"
        },
        {
          name: "Political Science and Public Administration (French)",
          language: "French",
          degree: "Bachelor's Degree",
          duration: "4"
        },
        {
          name: "Political Science and International Relations (English)",
          language: "English",
          degree: "Bachelor's Degree",
          duration: "4"
        },
        {
          name: "International Relations (30% English)",
          language: "English 30%",
          degree: "Bachelor's Degree",
          duration: "4"
        },
        {
          name: "Local Governments",
          language: "Turkish",
          degree: "Bachelor's Degree",
          duration: "4"
        }
      ]
    },
    "SPORTS SCIENCE FACULTY": {
      fee: { 
        TL: '₺30,085', 
        USD: '$1,060', 
        RANDS: 'R19,200' 
      },
      programs: [
        {
          name: "Sports Coaching Education",
          language: "Turkish",
          degree: "Bachelor's Degree",
          duration: "4"
        },
        {
          name: "Physical Education and Sports Teaching",
          language: "Turkish",
          degree: "Bachelor's Degree",
          duration: "4"
        },
        {
          name: "Sports Management",
          language: "Turkish",
          degree: "Bachelor's Degree",
          duration: "4"
        }
      ]
    },
    "FACULTY OF TECHNOLOGY": {
      fee: { 
        TL: '₺50,487', 
        USD: '$1,780', 
        RANDS: 'R32,200' 
      },
      programs: [
        {
          name: "Computer Engineering",
          language: "Turkish",
          degree: "Bachelor's Degree",
          duration: "4"
        },
        {
          name: "Electrical-Electronics Engineering",
          language: "Turkish",
          degree: "Bachelor's Degree",
          duration: "4"
        },
        {
          name: "Mechanical Engineering",
          language: "Turkish",
          degree: "Bachelor's Degree",
          duration: "4"
        },
        {
          name: "Mechatronic Engineering",
          language: "Turkish",
          degree: "Bachelor's Degree",
          duration: "4"
        },
        {
          name: "Metallurgy and Materials Engineering",
          language: "Turkish",
          degree: "Bachelor's Degree",
          duration: "4"
        },
        {
          name: "Textile Engineering",
          language: "Turkish",
          degree: "Bachelor's Degree",
          duration: "4"
        }
      ]
    },
    "FACULTY OF MEDICINE": {
      fee: { 
        TL: '₺153,202', 
        USD: '$5,400', 
        RANDS: 'R97,700' 
      },
      programs: [
        {
          name: "Medicine (English)",
          language: "English",
          degree: "Bachelor's Degree",
          duration: "6"
        }
      ]
    },
    "FACULTY OF APPLIED SCIENCES": {
      fee: { 
        TL: '₺20,786', 
        USD: '$730', 
        RANDS: 'R13,260' 
      },
      programs: [
        {
          name: "Printing Technologies",
          language: "Turkish",
          degree: "Bachelor's Degree",
          duration: "4"
        },
        {
          name: "Jewelery and Jewelery Design",
          language: "Turkish",
          degree: "Bachelor's Degree",
          duration: "4"
        }
      ]
    },
    "VOCATIONAL SCHOOL OF HEALTH SERVICES": {
      fee: { 
        TL: '₺20,500', 
        USD: '$720', 
        RANDS: 'R13,080' 
      },
      programs: [
        {
          name: "Anesthesia",
          language: "Turkish",
          degree: "Associate Degree",
          duration: "2"
        },
        {
          name: "Dental Prosthesis Technology",
          language: "Turkish",
          degree: "Associate Degree",
          duration: "2"
        },
        {
          name: "Paramedic",
          language: "Turkish",
          degree: "Associate Degree",
          duration: "2"
        },
        {
          name: "Pathology Laboratory Techniques",
          language: "Turkish",
          degree: "Associate Degree",
          duration: "2"
        },
        {
          name: "Medical Imaging Techniques",
          language: "Turkish",
          degree: "Associate Degree",
          duration: "2"
        },
        {
          name: "Medical Laboratory Techniques",
          language: "Turkish",
          degree: "Associate Degree",
          duration: "2"
        }
      ]
    },
    "VOCATIONAL SCHOOL OF SOCIAL SCIENCES": {
      fee: { 
        TL: '₺20,500', 
        USD: '$720',
        RANDS: 'R13,080' 
      },
      programs: [
        {
          name: "Banking and Insurance",
          language: "Turkish",
          degree: "Associate Degree",
          duration: "2"
        },
        {
          name: "Office Management and Executive",
          language: "Turkish",
          degree: "Associate Degree",
          duration: "2"
        },
        {
          name: "Foreign Trade",
          language: "Turkish",
          degree: "Associate Degree",
          duration: "2"
        },
        {
          name: "Accounting and Tax Applications",
          language: "Turkish",
          degree: "Associate Degree",
          duration: "2"
        },
        {
          name: "Marketing",
          language: "Turkish",
          degree: "Associate Degree",
          duration: "2"
        },
        {
          name: "Tourism Guiding (30% English)",
          language: "English 30%",
          degree: "Associate Degree",
          duration: "2"
        },
        {
          name: "Hosting (30% English)",
          language: "English 30%",
          degree: "Associate Degree",
          duration: "2"
        },
        {
          name: "Travel Services (30% English)",
          language: "English 30%",
          degree: "Associate Degree",
          duration: "2"
        },
        {
          name: "Local Governments",
          language: "Turkish",
          degree: "Associate Degree",
          duration: "2"
        }
      ]
    },
    "VOCATIONAL SCHOOL OF TECHNICAL SCIENCES": {
      fee: { 
        TL: '₺20,500', 
        USD: '$720', 
        RANDS: 'R13,080' 
      },
      programs: [
        {
          name: "Printing and Publishing Technologies",
          language: "Turkish",
          degree: "Associate Degree",
          duration: "2"
        },
        {
          name: "Computer Programming",
          language: "Turkish",
          degree: "Associate Degree",
          duration: "2"
        },
        {
          name: "Computer Programming (DE)",
          language: "Turkish",
          degree: "Associate Degree",
          duration: "2"
        },
        {
          name: "Electric",
          language: "Turkish",
          degree: "Associate Degree",
          duration: "2"
        },
        {
          name: "Electronic Communications Technology",
          language: "Turkish",
          degree: "Associate Degree",
          duration: "2"
        },
        {
          name: "Electronic Technology",
          language: "Turkish",
          degree: "Associate Degree",
          duration: "2"
        },
        {
          name: "Clothing Production Technology",
          language: "Turkish",
          degree: "Associate Degree",
          duration: "2"
        },
        {
          name: "Occupational Health and Safety",
          language: "Turkish",
          degree: "Associate Degree",
          duration: "2"
        },
        {
          name: "Occupational Health and Safety (DE)",
          language: "Turkish",
          degree: "Associate Degree",
          duration: "2"
        },
        {
          name: "Control and Automation Technologies",
          language: "Turkish",
          degree: "Associate Degree",
          duration: "2"
        },
        {
          name: "Machinery",
          language: "Turkish",
          degree: "Associate Degree",
          duration: "2"
        },
        {
          name: "Fashion Design",
          language: "Turkish",
          degree: "Associate Degree",
          duration: "2"
        },
        {
          name: "Fashion Design (DE)",
          language: "Turkish",
          degree: "Associate Degree",
          duration: "2"
        }
      ]
    }
  };

  // Get unique languages, degrees, and durations for filter options
  const getUniqueValues = (key) => {
    const allPrograms = Object.values(universityData).flatMap(faculty => faculty.programs);
    return [...new Set(allPrograms.map(program => program[key]))].sort();
  };

  const uniqueLanguages = getUniqueValues('language');
  const uniqueDegrees = getUniqueValues('degree');
  const uniqueDurations = getUniqueValues('duration');

  // Function to handle faculty expansion
  const toggleFaculty = (faculty) => {
    setExpandedFaculty(expandedFaculty === faculty ? null : faculty);
  };

  // Apply all filters to the data
  const filteredData = Object.entries(universityData).reduce((acc, [faculty, data]) => {
    // Filter programs based on search term, language, degree, and duration
    const filteredPrograms = data.programs.filter(program => {
      const matchesSearch = program.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesLanguage = filterLanguage === 'all' || program.language === filterLanguage;
      const matchesDegree = filterDegree === 'all' || program.degree === filterDegree;
      const matchesDuration = filterDuration === 'all' || program.duration === filterDuration;
      
      return matchesSearch && matchesLanguage && matchesDegree && matchesDuration;
    });

    // Include the faculty if it has programs that match the filters
    if (filteredPrograms.length > 0) {
      acc[faculty] = {
        ...data,
        programs: filteredPrograms
      };
    }

    return acc;
  }, {});

  return (
    <div className="marmara-container">
      <h1>Marmara University Programs</h1>
      
      <div className="controls">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search programs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="filters">
          <div className="filter">
            <label>Currency:</label>
            <select value={currencyView} onChange={(e) => setCurrencyView(e.target.value)}>
              <option value="TL">Turkish Lira (TL)</option>
              <option value="USD">US Dollar (USD)</option>
              <option value="RANDS">South African Rand (RANDS)</option>
            </select>
          </div>
          
          <div className="filter">
            <label>Language:</label>
            <select value={filterLanguage} onChange={(e) => setFilterLanguage(e.target.value)}>
              <option value="all">All Languages</option>
              {uniqueLanguages.map(language => (
                <option key={language} value={language}>{language}</option>
              ))}
            </select>
          </div>
          
          <div className="filter">
            <label>Degree:</label>
            <select value={filterDegree} onChange={(e) => setFilterDegree(e.target.value)}>
              <option value="all">All Degrees</option>
              {uniqueDegrees.map(degree => (
                <option key={degree} value={degree}>{degree}</option>
              ))}
            </select>
          </div>
          
          <div className="filter">
            <label>Duration:</label>
            <select value={filterDuration} onChange={(e) => setFilterDuration(e.target.value)}>
              <option value="all">All Durations</option>
              {uniqueDurations.map(duration => (
                <option key={duration} value={duration}>{duration} years</option>
              ))}
            </select>
          </div>
        </div>
      </div>
      
      <div className="faculties">
        {Object.entries(filteredData).length === 0 ? (
          <div className="no-results">No programs match your search criteria.</div>
        ) : (
          Object.entries(filteredData).map(([faculty, data]) => (
            <div key={faculty} className="faculty-card">
              <div className="faculty-header" onClick={() => toggleFaculty(faculty)}>
                <h2>{faculty}</h2>
                <div className="fee">{data.fee[currencyView]} per year</div>
                <div className="expand-icon">{expandedFaculty === faculty ? '▼' : '►'}</div>
              </div>
              
              {expandedFaculty === faculty && (
                <div className="programs">
                  <table>
                    <thead>
                      <tr>
                        <th>Program</th>
                        <th>Language</th>
                        <th>Degree</th>
                        <th>Duration</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.programs.map((program, index) => (
                        <tr key={index}>
                          <td>{program.name}</td>
                          <td>{program.language}</td>
                          <td>{program.degree}</td>
                          <td>{program.duration} years</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Marmara;