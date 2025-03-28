
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Workflow: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const points = [
    {
      number: "01",
      title: "Hire or Customize AI Agents",
      description:
        "Assign unique behaviors, personalities, and goals to each agent to reflect real-world teams",
      brief:"AI BlueMoon empowers you to build your own AI team by choosing from a lineup of pre-built expert agents such as Software Architect, Developer, QA, and HR. Each agent can be fully customized with domain-specific instructions, personality tone, and specialized expertise to match your unique workflow. Once configured, agents can be saved and reused across projects, making them reliable assets for both rapid prototyping and full-scale enterprise application development. Whether you're building something new or scaling an existing system, the right AI agent is always just a click away.",
      animation: { x: -100, opacity: 0 },
    },
    // {
    //   number: "02",
    //   title: "Collaborate in the AI Office",
    //   description:
    //     "Engage one-on-one or orchestrate multi-agent task pipelines in a live discussion interface",
    //   brief:"Step into the AI Office — a dynamic, visual workspace where AI agents operate like real teammates. Each agent appears as an interactive card, showcasing its role and activity status in real time. Simply assign tasks, and watch the discussion timeline fill with structured, role-based AI responses. The system delivers clean, formatted code snippets and auto-generated test cases, helping you move faster with clarity and precision. With execution tracking built-in, you can see exactly who contributed what, and when. It’s real AI teamwork — designed for real-world development.",
    //   animation: { y: 100, opacity: 0 },
    // },
    {
      number: "02",
      title: "Choose Your Workflow",
      description:
        "Whether it’s a quick reply or a full project flow — BlueMoon adapts to you to obtain your dream",
      brief:"AI BlueMoon offers two powerful ways to get work done. In Single-Agent Mode, you can talk directly to a specific agent — like asking QA to write test cases, or requesting the Developer to build a component. For more complex tasks, switch to the Multi-Agent Workflow, where your input is intelligently routed through a sequence: the Software Architect defines the structure, the Developer generates the code, and the QA agent validates it with automated testing. This chain mirrors real development team dynamics — all executed seamlessly within a unified AI environment.",
      animation: { x: 100, opacity: 0 },
    },
    {
        number: "03",
        title: "Collaborate in the AI Office",
        description:
          "Engage one-on-one or orchestrate multi-agent task pipelines in a live discussion interface",
        brief:"Step into the AI Office — a dynamic, visual workspace where AI agents operate like real teammates. Each agent appears as an interactive card, showcasing its role and activity status in real time. Simply assign tasks, and watch the discussion timeline fill with structured, role-based AI responses. The system delivers clean, formatted code snippets and auto-generated test cases, helping you move faster with clarity and precision. With execution tracking built-in, you can see exactly who contributed what, and when. It’s real AI teamwork — designed for real-world development.",
        animation: { y: 100, opacity: 0 },
      },
  ];

  return (
    <section className="py-20 bg-black text-white text-center">
      {/* Heading */}
      <motion.div
        className="mb-12"
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-semibold">
          How The <span className="text-gradient">App Works</span>
        </h2>
        <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
          It is a long established fact that a reader will be of a page when
          established fact looking at its layout
        </p>
      </motion.div>

      {/* Info Cards */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto"
      >
        {points.map((point, index) => {
          const isExpanded = expandedIndex === index;

          return (
            <AnimatePresence key={index}>
              {(expandedIndex === null || isExpanded) && (
                <motion.div
                  layout
                  key={isExpanded ? `expanded-${index}` : `card-${index}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                  className={`${
                    isExpanded ? "col-span-1 md:col-span-3" : ""
                  } bg-[#0d0d0d] rounded-lg text-left p-6 w-full`}
                  style={{
                    boxShadow:
                      "rgba(255, 255, 255, 0.05) 0px 4px 10px, rgba(0, 0, 0, 0.3) 0px 2px 6px",
                  }}
                >
                  <motion.h3
                    layout="position"
                    className="text-6xl font-bold text-purple-400 mb-2"
                  >
                    {point.number}
                  </motion.h3>
                  <motion.h4
                    layout="position"
                    className="text-xl font-semibold mb-3"
                  >
                    {point.title}
                  </motion.h4>

                  <motion.p layout className="text-gray-400">
                    {point.description}
                  </motion.p>

                  {/* Expandable Content */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        key="expand-content"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.4 }}
                        className="mt-6"
                      >
                        <p className="text-gray-300">
                        {point.brief}
                        </p>
                        <button
                          onClick={() => setExpandedIndex(null)}
                          className="mt-6 px-4 py-2 border border-red-500 text-red-400 hover:text-white hover:border-white rounded-md transition-all"
                        >
                          ✖ Close
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {!isExpanded && (
                    <button
                      onClick={() => setExpandedIndex(index)}
                      className="mt-4 px-4 py-2 border border-gray-500 rounded-md text-gray-300 hover:text-white hover:border-white transition-all"
                    >
                      View More →
                    </button>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Workflow;
