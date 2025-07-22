import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/quiz">Quiz</Link></li>
        <li><Link to="/community">Community</Link></li>
        <li><Link to="/contact">Contact</Link></li>      
      </ul>
    </nav>
  );
}

export default Navbar;
