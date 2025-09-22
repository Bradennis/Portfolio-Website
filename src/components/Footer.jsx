import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import "../styles/Footer.css";

const Footer = () => (
  <footer className='footer'>
    <div className='footer-main'>
      <div className='footer-section about'>
        <h3>About Me</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur elit. Portfolio designer & developer.
        </p>
        <span
          className='footer-logo'
          style={{
            display: "block",
            textAlign: "center",
            position: "relative",
          }}
        >
          <svg
            width='80'
            height='32'
            viewBox='0 0 80 32'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            style={{
              position: "absolute",
              top: "-36px",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            <defs>
              <linearGradient
                id='footerArcGradient'
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
              stroke='url(#footerArcGradient)'
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
            style={{
              fontFamily: "Pacifico, cursive",
              fontSize: "2rem",
              color: "#e94b4b",
              letterSpacing: "2px",
              textShadow: "0 2px 8px rgba(162,89,255,0.12)",
            }}
          >
            Bra Dennis
          </span>
        </span>
      </div>

      <div className='footer-section programs'>
        <h3>Programs</h3>
        <ul>
          <li><a href='#'>Web Development Bootcamp</a></li>
          <li><a href='#'>AI/ML Training</a></li>
          <li><a href='#'>UI/UX Workshops</a></li>
        </ul>
      </div>

      <div className='footer-section community'>
        <h3>Community</h3>
        <ul>
          <li><a href='#'>Forum</a></li>
          <li><a href='#'>Events</a></li>
          <li><a href='#'>Mentorship</a></li>
        </ul>
      </div>

      <div className='footer-section resources'>
        <h3>Resources</h3>
        <ul>
          <li><a href='#'>Blog</a></li>
          <li><a href='#'>Tutorials</a></li>
          <li><a href='#'>Documentation</a></li>
        </ul>
      </div>

      <div className='footer-section contact'>
        <h3>Get in Touch</h3>
        <p>Tema-Newtown,Accra, Ghana</p>
        <p>Phone: +233 55 444 7076 </p>
        <p>Email: agyemangdennis446@gmail.com</p>
        <div className='footer-socials'>
          <a href='#'>
            <FaFacebookF />
          </a>
          <a href='#'>
            <FaTwitter />
          </a>
          <a href='#'>
            <FaLinkedinIn />
          </a>
          <a href='#'>
            <FaInstagram />
          </a>
        </div>
      </div>

      <div className='footer-section newsletter'>
        <h3>Subscribe Newsletter</h3>
        <form className='footer-newsletter'>
          <input type='email' placeholder='Email Address' />
          <button type='submit'>Subscribe</button>
        </form>
      </div>
    </div>
    <div className='footer-bottom'>
      <span>Copyright © 2025 Dennis Agyemang. All Rights Reserved.</span>
      <div className='footer-links'>
        <a href='#'>Terms & Conditions</a>
        <a href='#'>Privacy Policy</a>
      </div>
    </div>
  </footer>
);

export default Footer;
