import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Slice labels and values
const data = [
  { label: "OpenAI", value: 25 },
  { label: "Google", value: 20 },
  { label: "Meta", value: 15 },
  { label: "Cohere", value: 10 },
  { label: "Specialized Agents", value: 30 },
];

const colors = [
    "#9F7AEA", // Soft Neon Purple
    "#D946EF", // Vivid Fuchsia Pink
    "#F472B6", // Rose Pink
    "#818CF8", // Indigo Blue
    "#38BDF8", // Sky Blue (can keep this one for brightness balance)
  ];

const FoundationModels: React.FC = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setAnimate(true), 300);
    return () => clearTimeout(timeout);
  }, []);

  // Total for calculating percentages
  const total = data.reduce((sum, item) => sum + item.value, 0);

  let cumulative = 0;

  return (
    <section className="flex flex-col items-center justify-center py-20 bg-black text-white font-sans">
      <h2 className="text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400">
        Foundation Models
      </h2>
      <p className="text-center max-w-2xl text-gray-300 mb-10 px-4">
        AI BlueMoon integrates OpenAI Assistants API and other leading LLMs to power specialized agents —
        from Software Architects to QA — with reliable and context-aware reasoning.
      </p>

      <div className="relative w-60 h-60">
        <svg width="100%" height="100%" viewBox="0 0 32 32" className="rotate-[-90deg]">
          {data.map((item, index) => {
            const startAngle = (cumulative / total) * 2 * Math.PI;
            cumulative += item.value;
            const endAngle = (cumulative / total) * 2 * Math.PI;

            const x1 = 16 + 16 * Math.cos(startAngle);
            const y1 = 16 + 16 * Math.sin(startAngle);
            const x2 = 16 + 16 * Math.cos(endAngle);
            const y2 = 16 + 16 * Math.sin(endAngle);
            const largeArc = endAngle - startAngle > Math.PI ? 1 : 0;

            return (
              <motion.path
                key={index}
                initial={{ pathLength: 0 }}
                animate={animate ? { pathLength: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.3 }}
                d={`M16 16 L ${x1} ${y1} A 16 16 0 ${largeArc} 1 ${x2} ${y2} Z`}
                fill={colors[index]}
                stroke="#0f172a"
                strokeWidth="0.5"
              />
            );
          })}
        </svg>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap justify-center gap-6 mt-8">
        {data.map((item, index) => (
          <div key={index} className="flex items-center space-x-2">
            <span
              className="w-3 h-3 rounded-full inline-block shadow-md"
              style={{ backgroundColor: colors[index] }}
            ></span>
            <span className="text-sm text-white">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FoundationModels;
