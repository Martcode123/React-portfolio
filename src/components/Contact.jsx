import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { send } from "emailjs-com";
import React, { useState } from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

function Contact() {
    const [text] = useTypewriter({
        words: [
          'I am ready to be hired!',
          'Send me a message', 
          'My email is down below',
          'I have what you need'
        ],
        loop: Infinity,
      });

  const [tosend, setToSend] = useState({
    first_name: "",
    last_name: "",
    message: "",
    reply_to: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();

    send("service_form", "template_phgr5n9", tosend, "g65-tszInVcxl9LNM")
      .then((response) => {
        console.log("sucess!", response.status, response.text);
        alert("Email sent successfully, Thank you.");
        setToSend({ first_name: "", last_name: "", message: "", reply_to: "" });
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...tosend, [e.target.name]: e.target.value });
  };
  return (
    <div className=" relative mx-auto max-w-2xl text-left flex flex-col h-screen items-center justify-evenly">
      <h1 className="absolute uppercase text-2xl tracking-[20px] text-gray-400 top-14">
        contact
      </h1>
      <h1 className="absolute top-32 text-2xl font-bold text-center">
        {text}
        <Cursor cursorColor="#1E90FF" />
      </h1>
      <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="absolute flex items-center space-x-1 top-44">
        <EnvelopeIcon className="text-[#1E90FF] w-14 animate-pulse" />
        <p>martrich205@gmail.com</p>
      </motion.div>

      <form
        onSubmit={onSubmit}
        className="contact absolute bottom-12 md:bottom-20 text-black flex flex-col  items-center space-y-2 w-fit mx-auto max-w-sm md:max-w-4xl"
      >
        <div className="md:flex space-y-2 md:space-y-0 md:space-x-2 w-fit">
          <motion.input
           initial={{
            x: -200,
            opacity: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
            type="text"
            name="first_name"
            placeholder="First Name"
            value={tosend.first_name}
            onChange={handleChange}
            required
            className="contactInfo w-full"
          />
          <motion.input
           initial={{
            x: 200,
            opacity: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
            type="text"
            name="last_name"
            placeholder="Last Name"
            value={tosend.last_name}
            onChange={handleChange}
            required
            className="contactInfo w-full"
          />
        </div>

        <motion.input
         initial={{
            x: -200,
            opacity: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          type="email"
          name="reply_to"
          placeholder="Your email"
          value={tosend.reply_to}
          onChange={handleChange}
          required
          className="contactInfo w-full"
        />
        <motion.textarea
         initial={{
            x: 200,
            opacity: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          type="text"
          name="message"
          placeholder="Message"
          value={tosend.message}
          onChange={handleChange}
          required
          className="contactInfo w-full max-h-24"
        />
        <motion.button
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
          type="submit"
          className="text-white hover:translate-y-1 transition-transform w-full p-3 bg-[#1E90FF] rounded-xl text-lg font-semibold"
        >
          Submit
        </motion.button>
      </form>
    </div>
  );
}

export default Contact;
