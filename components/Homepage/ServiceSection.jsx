"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

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
      title: "Service 1",
      subServices: ["Sub Service 1", "Sub Service 2", "Sub Service 3"],
    },
    {
      id: 2,
      title: "Service 2",
      subServices: ["Sub Service 1", "Sub Service 2", "Sub Service 3"],
    },
    {
      id: 3,
      title: "Service 3",
      subServices: ["Sub Service 1", "Sub Service 2", "Sub Service 3"],
    },
    {
      id: 4,
      title: "Service 4",
      subServices: ["Sub Service 1", "Sub Service 2", "Sub Service 3"],
    },
    {
      id: 5,
      title: "Service 5",
      subServices: ["Sub Service 1", "Sub Service 2", "Sub Service 3"],
    },
    {
      id: 6,
      title: "Service 6",
      subServices: ["Sub Service 1", "Sub Service 2", "Sub Service 3"],
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
          className="mb-8 w-[30%]"
          variants={fadeUpVariants}
          custom={0}
        >
          <h2 className="text-h2 font-bold text-navy-900">Services ipsum</h2>
          <p className="mt-4">
            Lorem ipsum dolor sit amet consectetur. Id laoreet magna non cursus
            nulla porttitor suscipit pharetra. Diam ut eget vitae non elementum
            ullamcorper suspendisse maecenas. In imperdiet mauris in feugiat
          </p>
          <div className="cta mt-6">
            <button className="relative w-[130px] h-[56px] bg-gradient-to-r border-[1.5px] border-[#45D400] text-[#45D400] text-[16px] font-bold rounded-[40px] overflow-hidden group">
              <span className="absolute inset-0 bg-gradient-to-r from-[#45D400] via-[#36BA00] to-[#005E00] transition-transform scale-0 group-hover:scale-100 group-hover:rotate-180 duration-500 ease-in-out rounded-[40px]"></span>
              <span className="relative z-10 block text-center group-hover:text-white transition-transform duration-300 ease-in-out group-hover:scale-110">
                Lorem
              </span>
              <span className="absolute -inset-1 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-[40px]"></span>
            </button>
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
              className={`p-4 rounded-l-lg transition-all duration-300 h-[131px] flex items-center border-t border-[#e2e4ecad] ${
                hoveredService === service.id
                  ? "bg-green-gradient text-white"
                  : "bg-transparent text-navy-900"
              }`}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
              variants={fadeUpVariants}
              custom={0.2 + index * 0.1}
            >
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center space-x-3">
                  {/* Icon */}
                  <div
                    className={`transition-opacity duration-300 ${
                      hoveredService === service.id ? "hidden" : "block"
                    }`}
                  >
                    <Image
                      src="iconImages/ab1.svg"
                      alt="about-home icon"
                      width={53}
                      height={53}
                    />
                  </div>

                  {/* Title */}
                  <span className="text-[36px]">{service.title}</span>
                </div>

                {/* Sub-services */}
                <div
                  className={`flex gap-x-6 transition-opacity duration-300 space-x-8 ${
                    hoveredService === service.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {service.subServices.map((subService, index) => (
                    <span key={index} className="text-sm">
                      {subService}
                    </span>
                  ))}
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