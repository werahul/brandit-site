import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />
      <div className=" bg-[#003800] rounded-b-[80px] pb-20 text-white pt-[280px] ">
        <div className="max-container px-16">
          <h2 className="text-[55px] leading-[55px] font-bold">
            Terms and Conditions
          </h2>
          <p className="text-[18px] leading-[21px] text-[#999999] mt-5">
            Last updated: Jan 15, 2025
          </p>
        </div>
      </div>
      <div className="text-[#1C1D58] px-16 py-20 max-container">
        <div className="">
          <h6 className="text-[23px] leading-[27px] font-bold">Lorem Ipsum</h6>
          <p className="text-[18px] leading-[21px] mt-3 ">
            Lorem ipsum dolor sit amet consectetur. Bibendum id consectetur amet
            nulla. Diam at morbi eget enim ultrices. Vitae ultricies ultrices
            ipsum nunc non diam pretium vitae. Nulla aliquam interdum adipiscing
            viverra sit imperdiet faucibus bibendum. Nullam quis diam.
          </p>
        </div>

        <div className="mt-20">
          <h6 className="text-[23px] leading-[27px] font-bold">Lorem Ipsum</h6>
          <div className="">
            <p className="text-[18px] leading-[21px] mt-3 ">
              <span className="mr-3">&#x2022;</span> Lorem ipsum dolor sit amet
              consectetur. Bibendum id
            </p>
            <p className="text-[18px] leading-[21px] mt-3 ">
              <span className="mr-3">&#x2022;</span> Lorem ipsum dolor sit amet
              consectetur. Bibendum id
            </p>
            <p className="text-[18px] leading-[21px] mt-3 ">
              <span className="mr-3">&#x2022;</span> Lorem ipsum dolor sit amet
              consectetur. Bibendum id
            </p>
            <p className="text-[18px] leading-[21px] mt-3 ">
              <span className="mr-3">&#x2022;</span> Lorem ipsum dolor sit amet
              consectetur. Bibendum id
            </p>
            <p className="text-[18px] leading-[21px] mt-3 ">
              <span className="mr-3">&#x2022;</span> Lorem ipsum dolor sit amet
              consectetur. Bibendum id
            </p>
          </div>
        </div>

        <div className="mt-20">
          <h6 className="text-[23px] leading-[27px] font-bold">Lorem Ipsum</h6>
          <div className="">
            <p className="text-[18px] leading-[21px] mt-3 ">
              <span className="mr-3">&#x2022;</span> Lorem ipsum dolor sit amet
              consectetur. Bibendum id
            </p>
            <p className="text-[18px] leading-[21px] mt-3 ">
              <span className="mr-3">&#x2022;</span> Lorem ipsum dolor sit amet
              consectetur. Bibendum id
            </p>
            <p className="text-[18px] leading-[21px] mt-3 ">
              <span className="mr-3">&#x2022;</span> Lorem ipsum dolor sit amet
              consectetur. Bibendum id
            </p>
            <p className="text-[18px] leading-[21px] mt-3 ">
              <span className="mr-3">&#x2022;</span> Lorem ipsum dolor sit amet
              consectetur. Bibendum id
            </p>
            <p className="text-[18px] leading-[21px] mt-3 ">
              <span className="mr-3">&#x2022;</span> Lorem ipsum dolor sit amet
              consectetur. Bibendum id
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
