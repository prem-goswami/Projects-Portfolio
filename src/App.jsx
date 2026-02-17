import "./App.css";
import emailjs from "emailjs-com";
import { NavBar } from "./NavBar";
import { Hero } from "./Components/Hero";
import { Projects } from "./Components/Projects";
import { Experience } from "./Components/Experience";
import { Contact } from "./Components/Contact";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import LoadingScreen from "./Components/LoadingScreen";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    // Simulate loading for 1.5 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="app loaded">
      <NavBar />
      <Hero />
      <Projects />
      <Experience />
      <Contact />
      <motion.footer
        className="footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p>&copy; {currentYear} Prem Goswami. All rights reserved.</p>
      </motion.footer>
    </div>
  );
}

export default App;
