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
        className="max-container text-[#FFFFFF] flex items-center justify-between px-16 pt-[280px] pb-[183px]"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        {/* Left Section */}
        <div className="w-[70%]">
          <motion.h1
            className="text-h1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
          >
            Your <span className="italic"> Story.</span> <br />
            Our <span className="italic"> Voice.</span> <br />
            <strong> Global Reach.</strong>
          </motion.h1>

          <motion.p
            className="text-[23px] leading-[27px] mt-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeInOut" }}
          >
            We craft compelling narratives that resonate with your <br />{" "}
            audience and build lasting relationships.
          </motion.p>

          <motion.div
            className="cta mt-10"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeInOut" }}
          >
            <Link href="/about">
              <button className="relative w-[150px] h-[56px] bg-gradient-to-r from-[#45D400] to-[#45D400] text-black text-[16px] rounded-[40px] overflow-hidden group">
                <span className="absolute inset-0 bg-gradient-to-r from-[#45D400] via-[#36BA00] to-[#45D400] transition-transform scale-0 group-hover:scale-100 group-hover:rotate-180 duration-500 ease-in-out rounded-[40px]"></span>
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
          className="flex flex-col space-y-3"
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
