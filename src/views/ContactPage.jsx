'use client';
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import "../styles/ContactPage.css";
import { Mail, Phone, MessageCircle, MapPin, Check, Plus, Minus, Send } from "lucide-react";

const ContactPage = () => {
  const [budget, setBudget] = useState(5000);
  const [activeFaq, setActiveFaq] = useState(null);

  const tickerItems = ["AI SOLUTIONS", "WEB DEVELOPMENT", "SEO OPTIMIZATION", "UI/UX DESIGN", "E-COMMERCE", "CLOUD SYSTEMS"];

  const trustPillars = [
    { title: "24 Hour Response Guarantee", desc: "We respond to every enquiry within 24 hours — no chasing, no waiting weeks for a quote." },
    { title: "No Obligation Consultation", desc: "Our initial consultation is completely free with no commitment required — just honest advice." },
    { title: "Transparent Pricing", desc: "No hidden fees. Every proposal is clear, itemised and agreed upfront before any work begins." },
    { title: "Dedicated Project Team", desc: "Direct access to your project team — not an account manager. Real people, real communication." }
  ];

  const faqs = [
    { q: "How quickly do you respond to enquiries?", a: "We respond to all enquiries within 24 hours — usually much faster during business hours." },
    { q: "Do you work with businesses in the UK and USA?", a: "Yes — the majority of our clients are based in the UK, USA and Europe. We work fully remotely across time zones." },
    { q: "Is the initial consultation really free?", a: "Yes. Our initial consultation is completely free with no commitment required." },
    { q: "What information should I include in my message?", a: "The more context you give us the better. Tell us what you need, your rough timeline, and business goals." }
  ];

  const percentage = ((budget - 5000) / (65000 - 5000)) * 100;
  const sliderBackground = `linear-gradient(to right, #00448f 0%, #00448f ${percentage}%, #e2e8f0 ${percentage}%, #e2e8f0 100%)`;

  return (
    <div className="cp__wrapper">
      <Navbar />
      <Breadcrumb />

      <section className="cp__hero">
        <div className="cp__container">
          <span className="cp__hero_tag">CONTACT US</span>
          <h1 className="cp__hero_title">Let's Build Something <br/><span>Extraordinary</span> Together</h1>
          <p className="cp__hero_text">Strategic digital solutions for your business growth in the UK, USA, and Europe.</p>
        </div>
      </section>

      {/* Floating Contact Bar */}
      <section className="cp__info_bar">
        <div className="cp__container">
          <div className="cp__info_grid">
            <div className="cp__info_card">
              <div className="cp__icon_box blue"><Mail size={20} color="white"/></div>
              <div className="cp__info_content">
                <span className="cp__info_label">EMAIL US</span>
                <p className="cp__info_value">info@zonzoctech.com</p>
              </div>
            </div>
            <div className="cp__info_card">
              <div className="cp__icon_box blue"><Phone size={20} color="white"/></div>
              <div className="cp__info_content">
                <span className="cp__info_label">CALL US</span>
                <p className="cp__info_value">+94 74 030 9534</p>
              </div>
            </div>
            <div className="cp__info_card">
              <div className="cp__icon_box green"><MessageCircle size={20} color="white"/></div>
              <div className="cp__info_content">
                <span className="cp__info_label">WHATSAPP</span>
                <p className="cp__info_value">Chat instantly</p>
              </div>
            </div>
            <div className="cp__info_card">
              <div className="cp__icon_box blue"><MapPin size={20} color="white"/></div>
              <div className="cp__info_content">
                <span className="cp__info_label">SERVING</span>
                <p className="cp__info_value">UK · USA · EU</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Movable Colorful Ticker */}
      <section className="cp__ticker_section">
        <div className="cp__ticker_wrapper">
          <div className="cp__ticker_track">
            {[...tickerItems, ...tickerItems].map((item, index) => (
              <React.Fragment key={index}>
                <span className="cp__ticker_item">{item}</span>
                <span className="cp__ticker_dot">•</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Pillars */}
      <section className="cp__section">
        <div className="cp__container">
          <h2 className="cp__heading">Why Businesses Trust ZonzocTech</h2>
          <div className="cp__trust_grid">
            {trustPillars.map((pillar, i) => (
              <div key={i} className="cp__trust_card">
                <div className="cp__check_box"><Check size={18} color="white" /></div>
                <h3>{pillar.title}</h3>
                <p>{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="cp__form_section">
        <div className="cp__container">
          <div className="cp__form_card">
            <h2 className="cp__form_title">Send Us a Message</h2>
            <form className="cp__form">
              <div className="cp__form_grid">
                <input type="text" placeholder="Your Name*" required />
                <input type="text" placeholder="Company" />
                <input type="tel" placeholder="Phone Number*" required />
                <input type="email" placeholder="Email*" required />
              </div>
              <div className="cp__budget_area">
                <label className="cp__budget">Project Budget: <strong>${budget.toLocaleString()}</strong></label>
                <input type="range" min="5000" max="65000" step="1000" value={budget} onChange={(e) => setBudget(Number(e.target.value))} className="cp__slider" style={{ background: sliderBackground }} />
              </div>
              <textarea placeholder="Tell us about your project...*" rows="5" required></textarea>
              <button type="submit" className="cp__submit_btn">
                Start Consultation <Send size={18} style={{ marginLeft: '10px' }} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="cp__section faq_bg">
        <div className="cp__container">
          <h2 className="cp__heading">Frequently Asked Questions</h2>
          <div className="cp__faq_list">
            {faqs.map((faq, i) => (
              <div key={i} className={`cp__faq_item ${activeFaq === i ? 'active' : ''}`} onClick={() => setActiveFaq(activeFaq === i ? null : i)}>
                <div className="cp__faq_header">
                  <span>{faq.q}</span>
                  {activeFaq === i ? <Minus size={20} /> : <Plus size={20} />}
                </div>
                <div className="cp__faq_body"><p>{faq.a}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;