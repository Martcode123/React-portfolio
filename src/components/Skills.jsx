import React from "react";
import { skills } from "../api";
import { motion } from "framer-motion";

function Skills({ directionLeft }) {
  return (
    <motion.div className="relative flex flex-col text-center max-w-[2000px] min-h-screen px-10 mx-auto items-center justify-evenly h-screen md:text-left md:flex-row">
      <h1 className="absolute top-14 uppercase tracking-[20px] text-gray-400 text-2xl">
        Skills
      </h1>
      <div className="absolute  grid grid-cols-3 md:grid-cols-4 gap-3 md:gap-5 sm:gap-5 lg:gap-10">
        {skills.map((skill) => (
          <motion.div
            initial={{ 
                x: directionLeft ? -100 : 100,
                opacity: 0
            }}
            transition={{ duration: 2 }}
            whileInView={{ opacity: 1, x: 0 }}
        
            key={skill.id}
            className="relative h-full w-32 border border-gray-400 flex flex-col md:flex-row md:w-44 justify-center space-x-2 items-center p-2 !hover:translate-y-1 hover:opacity-[0.8] duration-150 ease-in-out"
          >
            <img
              className="w-10 h-10 md:w-16 md:h-16  hover:scale-5 filter group-hover:grayscale"
              src={skill.logo}
              alt=""
            />
           <div>
            <p className="text-center font-semibold">{skill.name}</p>
           </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Skills;
