import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ProjectHeroProps {
  isDark: boolean;
}

export function ProjectHero({ isDark }: ProjectHeroProps) {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen flex items-center justify-center px-8 py-20 relative overflow-hidden">
      {/* Background blobs */}
      <motion.div
        className="absolute top-20 right-20 w-64 h-64 bg-[#ffe45e] rounded-full opacity-20 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 40, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ x: -5 }}
          onClick={() => navigate('/')}
          className={`flex items-center gap-2 mb-12 ${
            isDark ? 'text-[#eeeeee]' : 'text-[#1e1e1e]'
          }`}
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Portfolio
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <span
            className="text-[#d64269] text-xl md:text-2xl block mb-4"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Client: Bloom & Co. Botanicals
          </span>
          <h1
            className={`text-6xl md:text-7xl lg:text-8xl xl:text-9xl ${
              isDark ? 'text-[#eeeeee]' : 'text-[#1e1e1e]'
            }`}
            style={{ fontFamily: "'DM Serif Text', serif" }}
          >
            A Brand That{' '}
            <span className="text-[#7dcfb6]" style={{ fontFamily: "'Seaweed Script', cursive" }}>
              Blooms
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl"
        >
          <div>
            <div className={`text-sm mb-2 ${isDark ? 'text-[#eeeeee]/60' : 'text-[#1e1e1e]/60'}`} style={{ fontFamily: "'Poppins', sans-serif" }}>
              Industry
            </div>
            <div className={`text-lg ${isDark ? 'text-[#eeeeee]' : 'text-[#1e1e1e]'}`} style={{ fontFamily: "'Poppins', sans-serif" }}>
              Wellness & Beauty
            </div>
          </div>
          <div>
            <div className={`text-sm mb-2 ${isDark ? 'text-[#eeeeee]/60' : 'text-[#1e1e1e]/60'}`} style={{ fontFamily: "'Poppins', sans-serif" }}>
              Services
            </div>
            <div className={`text-lg ${isDark ? 'text-[#eeeeee]' : 'text-[#1e1e1e]'}`} style={{ fontFamily: "'Poppins', sans-serif" }}>
              Full Branding
            </div>
          </div>
          <div>
            <div className={`text-sm mb-2 ${isDark ? 'text-[#eeeeee]/60' : 'text-[#1e1e1e]/60'}`} style={{ fontFamily: "'Poppins', sans-serif" }}>
              Year
            </div>
            <div className={`text-lg ${isDark ? 'text-[#eeeeee]' : 'text-[#1e1e1e]'}`} style={{ fontFamily: "'Poppins', sans-serif" }}>
              2025
            </div>
          </div>
          <div>
            <div className={`text-sm mb-2 ${isDark ? 'text-[#eeeeee]/60' : 'text-[#1e1e1e]/60'}`} style={{ fontFamily: "'Poppins', sans-serif" }}>
              Duration
            </div>
            <div className={`text-lg ${isDark ? 'text-[#eeeeee]' : 'text-[#1e1e1e]'}`} style={{ fontFamily: "'Poppins', sans-serif" }}>
              8 Weeks
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}