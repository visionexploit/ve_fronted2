import React, { useState, useEffect } from 'react';
import './Packages.css';

const Packages = () => {
  const [activePackage, setActivePackage] = useState('standard');
  const [isInView, setIsInView] = useState(false);

  // Observer for scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector('.packages-container');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const packages = [
    {
      id: 'starter',
      name: 'Lite Package',
      price: 'USD$349.49',
      priceDetail: 'per student',
      description: 'Basic educational consultation for students beginning their academic journey.',
      features: [
        'University applications & placements',
        'Visa application assistance',
        'Airport pickup',
        'Accommodation assistance',
        'University registration',
        'Residence permit application',
      ],
      recommended: false,
      color: '#10b981',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="package-icon">
          <path d="M12 6.25278V19.2528M12 6.25278C10.8321 5.47686 9.24649 5 7.5 5C5.75351 5 4.16789 5.47686 3 6.25278V19.2528C4.16789 18.4769 5.75351 18 7.5 18C9.24649 18 10.8321 18.4769 12 19.2528M12 6.25278C13.1679 5.47686 14.7535 5 16.5 5C18.2465 5 19.8321 5.47686 21 6.25278V19.2528C19.8321 18.4769 18.2465 18 16.5 18C14.7535 18 13.1679 18.4769 12 19.2528" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      id: 'standard',
      name: 'In Turkey Package',
      price: 'USD$399.99',
      priceDetail: 'per student',
      description: 'Comprehensive guidance for students already in Turkey seeking solid academic and career planning.',
      features: [
        'Airport pickup',
        'Accommodation assistance',
        'University registration',
        'Residence permit application assistance',
        'Documents authentication in Ankara',
        'Denklik/Equivalence Letter application assistance',
      ],
      recommended: false,
      color: '#3b82f6',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="package-icon">
          <path d="M4.5 12.75l6 6 9-13.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      id: 'premium',
      name: 'Premium',
      price: 'USD$599.99',
      priceDetail: 'per student',
      description: 'Elite consultation service with extensive support throughout the academic journey and full stack services.',
      features: [
        'University applications and placement',
        'Flight booking and itinerary',
        'Visa application Assistance',
        'Airport pickup',
        'Accommodation assistance',
        'University registration',
        'Residence permit application assistance',
        'Documents authentication in Ankara',
        'Denklik/Equivalence Letter application assistance',
        'Job searching',
      ],
      recommended: true,
      color: '#8b5cf6',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="package-icon">
          <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg>
      ),
    },
  ];

  return (
    <div className={`packages-container ${isInView ? 'in-view' : ''}`}>
      <div className="packages-wrapper">
        <div className="packages-header">
          <h2 className="packages-title">Our Consultation Packages</h2>
          <p className="packages-subtitle">
            Choose the right level of support for your educational journey with our customized consultation packages.
          </p>
          <div className="packages-divider"></div>
        </div>

        <div className="packages-grid">
          {packages.map((pkg, index) => (
            <div 
              key={pkg.id}
              className={`package-card ${activePackage === pkg.id ? 'package-active' : ''}`}
              onMouseEnter={() => setActivePackage(pkg.id)}
              style={{ 
                '--delay': `${index * 0.1}s`,
                '--accent-color': pkg.color
              }}
            >
              <div className="package-card-inner">
                {pkg.recommended && (
                  <div className="package-recommended-badge">
                    Most Popular
                  </div>
                )}
                <div className="package-header">
                  <div className="package-icon-wrapper" style={{ backgroundColor: pkg.color + '15' }}>
                    {pkg.icon}
                  </div>
                  <h3 className="package-name">{pkg.name}</h3>
                </div>
                <div className="package-content">
                  <div className="package-price-container">
                    <div className="package-price">{pkg.price}</div>
                    <div className="package-price-detail">{pkg.priceDetail}</div>
                  </div>
                  <p className="package-description">{pkg.description}</p>
                  <div className="package-features-heading">What's included:</div>
                  <ul className="package-features">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="package-feature-item">
                        <svg 
                          className="feature-check-icon" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M5 13l4 4L19 7" 
                          />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="package-footer">
                  <button className={`package-button ${activePackage === pkg.id ? 'package-button-active' : ''}`}>
                    Select {pkg.name} Package
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </div>
  );
};

export default Packages;