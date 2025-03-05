"use client";

import React, { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import OtherBlogs from "@/components/BlogPage/OtherBlogs";
import OtherCaseStrudies from "@/components/WorkPage/OtherCaseStrudies";

const page = () => {
  const newsPaperImages = [
    "/caseImages/ncl1.png",
    "/caseImages/ncl2.png",
    "/caseImages/ncl3.png",
    "/caseImages/ncl4.png",
    "/caseImages/ncl5.png",
    "/caseImages/ncl6.png",
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
      <Navbar />
      <div className=" lg:pb-40 pb-14 ">
        <div className=" max-container text-white lg:px-16 px-5 lg:pt-[280px] pt-[140px] pb-0 flex items-center lg:space-x-40">
          <motion.div>
            <img
              src="/caseImages/caseBanner4.png"
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
                  <p className="text-[23px] font-bold">NSRCEL</p>
                </div>
                <div className="space-y-1">
                  <h2 className="text-[18px]">Location</h2>
                  <p className="text-[23px] font-bold">Bengaluru, Karnataka</p>
                </div>
                <div className="space-y-1">
                  <h2 className="text-[18px]">Industry</h2>
                  <p className="text-[23px] font-bold">
                    Startup incubation arm of IIMB
                  </p>
                </div>
              </div>
              <div className="lg:text-[23px] lg:leading-[32px] text-[16px] leading-[22px] lg:mt-0 mt-8">
                <p className="">
                  NSRCEL (NS Raghavan Centre for Entrepreneurial Learning),
                  founded in 1999 at IIM Bangalore, supports startups with
                  various programs. It provides incubation for business and
                  social ventures, focusing on sustainable mobility, tech
                  innovations, and women entrepreneurs, boosting India’s startup
                  ecosystem.
                </p>{" "}
                <br />
                <p className="">
                  NSRCEL offers mentorship, funding, and access to IIMB’s
                  network to startups at various stages. Its programs help scale
                  consumer brands and social ventures, driving India’s
                  entrepreneurial landscape by addressing commercial and social
                  challenges for impactful growth.
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
                  NSRCEL, one of India’s oldest incubation centers, needed to
                  stand out in a crowded startup ecosystem. The goal was to
                  raise awareness of their unique value proposition and
                  comprehensive support system, ensuring startups knew they were
                  the partner for success from idea to investor.
                </p>
              </section>

              <section>
                <h3 className="lg:text-h3 text-[44px] leading-[44px] lg:leading-none font-bold mb-4 ">
                  The Strategy
                </h3>
                <p className="lg:text-[23px] lg:leading-[32px] text-[16px] leading-[22px]">
                  To achieve this, we implemented a comprehensive PR strategy:
                  <ul className="list-disc ml-6 mt-2">
                    <li>
                      <strong>Visibility & Brand Awareness:</strong> Media
                      outreach, press releases, and events showcased NSRCEL’s
                      legacy and position as a trusted incubator.
                    </li>
                    <li>
                      <strong>Value Proposition – </strong> Why NSRCEL?
                      Highlighting their end-to-end support, mentorship, and
                      investor connections, we positioned NSRCEL as the ideal
                      partner for entrepreneurs.
                    </li>
                    <li>
                      <strong> Relevance: </strong> We emphasized how NSRCEL’s
                      tailored mentorship met the needs of today’s modern
                      startups.
                    </li>
                    <li>
                      <strong> Networking: </strong> We connected NSRCEL’s
                      network with investors, mentors, and key industry players,
                      fostering growth opportunities.
                    </li>
                  </ul>
                </p>
              </section>

              <section>
                <h3 className="lg:text-h3 text-[44px] leading-[44px] lg:leading-none font-bold mb-4 ">
                  The Outcome
                </h3>
                <p className="lg:text-[23px] lg:leading-[32px] text-[16px] leading-[22px]">
                  The PR strategy led to
                  <ul className="list-disc ml-6 mt-2">
                    <li>
                      <strong> Enhanced Awareness: </strong> Media outreach and
                      events boosted NSRCEL’s presence in the startup ecosystem.
                    </li>
                    <li>
                      <strong> Positioned as a Leader: </strong> NSRCEL’s legacy
                      and experience solidified its reputation as a top
                      incubator.
                    </li>
                    <li>
                      <strong> Stronger Connections:</strong> Increased
                      networking opportunities helped forge valuable
                      relationships between startups and investors.
                    </li>
                    <li>
                      <strong>Increased Engagement:</strong> A clearer value
                      proposition attracted more startups seeking support.
                    </li>
                  </ul>
                </p>
              </section>
            </div>

            <div className="lg:mt-[80px] mt-[64px] lg:block hidden">
              <img
                src="/caseImages/mid4.png"
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
                  className="w-full h-full  transition-opacity duration-700 ease-in-out opacity-100"
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

            <section className="lg:mt-[80px] mt-[64px]">
              <h3 className="lg:text-h3 text-[44px] leading-[44px] lg:leading-none font-bold mb-4 ">
                The Impact
              </h3>
              <p className="lg:text-[23px] lg:leading-[32px] text-[16px] leading-[22px]">
                The strategy produced significant results:
                <ul className="list-disc ml-6 mt-2">
                  <li>
                    <strong> Legacy & Credibility: </strong> NSRCEL’s
                    long-standing presence attracted new ventures and investors.
                  </li>
                  <li>
                    <strong> Economic Growth: </strong> NSRCEL played a key role
                    in fostering innovation and creating jobs.
                  </li>
                  <li>
                    <strong>Comprehensive Support:</strong> Entrepreneurs now
                    have the tools and resources they needed to succeed.
                  </li>
                </ul>
              </p>
            </section>

            <div className="lg:mt-[80px] mt-[64px]">
              <section>
                <h3 className="lg:text-h3 text-[44px] leading-[44px] lg:leading-none font-bold mb-4 ">
                  Conclusion
                </h3>
                <p className="lg:text-[23px] lg:leading-[32px] text-[16px] leading-[22px]">
                  BrandiT’s PR strategy strengthened NSRCEL’s position as the
                  leader in startup incubation. By highlighting its experience
                  and tailored support, we made NSRCEL the go-to choice for
                  startups looking for comprehensive, trusted support.
                </p>
              </section>
            </div>
          </div>

          <div className="lg:mt-10">
            <OtherCaseStrudies caseStudies={caseStudiesData} />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default page;
