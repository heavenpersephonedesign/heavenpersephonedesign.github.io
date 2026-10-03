import { motion } from 'motion/react';
import { Instagram, Linkedin, Twitter, Heart } from 'lucide-react';

interface FooterProps {
  isDark: boolean;
}

export function Footer({ isDark }: FooterProps) {
  return (
    <footer className={`py-16 px-8 border-t ${isDark ? 'border-[#eeeeee]/10' : 'border-[#1e1e1e]/10'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className={`text-4xl mb-4 ${isDark ? 'text-[#eeeeee]' : 'text-[#1e1e1e]'}`}
              style={{ fontFamily: "'DM Serif Text', serif" }}
            >
              Let's Create <span className="text-[#d64269]" style={{ fontFamily: "'Seaweed Script', cursive" }}>Together</span>
            </motion.h3>
            <p className={`text-lg mb-6 ${isDark ? 'text-[#eeeeee]/70' : 'text-[#1e1e1e]/70'}`} style={{ fontFamily: "'Poppins', sans-serif" }}>
              Bringing showgirl energy to brand design, one sparkly project at a time.
            </p>
            <div className="flex gap-4">
              {[Instagram, Linkedin, Twitter].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-[#d64269] rounded-full flex items-center justify-center text-white"
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className={`text-xl mb-4 ${isDark ? 'text-[#eeeeee]' : 'text-[#1e1e1e]'}`} style={{ fontFamily: "'DM Serif Text', serif" }}>Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Services', 'Portfolio', 'Process', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className={`text-lg hover:text-[#d64269] transition-colors ${
                      isDark ? 'text-[#eeeeee]/70' : 'text-[#1e1e1e]/70'
                    }`}
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={`text-xl mb-4 ${isDark ? 'text-[#eeeeee]' : 'text-[#1e1e1e]'}`} style={{ fontFamily: "'DM Serif Text', serif" }}>Services</h4>
            <ul className="space-y-2">
              {['Brand Identity', 'Logo Design', 'Brand Strategy', 'Packaging', 'Collateral'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className={`text-lg hover:text-[#d64269] transition-colors ${
                      isDark ? 'text-[#eeeeee]/70' : 'text-[#1e1e1e]/70'
                    }`}
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={`pt-8 border-t ${isDark ? 'border-[#eeeeee]/10' : 'border-[#1e1e1e]/10'}`}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className={`text-lg ${isDark ? 'text-[#eeeeee]/70' : 'text-[#1e1e1e]/70'}`} style={{ fontFamily: "'Poppins', sans-serif" }}>
              © 2026 Your Brand Design. All rights reserved.
            </p>
            <p className={`flex items-center gap-2 text-lg ${isDark ? 'text-[#eeeeee]/70' : 'text-[#1e1e1e]/70'}`} style={{ fontFamily: "'Poppins', sans-serif" }}>
              Made with <Heart className="w-5 h-5 text-[#d64269] fill-[#d64269]" /> and a lot of sparkle
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}