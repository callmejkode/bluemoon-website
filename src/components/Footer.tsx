
import React from "react";
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';

interface FooterProps {
  refs: {
    aboutRef: React.MutableRefObject<HTMLDivElement | null>;
    workflowRef: React.MutableRefObject<HTMLDivElement | null>;
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
      <div className="container mx-auto px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 py-12">
        {/* First Section: BlueMoon */}
        <div className="col-span-2 space-y-2">
          <h1 className="text-2xl font-semibold">AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-500 to-blue-500">
          BlueMoon
        </span></h1>
          <p className="text-gray-400 max-w-sm leading-relaxed">
            <span className="font-semibold" style={{lineHeight: 'normal' }}>
            AI BlueMoon is your intelligent workspace for building smarter, faster solutions. From architecture to testing, our AI agents collaborate like real teams to streamline every phase of your product lifecycle</span>
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
                onClick={() => scrollToSection(refs.workflowRef)}
                className="hover:text-white transition"
              >
                Workflow
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
          Intelligence thrives where agents align, collaborate, and bridge gaps —{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
            it’s AI made human
            </span>
          </h3>
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-8 space-y-4 sm:space-y-0 text-gray-400 mt-6">
     
  <div className="flex items-center space-x-2">
    <AddIcCallIcon className="text-blue-400" />
    <a href="tel:6380741363" className="hover:text-white transition">
      +91 638-0741-363
    </a>
  </div>

  {/* Email - Clickable */}
  <div className="flex items-center space-x-2">
    <ForwardToInboxIcon className="text-yellow-400" />
    <a href="mailto:karthik.j@payoda.com" className="hover:text-white transition">
      karthik.j@payoda.com
    </a>
  </div>

 
</div>

        </div>
      </div>

      {/* Bottom Section: Copyright */}
      <div className="text-center text-gray-500 text-sm mt-8 border-t border-gray-700 py-4">
        &copy; {new Date().getFullYear()} BlueMoon. All rights reserved to Payoda
      </div>
    </footer>
  );
};

export default Footer;
