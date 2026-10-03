import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

const steps = [
  {
    number: 1,
    title: 'Hello!',
    description: 'We discuss your business goals and explore how we can work together.',
  },
  {
    number: 2,
    title: 'Onboarding',
    description: 'Access your client portal and share insights about your business through a detailed questionnaire.',
  },
  {
    number: 3,
    title: 'Brainstorming',
    description: "I'll research your business thoroughly and prepare a document, creating an opportunity for us to assess and enhance your branding together.",
  },
  {
    number: 4,
    title: 'Your Brand',
    description: 'Review a custom brand proposal with a free revision included.',
  },
  {
    number: 5,
    title: 'Final Design',
    description: "I'll create all your branding materials, including digital and print assets.",
  },
  {
    number: 6,
    title: 'Offboarding',
    description: 'Receive your complete brand identity with guidelines and a helpful goodbye package.',
  },
];

export function HowItWorks({ isDark }: { isDark: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const [pathLength, setPathLength] = useState(0);
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const pathProgress = useTransform(scrollYProgress, [0, 0.6], [0, 1]);

  useEffect(() => {
    if (svgRef.current) {
      const path = svgRef.current.querySelector('path');
      if (path) {
        setPathLength(path.getTotalLength());
      }
    }
  }, []);

  useEffect(() => {
    const unsubscribe = pathProgress.on('change', (latest) => {
      const currentLength = latest * pathLength;
      const newVisibleSteps: number[] = [];

      // Calculate which steps should be visible based on path progress
      steps.forEach((_, index) => {
        const stepProgress = (index + 1) / steps.length;
        if (latest >= stepProgress - 0.2) { // Changed from 0.1 to 0.2 for faster reveal
          newVisibleSteps.push(index);
        }
      });

      setVisibleSteps(newVisibleSteps);
    });

    return () => unsubscribe();
  }, [pathProgress, pathLength]);

  return (
    <section ref={containerRef} className="py-32 px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`text-5xl md:text-6xl lg:text-7xl mb-20 text-center ${
            isDark ? 'text-[#eeeeee]' : 'text-[#1e1e1e]'
          }`}
          style={{ fontFamily: "'DM Serif Text', serif" }}
        >
          How it <span className="relative" style={{ fontFamily: "'Seaweed Script', cursive", color: '#d64269' }}>
            works
            <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 10" xmlns="http://www.w3.org/2000/svg">
              <path d="M0,5 Q50,0 100,5 T200,5" stroke="#d64269" strokeWidth="3" fill="none" />
            </svg>
          </span>:
        </motion.h2>

        <div className="relative">
          {/* SVG Path */}
          <svg
            ref={svgRef}
            className="absolute top-0 left-0 w-full h-full pointer-events-none"
            viewBox="0 0 1200 800"
            preserveAspectRatio="xMidYMid meet"
            style={{ minHeight: '800px' }}
          >
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <motion.path
              d="M 150,100 Q 50,150 150,200 T 400,300 Q 500,350 500,400 T 650,500 Q 800,550 900,500 T 1050,600"
              stroke={isDark ? "#eeeeee" : "#1e1e1e"}
              strokeWidth="4"
              fill="none"
              strokeDasharray={pathLength}
              strokeDashoffset={pathLength}
              style={{
                strokeDashoffset: useTransform(
                  pathProgress,
                  [0, 1],
                  [pathLength, 0]
                ),
              }}
              filter="url(#glow)"
            />
          </svg>

          {/* Steps */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24 pt-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className="relative"
                style={{
                  marginTop: index % 3 === 0 ? '0' : index % 3 === 1 ? '100px' : '50px',
                }}
              >
                {/* Pink Circle Marker */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={
                    visibleSteps.includes(index)
                      ? { scale: 1, opacity: 1 }
                      : { scale: 0, opacity: 0 }
                  }
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="absolute -top-8 left-0 w-16 h-16 bg-[#d64269] rounded-full flex items-center justify-center shadow-lg z-10"
                >
                  <span className="text-white text-2xl">{step.number}</span>
                </motion.div>

                {/* Text Content */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    visibleSteps.includes(index)
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="pt-12"
                >
                  <h3
                    className={`text-2xl md:text-3xl mb-3 ${
                      isDark ? 'text-[#eeeeee]' : 'text-[#1e1e1e]'
                    }`}
                    style={{ fontFamily: "'DM Serif Text', serif" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className={`text-base md:text-lg leading-relaxed ${
                      isDark ? 'text-[#eeeeee]/80' : 'text-[#1e1e1e]/80'
                    }`}
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {step.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}