import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

interface NextProjectProps {
  isDark: boolean;
}

export function NextProject({ isDark }: NextProjectProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section ref={ref} className="py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h3
            className={`text-xl mb-8 text-center ${isDark ? 'text-[#eeeeee]/60' : 'text-[#1e1e1e]/60'}`}
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Next Project
          </h3>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className={`relative overflow-hidden rounded-3xl shadow-2xl cursor-pointer group ${
              isDark ? 'bg-white/5' : 'bg-black/5'
            }`}
          >
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image */}
              <div className="aspect-[4/3] md:aspect-auto relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#423073]/30 to-[#ffe45e]/30 z-10" />
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop"
                  alt="Next project"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-12 flex flex-col justify-center">
                <div className="text-[#ffe45e] text-sm tracking-widest uppercase mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  Luxury Fashion Brand
                </div>
                <h2
                  className={`text-5xl md:text-6xl mb-6 ${isDark ? 'text-[#eeeeee]' : 'text-[#1e1e1e]'}`}
                  style={{ fontFamily: "'DM Serif Text', serif" }}
                >
                  Velvet & Steel
                </h2>
                <p
                  className={`text-xl mb-8 ${isDark ? 'text-[#eeeeee]/70' : 'text-[#1e1e1e]/70'}`}
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  A bold rebrand for an edgy fashion label that celebrates{' '}
                  <span className="text-[#d64269]" style={{ fontFamily: "'Seaweed Script', cursive" }}>
                    feminine power
                  </span>{' '}
                  and modern luxury.
                </p>
                <div className="flex items-center gap-3 text-[#d64269] group-hover:gap-6 transition-all">
                  <span className="text-lg" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    View Project
                  </span>
                  <ArrowRight className="w-6 h-6" />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}