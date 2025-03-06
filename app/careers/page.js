"use client";

import React from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ValuesSection from "@/components/CareerPage/ValuesSection";
import JobVacancies from "@/components/CareerPage/JobVacancies";
import { motion } from "framer-motion";
import AutoScroll from "@/components/CareerPage/AutoScroll";
import Head from "next/head";

const page = () => {
  return (
    <div className="">
      <Head>
        <title>Careers | BRANDiT</title>
        <meta
          name="description"
          content=" We believe that creativity and collaboration drive success, shaping powerful PR strategies."
        />
      </Head>
      <Navbar />
      <div className="lg:pb-[400px] pb-[140px] bg-[#002A00] z-10 ">
        <div className=" text-white  lg:pt-[280px] pt-[150px]  pb-0 ">
          <div className="max-container lg:pl-16 pl-5">
            <h1 className="lg:text-h1 text-[55px] lg:leading-[86px] leading-[55px] font-semibold">
              {" "}
              Embrace Creativity, <br /> Drive PR Excellence.
            </h1>
            <p className="lg:text-[23px] lg:leading-[27px] text-[18px] leading-[21px] lg:mt-2 mt-3">
              We believe that creativity and collaboration drive success,{" "}
              <br className="lg:block hidden" /> shaping powerful PR strategies.
            </p>
          </div>

          <motion.div className="absolute flex items-center justify-center w-full px-20 ">
            <img
              src="/images/careerImg.png"
              alt="backgound"
              loading="lazy"
              className="max-w-[87vw] lg:mt-20 mt-8 "
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
