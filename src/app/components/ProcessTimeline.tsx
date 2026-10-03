import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Sparkles } from 'lucide-react';

interface ProcessTimelineProps {
  isDark: boolean;
}

const processSteps = [
  {
    number: '01',
    title: 'Discovery & Research',
    description: 'Deep dive into brand values, target audience, competitors, and market positioning.',
    color: '#d64269',
  },
  {
    number: '02',
    title: 'Concept Development',
    description: 'Initial sketches, mood boards, and visual direction exploration.',
    color: '#ffe45e',
  },
  {
    number: '03',
    title: 'Design Refinement',
    description: 'Iterate on chosen concepts, refine typography, colors, and visual elements.',
    color: '#7dcfb6',
  },
  {
    number: '04',
    title: 'Brand System Creation',
    description: 'Develop comprehensive guidelines, templates, and application examples.',
    color: '#423073',
  },
  {
    number: '05',
    title: 'Delivery & Launch',
    description: 'Final files, brand guidelines, and ongoing support for implementation.',
    color: '#d64269',
  },
];

export function ProcessTimeline({ isDark }: ProcessTimelineProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className={`text-4xl md:text-5xl lg:text-6xl mb-16 text-center ${
            isDark ? 'text-[#eeeeee]' : 'text-[#1e1e1e]'
          }`}
          style={{ fontFamily: "'DM Serif Text', serif" }}
        >
          The{' '}
          <span className="text-[#ffe45e]" style={{ fontFamily: "'Seaweed Script', cursive" }}>
            Process
          </span>
        </motion.h2>

        <div className="relative">
          {/* Vertical line */}
          <div className={`absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 ${
            isDark ? 'bg-[#eeeeee]/20' : 'bg-[#1e1e1e]/20'
          }`} />

          <div className="space-y-16">
            {processSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className={`relative flex items-center ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${i % 2 === 0 ? 'md:pr-16' : 'md:pl-16'} pl-16 md:pl-0`}>
                  <div className={`p-8 rounded-2xl ${
                    isDark ? 'bg-white/5' : 'bg-black/5'
                  }`}>
                    <div
                      className="text-6xl font-bold mb-4 opacity-20"
                      style={{ color: step.color, fontFamily: "'DM Serif Text', serif" }}
                    >
                      {step.number}
                    </div>
                    <h3
                      className={`text-2xl md:text-3xl mb-4 ${
                        isDark ? 'text-[#eeeeee]' : 'text-[#1e1e1e]'
                      }`}
                      style={{ fontFamily: "'DM Serif Text', serif" }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className={`text-lg ${
                        isDark ? 'text-[#eeeeee]/70' : 'text-[#1e1e1e]/70'
                      }`}
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Marker */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: i * 0.2 + 0.3 }}
                  className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full shadow-lg"
                  style={{ backgroundColor: step.color }}
                >
                  <motion.div
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 rounded-full opacity-30"
                    style={{ backgroundColor: step.color }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}