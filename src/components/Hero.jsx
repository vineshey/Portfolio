import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload } from "react-icons/fa";

const roles = ["Embeddded Systems & IoT Engineer", "VLSI Enthusiast", "AI & ML Enthusiast"];
const name = "Vinesh V".split(""); // Split the name into letters

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-neon to-blue-500 dark:from-gray-800 dark:to-darkBg">
      <div className="container mx-auto text-center px-4">
        <h1 className="text-3xl sm:text-5xl font-bold mb-4 flex justify-center flex-wrap">
          <span className="mr-2">I’m</span>
          <motion.span
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            className="flex"
          >
            {name.map((char, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: { y: -50, opacity: 0 },
                  visible: { y: 0, opacity: 1 },
                }}
                transition={{ type: "spring", stiffness: 500, damping: 20 }}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.span>
          <motion.span
            className="ml-2 inline-block"
            animate={{ rotate: [0, 20, -10, 20, 0] }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut"
            }}
            style={{ originY: 1, display: "inline-block" }}
          >
            👋
          </motion.span>
        </h1>

        <motion.h2
          key={currentRole}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-xl sm:text-3xl mb-6"
        >
          {roles[currentRole]}
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-4">
          <a href="/resume.pdf" download className="btn flex items-center gap-2">
            <FaFileDownload /> Resume
          </a>
          <a href="https://github.com/vineshey" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl sm:text-3xl hover:text-neon transition-colors" />
          </a>
          <a
            href="https://linkedin.com/in/vinesh-v-kavungal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-2xl sm:text-3xl hover:text-neon transition-colors" />
          </a>
          <a href="mailto:vineshvkavungal@ieee.org">
            <FaEnvelope className="text-2xl sm:text-3xl hover:text-neon transition-colors" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;