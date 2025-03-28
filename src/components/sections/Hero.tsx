import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface HeroProps {
  servicesRef: React.RefObject<HTMLDivElement | null>;
  loading?: boolean;
}

const Hero: React.FC<HeroProps> = ({ servicesRef, loading }) => {
  const words = [
    "Unleash Text Generation",
    "Code Automation",
    "Knowledge Reasoning",
    "Conversational Intelligence",
  ];

  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = isDeleting ? 50 : 80;

  useEffect(() => {
    if (loading) return;

    let timer: NodeJS.Timeout;

    if (!isDeleting && text === words[index]) {
      timer = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }

    timer = setTimeout(() => {
      setText((prev) =>
        isDeleting
          ? prev.substring(0, prev.length - 1)
          : words[index].substring(0, prev.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, index, loading]);

  const scrollToServices = () => {
    if (servicesRef.current) {
      servicesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="h-screen bg-black flex flex-col items-center justify-center text-center text-white relative overflow-hidden font-sans">
      {/* Heading Line 1 */}
      <motion.h1
className="text-4xl sm:text-5xl md:text-6xl lg:text-[70px] leading-tight tracking-tight"
initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Power{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
          {text}
        </span>
        <span className="text-white animate-blink">|</span>
      </motion.h1>

      {/* Heading Line 2 */}
      <motion.h1
className="text-4xl sm:text-5xl md:text-6xl lg:text-[70px] leading-tight tracking-tight"
initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        With Your Enterprise Data
      </motion.h1>

      {/* Subtext */}
      <motion.p
        className="text-gray-300 text-lg max-w-2xl mt-6 leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.3 }}
      >
        Orchestrate AI agents — Architects, Developers & QA — to plan, build,
        and validate faster
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="mt-8 flex space-x-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.6 }}
      >
     <button
  onClick={() => (window.location.href = "http://localhost:5173/")}
  className="bg-white text-black font-semibold text-sm sm:text-base px-4 py-2 sm:px-8 sm:py-3 rounded-md hover:bg-gray-200 transition shadow-lg border border-gray-400"
>
  View Demo →
</button>

<button
  onClick={scrollToServices}
  className="text-white border border-white text-sm sm:text-base px-4 py-2 sm:px-8 sm:py-3 rounded-md hover:bg-white hover:text-black transition shadow-lg"
>
  Our Services
</button>

      </motion.div>

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

export default Hero;
