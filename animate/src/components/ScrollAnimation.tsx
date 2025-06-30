import { motion, useScroll, useTransform } from 'motion/react';
function ScrollAnimation() {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 300], [1, 1.5]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  return (
    <div className="h-screen flex justify-center items-center">
      <motion.div
        className="bg-blue-400 h-32 w-32 rounded-lg"
        style={{ scale, opacity }}
      ></motion.div>
      <div className="w-full h-[200vh]"></div>
    </div>
  );
}
export default ScrollAnimation;
