import { motion, useMotionValue, useTransform } from 'motion/react';

function DraggableBox() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const backgroundColor = useTransform(x, [-100, 100], ['#ff0000', '#00ff00']);

  return (
    <motion.div
      style={{ x, y, backgroundColor }}
      drag
      dragConstraints={{ left: -200, right: 200, top: -200, bottom: 200 }}
      className="w-32 h-32 flex items-center justify-center  rounded-lg shadow-lg cursor-pointer"
    >
      <span>drag me</span>
    </motion.div>
  );
}
export default DraggableBox;
