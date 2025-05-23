import React, { useState, useEffect } from 'react';
import { FaFilePdf, FaFileImage } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import imageCompression from 'browser-image-compression';
import './SignUp.css';

// Import all programs from departments
const allPrograms = [
  // Engineering & Technology
  "Aerospace Engineering", "Civil Engineering", "Computer Engineering", "Electrical & Electronics Engineering",
  "Industrial Engineering", "Mechanical Engineering", "Mechatronics Engineering", "Chemical Engineering",
  "Biomedical Engineering", "Environmental Engineering", "Software Engineering", "Automotive Engineering",
  "Food Engineering", "Metallurgical & Materials Engineering",
  
  // Medicine & Health Sciences
  "Medicine (MBBS)", "Dentistry", "Pharmacy", "Nursing", "Physiotherapy & Rehabilitation",
  "Nutrition & Dietetics", "Veterinary Medicine", "Psychology", "Medical Laboratory Sciences",
  "Health Management",
  
  // Natural & Applied Sciences
  "Mathematics", "Physics", "Chemistry", "Biology", "Molecular Biology & Genetics",
  "Biochemistry", "Astronomy & Space Sciences", "Geology", "Environmental Sciences",
  
  // Social Sciences & Humanities
  "Political Science & International Relations", "Sociology", "History", "Philosophy",
  "Archaeology", "Anthropology", "Linguistics", "Translation & Interpretation",
  
  // Business & Economics
  "Business Administration", "Economics", "Finance & Banking", "International Trade",
  "Marketing", "Management Information Systems", "Public Administration",
  "Tourism & Hotel Management", "Aviation Management",
  
  // Law & Political Science
  "Law (LLB)", "International Law", "Political Science", "Public Administration",
  
  // Arts & Design
  "Fine Arts", "Graphic Design", "Interior Architecture", "Fashion & Textile Design",
  "Music & Performing Arts", "Film & Television",
  
  // Architecture & Urban Planning
  "Architecture", "Urban & Regional Planning", "Landscape Architecture",
  
  // Communication & Media Studies
  "Journalism", "Public Relations & Advertising", "Media & Visual Arts",
  "Radio, TV & Cinema",
  
  // Education & Teaching
  "English Language Teaching (ELT)", "Primary School Education", "Mathematics Education",
  "Science Education", "Preschool Education", "Special Education",
  
  // Agriculture & Forestry
  "Agricultural Engineering", "Forestry", "Food Science & Technology",
  
  // Theology & Islamic Studies
  "Islamic Studies", "Theology", "Religious Education",
  
  // Maritime & Marine Sciences
  "Marine Engineering", "Maritime Business & Management", "Naval Architecture",
  
  // Aviation & Space Sciences
  "Aviation Management", "Pilot Training", "Aerospace Engineering", "Air Traffic Control",
  
  // Sports & Physical Education
  "Sports Management", "Physical Education & Sports", "Coaching", "Sports Science"
].sort(); // Sort alphabetically

function SignUp() {
  // Initialize with default countries to ensure dropdown is never empty
  const [countries, setCountries] = useState([
    {code: 'US', name: 'United States'},
    {code: 'CA', name: 'Canada'},
    {code: 'GB', name: 'United Kingdom'}
  ]);
  const [isLoadingCountries, setIsLoadingCountries] = useState(true);
  const [error, setError] = useState(null);
  const [apiRetries, setApiRetries] = useState(0);

  const [formData, setFormData] = useState({
    personalInfo: {
      firstName: '',
      lastName: '',
      gender: '',
      passportNumber: '',
      fullAddress: '',
      country: ''
    },
    contactInfo: {
      phoneNumber: '',
      email: '',
      languages: ''
    },
    parentGuardian: {
      motherName: '',
      fatherName: '',
      parentContact: ''
    },
    preferredCourses: ['', '', ''],
    preferences: {
      newsletter: false,
      notifications: true
    }
  });
  
  const [errors, setErrors] = useState({});
  const [fileErrors, setFileErrors] = useState({});
  const [showSuccessNotification, setShowSuccessNotification] = useState(false);

  // Expanded default countries list for fallback
  const defaultCountries = [
    {code: 'US', name: 'United States'},
    {code: 'CA', name: 'Canada'},
    {code: 'GB', name: 'United Kingdom'},
    {code: 'AU', name: 'Australia'},
    {code: 'DE', name: 'Germany'},
    {code: 'FR', name: 'France'},
    {code: 'JP', name: 'Japan'},
    {code: 'CN', name: 'China'},
    {code: 'IN', name: 'India'},
    {code: 'BR', name: 'Brazil'},
    {code: 'MX', name: 'Mexico'},
    {code: 'IT', name: 'Italy'},
    {code: 'ES', name: 'Spain'},
    {code: 'RU', name: 'Russia'},
    {code: 'ZA', name: 'South Africa'},
    {code: 'AR', name: 'Argentina'},
    {code: 'SG', name: 'Singapore'},
    {code: 'NZ', name: 'New Zealand'},
    {code: 'SE', name: 'Sweden'},
    {code: 'CH', name: 'Switzerland'}
  ];

  useEffect(() => {
    const fetchCountries = async () => {
      // Define timeoutId at the top level of the function
      let timeoutId;
      
      try {
        setIsLoadingCountries(true);
        setError(null);

        // Using a timeout to avoid hanging if endpoints are unresponsive
        const controller = new AbortController();
        timeoutId = setTimeout(() => controller.abort(), 8000);
        
        // Try multiple reliable public APIs in sequence
        let response = null;
        let data = null;
        
        // List of API endpoints to try in order
        const endpoints = [
          {
            url: 'https://restcountries.com/v3.1/all?fields=name,cca2',
            process: (data) => data.map(country => ({
              code: country.cca2,
              name: country.name.common
            })).sort((a, b) => a.name.localeCompare(b.name))
          },
          {
            url: 'https://raw.githubusercontent.com/annexare/Countries/master/data/countries.json',
            process: (data) => Object.entries(data).map(([code, country]) => ({
              code,
              name: country.name
            })).sort((a, b) => a.name.localeCompare(b.name))
          }
        ];
        
        // Try each endpoint in sequence until one works
        for (const endpoint of endpoints) {
          try {
            console.log(`Trying to fetch countries from: ${endpoint.url}`);
            response = await fetch(endpoint.url, {
              method: 'GET',
              signal: controller.signal
            });
            
            if (response.ok) {
              data = await response.json();
              // Process the data according to the API format
              if (data) {
                const processedData = endpoint.process(data);
                if (processedData.length > 0) {
                  setCountries(processedData);
                  console.log(`Successfully loaded ${processedData.length} countries`);
                  break; // Exit the loop if successful
                }
              }
            }
          } catch (endpointError) {
            console.warn(`Failed to fetch from ${endpoint.url}:`, endpointError);
            // Continue to next endpoint
          }
        }
        
        // If all endpoints failed, use our expanded default list
        if (!response || !response.ok || !data) {
          console.warn('All API endpoints failed, using default countries list');
          setCountries(defaultCountries);
          setError('Could not fetch countries from online sources. Using default country list.');
        }
        
      } catch (err) {
        console.error('Error in country fetching process:', err);
        setError('Note: Using default country list as we couldn\'t connect to any country data sources.');
        // Ensure we have countries even if everything fails
        setCountries(defaultCountries);
      } finally {
        // Clear timeout if it exists
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
        setIsLoadingCountries(false);
      }
    };
    
    fetchCountries();
  }, [apiRetries]);
  
  useEffect(() => {
    // Initialize EmailJS
    emailjs.init("alAxjKER4MhJVaXbH");
  }, []);

  const validateFile = (file, type) => {
    const errors = {};
    const maxSize = 5 * 1024 * 1024; // 5MB

    if (!file) {
      errors[type] = 'This file is required';
      return errors;
    }

    if (file.size > maxSize) {
      errors[type] = 'File size should be less than 5MB';
      return errors;
    }

    if (type === 'photo') {
      const allowedTypes = ['image/jpeg', 'image/png'];
      if (!allowedTypes.includes(file.type)) {
        errors[type] = 'Only JPG and PNG files are allowed';
      }
    } else {
      if (file.type !== 'application/pdf') {
        errors[type] = 'Only PDF files are allowed';
      }
    }

    return errors;
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    const file = files[0];
    
    const errors = validateFile(file, name);
    setFileErrors(prev => ({ ...prev, [name]: errors[name] }));
    
    if (!errors[name]) {
      setFormData(prev => ({
        ...prev,
        documents: {
          ...prev.documents,
          [name]: file
        }
      }));
    }
  };

  const validate = () => {
    const newErrors = {};
    
    // Personal Info validation
    if (!formData.personalInfo.firstName.trim()) {
      newErrors.personalInfo = {
        ...newErrors.personalInfo,
        firstName: 'First name is required'
      };
    }

    if (!formData.personalInfo.lastName.trim()) {
      newErrors.personalInfo = {
        ...newErrors.personalInfo,
        lastName: 'Last name is required'
      };
    }

    if (!formData.personalInfo.gender.trim()) {
      newErrors.personalInfo = {
        ...newErrors.personalInfo,
        gender: 'Gender is required'
      };
    }

    if (!formData.personalInfo.passportNumber.trim()) {
      newErrors.personalInfo = {
        ...newErrors.personalInfo,
        passportNumber: 'Passport number is required'
      };
    }
    
    if (!formData.personalInfo.fullAddress.trim()) {
      newErrors.personalInfo = {
        ...newErrors.personalInfo,
        fullAddress: 'Full address is required'
      };
    }
    
    if (!formData.personalInfo.country.trim()) {
      newErrors.personalInfo = {
        ...newErrors.personalInfo,
        country: 'Country is required'
      };
    } 
    
    // Contact Information validation
    if (!formData.contactInfo.phoneNumber.trim()) {
      newErrors.contactInfo = {
        ...newErrors.contactInfo,
        phoneNumber: 'Phone number is required'
      };
    }

    if (!formData.contactInfo.email.trim()) {
      newErrors.contactInfo = {
        ...newErrors.contactInfo,
        email: 'Email is required'
      };
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.contactInfo.email)) {
      newErrors.contactInfo = {
        ...newErrors.contactInfo,
        email: 'Email is invalid'
      };
    }

    if (!formData.contactInfo.languages.trim()) {
      newErrors.contactInfo = {
        ...newErrors.contactInfo,
        languages: 'Language(s) is required'
      };
    }
    
    // Parent/Guardian validation
    if (!formData.parentGuardian.motherName.trim()) {
      newErrors.parentGuardian = {
        ...newErrors.parentGuardian,
        motherName: "Mother's name is required"
      };
    }
    if (!formData.parentGuardian.fatherName.trim()) {
      newErrors.parentGuardian = {
        ...newErrors.parentGuardian,
        fatherName: "Father's name is required"
      };
    }
    if (!formData.parentGuardian.parentContact.trim()) {
      newErrors.parentGuardian = {
        ...newErrors.parentGuardian,
        parentContact: "Parent's contact number is required"
      };
    }
    
    // Preferred courses validation
    formData.preferredCourses.forEach((course, idx) => {
      if (!course.trim()) {
        if (!newErrors.preferredCourses) newErrors.preferredCourses = {};
        newErrors.preferredCourses[idx] = 'This field is required';
      }
    });
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const parts = name.split('.');
    if (parts[0] === 'preferredCourses') {
      const idx = Number(parts[1]);
      setFormData(prev => ({
        ...prev,
        preferredCourses: prev.preferredCourses.map((c, i) => i === idx ? value : c)
      }));
    } else if (parts[0] === 'parentGuardian') {
      setFormData(prev => ({
        ...prev,
        parentGuardian: {
          ...prev.parentGuardian,
          [parts[1]]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [parts[0]]: {
          ...prev[parts[0]],
          [parts[1]]: type === 'checkbox' ? checked : value
        }
      }));
    }
  };

  // Function to retry fetching countries if the initial attempt failed
  const retryFetchCountries = () => {
    setApiRetries(prev => prev + 1);
    setIsLoadingCountries(true);
    setError(null);
    // This will trigger the useEffect again since apiRetries is in the dependency array
  };

  // Helper to get total file size in bytes
  const getTotalFileSize = (files) => {
    return Object.values(files).reduce((acc, file) => {
      if (file && file.size) {
        return acc + file.size;
      }
      return acc;
    }, 0);
  };

  const convertFileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validate()) {
      return;
    }
    
    try {
      // Check if we have a valid country selection before submission
      if (!formData.personalInfo.country) {
        setErrors(prev => ({
          ...prev,
          personalInfo: {
            ...prev.personalInfo,
            country: 'Please select a country'
          }
        }));
        return;
      }

      // Prepare email template parameters
      const templateParams = {
        to_email: 'visionexploitconsultants@gmail.com',
        from_name: `${formData.personalInfo.firstName} ${formData.personalInfo.lastName}`,
        from_email: formData.contactInfo.email,
        phone_number: formData.contactInfo.phoneNumber,
        country: formData.personalInfo.country,
        gender: formData.personalInfo.gender,
        passport_number: formData.personalInfo.passportNumber,
        address: formData.personalInfo.fullAddress,
        languages: formData.contactInfo.languages,
        mother_name: formData.parentGuardian.motherName,
        father_name: formData.parentGuardian.fatherName,
        parent_contact: formData.parentGuardian.parentContact,
        preferred_course_1: formData.preferredCourses[0],
        preferred_course_2: formData.preferredCourses[1],
        preferred_course_3: formData.preferredCourses[2],
        message: `New registration from ${formData.personalInfo.firstName} ${formData.personalInfo.lastName}...` // (add more if needed)
      };

      // Send email using EmailJS
      await emailjs.send(
        'service_cif2igo',
        'template_uy71s9g',
        templateParams,
        'alAxjKER4MhJVaXbH'
      );
      
      // Clear form on successful submission
      setFormData({
        personalInfo: {
          firstName: '',
          lastName: '',
          gender: '',
          passportNumber: '',
          fullAddress: '',
          country: ''
        },
        contactInfo: {
          phoneNumber: '',
          email: '',
          languages: ''
        },
        parentGuardian: {
          motherName: '',
          fatherName: '',
          parentContact: ''
        },
        preferredCourses: ['', '', ''],
        preferences: {
          newsletter: false,
          notifications: true
        }
      });
      
      // Clear any previous errors
      setError(null);
      setShowSuccessNotification(true);
      
      // Show success message
      alert('Registration successful! Your information has been sent. We will contact you soon.');
      
    } catch (error) {
      console.error('Error:', error);
      // Display the error message to the user
      setError('Failed to send registration. Please try again.');
      setShowSuccessNotification(false);
      
      // If it's a duplicate email error, highlight the email field
      if (error.message && error.message.includes('Email already exists')) {
        setErrors(prev => ({
          ...prev,
          contactInfo: {
            ...prev.contactInfo,
            email: 'This email is already registered'
          }
        }));
      }
    }
  };

  return (
    <div className="container">
      <h1>Register</h1>
      {error && <div className="error-message">{error}</div>}
      {countries && countries.length > defaultCountries.length && !isLoadingCountries && (
        <div className="success-message">
          Loaded {countries.length} countries successfully
        </div>
      )}
      {showSuccessNotification && (
        <div className="success-message" style={{visibility:'visible', background:'#e8f5e9', color:'#2e7d32', borderLeft:'4px solid #2e7d32', fontWeight:'bold', marginBottom:'20px', padding:'10px 15px', borderRadius:'4px'}}>
          Form has been sent successfully. Send the following documents to visionexploitconsultants@gmail.com, [Passport, Transcript(s), High school/University Certificate(s), Recent Passport Photo]
        </div>
      )}
      <form onSubmit={handleSubmit} className="multi-section-form">
        {/* Personal Information Section */}
        <div className="form-section">
          <h2 className="section-heading">Personal Information</h2>
          <div className="form-group">
            <label>First Name*:</label>
            <input
              type="text"
              name="personalInfo.firstName"
              value={formData.personalInfo.firstName}
              onChange={handleChange}
            />
            {errors?.personalInfo?.firstName && 
              <span className="error">{errors.personalInfo.firstName}</span>
            }
          </div>
          <div className="form-group">
            <label>Last Name*:</label>
            <input
              type="text"
              name="personalInfo.lastName"
              value={formData.personalInfo.lastName}
              onChange={handleChange}
            />
            {errors?.personalInfo?.lastName && 
              <span className="error">{errors.personalInfo.lastName}</span>
            }
          </div>
          <div className="form-group">
            <label>Gender*:</label>
            <select
              name="personalInfo.gender"
              value={formData.personalInfo.gender}
              onChange={handleChange}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
              <option value="prefer-not-to-say">Prefer not to say</option>
            </select>
            {errors?.personalInfo?.gender && 
              <span className="error">{errors.personalInfo.gender}</span>
            }
          </div>
          <div className="form-group">
            <label>Passport Number*:</label>
            <input
              type="text"
              name="personalInfo.passportNumber"
              value={formData.personalInfo.passportNumber}
              onChange={handleChange}
            />
            {errors?.personalInfo?.passportNumber && 
              <span className="error">{errors.personalInfo.passportNumber}</span>
            }
          </div>
          <div className="form-group">
            <label>Full Address*:</label>
            <textarea
              name="personalInfo.fullAddress"
              value={formData.personalInfo.fullAddress}
              onChange={handleChange}
            />
            {errors?.personalInfo?.fullAddress && 
              <span className="error">{errors.personalInfo.fullAddress}</span>
            }
          </div>
          <div className="form-group">
            <label>Country of Residence*:</label>
            <select
              name="personalInfo.country"
              value={formData.personalInfo.country}
              onChange={handleChange}
              className={isLoadingCountries ? "loading-select" : ""}
            >
              <option value="">Select Country</option>
              {countries.map(country => (
                <option key={country.code} value={country.code}>
                  {country.name}
                </option>
              ))}
            </select>
            {errors?.personalInfo?.country && 
              <span className="error">{errors.personalInfo.country}</span>
            }
            {isLoadingCountries && <span className="loading-indicator">Fetching countries list...</span>}
            {!isLoadingCountries && countries.length <= defaultCountries.length && (
              <>
                <span className="warning">Using default country list. </span>
                <button 
                  type="button" 
                  onClick={retryFetchCountries}
                  className="retry-button"
                >
                  Retry fetching full list
                </button>
              </>
            )}
          </div>
        </div>

        {/* Contact Information Section */}
        <div className="form-section">
          <h2 className="section-heading">Contact Information</h2>
          <div className="form-group">
            <label>Phone Number*:</label>
            <input
              type="tel"
              name="contactInfo.phoneNumber"
              value={formData.contactInfo.phoneNumber}
              onChange={handleChange}
            />
            {errors?.contactInfo?.phoneNumber && 
              <span className="error">{errors.contactInfo.phoneNumber}</span>
            }
          </div>
          <div className="form-group">
            <label>Email Address*:</label>
            <input
              type="email"
              name="contactInfo.email"
              value={formData.contactInfo.email}
              onChange={handleChange}
            />
            {errors?.contactInfo?.email && 
              <span className="error">{errors.contactInfo.email}</span>
            }
          </div>
          <div className="form-group">
            <label>Languages Spoken*:</label>
            <input
              type="text"
              name="contactInfo.languages"
              value={formData.contactInfo.languages}
              onChange={handleChange}
              placeholder="e.g. English, Spanish, French"
            />
            {errors?.contactInfo?.languages && 
              <span className="error">{errors.contactInfo.languages}</span>
            }
          </div>
        </div>

        {/* Parent/Guardian Details Section */}
        <div className="form-section">
          <h2 className="section-heading">Parent/Guardian Details</h2>
          <div className="form-group">
            <label>Mother's Name*:</label>
            <input
              type="text"
              name="parentGuardian.motherName"
              value={formData.parentGuardian.motherName}
              onChange={handleChange}
            />
            {errors?.parentGuardian?.motherName && <span className="error">{errors.parentGuardian.motherName}</span>}
          </div>
          <div className="form-group">
            <label>Father's Name*:</label>
            <input
              type="text"
              name="parentGuardian.fatherName"
              value={formData.parentGuardian.fatherName}
              onChange={handleChange}
            />
            {errors?.parentGuardian?.fatherName && <span className="error">{errors.parentGuardian.fatherName}</span>}
          </div>
          <div className="form-group">
            <label>Parent's Contact Number*:</label>
            <input
              type="tel"
              name="parentGuardian.parentContact"
              value={formData.parentGuardian.parentContact}
              onChange={handleChange}
            />
            {errors?.parentGuardian?.parentContact && <span className="error">{errors.parentGuardian.parentContact}</span>}
          </div>
        </div>

        {/* Preferred Courses Section */}
        <div className="form-section">
          <h2 className="section-heading">Preferred Courses</h2>
          {[0,1,2].map(idx => (
            <div className="form-group" key={idx}>
              <label>Preferred Course {idx+1}*:</label>
              <select
                name={`preferredCourses.${idx}`}
                value={formData.preferredCourses[idx]}
                onChange={handleChange}
                className="form-select"
              >
                <option value="">Select a program</option>
                {allPrograms.map((program, index) => (
                  <option key={index} value={program}>
                    {program}
                  </option>
                ))}
              </select>
              {errors?.preferredCourses?.[idx] && <span className="error">{errors.preferredCourses[idx]}</span>}
            </div>
          ))}
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
}

export default SignUp;