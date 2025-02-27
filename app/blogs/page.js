"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import { motion } from "framer-motion";
import WorkListing from "@/components/WorkPage/WorkListing";
import BlogListing from "@/components/BlogPage/BlogListing";
import Link from "next/link";

const page = () => {
  return (
    <div className="bg-[#002A00]">
      <Navbar />

      <div className="bg-[#002A00] lg:pb-40 pb-32 ">
        <div className=" max-container text-white lg:px-16 px-5 lg:pt-[280px] pt-[140px] pb-0 flex items-center lg:space-x-40">
          <div>
            <div className="w-[171px] h-[38px] rounded-[20px] flex items-center justify-center bg-[#005E00] text-white mb-2">
              Latest Perspectives
            </div>
            <motion.h1
              className="lg:text-h1 text-[55px] lg:leading-[86px] leading-[55px] font-semibold"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
            >
              Influencer Marketing’s <br /> Role in PR Campaigns
            </motion.h1>
            <div className="flex items-center space-x-5 mt-5">
              <p>Influencer Marketing</p>
              <p>Lorem Ipsum</p>
            </div>
            <div className="cta mt-6">
              <Link href="/blogs/influencer-marketings-role-in-pr-campaigns" className="">
                <button className="relative w-[130px] h-[56px] bg-gradient-to-r border-[1.5px] border-[#45D400] text-[#45D400] text-[16px] rounded-[40px] overflow-hidden group">
                  <span className="absolute inset-0 bg-gradient-to-r from-[#45D400] via-[#36BA00] to-[#005E00] transition-transform scale-0 group-hover:scale-100 group-hover:rotate-180 duration-500 ease-in-out rounded-[40px]"></span>
                  <span className="relative z-10 block text-center group-hover:text-white transition-transform duration-300 ease-in-out group-hover:scale-110">
                    Read More
                  </span>
                  <span className="absolute -inset-1 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-[40px]"></span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <BlogListing />

      <Footer />
    </div>
  );
};

export default page;
