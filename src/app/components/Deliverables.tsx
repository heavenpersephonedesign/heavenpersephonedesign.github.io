import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Check } from 'lucide-react';

interface DeliverablesProps {
  isDark: boolean;
}

const deliverables = [
  'Primary Logo Design',
  'Secondary Logo Variations',
  'Brand Icon/Monogram',
  'Color Palette (5 colors)',
  'Typography System',
  'Brand Pattern Library',
  'Social Media Templates',
  'Business Card Design',
  'Letterhead & Envelope',
  'Email Signature',
  'Brand Guidelines (PDF)',
  'All Source Files (AI, PSD)',
  'PNG & SVG Exports',
  'Brand Applications Mockups',
  'Instagram Story Templates',
  'Product Label Templates',
];

export function Deliverables({ isDark }: DeliverablesProps) {
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
          Final{' '}
          <span className="text-[#7dcfb6]" style={{ fontFamily: "'Seaweed Script', cursive" }}>
            Deliverables
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deliverables.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ x: 5 }}
              className={`flex items-start gap-4 p-6 rounded-xl ${
                isDark ? 'bg-white/5 hover:bg-white/10' : 'bg-black/5 hover:bg-black/10'
              } transition-colors`}
            >
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#7dcfb6] flex items-center justify-center">
                <Check className="w-4 h-4 text-white" />
              </div>
              <span
                className={`text-lg ${isDark ? 'text-[#eeeeee]' : 'text-[#1e1e1e]'}`}
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {item}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className={`mt-12 p-8 rounded-2xl text-center ${
            isDark ? 'bg-gradient-to-r from-[#d64269]/10 to-[#7dcfb6]/10' : 'bg-gradient-to-r from-[#d64269]/5 to-[#7dcfb6]/5'
          }`}
        >
          <p
            className={`text-xl ${isDark ? 'text-[#eeeeee]/80' : 'text-[#1e1e1e]/80'}`}
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Plus 30 days of post-launch support and revisions
          </p>
        </motion.div>
      </div>
    </section>
  );
}