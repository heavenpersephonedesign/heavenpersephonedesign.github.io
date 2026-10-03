import { motion } from 'motion/react';
import { Calendar, Clock, Sparkles } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

interface BookingSectionProps {
  isDark: boolean;
}

export function BookingSection({ isDark }: BookingSectionProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section ref={ref} className="py-32 px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#ffe45e]/10 border border-[#ffe45e]/30 rounded-full mb-8"
          >
            <Sparkles className="w-5 h-5 text-[#ffe45e]" />
            <span className={isDark ? 'text-[#eeeeee]' : 'text-[#1e1e1e]'} style={{ fontFamily: "'Poppins', sans-serif" }}>
              Let's Work Together
            </span>
          </motion.div>

          <h2
            className={`text-5xl md:text-6xl lg:text-7xl mb-8 ${
              isDark ? 'text-[#eeeeee]' : 'text-[#1e1e1e]'
            }`}
            style={{ fontFamily: "'DM Serif Text', serif" }}
          >
            Book Your{' '}
            <span className="text-[#d64269]" style={{ fontFamily: "'Seaweed Script', cursive" }}>
              Discovery Call
            </span>
          </h2>

          <p
            className={`text-xl md:text-2xl max-w-3xl mx-auto mb-12 ${
              isDark ? 'text-[#eeeeee]/80' : 'text-[#1e1e1e]/80'
            }`}
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Ready to create a brand that turns heads? Let's chat about your vision and see if we're the perfect match.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          <div className={`p-8 rounded-2xl text-center ${isDark ? 'bg-white/5' : 'bg-black/5'}`}>
            <div className="w-16 h-16 bg-gradient-to-br from-[#d64269] to-[#ffe45e] rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <h3
              className={`text-xl mb-2 ${isDark ? 'text-[#eeeeee]' : 'text-[#1e1e1e]'}`}
              style={{ fontFamily: "'DM Serif Text', serif" }}
            >
              30-Minute Call
            </h3>
            <p
              className={`${isDark ? 'text-[#eeeeee]/70' : 'text-[#1e1e1e]/70'}`}
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Free discovery session to discuss your brand goals
            </p>
          </div>

          <div className={`p-8 rounded-2xl text-center ${isDark ? 'bg-white/5' : 'bg-black/5'}`}>
            <div className="w-16 h-16 bg-gradient-to-br from-[#7dcfb6] to-[#423073] rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <h3
              className={`text-xl mb-2 ${isDark ? 'text-[#eeeeee]' : 'text-[#1e1e1e]'}`}
              style={{ fontFamily: "'DM Serif Text', serif" }}
            >
              Flexible Scheduling
            </h3>
            <p
              className={`${isDark ? 'text-[#eeeeee]/70' : 'text-[#1e1e1e]/70'}`}
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Choose a time that works best for you
            </p>
          </div>

          <div className={`p-8 rounded-2xl text-center ${isDark ? 'bg-white/5' : 'bg-black/5'}`}>
            <div className="w-16 h-16 bg-gradient-to-br from-[#ffe45e] to-[#d64269] rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h3
              className={`text-xl mb-2 ${isDark ? 'text-[#eeeeee]' : 'text-[#1e1e1e]'}`}
              style={{ fontFamily: "'DM Serif Text', serif" }}
            >
              No Commitment
            </h3>
            <p
              className={`${isDark ? 'text-[#eeeeee]/70' : 'text-[#1e1e1e]/70'}`}
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Just a friendly chat to explore possibilities
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(214, 66, 105, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-6 bg-gradient-to-r from-[#d64269] to-[#ffe45e] text-white rounded-full text-xl font-semibold shadow-2xl"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Schedule Your Call
          </motion.button>

          <p
            className={`mt-6 text-sm ${isDark ? 'text-[#eeeeee]/50' : 'text-[#1e1e1e]/50'}`}
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Typically respond within 24 hours
          </p>
        </motion.div>
      </div>
    </section>
  );
}