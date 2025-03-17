import React from 'react';
import { Link } from 'react-router-dom';
import UserProfile from './UserProfile';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/">
          <h1>Medical MCQ</h1>
        </Link>
        <div>
          <Link to="/">Home</Link>
          <UserProfile />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;