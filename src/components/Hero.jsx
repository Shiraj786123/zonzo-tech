'use client';
import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import "../styles/hero.css";

const Hero = () => {
  const router = useRouter();

  return (
    <section className="hero-section">
      {/* TECH GRID OVERLAY */}
      <div className="hero-grid-overlay" />

      {/* MOVABLE: Background Glows */}
      <motion.div 
        className="hero-glow-1"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          opacity: [0.5, 0.8, 0.5]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="hero-glow-2"
        animate={{
          x: [0, -80, 0],
          y: [0, -100, 0],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="hero-inner">
        <div className="hero-copy">
          
          {/* MOVABLE: Badge */}
          <motion.div 
            className="hero-badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
          >
            <span className="badge-dot"></span>
            Premier AI Agency for Growth
          </motion.div>

          {/* MOVABLE: Title */}
          <motion.h1 
            className="hero-main-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            AI-Powered Web Development <br className="desktop-only" /> 
            Agency Trusted by Businesses <br className="desktop-only" />
            in the <span className="text-highlight">UK & USA</span>
          </motion.h1>

          <motion.p 
            className="hero-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            We design high-converting websites, drive targeted organic traffic, 
            and automate your business with AI — so you grow faster without working harder.
          </motion.p>

          {/* MOVABLE: Buttons */}
          <motion.div 
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button className="hero-contact-btn" onClick={() => router.push("/contact")}>
              Get Free Growth Plan
              <i className="fa-solid fa-arrow-right icon-right"></i>
            </button>
            <a href="/#portfolio" className="hero-secondary-btn">Explore Our Projects</a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;