import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const words = ['Unforgettable', 'Extraordinary', 'Remarkable', 'Captivating', 'Spectacular', 'Phenomenal'];

export function TypingAnimation() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (currentText.length < currentWord.length) {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
        } else {
          // Finished typing, wait then start deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          // Finished deleting, move to next word
          setIsDeleting(false);
          setCurrentWordIndex((currentWordIndex + 1) % words.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex]);

  return (
    <span className="relative inline-block">
      <span className="bg-gradient-to-r from-[#d64269] via-[#423073] to-[#7dcfb6] bg-clip-text text-transparent" style={{ fontFamily: "'Seaweed Script', cursive" }}>
        {currentText}
      </span>
      <motion.span
        className="inline-block w-1 h-[0.8em] bg-[#d64269] ml-1"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
      />
    </span>
  );
}