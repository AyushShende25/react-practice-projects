import { motion } from 'motion/react'; // Corrected import
import { useState } from 'react';

const variants = {
  front: { rotateY: 0 },
  back: { rotateY: 180 },
};
function FlippingCard() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div onClick={() => setIsFlipped(!isFlipped)} className="perspective-1000">
      <motion.div
        className="relative w-64 h-40 bg-transparent"
        variants={variants}
        initial="front"
        animate={isFlipped ? 'back' : 'front'}
        transition={{ duration: 0.6 }}
        style={{
          transformStyle: 'preserve-3d',
          perspective: '1000px',
        }}
      >
        {/* Front Side */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center bg-white text-xl font-bold rounded-lg shadow-lg"
          style={{
            backfaceVisibility: 'hidden', // Hide when the back side is visible
          }}
        >
          Front Side
        </motion.div>

        {/* Back Side */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center bg-blue-500 text-xl font-bold rounded-lg shadow-lg rotate-y-180"
          style={{
            backfaceVisibility: 'hidden', // Hide when the front side is visible
            transform: 'rotateY(180deg)', // Flip the back side
          }}
        >
          Back Side
        </motion.div>
      </motion.div>
    </div>
  );
}

export default FlippingCard;
