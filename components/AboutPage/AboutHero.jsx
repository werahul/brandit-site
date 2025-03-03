"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const AboutHero = () => {
  return (
    <div className="bg-[#002A00]">
      <div className=" max-container text-white lg:px-16 px-5 lg:pt-[280px] pt-[140px] lg:pb-40 pb-20 lg:flex items-center lg:space-x-40">
        <div className="lg:w-[70%]">
          <motion.h1
            className="lg:text-h1 text-[55px] lg:leading-[86px] leading-[55px] font-semibold"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
          >
            We amplify your story giving it a voice that resonates
          </motion.h1>
        </div>

        <motion.div className="space-y-4 lg:mt-0 mt-8">
          <img src="/images/awd1.png" alt="award about" />
          <img src="/images/awd2.png" alt="award about" />
        </motion.div>
      </div>
    </div>
  );
};

export default AboutHero;
