"use client";

import Image from "next/image";
import React from "react";
import { motion, animate, useInView } from "framer-motion";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (customDelay) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: customDelay },
  }),
};

const AboutSection = () => {
  const aboutDesc = [
    {
      icon: "/iconImages/ab1.svg",
      desc: "150+ industries served, driving brand success and innovation.",
    },
    {
      icon: "/iconImages/ab2.svg",
      desc: "800+ startups, amplifying brand growth and impact.",
    },
    {
      icon: "/iconImages/ab3.svg",
      desc: "999+ happy clients, enhancing brands and driving success.",
    },
  ];

  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  const [counter, setCounter] = React.useState(0);
  const finalValue = 19;

  React.useEffect(() => {
    if (isInView) {
      const controls = animate(0, finalValue, {
        duration: 2,
        onUpdate: (value) => {
          setCounter(Math.round(value));
        },
        ease: "easeOut",
      });

      return () => controls.stop();
    }
  }, [isInView]);
  return (
    <div className=" bg-[#EAEAF4] text-[#1C1D58] rounded-b-[80px]  lg:pt-[184px] lg:pb-[145px]">
      <div className="max-container px-16 ">
        <motion.div
          className="flex items-center justify-between"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {/* Left Content */}
          <motion.div className="relative" variants={fadeUpVariants} custom={0}>
            {/* Background Image */}
            <img
              src="/images/bgElementAbout.png"
              alt="Background Element"
              className="absolute -top-3 -left-10 w-[543px] object-cover"
            />
            {/* Text Content */}
            <h2 className="text-h2 text-[#1C1D58] font-bold relative">
              Where Media Meets <br /> Strategy, Crisis <br /> Sparks
              Innovation, <br /> and Brands Thrive.
            </h2>
          </motion.div>

          {/* Right Content */}
          <motion.div
            className="flex space-x-12 w-[60%] flex-row items-center"
            variants={fadeUpVariants}
            custom={0.2}
          >
            <div className="relative">
              <img
                src="/images/greenRoundMask.svg"
                alt="green Mask"
                className="min-w-[226px]"
              />
              <div
                ref={ref}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-semibold text-h1 text-white"
              >
                {counter}+
              </div>
            </div>
            <div className="text-[18px] leading-[30px] text-[#1C1D58]">
              <p className="font-bold mb-4">19+ Years of Experience,</p>
              With over 19 years of experience, we’ve mastered the art of PR,
              delivering results-driven strategies and building long-lasting
              relationships that propel brands forward.
            </div>
          </motion.div>
        </motion.div>

        {/* Grid Section */}
        <motion.div
          className="grid grid-cols-3 space-x-10 mt-[145px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {aboutDesc.map((item, index) => {
            // Split number from the rest of the text
            const [boldPart, ...rest] = item.desc.split(" ");

            return (
              <motion.div
                className="flex flex-row space-x-[52px] items-center border-t border-[#9a9dafad] pt-[36px]"
                variants={fadeUpVariants}
                custom={0.2 * (index + 1)}
                key={index}
              >
                <div>
                  <Image
                    src={item.icon}
                    alt={`about-home icon ${index + 1}`}
                    width={73}
                    height={73}
                  />
                </div>
                <p className="leading-[21px] text-[18px]">
                  <strong>{boldPart}</strong> {rest.join(" ")}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default AboutSection;
