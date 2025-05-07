'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../../layout/Header/Header';
import Footer from '../../layout/Footer/Footer';
import './DigitalTransformation.scss';

const DigitalTransformation = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    if (activeFaq === index) {
      setActiveFaq(null);
    } else {
      setActiveFaq(index);
    }
  };

  return (
    <div className="digital-transformation">
      <Header />
      
      <div className="service-banner">
        <div className="container">
          <h1>Digital Transformation</h1>
          <p>Revolutionize your business with cutting-edge digital solutions</p>
        </div>
      </div>

      <div className="service-content">
        <div className="container">
          {/* First section */}
          <div className="section-content">
            <div className="service-text">
              <h2>Core Digital Solutions</h2>
              <p>We help organizations embrace digital innovation to enhance operational efficiency, improve customer experience, and drive sustainable growth in today's rapidly evolving business landscape.</p>
              <ul>
                <li>Digital Strategy Development: Custom roadmaps aligned with your business objectives</li>
                <li>Process Automation: Streamline operations with intelligent automation solutions</li>
                <li>Cloud Integration: Scalable and secure cloud infrastructure implementation</li>
                <li>Data Analytics: Advanced analytics for data-driven decision making</li>
              </ul>
            </div>
            <div className="service-image">
              <Image
                src="/assets/digital-process.webp"
                alt="Digital Process"
                width={600}
                height={400}
                quality={90}
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>

          {/* Second section - reversed */}
          <div className="section-content reverse">
            <div className="service-text">
              <h2>Innovation Technologies</h2>
              <p>Leverage cutting-edge technologies to stay ahead in the digital landscape and create new value for your customers.</p>
              <ul>
                <li>Artificial Intelligence & Machine Learning: Smart solutions for business optimization</li>
                <li>IoT Integration: Connected solutions for real-time monitoring and control</li>
                <li>Blockchain Solutions: Secure and transparent business processes</li>
                <li>Digital Experience Platforms: Enhanced customer engagement solutions</li>
              </ul>
            </div>
            <div className="service-image">
              <Image
                src="/assets/digital-innovation.webp"
                alt="Digital Innovation"
                width={600}
                height={400}
                quality={90}
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>

          {/* Third section */}
          <div className="section-content">
            <div className="service-text">
              <h2>Transformation Benefits</h2>
              <p>Experience remarkable improvements across your organization with our digital transformation solutions.</p>
              <ul>
                <li>Enhanced Operational Efficiency: Streamlined processes and reduced operational costs</li>
                <li>Improved Customer Experience: Personalized and seamless customer interactions</li>
                <li>Data-Driven Decision Making: Actionable insights from advanced analytics</li>
                <li>Competitive Advantage: Stay ahead with innovative digital solutions</li>
              </ul>
            </div>
            <div className="service-image">
              <Image
                src="/assets/digital-benefits.webp"
                alt="Digital Benefits"
                width={600}
                height={400}
                quality={90}
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>

          {/* Fourth section - reversed */}
          <div className="section-content reverse">
            <div className="service-text">
              <h2>Implementation Approach</h2>
              <p>Our proven implementation methodology ensures successful digital transformation with minimal disruption to your business operations.</p>
              <ul>
                <li>Discovery & Assessment: Comprehensive analysis of your current digital landscape</li>
                <li>Strategic Planning: Detailed roadmap development with clear milestones</li>
                <li>Agile Implementation: Iterative deployment with continuous feedback loops</li>
                <li>Ongoing Support: Dedicated assistance to ensure sustainable transformation</li>
              </ul>
            </div>
            <div className="service-image">
              <Image
                src="/assets/digital-implementation.webp"
                alt="Implementation Approach"
                width={600}
                height={400}
                quality={90}
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="faq-section">
        <div className="container">
          <h2>Frequently Asked Questions (FAQs)</h2>
          <div className="faq-grid">
            {[
              {
                question: "What is digital transformation?",
                answer: "Digital transformation is the integration of digital technology into all areas of a business, fundamentally changing how you operate and deliver value to customers. It's also a cultural change that requires organizations to continually challenge the status quo, experiment, and get comfortable with failure."
              },
              {
                question: "How long does a digital transformation project typically take?",
                answer: "The timeline for digital transformation varies based on the scope, complexity, and size of your organization. Small-scale transformations might take 3-6 months, while enterprise-wide transformations could span 1-3 years. We work with you to develop a phased approach that delivers value incrementally."
              },
              {
                question: "What ROI can we expect from digital transformation?",
                answer: "Return on investment from digital transformation can come in many forms, including cost reduction (typically 15-25% in operational expenses), revenue growth (10-20% through new digital channels), improved customer satisfaction (20-30% increase in NPS scores), and enhanced employee productivity (15-30% improvement)."
              },
              {
                question: "How do you ensure minimal disruption during implementation?",
                answer: "We use an agile implementation approach with careful change management practices. This includes thorough planning, stakeholder engagement, pilot testing, phased rollouts, comprehensive training, and dedicated support throughout the transition to minimize business disruption."
              },
              {
                question: "What technologies are typically involved in digital transformation?",
                answer: "Digital transformation often involves cloud computing, artificial intelligence, machine learning, IoT, blockchain, data analytics, robotic process automation, and digital experience platforms. The specific technologies deployed depend on your unique business objectives and challenges."
              }
            ].map((faq, index) => (
              <div 
                key={index} 
                className={`faq-item ${activeFaq === index ? 'active' : ''}`}
                onClick={() => toggleFaq(index)}
              >
                <h3>{faq.question}</h3>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="transform-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Digitally Transform Your Business?</h2>
            <p>Take the first step toward a more efficient, innovative, and customer-focused organization.</p>
            <div className="cta-buttons">
              <Link href="/contact" className="primary-button">Contact Us</Link>
              <Link href="/services" className="secondary-button">Explore Services</Link>
            </div>
          </div>
        </div>
      </div>
      
    
    </div>
  );
};

export default DigitalTransformation;