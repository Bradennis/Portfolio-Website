import React, { useState, useEffect } from "react";
import { FiDownload } from "react-icons/fi";
import { MdMemory, MdBrush, MdDesignServices, MdDevices } from "react-icons/md";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaBrain,
  FaPaintBrush,
} from "react-icons/fa";
import {
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";
import "../styles/Home.css";
import Portfolio from "../components/Portfolio";
import ResumeSection from "../components/ResumeSection";

const useIsMobile = (breakpoint = 900) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= breakpoint);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= breakpoint);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);
  return isMobile;
};

const skills = [
  {
    icon: <FaLaptopCode />,
    title: "Web Development",
    description:
      "I build fast, scalable, and responsive websites with modern frameworks and best practices.",
    color: "linear-gradient(135deg, #3b82f6, #1e40af)", // blue 500 → blue 900
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile Development",
    description:
      "I create intuitive and high-performance mobile applications for Android and iOS.",
    color: "linear-gradient(135deg, #38bdf8, #0284c7)", // sky 400 → sky 700
  },
  {
    icon: <FaBrain />,
    title: "AI & Machine Learning",
    description:
      "I develop intelligent solutions using AI and ML to solve real-world problems effectively.",
    color: "linear-gradient(135deg, #2563eb, #0f172a)", // blue 600 → slate 900
  },
  {
    icon: <FaPaintBrush />,
    title: "Graphics Design & UI/UX",
    description:
      "I design visually appealing interfaces and graphics with a focus on user experience.",
    color: "linear-gradient(135deg, #60a5fa, #1d4ed8)", // blue 400 → blue 700
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Home = () => {
  const isMobile = useIsMobile();

  return (
    <div className='home'>
      {/* Hero Section */}
      <section className='hero'>
        <div className='hero-left'>
          <div className='hero-welcome'>ABOUT ME</div>
          <h1 className='hero-title'>
            Hi, I’m <span className='hero-name'>Dennis Akplehey Agyemang</span>
            <br />
            <span className='hero-role'>
              Web & Mobile Developer | AI/ML Engineer
            </span>
          </h1>

          <p className='hero-desc'>
            I’m a creative web & mobile developer with a Computer Science
            background and a passion for AI and machine learning. I love
            building sleek, modern apps and smart digital solutions that make
            life easier and more fun. From full-stack development to intuitive
            UI/UX, I blend code and creativity to craft experiences that stand
            out.
          </p>

          <p className='hero-find'>FIND ME ON:</p>

          <div className='hero-socials'>
            <div className='hero-social-group'>
              <a
                href='https://www.linkedin.com/in/dennis-agyemang-702704232/'
                title='LinkedIn'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaLinkedin />
              </a>
              <a
                href='https://github.com/Bradennis'
                title='GitHub'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaGithub />
              </a>
            </div>

            <div className='hero-divider'></div>

            <div className='hero-social-group'>
              <a href='#' title='Facebook'>
                <FaFacebook />
              </a>
              <a
                href='https://x.com/dennisAgye'
                title='X'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaXTwitter />
              </a>
              <a href='#' title='Instagram'>
                <FaInstagram />
              </a>
            </div>
          </div>

          <div className='hero-actions'>
            <a href='/portfolio' className='hero-btn hero-btn-primary'>
              View My Work
            </a>
            <a
              href='/DENNIS AKPLEHEY AGYEMANG_CV.pdf'
              className='hero-btn hero-btn-outline'
              target='_blank'
              rel='noopener noreferrer'
            >
              <span className='hero-download'>
                <FiDownload className='hero-btn-icon' />
                Download CV
              </span>
            </a>
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

      {/* Elevator Pitch Section */}
      <section className='elevator-pitch'>
        <div className='container'>
          <motion.h2
            className='elevator-title'
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            My Elevator Pitch
          </motion.h2>
          <motion.p
            className='elevator-subtitle'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A quick introduction about who I am, what I do, and the value I
            bring.
          </motion.p>

          <motion.div
            className='elevator-video-card'
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className='video-wrapper'>
              {/* Replace with your YouTube link or mp4 source */}
              <iframe
                src='https://www.youtube.com/embed/dQw4w9WgXcQ'
                title='Elevator Pitch Video'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Me Section (styled after 'Why Choose Us') */}
      <section className='what-i-do'>
        <div className='container'>
          <motion.h2
            className='what-i-do-title'
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            What I Do
          </motion.h2>

          <div className='what-i-do-grid'>
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className='what-i-do-card'
                variants={cardVariants}
                initial='hidden'
                whileInView='visible'
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, y: -10 }}
                whileTap={{ scale: 0.98 }}
              >
                <div
                  className='what-i-do-icon'
                  style={{ background: skill.color }}
                >
                  {skill.icon}
                </div>
                <div className='what-i-do-content'>
                  <h3>{skill.title}</h3>
                  <p>{skill.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <Portfolio />

      {/* Resume Section */}
      <ResumeSection />
    </div>
  );
};

export default Home;
