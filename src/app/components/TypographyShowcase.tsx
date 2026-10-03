import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';

interface TypographyShowcaseProps {
  isDark: boolean;
}

export function TypographyShowcase({ isDark }: TypographyShowcaseProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
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
          Typography{' '}
          <span className="text-[#7dcfb6]" style={{ fontFamily: "'Seaweed Script', cursive" }}>
            System
          </span>
        </motion.h2>

        <div className="space-y-16">
          {/* Primary Font */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className={`p-12 rounded-2xl ${
              isDark ? 'bg-white/5' : 'bg-black/5'
            }`}
          >
            <div className="mb-6">
              <span className="text-[#d64269] text-sm tracking-widest uppercase" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Primary Typeface
              </span>
              <h3 className={`text-2xl mt-2 ${isDark ? 'text-[#eeeeee]' : 'text-[#1e1e1e]'}`} style={{ fontFamily: "'Poppins', sans-serif" }}>
                Cormorant Garamond
              </h3>
            </div>
            <div className={`space-y-4 ${isDark ? 'text-[#eeeeee]' : 'text-[#1e1e1e]'}`}>
              <div className="text-7xl leading-tight" style={{ fontFamily: "'DM Serif Text', serif" }}>
                Bloom & Co.
              </div>
              <div className="text-5xl" style={{ fontFamily: "'DM Serif Text', serif" }}>
                Botanical Wellness
              </div>
              <div className="text-3xl opacity-80" style={{ fontFamily: "'DM Serif Text', serif" }}>
                Nature's Beauty, Scientifically Proven
              </div>
            </div>
            <div className={`mt-6 text-sm grid grid-cols-2 md:grid-cols-4 gap-4 ${isDark ? 'text-[#eeeeee]/60' : 'text-[#1e1e1e]/60'}`} style={{ fontFamily: "'Poppins', sans-serif" }}>
              <div>
                <div className="font-semibold mb-1">Regular</div>
                <div>ABCDEFGHIJKLM</div>
                <div>abcdefghijklm</div>
                <div>1234567890</div>
              </div>
              <div>
                <div className="font-semibold mb-1">Italic</div>
                <div className="italic">ABCDEFGHIJKLM</div>
                <div className="italic">abcdefghijklm</div>
                <div className="italic">1234567890</div>
              </div>
              <div>
                <div className="font-semibold mb-1">Bold</div>
                <div className="font-bold">ABCDEFGHIJKLM</div>
                <div className="font-bold">abcdefghijklm</div>
                <div className="font-bold">1234567890</div>
              </div>
              <div>
                <div className="font-semibold mb-1">Bold Italic</div>
                <div className="font-bold italic">ABCDEFGHIJKLM</div>
                <div className="font-bold italic">abcdefghijklm</div>
                <div className="font-bold italic">1234567890</div>
              </div>
            </div>
          </motion.div>

          {/* Secondary Font */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`p-12 rounded-2xl ${
              isDark ? 'bg-white/5' : 'bg-black/5'
            }`}
          >
            <div className="mb-6">
              <span className="text-[#7dcfb6] text-sm tracking-widest uppercase" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Secondary Typeface
              </span>
              <h3 className={`text-2xl mt-2 ${isDark ? 'text-[#eeeeee]' : 'text-[#1e1e1e]'}`} style={{ fontFamily: "'Poppins', sans-serif" }}>
                Poppins
              </h3>
            </div>
            <div className={`space-y-4 ${isDark ? 'text-[#eeeeee]' : 'text-[#1e1e1e]'}`} style={{ fontFamily: "'Poppins', sans-serif" }}>
              <div className="text-4xl font-light">
                Clean, Modern, Approachable
              </div>
              <div className="text-2xl">
                Perfect for body copy and supporting text
              </div>
              <div className="text-lg opacity-80">
                Used across all touchpoints to maintain consistency and readability
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}