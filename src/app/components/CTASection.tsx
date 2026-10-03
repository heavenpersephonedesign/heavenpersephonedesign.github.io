import { motion } from 'motion/react';
import { Mail, MessageCircle, Calendar, ArrowRight } from 'lucide-react';

interface CTASectionProps {
  isDark: boolean;
}

export function CTASection({ isDark }: CTASectionProps) {
  return (
    <section className="py-32 px-8">
      <div className="max-w-6xl mx-auto">
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
            Ready to Make{' '}
            <span className="bg-gradient-to-r from-[#d64269] via-[#423073] to-[#7dcfb6] bg-clip-text text-transparent" style={{ fontFamily: "'Seaweed Script', cursive" }}>
              Magic
            </span>
            ?
          </h2>
          <p
            className={`text-xl md:text-2xl max-w-3xl mx-auto ${
              isDark ? 'text-[#eeeeee]/80' : 'text-[#1e1e1e]/80'
            }`}
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Let's create a brand that's as unique and unforgettable as you are
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Mail,
              title: 'Email Me',
              description: 'Drop me a line and let us chat',
              action: 'hello@yourbrand.com',
              color: '#d64269',
            },
            {
              icon: MessageCircle,
              title: 'Quick Chat',
              description: 'Send a message for a rapid response',
              action: 'Message Now',
              color: '#ffe45e',
            },
            {
              icon: Calendar,
              title: 'Book a Call',
              description: 'Schedule a discovery session',
              action: 'Choose Your Time',
              color: '#7dcfb6',
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`p-8 rounded-3xl border-2 ${
                isDark
                  ? 'bg-[#1e1e1e]/50 border-[#eeeeee]/10'
                  : 'bg-[#eeeeee]/50 border-[#1e1e1e]/10'
              } backdrop-blur-sm cursor-pointer group`}
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                style={{ backgroundColor: item.color }}
              >
                <item.icon className="w-8 h-8 text-white" />
              </motion.div>

              <h3
                className={`text-2xl mb-3 ${
                  isDark ? 'text-[#eeeeee]' : 'text-[#1e1e1e]'
                }`}
                style={{ fontFamily: "'DM Serif Text', serif" }}
              >
                {item.title}
              </h3>
              <p
                className={`text-lg mb-6 ${
                  isDark ? 'text-[#eeeeee]/70' : 'text-[#1e1e1e]/70'
                }`}
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {item.description}
              </p>
              <div
                className="flex items-center gap-2 group-hover:gap-4 transition-all"
                style={{ color: item.color }}
              >
                <span className="text-lg">{item.action}</span>
                <ArrowRight className="w-5 h-5" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Main CTA Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden p-12 md:p-16 text-center"
          style={{
            background: `linear-gradient(135deg, #d64269 0%, #423073 50%, #7dcfb6 100%)`,
          }}
        >
          <motion.div
            className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full opacity-0"
            animate={{}}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          <div className="relative z-10">
            <h3 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6" style={{ fontFamily: "'DM Serif Text', serif" }}>
              Build Your Dream Brand
            </h3>
            <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Join the bold brands that are making waves in their industries
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-white text-[#1e1e1e] rounded-full text-lg flex items-center justify-center gap-3 shadow-lg"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}