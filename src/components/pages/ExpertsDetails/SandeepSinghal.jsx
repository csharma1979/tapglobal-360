import React from 'react';
// Import your SCSS file
import './sandeep-profile.scss'; // Make sure this path is correct

const SandeepSinghal = () => {
  return (
    <div className="container">
      {/* Header can be a separate component */}
      
      <div className="profile-container">
        {/* Profile Card */}
        <div className="profile-card">
          <img 
            src="/assets/sandeep.webp" 
            alt="Sandeep Singhal" 
            className="profile-card__image"
          />
          <h1 className="profile-card__name">SANDEEP SINGHAL</h1>
          <h2 className="profile-card__title">Chief Executive Officer</h2>
          <a 
            href="https://www.linkedin.com/in/sandeep-singhal123/" 
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
              With a distinguished career spanning over 27 years, Sandeep stands as a testament to transformational leadership in a global arena. His journey, marked by a relentless pursuit of excellence, began as an engineer at Halliburton Company, gradually ascending to coveted leadership roles including CEO of Steel Tubular Business, CEO of Flexible Packaging/Labels Plastics Business, Managing Director across 17 West African nations, and Venture Partner in Investment Banking.
            </p>
            
            <p>
              His geographical imprint extends across the Americas, Africa, Asia Pac, and the Middle East, demonstrating a flair for navigating complex, multicultural business landscapes. Sandeep's industry versatility encompasses the Chemicals, Plastics, Metals, Steel, and Oil & Gas sectors, showcasing a rare blend of technical acumen, strategic foresight, and financial prowess.
            </p>
            
            <p>
              A glance at Sandeep's leadership narrative reveals a consistent trajectory of overcoming adversity, driving business turnarounds, and delivering quantifiable financial results. Notable milestones include elevating EBITDA from -$11MM to $26MM in the Plastics business (2019 to 2021), and from $27MM to $121MM in the North American steel tubular business (2017 to 2019). His strategic oversight led to a remarkable 85% revenue growth in the US (2010), and a significant 115% surge in West Africa (2015).
            </p>
            
            <p>
              Sandeep's large-scale leadership acumen is highlighted through steering operations generating $840MM revenue with 1000+ personnel in North America, and a Plastics Manufacturing Business accruing $300M revenue with 560 personnel. His turn-around leadership materialized in orchestrating a remarkable recovery in the Plastics business from a -$11MM loss to $26MM EBITDA (2019 to 2021), and in the Canadian business from a $85M combined loss over six years to a 15% gross profit in 2012.
            </p>
            
            <p>
              In the realm of startup expertise, Sandeep initiated 21 profitable sub-product service lines in West Africa & US, fueling portfolio expansion in new territories. His risk management strategies have proven effective in culturally diverse and geopolitically complex regions, while his joint venture partnerships fostered stronger regional alliances in Ghana & Senegal.
            </p>
            
            <p>
              Leveraging his extensive financial acumen and strategic foresight, Sandeep adeptly positioned Jindal Films for both public (via SPAC) and private offerings, orchestrating a substantial $2 billion value proposition. This venture showcased his expertise in SPAC and private market navigation, from rigorous due diligence phases through to successful public offerings, further underscoring his financial sagacity and ability to drive robust investment strategies.
            </p>
            
            <p>
              Sandeep's value extends beyond corporate corridors. He serves on the advisory boards of tech-forward ventures in Oil & Gas, Healthcare, and Industrial sectors, sharing his seasoned insights to drive innovative strategies. His community involvement reflects a deep commitment to societal betterment, serving on boards focused on youth development, health, and education in Texas and Africa.
            </p>
            
            <p>
              In recognition of his exemplary leadership, Sandeep is a five-time recipient of the Maximized Valued Performance Award, celebrating his contributions to business growth, reliability, and people development. His educational background is equally illustrious, with an MBA from the University of Oklahoma, an Engineering degree from Madan Mohan Malaviya Engineering College, and executive leadership development from Texas A&M.
            </p>
          </div>
        </div>
      </div>
      
      {/* Footer can be a separate component */}
    </div>
  );
}

export default SandeepSinghal;