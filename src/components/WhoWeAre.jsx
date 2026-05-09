'use client';
import React from 'react';
import { motion } from 'framer-motion';
import '../styles/whoweare.css';

const WhoWeAreSection = () => {
  const rows = [
    {
      title: 'Programming Languages',
      items: [
        { name: 'Java', icon: '/images/java.svg' },
        { name: 'JavaScript', icon: '/images/javascript.svg' },
        { name: 'TypeScript', icon: '/images/typescript.svg' },
        { name: 'Python', icon: '/images/python.svg' },
        { name: 'C#', icon: '/images/cpp.svg' },
        { name: 'PHP', icon: '/images/php.svg' },
      ]
    },
    {
      title: 'Frameworks & Development',
      items: [
        { name: 'React', icon: '/images/react.svg' },
        { name: 'Next.js', icon: '/images/next.svg' },
        { name: 'Angular', icon: '/images/angular.svg' },
        { name: 'Node.js', icon: '/images/node.svg' },
        { name: 'Spring Boot', icon: '/images/springboot.svg' },
        { name: 'Vue.js', icon: '/images/vue.svg' },
      ]
    },
    {
      title: 'CMS & E-Commerce',
      items: [
        { name: 'WordPress', icon: '/images/wordpress.svg' },
        { name: 'Shopify', icon: '/images/shopify.svg' },
        { name: 'WooCommerce', icon: '/images/woocommerce.svg' },
        { name: 'Webflow', icon: '/images/webflow.svg' },
        { name: 'Magento', icon: '/images/magento.svg' },
      ]
    },
    {
      title: 'Cloud & Infrastructure',
      items: [
        { name: 'AWS', icon: '/images/aws.svg' },
        { name: 'Docker', icon: '/images/docker.svg' },
        { name: 'Google Cloud', icon: '/images/googlecloud.svg' },
        { name: 'Kubernetes', icon: '/images/kubernetes.svg' },
      ]
    },
    {
      title: 'AI & Automation',
      items: [
        { name: 'OpenAI', icon: '/images/chatgpt.svg' },
        { name: 'Chatbots', icon: '/images/chatbots.svg' },
        { name: 'TensorFlow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
        { name: 'LangChain', icon: '/images/chatgpt.svg' },
      ]
    },
  ];

  return (
    <section className="whoweare-section">
      <div className="whoweare-container">
        
        <header className="whoweare-header">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="whoweare-title"
          >
            Who We Are & Your Partner for <span className="vibrant-text">Growth</span>
          </motion.h2>
          <p className="whoweare-description">
            Building modern websites, boosting visibility through smart SEO, 
            and integrating cutting-edge AI technologies.
          </p>

          {/* VIBRANT CATCHY MOVING TOP BAR */}
          <div className="vibrant-marquee-ribbon">
            <div className="ribbon-track">
              {[...Array(10)].map((_, i) => (
                <span key={i} className="ribbon-text">
                  OUR TECHNOLOGY STACK • 
                </span>
              ))}
            </div>
          </div>
        </header>

        {/* INFINITE MOVING CARDS */}
        <div className="infinite-marquee-container">
          <div className="marquee-content">
            {[...rows, ...rows].map((category, idx) => (
              <motion.div 
                key={idx} 
                className="tech-category-card-pro"
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <h3 className="category-header">{category.title}</h3>
                <div className="tech-mini-grid">
                  {category.items.map((tech, i) => (
                    <div key={i} className="tech-logo-unit">
                      <div className="logo-box">
                        <img src={tech.icon} alt={tech.name} className="real-color-icon" />
                      </div>
                      <span className="logo-name">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;