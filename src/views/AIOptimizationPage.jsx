'use client';
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, Globe, TrendingUp, Star, Zap, Bot, Layers, 
  Database, Cpu, MessageSquare, Mic, ShieldCheck, 
  ArrowRight, CheckCircle2, Plus, Minus, Users, FileSearch, 
  Network, Code, Monitor, Activity
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import "../styles/AIOptimizationPage.css";

const AISearchOptimization = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const stats = [
    { number: "150+", label: "Projects Delivered", icon: <Database color="#38bdf8" /> },
    { number: "120+", label: "Clients Served", icon: <Users color="#a855f7" /> },
    { number: "35%", label: "Traffic Growth", icon: <TrendingUp color="#10b981" /> },
    { number: "4.9★", label: "Client Rating", icon: <Star color="#fbbf24" /> },
  ];

  const comparisonData = [
    { traditional: "Optimizes for Google blue links only", ai: "Optimizes for Google AND AI platforms" },
    { traditional: "Keyword ranking focused", ai: "Entity and intent focused" },
    { traditional: "Click-through traffic dependent", ai: "Visible in AI-generated answers" },
    { traditional: "Ignores AI-generated answers", ai: "Cited by ChatGPT and Perplexity" },
    { traditional: "Misses voice & conversational search", ai: "Captures voice search queries" },
    { traditional: "Falling effectiveness year on year", ai: "Future-proof visibility strategy" },
  ];

  const services = [
    { title: "Generative Engine Optimization (GEO)", icon: <Cpu />, description: "Structuring content so AI engines like ChatGPT and Google AI Overviews cite your business as an authoritative source." },
    { title: "Answer Engine Optimization (AEO)", icon: <MessageSquare />, description: "Winning direct answer positions—Google snippets, PAA boxes, and AI Overview responses specifically for customer questions." },
    { title: "Entity-Based SEO", icon: <Network />, description: "Building entity presence across the Knowledge Graph so AI understands who you are, what you do, and why you are trusted." },
    { title: "Topical Authority", icon: <Layers />, description: "Deep, comprehensive expertise strategies that establish your site as the definitive resource in your specific field." },
    { title: "Schema Markup", icon: <Code />, description: "Implementing Organization, Service, and FAQ schema to make your content machine-readable and AI-citation ready." },
    { title: "AI Content Strategy", icon: <Bot />, description: " factual, structured content following E-E-A-T principles evaluated by both Google and AI platforms for trust." },
    { title: "Voice Search", icon: <Mic />, description: "Optimizing natural language queries for Siri, Alexa, and Google Assistant chat interfaces." },
    { title: "AI Technical SEO", icon: <Monitor />, description: "Technical foundations—speed and crawlability—meeting the requirements of AI-powered search systems." },
  ];

  const whyChoose = [
    { title: "Early Mover Advantage", description: "ZonzocTech has been optimising for generative engines since emergence—giving you a head start over competitors." },
    { title: "Combined SEO Strategy", description: "We combine proven SEO fundamentals with cutting-edge AI optimization covering every channel your customers use." },
    { title: "Business-Focused", description: "Every optimization is tied back to leads, enquiries and revenue—not just impressions or simple citations." },
    { title: "Integrated Expertise", description: "Our team covers both strong technical SEO and high-quality content strategy for a complete approach." },
    { title: "Transparent Reporting", description: "We track AI visibility, organic traffic, and rankings to give a clear picture of how our work impacts your growth." },
  ];

  const processSteps = [
    { step: "01", icon: <FileSearch color="#3b82f6" />, title: "Visibility Audit", description: "Auditing how you appear in AI search answers and identifying gaps." },
    { step: "02", icon: <Network color="#a855f7" />, title: "Entity Mapping", description: "Mapping business entities and topics needed to establish authority." },
    { step: "03", icon: <Code color="#10b981" />, title: "Technical/Schema", description: "Implementing structured data and optimising site architecture." },
    { step: "04", icon: <Zap color="#f43f5e" />, title: "Content Creation", description: "Optimizing content designed to appear in AI-generated answers." },
    { step: "05", icon: <Activity color="#f97316" />, title: "Adapt & Report", description: "Monitoring visibility across platforms and adapting as AI search evolves." },
  ];

  const faqs = [
    { question: "What is generative engine optimization?", answer: "GEO is the process of optimizing content so AI search engines like ChatGPT cite your business as a trusted source. It is the most important emerging discipline in marketing." },
    { question: "What is answer engine optimization?", answer: "AEO focuses on winner direct answer positions—the goal is to be the answer, not just a result on a list." },
    { question: "Is traditional SEO still important?", answer: "Yes. Traditional Google SEO still drives significant traffic. AI search optimization works alongside it, not instead of it." },
    { question: "How do you measure AI search visibility?", answer: "We track brand mentions, citations, featured snippet wins, and voice search visibility for a comprehensive picture." },
  ];

  const marqueeVariants = {
    animate: {
      x: [0, -1400],
      transition: { x: { repeat: Infinity, repeatType: "loop", duration: 40, ease: "linear" } },
    },
  };

  return (
    <div className="aiso-master-wrapper">
      <Navbar />
      <Breadcrumb />

      {/* --- HERO --- */}
      <section className="aiso-hero">
        <div className="aiso-container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="aiso-hero-content">
            <h1 className="aiso-hero-h1 aiso-moving-gradient">
              AI SEO Agency UK — Get Found on Google, ChatGPT and Every AI Search Engine
            </h1>
            <p className="aiso-hero-p">
              Search has changed. Your customers are asking ChatGPT, Perplexity, and Google AI Overviews for answers. We help businesses stay visible across every traditional and AI-powered search platform.
            </p>
            <div className="aiso-hero-actions">
              <a href="/contact" className="btn-glow-primary">Free AI Search Audit <ArrowRight size={18} /></a>
              <a href="#reality" className="btn-outline-white">How It Works ↓</a>
            </div>
            <p className="aiso-hero-trust-white">Trusted by 120+ businesses across UK, USA & Europe</p>
          </motion.div>
        </div>
      </section>

      {/* --- STATS --- */}
      <section className="aiso-stats-bar">
        <div className="aiso-container aiso-stats-row">
          {stats.map((stat, i) => (
            <div key={i} className="aiso-stat-item">
              <div className="aiso-stat-icon-circle">{stat.icon}</div>
              <div className="aiso-stat-txt">
                <span className="aiso-stat-num">{stat.number}</span>
                <span className="aiso-stat-lab">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- REALITY & TABLE --- */}
      <section className="aiso-section aiso-soft-bg" id="reality">
        <div className="aiso-container">
          <h2 className="aiso-section-title aiso-moving-gradient-navy">Why Traditional SEO Is No Longer Enough</h2>
          <p className="aiso-centered-intro">Google now answers 60% of searches directly. If you only optimize for blue links, you are losing visibility to AI-ready competitors.</p>
          
          <div className="aiso-comparison-table-wrapper">
            <div className="aiso-table-header">
              <div className="aiso-th">Traditional SEO Only</div>
              <div className="aiso-th aiso-accent-th">AI Search Optimization</div>
            </div>
            {comparisonData.map((row, i) => (
              <div key={i} className="aiso-tr">
                <div className="aiso-td td-old">{row.traditional}</div>
                <div className="aiso-td td-new">{row.ai}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- MOVING SERVICES --- */}
      <section className="aiso-section">
        <div className="aiso-container">
          <h2 className="aiso-section-title aiso-moving-gradient-navy">Our AI SEO & Search Services</h2>
        </div>
        <div className="aiso-marquee-container">
          <motion.div className="aiso-marquee-track" variants={marqueeVariants} animate="animate">
            {[...services, ...services].map((service, i) => (
              <div key={i} className="aiso-row-card">
                <div className="aiso-card-icon-circle">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- MOVING WHY CHOOSE --- */}
      <section className="aiso-section aiso-navy-bg">
        <div className="aiso-container">
          <h2 className="aiso-section-title aiso-moving-gradient-white">Why Businesses Choose ZonzocTech</h2>
        </div>
        <div className="aiso-marquee-container">
          <motion.div className="aiso-marquee-track" variants={marqueeVariants} animate="animate">
            {[...whyChoose, ...whyChoose].map((item, i) => (
              <div key={i} className="aiso-row-card-white">
                <div className="aiso-card-icon-glass"><CheckCircle2 color="#38bdf8" /></div>
                <h3 className="white-txt">{item.title}</h3>
                <p className="white-txt-muted">{item.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- PROCESS --- */}
      <section className="aiso-section fswd-soft-bg">
        <div className="aiso-container">
          <h2 className="aiso-section-title aiso-moving-gradient-navy">Our AI Search Process</h2>
          <div className="aiso-process-horizontal">
            {processSteps.map((item, i) => (
              <div key={i} className="aiso-process-step-col">
                <div className="aiso-step-circle">
                  {item.icon}
                  <span className="aiso-step-num-badge">{item.step}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                {i < processSteps.length - 1 && <div className="aiso-process-line"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FAQ --- */}
      <section className="aiso-section aiso-soft-bg">
        <div className="aiso-container">
          <h2 className="aiso-section-title">Frequently Asked Questions</h2>
          <div className="aiso-faq-wrap">
            {faqs.map((faq, i) => (
              <div key={i} className={`aiso-faq-item ${activeFaq === i ? 'active' : ''}`} onClick={() => setActiveFaq(activeFaq === i ? null : i)}>
                <div className="aiso-faq-q">
                  <span>{faq.question}</span>
                  {activeFaq === i ? <Minus size={20} /> : <Plus size={20} />}
                </div>
                <AnimatePresence>
                  {activeFaq === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="aiso-faq-a">
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

export default AISearchOptimization;