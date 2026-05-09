'use client';
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion"; 
import "../styles/successsection.css";

const SuccessSection = () => {
  const router = useRouter();
  
  // Words that will move/rotate in the top tag
  const rotatingActions = ["SEE", "WATCH", "DISCOVER", "EXPLORE"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingActions.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const projects = [
    {
      slug: "basildon-acr",
      name: "Basildon ACR",
      desc: "Full website redesign and local SEO for a UK air conditioning & refrigeration specialist — from zero online presence to page 1 rankings.",
      extra: ["Website Design", "Local SEO", "Lead Generation"],
      img: "/images/projects/basildon-acr-1.png",
    },
    {
      slug: "asj-hardscapes",
      name: "ASJ Hardscapes",
      desc: "Professional website and local SEO for a UK hardscaping company — turning word-of-mouth reliance into 5× more online enquiries.",
      extra: ["Website Design", "Local SEO", "Portfolio Gallery"],
      img: "/images/projects/asj-hardscapes-1.png",
    },
    {
      slug: "frau-rauchfrei",
      name: "Frau Rauchfrei",
      desc: "End-to-end website security, performance optimisation, and ongoing maintenance for a German health platform — 99.9% uptime, zero incidents.",
      extra: ["Web Security", "Maintenance", "Performance"],
      img: "/images/projects/frau-rauchfrei-1.png",
    },
    {
      slug: "vitamina-project",
      name: "Vitamina Project",
      desc: "Complete multi-vendor e-commerce ecosystem — admin portal, vendor portal, iOS and Android apps — built to handle a marketplace at scale.",
      extra: ["E-Commerce", "Mobile Apps", "Angular", "Node.js"],
      img: "/images/projects/vitamina-project-1.png",
    },
    {
      slug: "koning-bamboe",
      name: "Koning Bamboe",
      desc: "Full website rebuild for a Dutch bamboo brand — 60% more organic traffic, 40% faster load times, and a clean new product catalogue.",
      extra: ["Website Development", "SEO", "Performance"],
      img: "/images/projects/koning-bamboe-1.png",
    },
    {
      slug: "best-life-nl",
      name: "Best Life NL",
      desc: "Brand-first website and SEO content strategy for a Dutch lifestyle brand — doubling session duration and growing a loyal subscriber base.",
      extra: ["Website Design", "Content Strategy", "SEO"],
      img: "/images/projects/best-life-nl-1.png",
    },
  ];

  return (
    <section className="success-section">
      <div className="success-header">
        {/* MOVING TAG SECTION */}
        <div className="moving-tag-container">
          <div className="action-rotator">
            <AnimatePresence mode="wait">
              <motion.span
                key={rotatingActions[index]}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="action-text"
              >
                {rotatingActions[index]}
              </motion.span>
            </AnimatePresence>
          </div>
          <span className="tag-static-text">OUR SUCCESS IN ACTION</span>
        </div>

        <h2 className="success-title">
          <span className="highlight">Real Results</span>, That Drive Business Growth
        </h2>

        <p className="success-subtitle">
          See how we've helped businesses increase traffic, generate leads and
          <br />
          boost conversions through SEO, high-performing websites, and smart automation.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, idx) => (
          <motion.div
            key={project.slug}
            className="project-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            onClick={() => router.push(`/case-studies/${project.slug}`)}
          >
            <div className="project-img-box">
              <img src={project.img} alt={project.name} className="project-img" />
              <div className="project-mask">
                <span>EXPLORE CASE STUDY →</span>
              </div>
            </div>
            
            <div className="project-info">
              <h3 className="project-title">{project.name}</h3>
              <p className="project-desc">{project.desc}</p>
              <div className="project-extra">
                {project.extra.map((tag, i) => (
                  <span key={i} className="case-tag">{tag}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SuccessSection;