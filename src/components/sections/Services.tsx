// import React from "react";
// import SmartToyIcon from "@mui/icons-material/SmartToy";
// import BrandingWatermarkIcon from "@mui/icons-material/BrandingWatermark";
// import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
// import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

// function Services() {
//   const services = [
//     {
//       icon: <SmartToyIcon className="text-blue-400 text-[64px]" />, 
//       tag: "AI Chatbot",
//       title: "EmConversational AI Assistants",
//       href: "/services/ai-chatbot",
//     },
//     {
//       icon: <BrandingWatermarkIcon className="text-purple-400 text-[64px]" />,
//       tag: "Single Thread Agent",
//       title: "Task-Oriented AI Workflows",
//       href: "/services/single-thread-agent",
//     },
//     {
//       icon: <DynamicFeedIcon className="text-green-400 text-[64px]" />,
//       tag: "Multi-thread Agent",
//       title: "Collaborative AI Automation",
//       href: "/services/multi-thread-agent",
//     },
//   ];
  
//   return (
//     <section className="bg-black text-white py-20 px-6">
//       <div className="container mx-auto text-center">
//         {/* Section Heading */}
//         <h2 className="text-5xl mb-6">Our Services</h2>
//         <p className="text-gray-400 max-w-2xl mx-auto mb-12">
//           SEAL (Safety, Evaluations, and Alignment Lab) is our research initiative to improve model capabilities through challenging private evaluations and novel research.
//         </p>

//         {/* Cards Grid */}
//         <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-start">
//           {services.map((service, index) => (
//           <div
//           key={index}
//           className="relative flex gap-6 items-start p-6 rounded-2xl bg-[#141414] text-left shadow-[rgba(255,255,255,0.05)_0px_4px_10px,rgba(0,0,0,0.3)_0px_2px_6px] hover:shadow-lg transition-all min-h-[170px]"
//         >
//           {/* Left Icon */}
//           <div className="flex-shrink-0 mt-1">{service.icon}</div>
        
//           {/* Right Content */}
//           <div className="flex flex-col justify-center flex-grow pr-10">
//             <span className="text-sm text-purple-400 mb-1">{service.tag}</span>
//             <h3 className="text-lg font-semibold leading-snug mb-2">
//               {service.title}
//             </h3>
//             {/* 🆕 Small description below */}
//             <p className="text-gray-400 text-sm">
//               Automate conversations and enhance customer experience with smart interactions.
//             </p>
//           </div>
        
//           {/* CTA Icon */}
//           <a
//             href={service.href}
//             className="absolute bottom-4 right-4 w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center hover:border-white transition"
//           >
//             <ArrowOutwardIcon className="text-sm" />
//           </a>
//         </div>
        
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Services;


import React from "react";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import BrandingWatermarkIcon from "@mui/icons-material/BrandingWatermark";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

function Services() {
  const services = [
    {
      icon: <SmartToyIcon className="text-blue-400 text-[64px]" />,
      tag: "AI Chatbot",
      title: "EmConversational AI Assistants",
      description:
        "Automate conversations and enhance customer experience with smart interactions.",
      href: "/services/ai-chatbot",
    },
    {
      icon: <BrandingWatermarkIcon className="text-purple-400 text-[64px]" />,
      tag: "Single Thread Agent",
      title: "Task-Oriented AI Workflows",
      description:
        "Design streamlined workflows powered by AI to complete tasks with precision.",
      href: "/services/single-thread-agent",
    },
    {
      icon: <DynamicFeedIcon className="text-green-400 text-[64px]" />,
      tag: "Multi-thread Agent",
      title: "Collaborative AI Automation",
      description:
        "Empower agents to handle multiple tasks simultaneously and boost productivity.",
      href: "/services/multi-thread-agent",
    },
  ];

  return (
    <section className="bg-black text-white pb-20 px-6">
      <div className="container mx-auto pt-30 text-center">
        <h2 className="text-5xl mb-6">Our Services</h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          SEAL (Safety, Evaluations, and Alignment Lab) is our research initiative to improve model capabilities through challenging private evaluations and novel research.
        </p>

        {/* Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-start">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative flex gap-6 items-start p-6 rounded-2xl bg-[#141414] text-left shadow-[rgba(255,255,255,0.05)_0px_4px_10px,rgba(0,0,0,0.3)_0px_2px_6px] hover:shadow-lg transition-all min-h-[200px]"
            >
              {/* Left Icon */}
              <div className="flex-shrink-0 mt-1">{service.icon}</div>

              {/* Right Content */}
              <div className="flex flex-col justify-center flex-grow pr-10">
                <span className="text-sm text-purple-400 mb-1">{service.tag}</span>
                <h3 className="text-lg font-semibold leading-snug mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm">{service.description}</p>
              </div>

              {/* CTA Icon */}
              <a
                href={service.href}
                className="absolute bottom-4 right-4 w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center hover:border-white transition"
              >
                <ArrowOutwardIcon className="text-sm" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
