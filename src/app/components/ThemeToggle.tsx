import { Moon, Sun } from 'lucide-react';
import { motion } from 'motion/react';

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

export function ThemeToggle({ isDark, onToggle }: ThemeToggleProps) {
  return (
    <motion.button
      onClick={onToggle}
      className="fixed top-8 right-8 z-50 p-4 rounded-full bg-[#d64269] text-white shadow-lg hover:shadow-xl transition-shadow"
      whileHover={{ scale: 1.1, rotate: 15 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 0 : 180, scale: isDark ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ position: isDark ? 'static' : 'absolute' }}
      >
        <Moon className="w-6 h-6" />
      </motion.div>
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 180 : 0, scale: isDark ? 0 : 1 }}
        transition={{ duration: 0.3 }}
        style={{ position: isDark ? 'absolute' : 'static', top: isDark ? '16px' : 'auto', left: isDark ? '16px' : 'auto' }}
      >
        <Sun className="w-6 h-6" />
      </motion.div>
    </motion.button>
  );
}