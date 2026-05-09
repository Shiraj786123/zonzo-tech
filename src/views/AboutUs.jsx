'use client';
import React from "react";
import { motion } from "framer-motion";
import { 
  CheckCircle2, Eye, Star, Target, 
  Lightbulb, ArrowRight, ShieldCheck, 
  Zap, Globe, BarChart3, Code, Layout, 
  Search, ShoppingCart, Cpu, Wrench, History
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import "../styles/AboutUs.css";

const AboutUs = () => {
  const beliefs = [
    { title: "Technology Should Serve Business Goals", description: "We don't build technology for the sake of it. Every line of code, every SEO decision, every AI integration is driven by one question — will this help our client grow?" },
    { title: "Offshore Doesn't Mean Lower Quality", description: "Being based in Sri Lanka gives our clients a significant cost advantage — without compromising on quality, communication or delivery speed." },
    { title: "Long-Term Partnerships Over Quick Projects", description: "We're not interested in one-off projects. We want to be the agency our clients call every time they need to grow digitally." },
  ];

  const services = [
    { number: "01", icon: <Cpu />, title: "AI Web Application Development", description: "Custom AI-powered web applications built for performance, scalability and business growth." },
    { number: "02", icon: <Code />, title: "Full-Stack Web Development", description: "End-to-end web development using modern frameworks — React, Next.js, Node.js, Spring Boot and more." },
    { number: "03", icon: <Layout />, title: "AI Website Design & Development", description: "High-converting website designs built with AI tools and data-driven UX principles." },
    { number: "04", icon: <Search />, title: "SEO & AI Search Optimization", description: "Organic growth strategies that work for both traditional Google search and AI-powered search engines." },
    { number: "05", icon: <ShoppingCart />, title: "E-commerce Development", description: "Shopify, WooCommerce and custom e-commerce platforms built to convert visitors into customers." },
    { number: "06", icon: <Zap />, title: "AI Software Development", description: "Custom AI solutions — chatbots, automation systems, workflow tools and GPT integrations." },
    { number: "07", icon: <Wrench />, title: "Website Maintenance & Security", description: "Ongoing performance monitoring, security updates and technical support — so your site never lets you down." },
  ];

  const whoWeWorkWith = [
    "Startups launching new products",
    "E-commerce brands scaling sales",
    "Service businesses generating leads",
    "Agencies needing technical execution",
    "Companies modernising legacy systems",
  ];

  const values = [
    { title: "Transparency", description: "Clear communication at every step. No hidden costs, no technical jargon, no surprises.", icon: <Eye size={32} /> },
    { title: "Quality", description: "Clean code, ethical SEO and scalable systems — built to last, not just to launch.", icon: <Star size={32} /> },
    { title: "Results", description: "Traffic, leads, conversions and ROI. We measure success by your business outcomes — not our deliverables.", icon: <Target size={32} /> },
    { title: "Innovation", description: "We stay ahead of AI and search evolution so our clients never fall behind their competition.", icon: <Lightbulb size={32} /> },
  ];

  const stats = [
    { number: "120+", label: "Clients Served" },
    { number: "150+", label: "Projects Delivered" },
    { number: "35%", label: "Average Client Growth" },
    { number: "4.9★", label: "Client Rating" },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="abt__wrapper">
      <Navbar />
      <Breadcrumb />

      {/* Hero Section */}
      <section className="abt__hero">
        <div className="abt__hero_container">
          <motion.h1 initial="hidden" animate="visible" variants={fadeIn} className="abt__hero_title">
            We Build Digital Systems That Generate <span className="text-ice">Real Business Growth</span>
          </motion.h1>
          <motion.p initial="hidden" animate="visible" variants={fadeIn} transition={{ delay: 0.2 }} className="abt__hero_description">
            ZonzocTech is an AI-powered web development and digital growth agency. We help businesses across the UK and USA build high-converting websites, rank higher on Google, and automate operations with AI.
          </motion.p>
        </div>
      </section>

      {/* --- REDESIGNED OUR STORY SECTION --- */}
      <section className="abt__story_section">
        <div className="abt__container">
          <div className="abt__story_grid">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="abt__story_left"
            >
              <div className="abt__story_badge">
                <History size={16} />
                <span>Established Excellence</span>
              </div>
              <h2 className="abt__story_heading">
                Our Story: Moving Beyond <span className="text-blue">Just Design</span>
              </h2>
              <div className="abt__story_accent_box">
                <div className="accent_line"></div>
                <p className="accent_quote">
                  We don't just build websites; we build growth engines.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="abt__story_right"
            >
              <p className="abt__story_p lead_p">
                ZonzocTech started with one simple observation — too many businesses were paying too much for websites that did nothing. Pretty designs with no traffic. No leads. No results.
              </p>
              <p className="abt__story_p">
                We built ZonzocTech to change that. Based in Sri Lanka with a team of engineers, designers and SEO specialists — we combine world-class technical expertise with a deep understanding of what UK and USA businesses actually need to grow online.
              </p>
              <p className="abt__story_p">
                Today we work with startups, e-commerce brands, service businesses and agencies across the UK, USA and Europe — delivering websites, SEO and AI systems that generate measurable, real-world results.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Believe */}
      <section className="abt__content_section abt__bg_light">
        <div className="abt__container">
          <h2 className="abt__heading">What We Believe</h2>
          <div className="abt__beliefs_grid">
            {beliefs.map((belief, index) => (
              <motion.div key={index} whileHover={{ y: -8 }} className="abt__belief_card">
                <div className="abt__belief_accent"></div>
                <h3>{belief.title}</h3>
                <p>{belief.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="abt__content_section">
        <div className="abt__container">
          <h2 className="abt__heading">What We Do</h2>
          <p className="abt__sub_info">End-to-end digital services from strategy to AI automation.</p>
          <div className="abt__services_grid">
            {services.map((service, index) => (
              <motion.div key={index} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ delay: index * 0.05 }} className="abt__service_card">
                <div className="abt__service_icon_box">{service.icon}</div>
                <div className="abt__service_content">
                  <div className="abt__service_header">
                    <span className="abt__service_num">{service.number}</span>
                    <h3>{service.title}</h3>
                  </div>
                  <p>{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Work With - Navy Background */}
      <section className="abt__content_section abt__bg_navy">
        <div className="abt__container">
          <h2 className="abt__heading text-white">Who We Work With</h2>
          <div className="abt__clients_grid">
            {whoWeWorkWith.map((client, index) => (
              <motion.div key={index} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="abt__client_item">
                <CheckCircle2 size={18} className="text-ice" />
                <p>{client}</p>
              </motion.div>
            ))}
          </div>
          <p className="abt__clients_note">Serious businesses looking for measurable digital results.</p>
        </div>
      </section>

      {/* Our Values */}
      <section className="abt__content_section">
        <div className="abt__container">
          <h2 className="abt__heading">Our Values</h2>
          <div className="abt__values_grid">
            {values.map((value, index) => (
              <motion.div key={index} whileHover={{ y: -10 }} className="abt__value_card">
                <div className="abt__value_icon_box">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="abt__stats_section">
        <div className="abt__container abt__stats_wrapper">
          {stats.map((stat, index) => (
            <div key={index} className="stat_box">
              <span className="stat_val">{stat.number}</span>
              <span className="stat_txt">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA - Blue Background */}
      <section className="abt__cta_section">
        <div className="abt__container">
          <div className="abt__cta_card">
            <h2>Ready to Work Together?</h2>
            <p>Get a free growth plan for your business — no commitment required.</p>
            <div className="abt__cta_buttons">
              <a href="/contact" className="btn_primary">Get Free Proposal <ArrowRight size={18} /></a>
              <a href="/#portfolio" className="btn_secondary">See Our Work</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;