import { motion } from 'motion/react';

function AnimatedCard() {
  return (
    <motion.div
      whileHover={{ scale: 1.05, rotate: 3 }}
      whileTap={{ scale: 0.95 }}
      drag
      dragConstraints={{
        top: -50,
        right: 50,
        bottom: 50,
        left: -50,
      }}
      dragElastic={0.2}
      transition={{ type: 'spring', stiffness: 300 }}
      className="max-w-sm cursor-pointer mx-auto shadow-lg overflow-hidden rounded-lg bg-white"
    >
      <img
        className="w-full h-48 object-cover"
        src="https://images.unsplash.com/photo-1736880705369-e345ec5fa278?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2">Card Title</h2>
        <p className="text-gray-700 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis
          suscipit eligendi voluptatibus quos, fugit perferendis omnis quas
          eius, labore ab et facilis in.
        </p>
        <button className="px-4 py-2 bg-teal-500 transition text-white rounded hover:bg-teal-400">
          Click Me
        </button>
      </div>
    </motion.div>
  );
}
export default AnimatedCard;
