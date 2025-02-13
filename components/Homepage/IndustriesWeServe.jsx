"use client";

import React from "react";
import { motion } from "framer-motion";

const IndustriesWeServe = () => {
  const industries = [
    {
      name: "B2B",
      image: "/images/in1.png",
      bgColor: "bg-gray-200",
    },
    {
      name: "Beauty",
      image: "/images/in2.png",
      bgColor: "bg-pink-100",
    },
    {
      name: "Renewable Energy",
      image: "/images/in3.png",
      bgColor: "bg-green-100",
    },
    {
      name: "District Cooling",
      image: "/images/in4.png",
      bgColor: "bg-yellow-100",
    },
    {
      name: "Biofuels",
      image: "/images/in5.png",
      bgColor: "bg-black",
    },
    {
      name: "Auto",
      image: "/images/in6.png",
      bgColor: "bg-cream-100",
    },
    {
      name: "Luxury",
      image: "/images/in7.png",
      bgColor: "bg-cream-100",
    },
    {
      name: "Fashion",
      image: "/images/in8.png",
      bgColor: "bg-cream-100",
    },
    {
      name: "Hospitality",
      image: "/images/in9.png",
      bgColor: "bg-cream-100",
    },
    {
      name: "EV",
      image: "/images/in10.png",
      bgColor: "bg-cream-100",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="text-[#1C1D58] max-container px-16 py-[120px]">
        <motion.h2
          className="text-h2 font-bold text-navy-900 mb-8"
          variants={itemVariants}
        >
          Industries We Serve
        </motion.h2>

        <motion.div
          className="grid grid-cols-5 gap-6"
          variants={containerVariants}
        >
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              className="group  w-full h-[200px] "
              variants={itemVariants}
            >
              <div className="rounded-lg overflow-hidden mb-2">
                <motion.img
                  src={industry.image}
                  alt={industry.name}
                  className="w-full h-[151px] object-cover transition-transform duration-300 group-hover:scale-105"
                  whileHover={{ scale: 1.1 }}
                />
              </div>
              <p className="text-center text-[14px]">{industry.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default IndustriesWeServe;
