import { motion } from 'framer-motion';

interface AnimatedBackgroundProps {
  darkMode: boolean;
}

const AnimatedBackground = ({ darkMode }: AnimatedBackgroundProps) => {
  const techIcons = ['⚛️', '🔷', '🍃', '🐍', '☕', '💾', '🌐', '⚡', '🔥', '💻'];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {techIcons.map((icon, index) => (
        <motion.div
          key={index}
          className={`absolute text-4xl opacity-10 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            x: [
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
            ],
            y: [
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
            ],
            rotate: [0, 360],
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {icon}
        </motion.div>
      ))}

      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-10"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-400 rounded-full filter blur-3xl opacity-10"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
