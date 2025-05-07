'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './Header.scss';

const Header = () => {
  const [showServices, setShowServices] = useState(false);
  
  const services = [
    {
      title: "Digital Transformation",
      icon: "💻",
      path: "/digital-transformation"
    },
    {
      title: "Enterprise Strategy",
      icon: "📈",
      path: "/enterprise-strategy"
    },
    {
      title: "Mergers & Acquisitions",
      icon: "🤝",
      path: "/mergers-acquisitions"
    },
    {
      title: "Turnaround Management",
      icon: "⚡",
      path: "/turnaround-management"
    }
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link href="/" className="nav-logo">
          <Image
            src="/logo2.webp"
            alt="TAP Global"
            width={150}
            height={50}
            quality={90}
            className="logo-image"
            style={{ objectFit: 'contain' }}
          />
        </Link>
        <div className="nav-links">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/company" className="nav-link">Company</Link>
          <div  
            className="nav-item dropdown"  
            onMouseEnter={() => setShowServices(true)}  
            onMouseLeave={() => setShowServices(false)}  
          >  
            <span className="nav-link">
              Services
              <span className="dropdown-icon">▾</span>
            </span>  
            {showServices && (  
              <div className="dropdown-menu">  
                {services.map((service, index) => (  
                  <Link  
                    key={index}
                    href={service.path}
                    className="dropdown-item"
                  >
                    <span className="service-icon">{service.icon}</span>
                    <h4>{service.title}</h4>
                  </Link>
                ))}
              </div>  
            )}  
          </div>  
          <Link href="/blog" className="nav-link">Blog</Link>
          <Link href="/contact" className="nav-link">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;