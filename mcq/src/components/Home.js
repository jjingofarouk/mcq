import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  SearchIcon, 
  TrendingUp, 
  Book, 
  CheckCircle, 
  Monitor, 
  Heart,
  Shield, 
  Award,
  ChevronRight
} from 'lucide-react';
import SpecialtySelector from '../components/SpecialtySelector';
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
        heroImage.style.transform = `translateY(${scrollY * 0.2}px) scale(1.1)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="home-page">
      <HeroBanner />
      <StatsSection animate={animateStats} />
      <FeaturesSection />
      <SpecialtiesSection />
      <TestimonialsSection />
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
        <h1>Elevate Your Medical Knowledge</h1>
        <p className="hero-subtitle">
          The intelligent platform that adapts to your learning style and helps you prepare for medical exams with confidence
        </p>
        <div className="hero-cta">
          <button className="btn-primary">
            Get Started <ChevronRight size={16} className="ml-2" />
          </button>
          <button className="btn-secondary">
            Watch Demo
          </button>
        </div>
      </motion.div>
    </div>
    
    <div className="wave-divider">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#ffffff" fillOpacity="1" d="M0,192L48,197.3C96,203,192,213,288,208C384,203,480,181,576,181.3C672,181,768,203,864,218.7C960,235,1056,245,1152,229.3C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
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
        <div className="stat-number">10K+</div>
        <div className="stat-label">Verified Questions</div>
      </motion.div>
      
      <motion.div 
        className="stat-card"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={animate ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="stat-number">95%</div>
        <div className="stat-label">User Score Improvement</div>
      </motion.div>
      
      <motion.div 
        className="stat-card"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={animate ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="stat-number">22</div>
        <div className="stat-label">Medical Specialties</div>
      </motion.div>
      
      <motion.div 
        className="stat-card"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={animate ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <div className="stat-number">5K+</div>
        <div className="stat-label">Medical Professionals</div>
      </motion.div>
    </div>
  </section>
);

const FeaturesSection = () => {
  const features = [
    {
      icon: <Book size={32} />,
      title: "Comprehensive Question Bank",
      description: "Access thousands of peer-reviewed MCQs across all medical specialties with detailed explanations"
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Adaptive Learning Algorithm",
      description: "Our AI identifies your knowledge gaps and customizes questions to strengthen your weakest areas"
    },
    {
      icon: <CheckCircle size={32} />,
      title: "Performance Analytics",
      description: "Track your progress with detailed analytics and compare your performance against peers"
    },
    {
      icon: <Monitor size={32} />,
      title: "Cross-Platform Accessibility",
      description: "Seamlessly continue your studies across desktop, tablet, and mobile devices"
    },
    {
      icon: <Shield size={32} />,
      title: "Evidence-Based Content",
      description: "All content is curated by board-certified physicians and updated with the latest guidelines"
    },
    {
      icon: <Award size={32} />,
      title: "Certification Preparation",
      description: "Targeted practice modules designed specifically for board certifications and licensing exams"
    }
  ];
  
  return (
    <section className="features-section">
      <h2 className="section-title">Why Medical Professionals Choose ClinIQ</h2>
      <p className="section-subtitle">Powerful tools to accelerate your learning and clinical decision-making</p>
      
      <div className="features-grid">
        {features.map((feature, index) => (
          <motion.div 
            key={index} 
            className="feature-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const SpecialtiesSection = () => (
  <section className="specialties-section">
    <h2 className="section-title">Explore Medical Specialties</h2>
    <p className="section-subtitle">Choose from a wide range of specialties to focus your studies</p>
    
    <SpecialtySelector />
  </section>
);

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "ClinIQ has been instrumental in my USMLE Step 1 preparation. The questions are challenging and the explanations are concise yet comprehensive.",
      author: "Dr. Shadrah",
      title: "Resident, Internal Medicine",
      image: "/assets/images/testimonials/flower.png"
    },
    {
      quote: "The adaptive learning algorithm really helped me focus on my weak areas. I saw a 15% improvement in my practice exam scores after just one month.",
      author: "Dr. Michael Chen",
      title: "Medical Student",
      image: "/assets/images/testimonials/jjingo.png"
    },
    {
      quote: "As a department head, I recommend ClinIQ to all our residents. The quality of questions and clinical scenarios are excellent for building clinical reasoning.",
      author: "Dr. Solomom Ssekiranda",
      title: "Chief of Emergency Medicine",
      image: "/assets/images/testimonials/solomon.png"
    }
  ];
  
  return (
    <section className="testimonials-section">
      <h2 className="section-title">What Our Users Say</h2>
      
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <motion.div 
            key={index} 
            className="testimonial-card"
            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="testimonial-quote">{testimonial.quote}</div>
            <div className="testimonial-author">
              <img src={testimonial.image} alt={testimonial.author} className="testimonial-image" />
              <div>
                <div className="testimonial-name">{testimonial.author}</div>
                <div className="testimonial-title">{testimonial.title}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const CTASection = () => (
  <section className="cta-section">
    <div className="cta-content">
      <Heart size={48} className="cta-icon" />
      <h2>Ready to transform your medical knowledge?</h2>
      <p>Join thousands of medical professionals who are mastering clinical knowledge with ClinIQ</p>
      <button className="btn-primary btn-large">
        Start Free Trial
      </button>
    </div>
  </section>
);

export default Home;