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
            An engineer who makes ideas real faster than deadlines can blink.By
            day I build applications from the ground up using React, Node,
            PostgreSQL, and AWS, and I’ve scaled data-intensive, full-stack
            applications to improve data retrieval by 35% while shipping 15+
            product features in six months. By night, I wonder why semicolons
            choose the worst possible moments to disappear.
            <br /> As an AWS Certified Solutions Architect, I’m not just writing
            code I’m designing systems that stay reliable when traffic spikes,
            scale as businesses grow, and refuse to break even when you look at
            them funny. My toolkit includes automation, performance tuning, and
            the occasional motivational pep talk to stubborn APIs. I lean toward
            frontend and design because code is my craft, but design is where
            the artist in me comes alive.
            <br /> To me, software engineering isn’t just about shipping
            features; it’s about creating experiences. That’s why I love adding
            polish with subtle CSS animations, automating pipelines that save
            hours, and mentoring others so they don’t repeat the mistakes I
            definitely didn’t make (well, maybe once or twice).
            <br />
            Outside of work, you’ll find me debating what to order, geeking out
            as a cinema buff, or tinkering with side projects to keep my
            curiosity sharp. <br /> Have a look at my resume to see my technical
            qualifications in detail.
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
