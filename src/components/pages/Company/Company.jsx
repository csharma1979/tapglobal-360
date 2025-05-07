'use client';

import React from 'react';
// Fix the paths to point to the correct location
import Header from '@/components/layout/Header/Header';
import Footer from '@/components/layout/Footer/Footer';
import OurImpact from '@/components/OurImpact/OurImpact';
import Experts from '@/components/Experts/Experts';

import './Company.scss';

const Company = () => {
  return (
    <div className="company-page">
      <Header />
      <div className="company-banner">
        <div className="container">
          <h1>Our Company</h1>
          <p>Building Tomorrow's Solutions Today</p>
        </div>
      </div>
      <OurImpact />
      <Experts />
      
    </div>
  );
};

export default Company;