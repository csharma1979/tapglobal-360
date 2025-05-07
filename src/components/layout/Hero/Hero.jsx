'use client';

import React from 'react';
import Link from 'next/link';
import './Hero.scss';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1>Transforming Global Payments</h1>
          <p>Innovative payment solutions for businesses worldwide</p>
          <Link href="/contact" className="cta-button">Get Started</Link>
        </div>
        <div className="experience-cards">
          <div className="card">
            <div className="card-content">
              <h3>Enterprise Strategy</h3>
              <p>Real-world experience</p>
              <Link href="/services/enterprise-strategy" className="read-more">READ MORE</Link>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <h3>Turn around management</h3>
              <p>Real-world experience</p>
              <Link href="/services/turnaround-management" className="read-more">READ MORE</Link>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <h3>Mergers and Acquisitions</h3>
              <p>Real-world experience</p>
              <Link href="/services/mergers-acquisitions" className="read-more">READ MORE</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;