"use client";

import React, { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import OtherBlogs from "@/components/BlogPage/OtherBlogs";
import OtherCaseStrudies from "@/components/WorkPage/OtherCaseStrudies";

const page = () => {
  const newsPaperImages = [
    "/caseImages/hej1.png",
    "/caseImages/hej2.png",
    "/caseImages/hej3.png",
    "/caseImages/hej4.png",
    "/caseImages/hej5.png",
    "/caseImages/hej6.png",
  ];

  const caseStudiesData = [
    {
      id: 1,
      title: "EV Manufacturer",
      image: "/caseImages/cs1.png",
      csLogo: "/iconImages/caseLogo1.svg",
      nameTag: "EV Manufacturer",
      path: "/work/altigreen-ev",
    },
    {
      id: 2,
      title: "Alternative fuel",
      image: "/caseImages/cs2.png",
      csLogo: "/iconImages/caseLogo2.svg",
      nameTag: "Alternative fuel",
      path: "/work/buyofuel",
    },
    {
      id: 3,
      title: "Startup incubation arm of IIMB",
      image: "/caseImages/cs3.png",
      csLogo: "/iconImages/caseLogo3.svg",
      nameTag: "Startup incubation arm of IIMB",
      path: "/work/nsrcel",
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
              src="/caseImages/caseBanner5.png"
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
                  <p className="text-[23px] font-bold">Hejje</p>
                </div>
                <div className="space-y-1">
                  <h2 className="text-[18px]">Location</h2>
                  <p className="text-[23px] font-bold">Bengaluru, Karnataka</p>
                </div>
                <div className="space-y-1">
                  <h2 className="text-[18px]">Industry</h2>
                  <p className="text-[23px] font-bold">Healthcare</p>
                </div>
              </div>
              <div className="lg:text-[23px] lg:leading-[32px] text-[16px] leading-[22px] lg:mt-0 mt-8">
                <p className="">
                  HEJJE, India’s first best in class transition care center,
                  opened in Bengaluru in December 2024. A division of the M.S.
                  Ramaiah Family Conglomerate, it combines top-tier clinical
                  care with hospitality. Featuring art, music, and virtual
                  gaming rehab, HEJJE redefines recovery.
                </p>{" "}
                <br />
                <p className="">
                  With 20 inpatient rooms and a 10,000-square-foot sensory
                  garden, HEJJE offers a holistic healing experience. Located in
                  MSR North City, Bengaluru, it blends clinical excellence with
                  comfort, setting a new healthcare benchmark with innovative
                  care and mental wellness.
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
                  As a new player in India’s healthcare space, HEJJE needed to
                  carve out a unique identity in the transition care sector. The
                  challenge was clear: build awareness and establish credibility
                  by differentiating HEJJE from conventional rehabilitation
                  centers. The goal was to showcase its combination of clinical
                  expertise and luxury amenities, positioning it as the go-to
                  destination for holistic recovery.
                </p>
              </section>

              <section>
                <h3 className="lg:text-h3 text-[44px] leading-[44px] lg:leading-none font-bold mb-4 ">
                  The Strategy
                </h3>
                <p className="lg:text-[23px] lg:leading-[32px] text-[16px] leading-[22px]">
                  To address the problem statement and create a strong brand
                  presence, the PR strategy for HEJJE focused on the following
                  key areas:
                  <ul className="list-disc ml-6 mt-2">
                    <li>
                      <strong>Highlighting Uniqueness:</strong> Position HEJJE
                      as India's first best in class transition care center,
                      emphasizing its innovative integration of clinical care
                      with premium hospitality.
                    </li>
                    <li>
                      <strong>Multi-faceted approach: </strong> This included
                      actively engaging with media outlets to secure coverage in
                      Mainlines, healthcare, business & Trade publications.
                      Launching the facility with a high-profile event was key
                      to generating buzz and attracting key stakeholders. HEJJE
                      leveraged Regional Media, digital channels, to reach a
                      wider audience and build brand awareness. The approach
                      included positioning HEJJE's founders and experts as
                      thought leaders in the transition care space.
                    </li>
                    <li>
                      <strong> Targeted Media Outreach: </strong> Developed
                      press releases and media kits highlighting HEJJE's unique
                      features, such as its best-in-class hospitality, advanced
                      therapies, and focus on holistic recovery. Targeted media
                      outlets covering healthcare, business, and lifestyle to
                      maximize reach.
                    </li>
                    <li>
                      <strong> Thought Leadership Initiatives: </strong>{" "}
                      Positioned HEJJE's co-founders as thought leaders by
                      securing Guest Column and Authored article opportunities. 
                    </li>
                  </ul>
                </p>
              </section>

              <section>
                <h3 className="lg:text-h3 text-[44px] leading-[44px] lg:leading-none font-bold mb-4 ">
                  The Outcome
                </h3>
                <p className="lg:text-[23px] lg:leading-[32px] text-[16px] leading-[22px]">
                  The PR efforts yielded several positive outcomes:
                  <ul className="list-disc ml-6 mt-2">
                    <li>
                      <strong> Increased Awareness: </strong> HEJJE's launch was
                      successfully communicated to the target audience,
                      generating interest and awareness
                    </li>
                    <li>
                      <strong> Positive Media Coverage: </strong> Media coverage
                      in National Publications, healthcare publications and
                      local news outlets highlighted HEJJE's innovative approach
                      to transition care.
                    </li>
                    <li>
                      <strong> Positioned as Thought Leader:</strong> The
                      Spokespeople were positioned as leaders in the healthcare
                      sector by sharing their perspectives on pre-budget
                      expectations and contributing guest articles to well-known
                      publications such as the Hindustan Times, Money Control,
                      and News18
                    </li>
                  </ul>
                </p>
              </section>
            </div>

            <div className="lg:mt-[80px] mt-[64px] lg:block hidden">
              <img
                src="/caseImages/mid5.png"
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
                The results were far-reaching:
                <ul className="list-disc ml-6 mt-2">
                  <li>
                    <strong> Established Brand Authority: </strong> HEJJE
                    emerged as the undisputed leader in transition care, gaining
                    recognition from healthcare professionals, patients, and
                    families alike.
                  </li>
                  <li>
                    <strong> Increased Engagement: </strong> The media buzz
                    sparked greater interest in HEJJE’s services. 
                  </li>
                  <li>
                    <strong>Trust and Credibility: </strong> The strategic
                    positioning of HEJJE as a blend of clinical excellence
                    established trust and set it apart from competitors.
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
                  BrandiT’s PR strategy helped HEJJE stand out in a crowded
                  healthcare landscape. By focusing on its unique value
                  proposition and positioning its founders as thought leaders,
                  HEJJE gained the visibility and credibility needed to become
                  the leading name in transition care in India.
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
