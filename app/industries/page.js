"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import { motion } from "framer-motion";
import IndBrife from "@/components/IndustriesPage/IndBrife";
import CaseStudies from "@/components/Homepage/CaseStudies";
import TestimonialsCarousel from "@/components/Homepage/TestimonialsCarousel";

const page = () => {
  return (
    <div>
      <Navbar />

      <div className="lg:pb-[400px] pb-[140px] bg-[#002A00] z-10 ">
        <div className=" text-white  lg:pt-[280px] pt-[150px]  pb-0 ">
          <div className="max-container lg:pl-16 pl-5">
            <h1 className="lg:text-h1 text-[55px] lg:leading-[86px] leading-[55px] font-semibold">
              {" "}
              Shaping Industries, <br /> Building Impact.
            </h1>
            <p className="lg:text-[23px] lg:leading-[27px] text-[18px] leading-[24px] lg:mt-2 mt-7">
              Fueling industries with strategic PR, innovative ideas, and <br className="lg:block hidden" />{" "}
              impactful storytelling.
            </p>
          </div>

          <motion.div className="absolute flex items-center justify-center w-full px-20 ">
            <img
              src="/images/indMain.png"
              alt=""
              className="max-w-[87vw] lg:mt-20 mt-8 "
            />
          </motion.div>
        </div>
      </div>

      <IndBrife />
      <div className=""></div>
      <div className="lg:py-20 py-16 bg-[#EAEAF4] lg:rounded-[80px] rounded-[40px] mt-20">
        <div className="lg:px-16 px-5   max-container">
          <CaseStudies />
        </div>
      </div>
      <TestimonialsCarousel />

      <Footer />
    </div>
  );
};

export default page;
