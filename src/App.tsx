import React, { useRef, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/sections/Hero"; 
import About from "./components/sections/About";
import Workflow from "./components/sections/Workflow";
import WhyChooseUs from "./components/sections/WhyChooseUs";
import Services from "./components/sections/Services";
import Contact from "./components/sections/Contact";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";

const App: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const workflowRef = useRef<HTMLDivElement | null>(null);
  const chooseRef = useRef<HTMLDivElement | null>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500); // keep in sync with animation duration
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="scroll-smooth relative">
      {/* Preloader stays mounted but animates away when loading = false */}
      <Preloader loading={loading} />

      {/* Main Site */}
      <Navbar refs={{ aboutRef, workflowRef, chooseRef, servicesRef, contactRef }} />
      <Hero servicesRef={servicesRef} loading={loading} />
      
      <div ref={aboutRef} >
  <About />
</div>

      <div ref={workflowRef}>
        < Workflow/>
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
      <Footer refs={{ aboutRef, workflowRef, chooseRef, servicesRef, contactRef }} />
    </div>
  );
};

export default App;
