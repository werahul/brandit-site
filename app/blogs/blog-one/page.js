"use client";

import React from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import OtherBlogs from "@/components/BlogPage/OtherBlogs";

const page = () => {
  return (
    <div className="bg-[#002A00]">
      <Navbar />
      <div className=" pb-40 ">
        <div className=" max-container text-white px-16 pt-[280px] pb-0 flex items-center space-x-40">
          <motion.div>
            <img
              src="/images/blankBlogImage.png"
              alt=""
              className="w-full h-[584px]"
            />
          </motion.div>
        </div>
      </div>

      <div className="bg-white text-[#151642] rounded-[80px] py-[80px] ">
        <div className="px-16 max-container">
          <div className="">
            <div className="">
              {/* Article Header */}
              <header className="mb-8">
                <div className="text-[14px] text-[#4B5563] mb-6">
                  • <span className="mr-2">Technology</span> •{" "}
                  <span className="ml-2">5 min read</span> •{" "}
                  <span className="ml-2">March 15, 2025</span>
                </div>
                <h1 className="text-h2 leading-[55px] font-bold">
                  The Future of Web Development: Trends to Watch in 2025
                </h1>
              </header>

              {/* Main Article Content */}
              <article className="space-y-6">
                <p className="text-[18px] leading-[25px]">
                  Lorem ipsum dolor sit amet consectetur. Eros mattis odio non
                  vel pretium morbi viverra sed ultrices. Elementum at ut orci
                  amet est. Vel fermentum vitae nunc faucibus commodo nibh.
                  Porttitor odio sit id ipsum donec mauris arcu. Sit nulla
                  sollicitudin etiam aliquam nam egestas. Netus facilisis a
                  sollicitudin urna tristique dignissim. Ultricies enim risus a
                  suspendisse etiam. Adipiscing enim at et odio. Dictum urna
                  pulvinar aliquet arcu mattis. Venenatis maecenas at amet
                  lobortis ipsum ac. <br />
                  Proin nulla diam feugiat tellus odio fermentum sit viverra
                  sodales. Donec purus et in in donec nunc diam nulla. Tellus
                  proin aliquet ut enim. Et adipiscing donec faucibus a fames
                  eget enim. Egestas iaculis aliquam malesuada tincidunt amet eu
                  turpis nisi sit. Nibh suspendisse quisque vitae morbi
                  pellentesque a ut. <br />
                  Nec tristique euismod cursus tristique. Tristique amet
                  adipiscing turpis dictum leo sed at. Curabitur nam aliquet
                  nibh mattis id luctus eu habitasse massa. Nulla ornare amet
                  ullamcorper leo lobortis nunc pretium leo. Morbi vel ac tempor
                  est. Quam elementum praesent interdum etiam a natoque nisl
                  tempor morbi. <br />
                  Faucibus duis feugiat vestibulum blandit massa purus nullam
                  purus. Nulla pellentesque egestas massa bibendum sit risus
                  consectetur pellentesque volutpat. Mauris a volutpat ultrices
                  aliquam augue mauris non euismod. Tristique lectus arcu lectus
                  turpis. Facilisis pharetra velit odio adipiscing. Praesent
                  habitasse vitae diam vel dolor at ipsum. Diam nunc aenean
                  facilisi quisque turpis dui. Sit ullamcorper enim imperdiet
                  elementum. Odio sapien tortor facilisi mauris sed posuere
                  cursus. Elit placerat blandit vitae lectus turpis vitae. Nulla
                  diam eu nulla sagittis porta egestas neque. Massa dui neque
                  faucibus justo aliquam. A sollicitudin scelerisque lacinia
                  mauris. Amet hendrerit tortor a dui porta eu tristique nec.
                  Integer elementum fermentum nunc mauris. Gravida venenatis
                  magna ac luctus ridiculus tincidunt diam. Bibendum ut aliquet
                  libero cras tincidunt urna at mauris tristique. Eu venenatis
                  in nulla tortor nascetur porttitor urna amet. Facilisis cras
                  gravida mattis egestas quisque aliquam. Commodo blandit eu sem
                  in lobortis lorem dignissim quis semper. Ut gravida facilisis
                  nec euismod vivamus mauris tortor iaculis felis. Sollicitudin
                  sed iaculis volutpat quisque aliquet lorem venenatis laoreet
                  ac. Ac eget.
                </p>
              </article>

              {/* Section Title */}
              <h2 className="text-[35px] leading-[35px] mt-10 mb-4">
                Lorem Ipsum
              </h2>

              {/* Additional Content */}
              <article className="space-y-6">
                <p className="text-[18px] leading-[25px]">
                  Lorem ipsum dolor sit amet consectetur. Eros mattis odio non
                  vel pretium morbi viverra sed ultrices. Elementum at ut orci
                  amet est. Vel fermentum vitae nunc faucibus commodo nibh.
                  Porttitor odio sit id ipsum donec mauris arcu. Sit nulla
                  sollicitudin etiam aliquam nam egestas. Netus facilisis a
                  sollicitudin urna tristique dignissim. Ultricies enim risus a
                  suspendisse etiam. Adipiscing enim at et odio. Dictum urna
                  pulvinar aliquet arcu mattis. Venenatis maecenas at amet
                  lobortis ipsum ac. <br />
                  Proin nulla diam feugiat tellus odio fermentum sit viverra
                  sodales. Donec purus et in in donec nunc diam nulla. Tellus
                  proin aliquet ut enim. Et adipiscing donec faucibus a fames
                  eget enim. Egestas iaculis aliquam malesuada tincidunt amet eu
                  turpis nisi sit. Nibh suspendisse quisque vitae morbi
                  pellentesque a ut. <br />
                  Nec tristique euismod cursus tristique. Tristique amet
                  adipiscing turpis dictum leo sed at. Curabitur nam aliquet
                  nibh mattis id luctus eu habitasse massa. Nulla ornare amet
                  ullamcorper leo lobortis nunc pretium leo. Morbi vel ac tempor
                  est. Quam elementum praesent interdum etiam a natoque nisl
                  tempor morbi. <br />
                  Faucibus duis feugiat vestibulum blandit massa purus nullam
                  purus. Nulla pellentesque egestas massa bibendum sit risus
                  consectetur pellentesque volutpat. Mauris a volutpat ultrices
                  aliquam augue mauris non euismod. Tristique lectus arcu lectus
                  turpis. Facilisis pharetra velit odio adipiscing. Praesent
                  habitasse vitae diam vel dolor at ipsum. Diam nunc aenean
                  facilisi quisque turpis dui. Sit ullamcorper enim imperdiet
                  elementum. Odio sapien tortor facilisi mauris sed posuere
                  cursus. Elit placerat blandit vitae lectus turpis vitae. Nulla
                  diam eu nulla sagittis porta egestas neque. Massa dui neque
                  faucibus justo aliquam. A sollicitudin scelerisque lacinia
                  mauris. Amet hendrerit tortor a dui porta eu tristique nec.
                  Integer elementum fermentum nunc mauris. Gravida venenatis
                  magna ac luctus ridiculus tincidunt diam. Bibendum ut aliquet
                  libero cras tincidunt urna at mauris tristique. Eu venenatis
                  in nulla tortor nascetur porttitor urna amet. Facilisis cras
                  gravida mattis egestas quisque aliquam. Commodo blandit eu sem
                  in lobortis lorem dignissim quis semper. Ut gravida facilisis
                  nec euismod vivamus mauris tortor iaculis felis. Sollicitudin
                  sed iaculis volutpat quisque aliquet lorem venenatis laoreet
                  ac. Ac eget.
                </p>
              </article>
            </div>
          </div>

          <div className="mt-20">
            <OtherBlogs />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default page;
