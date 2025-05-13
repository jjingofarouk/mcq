// src/components/Home.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Book, BarChart, Award, Users, ChevronRight } from 'lucide-react';
import SpecialtySelector from './SpecialtySelector';
import SearchBar from './SearchBar';
import homeImage from './home.png';
import './Home.css';

const Home = () => {
  const [animateStats, setAnimateStats] = useState(false);

  useEffect(() => {
    setAnimateStats(true);

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroImage = document.querySelector('.hero-image');
      if (heroImage) {
        heroImage.style.transform = `translateY(${scrollY * 0.15}px) scale(1.05)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="home-page">
      <HeroBanner />
      <QuickAccessSection />
      <StatsSection animate={animateStats} />
      <SpecialtiesSection />
      <BenefitsSection />
      <CTASection />
    </div>
  );
};

const HeroBanner = () => (
  <section className="hero-section">
    <div className="hero-overlay"></div>
    <div
      className="hero-image"
      style={{ backgroundImage: `url(${homeImage})` }}
    ></div>
    <div className="hero-content">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Master Medical MCQs with MediQuiz</h1>
        <p className="hero-subtitle">
          Practice with thousands of high-quality questions across 22 specialties to ace your exams and boost clinical knowledge.
        </p>
        <div className="hero-cta">
          <Link to="/quizzes" className="btn-primary">
            Start Practicing <ChevronRight size={16} className="ml-2" />
          </Link>
          <Link to="/progress" className="btn-secondary">
            Track Progress
          </Link>
        </div>
      </motion.div>
    </div>
    <div className="wave-divider">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="var(--white)"
          fillOpacity="1"
          d="M0,192L48,197.3C96,203,192,213,288,208C384,203,480,181,576,181.3C672,181,768,203,864,218.7C960,235,1056,245,1152,229.3C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  </section>
);

const QuickAccessSection = () => (
  <section className="quick-access-section">
    <div className="quick-access-container">
      <SearchBar placeholder="Search specialties or topics..." />
      <div className="quick-links">
        <Link to="/quizzes" className="quick-link">
          <Book size={20} /> Browse Quizzes
        </Link>
        <Link to="/progress" className="quick-link">
          <BarChart size={20} /> View Progress
        </Link>
        <Link to="/leaderboard" className="quick-link">
          <Award size={20} /> Leaderboard
        </Link>
      </div>
    </div>
  </section>
);

const StatsSection = ({ animate }) => (
  <section className="stats-section">
    <div className="stats-container">
      <motion.div
        className="stat-card"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={animate ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="stat-number">12K+</div>
        <div className="stat-label">Practice Questions</div>
      </motion.div>
      <motion.div
        className="stat-card"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={animate ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="stat-number">22</div>
        <div className="stat-label">Specialties Covered</div>
      </motion.div>
      <motion.div
        className="stat-card"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={animate ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="stat-number">90%</div>
        <div className="stat-label">Pass Rate Boost</div>
      </motion.div>
      <motion.div
        className="stat-card"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={animate ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <div className="stat-number">8K+</div>
        <div className="stat-label">Active Users</div>
      </motion.div>
    </div>
  </section>
);

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Book size={32} />,
      title: 'Extensive Question Bank',
      description: 'Practice with thousands of MCQs across all major medical specialties, complete with detailed explanations.',
    },
    {
      icon: <BarChart size={32} />,
      title: 'Progress Tracking',
      description: 'Monitor your performance with in-depth analytics to identify strengths and areas for improvement.',
    },
    {
      icon: <Users size={32} />,
      title: 'Community Leaderboard',
      description: 'Compete with peers and see where you stand among other medical professionals.',
    },
    {
      icon: <Award size={32} />,
      title: 'Exam Preparation',
      description: 'Tailored quizzes designed to help you excel in board exams and certifications.',
    },
  ];

  return (
    <section className="benefits-section">
      <h2 className="section-title">Why Choose MediQuiz?</h2>
      <p className="section-subtitle">Empowering medical professionals with the tools to succeed.</p>
      <div className="benefits-grid">
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            className="benefit-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="benefit-icon">{benefit.icon}</div>
            <h3 className="benefit-title">{benefit.title}</h3>
            <p className="benefit-description">{benefit.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const SpecialtiesSection = () => (
  <section className="specialties-section">
    <h2 className="section-title">Explore Specialties</h2>
    <p className="section-subtitle">Select a specialty to start your practice quiz.</p>
    <SpecialtySelector />
  </section>
);

const CTASection = () => (
  <section className="cta-section">
    <div className="cta-content">
      <h2>Ready to Ace Your Medical Exams?</h2>
      <p>Join thousands of medical professionals mastering their exams with MediQuiz.</p>
      <Link to="/quizzes" className="btn-primary btn-large">
        Start Practicing Now
      </Link>
    </div>
  </section>
);

export default Home;