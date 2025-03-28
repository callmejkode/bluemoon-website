// import React from "react";

// const Preloader: React.FC = () => {
//   return (
//     <div className="fixed inset-0 flex flex-col items-center justify-center bg-black text-white z-50">
//       <svg viewBox="0 0 100 100" className="w-24 h-24 mb-6">
//         <g
//           fill="none"
//           stroke="#fff"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth="6"
//         >
//           <path d="M 21 40 V 59">
//             <animateTransform
//               attributeName="transform"
//               type="rotate"
//               values="0 21 59; 180 21 59"
//               dur="2s"
//               repeatCount="indefinite"
//             />
//           </path>
//           <path d="M 79 40 V 59">
//             <animateTransform
//               attributeName="transform"
//               type="rotate"
//               values="0 79 59; -180 79 59"
//               dur="2s"
//               repeatCount="indefinite"
//             />
//           </path>
//           <path d="M 50 21 V 40">
//             <animate
//               attributeName="d"
//               values="M 50 21 V 40; M 50 59 V 40"
//               dur="2s"
//               repeatCount="indefinite"
//             />
//           </path>
//           <path d="M 50 60 V 79">
//             <animate
//               attributeName="d"
//               values="M 50 60 V 79; M 50 98 V 79"
//               dur="2s"
//               repeatCount="indefinite"
//             />
//           </path>
//           <path d="M 50 21 L 79 40 L 50 60 L 21 40 Z">
//             <animate
//               attributeName="stroke"
//               values="rgba(255,255,255,1); rgba(100,100,100,0)"
//               dur="2s"
//               repeatCount="indefinite"
//             />
//           </path>
//           <path d="M 50 40 L 79 59 L 50 79 L 21 59 Z" />
//           <path d="M 50 59 L 79 78 L 50 98 L 21 78 Z">
//             <animate
//               attributeName="stroke"
//               values="rgba(100,100,100,0); rgba(255,255,255,1)"
//               dur="2s"
//               repeatCount="indefinite"
//             />
//           </path>
//           <animateTransform
//             attributeName="transform"
//             type="translate"
//             values="0 0; 0 -19"
//             dur="2s"
//             repeatCount="indefinite"
//           />
//         </g>
//       </svg>
//       <p className="text-xl font-medium tracking-wide">Your Dream, Our Code, Infinite Possibilities</p>
//     </div>
//   );
// };

// export default Preloader;


import React, { useEffect, useState } from "react";

interface PreloaderProps {
  loading: boolean;
}

const Preloader: React.FC<PreloaderProps> = ({ loading }) => {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    if (!loading) {
      // Start the hide animation
      setTimeout(() => setHide(true), 800); // Delay to match animation
    }
  }, [loading]);

  return (
    <div
      className={`fixed inset-0 flex flex-col items-center justify-center bg-black text-white z-50 transition-all duration-1000 ease-in-out
        ${!loading ? "opacity-0 -translate-y-full pointer-events-none" : "opacity-100 translate-y-0"}
        ${hide ? "hidden" : ""}`}
    >
      <svg viewBox="0 0 100 100" className="w-24 h-24 mb-6">
        <g
          fill="none"
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="6"
        >
          {/* Animating Paths */}
          <path d="M 21 40 V 59">
            <animateTransform attributeName="transform" type="rotate" values="0 21 59; 180 21 59" dur="2s" repeatCount="indefinite" />
          </path>
          <path d="M 79 40 V 59">
            <animateTransform attributeName="transform" type="rotate" values="0 79 59; -180 79 59" dur="2s" repeatCount="indefinite" />
          </path>
          <path d="M 50 21 V 40">
            <animate attributeName="d" values="M 50 21 V 40; M 50 59 V 40" dur="2s" repeatCount="indefinite" />
          </path>
          <path d="M 50 60 V 79">
            <animate attributeName="d" values="M 50 60 V 79; M 50 98 V 79" dur="2s" repeatCount="indefinite" />
          </path>
          <path d="M 50 21 L 79 40 L 50 60 L 21 40 Z">
            <animate attributeName="stroke" values="rgba(255,255,255,1); rgba(100,100,100,0)" dur="2s" repeatCount="indefinite" />
          </path>
          <path d="M 50 40 L 79 59 L 50 79 L 21 59 Z" />
          <path d="M 50 59 L 79 78 L 50 98 L 21 78 Z">
            <animate attributeName="stroke" values="rgba(100,100,100,0); rgba(255,255,255,1)" dur="2s" repeatCount="indefinite" />
          </path>
          <animateTransform attributeName="transform" type="translate" values="0 0; 0 -19" dur="2s" repeatCount="indefinite" />
        </g>
      </svg>
      <p className="text-xl font-medium tracking-wide text-center">
        Your Dream, Our Code, Infinite Possibilities
      </p>
    </div>
  );
};

export default Preloader;
