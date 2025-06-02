import { useContext } from "react";
import { ThemeContext } from '../theme.jsx';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload, FaSun, FaMoon } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 z-50 shadow-md">
      <div className="max-w-full flex justify-between items-center px-6 h-16">
        {/* Brand / Name */}
        <motion.h1
          initial={{ x: -50 }}
          animate={{ x: 0 }}
          className="text-xl font-bold text-neon"
        >
          Vinesh V
        </motion.h1>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-6 text-base font-medium">
          <a href="#about" className="hover:text-neon transition-colors">About</a>
          <a href="#projects" className="hover:text-neon transition-colors">Projects</a>
          <a href="#achievements" className="hover:text-neon transition-colors">Achievements</a>
          <a href="#certifications" className="hover:text-neon transition-colors">Certifications</a>
          <a href="#contact" className="hover:text-neon transition-colors">Contact</a>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-3">
          <a href="/resume.pdf" download className="btn flex items-center gap-1 text-xs px-3 py-1">
            <FaFileDownload /> Resume
          </a>
          <a href="https://github.com/vineshey" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-xl hover:text-neon transition-colors" />
          </a>
          <a href="https://linkedin.com/in/vinesh-v-kavungal" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-xl hover:text-neon transition-colors" />
          </a>
          <a href="mailto:vineshvkavungal@ieee.org">
            <FaEnvelope className="text-xl hover:text-neon transition-colors" />
          </a>
          <button onClick={toggleDarkMode} className="btn p-1 rounded-full text-white">
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </div>
      {/* Mobile nav links */}
      <div className="md:hidden flex justify-center gap-4 py-2 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 text-xs">
        <a href="#about" className="hover:text-neon transition-colors">About</a>
        <a href="#projects" className="hover:text-neon transition-colors">Projects</a>
        <a href="#achievements" className="hover:text-neon transition-colors">Achievements</a>
        <a href="#certifications" className="hover:text-neon transition-colors">Certifications</a>
        <a href="#contact" className="hover:text-neon transition-colors">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;