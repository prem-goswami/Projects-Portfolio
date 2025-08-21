import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        My Projects
      </motion.h2>
      <motion.div
        className="project-grid"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.a
          className="project-card"
          href="https://animatedwebsite-zentry.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
          style={{
            display: "flex",
            flexDirection: "column",
            textDecoration: "none",
          }}
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: "url('/projects/animated-website.png')" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
          <h3> Animated Website</h3>
          <p>
            A modern animated website built with React.js and OpenAI
            integration, featuring real-time AI-powered content generation and
            analytics.
          </p>
          <div className="project-tech">
            <span>Next.js</span>
            <span>OpenAI</span>
            <span>TailwindCSS</span>
          </div>
        </motion.a>

        <motion.a
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
          href="https://trendingmoviesreact.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            flexDirection: "column",
            textDecoration: "none",
          }}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: "url('/projects/Movies.png')",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <h3>Trending Movies</h3>
          <p>
            A comprehensive social media management dashboard with analytics,
            scheduling, and engagement tracking features.
          </p>
          <div className="project-tech">
            <span>React</span>
            <span>Node.js</span>
            <span>MongoDB</span>
          </div>
        </motion.a>

        <motion.a
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
          href="https://corwn-clothing.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            flexDirection: "column",
            textDecoration: "none",
          }}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: "url('/projects/crown-clothing.png')",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <h3>Crown Clothing</h3>
          <p>
            A sleek e-commerce application for a clothing brand, featuring
            product listings, shopping cart functionality, and user
            authentication.
          </p>
          <div className="project-tech">
            <span>React</span>
            <span>TypeScript</span>
            <span>TailwindCSS</span>
          </div>
        </motion.a>
      </motion.div>
    </motion.section>
  );
};
