"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const timelineData = [
  { id: 1, title: "Approach 1", description: "Description for Approach 1." },
  { id: 2, title: "Approach 2", description: "Description for Approach 2." },
  { id: 3, title: "Approach 3", description: "Description for Approach 3." },
  { id: 4, title: "Approach 4", description: "Description for Approach 4." },
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

      // Sync vertical line with scroll position
      ScrollTrigger.create({
        trigger: container,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress; // Value between 0 and 1
          const lineHeight = progress * 100; // Convert progress to percentage
          gsap.set(line, { height: `${lineHeight}%` });
        },
      });

      // Animate timeline items
      itemsRef.current.forEach((item) => {
        if (!item) return;

        gsap.fromTo(
          item,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Highlight circle indicators
      const setActiveIndicator = (activeIndex) => {
        indicatorsRef.current.forEach((indicator, index) => {
          if (index === activeIndex) {
            gsap.to(indicator, { backgroundColor: "white", scale: 1.2, duration: 0.3 });
          } else {
            gsap.to(indicator, { backgroundColor: "gray", scale: 1, duration: 0.3 });
          }
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
      className="bg-[#002A00] text-white px-0 pt-0 pb-20 min-h-[100vh]"
    >
      <div className="max-container relative flex gap-8">
        {/* Vertical Line and Circle Indicators */}
        <div className="relative w-1 ml-0">
          <div
            ref={lineRef}
            className="absolute left-20 w-0.5 rounded-[30px] bg-white transform -translate-x-1/2 h-0"
          />
          {timelineData.map((_, index) => (
            <div
              key={index}
              ref={(el) => (indicatorsRef.current[index] = el)}
              className="absolute left-20 w-6 h-6 bg-gray-400 border-2 border-white rounded-full transform -translate-x-1/2"
              style={{
                top: `${index * 25.5 + 14}%`, // Manually set positions (adjust these values as needed)
              }}
            />
          ))}
        </div>

        {/* Timeline Items */}
        <div className="flex flex-col items-start gap-20 ml-40 mt-16">
          {timelineData.map((item, index) => (
            <div
              key={item.id}
              ref={(el) => (itemsRef.current[index] = el)}
              className="flex items-center gap-6 opacity-0 h-[190px]"
            >
              <div className="flex flex-row space-x-40 items-center">
                <h3 className="text-[48px] leading-[48px] font-bold mb-3">
                  {item.title}
                </h3>
                <p className="text-[24px] leading-[27px]">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
