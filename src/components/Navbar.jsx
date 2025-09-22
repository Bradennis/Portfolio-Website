import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FiMail, FiPhone } from "react-icons/fi";
import profPic from "../assets/prof.jpg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      {/* Top White Navbar: logo/profile left, contact info center, Hire Me right */}
      <div className='navbar-topbar-white'>
        <div className='navbar-topbar-left'>
          <div
            className='navbar-logo'
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.7rem",
              position: "relative",
            }}
          >
            <img
              src={profPic}
              alt='Profile'
              className='navbar-avatar'
              style={{ width: "52px", height: "52px", borderRadius: "50%" }}
            />
            <span
              style={{
                position: "relative",
                display: "inline-block",
                height: "52px",
              }}
            >
              <svg
                width='60'
                height='24'
                viewBox='0 0 80 32'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                style={{
                  position: "absolute",
                  top: "-10px",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              >
                <defs>
                  <linearGradient
                    id='navArcGradient'
                    x1='0'
                    y1='0'
                    x2='80'
                    y2='0'
                    gradientUnits='userSpaceOnUse'
                  >
                    <stop stopColor='#e94b4b' />
                    <stop offset='1' stopColor='#a259ff' />
                  </linearGradient>
                </defs>
                <path
                  d='M10 26 Q40 2 70 26'
                  stroke='url(#navArcGradient)'
                  strokeWidth='4'
                  fill='none'
                  strokeLinecap='round'
                />
                <circle
                  cx='40'
                  cy='2'
                  r='3.5'
                  fill='#fff'
                  stroke='#a259ff'
                  strokeWidth='2'
                />
              </svg>
              <span
                className='footer-logo'
                style={{
                  fontFamily: "Pacifico, cursive",
                  fontSize: "1.7rem",
                  color: "#1a237e",
                  letterSpacing: "2px",
                  textShadow: "0 2px 8px rgba(40,53,147,0.18)",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                Bra Dennis
              </span>
            </span>
          </div>
        </div>
        <div className='navbar-topbar-center'>
          <span>
            <FiMail style={{ marginRight: "6px" }} />{" "}
            agyemangdennis446@gmail.com
          </span>
          <span style={{ marginLeft: "2rem" }}>
            <FiPhone style={{ marginRight: "6px" }} /> +233 55 444 7076
          </span>
        </div>
        <div className='navbar-topbar-right'>
          <button className='hire-me-btn'>
            <span
              style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
            >
              <svg
                width='22'
                height='22'
                viewBox='0 0 22 22'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <circle cx='11' cy='11' r='10' fill='#1976d2' />
                <path
                  d='M7 11L10 14L15 9'
                  stroke='#fff'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
              Get a Quote
            </span>
          </button>
        </div>
      </div>
      {/* Main Blue Navigation Bar: shorter, centered links, search right, inside white parent */}

      <nav className='navbar'>
        <div className='navbar-container'>
          <div
            className='navbar-links'
            style={{ display: "flex", gap: "2.2rem", alignItems: "center" }}
          >
            <Link to='/'>Home</Link>
            <Link to='/portfolio'>Portfolio</Link>
            <Link to='/resume'>Resume</Link>
            <Link to='/clients'>Clients</Link>
            <Link to='/contact'>Contact</Link>
          </div>
          <div
            className='navbar-actions'
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1.2rem",
              marginLeft: "auto",
            }}
          >
            <input
              type='text'
              className='navbar-search-input'
              placeholder='Search...'
            />
            <button className='navbar-search-btn'>
              <i className='fas fa-search'></i>
            </button>
            <div
              className='navbar-hamburger'
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
