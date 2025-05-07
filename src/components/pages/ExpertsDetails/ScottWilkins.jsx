import React from 'react';
// Import your SCSS file
import './scott-profile.scss'; // Make sure this path is correct

const ScottWilkins = () => {
  return (
    <div className="container">
      {/* Header can be a separate component */}
      
      <div className="profile-container">
        {/* Profile Card */}
        <div className="profile-card">
          <img 
            src="/assets/scott.webp" 
            alt="Scott Wilkins" 
            className="profile-card__image"
          />
          <h1 className="profile-card__name">SCOTT WILKINS</h1>
          <h2 className="profile-card__title">Global CEO | Execution & Financial Results Driven | SPAC & M&A Strategist |Industrial Sector Veteran</h2>
          <a 
            href="https://www.linkedin.com/in/scott-wilkins-3b420162/" 
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
              Scott Wilkins is a distinguished Packaging Professional with a rich career spanning 30 years, specializing in Flexible Packaging. His expertise has been honed through a remarkable 27-year tenure at Mobil, ExxonMobil, and Jindal Films businesses, where he excelled in various roles encompassing Marketing, Technology, Sales, and Management. Scott is renowned for his ability to leverage his substantial commercial and application experience to deliver value-add solutions to converters and Consumer Packaged Goods (CPG) companies
            </p>
            
            <p>
              A key aspect of Scott's career has been his leadership in the cross-functional development and market launch of innovative packaging solutions, particularly in the food sector. He has played a pivotal role in introducing new packaging technologies across various food segments, including snacks, confections, bakery, and frozen novelties. These groundbreaking developments under his guidance have generated hundreds of millions in revenue, marking significant contributions to the industry.
            </p>
            
            <p>
              Additionally, Scott's ingenuity and technical expertise are evidenced by his holding of several patents related to film and packaging equipment solutions. Complementing his practical experience, he holds a Bachelor of Science degree in Package Engineering from Michigan State University, underlining his comprehensive understanding and academic grounding in the field.
            </p>
          </div>
        </div>
      </div>
      
      {/* Footer can be a separate component */}
    </div>
  );
}

export default ScottWilkins;