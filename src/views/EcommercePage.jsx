'use client';
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShoppingCart, ShoppingBag, Zap, Smartphone, Search, 
  TrendingUp, Star, Users, Database, Layers, 
  Settings, Globe, ShieldCheck, Rocket, ChevronRight, 
  Plus, Minus, ArrowRight, CheckCircle2, Layout, Store,
  Code, Activity
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import "../styles/EcommercePage.css";

const EcommerceDev = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const stats = [
    { number: "150+", label: "Projects Delivered", icon: <Database color="#38bdf8" /> },
    { number: "120+", label: "Clients Served", icon: <Users color="#a855f7" /> },
    { number: "35%", label: "Revenue Growth", icon: <TrendingUp color="#10b981" /> },
    { number: "4.9★", label: "Client Rating", icon: <Star color="#fbbf24" /> },
  ];

  const problems = [
    { title: "Low Conversion Rates", icon: <TrendingUp color="#f43f5e" />, description: "Redesigning and optimising product pages and checkout flows to convert existing traffic." },
    { title: "High Cart Abandonment", icon: <ShoppingBag color="#f97316" />, description: "Eliminating friction points in your checkout process to recover lost revenue." },
    { title: "Slow Page Speed", icon: <Zap color="#eab308" />, description: "Optimising store performance to prevent the 7% conversion drop caused by 1s delays." },
    { title: "Poor Mobile Experience", icon: <Smartphone color="#3b82f6" />, description: "Designing mobile-first for the 60% of UK shoppers browsing on small screens." },
    { title: "Weak Organic Traffic", icon: <Search color="#10b981" />, description: "Building technical SEO into product structures to reduce paid ad dependency." },
  ];

  const services = [
    { title: "Shopify Agency UK", icon: <Store color="#3b82f6" />, description: "Specialist custom Shopify builds, theme customisation, and app integrations that scale." },
    { title: "WooCommerce Experts", icon: <Settings color="#10b981" />, description: "Fast, secure WordPress stores fully optimised for deep flexibility and conversion." },
    { title: "Custom Ecommerce", icon: <Code color="#6366f1" />, description: "Headless builds using React/Next.js for unique business models with zero limits." },
    { title: "Conversion (CRO)", icon: <Activity color="#f43f5e" />, description: "Fixing blockers stopping visitors from buying through data-driven user behavior analysis." },
    { title: "Speed & Performance", icon: <Zap color="#eab308" />, description: "Optimising Core Web Vitals to ensure your store performs at full speed on all devices." },
    { title: "Ecommerce SEO", icon: <Globe color="#0ea5e9" />, description: "Category page fixes, schema markup, and content strategies to drive organic sales." },
    { title: "Marketplace Dev", icon: <Layers color="#8b5cf6" />, description: "Multi-vendor platforms with vendor dashboards and automated commission systems." },
  ];

  const platforms = [
    { title: "Shopify & Plus", description: "UK's top platform. Custom themes and headless experiences." },
    { title: "WooCommerce", description: "Most flexible solution with advanced functional integration." },
    { title: "Custom (React/Next)", description: "Unique requirement platforms built with modern tech stacks." },
    { title: "Headless Commerce", description: "Decoupled architecture for maximum performance and flexibility." },
  ];

  const processSteps = [
    { step: "01", icon: <Search color="#3b82f6" />, title: "Store Audit", description: "Analysing current store data and conversion opportunities." },
    { step: "02", icon: <Layout color="#a855f7" />, title: "Strategy", description: "Designing buying journeys focused on the customer mindset." },
    { step: "03", icon: <Code color="#10b981" />, title: "Development", description: "Building with performant code and system integrations." },
    { step: "04", icon: <ShieldCheck color="#f43f5e" />, title: "Testing", description: "Checkout flow and mobile speed testing before launch." },
    { step: "05", icon: <Rocket color="#f97316" />, title: "Growth", description: "Deployment with analytics and ongoing revenue support." },
  ];

  const whoFor = [
    { title: "New Ecommerce Brands", description: "Launching built properly from the start—fast, secure and conversion-ready." },
    { title: "Non-Converting Stores", description: "Diagnosing exactly what is stopping visitors from buying and fixing it." },
    { title: "Shopify Store Owners", description: "Needing custom builds or advanced app integrations to increase revenue." },
    { title: "WooCommerce Owners", description: "Needing better performance or a rebuild on a faster, reliable foundation." },
    { title: "Scaling Businesses", description: "Outgrown current platforms and needing high-volume multi-channel solutions." },
  ];

  const faqs = [
    { question: "How much does ecommerce development cost in the UK?", answer: "Cost depends on platform and features. As an offshore agency, we offer significantly more competitive pricing than UK firms without quality compromise." },
    { question: "How long does it take to build a store?", answer: "Standard Shopify/WooCommerce takes 4-8 weeks. Custom platforms with advanced features take 3-5 months." },
    { question: "Can you improve my existing store?", answer: "Yes. CRO and performance optimisation are core services. We fix conversion blockers without requiring a full rebuild." },
    { question: "Do you integrate payment and shipping?", answer: "Yes. Stripe, PayPal, Klarna, plus major shipping providers and inventory systems are standard integrations." },
  ];

  const marqueeVariants = {
    animate: {
      x: [0, -1400],
      transition: { x: { repeat: Infinity, repeatType: "loop", duration: 40, ease: "linear" } },
    },
  };

  return (
    <div className="ecd-master-wrapper">
      <Navbar />
      <Breadcrumb />

      {/* --- HERO --- */}
      <section className="ecd-hero">
        <div className="ecd-container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="ecd-hero-content">
            <h1 className="ecd-hero-h1 ecd-moving-gradient">
              Ecommerce Development Agency UK — Online Stores Built to Sell and Scale
            </h1>
            <p className="ecd-hero-p">
              Building high-converting online stores for businesses across the UK and USA. We design, develop and optimise stores that turn browsers into buyers and grow revenue consistently.
            </p>
            <div className="ecd-hero-actions">
              <a href="/contact" className="btn-glow-primary">Get Free Ecommerce Audit <ArrowRight size={18} /></a>
              <a href="#work" className="btn-outline-white">See Our Work ↓</a>
            </div>
            <p className="ecd-hero-trust-white">Trusted by 120+ businesses across UK, USA & Europe</p>
          </motion.div>
        </div>
      </section>

      {/* --- STATS --- */}
      <section className="ecd-stats-bar" id="work">
        <div className="ecd-container ecd-stats-row">
          {stats.map((stat, i) => (
            <div key={i} className="ecd-stat-item">
              <div className="ecd-stat-icon-circle">{stat.icon}</div>
              <div className="ecd-stat-txt">
                <span className="ecd-stat-num">{stat.number}</span>
                <span className="ecd-stat-lab">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- PROBLEMS --- */}
      <section className="ecd-section ecd-soft-bg">
        <div className="ecd-container">
          <h2 className="ecd-section-title ecd-moving-gradient-navy">Why Most Stores Underperform — And How We Fix It</h2>
          <p className="ecd-centered-intro">Most stores suffer from traffic or conversion issues. We build ecommerce engines around revenue, optimising every checkout flow to build trust and sales.</p>
          
          <div className="ecd-problems-grid">
            {problems.map((item, i) => (
              <motion.div whileHover={{ y: -5 }} key={i} className="ecd-problem-card">
                <div className="ecd-problem-icon-box">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- MOVING SERVICES --- */}
      <section className="ecd-section">
        <div className="ecd-container">
          <h2 className="ecd-section-title ecd-moving-gradient-navy">Our Ecommerce Services</h2>
        </div>
        <div className="ecd-marquee-container">
          <motion.div className="ecd-marquee-track" variants={marqueeVariants} animate="animate">
            {[...services, ...services].map((service, i) => (
              <div key={i} className="ecd-row-card">
                <div className="ecd-card-icon-circle">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- MOVING PLATFORMS --- */}
      <section className="ecd-section ecd-navy-bg">
        <div className="ecd-container">
          <h2 className="ecd-section-title ecd-moving-gradient-white">Platforms We Dominate</h2>
        </div>
        <div className="ecd-marquee-container">
          <motion.div className="ecd-marquee-track" variants={marqueeVariants} animate="animate">
            {[...platforms, ...platforms].map((item, i) => (
              <div key={i} className="ecd-row-card-white">
                <div className="ecd-card-icon-glass"><CheckCircle2 color="#38bdf8" /></div>
                <h3 className="white-txt">{item.title}</h3>
                <p className="white-txt-pure">{item.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- PROCESS --- */}
      <section className="ecd-section fswd-soft-bg">
        <div className="ecd-container">
          <h2 className="ecd-section-title ecd-moving-gradient-navy">Our Strategic Process</h2>
          <div className="ecd-process-horizontal">
            {processSteps.map((item, i) => (
              <div key={i} className="ecd-process-step-col">
                <div className="ecd-step-circle">
                  {item.icon}
                  <span className="ecd-step-num-badge">{item.step}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                {i < processSteps.length - 1 && <div className="ecd-process-line"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- WHO FOR (REFINED BARS) --- */}
      <section className="ecd-section">
        <div className="ecd-container">
          <h2 className="ecd-section-title ecd-moving-gradient-navy">Who Our Service Is Built For</h2>
          <div className="ecd-who-bars-wrapper">
            {whoFor.map((item, i) => (
              <motion.div 
                whileHover={{ x: 15, backgroundColor: "#f0f7ff", borderColor: "#38bdf8" }} 
                key={i} 
                className="ecd-who-bar-item"
              >
                 <div className="ecd-who-icon-circle">
                    <CheckCircle2 size={22} color="#00448f" />
                 </div>
                 <div className="ecd-who-text-content">
                    <strong>{item.title}</strong>
                    <p>{item.description}</p>
                 </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FAQ --- */}
      <section className="ecd-section ecd-soft-bg">
        <div className="ecd-container">
          <h2 className="ecd-section-title">Frequently Asked Questions</h2>
          <div className="ecd-faq-wrap">
            {faqs.map((faq, i) => (
              <div key={i} className={`ecd-faq-item ${activeFaq === i ? 'active' : ''}`} onClick={() => setActiveFaq(activeFaq === i ? null : i)}>
                <div className="ecd-faq-q">
                  <span>{faq.question}</span>
                  {activeFaq === i ? <Minus size={20} /> : <Plus size={20} />}
                </div>
                <AnimatePresence>
                  {activeFaq === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="ecd-faq-a">
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

export default EcommerceDev;