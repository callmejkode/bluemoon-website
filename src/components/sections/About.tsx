import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import SearchOffIcon from '@mui/icons-material/SearchOff';
import DarkModeIcon from '@mui/icons-material/DarkMode'; 

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
  Turning an idea into a product is harder than it looks — especially for non-technical founders.  
  No clear starting point. No technical partner.  
  And when you finally find help, the process is slow, expensive, or completely misaligned with your vision.  
  The result? Wasted time, budget, and momentum.
</p>
    </>
  ),
  "Current Solutions": (
    <>
      <h3 className="text-3xl md:text-4xl font-bold mb-3 text-white">
        Current Solutions
      </h3>
      <div className="w-16 h-[2px] bg-purple-500 mb-4" />
      <p className="text-gray-300 text-[1.15rem] leading-relaxed">
  Yes, AI tools exist. Some generate code. Others help you design or build faster.  
  But most of them work in isolation. They support tasks — not outcomes.  
  You're still expected to lead the product, manage tech workflows, and make complex decisions.  
  For someone without a technical background, that becomes a full-time challenge.
</p>
    </>
  ),
  "Gaps": (
    <>
      <h3 className="text-3xl md:text-4xl font-bold mb-3 text-white">
        Gaps
      </h3>
      <div className="w-16 h-[2px] bg-purple-500 mb-4" />
      <p className="text-gray-300 text-[1.15rem] leading-relaxed">
  The expectation that a solo founder can build, manage, and launch a tech product — even with AI — is unrealistic.  
  You’re juggling product strategy, UX, development, QA, and delivery.  
  It's too much for one person, especially when every decision impacts the future of your idea.  
  Without a structured team or system, most ideas fade before they ever reach users.
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
  BlueMoon transforms how products get built.  
  Instead of handing you tools, we provide a system of AI-powered agents — from architecture and development to testing and launch.  
  Each agent is trained to think, act, and deliver like a real team member.  
  You share your idea. BlueMoon does the rest — fast, aligned, and end-to-end.
</p>
    </>
  ),
};

export default function About() {
  const [activeTab, setActiveTab] = useState<TabKey>("Problem");

  return (
<section className="bg-black text-white min-h-screen py-24 px-4 md:px-16">
<div className="text-center mb-16 max-w-4xl mx-auto">
  <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
    The Problem, The Reality &{" "}
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-500 to-blue-500">
      BlueMoon
    </span>{" "}
    Way
  </h2>
  <p className="text-gray-400 max-w-2xl mx-auto mb-12">
    From founder struggles to failed builds — we’ve seen it all. <br />
    Here’s how BlueMoon makes it simple, smart, and successful.
  </p>
</div>

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
