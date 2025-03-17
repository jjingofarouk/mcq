import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/">
          <h1>Medical MCQ</h1>
        </Link>
        <div>
          <Link to="/">Home</Link>
          <Link to="/specialties">Specialties</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;