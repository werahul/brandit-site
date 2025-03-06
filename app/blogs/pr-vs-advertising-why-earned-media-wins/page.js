"use client";

import React from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import OtherBlogs from "@/components/BlogPage/OtherBlogs";
import Head from "next/head";

const page = () => {
  const blogsData = [
    {
      id: 1,
      dates: "Feb 05, 2025",
      title: "The psychology behind VIP guestlist curation",
      service: "Guestlist Curation",
      image: "/blogsImg/blog4.png",
      path: "/blogs/the-psychology-behind-vip-guestlist-curation ",
    },
    {
      id: 2,
      dates: "Feb 18, 2025",
      title: "How storytelling supercharges your brand connections",
      service: "Brand Storytelling",
      image: "/blogsImg/blog5.png",
      path: "/blogs/how-storytelling-supercharges-your-brand-connections ",
    },
    {
      id: 3,
      dates: "Mar 03, 2025",
      title: "Why your brand needs strategy to thrive in the market",
      service: "Brand Strategy Consulting",
      image: "/blogsImg/blog6.png",
      path: "/blogs/why-your-brand-needs-strategy-to-thrive-in-the-market ",
    },
  ];
  return (
    <div className="bg-[#002A00]">
      <Head>
        <title>Blogs | BRANDiT</title>
        <meta
          name="description"
          content="PR vs Advertising: Why earned media wins"
        />
      </Head>
      <Navbar />
      <div className=" lg:pb-40 pb-16 ">
        <div className=" max-container text-white lg:px-16 px-5 lg:pt-[240px] pt-[140px] pb-0 flex items-center lg:space-x-40">
          <motion.div>
            <img
              src="/blogsImg/mainBanner2.png"
              alt="Blog Banner"
              className="w-full lg:h-[584px]"
            />
          </motion.div>
        </div>
      </div>

      <div className="bg-white text-[#151642] lg:rounded-[80px] py-[80px] ">
        <div className="lg:px-16 px-5 max-container">
          <div className="">
            <div className="">
              {/* Article Header */}
              <header className="mb-8">
                <div className="text-[14px] text-[#4B5563] mb-6">
                  • <span className="mr-2">Public Relations </span> •
                  <span className="ml-1 mr-3">5 min read</span>{" "}
                  <br className="lg:hidden" /> •
                  <span className="ml-1">Jan 13, 2025</span>
                </div>
                <h1 className="lg:text-h2 text-[44px] lg:leading-[55px] leading-[44px] font-bold">
                  PR vs Advertising: Why earned media wins
                </h1>
              </header>

              {/* Main Article Content */}
              <article className="space-y-6">
                <p className="lg:text-[18px] text-[16px] lg:leading-[25px] leading-[22px]">
                  Public relations (PR) and advertising are both important
                  marketing tactics for increasing brand visibility and growth.
                  They do, however, work in various ways and serve diverse
                  objectives. Advertising is often a paid, controlled message,
                  whereas public relations focusses on earning a reputation
                  through earned media and coverage that your business receives
                  without directly paying for it. This distinction is frequently
                  what makes earned media the most valuable tactic in the long
                  run. Here's why the earned media, the foundation of PR,
                  frequently outperforms advertising.
                </p>
              </article>

              {/* Section Title */}

              {/* Additional Content */}
              <article className="lg:space-y-5 space-y-3  mt-10">
                <h2 className="lg:text-[35px] text-[24px] lg:leading-[35px] leading-[24px]">
                  1. Trust
                </h2>
                <p className="lg:text-[18px] text-[16px] lg:leading-[25px] leading-[22px]">
                  The main advantage of earned media versus advertising is
                  trust. Consumers are naturally skeptical of paid commercials,
                  recognizing that they are intending to sell something. Earned
                  media, such as news reports, media features, or influencer
                  endorsements, is derived from third-party sources that are
                  regarded to be more neutral. This independent confirmation
                  increases a brand's credibility and authenticity in the eyes
                  of potential customers. When credible media sources talk about
                  your brand, it has a significantly greater impact than when a
                  brand talks about itself in an advertisement.
                </p>
              </article>

              <article className="lg:space-y-5 space-y-3  mt-10">
                <h2 className="lg:text-[35px] text-[24px] lg:leading-[35px] leading-[24px]">
                  2. Cost
                </h2>
                <p className="lg:text-[18px] text-[16px] lg:leading-[25px] leading-[22px]">
                  The low cost of earned media is one of its most appealing
                  qualities. Advertising frequently necessitates a large
                  financial expenditure, particularly when it comes to digital,
                  television, or print commercials. These expenses can
                  accumulate quickly, especially for long-term initiatives.
                  Earned media, on the other hand, does not carry the same high
                  price tag. While there are always costs associated with
                  carrying out a PR strategy, such as hiring a PR team or
                  writing press releases, the return on investment (ROI) from
                  media coverage is frequently better because it does not
                  require direct payment for placements.
                </p>
              </article>
              <article className="lg:space-y-5 space-y-3  mt-10">
                <h2 className="lg:text-[35px] text-[24px] lg:leading-[35px] leading-[24px]">
                  3. Greater Impact
                </h2>
                <p className="lg:text-[18px] text-[16px] lg:leading-[25px] leading-[22px]">
                  Another reason why earned media generally outperforms
                  advertising is its longevity. Once an ad campaign expires, the
                  brand must invest again to maintain visibility. However,
                  earned exposure, such as a mention in a prominent publication
                  or a popular social media post, might last indefinitely. This
                  continued exposure maintains your brand in front of a target
                  demographic long after the first coverage. Articles and media
                  mentions can drive traffic to your website or social media for
                  months or even years, giving long-term value without
                  additional expenditure.
                </p>
              </article>
              <article className="lg:space-y-5 space-y-3  mt-10">
                <h2 className="lg:text-[35px] text-[24px] lg:leading-[35px] leading-[24px]">
                  4. Organic Engagement 
                </h2>
                <p className="lg:text-[18px] text-[16px] lg:leading-[25px] leading-[22px]">
                  Earned media offers a unique edge in terms of organic reach. A
                  positive narrative shared by the media or an influencer is
                  frequently picked up, remarked on, and amplified by audiences
                  via social media or word of mouth. This generates organic buzz
                  for your business, allowing it to expand naturally. In
                  contrast, advertising's reach is generally confined to the
                  platforms for which you have paid, and while it can be
                  beneficial in the near term, it lacks the viral potential of
                  earned media.
                </p>
              </article>
              <article className="lg:space-y-5 space-y-3  mt-10">
                <h2 className="lg:text-[35px] text-[24px] lg:leading-[35px] leading-[24px]">
                  5. Art of Storytelling
                </h2>
                <p className="lg:text-[18px] text-[16px] lg:leading-[25px] leading-[22px]">
                  PR enables brands to tell their stories in a more
                  sophisticated and engaging manner. Rather than simply
                  promoting a product, public relations aim to create a story
                  about a brand's values, mission, and influence. Earned media
                  allows organizations to go beyond transactional communications
                  and connect with their customers on a deeper level. However,
                  advertising focuses on straight selling and product promotion,
                  which might be less emotionally appealing.
                </p>
              </article>
              <article className="lg:space-y-5 space-y-3  mt-10">
                <h2 className="lg:text-[35px] text-[24px] lg:leading-[35px] leading-[24px] font-semibold">
                  Conclusion
                </h2>
                <p className="lg:text-[18px] text-[16px] lg:leading-[25px] leading-[22px]">
                  While advertising has its role in a comprehensive marketing
                  strategy, earned media, the heart of public relations has the
                  potential to foster a deeper, more honest connection with
                  customers. PR contributes to the development of long-term
                  relationships between brands and their consumers by creating
                  trust, providing cost-effective solutions, and delivering
                  enduring influence. In today's environment, when authenticity
                  and trust reign supreme, the earned media frequently triumph
                  over public relations and advertising.
                </p>
              </article>
            </div>
          </div>

          <div className="lg:mt-20 mt-10">
            <OtherBlogs blogs={blogsData} />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default page;
