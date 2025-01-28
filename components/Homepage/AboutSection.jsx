"use client"

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (customDelay) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: customDelay },
  }),
};

const AboutSection = () => {
  return (
    <div className="max-container bg-[#EAEAF4] text-[#1C1D58] rounded-b-[80px] px-16 lg:pt-[184px] lg:pb-[145px]">
      <motion.div
        className="flex items-center justify-between"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        {/* Left Content */}
        <motion.div className="relative" variants={fadeUpVariants} custom={0}>
          {/* Background Image */}
          <img
            src="/images/bgElementAbout.png"
            alt="Background Element"
            className="absolute -top-3 -left-10 w-[543px] object-cover"
          />
          {/* Text Content */}
          <h2 className="text-h2 text-[#1C1D58] font-bold relative">
            About us and <br /> counter nos and <br />
            little brief
          </h2>
        </motion.div>

        {/* Right Content */}
        <motion.div
          className="flex space-x-12 w-[60%] flex-row items-center"
          variants={fadeUpVariants}
          custom={0.2}
        >
          <div className="relative">
            <img
              src="/images/greenRoundMask.svg"
              alt="green Mask"
              className="min-w-[226px]"
            />
            <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-semibold text-h1 text-white">
              xx+
            </p>
          </div>
          <div className="text-[18px] leading-[30px] text-[#1C1D58]">
            <p className="font-bold mb-4">
              Lorem ipsum dolor sit amet consetur.
            </p>
            Lorem ipsum dolor sit amet consectetur. Id laoreet magna non cursus
            nulla porttitor suscipit pharetra. Diam ut eget vitae non elementum
            ullamcorper suspendisse maecenas. In imperdiet mauris in feugiat
          </div>
        </motion.div>
      </motion.div>

      {/* Grid Section */}
      <motion.div
        className="grid grid-cols-3 space-x-10 mt-[145px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        {Array(3)
          .fill(null)
          .map((_, index) => (
            <motion.div
              className="flex flex-row space-x-[52px] items-center border-t border-[#9a9dafad] pt-[36px]"
              variants={fadeUpVariants}
              custom={0.2 * (index + 1)}
              key={index}
            >
              <div className="">
                <Image
                  className=""
                  src="iconImages/ab1.svg"
                  alt="about-home icon"
                  width={53}
                  height={53}
                />
              </div>
              <p className="leading-[21px] text-[18px]">
                xxx+ dolor sit amet consectetur. Id <br />
                laoreet magna non
              </p>
            </motion.div>
          ))}
      </motion.div>
    </div>
  );
};

export default AboutSection;
