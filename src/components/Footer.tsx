
import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

interface FooterProps {
  refs: {
    aboutRef: React.MutableRefObject<HTMLDivElement | null>;
    chooseRef: React.MutableRefObject<HTMLDivElement | null>;
    servicesRef: React.MutableRefObject<HTMLDivElement | null>;
    contactRef: React.MutableRefObject<HTMLDivElement | null>;
  };
}

const Footer: React.FC<FooterProps> = ({ refs }) => {
  // Function for smooth scrolling
  const scrollToSection = (ref: React.MutableRefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-black text-white pt-12">
      <div className="container mx-auto px-8 grid grid-cols-5 py-12">
        {/* First Section: BlueMoon */}
        <div className="col-span-2 space-y-2">
          <h1 className="text-2xl font-semibold">BlueMoon</h1>
          <p className="text-gray-400 max-w-sm leading-relaxed">
            <br />
            <span className="font-semibold">
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium debitis velit, expedita nam excepturi dolores! Laborum quod quia velit."
            </span>
          </p>
        </div>

        {/* Second Section: Useful Links (Smooth Scroll) */}
        <div className="col-span-1">
          <h2 className="text-lg font-semibold mb-4">Useful Links</h2>
          <ul className="space-y-2 text-gray-400">
            <li>
              <button
                onClick={() => scrollToSection(refs.aboutRef)}
                className="hover:text-white transition"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection(refs.chooseRef)}
                className="hover:text-white transition"
              >
                Why Choose Us
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection(refs.servicesRef)}
                className="hover:text-white transition"
              >
                Services
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection(refs.contactRef)}
                className="hover:text-white transition"
              >
                Contact Us
              </button>
            </li>
          </ul>
        </div>

        {/* Third Section: Contact Information */}
        <div className="col-span-2">
          <h3 className="text-2xl font-semibold mb-4">
            Information is separate from both knowledge and data, and lies nebulously between them.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              it is information about objets.
            </span>
          </h3>
          <div className="flex space-x-8 text-gray-400">
  {/* Phone - Clickable */}
  <div className="flex items-center space-x-2">
    <FaPhone className="text-blue-400" />
    <a href="tel:6380741363" className="hover:text-white transition">
      +91 638-0741-363
    </a>
  </div>

  {/* Email - Clickable */}
  <div className="flex items-center space-x-2">
    <FaEnvelope className="text-yellow-400" />
    <a href="mailto:karthik.j@payoda.com" className="hover:text-white transition">
      karthik.j@payoda.com
    </a>
  </div>

 
</div>

        </div>
      </div>

      {/* Bottom Section: Copyright */}
      <div className="text-center text-gray-500 text-sm mt-8 border-t border-gray-700 py-4">
        &copy; {new Date().getFullYear()} BlueMoon. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
