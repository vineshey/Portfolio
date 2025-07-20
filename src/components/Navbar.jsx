import { useContext, useState } from "react";
import { ThemeContext } from "../theme.jsx";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFileDownload,
  FaSun,
  FaMoon,
  FaBars,
  FaTimes
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#achievements", label: "Achievements" },
    { href: "#certifications", label: "Certifications" },
    { href: "#workexperience", label: "Work Experience" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 z-50 shadow-md">
      <div className="max-w-full flex justify-between items-center px-6 h-16">
        {/* Logo */}
        <motion.h1
          initial={{ x: -50 }}
          animate={{ x: 0 }}
          className="text-xl font-bold text-neon"
        >
          Vinesh V
        </motion.h1>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex gap-4 text-sm lg:text-base font-medium">
          {navItems.map(({ href, label }) => (
            <a key={href} href={href} className="hover:text-neon transition-colors">
              {label}
            </a>
          ))}
        </div>

        {/* Icons + Hamburger */}
        <div className="flex items-center space-x-3 md:space-x-4">
          <a
            href="/resume.pdf"
            download
            className="btn hidden sm:flex items-center gap-1 text-xs px-3 py-1"
          >
            <FaFileDownload /> Resume
          </a>
          <a href="https://github.com/vineshey" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-xl hover:text-neon transition-colors" />
          </a>
          <a href="https://linkedin.com/in/vinesh-v-kavungal" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-xl hover:text-neon transition-colors" />
          </a>
          <a href="mailto:vineshvkavungal@outlook.com">
            <FaEnvelope className="text-xl hover:text-neon transition-colors" />
          </a>
          <button onClick={toggleDarkMode} className="btn p-1 rounded-full text-white">
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </button>
          <button className="md:hidden text-xl" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* ✅ Mobile Nav Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden flex flex-col items-center gap-4 py-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 text-sm shadow-lg z-50"
          >
            {navItems.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={closeMobileMenu}
                className="hover:text-neon transition-colors"
              >
                {label}
              </a>
            ))}
            <a
              href="/resume.pdf"
              download
              onClick={closeMobileMenu}
              className="btn flex items-center gap-1 text-xs px-3 py-1"
            >
              <FaFileDownload /> Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
