"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (customDelay) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: customDelay },
  }),
};

const ServiceSection = () => {
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      id: 1,
      title: "Brand Storytelling",
      subServices: ["Authenticity", "Relatability", "Clear Message"],
      defaultImg: "/iconImages/brandstroyService.svg",
      hoverImg: "/iconImages/brandstroyServiceHover.svg",
    },
    {
      id: 2,
      title: "Public Relations",
      subServices: [
        "Media Relations",
        "Crisis Communication",
        "Social Media Management",
      ],
      defaultImg: "/iconImages/prService.svg",
      hoverImg: "/iconImages/prServiceHover.svg",
    },
    {
      id: 3,
      title: "Influencer Marketing",
      subServices: [
        " Strategic Partnerships",
        "Content Co-Creation",
        "Campaign Optimization",
      ],
      defaultImg: "/iconImages/influencerService.svg",
      hoverImg: "/iconImages/influencerServiceHover.svg",
    },
    {
      id: 4,
      title: "Guestlist Curation",
      subServices: [
        "Targeted Invitations",
        "Networking Facilitation",
        "Event Segmentation",
      ],
      defaultImg: "/iconImages/guestlistService.svg",
      hoverImg: "/iconImages/guestlistServiceHover.svg",
    },
    {
      id: 5,
      title: "Brand Strategy Consulting",
      subServices: [
        "Go-To Market Strategy",
        "Brand Positioning",
        "Brand Discovery",
      ],
      defaultImg: "/iconImages/brandStratService.svg",
      hoverImg: "/iconImages/brandStratServiceHover.svg",
    },
  ];

  return (
    <div className="text-[#1C1D58] bg-white relative rounded-b-[80px]">
      <img
        src="/images/bgElementcase.png"
        alt="Background Element"
        className="absolute bottom-0 object-cover rounded-b-[80px]"
      />
      <motion.div
        className="flex space-x-32 maxLeftOnly pl-16 py-[140px] relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        {/* Left Section */}
        <motion.div
          className="mb-8 w-[40%]"
          variants={fadeUpVariants}
          custom={0}
        >
          <h2 className="text-h2 font-bold text-navy-900">What We Deliver</h2>
          <p className="mt-4">
            At BrandiT Communications, we craft dynamic, data-driven strategies
            in partnership with our clients. Through transparent insights and
            creativity, we refine campaigns to deliver impactful results.
          </p>
          <div className="cta mt-6">
            <Link href="/services" className="">
              <button className="relative w-[130px] h-[56px] bg-gradient-to-r border-[1.5px] border-[#45D400] text-[#45D400] text-[16px] rounded-[40px] overflow-hidden group">
                <span className="absolute inset-0 bg-gradient-to-r from-[#45D400] via-[#36BA00] to-[#005E00] transition-transform scale-0 group-hover:scale-100 group-hover:rotate-180 duration-500 ease-in-out rounded-[40px]"></span>
                <span className="relative z-10 block text-center group-hover:text-white transition-transform duration-300 ease-in-out group-hover:scale-110">
                  See More
                </span>
                <span className="absolute -inset-1 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-[40px]"></span>
              </button>
            </Link>
          </div>
        </motion.div>
        {/* Right Section */}
        <motion.div
          className="space-y-0 w-[70%]"
          variants={fadeUpVariants}
          custom={0.2}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className={`relative p-4 rounded-l-lg transition-all duration-300 h-[131px] flex items-center border-t border-[#e2e4ecad] overflow-hidden`}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
              variants={fadeUpVariants}
              custom={0.2 + index * 0.1}
            >
              {/* Liquid Fill Background */}
              <motion.div
                className="absolute inset-0 z-0 bg-green-gradient"
                initial={{ scaleX: 0 }}
                animate={{
                  scaleX: hoveredService === service.id ? 1 : 0,
                }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                style={{
                  transformOrigin: "left",
                }}
              />

              <div className="flex flex-row items-center w-full relative z-10">
                <div className="flex items-center">
                  {/* Icon with Hover Effect */}
                  <div className="mr-4 relative w-[53px] h-[53px]">
                    <Image
                      src={
                        hoveredService === service.id
                          ? service.hoverImg
                          : service.defaultImg
                      }
                      alt={`${service.title} icon`}
                      width={50}
                      height={50}
                      className="transition-opacity duration-300"
                    />
                  </div>
                </div>

                <div className="">
                  <p
                    className={`text-[36px] ${
                      hoveredService === service.id
                        ? "text-white"
                        : "text-navy-900"
                    }`}
                  >
                    {service.title}
                  </p>
                  <div
                    className={`flex gap-x-6 transition-opacity duration-300 space-x-8 ${
                      hoveredService === service.id
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                  >
                    {service.subServices.map((subService, index) => (
                      <span key={index} className="text-sm text-white">
                        {subService}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ServiceSection;
