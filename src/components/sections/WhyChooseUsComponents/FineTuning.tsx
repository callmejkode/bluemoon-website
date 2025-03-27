// // FineTuningRoadmap.tsx
// import React from "react";
// import { motion } from "framer-motion";

// const stages = [
//   {
//     title: "Planning",
//     description:
//       "Customize agent behaviors aligned to enterprise goals. Outline domain-specific logic and instructions.",
//   },
//   {
//     title: "Development & Testing",
//     description:
//       "Incorporate role-aware architecture and dynamic feedback loops for smarter decision-making and validate agent behavior with continuous RLHF strategies to ensure accuracy, consistency, and learning.",
//   },
//   {
//     title: "Deployment & Iteration",
//     description:
//       "Deploy fine-tuned agents into production with adaptive capabilities across diverse enterprise scenarios. Collect real-world feedback, fine-tune continuously, and improve model performance over time.",
//   },
// ];
// interface Props {
//     compact?: boolean;
//   }
// const FineTuningRoadmap: React.FC = () => {
//   return (
//     <div className="bg-black text-white py-6 px-2 flex justify-center items-start min-h-[400px] md:min-h-[500px]">
//       <div className="max-w-md w-full relative pl-6">
//         {/* Vertical Line */}
//         <motion.div
//           initial={{ height: 0 }}
//           animate={{ height: "100%" }}
//           transition={{ duration: stages.length * 1.2, ease: "easeInOut" }}
//           className="absolute left-1 top-2 w-[2px] bg-gradient-to-b from-cyan-400 to-white"
//         />

//         {stages.map((stage, index) => (
//           <motion.div
//             key={index}
//             className="mb-12 relative"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: index * 1.2, duration: 0.8 }}
//           >
//             <motion.div
//               initial={{ scale: 0.5, opacity: 0.4 }}
//               animate={{ scale: 1, opacity: 1 }}
//               transition={{ delay: index * 1.2 }}
//               className={`w-4 h-4 rounded-full absolute -left-[30px] ${
//                 index === stages.length - 1 ? "bg-cyan-400" : "bg-white"
//               } shadow-md shadow-cyan-400`}
//             />
//             <h3 className="text-lg font-bold capitalize mb-2">{stage.title}</h3>
//             <p className="text-sm text-gray-300">{stage.description}</p>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FineTuningRoadmap;


import React from "react";
import { motion } from "framer-motion";

interface Props {
  compact?: boolean;
}

const stages = [
  {
    title: "Planning",
    description: "Customize agent behaviors aligned to enterprise goals. Outline domain-specific logic and instructions.",
  },
  {
    title: "Development & Testing",
    description: "Incorporate role-aware architecture and feedback loops. Validate agents with continuous RLHF.",
  },
  {
    title: "Deployment & Iteration",
    description: "Deploy agents, collect feedback, and fine-tune continuously to improve performance over time.",
  },
];

const FineTuning: React.FC<Props> = ({ compact }) => {
  return (
    <div className={`${compact ? "py-6 px-2" : "py-12 px-6"} bg-black text-white`}>
      <div className="max-w-md w-full relative pl-6">
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "100%" }}
          transition={{ duration: stages.length * 1.2, ease: "easeInOut" }}
          className="absolute left-1 top-2 w-[2px] bg-gradient-to-b from-cyan-400 to-white"
        />

        {stages.map((stage, index) => (
          <motion.div
            key={index}
            className="mb-12 relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 1.2, duration: 0.8 }}
          >
            <div
              className={`w-4 h-4 rounded-full absolute -left-[30px] ${
                index === stages.length - 1 ? "bg-cyan-400" : "bg-white"
              } shadow-md shadow-cyan-400`}
            />
            <h3 className="text-base md:text-lg font-bold capitalize mb-1">{stage.title}</h3>
            <p className="text-sm text-gray-300">{stage.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FineTuning;
