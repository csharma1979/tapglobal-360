'use client';

import React from 'react';
import Image from 'next/image';
import './Features.scss';

const Features = () => {
  const features = [
    {
      title: "Strategic Planning",
      description: "Comprehensive business strategy development and execution",
      icon: "/images/features/strategy.svg"
    },
    {
      title: "Digital Innovation",
      description: "Cutting-edge digital solutions for business transformation",
      icon: "/images/features/innovation.svg"
    },
    {
      title: "Global Expertise",
      description: "International experience with local market understanding",
      icon: "/images/features/global.svg"
    },
    {
      title: "Industry Knowledge",
      description: "Deep expertise across multiple industry sectors",
      icon: "/images/features/industry.svg"
    }
  ];

  return (
    <section className="features">
      <div className="features-container">
        <h2>Our Features</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={64}
                  height={64}
                  quality={90}
                />
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;