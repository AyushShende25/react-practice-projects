import { motion } from 'motion/react';
import { useState } from 'react';

const galleryImages = [
  'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1490682143684-14369e18dce8?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
];

function AnimatedGalleryStaggered() {
  const [showImages, setShowImages] = useState(false);

  const handleClick = () => {
    setShowImages((prev) => !prev);
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className="bg-yellow-400 text-black rounded-lg p-4 mb-[2rem] font-bold"
      >
        {showImages ? 'Hide Images' : 'Show Images'}
      </button>
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.5,
              staggerDirection: 1,
            },
          },
        }}
        initial="hidden"
        animate={showImages ? 'visible' : 'hidden'}
        className="flex"
      >
        {galleryImages.map((img, index) => (
          <motion.img
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="ml-[2rem] w-[300px] rounded"
            key={index}
            src={img}
          />
        ))}
      </motion.div>
    </div>
  );
}
export default AnimatedGalleryStaggered;
