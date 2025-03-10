"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const icons = [
    {
      default: "/iconImages/linkedin.svg",
      hover: "/iconImages/linkedinHvr.svg",
      alt: "LinkedIn logo",
      link: "https://www.linkedin.com/company/brandit-communications/",
    },
    {
      default: "/iconImages/insta.svg",
      hover: "/iconImages/instaHvr.svg",
      alt: "Instagram logo",
      link: "https://www.instagram.com/branditcommunications?igsh=MWllY3Y5eDgzb2tj",
    },
    {
      default: "/iconImages/facebook.svg",
      hover: "/iconImages/facebookHvr.svg",
      alt: "Facebook logo",
      link: "https://www.facebook.com/share/15aWPmt9t5/",
    },
  ];

  return (
    <footer className="bg-[#002A00] text-white mt-0 lg:mt-0 ">
      <div className="max-container lg:px-16 px-5 lg:pt-[100px] pt-[40px] lg:pb-10 pb-5">
        <div className="lg:flex flex-row lg:space-x-10 lg:pb-20 pb-5">
          {/* Brand Section */}
          <div className=" lg:w-[50%] ">
            <div className="logo flex justify-between items-start">
              <Image
                className="lg:w-[275px] lg:h-[76px] w-[146px] h-[50px] lg:-ml-7"
                src="/mainLogo.svg"
                alt="pinterest logo"
                width={275}
                height={76}
              />

              <motion.div
                className="flex lg:hidden  space-x-3"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.8,
                  ease: "easeInOut",
                }}
              >
                {icons.map((icon, index) => (
                  <motion.a
                    key={index}
                    href={icon.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => setHoveredIcon(icon.default)}
                    onMouseLeave={() => setHoveredIcon(null)}
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="cursor-pointer"
                  >
                    <Image
                      src={
                        hoveredIcon === icon.default ? icon.hover : icon.default
                      }
                      alt={icon.alt}
                      width={30}
                      height={30}
                    />
                  </motion.a>
                ))}
              </motion.div>
            </div>
            <p className="text-[#CCCCCC] text-[14px] leading-[18px] lg:mt-[35px] mt-[32px] lg:mb-5">
              Elevating your brand with dynamic PR{" "}
              <br className="lg:block hidden" /> that captures attention, builds
              trust, and <br className="lg:block hidden" /> drives real results.
            </p>
            <motion.div
              className="lg:flex hidden  space-x-3"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1,
                delay: 0.8,
                ease: "easeInOut",
              }}
            >
              {icons.map((icon, index) => (
                <motion.a
                  key={index}
                  href={icon.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setHoveredIcon(icon.default)}
                  onMouseLeave={() => setHoveredIcon(null)}
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="cursor-pointer"
                >
                  <Image
                    src={
                      hoveredIcon === icon.default ? icon.hover : icon.default
                    }
                    alt={icon.alt}
                    width={30}
                    height={30}
                  />
                </motion.a>
              ))}
            </motion.div>
          </div>
          <div className="lg:w-[40%] lg:flex flex-row justify-between lg:mt-0 mt-8">
            {/* Quick Links */}
            <div className="">
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="lg:space-y-5 space-y-4 text-[14px] leading-[16px]">
                <li>
                  <Link
                    href="/about"
                    className="text-[#CCCCCC] hover:text-white "
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/work"
                    className="text-[#CCCCCC] hover:text-white"
                  >
                    Work
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-[#CCCCCC] hover:text-white"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blogs"
                    className="text-[#CCCCCC] hover:text-white"
                  >
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="text-[#CCCCCC] hover:text-white"
                  >
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            {/* Get in Touch */}
            <div>
              <h3 className="text-lg font-semibold mb-4 lg:mt-0 mt-8">
                Get in Touch
              </h3>
              <ul className="lg:space-y-5 space-y-4 text-[14px] leading-[16px]">
                <div className="flex items-start space-x-2">
                  <div>
                    <svg
                      width="12"
                      height="16"
                      viewBox="0 0 12 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_394_1266)">
                        <g clip-path="url(#clip1_394_1266)">
                          <path
                            d="M6.74062 15.6C8.34375 13.5938 12 8.73125 12 6C12 2.6875 9.3125 0 6 0C2.6875 0 0 2.6875 0 6C0 8.73125 3.65625 13.5938 5.25938 15.6C5.64375 16.0781 6.35625 16.0781 6.74062 15.6ZM6 4C6.53043 4 7.03914 4.21071 7.41421 4.58579C7.78929 4.96086 8 5.46957 8 6C8 6.53043 7.78929 7.03914 7.41421 7.41421C7.03914 7.78929 6.53043 8 6 8C5.46957 8 4.96086 7.78929 4.58579 7.41421C4.21071 7.03914 4 6.53043 4 6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4Z"
                            fill="#9CA3AF"
                          />
                        </g>
                      </g>
                      <defs>
                        <clipPath id="clip0_394_1266">
                          <rect width="12" height="16" fill="white" />
                        </clipPath>
                        <clipPath id="clip1_394_1266">
                          <path d="M0 0H12V16H0V0Z" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <li className="text-[#CCCCCC] ">
                    #2, Pride Orchid, Varthur Main <br /> Road,Thubarahalli,
                    Whitefield, <br /> Bangalore - 560066
                  </li>
                </div>

                <div className="flex items-start space-x-2">
                  <div>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_394_1271)">
                        <g clip-path="url(#clip1_394_1271)">
                          <path
                            d="M5.15312 0.768966C4.9125 0.187716 4.27812 -0.121659 3.67188 0.0439663L0.921875 0.793966C0.378125 0.943966 0 1.43772 0 2.00022C0 9.73147 6.26875 16.0002 14 16.0002C14.5625 16.0002 15.0563 15.6221 15.2063 15.0783L15.9563 12.3283C16.1219 11.7221 15.8125 11.0877 15.2312 10.8471L12.2312 9.59709C11.7219 9.38459 11.1313 9.53147 10.7844 9.95959L9.52188 11.5002C7.32188 10.4596 5.54063 8.67834 4.5 6.47834L6.04063 5.21897C6.46875 4.86897 6.61562 4.28147 6.40312 3.77209L5.15312 0.772091V0.768966Z"
                            fill="#9CA3AF"
                          />
                        </g>
                      </g>
                      <defs>
                        <clipPath id="clip0_394_1271">
                          <rect width="16" height="16" fill="white" />
                        </clipPath>
                        <clipPath id="clip1_394_1271">
                          <path d="M0 0H16V16H0V0Z" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <a href="tel:9632299872">
                    {" "}
                    <li className="text-[#CCCCCC] ">9632299872</li>
                  </a>
                </div>
                <div className="flex items-start space-x-2">
                  <div>
                    <svg
                      width="16"
                      height="13"
                      viewBox="0 0 16 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.5 0.862305C0.671875 0.862305 0 1.53418 0 2.3623C0 2.83418 0.221875 3.27793 0.6 3.5623L7.4 8.6623C7.75625 8.92793 8.24375 8.92793 8.6 8.6623L15.4 3.5623C15.7781 3.27793 16 2.83418 16 2.3623C16 1.53418 15.3281 0.862305 14.5 0.862305H1.5ZM0 4.3623V10.8623C0 11.9654 0.896875 12.8623 2 12.8623H14C15.1031 12.8623 16 11.9654 16 10.8623V4.3623L9.2 9.46231C8.4875 9.99668 7.5125 9.99668 6.8 9.46231L0 4.3623Z"
                        fill="#9CA3AF"
                      />
                    </svg>
                  </div>
                  <a href="mailto:communicate@branditcommunications.com">
                    {" "}
                    <li className="text-[#CCCCCC] ">
                      communicate@branditcommunications.com
                    </li>
                  </a>
                </div>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex items-center flex-col justify-center lg:whitespace-nowrap lg:py-12 py-5 border-t border-green-800">
          <p className="lg:text-[28px] text-[24px] lg:leading-relaxed leading-[28px] font-bold">
            Is this the brand boost you’ve been waiting for?
          </p>
          <p className="text-[14px] leading-[16px] mt-2 text-[#999999]">
            Connect with us and elevate your brand story to the next level.
          </p>
          <div className="cta mt-7">
            <Link href="/contact">
              <button className="relative lg:w-auto w-[80vw] px-5 h-[56px] bg-[#C5F2B0] text-black text-[16px] rounded-[40px] overflow-hidden group">
                <span className="absolute inset-0 bg-gradient-to-r from-[#7CAF64] via-[#5E8F45] to-[#7CAF64] transition-transform scale-0 group-hover:scale-100 group-hover:rotate-180 duration-500 ease-in-out rounded-[40px]"></span>
                <span className="relative z-10 block text-center group-hover:text-white transition-transform duration-300 ease-in-out group-hover:scale-110">
                  Let's get started
                </span>
                <span className="absolute -inset-1 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-[40px]"></span>
              </button>
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-0 pt-4 border-t border-green-800 flex flex-col md:flex-row justify-between lg:items-center text-[14px] leading-[14px] text-[#CCCCCC]">
          <p>&copy; {currentYear} brandit. All rights reserved</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-white">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
