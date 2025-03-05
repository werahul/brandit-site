"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-transparent absolute top-0 w-full z-[999]">
      <div className="max-container text-[#FFFFFF] flex items-center justify-between lg:px-16 px-5 lg:pt-[40px] pt-[25px]">
        {/* Logo */}
        <div className="logo">
          <Link href="/">
            <Image
              className="lg:w-[275px] w-[130px]"
              src="/mainLogo.svg"
              alt="main logo"
              width={275}
              height={76}
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="nav-menu lg:flex flex-row space-x-[32px] hidden">
        {["about", "work", "services", "industries", "blogs", "careers"].map((item) => (
          <Link
            key={item}
            href={`/${item}`}
            className={`${
              pathname.startsWith(`/${item}`) ? "text-[#45D400]" : "text-white"
            } transition-colors duration-300`}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </Link>
        ))}
        </div>

        {/* CTA Button (Desktop) */}
        <div className="cta lg:block hidden">
          <Link href="/contact">
            <button className="relative w-[130px] h-[56px] bg-gradient-to-r from-[#45D400] to-[#45D400] text-black text-[16px] rounded-[40px] overflow-hidden group">
              <span className="absolute inset-0 bg-gradient-to-r from-[#45D400] via-[#36BA00] to-[#45D400] transition-transform scale-0 group-hover:scale-100 group-hover:rotate-180 duration-500 ease-in-out rounded-[40px]"></span>
              <span className="relative z-10 block text-center group-hover:text-white transition-transform duration-300 ease-in-out group-hover:scale-110">
                Write to Us
              </span>
              <span className="absolute -inset-1 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-[40px]"></span>
            </button>
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden block" onClick={toggleMenu}>
          <Image
            src="/humIcon.svg"
            alt="Menu Icon"
            width={32}
            height={32}
            className="cursor-pointer"
          />
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="showAndHideBox bg-transparent px-5 mt-[10px] z-50">
          <div className="w-full flex flex-col h-auto rounded-[20px] border border-[#1C1D58] border-opacity-55 bg-white text-[#1C1D58] px-5 py-7 text-[28px] space-y-5">
            {["about", "work", "services", "industries", "blogs", "careers"].map((item) => (
              <Link
                key={item}
                href={`/${item}`}
                className={`${
                  pathname === `/${item}` ? "text-[#45D400]" : "text-[#1C1D58]"
                } transition-colors duration-300`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            ))}

            {/* CTA Button (Mobile) */}
            <div className="pt-10">
              <Link href="/contact">
                <button className="relative w-full h-[56px] bg-gradient-to-r from-[#45D400] to-[#45D400] text-black text-[16px] rounded-[40px] overflow-hidden group">
                  <span className="absolute inset-0 bg-gradient-to-r from-[#45D400] via-[#36BA00] to-[#45D400] transition-transform scale-0 group-hover:scale-100 group-hover:rotate-180 duration-500 ease-in-out rounded-[40px]"></span>
                  <span className="relative z-10 block text-center group-hover:text-white transition-transform duration-300 ease-in-out group-hover:scale-110">
                    Write to Us
                  </span>
                  <span className="absolute -inset-1 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-[40px]"></span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
