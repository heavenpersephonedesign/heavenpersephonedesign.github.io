import { motion } from 'motion/react';

interface BackgroundBlobsProps {
  isDark: boolean;
}

type SparkleShape = 'star4' | 'cross' | 'dot' | 'diamond';

interface Sparkle {
  id: number;
  x: string;
  y: string;
  size: number;
  color: string;
  shape: SparkleShape;
  duration: number;
  delay: number;
  opacity: number;
}

const COLORS = ['#d64269', '#ffe45e', '#7dcfb6', '#423073', '#eeeeee'];

const SPARKLES: Sparkle[] = [
  { id: 0,  x: '3%',  y: '8%',  size: 10, color: '#d64269', shape: 'star4',   duration: 4.2, delay: 0,    opacity: 0.55 },
  { id: 1,  x: '12%', y: '22%', size: 5,  color: '#ffe45e', shape: 'dot',     duration: 3.1, delay: 0.7,  opacity: 0.45 },
  { id: 2,  x: '22%', y: '5%',  size: 8,  color: '#7dcfb6', shape: 'cross',   duration: 5.0, delay: 1.2,  opacity: 0.4  },
  { id: 3,  x: '35%', y: '14%', size: 12, color: '#d64269', shape: 'diamond', duration: 4.8, delay: 0.3,  opacity: 0.35 },
  { id: 4,  x: '48%', y: '3%',  size: 6,  color: '#ffe45e', shape: 'star4',   duration: 3.6, delay: 1.8,  opacity: 0.5  },
  { id: 5,  x: '60%', y: '11%', size: 9,  color: '#7dcfb6', shape: 'dot',     duration: 4.4, delay: 0.5,  opacity: 0.4  },
  { id: 6,  x: '72%', y: '6%',  size: 7,  color: '#d64269', shape: 'cross',   duration: 3.9, delay: 2.1,  opacity: 0.45 },
  { id: 7,  x: '85%', y: '18%', size: 11, color: '#423073', shape: 'star4',   duration: 5.2, delay: 0.9,  opacity: 0.35 },
  { id: 8,  x: '94%', y: '7%',  size: 5,  color: '#ffe45e', shape: 'dot',     duration: 3.3, delay: 1.5,  opacity: 0.5  },
  { id: 9,  x: '7%',  y: '38%', size: 8,  color: '#7dcfb6', shape: 'diamond', duration: 4.7, delay: 2.6,  opacity: 0.3  },
  { id: 10, x: '18%', y: '45%', size: 6,  color: '#d64269', shape: 'star4',   duration: 3.8, delay: 0.2,  opacity: 0.45 },
  { id: 11, x: '29%', y: '33%', size: 10, color: '#ffe45e', shape: 'cross',   duration: 4.1, delay: 1.1,  opacity: 0.4  },
  { id: 12, x: '42%', y: '42%', size: 7,  color: '#7dcfb6', shape: 'dot',     duration: 5.5, delay: 3.0,  opacity: 0.35 },
  { id: 13, x: '55%', y: '37%', size: 12, color: '#d64269', shape: 'star4',   duration: 4.0, delay: 0.8,  opacity: 0.4  },
  { id: 14, x: '68%', y: '44%', size: 5,  color: '#423073', shape: 'diamond', duration: 3.5, delay: 1.9,  opacity: 0.3  },
  { id: 15, x: '79%', y: '31%', size: 9,  color: '#ffe45e', shape: 'cross',   duration: 4.6, delay: 0.4,  opacity: 0.45 },
  { id: 16, x: '91%', y: '40%', size: 6,  color: '#7dcfb6', shape: 'star4',   duration: 3.2, delay: 2.3,  opacity: 0.5  },
  { id: 17, x: '4%',  y: '60%', size: 11, color: '#d64269', shape: 'dot',     duration: 4.9, delay: 1.6,  opacity: 0.35 },
  { id: 18, x: '16%', y: '68%', size: 7,  color: '#ffe45e', shape: 'star4',   duration: 3.7, delay: 0.1,  opacity: 0.5  },
  { id: 19, x: '27%', y: '55%', size: 5,  color: '#7dcfb6', shape: 'cross',   duration: 5.1, delay: 2.8,  opacity: 0.4  },
  { id: 20, x: '39%', y: '65%', size: 10, color: '#d64269', shape: 'diamond', duration: 4.3, delay: 0.6,  opacity: 0.35 },
  { id: 21, x: '51%', y: '58%', size: 8,  color: '#423073', shape: 'star4',   duration: 3.4, delay: 1.4,  opacity: 0.3  },
  { id: 22, x: '63%', y: '72%', size: 6,  color: '#ffe45e', shape: 'dot',     duration: 4.5, delay: 2.5,  opacity: 0.45 },
  { id: 23, x: '75%', y: '61%', size: 12, color: '#7dcfb6', shape: 'star4',   duration: 5.3, delay: 0.0,  opacity: 0.4  },
  { id: 24, x: '87%', y: '67%', size: 7,  color: '#d64269', shape: 'cross',   duration: 3.6, delay: 1.7,  opacity: 0.5  },
  { id: 25, x: '96%', y: '55%', size: 9,  color: '#ffe45e', shape: 'diamond', duration: 4.2, delay: 2.2,  opacity: 0.35 },
  { id: 26, x: '8%',  y: '82%', size: 5,  color: '#7dcfb6', shape: 'star4',   duration: 3.9, delay: 1.0,  opacity: 0.45 },
  { id: 27, x: '20%', y: '90%', size: 10, color: '#d64269', shape: 'dot',     duration: 4.8, delay: 3.2,  opacity: 0.35 },
  { id: 28, x: '33%', y: '78%', size: 6,  color: '#423073', shape: 'cross',   duration: 5.4, delay: 0.5,  opacity: 0.3  },
  { id: 29, x: '45%', y: '87%', size: 11, color: '#ffe45e', shape: 'star4',   duration: 3.1, delay: 1.3,  opacity: 0.5  },
  { id: 30, x: '58%', y: '83%', size: 7,  color: '#7dcfb6', shape: 'diamond', duration: 4.0, delay: 2.7,  opacity: 0.4  },
  { id: 31, x: '70%', y: '93%', size: 5,  color: '#d64269', shape: 'dot',     duration: 3.5, delay: 0.3,  opacity: 0.45 },
  { id: 32, x: '82%', y: '85%', size: 9,  color: '#ffe45e', shape: 'star4',   duration: 4.7, delay: 1.8,  opacity: 0.4  },
  { id: 33, x: '93%', y: '80%', size: 6,  color: '#7dcfb6', shape: 'cross',   duration: 3.3, delay: 2.4,  opacity: 0.5  },
  { id: 34, x: '25%', y: '96%', size: 8,  color: '#d64269', shape: 'star4',   duration: 4.4, delay: 0.8,  opacity: 0.35 },
  { id: 35, x: '77%', y: '97%', size: 10, color: '#423073', shape: 'diamond', duration: 5.0, delay: 1.5,  opacity: 0.3  },
];

function SparkleIcon({ shape, size, color }: { shape: SparkleShape; size: number; color: string }) {
  const s = size;
  if (shape === 'star4') {
    // Classic 4-pointed star drawn with SVG path
    const r1 = s / 2;
    const r2 = s / 5;
    const pts: string[] = [];
    for (let i = 0; i < 8; i++) {
      const angle = (i * Math.PI) / 4 - Math.PI / 2;
      const r = i % 2 === 0 ? r1 : r2;
      pts.push(`${s / 2 + r * Math.cos(angle)},${s / 2 + r * Math.sin(angle)}`);
    }
    return (
      <svg width={s} height={s} viewBox={`0 0 ${s} ${s}`} fill="none">
        <polygon points={pts.join(' ')} fill={color} />
      </svg>
    );
  }
  if (shape === 'cross') {
    const t = s * 0.18;
    const c = s / 2;
    return (
      <svg width={s} height={s} viewBox={`0 0 ${s} ${s}`} fill="none">
        <rect x={c - t} y={0} width={t * 2} height={s} rx={t} fill={color} />
        <rect x={0} y={c - t} width={s} height={t * 2} rx={t} fill={color} />
      </svg>
    );
  }
  if (shape === 'diamond') {
    const c = s / 2;
    return (
      <svg width={s} height={s} viewBox={`0 0 ${s} ${s}`} fill="none">
        <polygon points={`${c},0 ${s},${c} ${c},${s} 0,${c}`} fill={color} />
      </svg>
    );
  }
  // dot
  return (
    <svg width={s} height={s} viewBox={`0 0 ${s} ${s}`} fill="none">
      <circle cx={s / 2} cy={s / 2} r={s / 2} fill={color} />
    </svg>
  );
}

export function BackgroundBlobs({ isDark }: BackgroundBlobsProps) {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Very subtle vignette to ground the page */}
      <div
        className="absolute inset-0"
        style={{
          background: isDark
            ? 'radial-gradient(ellipse at 50% 50%, transparent 60%, rgba(10,10,10,0.35) 100%)'
            : 'radial-gradient(ellipse at 50% 50%, transparent 60%, rgba(220,220,220,0.3) 100%)',
        }}
      />

      {SPARKLES.map((sp) => (
        <motion.div
          key={sp.id}
          className="absolute"
          style={{ left: sp.x, top: sp.y }}
          animate={{
            opacity: [0, sp.opacity, sp.opacity * 0.6, sp.opacity, 0],
            scale:   [0.4, 1, 0.8, 1.05, 0.4],
            rotate:  [0, sp.shape === 'dot' ? 0 : 45, 0],
          }}
          transition={{
            duration: sp.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: sp.delay,
            times: [0, 0.25, 0.5, 0.75, 1],
          }}
        >
          <SparkleIcon shape={sp.shape} size={sp.size} color={sp.color} />
        </motion.div>
      ))}
    </div>
  );
}