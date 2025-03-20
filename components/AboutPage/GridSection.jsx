"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const GridSection = () => {
  // Variants for fade-up animation
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }, // Smooth easing
    },
  };

  return (
    <div className="bg-white text-[#1C1D58] lg:rounded-[80px] rounded-[40px]  lg:py-20 py-16 relative">
      <img
        src="/images/bgElementcase.png"
        alt="Background Element"
        loading="lazy"
        className="absolute bottom-0 left-0 object-cover rounded-b-[80px]"
      />
      {/* Title and Description Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-8 gap-5 mb-8 lg:px-16 px-5  max-container">
        {/* Title */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }} // Triggers animation on entering viewport
          variants={fadeUpVariants}
          className="lg:text-h2 lg:leading-[55px] text-[44px] leading-[44px] font-regular"
        >
          Expert communicators creating impact.
        </motion.h2>

        {/* Description */}
        <div>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUpVariants}
            className="lg:text-[20px] text-[18px] font-regular"
          >
            We are a passionate team of communicators, working with clients to
            deliver results built on trust, transparency, and a shared passion
            for success.
          </motion.p>
        </div>
      </div>

      {/* Grid Section */}
      <div className="lg:flex hidden space-x-6 relative  max-container px-16 lg:py-5">
        <img
          src="/images/aboutcollage.png"
          alt="Background Element"
          className=""
        />
   
      </div>

      <div className="lg:hidden px-5">
        <img
          src="/images/aboutcollageMobile.png"
          alt="Background Element"
          className=""
        />
      </div>
    </div>
  );
};

export default GridSection;
