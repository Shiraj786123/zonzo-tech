'use client';
import React, { useState } from 'react';
import { Mail, User, Phone, Building, MessageSquare, ArrowRight } from 'lucide-react';
import '../styles/contact.css';
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', company: '', message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const steps = [
    { number: '01', text: 'Share your requirements', color: '#1e3a8a' },
    { number: '02', text: 'Discuss them with our experts', color: '#3b82f6' },
    { number: '03', text: 'Receive a customized proposal', color: '#10b981' },
    { number: '04', text: 'Launch your project successfully', color: '#f59e0b' }
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Add your API logic here
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section className="cs-section">
      <div className="cs-container">
        
        {/* LEFT SIDE */}
        <div className="cs-left">
          <div className="cs-badge">
            <span className="cs-badge-text">YOU ARE HERE</span>
            <div className="cs-badge-line"></div>
          </div>

          <h2 className="cs-title">Let's Start</h2>
          <p className="cs-subtitle">Initiating Your Journey to Success and Growth.</p>

          <div className="cs-contact-method">
            <div className="cs-icon-circle">
              <Mail size={20} />
            </div>
            <span className="cs-method-text">info@zonzoctech.com</span>
          </div>

          <div className="cs-steps-list">
            {steps.map((step, index) => (
              <div key={index} className="cs-step-item">
                <div className="cs-step-number" style={{ borderColor: step.color, color: step.color }}>
                  {step.number}
                </div>
                <p className="cs-step-text">{step.text}</p>
                {index < steps.length - 1 && <div className="cs-vertical-line"></div>}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="cs-right">
          <div className="cs-form-header">
            <span className="cs-form-tag">LET'S CONNECT!</span>
          </div>
          <h3 className="cs-form-title">Send us a message, and we'll promptly discuss your project with you.</h3>

          {submitStatus === 'success' && <div className="cs-alert">✓ Message sent successfully!</div>}

          <form onSubmit={handleSubmit} className="cs-form">
            <div className="cs-form-row">
              <div className="cs-input-group">
                <User className="cs-input-icon" size={18} />
                <input type="text" name="name" placeholder="Your Name" onChange={handleChange} required />
              </div>
              <div className="cs-input-group">
                <Mail className="cs-input-icon" size={18} />
                <input type="email" name="email" placeholder="Your Email" onChange={handleChange} required />
              </div>
            </div>

            <div className="cs-form-row">
              <div className="cs-input-group">
                <Phone className="cs-input-icon" size={18} />
                <input type="tel" name="phone" placeholder="Your Phone No." onChange={handleChange} required />
              </div>
              <div className="cs-input-group">
                <Building className="cs-input-icon" size={18} />
                <input type="text" name="company" placeholder="Your Company Name" onChange={handleChange} />
              </div>
            </div>

            <div className="cs-input-group full-width">
              <MessageSquare className="cs-input-icon top-icon" size={18} />
              <textarea name="message" placeholder="How can we help you?" rows="4" onChange={handleChange} required></textarea>
            </div>

            <button type="submit" className="cs-submit-btn" disabled={isSubmitting}>
              {isSubmitting ? 'SENDING...' : 'SEND REQUEST'} 
              <ArrowRight size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;