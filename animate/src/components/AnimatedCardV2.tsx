import { motion } from 'motion/react';
function AnimatedCardV2() {
  return (
    <div className="flex justify-center items-start mt-8">
      <div className="h-[200vh] w-full flex justify-center items-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1.1, opacity: 1, y: -200 }}
          className="mt-32 bg-slate-400 p-6"
        >
          <h2 className="font-bold text-2xl">Card Title</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
            itaque, illo deserunt temporibus corrupti
          </p>
        </motion.div>
      </div>
    </div>
  );
}

function AnimatedContainer() {
  return (
    <div>
      <h1 className="font-bold text-center my-4 text-3xl">
        scroll down to see animated card
      </h1>
      <div className="h-screen"></div>
      <AnimatedCardV2 />
    </div>
  );
}
export default AnimatedContainer;
