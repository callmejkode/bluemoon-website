// // About.tsx (Slider Tab Style)
// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// const tabs = ["Problem", "Current Solutions", "Gaps", "BlueMoon Way"];
// type TabKey = typeof tabs[number];
// const content: Record<TabKey, React.ReactElement> = {
//   "Problem": (
//     <p className="text-lg text-gray-300">
//       Building a tech product is a dream for many — but a nightmare for most non-technical founders. <br />
//       No clue where to start. No tech co-founder. Endless meetings. <br />
//       And even if you get a team, it’s either too slow, too expensive, or just... doesn’t work.
//     </p>
//   ),
//   "Current Solutions": (
//     <ul className="list-disc list-inside text-lg text-gray-300 space-y-2">
//       <li><span className="text-white font-medium">Freelancers</span> – Affordable but unreliable. Hard to manage.</li>
//       <li><span className="text-white font-medium">Agencies</span> – Great on paper, expensive in reality.</li>
//       <li><span className="text-white font-medium">No-Code Platforms</span> – Easy to start, impossible to scale.</li>
//       <li><span className="text-white font-medium">Hiring a Tech Co-founder</span> – If you're lucky enough to find one who believes in your idea.</li>
//     </ul>
//   ),
//   "Gaps": (
//     <p className="text-lg text-gray-300">
//       Each of these paths comes with trade-offs:<br />
//       You spend weeks onboarding. You spend thousands prototyping. You lose sleep managing. <br />
//       And sometimes, you end up with... nothing.
//     </p>
//   ),
//   "BlueMoon Way": (
//     <p className="text-lg text-gray-300">
//       That’s where <span className="text-white font-bold">BlueMoon</span> steps in. <br />
//       A platform where your idea meets a team of AI-powered agents — ready to plan, build, and deliver your dream product. <br />
//       No technical jargon. No hiring headaches. No compromises. <br />
//       You describe it. We execute it. Like magic — but real.
//     </p>
//   )
// };

// export default function About() {
//   const [activeTab, setActiveTab] = useState<TabKey>("Problem");

//   return (
//     <section className="w-full min-h-screen bg-black text-white pt-24 pb-20 px-6 md:px-16">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
//           The Problem, The Reality <br/>& The BlueMoon Way
//         </h2>

//         {/* Tab Navigation */}
//         <div className="flex flex-wrap justify-center gap-4 mb-12">
//           {tabs.map((tab) => (
//             <button
//               key={tab}
//               onClick={() => setActiveTab(tab)}
//               className={`px-5 py-2 rounded-full border transition-all duration-300 font-medium text-sm md:text-base
//                 ${activeTab === tab ? "bg-white text-black" : "border-white text-white hover:bg-white hover:text-black"}`}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>

//         {/* Animated Content */}
//         <div className="min-h-[200px]">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={activeTab}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               transition={{ duration: 0.5 }}
//               className="text-center max-w-3xl mx-auto"
//             >
//               <h3 className="text-2xl font-semibold text-neon mb-6">{activeTab}</h3>
//               {content[activeTab]}
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </div>
//     </section>
//   );
// }


// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// const tabs = [
//   { id: "Problem", label: "01" },
//   { id: "Current Solutions", label: "02" },
//   { id: "Gaps", label: "03" },
//   { id: "BlueMoon Way", label: "04" }
// ] as const;

// type TabKey = (typeof tabs)[number]["id"];

// const content: Record<TabKey, React.ReactElement> = {
//   "Problem": (
//     <>
//       <h3 className="text-2xl md:text-3xl font-semibold mb-2">Problem</h3>
//       <div className="h-[1px] w-12 bg-red-500 mb-4" />
//       <p className="text-gray-300 text-lg">
//         Building a tech product is a dream for many — but a nightmare for most non-technical founders.
//         No clue where to start. No tech co-founder. Endless meetings. Even if you get a team, it’s either too slow, too expensive, or just... doesn’t work.
//       </p>
//     </>
//   ),
//   "Current Solutions": (
//     <>
//       <h3 className="text-2xl md:text-3xl font-semibold mb-2">Current Solutions</h3>
//       <div className="h-[1px] w-12 bg-red-500 mb-4" />
//       <ul className="text-gray-300 text-lg list-disc list-inside space-y-2">
//         <li><span className="text-white font-medium">Freelancers</span> – Affordable but unreliable.</li>
//         <li><span className="text-white font-medium">Agencies</span> – Great on paper, expensive in reality.</li>
//         <li><span className="text-white font-medium">No-Code Tools</span> – Easy to start, but impossible to scale.</li>
//         <li><span className="text-white font-medium">Tech Co-founders</span> – If you’re lucky enough to find one who believes in your idea.</li>
//       </ul>
//     </>
//   ),
//   "Gaps": (
//     <>
//       <h3 className="text-2xl md:text-3xl font-semibold mb-2">Gaps</h3>
//       <div className="h-[1px] w-12 bg-red-500 mb-4" />
//       <p className="text-gray-300 text-lg">
//         Every one of those options comes with a cost: lost time, lost money, or worse — a dead idea.
//         You spend weeks onboarding, thousands prototyping, and sleepless nights managing. 
//         And sometimes, you’re left with… nothing.
//       </p>
//     </>
//   ),
//   "BlueMoon Way": (
//     <>
//       <h3 className="text-2xl md:text-3xl font-semibold mb-2">The BlueMoon Way</h3>
//       <div className="h-[1px] w-12 bg-red-500 mb-4" />
//       <p className="text-gray-300 text-lg">
//         That’s where <span className="text-white font-bold">BlueMoon</span> steps in.
//         A platform where your idea meets a team of AI-powered agents — ready to plan, build, and deliver.
//         No technical jargon. No hiring drama. Just pure execution.
//       </p>
//     </>
//   ),
// };

// export default function About() {
//   const [activeTab, setActiveTab] = useState<TabKey>("Problem");

//   return (
//     <section className="bg-black text-white min-h-screen py-16 px-4 md:px-16">
//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        
//         {/* Left Tabs */}
//         <div className="flex md:flex-col gap-4">
//           {tabs.map((tab) => (
//             <button
//               key={tab.id}
//               onClick={() => setActiveTab(tab.id)}
//               className={`text-lg md:text-2xl font-bold w-16 h-16 flex items-center justify-center border
//                 transition-all duration-300 ${
//                   activeTab === tab.id
//                     ? "border-red-500 text-white scale-105"
//                     : "border-gray-700 text-gray-500 hover:border-red-500 hover:text-white"
//                 }`}
//             >
//               {tab.label}
//             </button>
//           ))}
//         </div>

//         {/* Right Content */}
//         <div className="flex-1">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={activeTab}
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: -20 }}
//               transition={{ duration: 0.5 }}
//               className="max-w-3xl"
//             >
//               {content[activeTab]}
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </div>
//     </section>
//   );
// }

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import SearchOffIcon from '@mui/icons-material/SearchOff';
import DarkModeIcon from '@mui/icons-material/DarkMode'; // Half-moon for BlueMoon

const tabs = [
  { id: "Problem", label: "Problem", icon: <ErrorOutlineIcon fontSize="large" /> },
  { id: "Current Solutions", label: "Solutions", icon: <BuildCircleIcon fontSize="large" /> },
  { id: "Gaps", label: "Gaps", icon: <SearchOffIcon fontSize="large" /> },
  { id: "BlueMoon Way", label: "BlueMoon", icon: <DarkModeIcon fontSize="large" /> }
] as const;

type TabKey = (typeof tabs)[number]["id"];

const content: Record<TabKey, React.ReactElement> = {
  "Problem": (
    <>
      <h3 className="text-3xl md:text-4xl font-bold mb-3 text-white">
        Problem
      </h3>
      <div className="w-16 h-[2px] bg-purple-500 mb-4" />
      <p className="text-gray-300 text-[1.15rem] leading-relaxed">
        Building a tech product is a dream for many — but a nightmare for most non-technical founders. <br />
        No clue where to start. No tech co-founder. Endless meetings. Even if you get a team, it’s either too slow, too expensive, or just... doesn’t work.
      </p>
    </>
  ),
  "Current Solutions": (
    <>
      <h3 className="text-3xl md:text-4xl font-bold mb-3 text-white">
        Current Solutions
      </h3>
      <div className="w-16 h-[2px] bg-purple-500 mb-4" />
      <ul className="text-gray-300 text-[1.15rem] leading-relaxed space-y-3">
        <li><span className="text-white font-medium">Freelancers</span> – Affordable but unreliable.</li>
        <li><span className="text-white font-medium">Agencies</span> – Great on paper, expensive in reality.</li>
        <li><span className="text-white font-medium">No-Code Tools</span> – Easy to start, but impossible to scale.</li>
        <li><span className="text-white font-medium">AI Code Generators</span> – Most AI tools just give you code. But for non-tech founders, raw code is still a black box.</li>
        <li><span className="text-white font-medium">Tech Co-founders</span> – If you're lucky enough to find one who believes in your idea.</li>
      </ul>
    </>
  ),
  "Gaps": (
    <>
      <h3 className="text-3xl md:text-4xl font-bold mb-3 text-white">
        Gaps
      </h3>
      <div className="w-16 h-[2px] bg-purple-500 mb-4" />
      <p className="text-gray-300 text-[1.15rem] leading-relaxed">
        Every one of those options comes with a cost: lost time, lost money, or worse — a dead idea.
        You spend weeks onboarding, thousands prototyping, and sleepless nights managing.
        And sometimes, you’re left with… nothing.
      </p>
    </>
  ),
  "BlueMoon Way": (
    <>
      <h3 className="text-3xl md:text-4xl font-bold mb-3 text-white">
        The <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-500 to-blue-500">
          BlueMoon
        </span> Way
      </h3>
      <div className="w-16 h-[2px] bg-purple-500 mb-4" />
      <p className="text-gray-300 text-[1.15rem] leading-relaxed">
        That’s where <span className="text-white font-bold">BlueMoon</span> steps in. <br />
        A platform where your idea meets a team of AI-powered agents — ready to plan, build, and deliver. <br />
        No technical jargon. No hiring drama. Just pure execution.
      </p>
    </>
  ),
};

export default function About() {
  const [activeTab, setActiveTab] = useState<TabKey>("Problem");

  return (
    <section className="bg-black text-white min-h-screen py-24 px-4 md:px-16 flex items-center justify-center">

      <div className="w-full max-w-7xl rounded-2xl border border-purple-800 bg-black/60 backdrop-blur-md shadow-[0_0_60px_#a855f720] p-8 md:p-12 flex flex-col md:flex-row gap-10">
        
        {/* Left Tabs with Icons */}
        <div className="flex md:flex-col gap-4 justify-center">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full md:w-48 flex items-center justify-center gap-3 px-4 py-3 rounded-lg border transition-all duration-300 text-lg font-medium
                ${
                  activeTab === tab.id
                    ? "border-purple-500 shadow-[0_0_20px_#a855f7] text-white bg-black/80"
                    : "border-gray-700 text-gray-400 hover:border-purple-400 hover:text-white"
                }`}
            >
              {tab.icon}
              <span className="hidden md:inline">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Right Content */}
        <div className="flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl"
            >
              {content[activeTab]}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
