"use client";

import React from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ValuesSection from "@/components/CareerPage/ValuesSection";
import JobVacancies from "@/components/CareerPage/JobVacancies";
import { motion } from "framer-motion";
import AutoScroll from "@/components/CareerPage/AutoScroll";

const page = () => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <div className="pb-[400px] bg-[#002A00] z-10 ">
        <div className=" text-white  pt-[280px] pb-0 ">
          <div className="max-container pl-16">
            <h1 className="text-h1 leading-[86px] font-semibold">
              {" "}
              Lorem ipsum dolor sit <br /> amet consectetur.{" "}
            </h1>
            <p className="text-[23px] leading-[27px] mt-2">
              Lorem ipsum dolor sit amet consectetur. Justo eget tempus <br />{" "}
              sed venenatis sit turpis. Venenatis risus amet pharetra.
            </p>
          </div>

          <motion.div className="absolute right-0 maxLeftOnly">
            <img
              src="/images/blankBlogImage.png"
              alt=""
              className="max-w-[94vw] mt-20 object-fill"
            />
          </motion.div>
        </div>
      </div>
      <AutoScroll />
      <div className="bg-gray-100">
        <ValuesSection />
        <JobVacancies />
      </div>
      <Footer />
    </div>
  );
};

export default page;
