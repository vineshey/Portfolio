import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-2 text-4xl">📬</div>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-8"
        >
          Contact Me
        </motion.h2>
        <motion.form
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5 }}
          action="https://formspree.io/f/manjyega"
          method="POST"
          className="max-w-lg mx-auto p-8 rounded-2xl shadow-2xl border border-blue-200 dark:border-gray-700 bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-900 dark:to-gray-800"
        >
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-neon"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-neon"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              name="message"
              className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-neon"
              rows="5"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn w-full transform transition-transform hover:scale-105"
          >
            Send Message
          </button>
        </motion.form>
        <div className="flex justify-center gap-6 mt-6">
          <a
            href="mailto:vineshvkavungal@ieee.org"
            className="text-2xl hover:text-neon transition-colors"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://linkedin.com/in/vinesh-v-kavungal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-neon transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;