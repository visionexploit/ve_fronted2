import React, { useState, useEffect } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaBook, FaChevronDown } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import './ContactInfoModal.css';

const ContactInfoModal = ({ show, onClose }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    specialization: ''
  });

  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState({ flag: '🇹🇷', code: '+90', name: 'Turkey' });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  // Function to convert country code to flag emoji
  const countryToFlag = (countryCode) => {
    if (!countryCode) return '🏳️';
    try {
      const codePoints = countryCode
        .toUpperCase()
        .split('')
        .map(char => 127397 + char.charCodeAt(0));
      const flag = String.fromCodePoint(...codePoints);
      console.log(`Generated flag for ${countryCode}: ${flag}`); // Debug log
      return flag;
    } catch (error) {
      console.error(`Error generating flag for ${countryCode}:`, error);
      return '🏳️';
    }
  };

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all?fields=name,flags,idd,cca2');
        const data = await response.json();
        
        // Debug log for raw API response
        console.log('Raw API response sample:', data.slice(0, 2));
        
        const formattedCountries = data
          .filter(country => country.idd.root)
          .map(country => {
            const flag = countryToFlag(country.cca2);
            const formattedCountry = {
              flag,
              code: country.idd.root + (country.idd.suffixes?.[0] || ''),
              name: country.name.common
            };
            // Debug log for each country
            console.log(`Formatted country: ${formattedCountry.name}`, formattedCountry);
            return formattedCountry;
          })
          .sort((a, b) => a.name.localeCompare(b.name));

        // Debug log for final formatted countries
        console.log('Final formatted countries sample:', formattedCountries.slice(0, 5));

        // Set initial country to Turkey
        const turkey = formattedCountries.find(c => c.name === 'Turkey');
        if (turkey) {
          console.log('Setting Turkey as initial country:', turkey);
          setSelectedCountry(turkey);
        }

        setCountries(formattedCountries);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    fetchCountries();
  }, []);

  // Initialize EmailJS with the correct configuration
  useEffect(() => {
    emailjs.init({
      publicKey: "alAxjKER4MhJVaXbH",
      limitRate: true,
      blockHeadless: false,
      blockListElements: false
    });
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      const templateParams = {
        from_name: form.name,
        from_email: form.email,
        phone_number: `${selectedCountry.code} ${form.phone}`,
        specialization: form.specialization,
        reply_to: form.email
      };

      const response = await emailjs.send(
        'service_cif2igo', // Your Service ID
        'template_h0tspza', // Your Template ID
        templateParams
      );

      if (response.status === 200) {
        setSubmitStatus({
          type: 'success',
          message: 'Registration successful! We will contact you soon.'
        });
        setForm({ name: '', email: '', phone: '', specialization: '' });
        setTimeout(() => { onClose(); }, 2000);
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus({
        type: 'error',
        message: error.text || 'Failed to send registration. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const filteredCountries = countries.filter(country => 
    country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    country.code.includes(searchTerm)
  );

  if (!show) return null;

  return (
    <div className="contact-modal-overlay">
      <div className="contact-modal">
        <button className="contact-modal-close" onClick={onClose}>×</button>
        <h2 className="contact-modal-title">Start Your University Journey with VisionExploit</h2>
        <form onSubmit={handleSubmit}>
          <div className="contact-input-group">
            <FaUser className="contact-input-icon" />
            <input
              type="text"
              name="name"
              placeholder="Your full name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="contact-input-group">
            <FaEnvelope className="contact-input-icon" />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="contact-input-group phone-input-group">
            <div className="country-selector">
              <button 
                type="button" 
                className="country-selector-button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <span className="country-flag" role="img" aria-label={selectedCountry.name}>
                  {selectedCountry.flag}
                </span>
                <span className="country-code">{selectedCountry.code}</span>
                <FaChevronDown className="dropdown-icon" />
              </button>
              {isDropdownOpen && (
                <div className="country-dropdown">
                  <input
                    type="text"
                    placeholder="Search country..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="country-search"
                  />
                  <div className="country-list">
                    {filteredCountries.map(country => (
                      <div
                        key={country.code}
                        className="country-option"
                        onClick={() => {
                          console.log('Selected country:', country); // Debug log
                          setSelectedCountry(country);
                          setIsDropdownOpen(false);
                          setSearchTerm('');
                        }}
                      >
                        <span className="country-flag" role="img" aria-label={country.name}>
                          {country.flag}
                        </span>
                        <span className="country-name">{country.name}</span>
                        <span className="country-code">{country.code}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <input
              type="tel"
              name="phone"
              placeholder="Your phone number"
              value={form.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="contact-input-group">
            <FaBook className="contact-input-icon" />
            <input
              type="text"
              name="specialization"
              placeholder="Your major"
              value={form.specialization}
              onChange={handleChange}
              required
            />
          </div>
          {submitStatus.message && (
            <div className={`submit-status ${submitStatus.type}`}>
              {submitStatus.message}
            </div>
          )}
          <button 
            type="submit" 
            className="contact-modal-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Register Now'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactInfoModal;
