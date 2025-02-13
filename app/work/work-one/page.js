"use client";

import React, { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import OtherBlogs from "@/components/BlogPage/OtherBlogs";
import OtherCaseStrudies from "@/components/WorkPage/OtherCaseStrudies";

const page = () => {
  const newsPaperImages = [
    "https://picsum.photos/id/134/400/300",
    "https://picsum.photos/id/133/400/300",
    "https://picsum.photos/id/135/400/300",
    "https://picsum.photos/id/136/400/300",

    "https://picsum.photos/id/137/400/300",
    "https://picsum.photos/id/138/400/300",
    "https://picsum.photos/id/139/400/300",
    "https://picsum.photos/id/140/400/300",

    "https://picsum.photos/id/141/400/300",
    "https://picsum.photos/id/142/400/300",
    "https://picsum.photos/id/143/400/300",
    "https://picsum.photos/id/144/400/300",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const imagesPerSlide = 4;

  const totalSlides = Math.ceil(newsPaperImages.length / imagesPerSlide);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  const currentImages = newsPaperImages.slice(
    currentIndex * imagesPerSlide,
    (currentIndex + 1) * imagesPerSlide
  );

  const handleDotClick = (dotIndex) => {
    setCurrentIndex(dotIndex);
  };

  return (
    <div className="bg-[#002A00]">
      <Navbar />
      <div className=" pb-40 ">
        <div className=" max-container text-white px-16 pt-[280px] pb-0 flex items-center space-x-40">
          <motion.div>
            <img
              src="/images/blankBlogImage.png"
              alt=""
              className="w-full h-[584px]"
            />
          </motion.div>
        </div>
      </div>

      <div className="bg-white text-[#151642] rounded-[80px] py-[80px] ">
        <div className="px-16 max-container">
          <div className="">
            {/* Top section with 3-column layout */}
            <div className="flex  mb-[100px]">
              <div className="flex flex-col space-y-7 min-w-[25%]">
                <div className="space-y-1">
                  <h2 className="text-[18px]">Client</h2>
                  <p className="text-[23px] font-bold">Lorem ipsum</p>
                </div>
                <div className="space-y-1">
                  <h2 className="text-[18px]">Location</h2>
                  <p className="text-[23px] font-bold">Lorem ipsum</p>
                </div>
                <div className="space-y-1">
                  <h2 className="text-[18px]">Industry</h2>
                  <p className="text-[23px] font-bold">Lorem ipsum</p>
                </div>
              </div>
              <div className="text-[23px] leading-[32px]">
                <p className="">
                  Lorem ipsum dolor sit amet consectetur. Sed ipsum nec massa
                  ut. Lorem adipiscing in nam Lorem ipsum dolor sit amet
                  consectetur. Lorem ipsum dolor sit amet consectetur. Sed
                  feugiat fermentum amet et ullamcorper ut dolor vitam dan sit
                  neque other pharetra ipsum. Vitae Lorem ipsum dolor sit amet
                  consectetur amet sit.
                </p>{" "}
                <br />
                <p className="">
                  Lorem ipsum dolor sit amet consectetur. Sed ipsum nec massa
                  ut. Lorem adipiscing in nam massa egestas ullamcorper elit
                  velit cursus. Consequat sed adipiscing eturna sit. Lorem massa
                  egestas ullamcorper elit velit cursus. Lorem ipsum dolor sit
                  amet consectetur amet sit.
                </p>
              </div>
            </div>

            {/* Main content sections */}
            <div className="space-y-[100px] w-[70%]">
              <section>
                <h3 className="text-h3 font-bold mb-4">The Objective</h3>
                <p className="text-[23px] leading-[32px]">
                  Lorem ipsum dolor sit amet consectetur. Sed quam non massa ut.
                  Lorem adipiscing in nam morbi aliquam elementum ac morbi
                  cursus. Consequat sed aliquam diam et. Donec fermentum amet at
                  tincidunt. At donec etiam sem sit neque vitae platea quam.
                  Tellus morbi morbi sociis suspendisse ante sed.
                </p>
              </section>

              <section>
                <h3 className="text-h3 font-bold mb-4">The Strategy</h3>
                <p className="text-[23px] leading-[32px]">
                  Lorem ipsum dolor sit amet consectetur. Sed quam non massa ut.
                  Lorem adipiscing in nam morbi aliquam elementum ac morbi
                  cursus. Consequat sed aliquam diam et. Donec fermentum amet at
                  tincidunt. At donec etiam sem sit neque vitae platea quam.
                  Tellus morbi morbi sociis suspendisse ante sed.
                </p>
              </section>

              <section>
                <h3 className="text-h3 font-bold mb-4">The Outcome</h3>
                <ul className="text-[23px] leading-[32px] list-disc pl-5 space-y-2">
                  <li>
                    Lorem ipsum dolor sit amet consectetur. Sed ipsum nec massa
                    ut
                  </li>
                  <li>
                    Lorem adipiscing in nam massa egestas ullamcorper elit velit
                    cursus
                  </li>
                  <li>
                    Consequat sed adipiscing eturna sit fermentum velit at
                    ullamcorper
                  </li>
                </ul>
              </section>
            </div>

            <div className="mt-[100px]">
              {/* Image Grid */}
              <div className="grid grid-cols-4 gap-6">
                {currentImages.map((image, index) => (
                  <div
                    key={index}
                    className="bg-gray-200 h-[220px] rounded-[28px] overflow-hidden"
                  >
                    <img
                      src={image}
                      alt={`Sample ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Dots Pagination */}
              <div className="flex justify-center mt-8">
                {Array.from({ length: totalSlides }).map((_, dotIndex) => (
                  <div
                    key={dotIndex}
                    onClick={() => handleDotClick(dotIndex)}
                    className={`w-2 h-2 rounded-full mx-1 cursor-pointer ${
                      dotIndex === currentIndex
                        ? "bg-[#151642]"
                        : "border border-[#151642]"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="mt-20">
            <OtherCaseStrudies />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default page;
