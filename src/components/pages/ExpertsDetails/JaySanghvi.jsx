import React from 'react';
// Import your SCSS file
import './jay-profile.scss'; // Updated path for Jay's profile

const JaySanghvi = () => {
  return (
    <div className="container">
      {/* Header can be a separate component */}
      
      <div className="profile-container">
        {/* Profile Card */}
        <div className="profile-card">
          <img 
            src="/assets/jay.webp"
            alt="Jay Sanghvi"
            className="profile-card__image"
          />
          <h1 className="profile-card__name">JAY SANGHVI</h1>
          <h2 className="profile-card__title">Supply Chain Management Professional</h2>
          <a
            href="https://www.linkedin.com/in/jay-sanghvi-816b35/"
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
              Jay Sanghvi stands out as a dynamic, results-oriented, and energetic supply chain management professional, boasting over 15 years of highly successful experience. His expertise lies in creating cost-effective operations within materials, purchasing, and supply chain management functions, particularly in multi-plant manufacturing environments. Jay is known for his proven track record of excellent performance in fast-paced organizations, demonstrating a unique blend of strategic vision and operational excellence.
            </p>
            
            <p>
              His ability to energize organizations at site, regional, and global levels is notable, especially in implementing continuous improvement programs that significantly reduce total supply chain costs. Jay excels in transforming start-up or existing organizations into high-performing entities through his adeptness in strategic planning and tactical execution.
            </p>
            
            <p>
              He has effectively integrated product transitions and outsourced supply chains to low-cost regions and countries, including the USA, Europe, Mexico, and Asia. His skills in handling diverse levels within organizations and cultural differences are exceptional. As an innovative and creative team leader, Jay has a remarkable track record of implementing best practices that contribute substantially to the bottom line.
            </p>
            
            <p>
              <strong>Specialties: AREAS OF EXPERTISE</strong>
              <ul>
                <li>Outstanding customer service record, High performance team builder</li>
                <li>Six Sigma, Lean Manufacturing (Blackbelt)</li>
                <li>Cost reduction (15% to 25%), Cycle time reduction (25% to 50%)</li>
                <li>Inventory reductions (30% to 75%)</li>
                <li>Strategic planning (S & OP) & Procurement (TCO, Negotiation skills)</li>
                <li>Optimize Supply chain & Replenishment Programs, Improved cash flow</li>
                <li>Global Supply Chain, E-Commerce, Free Market</li>
                <li>Supply Chain Transition to LCC regions/countries</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
      
      {/* Footer can be a separate component */}
    </div>
  );
}

export default JaySanghvi;