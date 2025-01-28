"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="bg-[#3A3939]">
      <motion.div
        className="max-container text-[#FFFFFF] flex items-center justify-between px-16 pt-[280px] pb-[183px]"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        {/* Left Section */}
        <div>
          <motion.h1
            className="text-h1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
          >
            <strong> H1 tagline </strong> dolor sit amet <br /> consectetur.
            Mauris cras <br /> <strong> suspendisse scel. </strong>
          </motion.h1>

          <motion.p
            className="text-[23px] leading-[27px] mt-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeInOut" }}
          >
            Lorem ipsum dolor sit amet consectetur. Habitasse viverra cras{" "}
            <br />
            parturient lobortis ligula arcu. Amet praesent netus.
          </motion.p>

          <motion.div
            className="cta mt-16"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeInOut" }}
          >
            <button className="relative w-[150px] h-[56px] bg-gradient-to-r from-[#45D400] to-[#005E00] text-black text-[16px] font-bold rounded-[40px] overflow-hidden group">
              <span className="absolute inset-0 bg-gradient-to-r from-[#45D400] via-[#36BA00] to-[#005E00] transition-transform scale-0 group-hover:scale-100 group-hover:rotate-180 duration-500 ease-in-out rounded-[40px]"></span>
              <span className="relative z-10 block text-center group-hover:text-white transition-transform duration-300 ease-in-out group-hover:scale-110">
                Lorem
              </span>
              <span className="absolute -inset-1 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-[40px]"></span>
            </button>
          </motion.div>
        </div>

        {/* Right Section (Social Icons) */}
        <motion.div
          className="flex flex-col space-y-3"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
            delay: 0.8,
            ease: "easeInOut",
            staggerChildren: 0.2,
          }}
        >
          <motion.div>
            <Image
              src="iconImages/pinterest.svg"
              alt="pinterest logo"
              width={40}
              height={40}
            />
          </motion.div>
          <motion.div>
            <Image
              src="iconImages/linkedin.svg"
              alt="linkedin logo"
              width={40}
              height={40}
            />
          </motion.div>
          <motion.div>
            <Image
              src="iconImages/insta.svg"
              alt="instagram logo"
              width={40}
              height={40}
            />
          </motion.div>
          <motion.div>
            <Image
              src="iconImages/facebook.svg"
              alt="facebook logo"
              width={40}
              height={40}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
