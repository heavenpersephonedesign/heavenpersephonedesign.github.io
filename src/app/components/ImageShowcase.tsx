import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

interface ImageShowcaseProps {
  isDark: boolean;
  title?: string;
  images: string[];
  layout?: 'single' | 'double' | 'grid';
}

export function ImageShowcase({ isDark, title, images, layout = 'single' }: ImageShowcaseProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section ref={ref} className="py-20 px-8">
      <div className="max-w-7xl mx-auto">
        {title && (
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className={`text-4xl md:text-5xl lg:text-6xl mb-12 text-center ${
              isDark ? 'text-[#eeeeee]' : 'text-[#1e1e1e]'
            }`}
            style={{ fontFamily: "'DM Serif Text', serif" }}
          >
            {title}
          </motion.h2>
        )}

        {layout === 'single' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.02 }}
            className="overflow-hidden rounded-2xl shadow-2xl"
          >
            <ImageWithFallback
              src={images[0]}
              alt="Brand showcase"
              className="w-full h-auto"
            />
          </motion.div>
        )}

        {layout === 'double' && (
          <div className="grid md:grid-cols-2 gap-8">
            {images.slice(0, 2).map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="overflow-hidden rounded-2xl shadow-2xl"
              >
                <ImageWithFallback
                  src={img}
                  alt={`Brand showcase ${i + 1}`}
                  className="w-full h-auto"
                />
              </motion.div>
            ))}
          </div>
        )}

        {layout === 'grid' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="overflow-hidden rounded-2xl shadow-2xl aspect-square"
              >
                <ImageWithFallback
                  src={img}
                  alt={`Brand application ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}