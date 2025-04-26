import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Home, BookOpen, ChartBar, Award, User } from 'lucide-react';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { to: '/', label: 'Home', icon: <Home size={20} /> },
    { to: '/quizzes', label: 'Quizzes', icon: <BookOpen size={20} /> },
    { to: '/progress', label: 'Progress', icon: <ChartBar size={20} /> },
    { to: '/leaderboard', label: 'Leaderboard', icon: <Award size={20} /> },
  ];

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <h1 className="text-xl font-bold text-blue-600">ClinIQ</h1>
          </Link>
          
          <button 
            className="navbar-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Slide-in menu */}
      <div className={`navbar-menu ${isOpen ? 'open' : ''}`}>
        <div className="navbar-menu-header">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button 
            className="navbar-close"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <div className="navbar-menu-items">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="navbar-item"
              onClick={() => setIsOpen(false)}
            >
              <span className="navbar-item-icon">{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </div>

        <div className="navbar-profile">
          <div className="flex items-center gap-3 p-4 border-t border-gray-100">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
              <User size={20} className="text-blue-600" />
            </div>
            <div>
              <p className="text-sm font-medium">Dr. Jane Smith</p>
              <p className="text-xs text-gray-500">View Profile</p>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay that appears behind the menu */}
      <div 
        className={`navbar-overlay ${isOpen ? 'open' : ''}`} 
        onClick={() => setIsOpen(false)}
      />
    </>
  );
}

export default Navbar;