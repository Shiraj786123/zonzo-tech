'use client';
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Code, Layers, Database, Cloud, Globe, Cpu, 
  Rocket, Zap, Search, ShieldCheck, Layout, 
  BarChart3, Plus, Minus, ArrowRight, Users, 
  Award, Star, Monitor, Settings, RefreshCw 
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import "../styles/FullStackWebDev.css";

const FullStackWebDev = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const stats = [
    { number: "150+", label: "Projects Delivered", icon: <Rocket color="#38bdf8" /> },
    { number: "120+", label: "Clients Served", icon: <Users color="#a855f7" /> },
    { number: "10+", label: "Years Experience", icon: <Award color="#10b981" /> },
    { number: "4.9★", label: "Client Rating", icon: <Star color="#fbbf24" /> },
  ];

  const whatIsItems = [
    { title: "Frontend", icon: <Layout color="#3b82f6" />, description: "Everything the user sees — designed for speed and conversion." },
    { title: "Backend", icon: <Settings color="#f97316" />, description: "Logic and APIs powering your app with reliability." },
    { title: "Database", icon: <Database color="#10b981" />, description: "Optimised data systems that stay fast as you scale." },
    { title: "APIs", icon: <Cpu color="#6366f1" />, description: "Seamless connections to third-party tools and systems." },
    { title: "Cloud", icon: <Cloud color="#06b6d4" />, description: "Secure, scalable hosting on AWS or Google Cloud." },
  ];

  const services = [
    { title: "Custom Web Apps", icon: <Monitor color="#3b82f6" />, description: "Bespoke applications tailored to exact requirements — clean code." },
    { title: "MVP for Startups", icon: <Rocket color="#f97316" />, description: "Building lean, functional MVPs fast to validate your idea." },
    { title: "SaaS Platforms", icon: <Layers color="#a855f7" />, description: "Multi-tenant platforms with subscription and analytics." },
    { title: "React & Next.js", icon: <Zap color="#eab308" />, description: "Specialist server-side rendering and modern architecture." },
    { title: "Backend & APIs", icon: <Settings color="#6366f1" />, description: "Secure systems using Node.js, Java and Python." },
    { title: "Modernisation", icon: <RefreshCw color="#10b981" />, description: "Migrating legacy systems to modern full stack architectures." },
  ];

  const whyChoose = [
    { title: "Affordable Quality", icon: <Award color="#38bdf8" />, description: "Premium technical quality at lower offshore costs." },
    { title: "React Specialists", icon: <Zap color="#eab308" />, description: "Core expertise in modern, scalable web technologies." },
    { title: "Full Ownership", icon: <ShieldCheck color="#10b981" />, description: "One dedicated team owns your project from end-to-end." },
    { title: "Built for Growth", icon: <BarChart3 color="#a855f7" />, description: "Lean solutions designed to grow with your budget." },
    { title: "SEO Integrated", icon: <Search color="#06b6d4" />, description: "Core Web Vitals and technical SEO optimized from day one." },
  ];

  const processSteps = [
    { step: "01", icon: <Search color="#3b82f6" />, title: "Discovery", description: "Understanding business goals and technical needs." },
    { step: "02", icon: <Layout color="#a855f7" />, title: "Architecture", description: "Designing system blueprints and UI/UX wireframes." },
    { step: "03", icon: <Code color="#10b981" />, title: "Agile Dev", description: "Two-week sprints with regular demos and check-ins." },
    { step: "04", icon: <ShieldCheck color="#f43f5e" />, title: "Testing & QA", description: "Thorough functionality and security testing." },
    { step: "05", icon: <Cloud color="#f97316" />, title: "Deployment", description: "Production launch with ongoing maintenance." },
  ];

  const techStack = [
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind"], icon: <Layout color="#3b82f6" /> },
    { category: "Backend", items: ["Node.js", "Java", "Python", "GraphQL"], icon: <Code color="#a855f7" /> },
    { category: "Databases", items: ["Postgres", "MySQL", "MongoDB", "Redis"], icon: <Database color="#10b981" /> },
    { category: "Cloud/DevOps", items: ["AWS", "Docker", "CI/CD", "Vercel"], icon: <Cloud color="#06b6d4" /> },
    { category: "CMS", items: ["WordPress", "Shopify", "Strapi", "Headless"], icon: <Layers color="#f97316" /> },
  ];

  const faqs = [
    { question: "How much does full stack web development cost in the UK?", answer: "The cost depends on complexity. As an offshore full stack agency we are significantly more affordable than UK-based studios without any compromise on quality." },
    { question: "How long does it take to build a web application?", answer: "A simple MVP typically takes 6 to 10 weeks. A complex SaaS platform or enterprise application can take 3 to 6 months." },
    { question: "Can I hire a full stack developer from ZonzocTech?", answer: "Yes. We offer dedicated developer engagement models for UK and USA companies needing skilled developers embedded in their team." },
    { question: "Do you build MVPs for startups?", answer: "Yes. MVP development is one of our most popular services. We build functional products fast to test your idea with real users." },
    { question: "Do you work with React and Next.js?", answer: "Yes. They are our primary technologies. We are specialists in building fast, SEO-friendly and scalable web applications with them." },
    { question: "Can you upgrade my existing web application?", answer: "Yes. We regularly help businesses modernise legacy systems, improving performance and migrating to modern tech stacks." },
  ];

  const marqueeVariants = {
    animate: {
      x: [0, -1400],
      transition: { x: { repeat: Infinity, repeatType: "loop", duration: 45, ease: "linear" } },
    },
  };

  return (
    <div className="fswd-master-wrapper">
      <Navbar />
      <Breadcrumb />

      {/* --- HERO --- */}
      <section className="fswd-hero">
        <div className="fswd-container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="fswd-hero-content">
            <h1 className="fswd-hero-title fswd-moving-gradient">Full Stack Web Development Agency UK — Custom Web Apps Built to Scale</h1>
            <p className="fswd-hero-description">Helping businesses across the UK and USA build high-performance custom web applications, MVPs and SaaS platforms on time and on budget.</p>
            <div className="fswd-hero-btns">
              <a href="/contact" className="btn-glow-primary">Get Free Consultation <ArrowRight size={18} /></a>
              <a href="#work" className="btn-outline-white">See Our Work ↓</a>
            </div>
            <p className="fswd-hero-trust-pure-white">Trusted by 120+ businesses across UK, USA & Europe</p>
          </motion.div>
        </div>
      </section>

      {/* --- STATS --- */}
      <section className="fswd-stats-bar" id="work">
        <div className="fswd-container fswd-stats-row">
          {stats.map((stat, i) => (
            <div key={i} className="fswd-stat-item">
              <div className="fswd-stat-icon-circle">{stat.icon}</div>
              <div className="fswd-stat-txt">
                <span className="fswd-stat-num">{stat.number}</span>
                <span className="fswd-stat-lab">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- WHAT IS --- */}
      <section className="fswd-section fswd-soft-bg">
        <div className="fswd-container">
          <h2 className="fswd-section-title fswd-moving-gradient-navy">What Is Full Stack Web Development?</h2>
          <p className="fswd-centered-intro">One integrated team handles frontend interaction and backend data logic for faster, cleaner delivery.</p>
        </div>
        <div className="fswd-marquee-container">
          <motion.div className="fswd-marquee-track" variants={marqueeVariants} animate="animate">
            {[...whatIsItems, ...whatIsItems].map((item, i) => (
              <div key={i} className="fswd-row-card">
                <div className="fswd-card-icon-circle">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- SERVICES --- */}
      <section className="fswd-section">
        <div className="fswd-container">
          <h2 className="fswd-section-title fswd-moving-gradient-navy">Full Stack Development Services</h2>
        </div>
        <div className="fswd-marquee-container">
          <motion.div className="fswd-marquee-track" variants={marqueeVariants} animate="animate">
            {[...services, ...services].map((service, i) => (
              <div key={i} className="fswd-row-card fswd-service-bg">
                <div className="fswd-card-icon-circle">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- WHY CHOOSE --- */}
      <section className="fswd-section fswd-navy-bg">
        <div className="fswd-container">
          <h2 className="fswd-section-title fswd-moving-gradient-white">Why Hire ZonzocTech</h2>
        </div>
        <div className="fswd-marquee-container">
          <motion.div className="fswd-marquee-track" variants={marqueeVariants} animate="animate">
            {[...whyChoose, ...whyChoose].map((item, i) => (
              <div key={i} className="fswd-row-card-white">
                <div className="fswd-card-icon-glass">{item.icon}</div>
                <h3 className="white-txt">{item.title}</h3>
                <p className="white-txt-pure">{item.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- PROCESS --- */}
      <section className="fswd-section fswd-soft-bg">
        <div className="fswd-container">
          <h2 className="fswd-section-title fswd-moving-gradient-navy">Our Development Process</h2>
          <div className="fswd-process-horizontal">
            {processSteps.map((item, i) => (
              <div key={i} className="fswd-process-step-col">
                <div className="fswd-step-circle">
                  {item.icon}
                  <span className="fswd-step-num-badge">{item.step}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                {i < processSteps.length - 1 && <div className="fswd-process-line"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TECH STACK --- */}
      <section className="fswd-section">
        <div className="fswd-container">
          <h2 className="fswd-section-title fswd-moving-gradient-navy">Technologies We Use</h2>
        </div>
        <div className="fswd-marquee-container">
          <motion.div className="fswd-marquee-track" variants={marqueeVariants} animate="animate">
            {[...techStack, ...techStack].map((tech, i) => (
              <div key={i} className="fswd-tech-row-card">
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
      <section className="fswd-section fswd-soft-bg">
        <div className="fswd-container">
          <h2 className="fswd-section-title">Frequently Asked Questions</h2>
          <div className="fswd-faq-wrap">
            {faqs.map((faq, i) => (
              <div key={i} className={`fswd-faq-item ${activeFaq === i ? 'active' : ''}`} onClick={() => setActiveFaq(activeFaq === i ? null : i)}>
                <div className="fswd-faq-q">
                  <span>{faq.question}</span>
                  {activeFaq === i ? <Minus size={20} /> : <Plus size={20} />}
                </div>
                <AnimatePresence>
                  {activeFaq === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="fswd-faq-a">
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

export default FullStackWebDev;