'use client';
import React, { useState } from 'react';

// Core Layout
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';

// Content Sections
import TrustBar from '../components/TrustBar';
import Solution from '../components/Solution';
import SuccessSection from '../components/SuccessSection';
import ProcessSection from '../components/ProcessSection';
import WhoWeAre from '../components/WhoWeAre';
import WhyChooseSleekIT from '../components/WhyChooseSleekIT';
import ContactSection from '../components/ContactSection';
import ReviewSection from '../components/ReviewSection';

// Support & Utilities
import ExpertPopup from '../components/ExpertPopup';
import ScrollToTop from '../components/ScrollToTop'; // Import ScrollToTop

const HomePage = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div className="homepage-main">
      {/* 1. Navigation */}
      <Navbar />

      {/* 2. Hero & Brand Trust */}
      <Hero />
      <TrustBar />

      {/* 3. Value Propositions */}
      <Solution />
      <SuccessSection />
      <ProcessSection />

      {/* 4. About & Credibility */}
      <WhoWeAre />
      <WhyChooseSleekIT />
      <ReviewSection />

      {/* 5. Conversion/Lead Gen */}
      <ContactSection />

      {/* 6. Footer */}
      <Footer />

      {/* --- FLOATING UTILITIES --- */}
      {/* ScrollToTop sits above the WhatsApp button automatically via CSS */}
      <ScrollToTop /> 

      <ExpertPopup open={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </div>
  );
};

export default HomePage;