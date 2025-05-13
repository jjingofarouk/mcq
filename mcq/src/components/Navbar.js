// components/Navbar.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { User, Sun, Moon } from 'lucide-react';
import './Navbar.css';

function Navbar({ onSidebarToggle, toggleTheme, isDarkMode }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <h1 className="text-xl font-bold">ClinIQ</h1>
        </Link>

        <div className="navbar-actions">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            className="profile-toggle"
            onClick={onSidebarToggle}
            aria-label="Open sidebar"
          >
            <User size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;