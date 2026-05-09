'use client';
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShieldCheck, Zap, RefreshCw, Activity, Database, Search, 
  Settings, Clock, AlertTriangle, ShieldAlert, TrendingDown, 
  CheckCircle2, Plus, Minus, ArrowRight, Users, Award, Star,
  FileSearch, PenTool, Eye, BarChart3, Globe, Smartphone, Laptop
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import "../styles/WebsiteMaintenance.css";

const WebsiteMaintenance = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const stats = [
    { number: "150+", label: "Websites Maintained", icon: <Laptop color="#38bdf8" /> },
    { number: "120+", label: "Clients Served", icon: <Users color="#a855f7" /> },
    { number: "99.9%", label: "Average Uptime", icon: <Activity color="#10b981" /> },
    { number: "4.9★", label: "Client Rating", icon: <Star color="#fbbf24" /> },
  ];

  const noMaintenanceProblems = [
    { title: "Performance Degrades", icon: <TrendingDown color="#f43f5e" />, description: "Websites naturally slow down over time without optimisation. Slow sites lose visitors and drop in Google rankings." },
    { title: "Security Risks", icon: <ShieldAlert color="#f97316" />, description: "Outdated software creates gaps that hackers exploit. A single breach can destroy your reputation overnight." },
    { title: "SEO Decline", icon: <Search color="#eab308" />, description: "Without maintenance, Core Web Vitals degrade and crawl errors accumulate, causing your rankings to slip." },
    { title: "Downtime Costs", icon: <Clock color="#3b82f6" />, description: "Every minute your website is down, you lose leads. Proactive monitoring prevents unplanned downtime." },
  ];

  const services = [
    { title: "Speed Optimisation", icon: <Zap />, description: "Improving Core Web Vitals, Google PageSpeed scores, image compression, and CDN configuration." },
    { title: "Security Monitoring", icon: <ShieldCheck />, description: "24/7 malware scanning, suspicious activity blocking, and hardening configurations against threats." },
    { title: "WordPress Maintenance", icon: <Settings />, description: "Expert management of core, plugin, and theme updates with security hardening and backup management." },
    { title: "Uptime Monitoring", icon: <Activity />, description: "Around-the-clock monitoring with immediate emergency response to restore your site if it goes down." },
    { title: "Backup & Recovery", icon: <Database />, description: "Automated off-site backup systems ensuring quick and complete restoration in event of server failure." },
    { title: "Technical SEO Checks", icon: <FileSearch />, description: "Regular audits for crawl errors, broken links, and structured data issues to protect organic traffic." },
    { title: "Software Updates", icon: <RefreshCw />, description: "Full management of platform updates, tested before applying to ensure zero breakage on live sites." },
  ];

  const whoFor = [
    { title: "UK & USA Small Businesses", description: "Professional maintenance without the cost of an in-house developer at affordable rates." },
    { title: "WordPress Owners", description: "Expert maintenance to keep your specific site secure, updated, and performing at full speed." },
    { title: "Ecommerce Store Owners", description: "Businesses that cannot afford downtime or breaches because every minute costs revenue." },
    { title: "No In-House IT", description: "Companies needing a reliable technical partner to handle security and performance for peace of mind." },
    { title: "Previous Hack Victims", description: "Proactive protection for those who have already suffered the consequences of poor maintenance." },
  ];

  const processSteps = [
    { step: "01", icon: <FileSearch color="#3b82f6" />, title: "Health Audit", description: "Assessing speed, security, and existing technical SEO issues." },
    { step: "02", icon: <PenTool color="#a855f7" />, title: "Optimisation", description: "Implementing hardening, speed improvements and technical fixes." },
    { step: "03", icon: <Eye color="#10b981" />, title: "24/7 Monitoring", description: "Continuous tracking for uptime, threats and technical errors." },
    { step: "04", icon: <RefreshCw color="#f43f5e" />, title: "Proactive Fixes", description: "Applying updates and fixes before they impact your visitors." },
    { step: "05", icon: <BarChart3 color="#f97316" />, title: "Monthly Reports", description: "Clear health metrics and recommendations for ongoing growth." },
  ];

  const marqueeVariants = {
    animate: {
      x: [0, -1400],
      transition: { x: { repeat: Infinity, repeatType: "loop", duration: 40, ease: "linear" } },
    },
  };

  return (
    <div className="wm-master-wrapper">
      <Navbar />
      <Breadcrumb />

      {/* --- HERO --- */}
      <section className="wm-hero">
        <div className="wm-container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="wm-hero-content">
            <h1 className="wm-hero-h1 wm-moving-gradient">
              Website Maintenance Services UK — Fast, Secure and Always Online
            </h1>
            <p className="wm-hero-p">
              Monitoring, protecting and optimising your website around the clock. We handle the technical heavy lifting so you can focus on running your business with complete peace of mind.
            </p>
            <div className="wm-hero-actions">
              <a href="/contact" className="btn-glow-primary">Get Free Health Check <ArrowRight size={18} /></a>
              <a href="#results" className="btn-outline-white">See Our Services ↓</a>
            </div>
            <p className="wm-hero-trust-white">Trusted by 120+ businesses across UK, USA & Europe</p>
          </motion.div>
        </div>
      </section>

      {/* --- STATS --- */}
      <section className="wm-stats-bar" id="results">
        <div className="wm-container wm-stats-row">
          {stats.map((stat, i) => (
            <div key={i} className="wm-stat-item">
              <div className="wm-stat-icon-circle">{stat.icon}</div>
              <div className="wm-stat-txt">
                <span className="wm-stat-num">{stat.number}</span>
                <span className="wm-stat-lab">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- WHY MAINTENANCE --- */}
      <section className="wm-section wm-soft-bg">
        <div className="wm-container">
          <h2 className="wm-section-title wm-moving-gradient-navy">Why Maintenance Is Not Optional</h2>
          <p className="wm-centered-intro">Treating your site as a one-time project is a mistake. Without regular care, your most important business asset quickly becomes a liability.</p>
          
          <div className="wm-problem-grid">
            {noMaintenanceProblems.map((item, i) => (
              <motion.div whileHover={{ y: -5 }} key={i} className="wm-problem-card">
                <div className="wm-problem-icon-box">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- MOVING SERVICES --- */}
      <section className="wm-section">
        <div className="wm-container">
          <h2 className="wm-section-title wm-moving-gradient-navy">Our Maintenance & Security Services</h2>
        </div>
        <div className="wm-marquee-container">
          <motion.div className="wm-marquee-track" variants={marqueeVariants} animate="animate">
            {[...services, ...services].map((service, i) => (
              <div key={i} className="wm-row-card">
                <div className="wm-card-icon-circle">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- CARE PLANS (Checklist) --- */}
      <section className="wm-section wm-navy-bg">
        <div className="wm-container">
          <h2 className="wm-section-title wm-moving-gradient-white">Website Care Plans</h2>
          <p className="wm-white-intro">Flexible monthly plans tailored to the needs and budget of small businesses across the UK and USA.</p>
          <div className="wm-care-grid">
             {[
               "Monthly Performance Reports", "Security Scanning & Prevention", 
               "Plugin & Theme Updates", "Uptime Monitoring & Alerting", 
               "Regular Off-site Backups", "Technical SEO Health Checks", 
               "Priority Emergency Support", "Core Web Vitals Optimisation"
             ].map((item, i) => (
               <div key={i} className="wm-care-item">
                  <CheckCircle2 color="#38bdf8" size={20} />
                  <span>{item}</span>
               </div>
             ))}
          </div>
          <div className="wm-cta-centered">
             <a href="/contact" className="btn-glow-primary">Request a Custom Care Plan</a>
          </div>
        </div>
      </section>

      {/* --- PROCESS (HORIZONTAL) --- */}
      <section className="wm-section wm-soft-bg">
        <div className="wm-container">
          <h2 className="wm-section-title wm-moving-gradient-navy">Our Maintenance Process</h2>
          <div className="wm-process-horizontal">
            {processSteps.map((item, i) => (
              <div key={i} className="wm-process-step-col">
                <div className="wm-step-circle">
                  {item.icon}
                  <span className="wm-step-num-badge">{item.step}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                {i < processSteps.length - 1 && <div className="wm-process-line"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- MOVING WHO FOR --- */}
      <section className="wm-section">
        <div className="wm-container">
          <h2 className="wm-section-title wm-moving-gradient-navy">Who This Service Is Built For</h2>
        </div>
        <div className="wm-marquee-container">
          <motion.div className="wm-marquee-track" variants={marqueeVariants} animate="animate">
            {[...whoFor, ...whoFor].map((item, i) => (
              <div key={i} className="wm-row-card wm-who-card">
                <div className="wm-card-icon-circle"><CheckCircle2 color="#00448f" /></div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- FAQ --- */}
      <section className="wm-section wm-soft-bg">
        <div className="wm-container">
          <h2 className="wm-section-title">Frequently Asked Questions</h2>
          <div className="wm-faq-wrap">
            {[
              { q: "How much does it cost?", a: "Plans are priced to be affordable for small businesses. We offer significantly better value than UK-based studios with the same technical expertise." },
              { q: "How often is my site maintained?", a: "Maintenance is ongoing. Security and uptime are monitored 24/7, software is updated monthly, and performance is audited quarterly." },
              { q: "What if my site gets hacked?", a: "If you're on a care plan, we respond immediately—cleaning malware, restoring backups, and hardening the site to prevent recurrence." },
              { q: "Do you maintain custom apps?", a: "Yes. We maintain WordPress, custom React/Next.js applications, and e-commerce stores of all sizes." }
            ].map((faq, i) => (
              <div key={i} className={`wm-faq-item ${activeFaq === i ? 'active' : ''}`} onClick={() => setActiveFaq(activeFaq === i ? null : i)}>
                <div className="wm-faq-q">
                  <span>{faq.q}</span>
                  {activeFaq === i ? <Minus size={20} /> : <Plus size={20} />}
                </div>
                <AnimatePresence>
                  {activeFaq === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="wm-faq-a">
                      <p>{faq.a}</p>
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

export default WebsiteMaintenance;