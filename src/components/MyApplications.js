import React from 'react';
import './MyApplications.css';

function MyApplications() {
  return (
    <div className="my-applications-container">
      <h1 className="page-title">My Applications</h1>
      
      <div className="applications-list">
        {/* Application cards will be dynamically rendered here */}
        <div className="application-card">
          <div className="application-header">
            <h2>Application #1</h2>
            <span className="status pending">Pending</span>
          </div>
          
          <div className="application-details">
            <div className="detail-row">
              <span className="label">Submitted:</span>
              <span className="value">2024-03-15</span>
            </div>
            <div className="detail-row">
              <span className="label">Type:</span>
              <span className="value">Student Visa</span>
            </div>
            <div className="detail-row">
              <span className="label">Status:</span>
              <span className="value">Under Review</span>
            </div>
          </div>
          
          <div className="application-actions">
            <button className="action-button view">View Details</button>
            <button className="action-button update">Update</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyApplications; 