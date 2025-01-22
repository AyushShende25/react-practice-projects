import { motion } from 'motion/react';
function PulsingBtn() {
  return (
    <motion.button
      className="px-4 py-2 bg-slate-600 text-slate-100 rounded outline-none"
      animate={{
        scale: [1, 1.1, 1],
        backgroundColor: ['#475569', '#1e293b', '#475569'],
      }}
      transition={{ duration: 0.8, ease: 'easeInOut', repeat: Infinity }}
    >
      PulsingBtn
    </motion.button>
  );
}
export default PulsingBtn;
