import React from "react";
import { motion } from "framer-motion";
import pic2 from "../assets/pic2.jpg";

function About() {
  return (
    <div className="relative flex flex-col text-center max-w-7xl px-10 mx-auto items-center justify-evenly h-screen md:text-left md:flex-row">
      <h1 className="absolute top-5 uppercase tracking-[20px] text-gray-400 text-2xl">
        about
      </h1>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src={pic2}
        alt=""
        className="w-40 h-40 -mb-14 flex-shrink-0 rounded-full sm:w-56 sm:h-56 object-cover md:rounded-lg md:w-[350px] md:h-[550px] xl:w-[500px] "
      />
      <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="space-y-4 px-0 md:px-10 text-center md:text-left xl:text-left">
        <h2 className="font-semibold text-[#1E90FF] ">What I do?</h2>
        <h1 className="font-extrabold text-xl md:text-3xl lg:te sm:text-2xl ">
          React Frontend Developer and UI/UX Designer
        </h1>
        <p className="text-gray-400 ">
          I'm Martins, a software engineer based in Nigeria. I specialize in
          creating websites using React jS and Next JS and I'm willing to be the best at
          coding and building websites for top-tech companies like <b className="blue"> Google</b> and <b className="blue">Meta</b>  with great <b className="blue">user experience</b> anywhere in the world
          while creating a huge impact with my responsive web 
          applications.
        </p>
        <button className=" hover:translate-y-1 transition-transform p-3 bg-[#1E90FF] rounded-xl text-lg font-semibold">
         <a href="#skills">Explore Skills</a> 
        </button>
      </motion.div>
    </div>
  );
}

export default About;
