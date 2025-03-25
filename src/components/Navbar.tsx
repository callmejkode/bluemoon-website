import React from "react";

interface NavbarProps {
  refs: {
    aboutRef: React.MutableRefObject<HTMLDivElement | null>;
    chooseRef: React.MutableRefObject<HTMLDivElement | null>;
    servicesRef: React.MutableRefObject<HTMLDivElement | null>;
    contactRef: React.MutableRefObject<HTMLDivElement | null>;
  };
}

const Navbar: React.FC<NavbarProps> = ({ refs }) => {
  // Function to handle smooth scrolling
  const scrollToSection = (ref: React.MutableRefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white z-10">
      <div className="container mx-auto flex justify-between items-center px-6 py-4 border-b border-gray-600 w-[90%] mx-auto opacity-70">
        {/* Logo */}
        <h1 className="text-2xl font-semibold text-white">AI BlueMoon</h1>

        {/* Navigation Links - Centered */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium tracking-wide">
          <li>
            <button
              onClick={() => scrollToSection(refs.aboutRef)}
              className="relative text-white hover:text-gray-300 transition after:absolute after:bottom-0 after:left-0 after:right-0 after:mx-auto after:w-0 after:h-[1px] after:bg-gray-400 after:content-[''] after:transition-all after:duration-300 hover:after:w-full"
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection(refs.chooseRef)}
              className="relative text-white hover:text-gray-300 transition after:absolute after:bottom-0 after:left-0 after:right-0 after:mx-auto after:w-0 after:h-[1px] after:bg-gray-400 after:content-[''] after:transition-all after:duration-300 hover:after:w-full"
            >
              Why Choose Us
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection(refs.servicesRef)}
              className="relative text-white hover:text-gray-300 transition after:absolute after:bottom-0 after:left-0 after:right-0 after:mx-auto after:w-0 after:h-[1px] after:bg-gray-400 after:content-[''] after:transition-all after:duration-300 hover:after:w-full"
            >
              Services
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection(refs.contactRef)}
              className="relative text-white hover:text-gray-300 transition after:absolute after:bottom-0 after:left-0 after:right-0 after:mx-auto after:w-0 after:h-[1px] after:bg-gray-400 after:content-[''] after:transition-all after:duration-300 hover:after:w-full"
            >
              Contact Us
            </button>
          </li>
        </ul>

        {/* View Demo Button (Boxed with slight border-radius) */}
        <button
          onClick={() => window.location.href = "/demo"}
          className="bg-gray-700 text-white font-semibold px-6 py-2 rounded-md hover:bg-gray-600 transition shadow-md"
        >
          View Demo →
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

