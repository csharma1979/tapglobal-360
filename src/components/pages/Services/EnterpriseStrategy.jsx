'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../../layout/Header/Header';
import Footer from '../../layout/Footer/Footer';
import './EnterpriseStrategy.scss';

const EnterpriseStrategy = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    if (activeFaq === index) {
      setActiveFaq(null);
    } else {
      setActiveFaq(index);
    }
  };

  return (
    <div className="enterprise-strategy">
      <Header />
      
      <div className="service-banner">
        <div className="container">
          <h1>Enterprise Strategy</h1>
          <p>Transforming Business Vision into Sustainable Success</p>
        </div>
      </div>

      <div className="service-content">
        <div className="container">
          <div className="section-content">
            <div className="service-text">
              <h2>Product Market-Fit and Value Chain Analysis</h2>
              <p>TAP Global specializes in identifying and optimizing the sweet spot where your products align perfectly with market demands, using advanced analytical techniques and deep market insights.</p>
              <h3>Core Services</h3>
              <ul>
                <li>Comprehensive analysis of market trends and consumer preferences</li>
                <li>Evaluation and optimization of the value chain to enhance efficiency and profitability</li>
                <li>Strategic recommendations to align products with market needs and maximize market penetration</li>
              </ul>
              
              <h3>Strategic Advantages</h3>
              <ul>
                <li>Customized solutions based on thorough market analysis and trends</li>
                <li>Enhanced product positioning and competitive advantage</li>
                <li>Streamlined operations leading to cost savings and improved profit margins</li>
              </ul>
            </div>
            <div className="service-image">
              <Image
                src="/assets/market-fit.webp"
                alt="Product Market-Fit"
                width={600}
                height={400}
                quality={90}
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>

          <div className="section-content">
            <div className="service-text">
              <h2>Current State Assessment and Gap Analysis</h2>
              <p>Our service provides a thorough evaluation of your company's current operational state, identifying gaps and areas for improvement to drive growth and efficiency.</p>
              <h3>Core Services</h3>
              <ul>
                <li>Detailed assessment of organizational processes and performance</li>
                <li>Identification of gaps in capabilities, processes, and technologies</li>
                <li>Strategic planning to bridge identified gaps and capitalize on opportunities</li>
              </ul>
              
              <h3>Strategic Advantages</h3>
              <ul>
                <li>Clear insight into organizational strengths and weaknesses</li>
                <li>Actionable strategies for improvement and innovation</li>
                <li>Enhanced readiness for market changes and challenges</li>
              </ul>
            </div>
            <div className="service-image">
              <Image
                src="/assets/gap-analysis.webp"
                alt="Gap Analysis"
                width={600}
                height={400}
                quality={90}
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>

          <div className="section-content">
            <div className="service-text">
              <h2>Digital Business and Technology Strategy</h2>
              <p>TAP Global offers cutting-edge digital business and technology strategies to transform your business operations and drive digital innovation.</p>
              <h3>Core Services</h3>
              <ul>
                <li>Development of a comprehensive digital business strategy</li>
                <li>Integration of the latest technological advancements into business processes</li>
                <li>Customized digital solutions to enhance customer engagement and operational efficiency</li>
              </ul>
              
              <h3>Strategic Advantages</h3>
              <ul>
                <li>Stay ahead in the digital landscape with innovative strategies</li>
                <li>Improved customer experience and operational agility</li>
                <li>Long-term growth through effective digital transformation</li>
              </ul>
            </div>
            <div className="service-image">
              <Image
                src="/assets/digital-strategy.webp"
                alt="Digital Strategy"
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
                question: "What is enterprise strategy consulting?",
                answer: "Enterprise strategy consulting helps organizations develop and implement comprehensive business strategies that align with their goals, market conditions, and available resources for sustainable growth and competitive advantage."
              },
              {
                question: "How do you determine product-market fit?",
                answer: "We use a combination of market research, consumer behavior analysis, competitive analysis, and data analytics to evaluate and optimize how well your products meet market demands and customer needs."
              },
              {
                question: "What does the gap analysis process involve?",
                answer: "Our gap analysis process includes assessing current performance, identifying desired future states, measuring the gaps between them, and developing strategic plans to bridge these gaps effectively."
              },
              {
                question: "How can digital transformation benefit my business?",
                answer: "Digital transformation can enhance operational efficiency, improve customer experience, enable data-driven decision-making, and create new business opportunities while reducing costs and increasing competitiveness."
              },
              {
                question: "What makes TAP Global's approach unique?",
                answer: "We combine deep industry expertise, advanced analytics, and practical implementation experience to deliver customized solutions that drive real business results and sustainable growth."
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
            <h2>Ready to Transform Your Enterprise?</h2>
            <p>Let's collaborate to drive innovation and achieve sustainable growth for your organization.</p>
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

export default EnterpriseStrategy;