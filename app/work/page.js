"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import { motion } from "framer-motion";
import WorkListing from "@/components/WorkPage/WorkListing";

const page = () => {
  return (
    <div className="bg-[#002A00]">
      <Navbar />

      <div className="bg-[#002A00] pb-40 ">
        <div className=" max-container text-white px-16 pt-[280px] pb-0 flex items-center space-x-40">
          <div>
            <motion.h1
              className="text-h1 font-semibold"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
            >
              Lorem ipsum dolor sit <br /> amet consectetur.
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
