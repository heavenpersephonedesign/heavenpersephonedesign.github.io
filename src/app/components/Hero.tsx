import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { TypingAnimation } from '@/app/components/TypingAnimation';

interface HeroProps {
  isDark: boolean;
}

export function Hero({ isDark }: HeroProps) {
  return (
    <section className="min-h-screen flex items-center justify-center px-8 py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#d64269]/10 border border-[#d64269]/30 rounded-full mb-8"
        >
          <Sparkles className="w-5 h-5 text-[#d64269]" />
          <span className={isDark ? 'text-[#eeeeee]' : 'text-[#1e1e1e]'}>
            Brand Designer & Visual Storyteller
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`text-6xl md:text-7xl lg:text-8xl xl:text-9xl mb-8 ${
            isDark ? 'text-[#eeeeee]' : 'text-[#1e1e1e]'
          }`}
          style={{ fontFamily: "'DM Serif Text', serif" }}
        >
          <span className="block">Make Your Brand</span>
          <span className="block">
            <TypingAnimation />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className={`text-xl md:text-2xl lg:text-3xl mb-12 max-w-3xl mx-auto ${
            isDark ? 'text-[#eeeeee]/80' : 'text-[#1e1e1e]/80'
          }`}
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          I create bold, personality-packed brand identities that turn heads and win hearts.{' '}
          <span className="text-[#d64269]" style={{ fontFamily: "'Seaweed Script', cursive" }}>Showgirl energy</span>, strategic thinking.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(214, 66, 105, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 bg-[rgba(255,255,255,0.14)] text-white rounded-full text-lg flex items-center gap-3 shadow-lg border-2 border-white"
          >
            Start Your Brand Journey
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-20"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className={`w-6 h-10 border-2 rounded-full mx-auto flex items-start justify-center p-2 ${
              isDark ? 'border-[#eeeeee]/50' : 'border-[#1e1e1e]/50'
            }`}
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className={`w-1.5 h-1.5 rounded-full ${
                isDark ? 'bg-[#eeeeee]/50' : 'bg-[#1e1e1e]/50'
              }`}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}