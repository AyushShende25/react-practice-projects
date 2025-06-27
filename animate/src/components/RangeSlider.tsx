import { motion, useMotionValue } from 'motion/react';
import { ChangeEvent } from 'react';

function RangeSlider() {
  const scale = useMotionValue(1);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    scale.set(parseFloat(e.target.value));
  };

  return (
    <div>
      <motion.div
        className="bg-yellow-400 rounded-full h-20 w-20"
        style={{ scale }}
      />
      <div className="mt-16">
        <input
          type="range"
          min={0.5}
          max={5}
          step={0.01}
          defaultValue={1}
          onChange={handleChange}
          name=""
          id=""
        />
      </div>
    </div>
  );
}
export default RangeSlider;
