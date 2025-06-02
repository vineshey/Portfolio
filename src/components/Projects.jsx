import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const projects = [
  {
    title: "Sourajala (IEEE Funded)",
    description: "Solar-powered water system providing clean water to 18 families.",
    tech: ["ESP32", "Solar Panels", "IoT"],
    github: "https://www.linkedin.com/posts/vinesh-v-kavungal_sourajala-tech4good-activity-7276543444536205313-rxIP?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD9duMABPftgNEHs9Lp_cBsx_wDMSRLM3H8",
  },
  {
    title: "IoT Water Monitoring System",
    description: "Automated turbidity and water level detection with manual/auto cleaning.",
    tech: ["Arduino", "Blynk", "HC-05"],
    github: "https://www.linkedin.com/posts/vinesh-v-kavungal_miniproject-iot-esp32-activity-7331361536470392833-IOuH?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD9duMABPftgNEHs9Lp_cBsx_wDMSRLM3H8",
  },
  {
    title: "Education Recommender",
    description: "Flask and ML-based career predictor using Random Forest.",
    tech: ["Flask", "Python", "Random Forest"],
    github: "https://www.linkedin.com/posts/vinesh-v-kavungal_machinelearning-education-careerguidance-activity-7277946961834467328-lhs-?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD9duMABPftgNEHs9Lp_cBsx_wDMSRLM3H8",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-8"
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="card"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span key={i} className="px-2 py-1 bg-neon text-white rounded">
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn flex items-center gap-2"
              >
                <FaLinkedin /> View on Linkedin
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;