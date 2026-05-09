'use client';
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Cpu, Zap, Search, ShieldCheck, Rocket, MessageSquare, 
  Database, Code, Layers, BarChart3, Globe, Users, 
  Award, Star, Plus, Minus, ArrowRight, CheckCircle2, 
  Workflow, FileText, Settings, Bot 
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import "../styles/AISoftwareServices.css";

const AISoftwareServices = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const stats = [
    { number: "150+", label: "Projects Delivered", icon: <Database color="#38bdf8" /> },
    { number: "120+", label: "Clients Served", icon: <Users color="#a855f7" /> },
    { number: "10+", label: "Years Experience", icon: <Award color="#10b981" /> },
    { number: "4.9★", label: "Client Rating", icon: <Star color="#fbbf24" /> },
  ];

  const businessCase = [
    { title: "Replace Manual Work", description: "Every hour your team spends on repetitive tasks — data entry, report generation, email responses — is an hour not spent on high-value work." },
    { title: "Scale Without Hiring", description: "AI software handles growing workloads without growing headcount. As your business scales, your AI systems scale with it." },
    { title: "Faster Decisions", description: "Custom AI tools analyse your business data in real time — surfacing insights and flagging anomalies faster than any manual process." },
    { title: "Competitive Edge", description: "Businesses that automate move faster and operate more efficiently than competitors still relying on manual processes." },
  ];

  const services = [
    { title: "AI Chatbots UK", icon: <Bot color="#3b82f6" />, description: "Custom AI chatbots for enquiries, lead qualification, and appointment booking trained on your business data." },
    { title: "GPT Integrations", icon: <MessageSquare color="#f97316" />, description: "Integrating OpenAI GPT, Claude, and Gemini into business software for content generation and analysis." },
    { title: "Process Automation", icon: <Zap color="#eab308" />, description: "AI systems that eliminate manual processes — from invoice handling to customer communication workflows." },
    { title: "Workflow Software", icon: <Workflow color="#10b981" />, description: "Custom automation software that connects your tools and eliminates manual coordination slowing you down." },
    { title: "Data Analysis Tools", icon: <BarChart3 color="#6366f1" />, description: "AI data analysis tools that process large datasets to surface patterns and real-time business intelligence." },
    { title: "CRM AI Integration", icon: <Settings color="#06b6d4" />, description: "Adding intelligent lead scoring and predictive analytics to your existing CRM/ERP without full replacement." },
    { title: "Document Processing", icon: <FileText color="#f43f5e" />, description: "Automatically read, extract, and classify info from invoices, contracts, and reports using AI OCR." },
    { title: "Custom AI APIs", icon: <Code color="#8b5cf6" />, description: "Secure, scalable AI APIs that power your products enabling reliable intelligent responses at scale." },
  ];

  const whyChoose = [
    { title: "Business-First", icon: <BarChart3 />, description: "We understand your business problem first, then build AI solutions that create genuine ROI." },
    { title: "Full-Stack AI", icon: <Layers />, description: "We cover the complete stack — from model training and APIs to frontend interfaces and integration." },
    { title: "Seamless Integration", icon: <Workflow />, description: "Integrates with your existing CRMs, ERPs, and databases without disrupting current operations." },
    { title: "Affordable UK Quality", icon: <Globe />, description: "Technical expertise of a premium UK studio at a fraction of the cost via offshore delivery." },
    { title: "Ongoing Support", icon: <ShieldCheck />, description: "Long-term monitoring, model updates, and accuracy refinement as your data evolves." },
  ];

  const processSteps = [
    { step: "01", icon: <Search color="#3b82f6" />, title: "AI Scoping", description: "Workflow analysis and defining automation opportunities." },
    { step: "02", icon: <Layers color="#a855f7" />, title: "Solution Design", description: "Architecture planning, model selection, and security controls." },
    { step: "03", icon: <Code color="#10b981" />, title: "Development", description: "Building in sprints with regular demos and system integration." },
    { step: "04", icon: <Zap color="#f43f5e" />, title: "QA Testing", description: "Extensive accuracy and security testing for production reliability." },
    { step: "05", icon: <Rocket color="#f97316" />, title: "Deployment", description: "Production launch with ongoing monitoring and model updates." },
  ];

  const technologies = [
    { category: "AI & ML", items: ["GPT-4", "Claude", "Gemini", "TensorFlow"], icon: <Cpu color="#3b82f6" /> },
    { category: "Automation", items: ["Make", "Zapier", "REST APIs", "Webhooks"], icon: <Zap color="#eab308" /> },
    { category: "Backend", items: ["Python", "FastAPI", "Node.js", "Docker"], icon: <Code color="#10b981" /> },
    { category: "Data", items: ["PostgreSQL", "MongoDB", "Pinecone", "Redis"], icon: <Database color="#06b6d4" /> },
  ];

  const faqs = [
    { question: "How much does custom AI software development cost?", answer: "Cost depends on complexity. As an offshore AI company, we are significantly more affordable than UK studios without compromising quality." },
    { question: "How long does it take to build custom AI software?", answer: "Simple tools take 4-8 weeks. Complex platforms typically take 3-5 months. We provide clear milestones before work begins." },
    { question: "Can you build AI chatbots for UK businesses?", answer: "Yes. We build custom chatbots trained on your specific business data and integrated into your website or CRM." },
    { question: "Is custom AI software secure?", answer: "Yes. Security is built into every stage — data handling, access control, and API security follow strict compliance standards." },
  ];

  const marqueeVariants = {
    animate: {
      x: [0, -1400],
      transition: { x: { repeat: Infinity, repeatType: "loop", duration: 40, ease: "linear" } },
    },
  };

  return (
    <div className="aiss-master-wrapper">
      <Navbar />
      <Breadcrumb />

      {/* --- HERO --- */}
      <section className="aiss-hero">
        <div className="aiss-container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="aiss-hero-content">
            <h1 className="aiss-hero-h1 aiss-moving-gradient">
              AI Software Development Company UK — Custom Automation Tools and Chatbots
            </h1>
            <p className="aiss-hero-p">
              ZonzocTech builds custom AI software for businesses across the UK and USA. We replace manual, time-consuming operations with smart AI software that works around the clock.
            </p>
            <div className="aiss-hero-actions">
              <a href="/contact" className="btn-glow-primary">Get Free AI Consultation <ArrowRight size={18} /></a>
              <a href="#work" className="btn-outline-white">See Our Work ↓</a>
            </div>
            <p className="aiss-hero-trust-white">Trusted by 120+ businesses across UK, USA & Europe</p>
          </motion.div>
        </div>
      </section>

      {/* --- STATS --- */}
      <section className="aiss-stats-bar" id="work">
        <div className="aiss-container aiss-stats-row">
          {stats.map((stat, i) => (
            <div key={i} className="aiss-stat-item">
              <div className="aiss-stat-icon-circle">{stat.icon}</div>
              <div className="aiss-stat-txt">
                <span className="aiss-stat-num">{stat.number}</span>
                <span className="aiss-stat-lab">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- WHAT IS --- */}
      <section className="aiss-section aiss-soft-bg">
        <div className="aiss-container">
          <h2 className="aiss-section-title aiss-moving-gradient-navy">What Is Custom AI Software Development?</h2>
          <p className="aiss-centered-intro">Bespoke software that uses artificial intelligence to automate tasks, make decisions, and interact with users specifically for your workflows.</p>
          
          <div className="aiss-case-grid">
            {businessCase.map((item, i) => (
              <motion.div whileHover={{ y: -5 }} key={i} className="aiss-case-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- MOVING SERVICES --- */}
      <section className="aiss-section">
        <div className="aiss-container">
          <h2 className="aiss-section-title aiss-moving-gradient-navy">Our AI Software Development Services</h2>
        </div>
        <div className="aiss-marquee-container">
          <motion.div className="aiss-marquee-track" variants={marqueeVariants} animate="animate">
            {[...services, ...services].map((service, i) => (
              <div key={i} className="aiss-row-card">
                <div className="aiss-card-icon-circle">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- MOVING WHY CHOOSE --- */}
      <section className="aiss-section aiss-navy-bg">
        <div className="aiss-container">
          <h2 className="aiss-section-title aiss-moving-gradient-white">Why Businesses Choose ZonzocTech</h2>
        </div>
        <div className="aiss-marquee-container">
          <motion.div className="aiss-marquee-track" variants={marqueeVariants} animate="animate">
            {[...whyChoose, ...whyChoose].map((item, i) => (
              <div key={i} className="aiss-row-card-white">
                <div className="aiss-card-icon-glass">{item.icon}</div>
                <h3 className="white-txt">{item.title}</h3>
                <p className="white-txt-muted">{item.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- PROCESS --- */}
      <section className="aiss-section aiss-soft-bg">
        <div className="aiss-container">
          <h2 className="aiss-section-title aiss-moving-gradient-navy">Our Development Process</h2>
          <div className="aiss-process-horizontal">
            {processSteps.map((item, i) => (
              <div key={i} className="aiss-process-step-col">
                <div className="aiss-step-circle">
                  {item.icon}
                  <span className="aiss-step-num-badge">{item.step}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                {i < processSteps.length - 1 && <div className="aiss-process-line"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- MOVING TECH STACK --- */}
      <section className="aiss-section">
        <div className="aiss-container">
          <h2 className="aiss-section-title aiss-moving-gradient-navy">Technologies We Use</h2>
        </div>
        <div className="aiss-marquee-container">
          <motion.div className="aiss-marquee-track" variants={marqueeVariants} animate="animate">
            {[...technologies, ...technologies].map((tech, i) => (
              <div key={i} className="aiss-tech-row-card">
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

      {/* --- FAQ --- */}
      <section className="aiss-section aiss-soft-bg">
        <div className="aiss-container">
          <h2 className="aiss-section-title">Frequently Asked Questions</h2>
          <div className="aiss-faq-wrap">
            {faqs.map((faq, i) => (
              <div key={i} className={`aiss-faq-item ${activeFaq === i ? 'active' : ''}`} onClick={() => setActiveFaq(activeFaq === i ? null : i)}>
                <div className="aiss-faq-q">
                  <span>{faq.question}</span>
                  {activeFaq === i ? <Minus size={20} /> : <Plus size={20} />}
                </div>
                <AnimatePresence>
                  {activeFaq === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="aiss-faq-a">
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

export default AISoftwareServices;    