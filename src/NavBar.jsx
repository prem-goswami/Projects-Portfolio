import { motion } from "framer-motion";

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

export const NavBar = () => {
  return (
    <motion.nav
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <motion.div
        className="logo"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Portfolio
      </motion.div>

      <motion.ul
        className="nav-links"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <a variants={fadeInup} href="#home">
            Home
          </a>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <a variants={fadeInup} href="#projects">
            Projects
          </a>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <a variants={fadeInup} href="#contact">
            Contact
          </a>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <a
            href="/projects/Prem-Goswami%20Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            title="View Resume"
            style={{ display: "flex", alignItems: "center", gap: "6px" }}
          >
            <i className="fas fa-file-download" style={{ fontSize: "1.2em" }}></i>
            Resume
          </a>
        </motion.li>
      </motion.ul>
    </motion.nav>
  );
};
