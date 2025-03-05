"use client";

import React, { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import OtherBlogs from "@/components/BlogPage/OtherBlogs";
import OtherCaseStrudies from "@/components/WorkPage/OtherCaseStrudies";

const page = () => {
  const newsPaperImages = [
    "/caseImages/tab1.png",
    "/caseImages/tab2.png",
    "/caseImages/tab3.png",
    "/caseImages/tab4.png",
    "/caseImages/tab5.png",
    "/caseImages/tab6.png",
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
        <div className=" max-container text-white lg:px-16 px-5 lg:pt-[240px] pt-[140px] pb-0 flex items-center lg:space-x-40">
          <motion.div>
            <img
              src="/caseImages/caseBanner6.png"
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
                  <p className="text-[23px] font-bold">Tabreed India </p>
                </div>
                <div className="space-y-1">
                  <h2 className="text-[18px]">Location</h2>
                  <p className="text-[23px] font-bold">Delhi</p>
                </div>
                <div className="space-y-1">
                  <h2 className="text-[18px]">Industry</h2>
                  <p className="text-[23px] font-bold">District Cooling</p>
                </div>
              </div>
              <div className="lg:text-[23px] lg:leading-[32px] text-[16px] leading-[22px] lg:mt-0 mt-8">
                <p className="">
                  Tabreed India, a subsidiary of Tabreed Asia Central Cooling
                  Company, brings 25 years of expertise in district cooling.
                  Based in the UAE, Tabreed pioneered this efficient solution
                  across the GCC, setting industry standards and partnering on
                  key infrastructure projects.
                </p>{" "}
                <br />
                <p className="">
                  Tabreed India, a subsidiary of Tabreed Asia Central Cooling
                  Company, brings 25 years of expertise in district cooling.
                  Based in the UAE, Tabreed pioneered this efficient solution
                  across the GCC, setting industry standards and partnering on
                  key infrastructure projects.
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
                  To establish Tabreed India as the leading provider of
                  sustainable district cooling solutions in the Indian market
                  and to increase awareness and adoption of district cooling
                  technology among key stakeholders.
                </p>
              </section>

              <section>
                <h3 className="lg:text-h3 text-[44px] leading-[44px] lg:leading-none font-bold mb-4 ">
                  The Strategy
                </h3>
                <p className="lg:text-[23px] lg:leading-[32px] text-[16px] leading-[22px]">
                  <ul className="list-disc ml-6 mt-2">
                    <li>
                      <strong>Overall Strategy: </strong> Position Tabreed India
                      as a thought leader and trusted partner in sustainable
                      cooling by highlighting the environmental and economic
                      benefits of district cooling, leveraging strategic
                      partnerships, and showcasing successful project
                      implementations. <br />
                      Create Press Release and News Articles around Strategic Partnerships, Workshops.
                    </li>
                    <li>
                      <strong>Thought Leadership Articles: </strong> Articles in
                      well-known Publications highlighting the benefits of
                      district cooling, Tabreed's expertise, and its
                      contribution to reducing carbon emissions.
                    </li>
                    <li>
                      <strong> Media Relations: </strong> Proactively engage
                      with Mainlines and Trade media outlets to secure coverage
                      of Tabreed's projects, partnerships, and thought
                      leadership on sustainable cooling.
                    </li>
                  </ul>
                </p>
              </section>

              <section>
                <h3 className="lg:text-h3 text-[44px] leading-[44px] lg:leading-none font-bold mb-4 ">
                  The Outcome
                </h3>
                <p className="lg:text-[23px] lg:leading-[32px] text-[16px] leading-[22px]">
                  <ul className="list-disc ml-6 mt-2">
                    <li>
                      Increased awareness and understanding of district cooling
                      benefits among Indian stakeholders.
                    </li>
                    <li>
                      Established Tabreed India as a thought leader in the
                      sustainable cooling space through media relations and
                      thought leadership articles.
                    </li>
                    <li>
                      Strengthened relationships with strategic partners like
                      Tata Realty and Plaksha University, enhancing credibility.
                    </li>
                    <li>
                      Generated increased interest from developers and
                      policymakers, positioning Tabreed India for future market
                      growth.
                    </li>
                  </ul>
                </p>
              </section>
            </div>

            <div className="lg:mt-[80px] mt-[64px] lg:block hidden">
              <img
                src="/caseImages/mid6.png"
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
                <ul className="list-disc ml-6 mt-2">
                  <li>
                    Shifted perceptions about district cooling, positioning
                    Tabreed India as a leader in sustainable cooling.
                  </li>
                  <li>
                    Promoted the environmental and cost-effectiveness benefits
                    of district cooling, aligning with India’s sustainability
                    goals.
                  </li>
                  <li>
                    Built trust and credibility among key stakeholders, paving
                    the way for broader adoption of district cooling technology.
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
                  BrandiT’s PR strategy effectively positioned Tabreed India in
                  the sustainable district cooling solutions space. By focusing
                  on environmental and economic benefits, along with successful
                  partnerships, the strategy helped build trust, educate
                  stakeholders, and paved the way for broader adoption of
                  district cooling technology in India.
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
