"use client";

import React from "react";
import { motion } from "framer-motion";
import ContactForm from "./ContactForm";

const ContactHero = () => {
  return (
    <div className="bg-[#002A00] pt-[280px] ">
      <div className="relative shadow-2xl pb-20 rounded-b-[80px]">
        <img
          src="/images/bgElementcase.png"
          alt="Background Element"
          className="absolute bottom-0 object-cover rounded-b-[80px]"
        />
        <div className=" max-container flex  px-16 gap-x-4 relative">
          <div className=" text-[#ECFBE6]  pb-40 flex flex-col w-[50%]">
            <div>
              <motion.h1
                className="text-h1 font-semibold"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
              >
                Lorem ipsum do
              </motion.h1>

              <p className="text-[24px] leading-[28px] font-regular text-[#D2D1D1] mt-3">
                Lorem ipsum dolor sit amet consectetur. Habitasse viverra cras
                parturient lobortis ligula.
              </p>
            </div>

            <motion.div className="flex gap-x-6 mt-auto">
              {/* Card 1 */}
              <div className="group w-[294px] h-[139px] rounded-[20px] text-[#1C1D58] py-7 px-5 border border-[#45D400] bg-[#ECFBE6]">
                <div className="flex space-x-1 items-center">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 15C2.5875 15 2.2345 14.8533 1.941 14.5597C1.6475 14.2662 1.5005 13.913 1.5 13.5V4.5C1.5 4.0875 1.647 3.7345 1.941 3.441C2.235 3.1475 2.588 3.0005 3 3H15C15.4125 3 15.7657 3.147 16.0597 3.441C16.3538 3.735 16.5005 4.088 16.5 4.5V13.5C16.5 13.9125 16.3533 14.2657 16.0597 14.5597C15.7662 14.8538 15.413 15.0005 15 15H3ZM15 6L9.39375 9.50625C9.33125 9.54375 9.26575 9.572 9.19725 9.591C9.12875 9.61 9.063 9.61925 9 9.61875C8.937 9.61825 8.8715 9.609 8.8035 9.591C8.7355 9.573 8.66975 9.54475 8.60625 9.50625L3 6V13.5H15V6ZM9 8.25L15 4.5H3L9 8.25ZM3 6.1875V5.08125V5.1V5.091V6.1875Z"
                      fill="#1C1D58"
                    />
                  </svg>
                  <p className="">Lorem</p>
                </div>
                <div>
                  <p className="text-[24px]  font-bold mt-5 group-hover:text-[#45D400]">
                    Lorem Ipsum
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="group w-[216px] h-[139px] rounded-[20px] text-[#1C1D58] py-7 px-5 border border-[#45D400] bg-[#ECFBE6]">
                <div className="flex space-x-1 items-center">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.2876 3.68248C13.5999 2.98806 12.7809 2.43745 11.8782 2.06275C10.9756 1.68805 10.0074 1.49674 9.0301 1.49998C4.9351 1.49998 1.5976 4.83748 1.5976 8.93248C1.5976 10.245 1.9426 11.52 2.5876 12.645L1.5376 16.5L5.4751 15.465C6.5626 16.0575 7.7851 16.3725 9.0301 16.3725C13.1251 16.3725 16.4626 13.035 16.4626 8.93998C16.4626 6.95248 15.6901 5.08498 14.2876 3.68248ZM9.0301 15.1125C7.9201 15.1125 6.8326 14.8125 5.8801 14.25L5.6551 14.115L3.3151 14.73L3.9376 12.45L3.7876 12.2175C3.17076 11.2328 2.84329 10.0944 2.8426 8.93248C2.8426 5.52748 5.6176 2.75248 9.0226 2.75248C10.6726 2.75248 12.2251 3.39748 13.3876 4.56748C13.9633 5.14038 14.4195 5.82189 14.7298 6.57248C15.0401 7.32307 15.1982 8.12779 15.1951 8.93998C15.2101 12.345 12.4351 15.1125 9.0301 15.1125ZM12.4201 10.4925C12.2326 10.4025 11.3176 9.95248 11.1526 9.88498C10.9801 9.82498 10.8601 9.79498 10.7326 9.97498C10.6051 10.1625 10.2526 10.5825 10.1476 10.7025C10.0426 10.83 9.9301 10.845 9.7426 10.7475C9.5551 10.6575 8.9551 10.455 8.2501 9.82498C7.6951 9.32998 7.3276 8.72248 7.2151 8.53498C7.1101 8.34748 7.2001 8.24998 7.2976 8.15248C7.3801 8.06998 7.4851 7.93498 7.5751 7.82998C7.6651 7.72498 7.7026 7.64248 7.7626 7.52248C7.8226 7.39498 7.7926 7.28998 7.7476 7.19998C7.7026 7.10998 7.3276 6.19498 7.1776 5.81998C7.0276 5.45998 6.8701 5.50498 6.7576 5.49748H6.3976C6.2701 5.49748 6.0751 5.54248 5.9026 5.72998C5.7376 5.91748 5.2576 6.36748 5.2576 7.28248C5.2576 8.19748 5.9251 9.08248 6.0151 9.20248C6.1051 9.32998 7.3276 11.205 9.1876 12.0075C9.6301 12.2025 9.9751 12.315 10.2451 12.3975C10.6876 12.54 11.0926 12.5175 11.4151 12.4725C11.7751 12.42 12.5176 12.0225 12.6676 11.5875C12.8251 11.1525 12.8251 10.785 12.7726 10.7025C12.7201 10.62 12.6076 10.5825 12.4201 10.4925Z"
                      fill="#1C1D58"
                    />
                  </svg>
                  <p className="">Lorem</p>
                </div>
                <div>
                  <p className="text-[24px] text-[#1C1D58] font-bold mt-5 group-hover:text-[#45D400]">
                    Lorem Ipsum
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="w-[50%] rounded-[20px]">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;
