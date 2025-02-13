"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import { motion } from "framer-motion";
import FeaturedClients from "@/components/Homepage/FeaturedClients";
import ServicesListing from "@/components/services/ServicesListing";
import CaseStudies from "@/components/Homepage/CaseStudies";
import BlogNews from "@/components/Homepage/BlogNews";
import IndustriesWeServe from "@/components/Homepage/IndustriesWeServe";

const images = [
  "/clientsLogo/w1.svg",
  "/clientsLogo/w2.svg",
  "/clientsLogo/w3.svg",
  "/clientsLogo/w4.svg",
  "/clientsLogo/w5.svg",
  "/clientsLogo/w6.svg",
  "/clientsLogo/w7.svg",
  "/clientsLogo/w8.svg",
  "/clientsLogo/w9.svg",
  "/clientsLogo/w10.svg",
];
const page = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-[#002A00] ">
        <div className=" max-container text-white px-16 pt-[280px] pb-0 flex items-center space-x-40">
          <div>
            <motion.h1
              className="text-h1 font-semibold"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
            >
            Your story; <br />
            Our strategy
            </motion.h1>
          </div>
        </div>

        <div className="pb-20">
          <FeaturedClients images={images} />
        </div>
      </div>

      <div className=" bg-gradient-to-b from-[#002A00] to-[#EAEAF4]">
        <ServicesListing />
      </div>

      <div className="py-20 bg-[#EAEAF4] rounded-b-[80px]">
        <div className="px-16 max-container">
          <CaseStudies />
        </div>
      </div>
      <IndustriesWeServe />
      <div className="pb-40">
        <BlogNews />
      </div>
      <Footer />
    </div>
  );
};

export default page;
