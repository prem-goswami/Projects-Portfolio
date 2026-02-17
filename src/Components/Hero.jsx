import { motion } from "framer-motion";
import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const fadeInup = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.2 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const Hero = () => {
  const [showFullBio, setShowFullBio] = useState(false);

  const bioSections = [
    {
      title: "Engineering Impact",
      text: "An engineer who makes ideas real faster than deadlines can blink.By day I build applications from the ground up using React, Node, PostgreSQL, and AWS, and I’ve scaled data-intensive, full-stack applications to improve data retrieval by 35% while shipping 15+ product features in six months. By night, I wonder why semicolons choose the worst possible moments to disappear.",
    },
    {
      title: "Cloud & Architecture",
      text: "As an AWS Certified Solutions Architect, I’m not just writing code I’m designing systems that stay reliable when traffic spikes, scale as businesses grow, and refuse to break even when you look at them funny. My toolkit includes automation, performance tuning, and the occasional motivational pep talk to stubborn APIs. I lean toward frontend and design because code is my craft, but design is where the artist in me comes alive.",
    },
    {
      title: "Craft & Mentorship",
      text: "To me, software engineering isn’t just about shipping features; it’s about creating experiences. That’s why I love adding polish with subtle CSS animations, automating pipelines that save hours, and mentoring others so they don’t repeat the mistakes I definitely didn’t make (well, maybe once or twice).",
    },
    {
      title: "Beyond Work",
      text: "Outside of work, you’ll find me debating what to order, geeking out as a cinema buff, or tinkering with side projects to keep my curiosity sharp. Have a look at my resume to see my technical qualifications in detail.",
    },
  ];

  const visibleBioSections = showFullBio
    ? bioSections
    : bioSections.slice(0, 2);

  return (
    <motion.section
      id="home"
      className="hero"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.8, delay: 0.1 }}
    >
      <div className="hero-container">
        <motion.div
          className="hero-content"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: false, amount: 0.2 }}
        >
          <motion.div className="hero-badge">
            <span>Available for full-time opportunities</span>
          </motion.div>
          <motion.h1 className="glitch" variants={fadeInup}>
            Prem Goswami
          </motion.h1>
          <motion.h2 className="hero-subtitle">
            Full Stack Developer & AWS Certified Solutions Architect
          </motion.h2>
          <motion.div
            className={`hero-story ${showFullBio ? "expanded" : ""}`}
            variants={fadeInup}
          >
            {visibleBioSections.map((section) => (
              <div key={section.title} className="hero-description">
                <h3 className="hero-description-title">{section.title}</h3>
                <p>{section.text}</p>
              </div>
            ))}
          </motion.div>
          <button
            className="hero-toggle-btn"
            type="button"
            onClick={() => setShowFullBio((prev) => !prev)}
            aria-expanded={showFullBio}
          >
            {showFullBio ? "Show less" : "Read full story"}
          </button>

          <motion.div className="hero-metrics" variants={staggerContainer}>
            <div className="metric-card">
              <strong>80+</strong>
              <span>Features shipped</span>
            </div>
            <div className="metric-card">
              <strong>35%</strong>
              <span>Data retrieval improvement</span>
            </div>
            <div className="metric-card">
              <strong>AWS</strong>
              <span>SAA-C03 certified</span>
            </div>
          </motion.div>

          <motion.div className="cta-buttons" variants={staggerContainer}>
            <motion.a
              className="cta-primary"
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>
            <motion.a
              className="cta-secondary"
              href="/projects/PremPuriGoswami.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
            </motion.a>
            <motion.div className="social-links" variants={staggerContainer}>
              <motion.a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/prem-goswami"
                aria-label="GitHub"
              >
                <i className="fab fa-github" />
              </motion.a>
              <motion.a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/prempurigoswami/"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin" />
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div
          className="hero-image-container"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="profile-card">
            <img
              className="profile-image"
              src="/projects/PortfolioPic.jpg"
              alt="Prem Goswami"
            />
            <h3>Building reliable products end-to-end</h3>
            <p>
              From polished interfaces to resilient APIs and cloud deployment, I
              focus on outcomes that improve user experience and business
              performance.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};
