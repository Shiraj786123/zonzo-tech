'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/solution.css';

const tabs = [
  { id: 'seo', label: 'SEO & Lead Generation', color: '#00448f' },
  { id: 'ux', label: 'High-Converting Websites', color: '#6366f1' },
  { id: 'ai', label: 'AI Automation Systems', color: '#14b8a6' },
];

const rotatingWords = ["Grow Online", "Scale Fast", "Automate", "Convert Leads"];

const SolutionSection = () => {
  const [activeTab, setActiveTab] = useState('seo');
  const [wordIdx, setWordIdx] = useState(0);

  // Moving Text Logic for Headline
  useEffect(() => {
    const interval = setInterval(() => setWordIdx(prev => (prev + 1) % rotatingWords.length), 3000);
    return () => clearInterval(interval);
  }, []);

  const services = {
    seo: [
      { title: 'Organic Search & SEO Strategy', items: ['SEO Strategy & Consulting', 'Keyword Research & Mapping', 'Competitor & Market Analysis', 'On-Page & Content Optimization', 'Enterprise SEO Solutions'] },
      { title: 'SEO Analytics & Platforms', items: ['Google Search Console Setup & Insights', 'Google Analytics & GA4 Tracking', 'Rank Tracking & Performance Monitoring', 'Google Merchant Center Management', 'Google Ads & Search Campaign Support'] },
      { title: 'Ecommerce SEO & Growth', items: ['Ecommerce SEO Strategy', 'Product & Shopping Feed Optimization', 'Shopping Feed Automation', 'Ecommerce PPC Management', 'Conversion Rate Optimization (CRO)'] }
    ],
    ux: [
      { title: 'UI/UX Design', items: ['User Interface (UI) Design', 'User Experience (UX) Design', 'Wireframing & Prototyping', 'Design Systems & Style Guides', 'Usability & User Testing'] },
      { title: 'Design That Converts', items: ['Frontend Development', 'Backend Development', 'Full Stack Development', 'Web Application Development', 'API & Third-Party Integration'] },
      { title: 'Development', items: ['Animation & Motion Design', 'Micro-Interactions', 'Responsive & Mobile-First Design', 'Accessibility & WCAG Compliance', 'Performance-Focused UX'] }
    ],
    ai: [
      { title: 'AI for Business Growth', items: ['AI Chatbots & Assistants', 'AI Lead Handling', 'AI Sales Assistants'] },
      { title: 'Automation Systems', items: ['Workflow Automation', 'CRM & Tool Integration', 'Email & WhatsApp Automation'] },
      { title: 'AI Consulting', items: ['AI Strategy', 'AI Readiness Assessment', 'Custom AI Solutions'] }
    ]
  };

  const tabDescriptions = {
    seo: "Rank higher, attract the right audience, and turn search traffic into consistent paying customers.",
    ux: "We build fast, beautiful, conversion-focused websites that turn visitors into leads — not just impressions.",
    ai: "Automate repetitive tasks, qualify leads instantly, and scale your operations with custom AI tools.",
  };

  const activeColor = tabs.find(t => t.id === activeTab).color;

  return (
    <section className="solution-section">
      <div className="solution-hero">
        <h1 className="solution-title">
          Everything You Need to <br/>
          <div className="word-rotator">
            <AnimatePresence mode="wait">
              <motion.span 
                key={rotatingWords[wordIdx]}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                style={{ color: activeColor }}
              >
                {rotatingWords[wordIdx]}
              </motion.span>
            </AnimatePresence>
          </div>
        </h1>
        
        <p className="solution-subtitle">
            From search visibility to custom AI systems — we deliver end-to-end digital solutions that generate real, measurable business results.
        </p>

        {/* Sliding Pill Navigation */}
        <div className="tab-nav">
          {tabs.map(tab => (
            <button 
              key={tab.id} 
              onClick={() => setActiveTab(tab.id)} 
              className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.div layoutId="active-pill" className="tab-pill-bg" style={{ background: tab.color }} />
              )}
            </button>
          ))}
        </div>
        
        <motion.p 
            key={activeTab} 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="active-desc"
        >
            {tabDescriptions[activeTab]}
        </motion.p>
      </div>

      {/* Services Grid with Staggered Animation */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={activeTab} 
          className="services-grid"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {services[activeTab].map((service, index) => (
            <motion.div 
              key={index} 
              className="service-card"
              whileHover={{ y: -10, boxShadow: `0 20px 40px ${activeColor}15` }}
            >
              <div className="card-accent-line" style={{ background: activeColor }}></div>
              <h3 className="card-title">{service.title}</h3>
              <ul className="item-list">
                {service.items.map((item, idx) => (
                  <motion.li key={idx} whileHover={{ x: 5 }} className="service-li">
                    <span className="arrow" style={{ color: activeColor }}>→</span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default SolutionSection;