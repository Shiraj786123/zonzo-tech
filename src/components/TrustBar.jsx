'use client';
import React from 'react';
import { motion } from 'framer-motion';
import '../styles/trustbar.css';

const stats = [
  { number: '150', suffix: '+', label: 'Projects Delivered', color: '#6366f1' }, // Indigo
  { number: '4.9', suffix: '', label: 'Rated Agency', isRating: true, color: '#f59e0b' }, // Amber/Gold
  { number: '35', suffix: '%', label: 'Avg Client Growth', color: '#10b981' }, // Emerald
  { number: 'UK & USA', suffix: '', label: 'Focused', color: '#ef4444' }, // Rose/Red
];

// Component for the stars
const StarRating = () => {
  return (
    <div className="star-container">
      {[...Array(4)].map((_, i) => (
        <span key={i} className="star filled">★</span>
      ))}
      <span className="star partial">★</span>
    </div>
  );
};

const TrustBar = () => {
  return (
    <section className="trust-bar-wrapper">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="trust-bar-content"
      >
        <p className="trust-bar-upper-title">
          Trusted by 120+ businesses across UK, USA & Europe
        </p>

        <div className="trust-stats-grid">
          {stats.map((stat, i) => (
            <motion.div 
              key={i} 
              className="stat-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="stat-value-box">
                <span className="stat-main-number" style={{ color: '#1e293b' }}>
                  {stat.number}
                  <span className="stat-symbol" style={{ color: stat.color }}>{stat.suffix}</span>
                </span>
                
                {stat.isRating && <StarRating />}
              </div>
              
              <div className="stat-info">
                <span className="stat-text-label">{stat.label}</span>
                <div className="stat-underline" style={{ backgroundColor: stat.color }}></div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default TrustBar;