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
    "/caseImages/techno1.png",
    "/caseImages/techno2.png",
    "/caseImages/techno3.png",
    "/caseImages/techno4.png",
    "/caseImages/techno5.png",
    "/caseImages/techno6.png",
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
      <Head>
        <title>Work | BRANDiT</title>
        <meta
          name="description"
          content="We adopted a bold approach to elevate TechnoSport above the competition. Our key strategies included:"
        />
      </Head>
      <Navbar />
      <div className=" lg:pb-40 pb-14 ">
        <div className=" max-container text-white lg:px-16 px-5 lg:pt-[240px] pt-[140px] pb-0 flex items-center lg:space-x-40">
          <motion.div>
            <img
              src="/caseImages/caseBanner2.png"
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
                  <p className="text-[23px] font-bold">TechnoSport</p>
                </div>
                <div className="space-y-1">
                  <h2 className="text-[18px]">Location</h2>
                  <p className="text-[23px] font-bold">Tiruppur, Tamil Nadu</p>
                </div>
                <div className="space-y-1">
                  <h2 className="text-[18px]">Industry</h2>
                  <p className="text-[23px] font-bold">Retail and Lifestyle</p>
                </div>
              </div>
              <div className="lg:text-[23px] lg:leading-[32px] text-[16px] leading-[22px] lg:mt-0 mt-8">
                <p className="">
                  TechnoSport, founded in 2015 in Bengaluru, is a leading
                  sportswear brand offering advanced activewear for men and
                  women. Its range includes T-shirts, polo shirts, sweatshirts,
                  jackets, and track pants, designed for performance with
                  moisture management, anti-microbial tech, and UPF50+
                  protection.
                </p>{" "}
                <br />
                <p className="">
                  TechnoSport focuses on innovation, offering high-quality,
                  comfortable sportswear for active lifestyles. With a strong
                  retail network across several states, the brand is expanding.
                  The company is enhancing its manufacturing, digital branding,
                  and distribution to solidify its market position.
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
                  TechnoSport, a rising star in the Indian activewear market,
                  was ready to disrupt the industry with its premium,
                  eco-friendly, and technologically advanced activewear at
                  competitive prices. However, the market was crowded with
                  established global players, and TechnoSport needed a strategy
                  to stand out, create buzz, and establish a strong presence,
                  especially in the digital space.
                </p>
              </section>

              <section>
                <h3 className="lg:text-h3 text-[44px] leading-[44px] lg:leading-none font-bold mb-4 ">
                  The Strategy
                </h3>
                <p className="lg:text-[23px] lg:leading-[32px] text-[16px] leading-[22px]">
                  We adopted a bold approach to elevate TechnoSport above the
                  competition. Our key strategies included:
                  <ul className="list-disc ml-6 mt-2">
                    <li>
                      <strong>
                        Highlighting the Unique Value Proposition:{" "}
                      </strong>{" "}
                      We emphasized TechnoSport’s blend of performance, style,
                      and affordability, ensuring that it stood out as the go-to
                      activewear brand for both fitness enthusiasts and everyday
                      wearers.
                    </li>
                    <li>
                      <strong>
                        {" "}
                        Leveraging the "Made in India" Narrative:{" "}
                      </strong>{" "}
                      We showcased TechnoSport’s authenticity and deep
                      connection to Indian culture, positioning the brand as a
                      locally made solution for Indian consumers’ needs.
                    </li>
                    <li>
                      <strong> Multi-Channel Communication: </strong> Through
                      press releases, interviews, and strategic social media
                      collaborations, we made sure TechnoSport’s message reached
                      a broad audience across multiple platforms.
                    </li>
                    <li>
                      <strong> Strategic Storytelling: </strong> We shared the
                      brand’s commitment to innovation, sustainability, and
                      local manufacturing, establishing TechnoSport as a brand
                      people could trust.
                    </li>
                    <li>
                      <strong> Capitalizing on Key Events: </strong> We
                      leveraged the Cricket World Cup with a fun, relatable
                      campaign— “Is World Cup Ko Har Maidaan Mein Khelo”—that
                      connected TechnoSport’s activewear to India’s passion for
                      cricket. cric
                    </li>
                  </ul>
                </p>
              </section>

              <section>
                <h3 className="lg:text-h3 text-[44px] leading-[44px] lg:leading-none font-bold mb-4 ">
                  The Outcome
                </h3>
                <p className="lg:text-[23px] lg:leading-[32px] text-[16px] leading-[22px]">
                  BrandiT’s strategic PR initiatives led to significant
                  achievements for TechnoSport:
                  <ul className="list-disc ml-6 mt-2">
                    <li>
                      <strong> Enhanced Brand Awareness: </strong> The “Is World
                      Cup Ko Har Maidaan Mein Khelo” campaign generated
                      widespread media attention, increasing the brand’s
                      visibility.
                    </li>
                    <li>
                      <strong> Market Leadership: </strong> TechnoSport became
                      India’s largest activewear brand by sales volume, with
                      over 12 million units sold in FY23, setting the brand
                      apart from the competition.
                    </li>
                    <li>
                      <strong> Positive Brand Perception: </strong> Focusing on
                      comfort, technology, and sustainability, TechnoSport
                      earned the trust of consumers, aligning the brand with
                      core values.
                    </li>
                    <li>
                      <strong> Media Exposure: </strong> TechnoSport’s story was
                      featured in top-tier publications like Financial Express,
                      Times of India, Cosmopolitan, Elle, and Harper’s Bazaar,
                      ensuring broad audience reach.
                    </li>
                  </ul>
                </p>
              </section>
            </div>

            <div className="lg:mt-[80px] mt-[64px] lg:block hidden">
              <img
                src="/caseImages/mid2.png"
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
                  BrandiT’s PR strategy transformed TechnoSport from a hidden
                  gem into the leader of India’s activewear market. By crafting
                  an engaging narrative and executing a multi-channel
                  communication plan, we helped TechnoSport not only compete
                  with global brands but also shine brighter. With over 12
                  million units sold, TechnoSport is now a force to be reckoned
                  with in the activewear industry.
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
