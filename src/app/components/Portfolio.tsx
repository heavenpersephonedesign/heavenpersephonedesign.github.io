import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PortfolioProps {
  isDark: boolean;
}

const portfolioItems = [
  {
    id: 'bloom-botanicals',
    title: 'Luxury Skincare Brand',
    category: 'Brand Identity',
    color: '#7dcfb6',
  },
  {
    id: 'boutique-hotel',
    title: 'Boutique Hotel Chain',
    category: 'Visual Identity & Collateral',
    color: '#ffe45e',
  },
  {
    id: 'tech-startup',
    title: 'Tech Startup',
    category: 'Complete Brand System',
    color: '#d64269',
  },
  {
    id: 'artisan-coffee',
    title: 'Artisan Coffee Shop',
    category: 'Brand Identity & Packaging',
    color: '#423073',
  },
  {
    id: 'wellness-coach',
    title: 'Wellness Coach',
    category: 'Personal Brand',
    color: '#7dcfb6',
  },
  {
    id: 'fashion-label',
    title: 'Fashion Label',
    category: 'Brand Strategy & Design',
    color: '#ffe45e',
  },
];

export function Portfolio({ isDark }: PortfolioProps) {
  return (
    <section className="py-32 px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2
            className={`text-5xl md:text-6xl lg:text-7xl mb-6 ${
              isDark ? 'text-[#eeeeee]' : 'text-[#1e1e1e]'
            }`}
            style={{ fontFamily: "'DM Serif Text', serif" }}
          >
            Featured <span className="text-[#d64269]" style={{ fontFamily: "'Seaweed Script', cursive" }}>Work</span>
          </h2>
          <p
            className={`text-xl md:text-2xl max-w-3xl mx-auto ${
              isDark ? 'text-[#eeeeee]/80' : 'text-[#1e1e1e]/80'
            }`}
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Brand identities that sparkle with personality and strategic thinking
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <Link to={`/project/${item.id}`} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 shadow-lg group-hover:shadow-2xl transition-shadow"
                  style={{ backgroundColor: item.color }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      className="w-16 h-16 bg-white rounded-full flex items-center justify-center"
                    >
                      <ExternalLink className="w-8 h-8 text-[#1e1e1e]" />
                    </motion.div>
                  </div>

                  {/* Placeholder content */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-center p-8">
                      <div className="text-6xl mb-4 opacity-50">✨</div>
                      <p className="text-sm opacity-70">Project Preview</p>
                    </div>
                  </div>
                </div>

                <h3
                  className={`text-2xl mb-2 ${
                    isDark ? 'text-[#eeeeee]' : 'text-[#1e1e1e]'
                  }`}
                  style={{ fontFamily: "'DM Serif Text', serif" }}
                >
                  {item.title}
                </h3>
                <p
                  className={`text-lg ${
                    isDark ? 'text-[#eeeeee]/70' : 'text-[#1e1e1e]/70'
                  }`}
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {item.category}
                </p>
              </motion.div>
            </Link>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(214, 66, 105, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 bg-[#d64269] text-white rounded-full text-lg shadow-lg"
          >
            View Full Portfolio
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}