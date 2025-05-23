import React from "react";
import { motion } from "framer-motion";

const Contact: React.FC = () => {
  return (
    <section id="contact"
  className="relative bg-black text-white min-h-screen pt-24 flex justify-center items-center"
  style={{
    backgroundImage: `url('/contact0Bg.png')`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundColor: "#000"
  }}
>

  <div className="relative w-full h-full z-10 flex flex-col items-center justify-center text-center">
    <motion.div
      initial={{ y: 60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="z-10"
    >
      <h1 className="text-4xl md:text-6xl font-light leading-tight">
        The future of your <br />
        industry{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-500 to-pink-500 font-medium">
          starts here
        </span>
      </h1>

      <div className="mt-8 flex gap-4 justify-center flex-wrap">
        <button
          onClick={() => window.location.href = "http://localhost:5173/"}
          className="bg-white text-black px-6 py-2 rounded-md font-medium hover:bg-gray-200 transition-all"
        >
          View Demo →
        </button>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://forms.gle/RDwapy9eVabESTzL8"
          className="px-6 py-2 rounded-md border border-white hover:bg-white hover:text-black transition-all font-medium"
        >
          Get in touch →
        </a>
      </div>
    </motion.div>
  </div>

  {/* Blurred background glow */}
  <div className="absolute top-28 left-16 animate-pulse ">
    <div className="w-56 h-56 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-50 blur-2xl"></div>
  </div>
  <div className="absolute bottom-16 right-20 animate-pulse z-0">
    <div className="w-56 h-56 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 opacity-50 blur-2xl"></div>
  </div>

  {/* Black overlay behind all content */}
  <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />
  {/* Glowing Background Elements */}
  <div className="absolute top-28 left-16 animate-pulse">
        <div className="w-56 h-56 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-50 blur-2xl"></div>
      </div>
      <div className="absolute bottom-16 right-20 animate-pulse">
        <div className="w-56 h-56 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 opacity-50 blur-2xl"></div>
      </div>
</section>

  );
};

export default Contact;
