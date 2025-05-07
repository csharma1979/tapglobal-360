'use client';

import Link from 'next/link';
import Image from 'next/image';
import Header from '../../layout/Header/Header';
import Footer from '../../layout/Footer/Footer';
import './Services.scss';

const Services = () => {
  const services = [
    {
      title: "Digital Transformation",
      description: "Modernize your business with cutting-edge digital solutions",
      path: "/digital-transformation", 
      image: "/assets/service1.webp"
    },
    {
      title: "Enterprise Strategy",
      description: "Strategic planning and execution for business growth",
      path: "/enterprise-strategy",
      image: "/assets/service2.webp"
    },
    {
      title: "Mergers & Acquisitions",
      description: "Expert guidance through M&A processes",
      path: "/mergers-acquisitions",
      image: "/assets/service3.webp"
    },
    {
      title: "Turnaround Management",
      description: "Revitalize and transform underperforming businesses",
      path: "/turnaround-management",
      image: "/assets/service4.webp"
    }
  ];

  return (
    <>
      <Header />
      <div className="service-page">
        <div className="service-banner-center">
          <div className="container">
            <h2>Comprehensive Solutions for Your Business Needs</h2>
          </div>
        </div>
        
        <div className="service-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="card-image">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={400}
                  height={300}
                  quality={90}
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="card-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link href={service.path}>Learn More</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
     
    </>
  );
};

export default Services;