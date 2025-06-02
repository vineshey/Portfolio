import { motion } from "framer-motion";

const skills = [
  "Communication",
  "Problem Solving",
  "HTML",
  "CSS",
  "ESP32",
  "HC-05",
  "Arduino",
  "VLSI",
  "Python",
  "Flask",
  "Blynk",
  "Random Forest",
];

const About = () => {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4">
        {/* Profile Photo */}
        <div className="flex justify-center mb-6">
          <img
            src="/me.jpg" // Direct path from public folder
            alt="Vinesh V"
            className="w-33 h-33 rounded-full object-cover border-4 border-neon shadow-lg"
          />
        </div>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-8"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-lg text-center max-w-2xl mx-auto mb-8"
        >
          Tech-driven Electronics & Communication undergraduate with a CS minor. Passionate about
          embedded systems, AI/ML, and digital design. Contributor to the IEEE-funded Sourajala
          project and creator of an IoT water monitoring & cleaning system. Currently serving as
          Treasurer at ELACSTA and Secretary of IEEE SIGHT.
        </motion.p>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <motion.span
              key={index}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="px-4 py-2 bg-neon text-white rounded-full"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;