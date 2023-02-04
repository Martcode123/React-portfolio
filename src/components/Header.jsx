import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import logo from "../assets/darker logo.png";
import pic1 from "../assets/pic1.png";
import Circles from "./Circles";
import { ArrowDownIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

function Header() {
  const [text] = useTypewriter({
    words: [
      "Hello, The name is Martins Richard 👋!",
      "I am a React frontend developer",
      "<I love coding />",
      "If you like what you see",
      "Keep scrolling!!",
    ],
    loop: Infinity,
  });

  return (
    <div className="header h-screen">
      <div className="flex">
        <div className="relative w-[100%]">
          <div className="h-screen relative flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
            <Circles />
            <div className="absolute space-y-5">
              <img
                className="rounded-full mx-auto object-cover w-[100px] h-[100px]"
                src={pic1}
                alt=""
              />
              <h1 className="text-white font-bold text-[30px]">
                {text}
                <Cursor cursorColor="#1E90FF" />
              </h1>
              <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2 }}
              className="text-gray-400 space-x-2 uppercase tracking-[5px]">
                <a href="#about" className="header-link group">
                  <span className="span">About</span>{" "}
                </a>
                <a href="#skills" className="header-link group">
                  <span className="span">Skills</span>{" "}
                </a>
                <a href="#projects" className="header-link group">
                  <span className="span">Projects</span>{" "}
                </a>
                <a href="#contact" className="header-link group">
                  <span className="span">Contact</span>{" "}
                </a>
              </motion.div>
            </div>

            <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-[50px] absolute bottom-6 left-[48%] text-[#1E90FF] border bg-gray-900 p-2 rounded-full animate-bounce cursor-pointer">
              <a href="#about">
                <ArrowDownIcon />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
