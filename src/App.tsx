import React, { useRef, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/sections/Hero"; 
import About from "./components/sections/About";
import WhyChooseUs from "./components/sections/WhyChooseUs";
import Services from "./components/sections/Services";
import Contact from "./components/sections/Contact";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";

const App: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const chooseRef = useRef<HTMLDivElement | null>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Preloader />;

  return (
    <div className="scroll-smooth">
      <Navbar refs={{ aboutRef, chooseRef, servicesRef, contactRef }} />
      <Hero servicesRef={servicesRef} />
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
      <Footer refs={{ aboutRef, chooseRef, servicesRef, contactRef }} />
    </div>
  );
};

export default App;
