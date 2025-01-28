"use client";

import React from "react";
import { motion } from "framer-motion";

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
    <div className="bg-white text-[#1C1D58] rounded-[80px]  py-20 relative">
      <img
        src="/images/bgElementcase.png"
        alt="Background Element"
        className="absolute bottom-0 left-0 object-cover rounded-b-[80px]"
      />
      {/* Title and Description Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 px-16  max-container" >
        {/* Title */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }} // Triggers animation on entering viewport
          variants={fadeUpVariants}
          className="text-h2 font-regular"
        >
          Lorem ipsum dolor sit amet consectetur.
        </motion.h2>

        {/* Description */}
        <div>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUpVariants}
            className="text-[20px] font-semibold"
          >
            Lorem ipsum dolor sit amet consectetur.
          </motion.p>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUpVariants}
            className="text-[20px] font-regular"
          >
            Lorem ipsum dolor sit amet consectetur. Ornare turpis ullamcorper
            nunc dignissim bibendum felis malesuada. Eget consectetur eget est
            sed vitae mauris magna turpis convallis. Id pellentesque at sed
            pulvinar libero nisi in.
          </motion.p>
        </div>
      </div>

      {/* Grid Section */}
      <div className="flex space-x-6 relative  max-container px-16">
        {/* Left Section */}
        <div>
          <div className="flex space-x-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUpVariants}
              className="bg-gray-200 rounded-[28px] w-[188px] h-[175px]"
            ></motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUpVariants}
              className="bg-gray-200 rounded-[28px] w-[295px] h-[175px]"
            ></motion.div>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUpVariants}
            className="bg-gray-200 rounded-[28px] w-[506px] h-[236px] mt-6"
          ></motion.div>
        </div>

        {/* Right Section */}
        <div className="flex space-x-6 w-[50%]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUpVariants}
            className="bg-gray-200 rounded-[28px] min-w-[370px]"
          ></motion.div>
          <div className="flex space-y-6 flex-col">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUpVariants}
              className="bg-gray-200 rounded-[28px] w-[264px] h-[175px]"
            ></motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUpVariants}
              className="bg-gray-200 rounded-[28px] w-[264px] h-[210px]"
            ></motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridSection;
