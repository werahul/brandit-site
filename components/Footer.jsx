import React from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: "/iconImages/facebook.svg", href: "#" },
    { icon: "/iconImages/insta.svg", href: "#" },
    { icon: "/iconImages/linkedin.svg", href: "#" },
    { icon: "/iconImages/pinterest.svg", href: "#" },
  ];

  return (
    <footer className="bg-[#002A00] text-white ">
      <div className="max-container px-16 pt-[100px] pb-10">
        <div className="flex flex-row space-x-10">
          {/* Brand Section */}
          <div className=" w-[35%]">
            <div className="logo">
              <Image
                className=""
                src="iconImages/mainLogo.svg"
                alt="pinterest logo"
                width={275}
                height={76}
              />
            </div>
            <p className="text-[#CCCCCC] text-[14px] leading-[18px] mt-[35px]">
              Lorem ipsum dolor sit amet consectetur. <br /> Ullamcorper ipsum
              risus ullam <br />
              dictum magnis nulla. Pharetra nunc feugiat augue.
            </p>
            <div className="flex space-x-4 mt-[35px]">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="text-[#CCCCCC] hover:text-white transition-colors"
                  >
                    <img src={Icon} alt="" className="w-[29px]" />
                  </a>
                );
              })}
            </div>
          </div>
          <div className="w-[50%] flex flex-row justify-between">
            {/* Quick Links */}
            <div className="">
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-5 text-[14px] leading-[16px]">
                <li>
                  <a href="#" className="text-[#CCCCCC] hover:text-white ">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#CCCCCC] hover:text-white">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#CCCCCC] hover:text-white">
                    Work
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#CCCCCC] hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#CCCCCC] hover:text-white">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            {/* Our Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Our Services</h3>
              <ul className="space-y-5 text-[14px] leading-[16px]">
                <li>
                  <a href="#" className="text-[#CCCCCC] hover:text-white">
                    Lorem
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#CCCCCC] hover:text-white">
                    Lorem ipsum
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#CCCCCC] hover:text-white">
                    Lorem
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#CCCCCC] hover:text-white">
                    Lorem
                  </a>
                </li>
              </ul>
            </div>

            {/* Get in Touch */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
              <ul className="space-y-5 text-[14px] leading-[16px]">
                <li className="text-[#CCCCCC] ">
                  Lorem ipsum dolor sit amet consectetur. <br /> Et vel
                  facilisis tortor.
                </li>
                <li className="text-[#CCCCCC]">+1 234 567 890</li>
                <li className="text-[#CCCCCC]">Lorem ipsum dolor</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-4 border-t border-green-800 flex flex-col md:flex-row justify-between items-center text-[14px] leading-[14px] text-[#CCCCCC]">
          <p>&copy; {currentYear} brandit. All rights reserved</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
