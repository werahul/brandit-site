"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const HeroSection = () => {
  // Use null as the initial state without type declaration
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const icons = [
    {
      default: "/iconImages/linkedin.svg",
      hover: "/iconImages/linkedinHvr.svg",
      alt: "LinkedIn logo",
      link: "https://www.linkedin.com/company/brandit-communications/",
    },
    {
      default: "/iconImages/insta.svg",
      hover: "/iconImages/instaHvr.svg",
      alt: "Instagram logo",
      link: "https://www.instagram.com/branditcommunications?igsh=MWllY3Y5eDgzb2tj",
    },
    {
      default: "/iconImages/facebook.svg",
      hover: "/iconImages/facebookHvr.svg",
      alt: "Facebook logo",
      link: "https://www.facebook.com/share/15aWPmt9t5/",
    },
  ];
  return (
    <div className="heroBG">
      <motion.div
        className="max-container text-[#FFFFFF] lg:flex items-center justify-between lg:px-16 px-5 lg:pt-[280px] pt-[180px] lg:pb-[183px] pb-[100px]"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        {/* Left Section */}
        <div className="lg:w-[70%] w-[100%]">
          <motion.h1
            className="lg:text-h1 text-[50px] lg:leading-[86px] leading-[66px]"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
          >
            Your <span className="italic"> Story.</span> <br />
            Our <span className="italic"> Voice.</span> <br />
            <strong> Global Reach.</strong>
          </motion.h1>

          <motion.p
            className="lg:text-[23px] text-[18px] lg:leading-[27px] leading-[21px] lg:mt-6 mt-2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeInOut" }}
          >
            We craft compelling narratives that resonate with your{" "}
            <br className="lg:block hidden" /> audience and build lasting
            relationships.
          </motion.p>

          <motion.div
            className="cta lg:mt-10 mt-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeInOut" }}
          >
            <Link href="/about">
             

              <button className="relative lg:w-[150px] w-[143px] h-[56px] bg-[#C5F2B0] text-black text-[16px] rounded-[40px] overflow-hidden group">
              <span className="absolute inset-0 bg-gradient-to-r from-[#7CAF64] via-[#5E8F45] to-[#7CAF64] transition-transform scale-0 group-hover:scale-100 group-hover:rotate-180 duration-500 ease-in-out rounded-[40px]"></span>
              <span className="relative z-10 block text-center group-hover:text-white transition-transform duration-300 ease-in-out group-hover:scale-110">
              Know More
              </span>
              <span className="absolute -inset-1 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-[40px]"></span>
            </button>
            </Link>
          </motion.div>
        </div>

        {/* Right Section (Social Icons) */}
        <motion.div
          className="flex lg:flex-col gap-3 mt-[120px]"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
            delay: 0.8,
            ease: "easeInOut",
          }}
        >
          {icons.map((icon, index) => (
            <motion.a
              key={index}
              href={icon.link}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredIcon(icon.default)}
              onMouseLeave={() => setHoveredIcon(null)}
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="cursor-pointer"
            >
              <Image
                src={hoveredIcon === icon.default ? icon.hover : icon.default}
                alt={icon.alt}
                width={40}
                height={40}
              />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
