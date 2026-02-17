import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.2 },
  transition: { duration: 0.55 },
};

const timelineStagger = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

export const Experience = () => {
  const experiences = [
    {
      company: "Broadridge Financial Solutions",
      role: "Software Engineer",
      duration: "Jul 2022 – Sep 2023",
      achievements: [
        "Developed and optimized 20+ RESTful APIs using Node.js, Express.js, and PostgreSQL, improving backend data retrieval efficiency by 35% for real-time financial transactions.",
        "Designed and deployed scalable microservices on AWS Lambda and EC2, reducing infrastructure costs by 40% and improving system scalability.",
        "Integrated AWS S3 and RDS for secure, role-based data management and automated deployments through CI/CD pipelines.",
        "Delivered 15+ features in Agile sprints while collaborating with cross-functional teams to ship robust, production-ready systems.",
      ],
      stack: [
        "Node.js",
        "AWS (Lambda, S3, RDS, EC2)",
        "Serverless Architecture",
        "PostgreSQL",
        "REST API Design",
        "CI/CD",
      ],
    },
    {
      company: "Mobigesture",
      role: "Associate Software Engineer",
      duration: "May 2022 – Jun 2022",
      achievements: [
        "Engineered responsive and modular web interfaces using React.js, Bootstrap, and jQuery, cutting UI delivery time by 20%.",
        "Built dashboard modules and reusable UI components for internal operation systems, improving developer productivity and consistency.",
        "Integrated secure and scalable REST and GraphQL APIs for dynamic, data-driven user experiences.",
        "Collaborated with backend engineers to optimize data pipelines, caching strategies, and API performance.",
      ],
      stack: ["React.js", "GraphQL", "Bootstrap", "jQuery", "REST", "Firebase"],
    },
  ];

  return (
    <motion.section
      id="experience"
      className="experience"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.12 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2 {...fadeInUp}>Professional Experience</motion.h2>
      <motion.p className="section-subtitle" {...fadeInUp}>
        Roles where I delivered measurable product, performance, and platform
        impact.
      </motion.p>

      <motion.div
        className="experience-timeline"
        variants={timelineStagger}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: false, amount: 0.15 }}
      >
        {experiences.map((experience) => (
          <motion.article
            key={`${experience.company}-${experience.role}`}
            className="experience-card"
            {...fadeInUp}
          >
            <header className="experience-header">
              <div>
                <h3>{experience.role}</h3>
                <p className="experience-company">{experience.company}</p>
              </div>
              <span className="experience-duration">{experience.duration}</span>
            </header>

            <ul className="experience-points">
              {experience.achievements.map((achievement) => (
                <li key={achievement}>{achievement}</li>
              ))}
            </ul>

            <div className="experience-stack">
              {experience.stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </motion.article>
        ))}
      </motion.div>
    </motion.section>
  );
};
