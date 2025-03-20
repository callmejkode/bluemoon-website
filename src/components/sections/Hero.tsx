import React, { useState, useEffect } from "react";

interface HeroProps {
  servicesRef: React.RefObject<HTMLDivElement | null>;
}

const Hero: React.FC<HeroProps> = ({ servicesRef }) => {
  const words = ["Generative AI", "Enterprise AI"];
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = isDeleting ? 100 : 150;

  useEffect(() => {
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
  }, [text, isDeleting, index]);

  // Smooth Scroll Function
  const scrollToServices = () => {
    if (servicesRef.current) {
      servicesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="h-screen bg-black flex flex-col items-center justify-center text-center text-white relative overflow-hidden font-sans">
      {/* Typing Animated Heading */}
      <h1 className="text-[70px] leading-tight tracking-tight">
        Power <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">{text}</span>
        <span className="text-white animate-blink">|</span>
      </h1>
      <h1 className="text-[70px] leading-tight tracking-tight">With Your Data</h1>

      {/* Subtext */}
      <p className="text-gray-300 text-lg max-w-2xl mt-6 leading-relaxed">
        Make the best models with the best data. Scale Data Engine powers nearly every major foundation model and leverages your enterprise data to unlock the value of AI.
      </p>

      {/* CTA Buttons */}
      <div className="mt-8 flex space-x-6">
        {/* View Demo - Links to a separate page */}
        <button
          onClick={() => window.location.href = "/demo"}
          className="bg-white text-black font-semibold px-8 py-3 rounded-md hover:bg-gray-200 transition shadow-lg border border-gray-400"
        >
          View Demo →
        </button>

        {/* Our Services - Smooth Scroll */}
        <button
          onClick={scrollToServices}
          className="text-white border border-white px-8 py-3 rounded-md hover:bg-white hover:text-black transition shadow-lg"
        >
          Our Services
        </button>
      </div>

      {/* Floating 3D Elements */}
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
