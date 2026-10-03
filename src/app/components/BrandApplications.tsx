import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

interface BrandApplicationsProps {
  isDark: boolean;
}

const applications = [
  { title: 'Business Cards', category: 'Print Collateral' },
  { title: 'Packaging Design', category: 'Product' },
  { title: 'Social Media Templates', category: 'Digital' },
  { title: 'Stationery Set', category: 'Print Collateral' },
  { title: 'Website Design', category: 'Digital' },
  { title: 'Shopping Bags', category: 'Merchandise' },
  { title: 'Email Signatures', category: 'Digital' },
  { title: 'Product Labels', category: 'Product' },
  { title: 'Brand Guidelines', category: 'Documentation' },
];

export function BrandApplications({ isDark }: BrandApplicationsProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className={`text-4xl md:text-5xl lg:text-6xl mb-16 text-center ${
            isDark ? 'text-[#eeeeee]' : 'text-[#1e1e1e]'
          }`}
          style={{ fontFamily: "'DM Serif Text', serif" }}
        >
          Brand{' '}
          <span className="text-[#d64269]" style={{ fontFamily: "'Seaweed Script', cursive" }}>
            Applications
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {applications.map((app, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`rounded-2xl overflow-hidden shadow-xl ${
                isDark ? 'bg-white/5' : 'bg-black/5'
              }`}
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-[#7dcfb6]/20 to-[#d64269]/20 flex items-center justify-center">
                <ImageWithFallback
                  src={`https://images.unsplash.com/photo-${1580000000000 + i * 1000000}?w=600&h=450&fit=crop`}
                  alt={app.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-[#d64269] text-sm mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  {app.category}
                </div>
                <h3 className={`text-xl ${isDark ? 'text-[#eeeeee]' : 'text-[#1e1e1e]'}`} style={{ fontFamily: "'DM Serif Text', serif" }}>
                  {app.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}