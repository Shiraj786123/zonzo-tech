'use client';
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  TrendingUp, Users, Database, Star, Settings, FileSearch, 
  Search, Globe, Zap, Bot, Share2, BarChart3, Plus, Minus, 
  ArrowRight, CheckCircle2, Layout, Layers, ShieldCheck 
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import "../styles/SEOServices.css";

const SEOServices = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const stats = [
    { number: "150+", label: "Projects Delivered", icon: <Database color="#38bdf8" /> },
    { number: "35%", label: "Avg Traffic Growth", icon: <TrendingUp color="#10b981" /> },
    { number: "120+", label: "Clients Served", icon: <Users color="#a855f7" /> },
    { number: "4.9★", label: "Client Rating", icon: <Star color="#fbbf24" /> },
  ];

  const seoServices = [
    { title: "Technical SEO", icon: <Settings color="#3b82f6" />, description: "Fixing every technical barrier—Core Web Vitals, crawl errors, structured data, and security.", items: ["Page Speed", "Mobile Indexing", "XML Sitemaps", "Schema Markup"] },
    { title: "On-Page SEO", icon: <Layout color="#f97316" />, description: "Optimizing keywords, title tags, and header structures to target the right search intent.", items: ["Intent Mapping", "Meta Data", "Gap Analysis", "Internal Linking"] },
    { title: "Content SEO", icon: <Layers color="#10b981" />, description: "Building pillar content and topic clusters that compound authority and traffic over time.", items: ["Editorial Planning", "Topic Clusters", "Snippet Wins", "Copywriting"] },
    { title: "Link Building", icon: <Share2 color="#6366f1" />, description: "Acquiring niche-relevant backlinks and brand mentions that move rankings effectively.", items: ["Manual Outreach", "Digital PR", "Competitor Gaps", "Toxic Removal"] },
    { title: "Local SEO UK", icon: <Globe color="#0ea5e9" />, description: "Path to appearing for ready-to-buy customers in specific UK cities or regions.", items: ["GMB Optimization", "Local Citations", "Location Pages", "Review Strategy"] },
    { title: "E-commerce SEO", icon: <Zap color="#eab308" />, description: "Coverage for Shopify and WooCommerce—optimizing shopping feeds and category pages.", items: ["Feed Optimization", "Product SEO", "Conversion Rate", "Buying Traffic"] },
  ];

  const aiCapabilities = [
    { title: "GEO (Generative Optimization)", icon: <Bot color="#3b82f6" />, description: "Structuring content so AI engines like ChatGPT and Perplexity cite you as a trusted source." },
    { title: "AEO (Answer Engine Optimization)", icon: <Search color="#f43f5e" />, description: "Winning direct answer positions—Google snippets, PAA boxes, and AI-generated answers." },
    { title: "AI Keyword Clustering", icon: <Database color="#10b981" />, description: "Using AI to identify keyword patterns and search intent faster than manual research." },
    { title: "Search Intent Prediction", icon: <BarChart3 color="#a855f7" />, description: "AI-powered mapping of what users actually want when they search across your entire set." },
  ];

  const processSteps = [
    { step: "01", icon: <FileSearch color="#3b82f6" />, title: "Free Audit", description: "Identifying technical issues, content gaps and competitor opportunities." },
    { step: "02", icon: <Layers color="#a855f7" />, title: "Custom Strategy", description: "Building a roadmap with realistic timelines and measurable targets." },
    { step: "03", icon: <Settings color="#10b981" />, title: "Foundation Fix", description: "Fixing technical barriers before creating content or building links." },
    { step: "04", icon: <TrendingUp color="#f43f5e" />, title: "Authority", description: "Creating content that ranks and attracts quality backlinks naturally." },
    { step: "05", icon: <ShieldCheck color="#f97316" />, title: "Reporting", description: "Monthly lead and traffic reports. No jargon, just business results." },
  ];

  const whoFor = [
    { title: "Small Businesses UK & USA", description: "Competing with larger competitors through smarter, targeted SEO strategies." },
    { title: "UK Startups", description: "Building search visibility fast without a massive agency budget." },
    { title: "E-commerce Brands", description: "Reducing ad dependency with sustainable organic traffic that compounds." },
    { title: "Service Businesses", description: "Generating bookings—clinics, tradespeople, law firms and agencies." },
    { title: "SEO Recovery", description: "For those burned by bad SEO—focusing on revenue instead of vanity metrics." },
  ];

  const faqs = [
    { question: "How long does SEO take to show results?", answer: "Most clients see improvements within 3 to 6 months, with compounding results from month 6 onwards." },
    { question: "How much do your SEO services cost?", answer: "Priced specifically for small businesses. Packages are tailored based on competition and goals." },
    { question: "Do you work with UK and USA businesses remotely?", answer: "Yes, we work fully remotely across time zones via WhatsApp, email and video calls." },
    { question: "What is GEO and AEO?", answer: "GEO focuses on AI citations (ChatGPT), while AEO focuses on winning direct Google snippet positions." },
  ];

  const marqueeVariants = {
    animate: {
      x: [0, -1400],
      transition: { x: { repeat: Infinity, repeatType: "loop", duration: 40, ease: "linear" } },
    },
  };

  return (
    <div className="seo-master-wrapper">
      <Navbar />
      <Breadcrumb />

      {/* --- HERO --- */}
      <section className="seo-hero">
        <div className="seo-container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="seo-hero-content">
            <h1 className="seo-hero-h1 seo-moving-gradient">
              SEO Agency for Small Business UK — Built to Generate Leads, Not Just Rankings
            </h1>
            <p className="seo-hero-p">
              AI SEO agency helping businesses across the UK and USA grow organic traffic and turn search visibility into real revenue—without the big London price tag.
            </p>
            <div className="seo-hero-actions">
              <a href="/contact" className="btn-glow-primary">Get Free SEO Audit <ArrowRight size={18} /></a>
              <a href="#results" className="btn-outline-white">See Our Results ↓</a>
            </div>
            <p className="seo-hero-trust-white">Trusted by 120+ businesses across UK, USA & Europe</p>
          </motion.div>
        </div>
      </section>

      {/* --- STATS --- */}
      <section className="seo-stats-bar" id="results">
        <div className="seo-container seo-stats-row">
          {stats.map((stat, i) => (
            <div key={i} className="seo-stat-item">
              <div className="seo-stat-icon-circle">{stat.icon}</div>
              <div className="seo-stat-txt">
                <span className="seo-stat-num">{stat.number}</span>
                <span className="seo-stat-lab">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- WHY CHOOSE (Redesigned Table) --- */}
      <section className="seo-section seo-soft-bg">
        <div className="seo-container">
          <h2 className="seo-section-title seo-moving-gradient-navy">Why Small Businesses Choose ZonzocTech</h2>
          <div className="seo-vs-grid">
             <div className="seo-vs-card old">
                <h4 className="seo-vs-title">Typical SEO Agency</h4>
                <ul>
                  <li><Minus size={14} color="#f43f5e" /> Chases rankings, no revenue focus</li>
                  <li><Minus size={14} color="#f43f5e" /> Generic monthly reports</li>
                  <li><Minus size={14} color="#f43f5e" /> Same strategy for every client</li>
                  <li><Minus size={14} color="#f43f5e" /> No understanding of your business</li>
                </ul>
             </div>
             <div className="seo-vs-card new">
                <h4 className="seo-vs-title">ZonzocTech Advantage</h4>
                <ul>
                  <li><CheckCircle2 size={16} color="#10b981" /> Focused on leads from day one</li>
                  <li><CheckCircle2 size={16} color="#10b981" /> Transparent reporting & custom strategy</li>
                  <li><CheckCircle2 size={16} color="#10b981" /> Realistic timelines & measurable targets</li>
                  <li><CheckCircle2 size={16} color="#10b981" /> Deep UK & USA market expertise</li>
                </ul>
             </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES MOVING ROW --- */}
      <section className="seo-section">
        <div className="seo-container">
          <h2 className="seo-section-title seo-moving-gradient-navy">Our SEO Services for UK & USA</h2>
        </div>
        <div className="seo-marquee-container">
          <motion.div className="seo-marquee-track" variants={marqueeVariants} animate="animate">
            {[...seoServices, ...seoServices].map((service, i) => (
              <div key={i} className="seo-row-card">
                <div className="seo-card-icon-circle">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="seo-pill-group">
                   {service.items.map((it, j) => <span key={j}>{it}</span>)}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- AI SEO MOVING ROW --- */}
      <section className="seo-section seo-navy-bg">
        <div className="seo-container">
          <h2 className="seo-section-title seo-moving-gradient-white">AI SEO — Our Unfair Advantage</h2>
        </div>
        <div className="seo-marquee-container">
          <motion.div className="seo-marquee-track" variants={marqueeVariants} animate="animate">
            {[...aiCapabilities, ...aiCapabilities].map((item, i) => (
              <div key={i} className="seo-row-card-white">
                <div className="seo-card-icon-glass">{item.icon}</div>
                <h3 className="white-txt">{item.title}</h3>
                <p className="white-txt-muted">{item.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- PROCESS ROW --- */}
      <section className="seo-section seo-soft-bg">
        <div className="seo-container">
          <h2 className="seo-section-title seo-moving-gradient-navy">Transparent SEO Process</h2>
          <div className="seo-process-horizontal">
            {processSteps.map((item, i) => (
              <div key={i} className="seo-process-step-col">
                <div className="seo-step-circle">
                  {item.icon}
                  <span className="seo-step-num-badge">{item.step}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                {i < processSteps.length - 1 && <div className="seo-process-line"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- WHO FOR GRID --- */}
      <section className="seo-section">
        <div className="seo-container">
          <h2 className="seo-section-title seo-moving-gradient-navy">Who Our SEO Is Built For</h2>
          <div className="seo-who-grid">
            {whoFor.map((item, i) => (
              <motion.div whileHover={{ y: -5 }} key={i} className="seo-who-card">
                 <div className="seo-who-check">✓</div>
                 <div>
                    <strong>{item.title}</strong>
                    <p>{item.description}</p>
                 </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FAQ --- */}
      <section className="seo-section seo-soft-bg">
        <div className="seo-container">
          <h2 className="seo-section-title">Frequently Asked Questions</h2>
          <div className="seo-faq-wrap">
            {faqs.map((faq, i) => (
              <div key={i} className={`seo-faq-item ${activeFaq === i ? 'active' : ''}`} onClick={() => setActiveFaq(activeFaq === i ? null : i)}>
                <div className="seo-faq-q">
                  <span>{faq.question}</span>
                  {activeFaq === i ? <Minus size={20} /> : <Plus size={20} />}
                </div>
                <AnimatePresence>
                  {activeFaq === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="seo-faq-a">
                      <p>{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SEOServices;