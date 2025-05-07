'use client';

import React from 'react';
import './Strategies.scss';

const Strategies = () => {
  return (
    <section className="strategies">
      <div className="container">
        <div className="strategies-header">
          <h2>Practical Strategies, Real Results: The TAP Global Promise</h2>
        </div>
        <div className="strategies-grid">
          <div className="strategy-card">
            <h3>Practical Execution</h3>
            <p>We prioritize practicality in our strategies. Our recommendations are straightforward, clear, and ready for immediate implementation.</p>
          </div>
          <div className="strategy-card">
            <h3>Direct and Effective Solutions</h3>
            <p>We offer solutions that are direct and effective. Our approach cuts through complexity, focusing on what can be achieved quickly and efficiently.</p>
          </div>
          <div className="strategy-card">
            <h3>Rapid Implementation</h3>
            <p>We understand the need for speed in today's business environment. Our strategies are designed for rapid implementation, ensuring that your business can move forward without delay.</p>
          </div>
          <div className="strategy-card">
            <h3>Result-Oriented Focus</h3>
            <p>Every strategy we develop is with a single goal in mind: tangible results. We focus on what works, ensuring that our clients see real benefits from our partnership.</p>
          </div>
          <div className="strategy-card">
            <h3>Hands-On Support</h3>
            <p>We offer more than advice; we provide hands-on support to ensure strategies are executed successfully. Our team works closely with you to ensure seamless execution and real impact.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Strategies;