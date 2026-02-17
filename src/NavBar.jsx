import { motion } from "framer-motion";

export const NavBar = () => {
  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <a className="logo" href="#home">
        Prem Goswami
      </a>

      <ul className="nav-links">
        {navItems.map((item) => (
          <li key={item.href}>
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
        <li>
          <a
            href="/projects/PremPuriGoswami.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-link"
          >
            Resume
          </a>
        </li>
      </ul>
    </motion.nav>
  );
};
