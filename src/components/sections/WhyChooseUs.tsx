// import React, { useState, useEffect } from "react";
// import FineTuning from "./WhyChooseUsComponents/FineTuning";
// import FoundationModels from "./WhyChooseUsComponents/FoundationModels";
// import EnterpriseData from "./WhyChooseUsComponents/EnterpriseData";

// const WhyChooseUs: React.FC = () => {
//   const [activeIndex, setActiveIndex] = useState<number>(0);
//   const [isMobile, setIsMobile] = useState<boolean>(false);

//   // Detect screen size to toggle hover/click behavior
//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768); // Tailwind's `md`
//     };

//     handleResize(); // Call once initially
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const points = [
//     {
//       title: "Fine-Tuning and RLHF",
//       description:
//         "Customize agent behaviors and decision-making with domain-specific instructions and continuous feedback — enabling smarter, role-aware outputs across planning, development, and testing",
//     },
//     {
//       title: "Foundation Models",
//       description:
//         "AI BlueMoon integrates OpenAI Assistants API and other leading LLMs to power specialized agents — from Software Architects to QA — with reliable and context-aware reasoning",
//     },
//     {
//       title: "Enterprise Data",
//       description:
//         "Inject your enterprise data into AI BlueMoon’s collaborative agent engine to automate task pipelines, accelerate delivery, and ensure consistency across all code, test, and release workflows",
//     },
//   ];

//   const renderComponent = () => {
//     switch (activeIndex) {
//       case 0:
//         return <FineTuning compact={isMobile} />;
//       case 1:
//         return <FoundationModels compact={isMobile} />;
//       case 2:
//         return <EnterpriseData compact={isMobile} />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <section id="why-choose-us" className="relative py-20 bg-black text-white">
//       <div className="flex flex-col items-center text-center mb-10">
//         <span className="px-4 py-1 border border-white rounded-full text-sm text-gray-300">
//           Built for Real-World Teams
//         </span>
//         <h2 className="text-4xl font-bold mt-4">AI BlueMoon isn’t just a chatbot</h2>
//         <p className="text-gray-400 mt-3 max-w-2xl">
//           From Software Architecture to Development to Testing, every role is powered by specialized agents working in sync
//         </p>
//         <button
//           onClick={() => window.location.href = "http://localhost:5173/"}
//           className="mt-6 flex items-center gap-2 px-6 py-2 border border-gray-500 rounded-md text-gray-300 hover:text-white hover:border-white transition-all"
//         >
//           View Demo →
//         </button>
//       </div>

//       <div className="container mx-auto px-6 flex flex-col md:flex-row gap-10">
//         <div className="flex flex-col space-y-6 w-full pt-6 md:w-1/2">
//           {points.map((point, index) => (
//             <div
//               key={index}
//               onClick={() => isMobile && setActiveIndex(index)} // Click on mobile
//               onMouseEnter={() => !isMobile && setActiveIndex(index)} // Hover on desktop
//               className={`p-6 border-b border-gray-600 cursor-pointer transition-opacity duration-300 ${
//                 activeIndex === index ? "opacity-100" : "opacity-70"
//               }`}
//             >
//               <h3 className="text-lg md:text-xl font-semibold">{point.title}</h3>
//               <p className="text-sm md:text-base text-gray-400 mt-2">{point.description}</p>
//             </div>
//           ))}
//         </div>

//         <div className="w-full md:w-1/2 rounded-lg shadow-lg p-4 md:p-6 min-h-[400px] md:min-h-[550px] transition-all duration-500">
//           {renderComponent()}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyChooseUs;


import React, { useState, useEffect } from "react";
import FineTuning from "./WhyChooseUsComponents/FineTuning";
import FoundationModels from "./WhyChooseUsComponents/FoundationModels";
import EnterpriseData from "./WhyChooseUsComponents/EnterpriseData";

const WhyChooseUs: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const points = [
    {
      title: "Fine-Tuning and RLHF",
      description:
        "Customize agent behaviors and decision-making with domain-specific instructions and continuous feedback — enabling smarter, role-aware outputs across planning, development, and testing",
    },
    {
      title: "Foundation Models",
      description:
        "AI BlueMoon integrates OpenAI Assistants API and other leading LLMs to power specialized agents — from Software Architects to QA — with reliable and context-aware reasoning",
    },
    {
      title: "Enterprise Data",
      description:
        "Inject your enterprise data into AI BlueMoon’s collaborative agent engine to automate task pipelines, accelerate delivery, and ensure consistency across all code, test, and release workflows",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize(); // Call on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderComponent = () => {
    switch (activeIndex) {
      case 0:
        return <FineTuning compact={isMobile} />;
      case 1:
        return <FoundationModels compact={isMobile} />;
      case 2:
        return <EnterpriseData compact={isMobile} />;
      default:
        return null;
    }
  };

  return (
    <section id="why-choose-us" className="relative py-20 bg-black text-white">
      <div className="flex flex-col items-center text-center mb-10">
        <span className="px-4 py-1 border border-white rounded-full text-sm text-gray-300">
          Built for Real-World Teams
        </span>
        <h2 className="text-4xl font-bold mt-4">AI BlueMoon isn’t just a chatbot</h2>
        <p className="text-gray-400 mt-3 max-w-2xl">
          From Software Architecture to Development to Testing, every role is powered by specialized agents working in sync
        </p>
        <button
          onClick={() => window.location.href = "http://localhost:5173/"}
          className="mt-6 flex items-center gap-2 px-6 py-2 border border-gray-500 rounded-md text-gray-300 hover:text-white hover:border-white transition-all"
        >
          View Demo →
        </button>
      </div>

      <div className="container mx-auto px-6 flex flex-col md:flex-row gap-10">
        <div className="flex flex-col space-y-6 w-full pt-6 md:w-1/2">
          {points.map((point, index) => (
            <div
              key={index}
              onMouseEnter={() => !isMobile && setActiveIndex(index)}
              onClick={() => isMobile && setActiveIndex(index)}
              className={`p-6 border-b border-gray-600 cursor-pointer transition-opacity duration-300 ${
                activeIndex === index ? "opacity-100" : "opacity-70"
              }`}
            >
              <h3 className="text-lg md:text-xl font-semibold">{point.title}</h3>
              <p className="text-gray-400 mt-2 text-sm md:text-base">{point.description}</p>
            </div>
          ))}
        </div>

        <div className="w-full md:w-1/2 rounded-lg shadow-lg p-6 min-h-[500px] transition-all duration-500">
          {renderComponent()}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
