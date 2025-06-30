import { motion, useScroll, useTransform } from 'motion/react';
function AnimationScroll() {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 1000], [1, 0.5]);
  const borderRadius = useTransform(scrollY, [0, 1000], ['0px', '50%']);
  return (
    <>
      <div className="relative h-screen overflow-hidden">
        <motion.img
          src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="background"
          className="absolute w-full h-full object-cover inset-0"
          style={{ scale, borderRadius }}
        />

        <div className="flex items-center justify-center h-screen top-0 sticky text-white">
          <h1 className="text-4xl">scroll</h1>
        </div>
      </div>
      <div className="h-[200vh] flex items-center justify-center">
        <h2>scroll down</h2>
      </div>
    </>
  );
}
export default AnimationScroll;
