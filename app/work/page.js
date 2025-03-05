"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import { motion } from "framer-motion";
import WorkListing from "@/components/WorkPage/WorkListing";

const page = () => {
  return (
    <div className="bg-[#002A00] overflow-hidden">
      <Navbar />

      <div className="bg-[#002A00] lg:pb-40 pb-20 ">
        <div className=" max-container text-white lg:px-16 px-5   lg:pt-[280px] pt-[140px] pb-0 lg:flex items-center lg:space-x-40">
          <div className="lg:w-[73%]">
            <motion.h1
              className="lg:text-h1 lg:leading-[86px] text-[55px] leading-[55px] font-semibold"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
            >
              Bringing brands to life with stories that engage <br className="lg:hidden block" />& endure.
            </motion.h1>
          </div>
        </div>
      </div>

      <WorkListing />

      <Footer />
    </div>
  );
};

export default page;
