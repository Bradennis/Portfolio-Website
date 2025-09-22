// ResumeSection.jsx
import React from "react";
import { motion } from "framer-motion";
import { FiDownload, FiMail, FiPhone } from "react-icons/fi";
import { MdSchool, MdWork, MdOutlineEmojiEvents } from "react-icons/md";
import "../styles/Resume.css"; // using same stylesheet - or create Resume.css and import it

export default function ResumeSection() {
  return (
    <section className='resume-section'>
      <div className='resume-inner container'>
        {/* LEFT SIDEBAR */}
        <aside className='resume-sidebar'>
          <div className='resume-card profile-card'>
            <div className='profile-photo'>
              <img src='/src/assets/suit1.png' alt='Dennis profile' />
            </div>
            <h2 className='profile-name'>Dennis A. Agyemang</h2>
            <p className='profile-role'>
              Web & Mobile Developer · AI/ML Engineer
            </p>

            <div className='contact'>
              <a
                className='download-cv'
                href='/DENNIS AKPLEHEY AGYEMANG_CV.pdf'
                target='_blank'
                rel='noreferrer'
              >
                <FiDownload /> Download CV
              </a>

              <div className='contact-list'>
                <div>
                  <FiMail className='ci' /> agyemangdennis446@gmail.com
                </div>
                <div>
                  <FiPhone className='ci' /> (+233) 554 447 076
                </div>
                <div>Tema, Ghana</div>
                <div>
                  <a
                    href='https://github.com/Bradennis'
                    target='_blank'
                    rel='noreferrer'
                  >
                    github.com/Bradennis
                  </a>
                </div>
                <div>
                  <a
                    href='https://www.linkedin.com/in/dennis-agyemang-702704232/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    linkedin.com/in/dennis-agyemang
                  </a>
                </div>
              </div>
            </div>

            <div className='skills-block'>
              <h4>Technical Skills</h4>
              <div className='skill-list'>
                {/* Skills from CV */}
                <span>HTML5</span>
                <span>CSS3</span>
                <span>JavaScript | TypeScript</span>
                <span>React.js |React Native</span>
                <span>Node.js</span>
                <span>Firebase</span>
                <span>Python</span>
                <span>C++</span>
                <span>TensorFlow</span>
                <span>MongoDB</span>
                <span>SQL</span>
                <span>Figma</span>
                <span>Git & GitHub</span>
              </div>

              <h4 style={{ marginTop: 14 }}>Professional Skills</h4>
              <div className='skill-list'>
                <span>Team Collaboration</span>
                <span>Problem Solving</span>
                <span>Communication</span>
                <span>Remote Work Tools</span>
              </div>
            </div>

            <div className='sidebar-footer'>
              <div className='small-meta'>
                <strong>Professional Bodies</strong>
                <div>IAENG, Internet Society Ghana</div>
                <div>Internet Society Ghana Chapter.</div>
              </div>
            </div>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <main className='resume-main'>
          <motion.h2
            className='resume-main-title'
            initial={{ opacity: 0, y: -12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Résumé
          </motion.h2>

          {/* WORK EXPERIENCE (timeline) */}
          <div className='resume-section-card'>
            <div className='section-header'>
              <MdWork className='section-icon' />
              <h3>Work Experience</h3>
            </div>

            <div className='timeline'>
              <div className='timeline-item'>
                <div className='timeline-meta'>Oct 2024 — Sep 2025</div>
                <div className='timeline-body'>
                  <h4>National Service — Teaching & Research Assistant</h4>
                  <div className='muted'>
                    University of Mines and Technology (UMaT), Ghana
                  </div>
                  <ul>
                    <li>
                      Supported teaching and supervision in Robotics, AI, Data
                      Science, Programming, and Computer Graphics.
                    </li>
                    <li>
                      Assisted in research design, data analysis, and academic
                      writing across computing disciplines.
                    </li>
                    <li>
                      Facilitated lab sessions and supervised student projects;
                      contributed to curriculum activities.
                    </li>
                  </ul>
                  <div className='source'>Source: CV.</div>
                </div>
              </div>

              <div className='timeline-item'>
                <div className='timeline-meta'>Oct 2023 — Nov 2023</div>
                <div className='timeline-body'>
                  <h4>Intern — Monitoring & Evaluation</h4>
                  <div className='muted'>
                    Food and Drugs Authority (FDA), Ghana
                  </div>
                  <ul>
                    <li>
                      Reviewed departmental reports, reducing reporting errors
                      by ~20%.
                    </li>
                    <li>
                      Produced KPI-based performance reports that informed
                      quarterly reviews.
                    </li>
                    <li>
                      Supported budget planning and activity tracking for M&E
                      functions.
                    </li>
                  </ul>
                  <div className='source'>Source: CV.</div>
                </div>
              </div>

              {/* Add more experience items if present in CV */}
            </div>
          </div>

          {/* EDUCATION */}
          <div className='resume-section-card'>
            <div className='section-header'>
              <MdSchool className='section-icon' />
              <h3>Education</h3>
            </div>

            <div className='timeline simple'>
              <div className='timeline-item'>
                <div className='timeline-meta'>Jan 2021 — Nov 2024</div>
                <div className='timeline-body'>
                  <h4>BSc. Computer Science</h4>
                  <div className='muted'>
                    Kwame Nkrumah University of Science and Technology (KNUST)
                  </div>
                  <p className='muted small'>
                    Relevant courses: Information Systems, Artificial
                    Intelligence, Database Concepts, Web Development, Computer
                    Networking.
                  </p>
                </div>
              </div>

              <div className='timeline-item'>
                <div className='timeline-meta'>Aug 2016 — Jun 2019</div>
                <div className='timeline-body'>
                  <h4>
                    West African Senior School Certificate Examination (WASSCE)
                  </h4>
                  <div className='muted'>Ada Senior High School (ADASCO)</div>
                </div>
              </div>
            </div>
          </div>

          {/* PROJECTS & PUBLICATIONS */}
          <div className='resume-section-card'>
            <div className='section-header'>
              <MdOutlineEmojiEvents className='section-icon' />
              <h3>Projects & Publications</h3>
            </div>

            <div className='projects-grid'>
              <div className='project'>
                <h4>Hybrid AI-Blockchain Framework</h4>
                <p className='muted small'>
                  Framework for proactive academic fraud detection (ongoing
                  project).
                </p>
              </div>

              <div className='project'>
                <h4>UniCare – Integrated Student Wellness System</h4>
                <p className='muted small'>
                  MERN-based platform unifying medical consultations,
                  counseling, and resources for students.
                </p>
              </div>

              <div className='project'>
                <h4>Publication (under review)</h4>
                <p className='muted small'>
                  Real-Time Gesture Recognition for Ghanaian Sign Language using
                  LSTM and Pose Landmarks. (paper under review).
                </p>
              </div>
            </div>
          </div>

          {/* ACHIEVEMENTS & CERTIFICATES */}
          <div className='resume-section-card'>
            <div className='section-header'>
              <MdOutlineEmojiEvents className='section-icon' />
              <h3>Achievements, Certificates & Awards</h3>
            </div>
            <ul>
              <li>IBM Data Science Professional Certificate (2024).</li>
              <li>
                Pre-Certified Ethical Hacking Program – Active Directory
                Fundamentals (2021).
              </li>
            </ul>
          </div>

          {/* CONFERENCES */}
          <div className='resume-section-card'>
            <div className='section-header'>
              <MdOutlineEmojiEvents className='section-icon' />
              <h3>Conferences & Symposia</h3>
            </div>
            <ul>
              <li>IEEE ICAST 2024 – Ghana.</li>
              <li>IEEE Region 8 ASYPC – Accra 2025.</li>
            </ul>
          </div>

          {/* LEADERSHIP */}
          <div className='resume-section-card'>
            <div className='section-header'>
              <MdOutlineEmojiEvents className='section-icon' />
              <h3>Leadership & Involvement</h3>
            </div>
            <ul>
              <li>
                President — The Divine Healer’s Students & Associates (DIHESA),
                KNUST (Jul 2023 – Jul 2024).
              </li>
              <li>
                Team Leader — National Science & Maths Quiz, Ada Senior High
                School (2018 – 2019).
              </li>
            </ul>
          </div>
        </main>
      </div>
    </section>
  );
}
