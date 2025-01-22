import { motion } from 'motion/react';

function BouncingLoader() {
  return (
    <div className="flex items-center justify-center gap-4">
      {[...Array(3)].map((_, index) => (
        <motion.div
          key={index}
          className="h-8 w-8 bg-teal-500 rounded-full"
          animate={{ y: [0, -15, 0] }}
          transition={{
            duration: 0.6,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatDelay: index * 0.2,
          }}
        />
      ))}
    </div>
  );
}
export default BouncingLoader;
