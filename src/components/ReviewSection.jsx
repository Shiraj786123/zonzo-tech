'use client';
import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Review.css';

const ReviewsSection = () => {
  const reviews = [
    {
      id: 1,
      text: "Working with ZonzocTech transformed our online store completely. Traffic doubled and conversions improved significantly within 3 months.",
      name: "Sarah Thompson",
      username: "E-commerce Business Owner, UK",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      bgColor: "#f0f9ff" // Professional Light Blue
    },
    {
      id: 2,
      text: "The mobile app they built for us is fast, intuitive and perfectly aligned with our brand. Highly recommend their team.",
      name: "David Martinez",
      username: "SaaS Founder, USA",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      bgColor: "#f0fdf4" // Professional Light Emerald
    },
    {
      id: 3,
      text: "Excellent communication throughout the project. Fast delivery, no surprises, and the results speak for themselves.",
      name: "Emily Carter",
      username: "Marketing Director, UK",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
      bgColor: "#fffbeb" // Professional Light Amber
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { type: "spring", stiffness: 100, damping: 15 } 
    }
  };

  return (
    <section className="reviews-section">
      <div className="reviews-container">

        {/* TOP SECTION */}
        <div className="reviews-top">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="reviews-left"
          >
            <h1 className="rating-number">4.9</h1>
            <div className="rating-stars">
              {[...Array(5)].map((_, i) => (
                <span key={i}>⭐</span>
              ))}
            </div>
            <div className="reviews-count">50+ Client Reviews</div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="reviews-heading-wrap"
          >
            <h2 className="reviews-heading">What Our Clients Say</h2>
            <p className="reviews-subtext">
              Don't take our word for it. Here's what businesses we've worked with 
              across the UK and USA have to say.
            </p>
          </motion.div>
        </div>

        {/* REVIEW CARDS */}
        <motion.div 
          className="review-cards-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {reviews.map((review) => (
            <motion.div
              key={review.id}
              className="review-card"
              variants={cardVariants}
              style={{ backgroundColor: review.bgColor }} // Applying the 3 different colors here
              whileHover={{ 
                y: -12, 
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.08)",
                borderColor: "rgba(0, 0, 0, 0.1)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="quote">"</div>
              
              <div className="card-stars">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>

              <p className="review-text">{review.text}</p>

              <div className="reviewer">
                <motion.img 
                  src={review.image} 
                  alt={review.name} 
                  className="reviewer-img"
                  whileHover={{ scale: 1.1 }}
                />
                <div className="reviewer-info">
                  <p className="name">{review.name}</p>
                  <p className="username">{review.username}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default ReviewsSection;