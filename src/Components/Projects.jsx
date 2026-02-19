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
  const projects = [
    {
      title: "Animated Website",
      description:
        "Interactive landing experience with synchronized scroll animations, audio integration, and performance-optimized transitions.",
      image: "/projects/animated-website.png",
      link: "https://animatedwebsite-zentry.netlify.app/",
      tech: ["React", "GSAP", "CSS"],
    },
    {
      title: "AI-Powered Job Tracker",
      description:
        "Automated WhatsApp-based job tracking workflow using n8n, Gemini AI, Docker, and Google Sheets integration.",
      image: "/projects/N8n-Workflow.png",
      link: "https://github.com/prem-goswami/ApplicationTracker-N8N",
      tech: ["n8n", "Gemini AI", "Docker", "WhatsApp API"],
    },
    {
      title: "DSA Student Buddy",
      description:
        "Mentor-style Chrome extension for LeetCode that provides progressive hints with Gemini-powered guidance, model fallback handling, and strict no-solution guardrails.",
      image: "/projects/Dsa-Buddy.png",
      link: "https://github.com/prem-goswami/DSA-buddy",
      tech: ["Vite", "React", "Manifest V3", "Gemini API"],
    },
    {
      title: "Trending Movies",
      description:
        "Movie discovery platform with API-powered data, debounced search, and responsive interaction patterns.",
      image: "/projects/Movies.png",
      link: "https://trendingmoviesreact.netlify.app/",
      tech: ["React", "Firebase", "API Integration"],
    },
    {
      title: "Cafe Finder",
      description:
        "Location-based web app to explore nearby cafes with search, interactive maps, and quick navigation support.",
      image: "/projects/Cafe-Finder.png",
      link: "https://cafecurator.netlify.app/",
      tech: ["React", "Google Places API", "Vite"],
    },
    {
      title: "Crown Clothing",
      description:
        "Modern e-commerce storefront featuring catalog browsing, cart functionality, and user authentication flow.",
      image: "/projects/crown-clothing.png",
      link: "https://corwn-clothing.netlify.app/",
      tech: ["React", "TypeScript", "Tailwind CSS"],
    },
  ];

  return (
    <motion.section
      id="projects"
      className="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: false, amount: 0.2 }}
      >
        Featured Projects
      </motion.h2>
      <motion.p
        className="section-subtitle"
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: false, amount: 0.2 }}
      >
        Selected work focused on product quality, scalable architecture, and
        clean user experiences.
      </motion.p>
      <motion.div
        className="project-grid"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: false, amount: 0.15 }}
      >
        {projects.map((project) => (
          <motion.a
            key={project.title}
            className="project-card"
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            variants={fadeInUp}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            style={{
              display: "flex",
              flexDirection: "column",
              textDecoration: "none",
            }}
          >
            <motion.div
              className="project-image"
              style={{ backgroundImage: `url('${project.image}')` }}
            />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tech">
              {project.tech.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </motion.a>
        ))}
      </motion.div>
    </motion.section>
  );
};
