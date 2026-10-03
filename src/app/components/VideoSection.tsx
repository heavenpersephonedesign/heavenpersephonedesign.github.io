import { motion } from 'motion/react';
import { Play } from 'lucide-react';
import { useState } from 'react';

interface VideoSectionProps {
  isDark: boolean;
}

export function VideoSection({ isDark }: VideoSectionProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-32 px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className={`text-5xl md:text-6xl lg:text-7xl mb-6 ${
              isDark ? 'text-[#eeeeee]' : 'text-[#1e1e1e]'
            }`}
            style={{ fontFamily: "'DM Serif Text', serif" }}
          >
            How I <span className="text-[#ffe45e]" style={{ fontFamily: "'Seaweed Script', cursive" }}>Think</span>
          </h2>
          <p
            className={`text-xl md:text-2xl max-w-3xl mx-auto ${
              isDark ? 'text-[#eeeeee]/80' : 'text-[#1e1e1e]/80'
            }`}
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Get to know my creative process and the passion behind every brand I create
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl group"
        >
          {/* Video placeholder - replace with actual video */}
          <div
            className={`absolute inset-0 ${
              isDark ? 'bg-[#423073]' : 'bg-[#7dcfb6]'
            } bg-opacity-20 backdrop-blur-sm flex items-center justify-center`}
          >
            {!isPlaying ? (
              <motion.button
                onClick={() => setIsPlaying(true)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-24 h-24 bg-[#d64269] rounded-full flex items-center justify-center shadow-2xl group-hover:shadow-[0_0_40px_rgba(214,66,105,0.6)] transition-shadow"
              >
                <Play className="w-10 h-10 text-white ml-2" fill="white" />
              </motion.button>
            ) : (
              <div className={`text-center ${isDark ? 'text-[#eeeeee]' : 'text-[#1e1e1e]'}`}>
                <p className="text-2xl mb-4">Video player would go here</p>
                <p className="text-lg opacity-70">Replace this with your actual video embed</p>
              </div>
            )}
          </div>

        </motion.div>
      </div>
    </section>
  );
}