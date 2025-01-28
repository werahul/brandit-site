"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const AboutHero = () => {
  return (
    <div className="bg-[#002A00]">
      <div className=" max-container text-white px-16 pt-[280px] pb-40 flex items-center space-x-40">
        <div>
          <motion.h1
            className="text-h1 font-semibold"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
          >
            Lorem ipsum dolor sit <br /> amet consectetur. <br /> Mauris cras
            Mauris
          </motion.h1>
        </div>

        <motion.div className="space-y-4">
          <img src="/images/awardAbout.png" alt="award about" />
          <img src="/images/awardAbout.png" alt="award about" />
        </motion.div>
      </div>
    </div>
  );
};

export default AboutHero;
