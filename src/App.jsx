import "./App.css";
import { NavBar } from "./NavBar";
import { Hero } from "./Components/Hero";
import { Projects } from "./Components/Projects";
import { Contact } from "./Components/Contact";
import { useState, useEffect } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
  }, []);

  return (
    <div className={`app ${isLoading ? "loaded" : ""}`}>
      <NavBar />
      <Hero />
      <Projects />
      <Contact />
      <>
        <p>&copy; 2025 • Prem Goswami • All rights reserved.</p>
      </>
    </div>
  );
}

export default App;
