import React from 'react';
// Import your SCSS file
import './roger-profile.scss'; // Make sure this path is correct

const RogerPatry = () => {
  return (
    <div className="container">
      {/* Header can be a separate component */}
      
      <div className="profile-container">
        {/* Profile Card */}
        <div className="profile-card">
          <img 
            src="/assets/roger.webp" 
            alt="Roger Patry" 
            className="profile-card__image"
          />
          <h1 className="profile-card__name">ROGER PATRY</h1>
          <h2 className="profile-card__title">Product Manager | Sales Specialist | Marketing Expert</h2>
          <a 
            href="https://www.linkedin.com/in/roger-patry-3b202661/" 
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
              Roger Patry is an accomplished Product Manager with nearly 12 years at Jindal Films Americas LLC, building on over 30 years of experience in the manufacturing industry. His extensive background spans multiple roles including Commercial Director and LAR Sales Manager at Jindal Films, demonstrating his versatility and progressive leadership in the sector.
            </p>
            
            <p>
              Prior to joining Jindal Films, Roger spent 23 years at ExxonMobil in various Sales and Marketing roles across multiple locations including Vancouver, Toronto, Dallas, and Rochester. His early career includes 8 years in Technical roles at The Goodyear Tire & Rubber Company, providing him with a strong technical foundation that complements his commercial expertise.
            </p>
            
            <p>
              Roger is highly regarded for his skills in Key Account Management and International Sales, earning significant endorsements from his colleagues at ExxonMobil. His educational background includes a BASc in Chemical Engineering from the University of Toronto, equipping him with the technical knowledge that has supported his successful career in product management and sales leadership.
            </p>
          </div>
        </div>
      </div>
      
      {/* Footer can be a separate component */}
    </div>
  );
}

export default RogerPatry;