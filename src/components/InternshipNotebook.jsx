import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const pages = [
  {
    title: "Component Screening (Lab 1)",
    points: [
      "Performed DAU testing using four-wire measurement",
      "Verified continuity, POR, and isolation checks",
      "Logged test data in ESD-safe environment"
    ]
  },
  {
    title: "RF Lab (Lab 2)",
    points: [
      "Observed card-level DTCR testing",
      "Performed POR, isolation, and continuity checks of DAU-II",
      "Tracked ripple/load regulation in DC-DC converters"
    ]
  },
  {
    title: "SMD Line (Lab 3)",
    points: [
      "Explored full SMT line: paste → PnP → oven",
      "Learned Fuji job file generation from XY data",
      "Understood 3D SPI & multi-zone reflow"
    ]
  },
  {
    title: "Flying Probe Test (Lab 4)",
    points: [
      "Operated Seica V8 flying probe tester",
      "Captured and annotated PCB images",
      "Viewed automatic diode & continuity tests"
    ]
  }
];

const gradients = [
  "from-green-300 to-lime-200",
  "from-teal-200 to-emerald-300",
  "from-green-100 to-green-300",
  "from-lime-200 to-green-400"
];

export default function InternshipDiary() {
  const [currentPage, setCurrentPage] = useState(-1);
  const visibleLayers = 3;

  return (
    <div id="workexperience" className="relative w-full max-w-6xl mx-auto px-4 py-10 sm:py-14 scroll-mt-32">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 dark:text-white text-black">Work Experience</h2>

      <div className="mb-6 sm:mb-8" />

      <div className="relative flex flex-col items-center min-h-[420px] w-full aspect-[4/2] sm:aspect-[4/2] max-w-full">
        {/* Top Decoration */}
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-30 flex space-x-[6px]">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="w-2 sm:w-3 h-6 sm:h-8 border-[2px] sm:border-[3px] border-black dark:border-white rounded-full"
              style={{ transform: `rotateZ(40deg)` }}
            />
          ))}
        </div>

        {/* Background Layers */}
        {currentPage > -1 &&
          [...Array(Math.min(visibleLayers, pages.length - currentPage - 1)).keys()].map(i => (
            <motion.div
              key={i}
              initial={{ opacity: 0, rotateX: 70, y: (i + 1) * 16 }}
              animate={{ opacity: 0.6 - i * 0.2, rotateX: 70, y: (i + 1) * 16 }}
              exit={{ opacity: 0, rotateX: 70, y: (i + 1) * 16 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="absolute w-full h-full rounded-xl z-0 pointer-events-none origin-top"
              style={{ filter: "blur(0.4px)" }}
            >
              <div className={`w-full h-full rounded-xl bg-gradient-to-br ${gradients[(currentPage + i + 1) % gradients.length]} shadow-lg`} />
            </motion.div>
          ))}

        {/* Main Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, rotateX: -90 }}
            animate={{ opacity: 1, rotateX: 0 }}
            exit={{ opacity: 0, rotateX: 90 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className={`relative z-10 bg-gradient-to-br ${gradients[(currentPage + 1) % gradients.length]} rounded-xl p-4 sm:p-8 shadow-2xl w-full h-full origin-top overflow-y-auto`}
          >
            <div className="relative z-10 text-black dark:text-black">
              {currentPage === -1 ? (
                <>
                  <h2 className="text-xl sm:text-2xl font-bold text-green-800 mb-4 drop-shadow dark:text-green-300 text-center">
                    Graduate Engineering Trainee – ITI Palakkad
                  </h2>
                  <ul className="list-disc list-inside text-gray-900 font-medium space-y-1 text-sm sm:text-base">
                    <li><strong>Duration:</strong> One month</li>
                    <li><strong>Location:</strong> ITI Palakkad under ESD-safe conditions</li>
                    <li><strong>Project Association:</strong> VSSC-linked projects, aerospace-grade electronics</li>
                    <li><strong>Exposure:</strong> Component and card-level testing, validation procedures</li>
                    <li><strong>Skills Gained:</strong> Industrial safety, testing protocols, electronics diagnostics</li>
                  </ul>
                  <div className="flex justify-center">
                    <button
                      onClick={() => setCurrentPage(0)}
                      className="mt-6 px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition text-sm sm:text-base"
                    >
                      Open Diary
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <h2 className="text-lg sm:text-xl font-bold text-green-700 mb-4 drop-shadow dark:text-green-200 text-center">{pages[currentPage].title}</h2>
                  <ul className="list-disc list-inside space-y-2 text-sm sm:text-base">
                    {pages[currentPage].points.map((point, idx) => (
                      <li key={idx} className="drop-shadow text-black dark:text-black">{point}</li>
                    ))}
                  </ul>

                  <div className="flex justify-between items-center mt-6 sm:mt-8">
                    <button
                      onClick={() => setCurrentPage(currentPage - 1)}
                      className="text-green-600 hover:brightness-110 disabled:opacity-30"
                      disabled={currentPage === 0}
                    >
                      <img src="https://cdn-icons-png.flaticon.com/512/271/271220.png" alt="prev" className="w-12 sm:w-24 h-12 sm:h-24" />
                    </button>
                    <span className="text-sm text-black dark:text-black">
                      Page {currentPage + 1} / {pages.length}
                    </span>
                    <button
                      onClick={() => setCurrentPage(currentPage + 1)}
                      className="text-green-600 hover:brightness-110 disabled:opacity-30"
                      disabled={currentPage === pages.length - 1}
                    >
                      <img src="https://cdn-icons-png.flaticon.com/512/271/271228.png" alt="next" className="w-12 sm:w-24 h-12 sm:h-24" />
                    </button>
                  </div>

                  <div className="flex justify-center">
                    <button
                      onClick={() => setCurrentPage(-1)}
                      className="mt-6 text-xs sm:text-sm text-gray-500 dark:text-black hover:text-gray-700 dark:hover:text-white"
                    >
                      ⬅ Back to Summary
                    </button>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
