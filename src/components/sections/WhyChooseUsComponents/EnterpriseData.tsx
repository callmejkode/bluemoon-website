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
// const EnterpriseData: React.FC = () => {
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

import React from "react";
import { motion } from "framer-motion";

interface Props {
  compact?: boolean;
}

const data = [
  { label: "Task Automation", value: 85 },
  { label: "Delivery Speed", value: 70 },
  { label: "Code Consistency", value: 90 },
  { label: "Testing Accuracy", value: 75 },
  { label: "Release Reliability", value: 65 },
];

const EnterpriseData: React.FC<Props> = ({ compact }) => {
  return (
    <div className="w-full px-4 py-10 text-white flex flex-col items-center justify-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 text-transparent bg-clip-text">
        Enterprise Data Impact
      </h2>

      <div className="w-full max-w-4xl h-[250px] md:h-[300px] flex flex-wrap justify-center items-end gap-4 sm:gap-6">
        {data.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-end items-center w-[17%] min-w-[60px]"
          >
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: `${item.value}%` }}
              transition={{ duration: 1 + idx * 0.3 }}
              className="w-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 shadow-xl rounded-t-md"
              style={{ minHeight: "10px" }}
            />
            <p className="mt-3 text-[0.7rem] text-center text-gray-300 leading-tight break-words">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EnterpriseData;
