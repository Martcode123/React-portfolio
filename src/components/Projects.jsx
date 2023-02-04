import React from "react";
import netflix from "../assets/BA netflix.png";
import hooBank from "../assets/hoo bank .png";
import nft from "../assets/ultraverse pic.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { motion } from "framer-motion";

function Projects() {
  return (
    <div className="relative flex flex-col  overflow-hidden mx-auto items-center justify-evenly h-screen  text-left md:flex-row z-0">
      <h1 className="absolute text-gray-400 tracking-[20px] text-2xl uppercase top-14">
        Projects
      </h1>
      <div className="max-w-[90%] md:max-w-[70%] lg:max-w-[55%]">
        <OwlCarousel className="owl-theme" items="1" nav dots loop margin={50}>
          <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex  flex-col items-center justify-center ">
            <figure className="pb-3 ">
              <a
                href="https://netflix-clone-g2g2.vercel.app"
                target="_blank"
                rel="noreferrer"
              >
                <img className="rounded-xl transform hover:translate-y-1 hover:border ease-in-out border-[#1E90FF]" src={netflix} alt="" />
              </a>
            </figure>
            <a
              href="https://netflix-clone-g2g2.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="text-2xl font-semibold "
            >
              <h2 className="hover:underline">
                Netflix Clone
              </h2>
            </a>
          </motion.div>

          <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex  flex-col items-center justify-center ">
            <figure className="pb-3 ">
              <a
                href="https://martins-internship-ujbr.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img className="rounded-xl transform hover:translate-y-1 hover:border ease-in-out border-[#1E90FF]" src={nft} alt="" />
              </a>
            </figure>
            <a
              href="https://martins-internship-ujbr.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="text-2xl font-semibold "
            >
              <h2 className="hover:underline">
                Ultraverse Nft App
              </h2>
            </a>
          </motion.div>

          <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex  flex-col items-center justify-center ">
            <figure className="pb-3 ">
              <a
                href="https://hoo-bank-app-sigma.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img className="rounded-xl transform hover:translate-y-1 hover:border ease-in-out border-[#1E90FF]" src={hooBank} alt="" />
              </a>
            </figure>
            <a
              href="https://hoo-bank-app-sigma.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="text-2xl font-semibold "
            >
              <h2 className="hover:underline">
                Hoo Bank App
              </h2>
            </a>
          </motion.div>
        </OwlCarousel>
      </div>

      <div className="w-full  absolute top-[30%] h-[300px] bg-[#1E90FF]/10 -skew-y-12"></div>
    </div>
  );
}

export default Projects;
