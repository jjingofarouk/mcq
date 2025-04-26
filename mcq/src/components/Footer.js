import React from 'react';
import { Github, Twitter, Linkedin, Mail, Heart } from 'lucide-react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="app-footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <h2 className="text-xl font-bold text-blue-600">ClinIQ</h2>
            <p className="footer-tagline">Empowering medical professionals through knowledge</p>
          </div>
          
          <div className="footer-links">
            <div className="footer-links-section">
              <h3 className="footer-heading">Platform</h3>
              <ul>
                <li><a href="/features">Features</a></li>
                <li><a href="/quizzes">Quiz Library</a></li>
                <li><a href="/pricing">Pricing</a></li>
              </ul>
            </div>
            
            <div className="footer-links-section">
              <h3 className="footer-heading">Support</h3>
              <ul>
                <li><a href="/help">Help Center</a></li>
                <li><a href="/faq">FAQ</a></li>
                <li><a href="/contact">Contact Us</a></li>
              </ul>
            </div>
            
            <div className="footer-links-section">
              <h3 className="footer-heading">Legal</h3>
              <ul>
                <li><a href="/privacy">Privacy Policy</a></li>
                <li><a href="/terms">Terms of Use</a></li>
                <li><a href="/disclaimer">Medical Disclaimer</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-divider"></div>
        
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; {currentYear} ClinIQ. All rights reserved.</p>
          </div>
          
          <div className="footer-social">
            <a href="https://github.com" aria-label="GitHub" className="footer-social-link">
              <Github size={18} />
            </a>
            <a href="https://twitter.com" aria-label="Twitter" className="footer-social-link">
              <Twitter size={18} />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn" className="footer-social-link">
              <Linkedin size={18} />
            </a>
            <a href="mailto:jjingofaroukk@gmail.com" aria-label="Email" className="footer-social-link">
              <Mail size={18} />
            </a>
          </div>
        </div>
        
        <div className="footer-creator">
          <p>
            Created with <Heart size={14} className="inline text-red-500 mx-1" /> by 
            <a href="mailto:jjingofaroukk@gmail.com" className="ml-1 hover:text-blue-600 transition-colors">
              Jjingo Farouk
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;