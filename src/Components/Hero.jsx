import { easeIn, motion, wrap } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Components-css/Hero.css";
const fadeInup = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};

export const Hero = () => {
  return (
    <motion.section
      id="hero"
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1 }}
    >
      <div className="hero-container">
        <motion.div
          className="hero-content"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div className="hero-badge">
            <span>Hello I'm 👋🏻</span>
          </motion.div>
          <motion.h1
            className="glitch"
            variants={fadeInup}
            whileHover={{ scale: 1.05 }}
          >
            Prem Goswami
          </motion.h1>
          <motion.h2 className="hero-subtitle">
            I'm a Full Stack Developer
          </motion.h2>
          <motion.p className="hero-description" variants={fadeInup}>
            Full Stack Developer and AWS Certified Solutions Architect (SAA-C03)
            with nearly 5 years of experience in building scalable web
            applications and backend systems across fintech, logistics, and IT
            services domains. Proficient in modern JavaScript frameworks like
            React.js and Node.js, with hands-on expertise in PostgreSQL, RESTful
            API design, serverless architecture (AWS Lambda), and CI/CD
            automation using GitLab and Docker.. Recognized for delivering
            production-grade software with clean code, responsive UI/UX, and
            real-time data integration. strong background in Software
            Development Lifecycle and collaboration with cross-functional teams
            in Agile environments.
          </motion.p>
          <motion.div className="cta-buttons" variants={staggerContainer}>
            <motion.a
              className="cta-primary"
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View my Work
            </motion.a>
            <motion.div className="social-links" variants={staggerContainer}>
              <motion.a target="_blank" href="https://github.com/prem-goswami">
                <i className="fab fa-github" />
              </motion.a>
              <motion.a
                target="_blank"
                href="https://www.linkedin.com/in/prempurigoswami/"
              >
                <i className="fab fa-linkedin" />
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div
          className="hero-image-container"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <motion.div className="portfolioPhoto">
            <img src="/projects/PortfolioPic.jpg" alt="Portfolio-Pic" />{" "}
          </motion.div>
          <motion.div
            className="hero-image-inner"
            whileHover={{ scale: 1.06 }}
            style={{ width: "100%", height: "100%" }}
          >
            <div className="code-display">
              <SyntaxHighlighter
                language="javascript"
                style={vscDarkPlus}
                customStyle={{
                  margin: 0,
                  flexWrap: "wrap",
                  padding: "10px",
                  borderRadius: "16px",
                  background:
                    "linear-gradient(145deg, rgba(30,41,59,0.95), rgba(17,24,39,0.95))", // gradient dark bg
                  boxShadow: "0 4px 20px rgba(0,0,0,0.25)", // soft shadow for depth
                  backdropFilter: "blur(12px)", // frosted glass look
                  border: "1px solid rgba(255,255,255,0.05)", // subtle border for structure
                  fontSize: "0.95rem",
                  lineHeight: "1.6",
                  color: "#e2e8f0", // light text color for readability
                  overflowX: "auto", // prevent code from breaking layout
                }}
              >
                {`
  {
    name: "Prem Goswami",
    title: "Full Stack Developer | 
    AWS Certified Solutions Architect (SAA-C03)",
    coreSkills: [
      "Full Stack Development (React, Node.js, Python)",
      "AWS Cloud Architecture & Serverless Solutions",
      "REST API Design & Optimization",
      "CI/CD Automation with GitLab & Docker",
      "Database Design (PostgreSQL, MySQL, DynamoDB)",
      "Agile & Scrum Methodologies",
      "Version Control (Git & GitHub)"
    ],
    "My mission is to leverage full-stack development, 
    cloud computing (AWS),and automation to build efficient,
    scalable, and secure web applications.By integrating robust
    APIs, optimizing system performance, and fostering
    collaborative development, I aim to deliver impactful 
    software solutionsthat drive business growth and user 
    satisfaction."
  };
`}
              </SyntaxHighlighter>
            </div>
            <motion.div
              className="card-content"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="floating-card">
                <div className="card-content">
                  <span className="card-icon">🖥</span>
                  <span className="card-text">
                    Currently working on Cloud Deployments
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};
