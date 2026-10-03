import { motion } from 'motion/react';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

interface BeforeAfterProps {
  isDark: boolean;
}

export function BeforeAfter({ isDark }: BeforeAfterProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
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
          className={`text-4xl md:text-5xl lg:text-6xl mb-12 text-center ${
            isDark ? 'text-[#eeeeee]' : 'text-[#1e1e1e]'
          }`}
          style={{ fontFamily: "'DM Serif Text', serif" }}
        >
          The{' '}
          <span className="text-[#d64269]" style={{ fontFamily: "'Seaweed Script', cursive" }}>
            Transformation
          </span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-2xl shadow-2xl"
          style={{ height: '500px' }}
        >
          {/* Before Image */}
          <div className="absolute inset-0 bg-[#423073]/10">
            <div className="w-full h-full flex items-center justify-center">
              <div className={`text-6xl ${isDark ? 'text-[#eeeeee]/20' : 'text-[#1e1e1e]/20'}`} style={{ fontFamily: "'DM Serif Text', serif" }}>
                BEFORE
              </div>
            </div>
          </div>

          {/* After Image */}
          <div
            className="absolute inset-0 bg-[#7dcfb6]/10"
            style={{
              clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
            }}
          >
            <div className="w-full h-full flex items-center justify-center">
              <div className={`text-6xl ${isDark ? 'text-[#eeeeee]/20' : 'text-[#1e1e1e]/20'}`} style={{ fontFamily: "'DM Serif Text', serif" }}>
                AFTER
              </div>
            </div>
          </div>

          {/* Slider */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-10"
            style={{ left: `${sliderPosition}%` }}
            onMouseDown={(e) => {
              const container = e.currentTarget.parentElement;
              if (!container) return;

              const handleMouseMove = (moveEvent: MouseEvent) => {
                const rect = container.getBoundingClientRect();
                const x = moveEvent.clientX - rect.left;
                const percentage = (x / rect.width) * 100;
                setSliderPosition(Math.max(0, Math.min(100, percentage)));
              };

              const handleMouseUp = () => {
                document.removeEventListener('mousemove', handleMouseMove);
                document.removeEventListener('mouseup', handleMouseUp);
              };

              document.addEventListener('mousemove', handleMouseMove);
              document.addEventListener('mouseup', handleMouseUp);
            }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
              <div className="w-6 h-6 flex items-center justify-center">
                <div className="w-0.5 h-4 bg-[#1e1e1e] mr-1" />
                <div className="w-0.5 h-4 bg-[#1e1e1e]" />
              </div>
            </div>
          </div>

          {/* Labels */}
          <div className="absolute top-8 left-8 px-4 py-2 bg-white/90 rounded-full">
            <span className="text-[#1e1e1e] font-semibold" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Before
            </span>
          </div>
          <div className="absolute top-8 right-8 px-4 py-2 bg-white/90 rounded-full">
            <span className="text-[#1e1e1e] font-semibold" style={{ fontFamily: "'Poppins', sans-serif" }}>
              After
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}