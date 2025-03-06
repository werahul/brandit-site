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
      image: "/images/testi1.png",
    },
    {
      id: 2,
      text: "BrandiT's EV expertise was invaluable. Their strategic PR, especially in Tier 2 cities, helped us compete and establish a strong market presence. A true partner.",
      name: "Dr, Amitabh Saran",
      position: "Founder, Altigreen Propulsion Labs",
      image: "/images/testi2.png",
    },
    {
      id: 3,
      text: "BrandiT has been a key partner in boosting our brand visibility and outreach. It's been a great journey, and we look forward to more success ahead!",
      name: "Puspen Maity",
      position: "CEO, Technosport",
      image: "/images/testi3.png",
    },
    {
      id: 4,
      text: "BrandiT has helped amplify our brand with strategic PR. Their expertise and dedication made a real impact. Highly recommend!",
      name: "Kishan Karunakaran",
      position: "Founder, Buyofuel",
      image: "/images/testi4.png",
    },
    {
      id: 5,
      text: "BrandiT has transformed our brand’s visibility with smart PR strategies. Their dedication and expertise truly set them apart. A game-changer for us.",
      name: "Mr. Raksha Ramaiah",
      position: "Director of MSR Developers and Builders (MSRDB)",
      image: "/images/testi5.png",
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
    <div className="bg-white lg:pb-32 pb-24 ">
      <div className="text-[#1C1D58] max-container lg:px-16 px-5 lg:py-[120px] py-20 lg:pb-20 lg:overflow-hidden">
        <h2 className="lg:text-h2 text-[44px] leading-[44px] lg:leading-[55px] font-bold lg:mb-7 mb-12">
          What Makes Us A <br className="lg:block hidden" /> Client's Favorite
        </h2>

        <div className="relative lg:-mt-20">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute lg:left-12 left-0 top-1/2 -translate-y-1/2 z-40 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute lg:right-12 right-0 top-1/2 -translate-y-1/2  z-40 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Testimonials Stack */}
          <div className="relative w-full h-[386px] mx-auto flex justify-center items-center mt-40">
            {testimonials.map((testimonial, index) => {
              const isActive = index === currentIndex;
              const isPrev =
                index ===
                (currentIndex - 1 + testimonials.length) % testimonials.length;
              const isNext = index === (currentIndex + 1) % testimonials.length;

              return (
                <div
                  key={testimonial.id}
                  className={`absolute w-[90%] max-w-[942px] lg:h-[386px] bg-[#EAEAF4] border-[#10113380] border rounded-2xl lg:pb-8 px-8 pt-8  pb-0 lg:flex items-center gap-8 shadow-lg transition-transform duration-500 overflow-hidden
                    ${
                      isActive
                        ? "z-20 scale-100 translate-x-0 opacity-100 rotate-0"
                        : "z-10 scale-95 opacity-70"
                    }
                    ${isPrev ? "lg:-translate-x-[10%] -translate-x-[7%] h-[500px] -rotate-2 lg:translate-y-0 translate-y-[10%]" : ""}
                    ${isNext ? "lg:translate-x-[10%] translate-x-[7%] h-[500px] lg:translate-y-0 translate-y-[10%] rotate-2" : ""}`}
                >
                  <div className="flex-1">
                    <blockquote className="lg:text-[24px] text-[18px] lg:leading-[36px] leading-[21px]">
                      {testimonial.text}
                    </blockquote>
                    <div className="lg:text-left text-center">
                      <p className="font-bold text-[24px] leading-[36px] lg:mt-[50px] mt-[20px]">
                        {testimonial.name}
                      </p>
                      <p className="text-[20px] leading-[24px]">{testimonial.position}</p>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                       loading="lazy"
                      className="w-full h-full object-cover rounded-lg mt-20"
                    />
                  </div>

                  <img
                    src="/images/bgElement.png"
                    alt=""
                    className="absolute right-0 z-[-10] lg:block hidden"
                  />
                  <img
                    src="/images/bgElementMobile.png"
                    alt=""
                    className="absolute right-0 z-[-10] bottom-0 lg:hidden block"
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
