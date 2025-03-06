"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion"; // Import motion and useInView

// Define animation variants
const raiseFromBottom = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const FeaturedClients = ({ images, title }) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { threshold: 0.3 }); // Trigger when 30% of the section is visible

  return (
    <div>
      {/* Partner Logos Section */}
      <div className="lg:pt-[90px] pt-[50px]" ref={sectionRef}>
        <h6 className="text-[23px] leading-[27px] text-center text-[#1C1D58]">
          {title}
        </h6>
        <motion.div
          className="marquee"
          variants={raiseFromBottom}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="marqueeGroup">
            {images.map((el, index) => (
              <motion.div
                key={index}
                className="imageGroup2"
                variants={raiseFromBottom}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                <img src={el} className="imaGe2" alt="partner logos"  loading="lazy" />
              </motion.div>
            ))}
          </div>

          {/* Duplicate the marqueeGroup for continuous scrolling effect */}
          <div className="marqueeGroup">
            {images.map((el, index) => (
              <motion.div
                key={index}
                className="imageGroup2"
                variants={raiseFromBottom}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                <img src={el} className="imaGe2" alt="partner logos" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FeaturedClients;
