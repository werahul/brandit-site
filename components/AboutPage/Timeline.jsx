"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const timelineData = [
  {
    id: 1,
    title: "Clarity",
    description:
      "Clear, crisp, and compelling; We craft stories that cut through the noise, ensuring your brand’s voice stands out.",
  },
  {
    id: 2,
    title: "Communication",
    description:
      "PR isn’t just talking; it’s about real connections. We deliver the right message to the right people at the right time.",
  },
  {
    id: 3,
    title: "Consistency",
    description:
      "Great brands aren’t built in a day. We keep your messaging sharp and consistent to make your brand unforgettable.",
  },
];

const Timeline = () => {
  const containerRef = useRef(null);
  const lineRef = useRef(null);
  const itemsRef = useRef([]);
  const indicatorsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const container = containerRef.current;
      const line = lineRef.current;

      // Progress Bar Animation
      gsap.to(line, {
        height: "100%",
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: itemsRef.current[0], 
          start: "top 30%",
          end: "bottom bottom",
          scrub: 4,
        },
      });

      // Ensure only one item has full opacity at a time
      itemsRef.current.forEach((item, index) => {
        if (!item) return;

        ScrollTrigger.create({
          trigger: item,
          start: "top 20%",
          end: "top 30%",
          onEnter: () => {
            gsap.to(itemsRef.current, { opacity: 0.3, duration: 0.5 });
            gsap.to(item, { opacity: 1, duration: 0.5 });
          },
        });
      });

      // Highlight and scale the active circle indicator
      const setActiveIndicator = (activeIndex) => {
        indicatorsRef.current.forEach((indicator, index) => {
          gsap.to(indicator, {
            backgroundColor: index === activeIndex ? "white" : "gray",
            scale: index === activeIndex ? 1.3 : 1,
            opacity: index === activeIndex ? 1 : 0.3,
            duration: 0.4,
          });
        });
      };

      timelineData.forEach((_, index) => {
        ScrollTrigger.create({
          trigger: itemsRef.current[index],
          start: "top 50%",
          end: "top 30%",
          onEnter: () => setActiveIndicator(index),
          onLeaveBack: () => setActiveIndicator(index - 1),
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="bg-[#002A00] text-white px-0 pt-0 pb-40 lg:min-h-[900px]" // Increased height
    >
      <div className="max-container relative flex gap-8 font-kanit">
        {/* Vertical Line and Circle Indicators */}
        <div className="relative w-1 ml-0">
          <div
            ref={lineRef}
            className="absolute lg:left-20 left-5 lg:w-1 w-0.5 rounded-[30px] bg-white transform -translate-x-1/2 h-0"
          />
          {timelineData.map((_, index) => (
            <div
              key={index}
              ref={(el) => (indicatorsRef.current[index] = el)}
              className="absolute lg:left-20 left-5 w-[12px] h-[12px] bg-gray-500 border-2 border-white rounded-full transform -translate-x-1/2"
              style={{ top: `${index * 40.5 + 14}%` }}
            />
          ))}
        </div>

        {/* Timeline Items */}
        <div className="flex flex-col items-start lg:gap-y-[160px] gap-y-[140px] lg:ml-40 ml-10 mt-16">
          {timelineData.map((item, index) => (
            <div
              key={item.id}
              ref={(el) => (itemsRef.current[index] = el)}
              className="flex items-center gap-6 opacity-30 transition-opacity duration-500 lg:pr-16 pr-5"
            >
              <div className="flex lg:flex-row flex-col lg:space-x-52 lg:items-center">
                <h3 className="lg:text-[48px] text-[28px] lg:leading-[48px] leading-[33px] mb-3 lg:min-w-[370px]">
                  {item.title}
                </h3>
                <p className="lg:text-[24px] text-[16px] lg:leading-[27px] leading-[140%]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
