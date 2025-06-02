import { motion } from "framer-motion";
import FlipCard from "./Flipcard";

const achievements = [
  {
    title: "1st Place – Hack A Prob Hackathon",
    description: "ISTE NSSCE (Mar 2025)",
    icon: "🥇",
    isFlip: true,
    flipDetails: {
      description:
        "Developed 'Sahaya' – a disaster management app using Flutter with emergency call features, disaster Do's & Don’ts (AI-based), civic Q&A assistant, flashlight-based Morse code SOS, earthquake logs API (Render), and a resource allocator web app (Flask, HTML, CSS).",
      certFile: "/certificates/sahaya_certificate.pdf",
      linkedinLink: "https://www.linkedin.com/posts/vinesh-sahaya-disaster-app"
    }
  },
  {
    title: "3rd Place – FOSSEra 4.0 Hackathon",
    description: "FOSSNSS x Hackfiesta (Mar 2025)",
    icon: "🥉",
    isFlip: true,
    flipDetails: {
      description:
        "Developed 'Vidyut' – a student-centric app using Flutter + Flask APIs to help find internships, scholarships, and hackathons. Features include weekly study updates via email, and WhatsApp integration. Backend data scraped and served via Flask + Render.",
      certFile: "/certificates/vidyut_certificate.pdf",
      linkedinLink: "https://www.linkedin.com/posts/vinesh-v-kavungal_hackathon-hackfiesta4-fossera4-activity-7331936708394962944-HDKN?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD9duMABPftgNEHs9Lp_cBsx_wDMSRLM3H8"
    }
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-10"
        >
          Achievements
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {achievement.isFlip ? (
                <FlipCard
                  title={achievement.title}
                  description={achievement.flipDetails.description}
                  certFile={achievement.flipDetails.certFile}
                  linkedinLink={achievement.flipDetails.linkedinLink}
                  icon={achievement.icon}
                  // No need to pass gradient, handled in FlipCard
                />
              ) : (
                <div className="card flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-gray-800 shadow-md">
                  <span
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full text-4xl shadow-lg"
                    style={{
                      background: "linear-gradient(135deg, #f7971e 0%, #ffd200 100%)" // orange-yellow gradient
                    }}
                  >
                    {achievement.icon}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold">{achievement.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{achievement.description}</p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;