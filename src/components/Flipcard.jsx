import { useState } from "react";
import { motion } from "framer-motion";

const FlipCard = ({ title, description, certFile, linkedinLink, icon }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="relative h-64 sm:h-72 perspective cursor-pointer"
      onClick={() => setFlipped(!flipped)}
    >
      <motion.div
        className={`transition-transform duration-500 w-full h-full rounded-2xl shadow-lg transform ${
          flipped ? "rotate-y-180" : ""
        }`}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front */}
        <div
          className="absolute w-full h-full p-6 rounded-2xl backface-hidden flex flex-col justify-center items-center"
          style={{
            background: "linear-gradient(135deg, #f7971e 0%, #ffd200 100%)"
          }}
        >
          <div className="mb-4">
            <span
              className="inline-flex items-center justify-center w-16 h-16 rounded-full text-4xl shadow-lg bg-white bg-opacity-70"
            >
              {icon}
            </span>
          </div>
          <h3 className="text-lg sm:text-xl font-semibold text-center text-gray-900">{title}</h3>
          <p className="text-gray-700 mt-2 text-center font-medium text-sm sm:text-base">Click to flip</p>
        </div>

        {/* Back */}
        <div className="absolute w-full h-full bg-gradient-to-br from-purple-300 to-blue-300 dark:from-gray-700 dark:to-gray-900 text-white p-6 rounded-2xl transform rotate-y-180 backface-hidden flex flex-col justify-between">
          <p className="text-sm sm:text-base leading-relaxed mb-4">{description}</p>
          <div className="flex justify-between items-center gap-2 flex-wrap">
            <a
              href={linkedinLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gradient-to-r from-indigo-400 to-blue-500 px-4 py-1 text-sm font-medium hover:brightness-110 mb-2 sm:mb-0"
            >
              View in LinkedIn
            </a>
            <a
              href={certFile}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gradient-to-r from-pink-400 to-red-500 px-4 py-1 text-sm font-medium hover:brightness-110"
            >
              View Certificate
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FlipCard;