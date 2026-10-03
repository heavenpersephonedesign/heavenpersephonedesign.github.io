import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Quote } from 'lucide-react';

interface ClientTestimonialProps {
  isDark: boolean;
}

export function ClientTestimonial({ isDark }: ClientTestimonialProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section ref={ref} className="py-20 px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className={`relative p-12 md:p-16 rounded-3xl ${
            isDark ? 'bg-gradient-to-br from-[#d64269]/10 to-[#7dcfb6]/10' : 'bg-gradient-to-br from-[#d64269]/5 to-[#7dcfb6]/5'
          }`}
        >
          <Quote className="absolute top-8 left-8 w-16 h-16 text-[#d64269] opacity-20" />
          
          <blockquote className="relative z-10">
            <p
              className={`text-2xl md:text-3xl lg:text-4xl mb-8 leading-relaxed ${
                isDark ? 'text-[#eeeeee]' : 'text-[#1e1e1e]'
              }`}
              style={{ fontFamily: "'DM Serif Text', serif" }}
            >
              Working with her was an absolute{' '}
              <span className="text-[#d64269]" style={{ fontFamily: "'Seaweed Script', cursive" }}>
                dream
              </span>
              . She didn't just create a logo—she captured the entire essence of our brand. The identity she crafted feels luxurious yet approachable, exactly what we needed to stand out in the wellness space.
            </p>
            
            <footer className={isDark ? 'text-[#eeeeee]' : 'text-[#1e1e1e]'}>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#7dcfb6] to-[#d64269] flex items-center justify-center text-white text-2xl" style={{ fontFamily: "'DM Serif Text', serif" }}>
                  SC
                </div>
                <div>
                  <div className="text-xl font-semibold mb-1" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    Sarah Chen
                  </div>
                  <div className="opacity-70" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    Founder & CEO, Bloom & Co. Botanicals
                  </div>
                </div>
              </div>
            </footer>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}