'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../../layout/Header/Header';
import Footer from '../../layout/Footer/Footer';
import './MergerAcquisition.scss';

const MergersAcquisitions = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    if (activeFaq === index) {
      setActiveFaq(null);
    } else {
      setActiveFaq(index);
    }
  };

  return (
    <div className="merger-acquisition">
      <Header />
      
      <div className="service-banner">
        <div className="container">
          <h1>Mergers & Acquisitions</h1>
          <p>Strategic guidance for successful business combinations and acquisitions</p>
        </div>
      </div>

      <div className="service-content">
        <div className="container">
          <div className="section-content">
            <div className="service-text">
              <h2>Comprehensive M&A Solutions</h2>
              <p>At TAP Global 360, we provide end-to-end M&A advisory services, guiding businesses through complex transactions with strategic insight and operational expertise. Our team of experienced professionals ensures smooth execution from initial strategy development to post-merger integration.</p>
            </div>
            <div className="service-image">
              <Image
                src="/assets/mergers-detail.webp"
                alt="Mergers & Acquisitions"
                width={600}
                height={400}
                quality={90}
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>

          <div className="section-content">
            <div className="service-text">
              <h2>Our M&A Services</h2>
              <ul>
                <li>
                  <strong>Comprehensive Due Diligence</strong> - Thorough financial, operational, and strategic analysis of target companies
                </li>
                <li>
                  <strong>Valuation Services</strong> - Expert company valuations using multiple methodologies and market analysis
                </li>
                <li>
                  <strong>Deal Structuring</strong> - Strategic advice on transaction structure, pricing, and terms
                </li>
                <li>
                  <strong>Integration Planning</strong> - Detailed roadmap for successful post-merger integration
                </li>
              </ul>
            </div>
            <div className="service-image">
              <Image
                src="/assets/merger-process.webp"
                alt="M&A Process"
                width={600}
                height={400}
                quality={90}
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>

          <div className="section-content">
            <div className="service-text">
              <h2>Our M&A Approach</h2>
              <p>We follow a structured approach to ensure successful M&A transactions:</p>
              <ul>
                <li>
                  <strong>Strategic Planning</strong> - Identifying strategic fit and growth opportunities
                </li>
                <li>
                  <strong>Transaction Execution</strong> - Managing the entire deal process from negotiation to closing
                </li>
                <li>
                  <strong>Risk Management</strong> - Identifying and mitigating potential risks throughout the process
                </li>
                <li>
                  <strong>Post-Merger Support</strong> - Ensuring smooth integration and value realization
                </li>
              </ul>
            </div>
            <div className="service-image">
              <Image
                src="/assets/merger-approach.webp"
                alt="M&A Approach"
                width={600}
                height={400}
                quality={90}
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>

          <div className="section-content">
            <div className="service-text">
              <h2>Value Creation</h2>
              <p>Our M&A services focus on creating lasting value through:</p>
              <ul>
                <li>Synergy Identification and Realization</li>
                <li>Operational Excellence</li>
                <li>Market Expansion Opportunities</li>
                <li>Technology and Innovation Integration</li>
                <li>Cultural Alignment and Change Management</li>
              </ul>
            </div>
            <div className="service-image">
              <Image
                src="/assets/merger-value.webp"
                alt="Value Creation"
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
                question: "What are the key factors for successful M&A transactions?",
                answer: "Successful M&A transactions typically depend on strategic alignment, comprehensive due diligence, accurate valuation, effective negotiation, careful planning of integration, and strong leadership throughout the process. Cultural compatibility between organizations is also critical for long-term success."
              },
              {
                question: "How do you determine the value of a target company?",
                answer: "We use multiple valuation methodologies including discounted cash flow analysis, comparable company analysis, precedent transactions, asset valuation, and industry-specific metrics. Our comprehensive approach considers both quantitative financial data and qualitative factors such as market position, growth potential, and synergies."
              },
              {
                question: "What is due diligence and why is it important?",
                answer: "Due diligence is a comprehensive investigation of a business before completing an acquisition. It typically covers financial, legal, operational, commercial, and technological aspects. It's crucial for identifying potential risks, verifying information, determining accurate valuation, and planning for successful integration."
              },
              {
                question: "How long does a typical M&A transaction take?",
                answer: "The timeline varies based on complexity, but most M&A transactions take between 4-9 months from initial discussions to closing. This includes time for strategy development, target identification, due diligence, negotiation, documentation, regulatory approvals, and closing preparations."
              },
              {
                question: "What are the common challenges in post-merger integration?",
                answer: "Common challenges include cultural differences, communication issues, resistance to change, talent retention, technology integration, and maintaining business continuity. Our integration planning process addresses these challenges proactively to ensure value realization from the transaction."
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
            <h2>Ready to Navigate Your M&A Journey?</h2>
            <p>Partner with our experienced team to maximize value and minimize risks in your next merger or acquisition.</p>
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

export default MergersAcquisitions;