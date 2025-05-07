'use client';

import React from 'react';
import { motion } from 'framer-motion';
import './OurImpact.scss';

const OurImpact = () => {
  const impactStats = [
    {
      number: "100+",
      label: "Global Clients"
    },
    {
      number: "50+",
      label: "Countries Served"
    },
    {
      number: "95%",
      label: "Client Satisfaction"
    },
    {
      number: "500+",
      label: "Projects Delivered"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section className="our-impact">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Impact
        </motion.h2>
        <motion.p 
          className="impact-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Transforming businesses globally through innovative solutions and sustainable practices
        </motion.p>
        <motion.div 
          className="impact-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {impactStats.map((stat, index) => (
            <motion.div 
              className="impact-card" 
              key={index}
              variants={itemVariants}
            >
              <h3>{stat.number}</h3>
              <p>{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurImpact;