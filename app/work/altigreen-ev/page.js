"use client";

import React, { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import OtherBlogs from "@/components/BlogPage/OtherBlogs";
import OtherCaseStrudies from "@/components/WorkPage/OtherCaseStrudies";
import Head from "next/head";

const page = () => {
  const newsPaperImages = [
    "/caseImages/altgreen1.png",
    "/caseImages/altgreen2.png",
    "/caseImages/altgreen3.png",
    "/caseImages/altgreen4.png",
    "/caseImages/altgreen5.png",
  ];

  const caseStudiesData = [
    {
      id: 1,
      title: "District cooling",
      image: "/caseImages/cs4.png",
      csLogo: "/iconImages/caseLogo4.svg",
      nameTag: "District cooling",
      path: "/work/tabreed-india",
    },
    {
      id: 2,
      title: "Retail and Lifestyle",
      image: "/caseImages/cs5.png",
      csLogo: "/iconImages/caseLogo5.svg",
      nameTag: "Retail and Lifestyle",
      path: "/work/technosport",
    },
    {
      id: 3,
      title: "Healthcare",
      image: "/caseImages/cs6.png",
      csLogo: "/iconImages/caseLogo6.svg",
      nameTag: "Healthcare",
      path: "/work/hejje",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = newsPaperImages.length;

  // Auto-slide every 3 seconds (optional)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 3000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  // Handle Dot Click
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="bg-[#002A00]">
    <Head>
        <title>Work | BRANDiT</title>
        <meta
          name="description"
          content=" Altigreen is a leader in EV technology and last-mile transportation, with mobility platforms made in India. "
        />
      </Head>
      <Navbar />
      <div className=" lg:pb-40 pb-14 ">
        <div className=" max-container text-white lg:px-16 px-5 lg:pt-[240px] pt-[140px] pb-0 flex items-center lg:space-x-40">
          <motion.div>
            <img
              src="/caseImages/caseBanner1.png"
              alt=""
              className="w-full lg:h-[584px]"
            />
          </motion.div>
        </div>
      </div>

      <div className="bg-white text-[#1C1D58] lg:rounded-[80px] lg:py-[80px] py-[64px] ">
        <div className="lg:px-16 px-5 max-container">
          <div className="">
            {/* Top section with 3-column layout */}
            <div className="lg:flex  lg:mb-[100px] mb-[64px]">
              <div className="flex flex-col lg:space-y-7 space-y-5 min-w-[25%]">
                <div className="space-y-1">
                  <h2 className="text-[18px]">Client</h2>
                  <p className="text-[23px] font-bold">Altigreen EV</p>
                </div>
                <div className="space-y-1">
                  <h2 className="text-[18px]">Location</h2>
                  <p className="text-[23px] font-bold">Bengaluru, Karnataka</p>
                </div>
                <div className="space-y-1">
                  <h2 className="text-[18px]">Industry</h2>
                  <p className="text-[23px] font-bold">EV manufacturer</p>
                </div>
              </div>
              <div className="lg:text-[23px] lg:leading-[32px] text-[16px] leading-[22px] lg:mt-0 mt-8">
                <p className="">
                  Altigreen is a leader in EV technology and last-mile
                  transportation, with mobility platforms made in India. Built
                  on indigenous technology with over 93% domestic value-add, its
                  vehicles are designed for Indian roads and weather. With an
                  engineering-first approach, Altigreen delivers
                  high-performance EVs that exceed expectations.
                </p>{" "}
                <br />
                <p className="">
                  With 32 patents across 60 countries, Altigreen is driving
                  innovation in electric mobility. Its neEV series, including
                  cargo and passenger EVs, offers efficiency, long range, and
                  fast charging. A 300,000 sq. ft. facility in Karnataka and
                  expanding dealerships nationwide reflect its commitment to
                  sustainable, carbon-free transportation.
                </p>
              </div>
            </div>

            {/* Main content sections */}
            <div className="lg:space-y-[80px] space-y-[64px] w-[100%]">
              <section>
                <h3 className="lg:text-h3 text-[44px] leading-[44px] lg:leading-none font-bold mb-4 ">
                  The Objective
                </h3>
                <p className="lg:text-[23px] lg:leading-[32px] text-[16px] leading-[22px]">
                  Altigreen, an emerging leader in the electric vehicle
                  industry, had the potential to revolutionize transportation
                  but struggled to capture the attention it deserved. The goal
                  was to elevate the brand’s visibility, establish its
                  leadership in the EV space, and build a loyal following of
                  both investors and consumers passionate about sustainability.
                </p>
              </section>

              <section>
                <h3 className="lg:text-h3 text-[44px] leading-[44px] lg:leading-none font-bold mb-4 ">
                  The Strategy
                </h3>
                <p className="lg:text-[23px] lg:leading-[32px] text-[16px] leading-[22px]">
                  We tapped into the hearts and minds of Altigreen's target
                  audiences—tech enthusiasts, eco-conscious individuals, and
                  forward-thinking investors. Our strategy centered around three
                  key pillars:
                  <ul className="list-disc ml-6 mt-2">
                    <li>
                      Position Altigreen as a thought leader in the EV
                      revolution.
                    </li>
                    <li>
                      Craft compelling investor narratives to secure essential
                      funding.
                    </li>
                    <li>
                      Create a brand story that resonated with consumers’ values
                      around sustainability and innovation.
                    </li>
                  </ul>
                </p>
              </section>

              <section>
                <h3 className="lg:text-h3 text-[44px] leading-[44px] lg:leading-none font-bold mb-4 ">
                  The Outcome
                </h3>
                <p className="lg:text-[23px] lg:leading-[32px] text-[16px] leading-[22px]">
                  BrandiT’s strategic PR approach propelled Altigreen to
                  industry prominence:
                  <ul className="list-disc ml-6 mt-2">
                    <li>
                      <strong> National Media Coverage: </strong> Altigreen’s
                      story reached top-tier publications, establishing the
                      brand as a leader in innovation.
                    </li>
                    <li>
                      <strong> Successful Investor Engagement: </strong> We
                      helped secure critical funding rounds, accelerating
                      Altigreen’s growth and development.
                    </li>
                    <li>
                      <strong> Retail Expansion & Consumer Trust: </strong> PR
                      efforts drive traffic to dealerships and online platforms,
                      boosting brand recognition and trust.
                    </li>
                    <li>
                      <strong> Industry Leadership: </strong> Altigreen
                      solidified its position as a disruptor in the EV market,
                      shaping the future of transportation.
                    </li>
                  </ul>
                </p>
              </section>
            </div>

            <div className="lg:mt-[80px] mt-[64px] lg:block hidden">
              <img
                src="/caseImages/mid1.png"
                alt="News Banner"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="lg:mt-[80px] mt-[64px] lg:hidden block">
              {/* Single Image Display with Smooth Transition */}
              <div className="bg-gray-200 h-[220px] rounded-[8px] overflow-hidden relative">
                <img
                  src={newsPaperImages[currentIndex]}
                  alt={`Sample ${currentIndex + 1}`}
                  className="w-full h-full transition-opacity duration-700 ease-in-out opacity-100"
                />
              </div>

              {/* Dots Pagination with Numbers */}
              <div className="flex justify-center mt-8 gap-2">
                {newsPaperImages.map((_, dotIndex) => (
                  <div
                    key={dotIndex}
                    onClick={() => handleDotClick(dotIndex)}
                    className={`w-[8px] h-[8px] flex items-center justify-center rounded-full text-xs font-semibold cursor-pointer transition-all duration-300 ${
                      dotIndex === currentIndex
                        ? "bg-[#151642] text-white"
                        : "border border-[#151642] text-[#1C1D58]"
                    }`}
                  ></div>
                ))}
              </div>
            </div>

            <div className="lg:mt-[80px] mt-[64px]">
              <section>
                <h3 className="lg:text-h3 text-[44px] leading-[44px] lg:leading-none font-bold mb-4 ">
                  Conclusion
                </h3>
                <p className="lg:text-[23px] lg:leading-[32px] text-[16px] leading-[22px]">
                  BrandiT didn’t just elevate Altigreen’s brand; we helped
                  ignite a movement for a cleaner, more sustainable future. 
                </p>
              </section>
            </div>
          </div>

          <div className="lg:mt-10">
            <OtherCaseStrudies caseStudies={caseStudiesData}/>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default page;
