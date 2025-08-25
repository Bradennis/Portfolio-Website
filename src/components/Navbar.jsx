import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <div className='navbar-logo'>
          <img
            src='/src/assets/prof.jpg'
            alt='Profile'
            className='navbar-avatar'
          />
          <span className='navbar-brand'>Dennis</span>
        </div>
        <div className={`navbar-links ${menuOpen ? "open" : ""}`}>
          <Link to='/'>Home</Link>
          <Link to='/portfolio'>Portfolio</Link>
          <Link to='/resume'>Resume</Link>
          <Link to='/clients'>Clients</Link>
          <Link to='/contact'>Contact</Link>
        </div>
        <div
          className='navbar-hamburger'
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
