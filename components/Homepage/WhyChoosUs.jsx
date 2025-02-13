"use client";

import React from "react";
import { motion, animate, useInView } from "framer-motion";

const Counter = ({ value }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  const [counter, setCounter] = React.useState(0);

  // Remove the '+' and any spaces, convert to number
  const finalValue = parseInt(value.replace(/\+|\s/g, ''));

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
  }, [finalValue, isInView]);

  return (
    <span ref={ref} className="inline-block">
      {counter}
      {value.includes('+') ? '+' : ''}
    </span>
  );
};

const WhyChooseUs = () => {
  const stats = [
    {
      number: "1000+",
      description: "Social Campaigns Launched",
    },
    {
      number: "2000+",
      description: "Trusted Partnerships",
    },
    {
      number: "5000+",
      description: "Counting Cups Of Coffee",
    },
    {
      number: "1000+",
      description: "Media Networks",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="pt-[120px] text-[#1C1D58]">
      <div className="">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left side content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-h2 font-bold mb-6">
              Why We Are The Right Choice For You
            </h2>
            <p className="text-[18px] leading-[30px]">
              At BrandiT Communications, we blend expertise, creativity, and media connections to craft PR campaigns that keep your brand ahead in the right conversations.
            </p>
            <p className="font-bold mt-[20px] hover:underline cursor-pointer">Join Us</p>
          </motion.div>

          {/* Right side stats */}
          <motion.div
            className="grid grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={containerVariants}
                className={`text-center lg:text-left py-10 px-7 border-[#B3B3B380] ${
                  index === 0
                    ? "border-l border-b"
                    : index === 1
                    ? "border-l border-r border-b"
                    : index === 2
                    ? "border-l"
                    : "border-l border-r"
                }`}
              >
                <p className="text-[18px] leading-[21px]">{stat.description}</p>
                <div className="text-[56px] mt-[35px] mb-2">
                  <Counter value={stat.number} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;