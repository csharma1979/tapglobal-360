'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../../layout/Header/Header';
import Footer from '../../layout/Footer/Footer';
import './TurnaroundManagement.scss';

const TurnaroundManagement = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="turnaround-management">
      <Header />
      
      <div className="service-banner">
        <div className="container">
          <h1>Turn Around Management</h1>
          <p>Navigating Through Challenges with Expert Leadership</p>
        </div>
      </div>

      <div className="service-content">
        <div className="container">
          <div className="section-content">
            <div className="service-text">
              <h2>Interim Executive and Crisis Management</h2>
              <p>At TAP Global, we recognize the criticality of robust leadership during times of transition and crisis. Our interim executive solutions provide experienced leadership to guide your organization through challenging periods and implement effective turnaround strategies.</p>
              <h3>Core Services</h3>
              <ul>
                <li>Provision of immediate senior management roles, including Chief Restructuring Officer, Chief Financial Officer, and Chief Executive Officer</li>
                <li>Effective management of communication channels with key stakeholders</li>
                <li>Leadership in restructuring efforts</li>
              </ul>
              
              <h3>Strategic Advantages</h3>
              <ul>
                <li>Accelerated implementation of turnaround strategies</li>
                <li>Mitigation of the impacts caused by executive turnover</li>
                <li>Achievement of optimal outcomes through an objective approach</li>
              </ul>
            </div>
            <div className="service-image">
              <Image
                src="/assets/interim-executive.webp"
                alt="Interim Executive"
                width={600}
                height={400}
                quality={90}
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>

          <div className="section-content">
            <div className="service-text">
              <h2>Restructuring and Debt Advisory</h2>
              <p>Our Restructuring and Debt Advisory service offers expert solutions to companies facing financial challenges. We work closely with stakeholders to develop and implement sustainable financial structures that address immediate concerns while positioning the organization for long-term success.</p>
              <h3>Core Services</h3>
              <ul>
                <li>In-depth restructuring of existing debt and financial arrangements</li>
                <li>Strategic refinancing advice and negotiation support</li>
                <li>Creation of sustainable financial structures</li>
              </ul>
            </div>
            <div className="service-image">
              <Image
                src="/assets/restructuring.webp"
                alt="Restructuring"
                width={600}
                height={400}
                quality={90}
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>

          <div className="section-content">
            <div className="service-text">
              <h2>Liquidity Management</h2>
              <p>In the dynamic business landscape, maintaining optimal liquidity is crucial for operational stability and strategic flexibility. Our liquidity management services ensure that your organization has the necessary financial resources to navigate through challenging periods while maximizing efficiency.</p>
              <h3>Core Services</h3>
              <ul>
                <li>Customized liquidity strategies for cash flow optimization</li>
                <li>Advanced tools and techniques for cash management</li>
                <li>Continuous monitoring and adjustment of liquidity positions</li>
              </ul>
            </div>
            <div className="service-image">
              <Image
                src="/assets/liquidity.webp"
                alt="Liquidity Management"
                width={600}
                height={400}
                quality={90}
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>

          <div className="section-content">
            <div className="service-text">
              <h2>Distressed Assets and Insolvency Support</h2>
              <p>Dealing with financial distress requires strategic insight and experienced guidance. Our specialists provide comprehensive support for managing distressed assets and navigating insolvency situations, focusing on value preservation and recovery strategies.</p>
              <h3>Core Services</h3>
              <ul>
                <li>Strategic management of distressed assets</li>
                <li>Guidance on insolvency proceedings and recovery</li>
                <li>Assistance in asset restructuring and turnaround</li>
              </ul>
            </div>
            <div className="service-image">
              <Image
                src="/assets/distressed-assets.webp"
                alt="Distressed Assets"
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
                question: "What is interim executive management?",
                answer: "Interim executive management involves providing experienced senior leaders on a temporary basis to guide organizations through critical transitions, crises, or leadership gaps."
              },
              {
                question: "When should a business consider turnaround management?",
                answer: "Businesses should consider turnaround management when facing financial distress, operational inefficiencies, or significant performance declines requiring expert intervention and strategic restructuring."
              },
              {
                question: "How does TAP Global support restructuring and debt advisory?",
                answer: "We offer comprehensive solutions including debt restructuring, refinancing strategies, and the development of sustainable financial structures to stabilize and strengthen your organization."
              },
              {
                question: "What industries benefit from crisis management services?",
                answer: "Our services benefit a wide range of industries, including manufacturing, technology, healthcare, finance, and more—any business facing operational or financial challenges."
              },
              {
                question: "How quickly can TAP Global deploy interim executives?",
                answer: "We can rapidly deploy experienced interim executives to address urgent leadership needs and ensure minimal disruption to your operations."
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
            <h2>Ready to Transform Your Business?</h2>
            <p>Partner with us to revitalize your business operations and achieve sustainable turnaround success.</p>
            <div className="cta-buttons">
              <Link href="/contact" className="primary-button">Contact Us</Link>
              <Link href="/services" className="secondary-button">View Solutions</Link>
            </div>
          </div>
        </div>
      </div>
      
     
    </div>
  );
};

export default TurnaroundManagement;