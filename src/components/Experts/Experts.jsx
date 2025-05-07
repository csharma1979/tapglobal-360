'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './Experts.scss';

const Experts = () => {
  const experts = [
    {
      name: "SANDEEP SINGHAL",
      designation: "TAP Global CEO",
      description: "Execution & Financial Results Driven | SPAC & M&A Strategist | Industrial Sector Veteran",
      image: "/assets/sandeep.webp",
      linkedin: "https://www.linkedin.com/in/sandeep-singhal123/",
      profilePath: "/sandeep-singhal"
    },
    {
      name: "Scott Wilkins",
      designation: "Global CEO",
      description: "Execution & Financial Results Driven | SPAC & M&A Strategist | Industrial Sector Veteran",
      image: "/assets/scott.webp",
      linkedin: "https://www.linkedin.com/in/scott-wilkins-3b420162/",
      profilePath: "/scott-wilkins"
    },
    {
      name: "Roger Patry",
      designation: "Global CEO",
      description: "Execution & Financial Results Driven | SPAC & M&A Strategist | Industrial Sector Veteran",
      image: "/assets/roger.webp",
      linkedin: "https://www.linkedin.com/in/roger-patry-3b202661/",
      profilePath: "/roger-patry"
    },
    {
      name: "Pankaj Gupta",
      designation: "CTO",
      description: "Technology Leadership & Innovation",
      image: "/assets/pankaj.webp",
      linkedin: "https://www.linkedin.com/in/pankajgupta73/",
      profilePath: "/pankaj-gupta"
    },
    {
      name: "Jay Sanghvi",
      designation: "Strategic Planning Lead",
      description: "Six Sigma Black Belt | Strategic Planner | Supply Chain Expert", 
      image: "/assets/jay.webp",
      linkedin: "https://www.linkedin.com/in/jay-sanghvi-816b35/", 
      profilePath: "/jay-sanghvi"
    }
  ];
  
  return (
    <section className="experts">
      <div className="container">
        <div className="experts-header">
          <h2>Leadership Team</h2>
          <p>Driving Innovation and Excellence</p>
        </div>
        <div className="experts-grid">
          {experts.map((expert, index) => (
            <div className="expert-card" key={index}>
              <div className="expert-image">
                <Image
                  src={expert.image}
                  alt={expert.name}
                  width={300}
                  height={300}
                  quality={90}
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="expert-info">
                <h3>{expert.name}</h3>
                <h4>{expert.designation}</h4>
                <p>{expert.description}</p>
                <div className="expert-links">
                  <Link
                    href={expert.profilePath}
                    className="profile-link"
                  >
                    View Profile
                  </Link>
                  <Link
                    href={expert.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="linkedin-icon-link"
                    aria-label={`LinkedIn profile of ${expert.name}`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experts;