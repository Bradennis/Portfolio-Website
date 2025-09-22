import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Figma, Image as ImageIcon } from "lucide-react";

const projects = [
  {
    img: "/src/assets/portfolio1.jpg",
    title: "Creative Web Design",
    category: "Web",
    live: "https://example.com",
    github: "https://github.com/example/web-design",
  },
  {
    img: "/src/assets/portfolio2.jpg",
    title: "AI Chatbot",
    category: "AI/ML",
    github: "https://github.com/example/ai-chatbot",
  },
  {
    img: "/src/assets/portfolio3.jpg",
    title: "Brand Identity",
    category: "Design",
    type: "Graphics",
    preview: "/src/assets/full-graphic.jpg",
  },
  {
    img: "/src/assets/portfolio4.jpg",
    title: "Mobile Banking UI",
    category: "UI/UX",
    figma: "https://www.figma.com/file/example-ui",
  },
  {
    img: "/src/assets/portfolio5.jpg",
    title: "E-commerce Website",
    category: "Web",
    live: "https://example-ecommerce.com",
    github: "https://github.com/example/ecommerce",
  },
  {
    img: "/src/assets/portfolio6.jpg",
    title: "Machine Learning Model",
    category: "AI/ML",
    github: "https://github.com/example/ml-model",
  },
  {
    img: "/src/assets/portfolio7.jpg",
    title: "Poster Design",
    category: "Design",
    type: "Graphics",
    preview: "/src/assets/poster-full.jpg",
  },
];

const categories = ["All", "Web", "AI/ML", "Design", "UI/UX"];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) =>
          selectedCategory === "Design"
            ? p.category === "Design"
            : p.category === selectedCategory
        );

  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 5);

  return (
    <section className='portfolio-section'>
      <motion.h2
        className='portfolio-title'
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Portfolio
      </motion.h2>
      <motion.p
        className='portfolio-subtitle'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        A glimpse of my recent work
      </motion.p>

      {/* Filter Bar */}
      <div className='portfolio-filters'>
        {categories.map((cat) => (
          <button
            key={cat}
            className={`portfolio-filter-btn ${
              selectedCategory === cat ? "active" : ""
            }`}
            onClick={() => {
              setSelectedCategory(cat);
              setShowAll(false);
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className='portfolio-grid'>
        {displayedProjects.map((project, index) => (
          <motion.div
            key={index}
            className='portfolio-card'
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >
            <div className='portfolio-img-wrapper'>
              <img src={project.img} alt={project.title} />
              <div className='portfolio-overlay'>
                <h3>{project.title}</h3>
                <div className='portfolio-actions'>
                  {project.category === "Web" && (
                    <>
                      <a
                        href={project.live}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <ExternalLink size={18} /> Live Site
                      </a>
                      <a
                        href={project.github}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <Github size={18} /> Code
                      </a>
                    </>
                  )}
                  {project.category === "AI/ML" && (
                    <a
                      href={project.github}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <Github size={18} /> View Code
                    </a>
                  )}
                  {project.category === "UI/UX" && (
                    <a
                      href={project.figma}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <Figma size={18} /> Preview
                    </a>
                  )}
                  {project.category === "Design" &&
                    project.type === "Graphics" && (
                      <a
                        href={project.preview}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <ImageIcon size={18} /> View Image
                      </a>
                    )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Show More / Show Less */}
      {filteredProjects.length > 5 && (
        <div className='portfolio-toggle'>
          <button
            onClick={() => setShowAll(!showAll)}
            className='portfolio-toggle-btn'
          >
            {showAll ? "▲ Show Less" : "▼ Show More"}
          </button>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
