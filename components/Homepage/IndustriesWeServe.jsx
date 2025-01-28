"use client";

import React from 'react';
import { motion } from 'framer-motion';

const IndustriesWeServe = () => {
  const industries = [
    {
      name: 'Entertainment',
      image: 'https://picsum.photos/id/237/200/200',
      bgColor: 'bg-gray-200'
    },
    {
      name: 'Jewelry',
      image: 'https://picsum.photos/id/231/200/200',
      bgColor: 'bg-pink-100'
    },
    {
      name: 'Green energy',
      image: 'https://picsum.photos/id/232/200/200',
      bgColor: 'bg-green-100'
    },
    {
      name: 'Travel',
      image: 'https://picsum.photos/id/233/200/200',
      bgColor: 'bg-yellow-100'
    },
    {
      name: 'Tech',
      image: 'https://picsum.photos/id/234/200/200',
      bgColor: 'bg-black'
    },
    {
      name: 'Fashion',
      image: 'https://picsum.photos/id/235/200/200',
      bgColor: 'bg-cream-100'
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
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
          className="flex flex-row space-x-7"
          variants={containerVariants}
        >
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              className="group cursor-pointer w-[190px] h-[126px]"
              variants={itemVariants}
            >
              <div className="rounded-lg overflow-hidden mb-2">
                <motion.img
                  src={industry.image}
                  alt={industry.name}
                  className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-105"
                  whileHover={{ scale: 1.1 }}
                />
              </div>
              <p className="text-center text-[14px]">
                {industry.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default IndustriesWeServe;
