'use client';
import React from "react";
import { motion } from "framer-motion";
import { Search, PenTool, Code2, Rocket, Headset } from "lucide-react";
import '../styles/process.css';

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "DISCOVERY",
      description: "We dig deep into your goals, audience, and competitors before writing code.",
      icon: <Search size={28} />,
      color: "#f59e0b", // Amber
    },
    {
      number: "02",
      title: "STRATEGY",
      description: "Wireframes, UI/UX design and architecture built around your specific goals.",
      icon: <PenTool size={28} />,
      color: "#a855f7", // Violet
    },
    {
      number: "03",
      title: "DEVELOPMENT",
      description: "Agile, sprint-based development across web and AI with full transparency.",
      icon: <Code2 size={28} />,
      color: "#10b981", // Emerald
    },
    {
      number: "04",
      title: "LAUNCH",
      description: "Thorough QA testing, performance checks and a smooth go-live on all platforms.",
      icon: <Rocket size={28} />,
      color: "#f43f5e", // Rose
    },
    {
      number: "05",
      title: "SUPPORT",
      description: "Continuous updates, monitoring and growth support for long-term success.",
      icon: <Headset size={28} />,
      color: "#06b6d4", // Cyan
    },
  ];

  return (
    <section className="ps-wrapper">
      <div className="ps-container">
        
        {/* Animated Header */}
        <div className="ps-header">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="ps-main-title shimmer-text"
          >
            How We Work — <span>Our 5-Step Process</span>
          </motion.h2>
          <p className="ps-subtitle">A high-performance roadmap from concept to market-ready product.</p>
        </div>

        {/* The Responsive Grid */}
        <div className="ps-grid">
          {/* Horizontal Line - Hidden on Mobile/Tablet */}
          <div className="ps-desktop-connector"></div>

          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="ps-card"
              style={{ "--step-color": step.color }}
            >
              {/* Top Badge */}
              <div className="ps-number-pill" style={{ backgroundColor: step.color }}>
                {step.number}
              </div>

              {/* Glowing Icon Circle */}
              <div className="ps-icon-outer" style={{ boxShadow: `0 0 30px ${step.color}30` }}>
                <div className="ps-icon-inner" style={{ color: step.color }}>
                  {step.icon}
                </div>
              </div>

              {/* Text Area */}
              <h3 className="ps-card-title" style={{ color: step.color }}>{step.title}</h3>
              <p className="ps-card-desc">{step.description}</p>

              {/* Subtle bottom hover line */}
              <div className="ps-hover-line" style={{ backgroundColor: step.color }}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;