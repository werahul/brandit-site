import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className=" bg-transparent absolute top-0 w-full">
      <div className="max-container text-[#FFFFFF] flex items-center justify-between px-16 pt-[40px]">
        <div className="logo">
          <Link href="/">
            <Image
              className=""
              src="iconImages/mainLogo.svg"
              alt="pinterest logo"
              width={275}
              height={76}
            />
          </Link>
        </div>
        <div className="nav-menu flex flex-row space-x-[32px] ">
          <Link href="/about">About</Link>
          <p>Work</p>
          <p>Services</p>
          <p>Industries</p>
          <p>Blogs</p>
          <p>Career</p>
        </div>
        <div className="cta">
          <button className="relative w-[130px] h-[56px] bg-gradient-to-r from-[#45D400] to-[#005E00] text-black text-[16px] font-bold rounded-[40px] overflow-hidden group">
            <span className="absolute inset-0 bg-gradient-to-r from-[#45D400] via-[#36BA00] to-[#005E00] transition-transform scale-0 group-hover:scale-100 group-hover:rotate-180 duration-500 ease-in-out rounded-[40px]"></span>
            <span className="relative z-10 block text-center group-hover:text-white transition-transform duration-300 ease-in-out group-hover:scale-110">
              Lorem
            </span>
            <span className="absolute -inset-1 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-[40px]"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
