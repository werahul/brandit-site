"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const CaseStudies = () => {
  const cases = [
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
    {
      id: 4,
      title: "District cooling",
      image: "/caseImages/cs4.png",
      csLogo: "/iconImages/caseLogo4.svg",
      nameTag: "District cooling",
      path: "/work/tabreed-india",
    },
    {
      id: 5,
      title: "Retail and Lifestyle",
      image: "/caseImages/cs5.png",
      csLogo: "/iconImages/caseLogo5.svg",
      nameTag: "Retail and Lifestyle",
      path: "/work/technosport",
    },
    {
      id: 6,
      title: "Healthcare",
      image: "/caseImages/cs6.png",
      csLogo: "/iconImages/caseLogo6.svg",
      nameTag: "Healthcare",
      path: "/work/hejje",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: index * 0.2 },
    }),
  };

  return (
    <div className="px-0 py-0 text-[#1C1D58]">
      {/* Header Section */}
      <motion.div
        className="flex justify-between items-center mb-8"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <h2 className="lg:text-h2 text-[44px] leading-[44px] lg:leading-[55px] font-bold">
          Impact Reports
        </h2>
        <div className="hidden lg:block">
          <Link href="/work">
            <span className="hover:underline">View All</span>
          </Link>
        </div>
      </motion.div>

      {/* Case Studies Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-0">
        {cases.map((item, index) => (
          <Link href={item.path}>
            <motion.div
              key={item.id}
              className={`relative rounded-lg overflow-hidden group cursor-pointer lg:h-[483px] ${
                index >= 3 ? "hidden lg:block" : ""
              } `}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={index}
              variants={fadeUp}
            >
              {/* Background Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black-gradient opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>

              {/* Logo & Name Tag */}
              <div className="absolute bottom-[18px] w-full flex flex-col items-center text-white opacity-100">
                <img src={item.csLogo} alt={item.nameTag} />
                <p className="text-[14px] py-1">{item.nameTag}</p>
              </div>

              {/* Redirect Arrow */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg
                  width="49"
                  height="49"
                  viewBox="0 0 49 49"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_18_5025)">
                    <path
                      d="M36.3446 12.7816C36.344 12.7815 36.3435 12.7814 36.3429 12.7814L26.639 12.2469C25.9121 12.2068 25.2902 12.7636 25.2501 13.4907C25.21 14.2177 25.7669 14.8396 26.4939 14.8796L33.009 15.2385L12.1656 33.8147C11.622 34.2991 11.5741 35.1325 12.0586 35.676C12.543 36.2196 13.3763 36.2675 13.9199 35.7831L34.7632 17.2069L34.3728 23.7201C34.3293 24.4469 34.8832 25.0714 35.61 25.1149C36.337 25.1585 36.9613 24.6044 37.0049 23.8777L37.5864 14.1766C37.5864 14.176 37.5863 14.1755 37.5864 14.1749C37.629 13.4466 37.0706 12.8225 36.3446 12.7816Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_18_5025">
                      <rect
                        width="33.7498"
                        height="33.7498"
                        fill="white"
                        transform="translate(0.831055 23.0779) rotate(-41.7084)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>

      {/* Mobile 'View All' Button */}
      <div className="lg:hidden mt-0 flex items-center justify-center">
        <Link href="/work">
          <span className="hover:underline">View All</span>
        </Link>
      </div>
    </div>
  );
};

export default CaseStudies;
