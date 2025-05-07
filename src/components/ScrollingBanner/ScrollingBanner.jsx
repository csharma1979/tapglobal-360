'use client';

import React from 'react';
import Image from 'next/image';
import './ScrollingBanner.scss';

const ScrollingBanner = () => {
  const bannerItems = [
    {
      title: "Digital Transformation",
      description: "Revolutionizing businesses through technology",
      image: "/images/banner1.jpg"
    },
    {
      title: "Innovation Hub",
      description: "Creating tomorrow's solutions today",
      image: "/images/banner2.jpg"
    },
    {
      title: "Global Reach",
      description: "Connecting businesses worldwide",
      image: "/images/banner3.jpg"
    }
  ];

  return (
    <div className="scrolling-banner">
      <div className="banner-container">
        {bannerItems.map((item, index) => (
          <div key={index} className="banner-item">
            <div className="banner-content">
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              <button className="cta-button">Learn More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollingBanner;