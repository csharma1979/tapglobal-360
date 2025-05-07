'use client';

import React from 'react';
import Link from 'next/link';
import './BusinessInfo.scss';

const BusinessInfo = () => {
  return (
    <section className="business-info">
      <div className="container">
        <div className="info-grid">
          <div className="info-card">
            <div className="card-content">
              <h2>Tap Global</h2>
              <p>Tap Global is a leading financial technology company that provides innovative solutions for businesses worldwide. Our expertise spans across multiple sectors, helping organizations transform and grow in the digital age.</p>
            </div>
          </div>
          <div className="info-card">
            <div className="card-content">
              <h3>Our Business Ventures</h3>
              <ul>
                <li>
                  <h4>Tap Payments</h4>
                  <p>Leading payment gateway solutions</p>
                  <Link 
                    href="https://tappayments.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Visit Website →
                  </Link>
                </li>
                <li>
                  <h4>Tap Remittance</h4>
                  <p>International money transfer services</p>
                  <Link 
                    href="https://tapremit.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Visit Website →
                  </Link>
                </li>
                <li>
                  <h4>Tap Capital</h4>
                  <p>Investment and financial services</p>
                  <Link 
                    href="https://tapcapital.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Visit Website →
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessInfo;