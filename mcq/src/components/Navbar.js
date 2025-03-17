import React from 'react';
import { Link } from 'react-router-dom';
import UserProfile from './UserProfile';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/">
          <h1>ClinIQ</h1>
        </Link>
        <div>
          <Link to="/">Home</Link>
          <UserProfile minimal /> {/* Pass minimal prop to show only toggle */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;