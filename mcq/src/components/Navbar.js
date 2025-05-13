// components/Navbar.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, LogOut } from 'lucide-react';
import './Navbar.css';

function Navbar({ onSidebarToggle }) {
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
          <h1 className="text-xl font-bold text-white">MediQuiz</h1>
        </Link>

        <div className="navbar-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/quizzes" className="nav-link">Quizzes</Link>
          <Link to="/progress" className="nav-link">Progress</Link>
          <Link to="/leaderboard" className="nav-link">Leaderboard</Link>
        </div>

        <button
          className="navbar-toggle"
          onClick={onSidebarToggle}
          aria-label="Toggle sidebar"
        >
          <Menu size={24} />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;