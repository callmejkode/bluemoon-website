// import React, { useState } from "react";
// import { FaArrowRight } from "react-icons/fa";

// const WhyChooseUs: React.FC = () => {
//   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

//   const points = [
//     {
//       title: "Fine-Tuning and RLHF",
//       description:
//         "Adapt best-in-class foundation models to your business and your specific data to build sustainable, successful AI programs and data from your enterprise.",
//     },
//     {
//       title: "Foundation Models",
//       description:
//         "Scale partners or integrates with all of the leading AI models, from open-source to closed-source, including OpenAI, Google, Meta, Cohere, and more.",
//     },
//     {
//       title: "Enterprise Data",
//       description:
//         "Scale's Data Engine enables you to integrate your enterprise data into the fold of these models, providing the base for long-term strategic differentiation.",
//     },
//   ];

//   return (
//     <section id="why-choose-us" className="relative py-20 bg-black text-white">
//       {/* Top Content */}
//       <div className="flex flex-col items-center text-center mb-10">
//         <span className="px-4 py-1 border border-white rounded-full text-sm text-gray-300">
//           AI FOR THE ENTERPRISE
//         </span>
//         <h2 className="text-4xl font-bold mt-4">Generative AI Architecture</h2>
//         <p className="text-gray-400 mt-3 max-w-2xl">
//           Whether you're building your own models or applying foundation models to your business, data remains the biggest bottleneck to AI.
//         </p>
//         <button className="mt-6 flex items-center gap-2 px-6 py-2 border border-gray-500 rounded-md text-gray-300 hover:text-white hover:border-white transition-all">
//           Book a Demo <FaArrowRight className="transition-transform duration-200 group-hover:translate-x-1" />
//         </button>
//       </div>

//       {/* Main Content */}
//       <div className="flex justify-center items-center gap-10">
//         {/* Left Side: Hover Effect Sections */}
//         <div className="flex flex-col space-y-6">
//           {points.map((point, index) => (
//             <div
//               key={index}
//               className={`p-6 rounded-lg transition-all border border-transparent hover:border-white cursor-pointer ${
//                 hoveredIndex === index ? "bg-opacity-100" : "bg-opacity-30"
//               }`}
//               onMouseEnter={() => setHoveredIndex(index)}
//               onMouseLeave={() => setHoveredIndex(null)}
//             >
//               <h3 className="text-xl font-semibold">{point.title}</h3>
//               <p className="text-gray-400 mt-2">{point.description}</p>
//             </div>
//           ))}
//         </div>

//         {/* Right Side: Dynamic SVG Change */}
//         <div className="w-1/2 flex justify-center items-center">
//           <img
//             src="/dummy-svg.svg"
//             alt="Why Choose Us Visual"
//             className={`w-96 transition-all duration-500 ${hoveredIndex !== null ? "opacity-100 scale-105" : "opacity-50"}`}
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyChooseUs;

import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const WhyChooseUs: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const points = [
    {
      title: "Fine-Tuning and RLHF",
      description:
        "Adapt best-in-class foundation models to your business and your specific data to build sustainable, successful AI programs and data from your enterprise.",
    },
    {
      title: "Foundation Models",
      description:
        "Scale partners or integrates with all of the leading AI models, from open-source to closed-source, including OpenAI, Google, Meta, Cohere, and more.",
    },
    {
      title: "Enterprise Data",
      description:
        "Scale's Data Engine enables you to integrate your enterprise data into the fold of these models, providing the base for long-term strategic differentiation.",
    },
  ];

  return (
    <section id="why-choose-us" className="relative py-20 bg-black text-white">
      {/* Top Content */}
      <div className="flex flex-col items-center text-center mb-10">
        <span className="px-4 py-1 border border-white rounded-full text-sm text-gray-300">
          AI FOR THE ENTERPRISE
        </span>
        <h2 className="text-4xl font-bold mt-4">Generative AI Architecture</h2>
        <p className="text-gray-400 mt-3 max-w-2xl">
          Whether you're building your own models or applying foundation models to your business, data remains the biggest bottleneck to AI.
        </p>
        <button className="mt-6 flex items-center gap-2 px-6 py-2 border border-gray-500 rounded-md text-gray-300 hover:text-white hover:border-white transition-all">
          Book a Demo <FaArrowRight className="transition-transform duration-200 group-hover:translate-x-1" />
        </button>
      </div>

      {/* Main Content */}
      <div className="flex justify-center items-center gap-10">
        {/* Left Side: Hover Effect Sections */}
        <div className="flex flex-col space-y-6 w-1/2">
          {points.map((point, index) => (
            <div
              key={index}
              className={`p-6 border-b border-gray-700 transition-all cursor-pointer ${
                hoveredIndex === index ? "border-b-white opacity-100" : "opacity-50"
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <h3 className="text-xl font-semibold">{point.title}</h3>
              <p className="text-gray-400 mt-2">{point.description}</p>
            </div>
          ))}
        </div>

        {/* Right Side: Dynamic SVG Change */}
        <div className="w-1/2 flex justify-center items-center">
          <img
            src={`/images/svg-${hoveredIndex !== null ? hoveredIndex : "default"}.svg`}
            alt="Why Choose Us Visual"
            className={`w-96 transition-all duration-500 ${
              hoveredIndex !== null ? "opacity-100 scale-105" : "opacity-50"
            }`}
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
