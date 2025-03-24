import React, { useState } from "react";
import arch from '../../asset/arch.png';
// import in0 from '../../asset/in0.svg';
import in1 from '../../asset/in1.png';
// import in2 from '../../asset/in2.svg';
const WhyChooseUs: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const points = [
    {
      title: "Fine-Tuning and RLHF",
      description:
        "Customize agent behaviors and decision-making with domain-specific instructions and continuous feedback — enabling smarter, role-aware outputs across planning, development, and testing.",
    },
    {
      title: "Foundation Models",
      description:
        "AI BlueMoon integrates OpenAI Assistants API and other leading LLMs to power specialized agents — from Software Architects to QA — with reliable and context-aware reasoning.",
    },
    {
      title: "Enterprise Data",
      description:
        "Inject your enterprise data into AI BlueMoon’s collaborative agent engine to automate task pipelines, accelerate delivery, and ensure consistency across all code, test, and release workflows.",
    },
  ];

  return (
    <section id="why-choose-us" className="relative py-20 bg-black text-white">
      {/* Top Content */}
      <div className="flex flex-col items-center text-center mb-10">
        <span className="px-4 py-1 border border-white rounded-full text-sm text-gray-300">
        Built for Real-World Teams
        </span>
        <h2 className="text-4xl font-bold mt-4">AI BlueMoon isn’t just a chatbot</h2>
        <p className="text-gray-400 mt-3 max-w-2xl">
        From Software Architecture to Development to Testing, every role is powered by specialized agents working in sync.
        </p>
        <button className="mt-6 flex items-center gap-2 px-6 py-2 border border-gray-500 rounded-md text-gray-300 hover:text-white hover:border-white transition-all">
         View Demo →
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
            src={`${hoveredIndex !== null ? in1 : arch}`}
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
