import React from 'react';
// Import your SCSS file
import './pankaj-profile.scss'; // Make sure this path is correct

const PankajGupta = () => {
  return (
    <div className="container">
      {/* Header can be a separate component */}
      
      <div className="profile-container">
        {/* Profile Card */}
        <div className="profile-card">
          <img 
            src="/assets/pankaj.webp" 
            alt="Sandeep Singhal" 
            className="profile-card__image"
          />
          <h1 className="profile-card__name">Pankaj Gupta</h1>
          <h2 className="profile-card__title">CTO Technology Leadership & Innovation</h2>
          <a 
            href="https://www.linkedin.com/in/pankajgupta73/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="profile-card__link"
          >
            LinkedIn Profile
          </a>
        </div>

        {/* About Section */}
        <div className="about-section">
          <h2 className="about-section__title">About the Expert</h2>
          
          <div className="about-section__content">
            <p>
              Pankaj brings 25+ years of experience in running and leading teams in Fortune 50 companies like Dell, EMC, Hewlett Packard Enterprise, Conexant etc. in the field of product management, product development, product marketing, Go-to-Market strategies in areas of data center infrastructure, semiconductor, software and system development. He has a proven track record of developing, delivering, launching, and scaling new products and solutions in the market.
            </p>
            
            <p>
              Most recently, he was leading a $2B data center infrastructure solution for Dell Technologies in Austin Texas headquarters as Director of Product Management ISG group. Prior to Dell, Pankaj was Global strategist of the Software Defined and Cloud group at Hewlett Packard Enterprise leading global Go-to-Market activities for $3B hyper-converged and converged infrastructure solutions.
            </p>
            
            <p>
              Additionally, Pankaj has spent a decade developing system and application software for broadband and networking solutions. He holds a Masters degree in Computer Science from New York University and a Masters of Business Administration from University of Texas.
            </p>
          </div>
        </div>
      </div>
      
      {/* Footer can be a separate component */}
    </div>
  );
}

export default PankajGupta;