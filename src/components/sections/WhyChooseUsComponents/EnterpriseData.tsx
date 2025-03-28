// import React from "react";
// import { motion } from "framer-motion";

// const data = [
//   { label: "Task Automation", value: 85 },
//   { label: "Delivery Speed", value: 70 },
//   { label: "Code Consistency", value: 90 },
//   { label: "Testing Accuracy", value: 75 },
//   { label: "Release Reliability", value: 65 },
// ];
// interface Props {
//     compact?: boolean;
//   }
//   const EnterpriseData: React.FC<Props> = ({ compact }) => {
//   return (
//     <div className="w-full min-h-[500px] px-6 py-12 bg-black text-white flex flex-col items-center justify-center">
//       <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 text-transparent bg-clip-text">
//         Enterprise Data Impact
//       </h2>

//       <div className="w-full max-w-4xl h-[300px] flex items-end gap-6">
//         {data.map((item, idx) => (
//           <div key={idx} className="flex flex-col justify-end items-center w-full h-full">
//             {/* BAR */}
//             <motion.div
//               initial={{ height: 0 }}
//               animate={{ height: `${item.value}%` }}
//               transition={{ duration: 1 + idx * 0.3 }}
//               className="w-8 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 shadow-xl rounded-t-md"
//             />
//             {/* LABEL */}
//             <p className="mt-4 text-xs text-center text-gray-300 leading-tight">
//               {item.label}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default EnterpriseData;

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const data = [
  { label: "Task Automation", value: 85 },
  { label: "Delivery Speed", value: 70 },
  { label: "Code Consistency", value: 90 },
  { label: "Testing Accuracy", value: 75 },
  { label: "Release Reliability", value: 65 },
];

const colors = [
  "#38BDF8", // Sky Blue
  "#818CF8", // Indigo Blue
  "#F472B6", // Rose Pink
  "#D946EF", // Vivid Pink
  "#9F7AEA", // Purple
];

interface Props {
  compact?: boolean;
}

const EnterpriseData: React.FC<Props> = ({ compact }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setAnimate(true), 300);
    return () => clearTimeout(timeout);
  }, []);

  const total = data.reduce((sum, item) => sum + item.value, 0);
  let cumulative = 0;

  if (compact) {
    // Show PIE chart for mobile
    return (
      <div className="w-full px-6 py-12 bg-black text-white flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 text-transparent bg-clip-text">
          Enterprise Data Impact
        </h2>

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
        <div className="flex flex-wrap justify-center gap-4 mt-6">
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
      </div>
    );
  }

  // Show BAR chart for desktop
  return (
    <div className="w-full px-6 py-12 bg-black text-white flex flex-col items-center justify-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 text-transparent bg-clip-text">
        Enterprise Data Impact
      </h2>

      <div className="w-full max-w-4xl h-[300px] flex items-end gap-6">
        {data.map((item, idx) => (
          <div key={idx} className="flex flex-col justify-end items-center w-full h-full">
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: `${item.value}%` }}
              transition={{ duration: 1 + idx * 0.3 }}
              className="w-8 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 shadow-xl rounded-t-md"
            />
            <p className="mt-4 text-xs text-center text-gray-300 leading-tight">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EnterpriseData;
