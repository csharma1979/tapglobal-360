'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../../layout/Header/Header';
import Footer from '../../layout/Footer/Footer';
import './Home.scss';

const Home = () => {
  // Sliding Banner Component
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeFaq, setActiveFaq] = useState(null); // State for active FAQ
  const [currentStrategyIndex, setCurrentStrategyIndex] = useState(0);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const strategyListRef = useRef(null);
  const serviceListRef = useRef(null);

  const banners = [
    '/assets/packTBanner.webp', // PackTransform banner
    '/assets/energyTBanner.webp', // EnergiesTransform banner
    '/assets/homeSBanner.webp', // A2Z Home Solutions banner
    '/assets/taptechBanner.webp'  // TAP Tech Capital banner
  ];
  const services = [
    {
      image: '/assets/service1.webp',
      title: 'Digital Transformation',
      description: 'Modernize your business with cutting-edge digital solutions to stay competitive in today\'s market.',
      link: '/digital-transformation'
    },
    {
      image: '/assets/service2.webp',
      title: 'Enterprise Strategy',
      description: 'Develop comprehensive business strategies aligned with your organization\'s goals and market demands.',
      link: '/enterprise-strategy'
    },
    {
      image: '/assets/service3.webp',
      title: 'Mergers & Acquisitions',
      description: 'Navigate complex M&A processes with expert guidance to maximize value and minimize risks.',
      link: '/mergers-acquisitions'
    },
    {
      image: '/assets/service4.webp',
      title: 'Turnaround Management',
      description: 'Transform struggling operations into thriving businesses through strategic intervention and restructuring.',
      link: '/turnaround-management'
    }
  ];
  const experts = [
    {
      name: "Sandeep Singhal",
      role: "M&A Specialist",
      image: "/assets/sandeep.webp",
      profilePath: "/sandeep-singhal"
    },
   
    {
      name: "Roger Patry",
      role: "Enterprise Solutions",
      image: "/assets/roger.webp",
      profilePath: "/roger-patry"
    },
   
    {
      name: "Scott Wilkins",
      role: "Turnaround Expert",
      image: "/assets/scott.webp",
      profilePath: "/scott-wilkins"
    },
    {
      name: "Jay Sanghvi",
      role: "Growth Strategist",
      image: "/assets/jay.webp",
      profilePath: "/jay-sanghvi"
    },
    {
      name: "Pankaj Gupta",
      role: "Digital Strategy",
      image: "/assets/pankaj.webp",
      profilePath: "/pankaj-gupta"
    },

  ];

  const strategies = [
    {
      title: "Practical Execution",
      description: "We prioritize practicality in our strategies. Our recommendations are straightforward, clear, and ready for immediate implementation."
    },
    {
      title: "Direct and Effective Solutions",
      description: "We offer solutions that are direct and effective. Our approach cuts through complexity, focusing on what can be achieved quickly and efficiently."
    },
    {
      title: "Rapid Implementation",
      description: "We understand the need for speed in today's business environment. Our strategies are designed for rapid implementation, ensuring that your business can move forward without delay."
    },
    {
      title: "Result-Oriented Focus",
      description: "Every strategy we develop is with a single goal in mind: tangible results. We focus on what works, ensuring that our clients see real benefits from our partnership."
    },
    {
      title: "Hands-On Support",
      description: "We offer more than advice; we provide hands-on support to ensure strategies are executed successfully. Our team works closely with you to ensure seamless execution and real impact."
    }
  ];

  const faqs = [
    {
      question: "What industries do you specialize in?",
      answer: "Our expertise spans multiple sectors including technology, healthcare, financial services, manufacturing, and consumer goods. Our specialized teams bring deep industry knowledge and insights to address sector-specific challenges."
    },
    {
      question: "How do you measure success?",
      answer: "We define success by the tangible business outcomes we deliver for our clients. This includes revenue growth, cost savings, operational efficiency, enhanced market position, and long-term sustainable value creation."
    },
    {
      question: "What is your geographic reach?",
      answer: "With a presence in 68 markets worldwide, we deliver consistent, high-quality service to clients across North America, Europe, Asia-Pacific, Latin America, and emerging markets."
    },
    {
      question: "What is your approach to client engagements?",
      answer: "We begin with a thorough assessment of your business needs, develop customized strategies aligned with your objectives, implement solutions with minimal disruption, and measure outcomes against defined metrics."
    }
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === banners.length - 1 ? 0 : prevSlide + 1));
    }, 5000); // Change slide every 5 seconds
  
    return () => clearInterval(slideInterval);
  }, []);

  // Strategy cards auto-scroll logic
  useEffect(() => {
    const strategyInterval = setInterval(() => {
      scrollStrategies('next');
    }, 5000);
    
    return () => clearInterval(strategyInterval);
  }, [currentStrategyIndex]);

  // Service cards auto-scroll logic
  useEffect(() => {
    const serviceInterval = setInterval(() => {
      scrollServices('next');
    }, 6000);
    
    return () => clearInterval(serviceInterval);
  }, [currentServiceIndex]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + banners.length) % banners.length);
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const scrollStrategies = (direction) => {
    const maxIndex = strategies.length - 2; // Show 2 cards at a time
    
    if (direction === 'next') {
      setCurrentStrategyIndex(prevIndex => 
        prevIndex >= maxIndex ? 0 : prevIndex + 1
      );
    } else {
      setCurrentStrategyIndex(prevIndex => 
        prevIndex <= 0 ? maxIndex : prevIndex - 1
      );
    }
  };

  const scrollServices = (direction) => {
    const maxIndex = services.length - 2; // Show 2 cards at a time
    
    if (direction === 'next') {
      setCurrentServiceIndex(prevIndex => 
        prevIndex >= maxIndex ? 0 : prevIndex + 1
      );
    } else {
      setCurrentServiceIndex(prevIndex => 
        prevIndex <= 0 ? maxIndex : prevIndex - 1
      );
    }
  };

  return (
    <div className="home-container">
      <Header />
      
      {/* Banner Section */}
      {/* Banner Section */}
<div className="banner-section">
  <div className="slider-container">
    {banners.map((banner, index) => (
      <div
        key={index}
        className={`slide ${index === currentSlide ? 'active' : ''}`}
      >
        <Image
          src={banner}
          alt={`Banner ${index + 1}`}
          fill
          priority={index === 0}
          quality={100}
          style={{ objectFit: 'cover' }}
        />
        <div className="banner-content">
          {/* Dynamic titles and taglines based on slide index */}
          {index === 0 && (
            <>
              <h1>PackTransform</h1>
              <h5>Innovative and sustainable packaging solutions tailored for a wide range of industries.</h5>
              <a href="https://packtransform.com" target="_blank" rel="noopener noreferrer" className="cta-button">Know More</a>
            </>
          )}
          {index === 1 && (
            <>
              <h1>EnergiesTransform</h1>
              <h5>Cutting-edge energy solutions and efficiency strategies that empower businesses for a greener future.</h5>
              <a href="https://energiestransform.com" target="_blank" rel="noopener noreferrer" className="cta-button">Know More</a>
            </>
          )}
          {index === 2 && (
            <>
              <h1>A2Z Home Solutions</h1>
              <h5>Comprehensive home improvement and maintenance services—trusted support, from start to finish.</h5>
              <a href="https://a2zhome-solutions.com" target="_blank" rel="noopener noreferrer" className="cta-button">Know More</a>
            </>
          )}
          {index === 3 && (
            <>
              <h1>TAP Tech Capital</h1>
              <h5>Fueling tech innovation through expert software development and capital growth strategies.</h5>
              <a href="https://taptechcapital.com" target="_blank" rel="noopener noreferrer" className="cta-button">Know More</a>
            </>
          )}
        </div>
      </div>
    ))}

    {/* Navigation arrows */}
    <button
      onClick={prevSlide}
      className="slider-arrow slider-arrow-left"
      aria-label="Previous slide"
    >
      &#10094;
    </button>
    
    <button
      onClick={nextSlide}
      className="slider-arrow slider-arrow-right"
      aria-label="Next slide"
    >
      &#10095;
    </button>

    {/* Indicator dots */}
    <div className="slider-dots">
  {banners.map((_, index) => (
    <button
      key={index}
      onClick={() => goToSlide(index)}
      className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
      aria-label={`Go to slide ${index + 1}`}
    ></button>  
  ))}

</div>


  </div>
</div>
      
      {/* Services Section - Updated with carousel */}
      <section className="services-section">
        <div className="container">
          <div className="section-title">
            <h2>Our Services</h2>
            <p>Comprehensive solutions to transform your business</p>
          </div>
          
          <div className="services-carousel-container">
            <button 
              className="carousel-arrow carousel-arrow-left" 
              onClick={() => scrollServices('prev')}
              aria-label="Previous services"
            >
              &#10094;
            </button>
            
            <div className="services-viewport">
              <div 
                className="services-list" 
                ref={serviceListRef}
                style={{ transform: `translateX(-${currentServiceIndex * 50}%)` }}
              >
                {services.map((service, index) => (
                  <div className="service-card" key={index}>
                    <Link href={service.link}>
                      <div className="service-image-container">
                        <Image
                          src={service.image}
                          alt={service.title}
                          width={400}
                          height={300}
                          quality={90}
                          style={{ objectFit: 'cover' }}
                        />
                        <div className="service-overlay">
                          <h3 className="service-title">{service.title}</h3>
                          <p className="service-subtitle">{service.description}</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            
            <button 
              className="carousel-arrow carousel-arrow-right" 
              onClick={() => scrollServices('next')}
              aria-label="Next services"
            >
              &#10095;
            </button>
            
            <div className="carousel-indicators">
              {services.map((_, index) => (
                index <= services.length - 2 && (
                  <button
                    key={index}
                    className={`carousel-indicator ${currentServiceIndex === index ? 'active' : ''}`}
                    onClick={() => setCurrentServiceIndex(index)}
                    aria-label={`Go to service group ${index + 1}`}
                  ></button>
                )
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TAP Global Promise Section */}
      <section className="promise-section">
        <div className="container">
          <div className="section-title">
            <h2>Practical Strategies, Real Results: The TAP Global Promise</h2>
          </div>
          
          <div className="strategies-carousel-container">
            <button 
              className="carousel-arrow carousel-arrow-left" 
              onClick={() => scrollStrategies('prev')}
              aria-label="Previous strategies"
            >
              &#10094;
            </button>
            
            <div className="strategies-viewport">
              <div 
                className="strategies-list" 
                ref={strategyListRef}
                style={{ transform: `translateX(-${currentStrategyIndex * 50}%)` }}
              >
                {strategies.map((strategy, index) => (
                  <div className="strategy-card" key={index}>
                    <h3>{strategy.title}</h3>
                    <p>{strategy.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <button 
              className="carousel-arrow carousel-arrow-right" 
              onClick={() => scrollStrategies('next')}
              aria-label="Next strategies"
            >
              &#10095;
            </button>
            
            <div className="carousel-indicators">
              {strategies.map((_, index) => (
                index <= strategies.length - 2 && (
                  <button
                    key={index}
                    className={`carousel-indicator ${currentStrategyIndex === index ? 'active' : ''}`}
                    onClick={() => setCurrentStrategyIndex(index)}
                    aria-label={`Go to strategy group ${index + 1}`}
                  ></button>
                )
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experts Section - Moved up before Experience Metrics */}
      <section className="experts-section">
  <div className="container">
    <div className="section-title">
      <h2>Our Experts</h2>
    </div>
    <div className="experts-grid">
      {experts.map((expert, index) => {
        // Extract name and subtitle from the data
        const name = expert.name;
        
        // Get the subtitle based on the name
        let subtitle = "";
        if (name === "Roger" || name.includes("Roger")) {
          subtitle = "Visionary Leader in Innovative Packaging Solutions";
        } else if (name === "Scott" || name.includes("Scott")) {
          subtitle = "Driving Growth Through Strategic Business Development";
        } else if (name === "Sandeep" || name.includes("Sandeep")) {
          subtitle = "Architect of Transformative Strategy & Market Expansion";
        } else if (name === "Jay Sang" || name.includes("Jay Sang")) {
          subtitle = "Expert in Global Supply Chain, Operations & Strategic Planning";
        } else if (name === "Pankaj" || name.includes("Pankaj")) {
          subtitle = "Champion of Digital Transformation at TTC";
        }
        
        return (
          <div className="expert-card" key={index}>
            <div className="img-container">
              {index === 0 ? (
                <Image
                  src={expert.image}
                  alt={expert.name}
                  width={160}
                  height={160}
                  quality={90}
                  style={{ objectFit: 'cover', borderRadius: '50%' }}
                />
              ) : (
                <img src={expert.image} alt={expert.name} />
              )}
            </div>
            <div className="expert-info">
              <Link href={expert.profilePath}>
                <h3 className="expert-name">{expert.name}</h3>
              </Link>
              <p className="subtitle">{subtitle}</p>
              
            </div>
          </div>
        );
      })}
    </div>
  </div>
</section>

{/* Our Industries Section */}
{/* Industries Section */}
{/* Industries Section */}
<section className="industries-section">
  <div className="container">
    <div className="section-title">
      <h2>Our Group Of Companies</h2>
    </div>
    <div className="industries-grid">
      <a href="https://packtransform.com" target="_blank" rel="noopener noreferrer" className="industry-card">
        <div className="card-image-container">
          <Image
            src="/assets/packtransform.webp"
            alt="PackTransform"
            fill
            quality={90}
            style={{ objectFit: 'cover' }}
          />
          <div className="overlay"></div>
        </div>
        <div className="card-content">
          <h3>PackTransform</h3>
          <p>Delivering innovative and sustainable packaging solutions for diverse industries.</p>
          <span className="industry-link">🌐 packtransform.com</span>
        </div>
      </a>
      
      <a href="https://energiestransform.com" target="_blank" rel="noopener noreferrer" className="industry-card">
        <div className="card-image-container">
          <Image
            src="/assets/energiestransform.webp"
            alt="EnergiesTransform"
            fill
            quality={90}
            style={{ objectFit: 'cover' }}
          />
          <div className="overlay"></div>
        </div>
        <div className="card-content">
          <h3>EnergiesTransform</h3>
          <p>Empowering businesses with cutting-edge energy solutions and efficiency strategies.</p>
          <span className="industry-link">🌐 energiestransform.com</span>
        </div>
      </a>
      
      <a href="https://a2zhome-solutions.com" target="_blank" rel="noopener noreferrer" className="industry-card">
        <div className="card-image-container">
          <Image
            src="/assets/a2zhome.webp"
            alt="A2Z Home Solutions"
            fill
            quality={90}
            style={{ objectFit: 'cover' }}
          />
          <div className="overlay"></div>
        </div>
        <div className="card-content">
          <h3>A2Z Home Solutions</h3>
          <p>Providing end-to-end home improvement and maintenance services.</p>
          <span className="industry-link">🌐 a2zhome-solutions.com</span>
        </div>
      </a>
      
      <a href="https://taptechcapital.com" target="_blank" rel="noopener noreferrer" className="industry-card">
        <div className="card-image-container">
          <Image
            src="/assets/taptech.webp"
            alt="TAP Tech Capital"
            fill
            quality={90}
            style={{ objectFit: 'cover' }}
          />
          <div className="overlay"></div>
        </div>
        <div className="card-content">
          <h3>TAP Tech Capital</h3>
          <p>Accelerating tech innovation through software development and capital raising support.</p>
          <span className="industry-link">🌐 taptechcapital.com</span>
        </div>
      </a>
    </div>
  </div>
</section>
{/* Experience Metrics Section */}


      {/* Experience Metrics Section - Updated with new metrics */}
      <section className="metrics-section">
        <div className="container">
          <h2>Our Combined Experience</h2>
          <div className="metrics-grid">
            <div className="metric-item">
              <h3>$990M</h3>
              <p>Revenue growth</p>
            </div>
            <div className="metric-item">
              <h3>$348M</h3>
              <p>EBIDTA</p>
            </div>
            <div className="metric-item">
              <h3>68</h3>
              <p>Markets</p>
            </div>
          </div>
        </div>
      </section>

      {/* M&A Transactions Section - New section added */}
      <section className="ma-transactions-section">
        <div className="container">
          <div className="section-title">
            <h2>M&A Transactions</h2>
          </div>
          <div className="ma-content">
            <p>Our dedicated M&A team has successfully executed transactions across diverse industries, 
            helping clients maximize value through strategic acquisitions, mergers, and divestitures. 
            We provide end-to-end support throughout the transaction lifecycle, from opportunity 
            identification and valuation to due diligence, negotiation, and post-merger integration.</p>
            
            <div className="ma-services-grid">
              <div className="ma-service-item">
                <h3>Acquisition Strategy</h3>
                <p>Identifying optimal targets and developing comprehensive acquisition strategies.</p>
              </div>
              <div className="ma-service-item">
                <h3>Due Diligence</h3>
                <p>Thorough financial, operational, and strategic analysis of target companies.</p>
              </div>
              <div className="ma-service-item">
                <h3>Transaction Support</h3>
                <p>End-to-end guidance through the complex M&A process.</p>
              </div>
              <div className="ma-service-item">
                <h3>Post-Merger Integration</h3>
                <p>Ensuring successful integration to maximize value realization.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Updated with new FAQ content */}
      <section className="faq-section">
        <div className="container">
          <div className="section-title">
            <h2>Frequently Asked Questions</h2>
            <p>Get answers to common questions about our services and approach</p>
          </div>
          
          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`faq-item ${activeFaq === index ? 'active' : ''}`}
                onClick={() => toggleFaq(index)}
              >
                <div className="faq-question">
                  <h3>{faq.question}</h3>
                  <div className="faq-toggle">
                    <span className="plus">+</span>
                    <span className="minus">−</span>
                  </div>
                </div>
                <div className="faq-answer" style={{ maxHeight: activeFaq === index ? '500px' : '0' }}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Kept as is */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Transform Your Enterprise?</h2>
            <p>Let's collaborate to drive innovation and achieve sustainable growth for your organization.</p>
            <div className="cta-buttons">
              <Link href="/contact" className="primary-button">Contact Us</Link>
              <Link href="/services" className="secondary-button">Explore Services</Link>
            </div>
          </div>
        </div>
      </section>
    
      
     
    </div>
  );
};

export default Home;