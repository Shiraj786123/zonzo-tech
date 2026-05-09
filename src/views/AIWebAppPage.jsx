'use client';
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Cpu, Users, Award, Star, Database, Layout, Rocket, Zap, 
  Search, ShieldCheck, Globe, Code, Layers, MousePointer2, 
  MessageSquare, BarChart3, Plus, Minus, ArrowRight 
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import "../styles/AIWebAppPage.css";

const AIWebAppDev = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const stats = [
    { number: "150+", label: "Projects Delivered", icon: <Database color="#38bdf8" /> },
    { number: "120+", label: "Clients Served", icon: <Users color="#a855f7" /> },
    { number: "10+", label: "Years Experience", icon: <Award color="#10b981" /> },
    { number: "4.9★", label: "Client Rating", icon: <Star color="#fbbf24" /> },
  ];

  const services = [
    { title: "AI SaaS Platforms", icon: <Layers color="#3b82f6" />, description: "We design and build scalable AI-powered SaaS products from the ground up — including multi-tenancy, subscription billing, and AI feature integration." },
    { title: "GPT & LLM Apps", icon: <MessageSquare color="#f97316" />, description: "We integrate OpenAI GPT, Claude, and Gemini into custom web applications — enabling intelligent content generation and AI-driven workflows." },
    { title: "Automation Tools", icon: <Zap color="#eab308" />, description: "We build internal web applications that automate your most repetitive business processes — freeing your team to focus on high-value work." },
    { title: "AI Dashboards", icon: <BarChart3 color="#10b981" />, description: "We build intelligent dashboards that go beyond static charts — applying AI analysis and surfacing the insights your team actually needs." },
    { title: "AI Chatbots", icon: <Cpu color="#6366f1" />, description: "We build custom AI chatbots and virtual assistants that handle customer queries, qualify leads, and book appointments automatically." },
    { title: "API Integrations", icon: <Code color="#06b6d4" />, description: "Already have a web application? We integrate AI APIs and third-party services into your existing systems without rebuilding from scratch." },
  ];

  const whyChoose = [
    { title: "AI-First Design", icon: <Cpu color="#3b82f6" />, description: "We don't bolt AI on as an afterthought. We design every application with AI at its core from day one." },
    { title: "Full-Stack Expertise", icon: <Layers color="#a855f7" />, description: "Our team covers frontend, backend, AI integration, and cloud deployment under one roof with no outsourcing." },
    { title: "Business Focused", icon: <BarChart3 color="#10b981" />, description: "We build for real-world business outcomes. Every AI feature is justified by the value it creates for your bottom line." },
    { title: "Cost Effective", icon: <Globe color="#38bdf8" />, description: "As an offshore agency, we offer technical expertise of a premium UK studio at a significantly lower cost." },
    { title: "Long-Term Growth", icon: <ShieldCheck color="#10b981" />, description: "We don't disappear after launch. We provide ongoing support, optimization, and feature development as you grow." },
  ];

  const processSteps = [
    { step: "01", icon: <Search color="#3b82f6" />, title: "Discovery", description: "Understanding your business goals, users, and workflows to define the right AI use cases." },
    { step: "02", icon: <Layout color="#a855f7" />, title: "Architecture", description: "Designing the structure, AI model selection, data flows, and UI/UX blueprints before coding." },
    { step: "03", icon: <Code color="#10b981" />, title: "Agile Dev", description: "Building in sprints with regular demos and check-ins to ensure alignment and avoid costly changes." },
    { step: "04", icon: <ShieldCheck color="#f43f5e" />, title: "QA Testing", description: "Thorough testing for performance, security, and scalability — including AI model accuracy checks." },
    { step: "05", icon: <Rocket color="#f97316" />, title: "Launch", description: "Deployment to production, full handover documentation, and ongoing maintenance optimization." },
  ];

  const technologies = [
    { category: "Frontend", items: ["React & Next.js", "TypeScript", "Tailwind CSS"], icon: <Layout color="#3b82f6" /> },
    { category: "Backend", items: ["Node.js", "Java & Spring Boot", "Python"], icon: <Code color="#a855f7" /> },
    { category: "AI & ML", items: ["OpenAI GPT & API", "LangChain", "TensorFlow"], icon: <Cpu color="#eab308" /> },
    { category: "Cloud", items: ["AWS & Google Cloud", "Docker & Kubernetes", "CI/CD"], icon: <Globe color="#10b981" /> },
    { category: "Databases", items: ["PostgreSQL & MongoDB", "Firebase", "Redis"], icon: <Database color="#06b6d4" /> },
  ];

  const faqs = [
    { question: "How much does AI web application development cost in the UK?", answer: "The cost depends on complexity. As an offshore agency, we offer significantly more competitive pricing than UK-based studios without compromising quality." },
    { question: "How long does it take to build an AI web application?", answer: "A simple tool can take 4-8 weeks. A full SaaS platform typically takes 3-6 months. We provide clear timelines before work begins." },
    { question: "Can you add AI features to my existing web application?", answer: "Yes. We regularly integrate AI capabilities like GPT, automation, and analytics into existing systems without a full rebuild." },
    { question: "Do you hire out AI web developers for UK companies?", answer: "Yes. We offer dedicated developer engagement models for companies that need skilled AI developers embedded in their team." },
    { question: "What industries do you build AI web apps for?", answer: "E-commerce, healthcare, logistics, finance, and professional services across the UK, USA, and Europe." },
  ];

  const marqueeVariants = {
    animate: {
      x: [0, -1200],
      transition: {
        x: { repeat: Infinity, repeatType: "loop", duration: 35, ease: "linear" },
      },
    },
  };

  return (
    <div className="aiwa-master-wrapper">
      <Navbar />
      <Breadcrumb />

      {/* HERO SECTION */}
      <section className="aiwa-hero">
        <div className="aiwa-container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="aiwa-hero-content">
            <h1 className="aiwa-hero-title aiwa-moving-gradient">
              AI Web Application Development Company Serving UK & USA Businesses
            </h1>
            <p className="aiwa-hero-description">
              ZonzocTech builds custom AI-powered web applications for businesses across the UK and USA. From intelligent dashboards and SaaS platforms to GPT-powered tools — we turn ideas into scalable apps.
            </p>
            <div className="aiwa-hero-btns">
              <a href="/contact" className="btn-glow-primary">Get Free Consultation <ArrowRight size={18} /></a>
              <a href="#work" className="btn-outline-white">See Our Work ↓</a>
            </div>
            <p className="aiwa-white-trust">Trusted by 120+ businesses across UK, USA & Europe</p>
          </motion.div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="aiwa-stats-bar" id="work">
        <div className="aiwa-container aiwa-stats-row">
          {stats.map((stat, i) => (
            <div key={i} className="aiwa-stat-item">
              <div className="aiwa-stat-icon-circle">{stat.icon}</div>
              <div className="aiwa-stat-txt">
                <span className="aiwa-stat-num">{stat.number}</span>
                <span className="aiwa-stat-lab">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT IS AI DEV */}
      <section className="aiwa-section aiwa-soft-bg">
        <div className="aiwa-container">
          <h2 className="aiwa-section-title aiwa-moving-gradient-navy">What Is AI Web Application Development?</h2>
          <div className="aiwa-flow-box">
             <div className="aiwa-flow-text">
                <p>AI web application development is the process of building software that uses artificial intelligence to automate tasks, analyze data, and make smarter decisions.</p>
                <p>Unlike standard apps, AI applications learn from behavior and continuously improve, giving UK/USA businesses a significant competitive edge.</p>
             </div>
             <div className="aiwa-examples-grid">
                {["Intelligent Dashboards", "AI SaaS platforms", "GPT tools", "Lead Qualification", "Personalization Engines", "Workflow Automation", "Predictive Analytics", "AI Chatbots"].map((item, i) => (
                  <div key={i} className="aiwa-example-pill"><div className="pill-dot"></div> {item}</div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* SERVICES MOVING ROW */}
      <section className="aiwa-section">
        <div className="aiwa-container">
          <h2 className="aiwa-section-title aiwa-moving-gradient-navy">Custom AI Web App Services</h2>
        </div>
        <div className="aiwa-marquee-container">
          <motion.div className="aiwa-marquee-track" variants={marqueeVariants} animate="animate">
            {[...services, ...services].map((service, i) => (
              <div key={i} className="aiwa-row-card">
                <div className="aiwa-card-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE MOVING ROW */}
      <section className="aiwa-section aiwa-navy-bg">
        <div className="aiwa-container">
          <h2 className="aiwa-section-title aiwa-moving-gradient-white">Why Businesses Choose ZonzocTech</h2>
        </div>
        <div className="aiwa-marquee-container">
          <motion.div className="aiwa-marquee-track" variants={marqueeVariants} animate="animate">
            {[...whyChoose, ...whyChoose].map((item, i) => (
              <div key={i} className="aiwa-row-card-white">
                <div className="aiwa-card-icon-glass">{item.icon}</div>
                <h3 className="white-txt">{item.title}</h3>
                <p className="white-txt-muted">{item.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PROCESS MOVING ROW */}
      <section className="aiwa-section aiwa-soft-bg">
        <div className="aiwa-container">
          <h2 className="aiwa-section-title aiwa-moving-gradient-navy">Our Development Process</h2>
        </div>
        <div className="aiwa-marquee-container">
          <motion.div className="aiwa-marquee-track" variants={marqueeVariants} animate="animate">
            {[...processSteps, ...processSteps].map((item, i) => (
              <div key={i} className="aiwa-process-card-row">
                <div className="process-step-circle">
                  {item.icon}
                  <span className="step-tag">{item.step}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* TECH STACK MOVING ROW */}
      <section className="aiwa-section">
        <div className="aiwa-container">
          <h2 className="aiwa-section-title aiwa-moving-gradient-navy">Technologies We Use</h2>
        </div>
        <div className="aiwa-marquee-container">
          <motion.div className="aiwa-marquee-track" variants={marqueeVariants} animate="animate">
            {[...technologies, ...technologies].map((tech, i) => (
              <div key={i} className="aiwa-tech-card">
                <div className="tech-icon-top">{tech.icon}</div>
                <h4>{tech.category}</h4>
                <div className="tech-pills">
                  {tech.items.map((it, j) => <span key={j}>{it}</span>)}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="aiwa-section aiwa-soft-bg">
        <div className="aiwa-container">
          <h2 className="aiwa-section-title">Frequently Asked Questions</h2>
          <div className="aiwa-faq-wrap">
            {faqs.map((faq, i) => (
              <div key={i} className={`aiwa-faq-item ${activeFaq === i ? 'active' : ''}`} onClick={() => setActiveFaq(activeFaq === i ? null : i)}>
                <div className="aiwa-faq-q">
                  <span>{faq.question}</span>
                  {activeFaq === i ? <Minus size={20} /> : <Plus size={20} />}
                </div>
                <AnimatePresence>
                  {activeFaq === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="aiwa-faq-a">
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

export default AIWebAppDev;