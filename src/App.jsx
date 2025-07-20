import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import InternshipNotebook from "./components/InternshipNotebook";

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <motion.div
        className="pt-16 px-2 sm:px-4 md:px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        <About />
        <Projects />
          <InternshipNotebook/>
        <Achievements />
        <Certifications />
        <Contact />
      </motion.div>
    </div>
  );
}

export default App;