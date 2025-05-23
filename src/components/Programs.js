import React, { useState } from 'react';
import './Programs.css';

const departments = [
  {
    id: 1,
    title: "Engineering & Technology",
    icon: "🏗️",
    programs: [
      "Aerospace Engineering",
      "Civil Engineering",
      "Computer Engineering",
      "Electrical & Electronics Engineering",
      "Industrial Engineering",
      "Mechanical Engineering",
      "Mechatronics Engineering",
      "Chemical Engineering",
      "Biomedical Engineering",
      "Environmental Engineering",
      "Software Engineering",
      "Automotive Engineering",
      "Food Engineering",
      "Metallurgical & Materials Engineering"
    ]
  },
  {
    id: 2,
    title: "Medicine & Health Sciences",
    icon: "⚕️",
    programs: [
      "Medicine (MBBS)",
      "Dentistry",
      "Pharmacy",
      "Nursing",
      "Physiotherapy & Rehabilitation",
      "Nutrition & Dietetics",
      "Veterinary Medicine",
      "Psychology",
      "Medical Laboratory Sciences",
      "Health Management"
    ]
  },
  {
    id: 3,
    title: "Natural & Applied Sciences",
    icon: "🧪",
    programs: [
      "Mathematics",
      "Physics",
      "Chemistry",
      "Biology",
      "Molecular Biology & Genetics",
      "Biochemistry",
      "Astronomy & Space Sciences",
      "Geology",
      "Environmental Sciences"
    ]
  },
  {
    id: 4,
    title: "Social Sciences & Humanities",
    icon: "👥",
    programs: [
      "Political Science & International Relations",
      "Sociology",
      "History",
      "Philosophy",
      "Archaeology",
      "Anthropology",
      "Linguistics",
      "Translation & Interpretation (e.g., English-Turkish)",
      "Psychology"
    ]
  },
  {
    id: 5,
    title: "Business & Economics",
    icon: "📊",
    programs: [
      "Business Administration",
      "Economics",
      "Finance & Banking",
      "International Trade",
      "Marketing",
      "Management Information Systems",
      "Public Administration",
      "Tourism & Hotel Management",
      "Aviation Management"
    ]
  },
  {
    id: 6,
    title: "Law & Political Science",
    icon: "⚖️",
    programs: [
      "Law (LLB)",
      "International Law",
      "Political Science",
      "Public Administration"
    ]
  },
  {
    id: 7,
    title: "Arts & Design",
    icon: "🎨",
    programs: [
      "Fine Arts (Painting, Sculpture, etc.)",
      "Graphic Design",
      "Interior Architecture",
      "Fashion & Textile Design",
      "Music & Performing Arts",
      "Film & Television"
    ]
  },
  {
    id: 8,
    title: "Architecture & Urban Planning",
    icon: "🏠",
    programs: [
      "Architecture",
      "Urban & Regional Planning",
      "Landscape Architecture"
    ]
  },
  {
    id: 9,
    title: "Communication & Media Studies",
    icon: "📻",
    programs: [
      "Journalism",
      "Public Relations & Advertising",
      "Media & Visual Arts",
      "Radio, TV & Cinema"
    ]
  },
  {
    id: 10,
    title: "Education & Teaching",
    icon: "🎓",
    programs: [
      "English Language Teaching (ELT)",
      "Primary School Education",
      "Mathematics Education",
      "Science Education",
      "Preschool Education",
      "Special Education"
    ]
  },
  {
    id: 11,
    title: "Agriculture & Forestry",
    icon: "🌱",
    programs: [
      "Agricultural Engineering",
      "Forestry",
      "Food Science & Technology"
    ]
  },
  {
    id: 12,
    title: "Theology & Islamic Studies",
    icon: "📚",
    programs: [
      "Islamic Studies",
      "Theology",
      "Religious Education"
    ]
  },
  {
    id: 13,
    title: "Maritime & Marine Sciences",
    icon: "⚓",
    programs: [
      "Marine Engineering",
      "Maritime Business & Management",
      "Naval Architecture"
    ]
  },
  {
    id: 14,
    title: "Aviation & Space Sciences",
    icon: "✈️",
    programs: [
      "Aviation Management",
      "Pilot Training",
      "Aerospace Engineering",
      "Air Traffic Control"
    ]
  },
  {
    id: 15,
    title: "Sports & Physical Education",
    icon: "🏆",
    programs: [
      "Sports Management",
      "Physical Education & Sports",
      "Coaching",
      "Sports Science"
    ]
  }
];

function Programs() {
  const [selectedDepartment, setSelectedDepartment] = useState(null);

  const handleCardClick = (department) => {
    setSelectedDepartment(department);
  };

  return (
    <div className="programs-page">
      <div className="breadcrumb">
        <span>Home</span> / <span className="active">Programs</span>
      </div>
      <h1 className="page-title">Programs</h1>
      <div className="programs-layout">
        <div className="filter-sidebar">
          <div className="filter-section">
            <h3>Departments</h3>
            <div className="department-list">
              {departments.map((dept) => (
                <div
                  key={dept.id}
                  className={`department-item ${selectedDepartment?.id === dept.id ? 'active' : ''}`}
                  onClick={() => handleCardClick(dept)}
                >
                  <span className="department-icon">{dept.icon}</span>
                  <span className="department-name">{dept.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="programs-content">
          {selectedDepartment ? (
            <div className="program-list">
              <h2>{selectedDepartment.title}</h2>
              <div className="program-grid">
                {selectedDepartment.programs.map((program, index) => (
                  <div key={index} className="program-card">
                    <h3>{program}</h3>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="no-selection">
              <p>Select a department to view available programs</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Programs;