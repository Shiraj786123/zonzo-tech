'use client';
import React, { useEffect, useRef, useState } from "react";
import "../styles/navbar.css";
import "../styles/topbar.css";
import Link from "next/link";
import ExpertPopup from "./ExpertPopup";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector('.navbar');
      if (window.scrollY > 10) nav?.classList.add('scrolled');
      else nav?.classList.remove('scrolled');
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* TOPBAR - Aligned perfectly with Logo and CTA Button */}
      <div className="topbar">
        <div className="topbar-inner">
          <div className="topbar-left">
            <span>🌍 Serving Businesses in UK & USA | 150+ Projects Delivered</span>
          </div>
          <div className="topbar-right">
            <a href="mailto:info@zonzoctech.com" className="topbar-link">
              <i className="fa-solid fa-envelope"></i> <span>info@zonzoctech.com</span>
            </a>
            <a href="https://wa.me/94740309534" target="_blank" className="topbar-link whatsapp">
              <i className="fa-brands fa-whatsapp"></i> <span>+94 74 030 9534</span>
            </a>
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <header className="navbar">
        <div className="navbar-inner">
          {/* LEFT ALIGNMENT: LOGO */}
          <div className="navbar-logo">
            <Link href="/"><img src="/images/logo.png" alt="ZonzocTech Logo" /></Link>
          </div>

          {/* CENTER/RIGHT ALIGNMENT: LINKS */}
          <nav className="nav-container">
            <ul className="nav-links-list">
              <li 
                className="nav-item dropdown-parent"
                onMouseEnter={() => setActiveDropdown(1)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <span className="nav-link">Services <i className="fa-solid fa-chevron-down"></i></span>
                
                {/* MEGA MENU: Anchored between Services and CTA Button */}
                <div className={`mega-menu-rect ${activeDropdown === 1 ? 'active' : ''}`}>
                  <div className="mega-col">
                    <h5 className="mega-heading">WEB & AI DEVELOPMENT</h5>
                    <Link href="/ai-web-application-development">AI Web Development</Link>
                    <Link href="/full-stack-web-development">Full-Stack Web Development</Link>
                    <Link href="/ai-website-design-development">AI Website Design</Link>
                    <Link href="/ai-software-development">AI Software Development</Link>
                  </div>

                  <div className="mega-col">
                    <h5 className="mega-heading">SEO & GROWTH</h5>
                    <Link href="/seo-services">SEO Services</Link>
                    <Link href="/seo-ai-search-optimization">AI SEO & Search Optimization</Link>
                    <Link href="/ecommerce-development-optimization">E-commerce Development</Link>
                  </div>

                  <div className="mega-col">
                    <h5 className="mega-heading">SUPPORT</h5>
                    <Link href="/website-maintenance-performance-security">Website Maintenance & Security</Link>
                  </div>
                </div>
              </li>
              <li><Link href="/#portfolio" className="nav-link">Our Work</Link></li>
              <li><Link href="/about" className="nav-link">About</Link></li>
              <li><Link href="/blog" className="nav-link">Blog</Link></li>
              <li><Link href="/contact" className="nav-link">Contact</Link></li>
            </ul>
          </nav>

          {/* RIGHT ALIGNMENT: CTA BUTTON */}
          <div className="navbar-cta-container">
            <button className="get-proposal-button" onClick={() => setIsPopupOpen(true)}>
              Get Free Proposal
            </button>
          </div>
        </div>
      </header>

      <ExpertPopup open={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </>
  );
};

export default Navbar;