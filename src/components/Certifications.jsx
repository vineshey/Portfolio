import { motion } from "framer-motion";

const certifications = [
  { 
    title: "NPTEL Deep Learning", 
    issuer: "NPTEL", 
    file: "/certificates/nptel_deep_learning.pdf" 
  },
  { 
    title: "IoT 101", 
    issuer:"Infosys", 
    file: "/certificates/iot_101.pdf" 
  },
  { 
    title: "Essential mathematics for ML", 
    issuer: "NPTEL", 
    file: "/certificates/ml_mathematics.pdf" 
  },
];

const workshops = [
  { 
    title: "Autonomous Cars", 
    issuer: "NIT", 
    file: "/certificates/Autonomous_Cars.pdf" 
  },
  { 
    title: "Embedded Systems", 
    issuer: "IEEE", 
    file: "/certificates/embedded_systems.pdf" 
  },
  { 
    title: "Metaverse", 
    issuer: "NIT", 
    file: "/certificates/metaverse.pdf" 
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-8"
        >
          Certifications & Workshops
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Certifications</h3>
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="rainbow-animated-border mb-4"
              >
                <div
                  className="p-6 rounded-[0.95rem] bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-gray-900"
                >
                  <p className="font-semibold text-gray-900 dark:text-white">{cert.title}</p>
                  <p className="text-gray-700 dark:text-gray-300">{cert.issuer}</p>
                  {cert.file && (
                    <a
                      href={cert.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
                    >
                      View Certificate
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Workshops</h3>
            {workshops.map((workshop, index) => (
              <motion.div
                key={index}
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="rainbow-animated-border mb-4"
              >
                <div
                  className="p-6 rounded-[0.95rem] bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-gray-900"
                >
                  <p className="font-semibold text-gray-900 dark:text-white">{workshop.title}</p>
                  <p className="text-gray-700 dark:text-gray-300">{workshop.issuer}</p>
                  {workshop.file && (
                    <a
                      href={workshop.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
                    >
                      View Certificate
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;