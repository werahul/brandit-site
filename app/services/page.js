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
import Head from "next/head";

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
      <Head>
        <title>Services | BRANDiT</title>
        <meta
          name="description"
          content="We turn your brand's message into news everyone wants to share."
        />
      </Head>
      <Navbar />
      <div className="bg-[#002A00] ">
        <div className=" max-container text-white lg:px-16 px-5 lg:pt-[280px] pt-[160px] pb-0 flex items-center lg:space-x-40">
          <div>
            <motion.h1
              className="lg:text-h1 text-[55px] lg:leading-[86px] leading-[55px] font-semibold"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
            >
              Your story; <br />
              Our strategy.
            </motion.h1>
          </div>
        </div>

        <div className="lg:pb-20 pb-16">
          <FeaturedClients images={images} />
        </div>
      </div>

      <div className=" bg-gradient-to-b from-[#002A00] to-[#EAEAF4]">
        <ServicesListing />
      </div>

      <div className="lg:py-20 py-16 bg-[#EAEAF4] lg:rounded-b-[80px] rounded-b-[40px]">
        <div className="lg:px-16 px-5   max-container">
          <CaseStudies />
        </div>
      </div>
      <IndustriesWeServe />
      <div className="lg:pb-40 pb-20">
        <BlogNews />
      </div>
      <Footer />
    </div>
  );
};

export default page;
