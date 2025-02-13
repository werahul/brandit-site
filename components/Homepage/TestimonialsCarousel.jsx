"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TestimonialsCarousel = () => {
  const testimonials = [
    {
      id: 1,
      text: "“BrandiT has been key to our branding since 2021. Manjuu and her team are professional, innovative, and help us reach a wide audience across platforms.”",
      name: "Prashant Sankaran ",
      position: "CEO, Interweave",
      image: "/images/person1.png",
    },
    {
      id: 2,
      text: "BrandiT's EV expertise was invaluable. Their strategic PR, especially in Tier 2 cities, helped us compete and establish a strong market presence. A true partner.",
      name: "Dr, Amitabh Saran",
      position: "Founder, Altigreen Propulsion Labs",
      image: "/images/person1.png",
    },
    {
      id: 3,
      text: "BrandiT has been a key partner in boosting our brand visibility and outreach. It's been a great journey, and we look forward to more success ahead!",
      name: "Puspen Maity",
      position: "CEO, Technosport",
      image: "/images/person1.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <div className="bg-white pb-32">
      <div className="text-[#1C1D58] max-container px-16 py-[120px] overflow-hidden">
        <h2 className="text-h2 font-bold mb-12">
          What Makes Us A <br /> Client's Favorite
        </h2>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-5 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-5 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Testimonials Stack */}
          <div className="relative w-full h-[386px] mx-auto flex justify-center items-center">
            {testimonials.map((testimonial, index) => {
              const isActive = index === currentIndex;
              const isPrev =
                index ===
                (currentIndex - 1 + testimonials.length) % testimonials.length;
              const isNext = index === (currentIndex + 1) % testimonials.length;

              return (
                <div
                  key={testimonial.id}
                  className={`absolute w-[90%] max-w-[942px] h-[386px] bg-[#EAEAF4] border-[#10113380] border rounded-2xl p-8 flex items-center gap-8 shadow-lg transition-transform duration-500
                    ${
                      isActive
                        ? "z-20 scale-100 translate-x-0 opacity-100 rotate-0"
                        : "z-10 scale-95 opacity-70"
                    }
                    ${isPrev ? "-translate-x-[10%] -rotate-2" : ""}
                    ${isNext ? "translate-x-[10%] rotate-2" : ""}`}
                >
                  <div className="flex-1">
                    <blockquote className="text-[24px] leading-[36px]">
                      {testimonial.text}
                    </blockquote>
                    <div>
                      <p className="font-bold text-[24px] leading-[36px] mt-[50px]">
                        {testimonial.name}
                      </p>
                      <p className="text-[20px]">{testimonial.position}</p>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>

                  <img
                    src="/images/bgElement.png"
                    alt=""
                    className="absolute right-0 z-[-10]"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
