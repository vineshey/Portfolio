// This is the complete and fully integrated App component for your portfolio

import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";

// ...existing code...
function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <motion.div
        className="pt-16" // Add this line (adjust 16 to your Navbar height)
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        <About />
        <Projects />
        <Achievements />
        <Certifications />
        <Contact />
      </motion.div>
    </div>
  );
}
// ...existing code...
export default App;
