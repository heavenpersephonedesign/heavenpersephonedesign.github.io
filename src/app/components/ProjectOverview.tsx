import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';

interface ProjectOverviewProps {
  isDark: boolean;
}

export function ProjectOverview({ isDark }: ProjectOverviewProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section ref={ref} className="py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h3
              className="text-[#d64269] text-xl mb-4"
              style={{ fontFamily: "'DM Serif Text', serif" }}
            >
              The Challenge
            </h3>
            <p
              className={`text-lg leading-relaxed ${
                isDark ? 'text-[#eeeeee]/80' : 'text-[#1e1e1e]/80'
              }`}
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Bloom & Co. was a new botanical wellness brand entering a saturated market. They needed to stand out with a{' '}
              <span className="text-[#7dcfb6]" style={{ fontFamily: "'Seaweed Script', cursive" }}>
                distinctive identity
              </span>{' '}
              that conveyed luxury, sustainability, and effectiveness—all while feeling approachable and feminine.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3
              className="text-[#ffe45e] text-xl mb-4"
              style={{ fontFamily: "'DM Serif Text', serif" }}
            >
              The Solution
            </h3>
            <p
              className={`text-lg leading-relaxed ${
                isDark ? 'text-[#eeeeee]/80' : 'text-[#1e1e1e]/80'
              }`}
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              I created a bold visual system inspired by botanical illustrations and modern minimalism. The brand features hand-drawn floral elements paired with clean typography, creating a perfect balance of{' '}
              <span className="text-[#ffe45e]" style={{ fontFamily: "'Seaweed Script', cursive" }}>
                organic elegance
              </span>{' '}
              and contemporary sophistication.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3
              className="text-[#423073] text-xl mb-4"
              style={{ fontFamily: "'DM Serif Text', serif" }}
            >
              The Results
            </h3>
            <p
              className={`text-lg leading-relaxed ${
                isDark ? 'text-[#eeeeee]/80' : 'text-[#1e1e1e]/80'
              }`}
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              The new brand identity helped Bloom & Co. secure retail partnerships with 12 premium boutiques in their first quarter. Social media engagement increased by 340%, and the brand was featured in{' '}
              <span className="text-[#423073]" style={{ fontFamily: "'Seaweed Script', cursive" }}>
                three major
              </span>{' '}
              wellness publications.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}