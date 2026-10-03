import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';

interface ColorPaletteProps {
  isDark: boolean;
}

const brandColors = [
  { name: 'Sage Green', hex: '#A8C69F', rgb: 'RGB(168, 198, 159)' },
  { name: 'Blush Pink', hex: '#F4C7C3', rgb: 'RGB(244, 199, 195)' },
  { name: 'Deep Plum', hex: '#6B4C5C', rgb: 'RGB(107, 76, 92)' },
  { name: 'Cream', hex: '#F8F4E8', rgb: 'RGB(248, 244, 232)' },
  { name: 'Charcoal', hex: '#2D2D2D', rgb: 'RGB(45, 45, 45)' },
];

export function ColorPalette({ isDark }: ColorPaletteProps) {
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
          Color{' '}
          <span className="text-[#ffe45e]" style={{ fontFamily: "'Seaweed Script', cursive" }}>
            Palette
          </span>
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {brandColors.map((color, i) => (
            <motion.div
              key={color.hex}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div
                className="w-full aspect-square rounded-2xl shadow-lg mb-4 transition-shadow duration-300 group-hover:shadow-2xl"
                style={{ backgroundColor: color.hex }}
              />
              <div className={isDark ? 'text-[#eeeeee]' : 'text-[#1e1e1e]'}>
                <div className="font-semibold text-lg mb-1" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  {color.name}
                </div>
                <div className="text-sm opacity-70" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  {color.hex}
                </div>
                <div className="text-xs opacity-50 mt-1" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  {color.rgb}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}