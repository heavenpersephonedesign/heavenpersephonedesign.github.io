import { motion } from 'motion/react';

interface TestimonialsProps {
  isDark: boolean;
}

const testimonials = [
  {
    quote: "Working with this designer transformed our entire brand identity. The showgirl energy is exactly what we needed to stand out!",
    author: "Sarah Mitchell",
    company: "Bloom Beauty Co.",
  },
  {
    quote: "Absolutely incredible work! Our rebrand exceeded all expectations. The creativity and strategic thinking are unmatched.",
    author: "James Rodriguez",
    company: "Urban Craft Coffee",
  },
  {
    quote: "A true visionary! Our brand went from invisible to unforgettable. The best investment we've made in our business.",
    author: "Emma Thompson",
    company: "Luxe Skincare",
  },
  {
    quote: "The attention to detail and personality in every design element is remarkable. Our clients can't stop talking about our new look!",
    author: "Michael Chen",
    company: "Zen Wellness Studio",
  },
  {
    quote: "Bold, beautiful, and strategic. This designer gets it. Our brand now reflects exactly who we are and attracts our dream clients.",
    author: "Olivia Martinez",
    company: "Wild & Free Boutique",
  },
  {
    quote: "The process was seamless and the results were spectacular. Our brand identity is now our biggest marketing asset!",
    author: "David Park",
    company: "Peak Performance Coaching",
  },
];

export function Testimonials({ isDark }: TestimonialsProps) {
  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-32 px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2
            className={`text-5xl md:text-6xl lg:text-7xl mb-6 ${
              isDark ? 'text-[#eeeeee]' : 'text-[#1e1e1e]'
            }`}
            style={{ fontFamily: "'DM Serif Text', serif" }}
          >
            What Clients <span className="text-[#d64269]" style={{ fontFamily: "'Seaweed Script', cursive" }}>Say</span>
          </h2>
          <p
            className={`text-xl md:text-2xl max-w-3xl mx-auto ${
              isDark ? 'text-[#eeeeee]/80' : 'text-[#1e1e1e]/80'
            }`}
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Don't just take my word for it
          </p>
        </motion.div>
      </div>

      {/* Scrolling testimonials */}
      <div className="relative">
        <motion.div
          className="flex gap-8"
          animate={{
            x: [0, -1920],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`flex-shrink-0 w-[400px] p-8 rounded-3xl border-2 ${
                isDark
                  ? 'bg-[#1e1e1e]/50 border-[#eeeeee]/10'
                  : 'bg-[#eeeeee]/50 border-[#1e1e1e]/10'
              } backdrop-blur-sm`}
            >
              <div className="mb-6">
                <svg
                  className="w-12 h-12 text-[#d64269] opacity-50"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p
                className={`text-lg mb-6 leading-relaxed ${
                  isDark ? 'text-[#eeeeee]/90' : 'text-[#1e1e1e]/90'
                }`}
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {testimonial.quote}
              </p>
              <div className="pt-4 border-t border-[#d64269]/30">
                <p
                  className={`text-lg mb-1 ${
                    isDark ? 'text-[#eeeeee]' : 'text-[#1e1e1e]'
                  }`}
                  style={{ fontFamily: "'DM Serif Text', serif" }}
                >
                  {testimonial.author}
                </p>
                <p
                  className={`text-base ${
                    isDark ? 'text-[#eeeeee]/70' : 'text-[#1e1e1e]/70'
                  }`}
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}