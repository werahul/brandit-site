import Footer from "@/components/Footer";
import AboutSection from "@/components/Homepage/AboutSection";
import BlogNews from "@/components/Homepage/BlogNews";
import CaseStudies from "@/components/Homepage/CaseStudies";
import FeaturedClients from "@/components/Homepage/FeaturedClients";
import HeroSection from "@/components/Homepage/HeroSection";
import IndustriesWeServe from "@/components/Homepage/IndustriesWeServe";
import ServiceSection from "@/components/Homepage/ServiceSection";
import TestimonialsCarousel from "@/components/Homepage/TestimonialsCarousel";
import WhyChooseUs from "@/components/Homepage/WhyChoosUs";
import Navbar from "@/components/Navbar";
import React from "react";

const page = () => {
  const images = [
    "/clientsLogo/1.svg",
    "/clientsLogo/2.svg",
    "/clientsLogo/3.svg",
    "/clientsLogo/4.svg",
    "/clientsLogo/5.svg",
    "/clientsLogo/6.svg",
    "/clientsLogo/7.svg",
    "/clientsLogo/8.svg",
  ];
  return (
    <div className="">
      <Navbar />
      <HeroSection />
      <div className=" bg-white">
      <AboutSection />
      </div>
      <div className="bg-[#EAEAF4] rounded-b-[80px]">
        <ServiceSection />
        <div className="bg-[#EAEAF4]  rounded-b-[80px] lg:pt-[120px] lg:pb-[80px] px-16 max-container relative overflow-hidden">
          <img
            src="/images/bgElementcase.png"
            alt="Background Element"
            className="absolute bottom-0 left-0  object-cover "
          />
          <div className="relative ">
            <CaseStudies />
            <WhyChooseUs />
          </div>
        </div>
      </div>
      <FeaturedClients images={images} />
      <IndustriesWeServe />
      <BlogNews />
      <TestimonialsCarousel />
      <Footer />
    </div>
  );
};

export default page;
