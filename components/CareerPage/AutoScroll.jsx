"use client";

import React, { useRef } from "react";
import { motion, useAnimationFrame } from "framer-motion";

// SVG as a reusable component
const IconSVG = () => (
  <svg
    width="46"
    height="43"
    viewBox="0 0 46 43"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.3818 42.1021L4.08003 36.0055L15.6246 23.4232L0.577734 17.1969L4.98804 8.37631L18.2189 14.862L17.5704 0.463702H28.4664L27.8178 14.862L41.0487 8.37631L45.3293 17.1969L30.2824 23.4232L41.827 36.0055L33.5253 42.1021L23.0184 28.2227L12.3818 42.1021Z"
      fill="#1C1D58"
    />
  </svg>
);

const items = [
  { text: "Join our team", icon: IconSVG },
  { text: "Unlock growth", icon: IconSVG },
  { text: "Excel with us", icon: IconSVG },
  { text: "Lead & grow", icon: IconSVG },
];

const AutoScroll = () => {
  const containerRef = useRef(null);

  return (
    <div
      ref={containerRef}
      className="bg-white pl-16 lg:h-[640px] h-[280px] flex items-end mt-0 lg:pb-20 pb-10 z-0 overflow-hidden "
    >
      <motion.div
        className="flex flex-row whitespace-nowrap space-x-5"
        animate={{ x: ["0%", "-50%"] }} // Move only half to seamlessly repeat
        transition={{
          duration: 8, // Faster duration for smooth effect
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ display: "inline-flex" }}
      >
        {/* Duplicated Items for Seamless Infinite Scroll */}
        {[...items, ...items].map((item, index) => (
          <div key={index} className="flex items-center space-x-5">
            <item.icon />
            <p className="text-[#1C1D58] lg:text-[60px] text-[44px]">{item.text}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AutoScroll;
