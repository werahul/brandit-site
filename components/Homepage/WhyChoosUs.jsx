"use client";

import React from "react";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  const stats = [
    {
      number: "XXX+",
      description: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      number: "XXX+",
      description: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      number: "XXX+",
      description: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      number: "XXX+",
      description: "Lorem ipsum dolor sit amet consectetur",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="pt-[120px] text-[#1C1D58]">
      <div className="">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left side content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-h2 font-bold  mb-6">
              What Makes Us Different / Why Choose Us
            </h2>
            <p className="text-[18px] leading-[30px]">
              Lorem ipsum dolor sit amet consectetur. Id laoreet magna non
              cursus nulla porttitor suscipit pharetra. Diam ut eget vitae non
              elementum ullamcorper suspendisse maecenas.
            </p>
            <p className="font-bold mt-[20px]">Lorem ipsum</p>
          </motion.div>

          {/* Right side stats */}
          <motion.div
            className="grid grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={containerVariants}
                className={`text-center lg:text-left py-10 px-7 border-[#B3B3B380] ${
                  index === 0
                    ? "border-l  border-b"
                    : index === 1
                    ? "border-l border-r border-b"
                    : index === 2
                    ? "border-l "
                    : "border-l border-r"
                }`}
              >
                <p className="text-[18px] leading-[21px]">{stat.description}</p>
                <div className="text-[56px] mt-[35px] mb-2 ml-10">
                  {stat.number}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
