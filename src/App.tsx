import React, { useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/sections/Hero"; 
import About from "./components/sections/About";
import WhyChooseUs from "./components/sections/WhyChooseUs";
import Services from "./components/sections/Services";
import Contact from "./components/sections/Contact";
import Footer from "./components/Footer"

const App: React.FC = () => {
  // Use MutableRefObject to correctly handle null values
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const chooseRef = useRef<HTMLDivElement | null>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  return (
    <div>
      {/* Pass references to Navbar */}
      <Navbar refs={{ aboutRef, chooseRef, servicesRef, contactRef }} />

      {/* Hero Section (Not in Navbar, Just an Intro Section) */}
      <Hero servicesRef={servicesRef} />

      {/* Sections with their respective refs */}
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={chooseRef}>
        <WhyChooseUs />
      </div>
      <div ref={servicesRef}>
        <Services />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer  refs={{ aboutRef, chooseRef, servicesRef, contactRef }}/>
    </div>
  );
};

export default App;
