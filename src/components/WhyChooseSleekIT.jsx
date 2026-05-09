'use client';
import React from 'react';
import { CheckCircle2 } from 'lucide-react'; // Using Lucide for professional icons
import '../styles/WhyChoose.css';

const WhyChooseSection = () => {
  const benefits = [
    {
      title: "AI-First Approach",
      desc: "Every solution we build leverages AI where it matters — faster delivery, smarter automation, better results.",
      color: "#0ea5e9", // Sky Blue
      className: "theme-ai"
    },
    {
      title: "Full-Stack Expertise",
      desc: "One team covering design, development, SEO and AI — no outsourcing, no handoffs, no excuses.",
      color: "#8b5cf6", // Violet
      className: "theme-stack"
    },
    {
      title: "Transparent Pricing",
      desc: "No hidden fees. No surprise invoices. Just honest, upfront pricing for every project.",
      color: "#10b981", // Emerald
      className: "theme-price"
    },
    {
      title: "Dedicated Communication",
      desc: "Direct access to your project team via WhatsApp, email or video call — across UK & USA time zones.",
      color: "#f59e0b", // Amber
      className: "theme-comm"
    }
  ];

  return (
    <section className="why-choose-section">
      <div className="why-choose-container">
        
        {/* Left Content */}
        <div className="why-choose-left">
          <p className="section-subtitle">What Makes Us Different</p>
          <h1 className="section-title">
            Why Businesses in the UK & USA Choose <span className="highlight-text">ZonzocTech</span>
          </h1>
          <p className="section-description">
            We combine Silicon Valley-level technical expertise with offshore efficiency — delivering premium quality at a fraction of agency prices.
          </p>

          {/* Benefits Grid */}
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className={`benefit-card ${benefit.className}`}>
                <div className="benefit-card-header">
                  <div className="benefit-icon-box">
                    <CheckCircle2 size={24} color={benefit.color} strokeWidth={3} />
                  </div>
                  <strong>{benefit.title}</strong>
                </div>
                <p>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Content */}
        <div className="whyus-right">
          <div className="image-wrapper">
             <img
              src="/images/growth-illustration.jpg"
              alt="Digital Growth"
              className="whyus-illustration"
            />
          </div>

          {/* Stats Card */}
          <div className="whyus-stats-card">
            <div className="stat-item">
              <p className="stat-number">120+</p>
              <p className="stat-label">Clients Served</p>
            </div>
            <div className="stat-item">
              <p className="stat-number">150+</p>
              <p className="stat-label">Projects Delivered</p>
            </div>
            <div className="stat-item">
              <p className="stat-number">35%</p>
              <p className="stat-label">Avg Client Growth</p>
            </div>
            <div className="stat-item">
              <p className="stat-number">4.9★</p>
              <p className="stat-label">Client Rating</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseSection;