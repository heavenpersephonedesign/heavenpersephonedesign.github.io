import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
}

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const [sparkleId, setSparkleId] = useState(0);

  useEffect(() => {
    let lastTime = Date.now();
    
    const updateMousePosition = (e: MouseEvent) => {
      const now = Date.now();
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Create dot sparkles as cursor moves (reduced frequency)
      if (now - lastTime > 60) { // Create sparkles every 60ms
        const newSparkle: Sparkle = {
          id: sparkleId,
          x: e.clientX + (Math.random() - 0.5) * 30,
          y: e.clientY + (Math.random() - 0.5) * 30,
          size: 2 + Math.random() * 4, // Random size between 2-6px
        };
        
        setSparkles(prev => [...prev, newSparkle]);
        setSparkleId(prev => prev + 1);
        lastTime = now;
        
        // Remove sparkle after animation
        setTimeout(() => {
          setSparkles(prev => prev.filter(s => s.id !== newSparkle.id));
        }, 1000);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, [sparkleId]);

  return (
    <>
      {/* Dot sparkle trail */}
      <AnimatePresence>
        {sparkles.map((sparkle) => (
          <motion.div
            key={sparkle.id}
            className="fixed pointer-events-none z-[9998] bg-[#d64269] rounded-full"
            style={{
              width: sparkle.size,
              height: sparkle.size,
            }}
            initial={{
              x: sparkle.x,
              y: sparkle.y,
              scale: 1,
              opacity: 1,
            }}
            animate={{
              x: sparkle.x + (Math.random() - 0.5) * 40,
              y: sparkle.y + (Math.random() - 0.5) * 40 + 20,
              scale: 0,
              opacity: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0,
            }}
            transition={{
              duration: 0.8,
              ease: 'easeOut',
            }}
          />
        ))}
      </AnimatePresence>
    </>
  );
}