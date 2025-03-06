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
   "/caseImages/buyo1.png",
    "/caseImages/buyo2.png",
    "/caseImages/buyo3.png",
    "/caseImages/buyo4.png",
    "/caseImages/buyo5.png",
    "/caseImages/buyo6.png",
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
          content="  Buyofuel, founded in 2020 in Coimbatore, India, is an online marketplace for biofuels and waste materials."
        />
      </Head>
      <Navbar />
      <div className=" lg:pb-40 pb-14 ">
        <div className=" max-container text-white lg:px-16 px-5 lg:pt-[240px] pt-[140px] pb-0 flex items-center lg:space-x-40">
          <motion.div>
            <img
              src="/caseImages/caseBanner3.png"
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
                  <p className="text-[23px] font-bold">Buyofuel</p>
                </div>
                <div className="space-y-1">
                  <h2 className="text-[18px]">Location</h2>
                  <p className="text-[23px] font-bold">
                    Coimbatore, Tamil Nadu
                  </p>
                </div>
                <div className="space-y-1">
                  <h2 className="text-[18px]">Industry</h2>
                  <p className="text-[23px] font-bold">Alternative fuel</p>
                </div>
              </div>
              <div className="lg:text-[23px] lg:leading-[32px] text-[16px] leading-[22px] lg:mt-0 mt-8">
                <p className="">
                  Buyofuel, founded in 2020 in Coimbatore, India, is an online
                  marketplace for biofuels and waste materials. The platform
                  connects suppliers, manufacturers, and consumers to buy and
                  sell various biofuels, including solid fuels like briquettes,
                  pellets, biodiesel, and Bio CNG.
                </p>{" "}
                <br />
                <p className="">
                  With a focus on sustainability, Buyofuel aims to enhance the
                  accessibility of green fuel networks, promoting a cleaner,
                  emission-free environment. The platform has raised significant
                  funding and reported strong annual revenue, further
                  strengthening the efficiency of the biofuel industry.
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
                  Buyofuel, India’s first marketplace for converting all types
                  of waste (solid, liquid, and gas) into biofuel, faced the
                  challenge of introducing a groundbreaking concept to the
                  market. The main objectives were to raise awareness about this
                  innovative solution and educate the market on the economic and
                  environmental benefits of waste-to-biofuel conversion.
                </p>
              </section>

              <section>
                <h3 className="lg:text-h3 text-[44px] leading-[44px] lg:leading-none font-bold mb-4 ">
                  The Strategy
                </h3>
                <p className="lg:text-[23px] lg:leading-[32px] text-[16px] leading-[22px]">
                  To overcome these hurdles, we implemented a multifaceted PR
                  strategy:
                  <ul className="list-disc ml-6 mt-2">
                    <li>
                      <strong>Raising Awareness Through Media:</strong> We
                      launched a comprehensive PR campaign that included press
                      releases, targeted media outreach, and influencer
                      partnerships. We highlighted Buyofuel’s first-mover
                      advantage, positioning it as a pioneering solution in
                      waste management.
                    </li>
                    <li>
                      <strong>Educating the Market:</strong> We focused on
                      educating businesses, municipalities, and consumers about
                      the value of waste-to-biofuel. Through thought leadership
                      articles, interviews, and case studies, we demonstrated
                      that this eco-friendly solution was also a smart business
                      move.
                    </li>
                    <li>
                      <strong> Building Credibility & Networking: </strong> We
                      worked on establishing key partnerships, engaging with
                      industry leaders, investors, and environmental advocates
                      to build Buyofuel’s credibility and set the foundation for
                      long-term growth.
                    </li>
                    <li>
                      <strong> Leveraging the First-Mover Advantage: </strong>{" "}
                      We capitalized on Buyofuel’s unique position as India’s
                      only waste-to-biofuel marketplace, shaping the future of
                      waste management and biofuel production in India.
                    </li>
                  </ul>
                </p>
              </section>

              <section>
                <h3 className="lg:text-h3 text-[44px] leading-[44px] lg:leading-none font-bold mb-4 ">
                  The Outcome
                </h3>
                <p className="lg:text-[23px] lg:leading-[32px] text-[16px] leading-[22px]">
                  BrandiT’s PR strategy delivered remarkable results:
                  <ul className="list-disc ml-6 mt-2">
                    <li>
                      <strong> Increased Awareness: </strong> Targeted media
                      outreach and influencer collaborations boosted Buyofuel’s
                      visibility and introduced the concept to a wider audience,
                      gaining attention from key publications.
                    </li>
                    <li>
                      <strong> Educated the Market: </strong> We successfully
                      showcased the benefits of waste-to-biofuel solutions,
                      demonstrating both environmental and economic advantages
                      to businesses, municipalities, and investors.
                    </li>
                    <li>
                      <strong>
                        {" "}
                        Established Buyofuel as a Market Leader:{" "}
                      </strong>{" "}
                      Buyofuel’s first-mover advantage and innovative solution
                      helped it emerge as the go-to marketplace for
                      waste-to-biofuel conversion, attracting industry leaders
                      and stakeholders.
                    </li>
                    <li>
                      <strong>
                        {" "}
                        Increased Industry Interest & Partnerships:{" "}
                      </strong>{" "}
                      Buyofuel secured valuable partnerships with businesses and
                      municipalities, positioning the brand as a key player in
                      sustainable waste management.
                    </li>
                  </ul>
                </p>
              </section>
            </div>

            <div className="lg:mt-[80px] mt-[64px] lg:block hidden">
              <img
                src="/caseImages/mid3.png"
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
                In a short period, Buyofuel experienced significant growth:
                <ul className="list-disc ml-6 mt-2">
                  <li>
                    <strong> Positioned as a Pioneer: </strong> Buyofuel became
                    India’s leading marketplace for converting waste to biofuel,
                    solidifying its position as a market leader in an emerging
                    and high-growth sector.
                  </li>
                  <li>
                    <strong> Market Education Led to Adoption: </strong>{" "}
                    Increased awareness and education led to businesses and
                    consumers embracing waste-to-biofuel solutions, with
                    Buyofuel becoming synonymous with innovation in waste
                    management.
                  </li>
                  <li>
                    <strong>Enhanced Reputation and Credibility:</strong> With
                    consistent media coverage, networking, and market education,
                    Buyofuel’s reputation as an environmental and business
                    innovator grew, solidifying its position at the forefront of
                    the industry.
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
                  Through BrandiT’s strategic PR efforts, Buyofuel successfully
                  raised awareness and educated the market on the benefits of
                  converting waste to biofuel. Positioned as a thought leader in
                  sustainability, Buyofuel is now a trailblazer in the waste
                  management sector, demonstrating how waste can be transformed
                  into a valuable resource for the future.
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
