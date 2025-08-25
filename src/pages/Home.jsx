import React, { useState, useEffect } from "react";
import "../styles/Home.css";

// Add Font Awesome CDN for icons
const fontAwesomeLink = document.createElement("link");
fontAwesomeLink.rel = "stylesheet";
fontAwesomeLink.href =
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css";
document.head.appendChild(fontAwesomeLink);

const useIsMobile = (breakpoint = 900) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= breakpoint);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= breakpoint);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);
  return isMobile;
};

const Home = () => {
  const isMobile = useIsMobile();

  return (
    <div className='home'>
      {/* Hero Section */}
      <section className='hero'>
        <div className='hero-left'>
          <div className='hero-welcome'>WELCOME TO MY WORLD</div>
          <h1 className='hero-title'>
            Hi, I’m <span className='hero-name'>Dennis Akplehey Agyemang</span>
            <br />
            <span className='hero-role'>
              Web & Mobile Developer | AI/ML Engineer | Graphics & UI/UX
              Designer
            </span>
          </h1>
          {isMobile && (
            <div className='hero-right hero-right-mobile'>
              <div className='hero-card-bg'>
                <img
                  src='/src/assets/suit1.png'
                  alt='Profile'
                  className='hero-profile-img'
                />
              </div>
            </div>
          )}
          <p className='hero-desc'>
            I build modern web and mobile applications, design beautiful user
            interfaces, and create intelligent solutions with AI and machine
            learning. I also craft stunning graphics and deliver seamless user
            experiences.
          </p>

          <p style={{ marginBottom: "-15px" }}>FIND ME ON:</p>
          <div className='hero-socials'>
            <div style={{ display: "flex", gap: "1rem" }}>
              <a href='#' title='LinkedIn'>
                <i className='fab fa-linkedin'></i>
              </a>
              <a href='#' title='GitHub'>
                <i className='fab fa-github'></i>
              </a>
            </div>

            <div style={{ display: "flex", gap: "1rem" }}>
              <a href='#' title='Facebook'>
                <i className='fab fa-facebook'></i>
              </a>
              <a href='#' title='X' className='social-x'>
                <svg
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M17.53 3H21.5L14.42 10.62L22.75 21H16.44L11.38 14.62L5.77 21H1.8L9.22 12.94L1.25 3H7.73L12.36 8.84L17.53 3ZM16.46 19.13H18.29L7.38 4.8H5.44L16.46 19.13Z'
                    fill='currentColor'
                  />
                </svg>
              </a>
              <a href='#' title='Instagram'>
                <i className='fab fa-instagram'></i>
              </a>
            </div>
          </div>
        </div>
        {!isMobile && (
          <div className='hero-right'>
            <div className='hero-card-bg'>
              <img
                src='/src/assets/suit1.png'
                alt='Profile'
                className='hero-profile-img'
              />
            </div>
          </div>
        )}
      </section>

      {/* What I Do Section */}
      <section className='what-i-do'>
        <h2>What I Do</h2>
        <div className='cards'>
          <div className='card'>
            <div className='card-icon'>📈</div>
            <div className='card-title'>Business Strategy</div>
            <div className='card-desc'>
              I help companies grow and succeed with clear business strategies
              and tech expertise.
            </div>
          </div>
          <div className='card'>
            <div className='card-icon'>💻</div>
            <div className='card-title'>App Development</div>
            <div className='card-desc'>
              Building modern web and mobile applications to solve real-world
              problems.
            </div>
          </div>
          <div className='card'>
            <div className='card-icon'>📱</div>
            <div className='card-title'>Mobile Apps</div>
            <div className='card-desc'>
              Creating seamless mobile experiences for users and businesses.
            </div>
          </div>
          <div className='card'>
            <div className='card-icon'>🚀</div>
            <div className='card-title'>CEO Marketing</div>
            <div className='card-desc'>
              Marketing strategies for CEOs and startups to boost their brand
              and reach.
            </div>
          </div>
          <div className='card'>
            <div className='card-icon'>🗂️</div>
            <div className='card-title'>Personal Portfolio App</div>
            <div className='card-desc'>
              Showcasing personal work and achievements in a professional
              portfolio app.
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className='portfolio-preview'>
        <h2>My Portfolio</h2>
        <div className='portfolio-cards'>
          <div className='portfolio-card'>
            <img src='/src/assets/portfolio ui.jpg' alt='Portfolio 1' />
            <div className='portfolio-title'>
              The services provide for design
            </div>
          </div>
          <div className='portfolio-card'>
            <img src='/src/assets/portfolio ui.jpg' alt='Portfolio 2' />
            <div className='portfolio-title'>
              Mobile app landing design & app maintain
            </div>
          </div>
          <div className='portfolio-card'>
            <img src='/src/assets/portfolio ui.jpg' alt='Portfolio 3' />
            <div className='portfolio-title'>
              Logo design creativity & Application
            </div>
          </div>
          <div className='portfolio-card'>
            <img src='/src/assets/portfolio ui.jpg' alt='Portfolio 4' />
            <div className='portfolio-title'>
              Design for technology & services
            </div>
          </div>
          <div className='portfolio-card'>
            <img src='/src/assets/portfolio ui.jpg' alt='Portfolio 5' />
            <div className='portfolio-title'>App for technology & services</div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section className='resume-preview'>
        <h2>My Resume</h2>
        <div className='resume-tabs'>
          <button className='resume-tab active'>Education</button>
          <button className='resume-tab'>Professional Skills</button>
          <button className='resume-tab'>Experience</button>
          <button className='resume-tab'>Interview</button>
        </div>
        <div className='resume-cards'>
          <div className='resume-card'>
            <div className='resume-card-title'>Education Quality</div>
            <div className='resume-card-desc'>
              Personal Portfolio App | Fools
              <br />
              The education quality is top-notch and tailored for tech
              professionals.
            </div>
          </div>
          <div className='resume-card'>
            <div className='resume-card-title'>Job Experience</div>
            <div className='resume-card-desc'>
              Diploma in Web Development
              <br />
              Worked on multiple web projects and delivered high-quality
              results.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
