import Link from "next/link";
import React from "react";

const OtherBlogs = ({ blogs }) => {
  return (
    <div className="bg-white text-[#1C1D58] pt-10 px-0">
      <div>
        <div className="flex justify-between items-center mb-12">
          <h2 className="lg:text-h2 text-[44px] lg:leading-[55px] leading-[44px] font-bold">
            Other Perspectives
          </h2>
          <Link href="/blogs" className="hidden lg:block hover:underline">
            View All
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <Link href={blog.path}>
              <div
                key={blog.id}
                className={`relative rounded-lg overflow-hidden cursor-pointer group h-[397px] transition-all duration-300 ${
                  index >= 3 ? "hidden lg:block" : ""
                }`}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-[#D9E7D9] transition-opacity duration-300 group-hover:opacity-0"></div>

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-40"></div>

                {/* Image */}
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover scale-105 transition-all duration-300  group-hover:scale-100"
                />

                {/* Service Tag */}
                <span className="absolute top-4 left-4 px-3 py-1 bg-white text-[#1C1D58] text-sm rounded">
                  {blog.service}
                </span>

                {/* Content */}
                <div className="p-6 absolute bottom-0 left-0 w-full">
                  <h3 className="text-[14px] leading-[20px] text-white mb-2">
                    {blog.dates}
                  </h3>
                  <h3 className="text-[20px] lg:text-[24px] leading-[28px] text-white w-[87%]">
                    {blog.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="lg:hidden mt-8 flex items-center justify-center">
          <Link href="/blogs">
            <span className="hover:underline">View All</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OtherBlogs;
