import React from "react";
import { motion } from "framer-motion";

function Circles() {
  return (
    <div className="relative flex justify-center items-center ">
      <div className="border border-[#333333] rounded-full w-[200px] h-[200px] animate-ping absolute " />
      <div className="border border-[#333333] rounded-full w-[300px] h-[300px]  absolute " />
      <div className="border border-[#333333] rounded-full w-[500px] h-[500px] absolute " />
      <motion.div
        className="border border-[#1E90FF] opacity-5 rounded-full w-[650px] h-[650px] absolute  animate-pulse"
        initial={{ opacity: 0 }}
        animate={{
          scale: [1, 2, 3, 1],
          opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 0.3],
        }}
        transition={{
          default: {
            duration: 1.4,
          },
        }}
      />
      <div />
      <div />
    </div>
  );
}

export default Circles;
