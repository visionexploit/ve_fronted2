import React, { useState } from 'react';
import './Bolu.css';

const Bolu = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

  const programsData = [
    { faculty: "Faculty of Medicine", program: "Medicine", fee: 250000.00 },
    { faculty: "Faculty of Dentistry", program: "Dentistry", fee: 180000.00 },
    { faculty: "Faculty of Architecture and Engineering", program: "Architecture and Engineering Programs", fee: 65000.00 },
    { faculty: "Faculty of Health Sciences", program: "Health Sciences Programs", fee: 60000.00 },
    { faculty: "Faculty of Agriculture", program: "Agriculture Programs", fee: 40000.00 },
    { faculty: "Faculty of Law", program: "Law", fee: 70000.00 },
    { faculty: "Faculty of Fine Arts", program: "Fine Arts Programs", fee: 50000.00 },
    { faculty: "Faculty of Science and Literature", program: "Science Programs", fee: 45000.00 },
    { faculty: "Faculty of Science and Literature", program: "Literature and Social Programs (First Education)", fee: 40000.00 },
    { faculty: "Faculty of Science and Literature", program: "Literature and Social Programs (Second Education)", fee: 45000.00 },
    { faculty: "Faculty of Economics and Administrative Sciences", program: "Economics and Administrative Programs (First Education)", fee: 50000.00 },
    { faculty: "Faculty of Economics and Administrative Sciences", program: "Economics and Administrative Programs (Second Education)", fee: 55000.00 },
    { faculty: "Faculty of Education", program: "Guidance and Psychological Counseling (First Education)", fee: 45000.00 },
    { faculty: "Faculty of Education", program: "English Teaching (First Education)", fee: 45000.00 },
    { faculty: "Faculty of Education", program: "Other Education Programs (First Education)", fee: 40000.00 },
    { faculty: "Faculty of Education", program: "Education Programs (Second Education)", fee: 45000.00 },
    { faculty: "Gerede Faculty of Applied Sciences", program: "Applied Sciences Programs", fee: 40000.00 },
    { faculty: "Faculty of Theology", program: "Theology (First Education)", fee: 40000.00 },
    { faculty: "Faculty of Theology", program: "Theology (Second Education)", fee: 45000.00 },
    { faculty: "Faculty of Sports Sciences", program: "Sports Sciences Programs", fee: 40000.00 },
    { faculty: "Faculty of Tourism", program: "Tourism Guidance (First Education)", fee: 55000.00 },
    { faculty: "Faculty of Tourism", program: "Gastronomy and Culinary Arts (First Education)", fee: 55000.00 },
    { faculty: "Faculty of Tourism", program: "Tourism Management (First Education)", fee: 50000.00 },
    { faculty: "Faculty of Tourism", program: "Tourism Programs (Second Education)", fee: 55000.00 },
    { faculty: "Faculty of Communication", program: "Communication Programs (First Education)", fee: 35000.00 },
    { faculty: "Faculty of Communication", program: "Communication Programs (Second Education)", fee: 40000.00 },
    { faculty: "School of Foreign Languages", program: "Foreign Languages Programs", fee: 45000.00 },
    { faculty: "Vocational Schools", program: "Vocational Programs (First Education)", fee: 25000.00 },
    { faculty: "Vocational Schools", program: "Vocational Programs (Second Education)", fee: 30000.00 },
    { faculty: "Graduate School of Education", program: "Graduate Programs", fee: 45000.00 }
  ];

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const getSortedPrograms = () => {
    const filteredPrograms = programsData.filter(program => 
      program.faculty.toLowerCase().includes(searchTerm) || 
      program.program.toLowerCase().includes(searchTerm)
    );

    if (sortConfig.key) {
      return [...filteredPrograms].sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return filteredPrograms;
  };

  const sortedPrograms = getSortedPrograms();
  const uniqueFaculties = [...new Set(programsData.map(item => item.faculty))];

  return (
    <div className="programs-container">
      <div className="header">
        <h1>Bolu University Programs</h1>
        <h2>Tuition Fees for 2024-2025 Academic Year</h2>
      </div>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search programs or faculties..."
          value={searchTerm}
          onChange={handleSearch}
          className="search-input"
        />
      </div>

      <div className="filters">
        <button onClick={() => requestSort('faculty')} className="filter-button">
          Sort by Faculty {sortConfig.key === 'faculty' && (sortConfig.direction === 'ascending' ? '↑' : '↓')}
        </button>
        <button onClick={() => requestSort('program')} className="filter-button">
          Sort by Program {sortConfig.key === 'program' && (sortConfig.direction === 'ascending' ? '↑' : '↓')}
        </button>
        <button onClick={() => requestSort('fee')} className="filter-button">
          Sort by Fee {sortConfig.key === 'fee' && (sortConfig.direction === 'ascending' ? '↑' : '↓')}
        </button>
      </div>

      <div className="faculty-filter">
        <h3>Filter by Faculty:</h3>
        <div className="faculty-buttons">
          <button 
            onClick={() => setSearchTerm('')} 
            className={`faculty-button ${!searchTerm ? 'active' : ''}`}
          >
            All
          </button>
          {uniqueFaculties.map((faculty, index) => (
            <button 
              key={index} 
              onClick={() => setSearchTerm(faculty.toLowerCase())} 
              className={`faculty-button ${searchTerm === faculty.toLowerCase() ? 'active' : ''}`}
            >
              {faculty}
            </button>
          ))}
        </div>
      </div>

      <div className="table-container">
        <table className="programs-table">
          <thead>
            <tr>
              <th onClick={() => requestSort('faculty')}>
                Faculty {sortConfig.key === 'faculty' && (sortConfig.direction === 'ascending' ? '↑' : '↓')}
              </th>
              <th onClick={() => requestSort('program')}>
                Program {sortConfig.key === 'program' && (sortConfig.direction === 'ascending' ? '↑' : '↓')}
              </th>
              <th onClick={() => requestSort('fee')}>
                Tuition Fee (TL) {sortConfig.key === 'fee' && (sortConfig.direction === 'ascending' ? '↑' : '↓')}
              </th>
              <th onClick={() => requestSort('fee')}>
                Tuition Fee (USD) {sortConfig.key === 'fee' && (sortConfig.direction === 'ascending' ? '↑' : '↓')}
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedPrograms.map((program, index) => (
              <tr key={index}>
                <td>{program.faculty}</td>
                <td>{program.program}</td>
                <td>{program.fee.toLocaleString('tr-TR')}</td>
                <td>${(program.fee / 32.5).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="footer">
        <p>Note: Fees are for students enrolled in the 2024-2025 academic year.</p>
      </div>
    </div>
  );
};

export default Bolu;