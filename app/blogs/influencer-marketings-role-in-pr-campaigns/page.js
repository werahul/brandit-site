"use client";

import React from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import OtherBlogs from "@/components/BlogPage/OtherBlogs";

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
      <Navbar />
      <div className=" lg:pb-40 pb-16">
        <div className=" max-container text-white lg:px-16 px-5 lg:pt-[280px] pt-[140px] pb-0 flex items-center lg:space-x-40">
          <motion.div>
            <img
              src="/blogsImg/mainBanner1.png"
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
                  • <span className="mr-2">Influencer Marketing </span> •
                  <span className="ml-1 mr-3">5 min read</span>{" "}
                  <br className="lg:hidden" /> •
                  <span className="ml-1">Jan 02, 2025</span>
                </div>
                <h1 className="lg:text-h2 text-[44px] lg:leading-[55px] leading-[44px] font-bold">
                  Influencer Marketing’s Role in PR Campaigns
                </h1>
              </header>

              {/* Main Article Content */}
              <article className="space-y-6">
                <p className="lg:text-[18px] text-[16px] lg:leading-[25px] leading-[22px]">
                  In today's digital age, influencer marketing has progressed
                  from a passing fad to a critical component of public relations
                  initiatives. With the growth of social media platforms such as
                  Instagram and YouTube, influencers have emerged as influential
                  characters capable of altering public opinion, driving
                  consumer behavior, and increasing brand exposure. Influencer
                  marketing's potential has been recognized by public relations
                  experts, who have included it into their overall strategy to
                  increase campaign efficacy. This blog delves into the critical
                  role that influencer marketing plays in public relations
                  initiatives and why it has become an essential tool for
                  current PR practitioners.
                </p>
              </article>

              {/* Section Title */}

              {/* Additional Content */}
              <article className="lg:space-y-5 space-y-3  mt-10">
                <h2 className="lg:text-[35px] text-[24px] lg:leading-[35px] leading-[24px]">
                  Building authentic connections
                </h2>
                <p className="lg:text-[18px] text-[16px] lg:leading-[25px] leading-[22px]">
                  Traditional public relations efforts frequently used mass
                  media outlets like television, print, and radio to reach a
                  large audience. While these platforms remain relevant, the
                  landscape has altered. Consumers today are more likely to
                  believe individuals they follow on social media than business
                  marketing. Influencers, whether celebrities, industry gurus,
                  or micro-influencers, have established genuine connections
                  with their audiences. These relationships are built on trust,
                  trustworthiness, and similar values, making influencers
                  uniquely qualified to convey a brand's message. Collaboration
                  with influencers allows PR professionals to leverage
                  pre-existing connections and communicate messages in a more
                  relatable, real manner. 
                </p>
              </article>

              <article className="lg:space-y-5 space-y-3  mt-10">
                <h2 className="lg:text-[35px] text-[24px] lg:leading-[35px] leading-[24px]">
                  Amplifying brand messages
                </h2>
                <p className="lg:text-[18px] text-[16px] lg:leading-[25px] leading-[22px]">
                  One of the primary benefits of influencer marketing in public
                  relations initiatives is its capacity to magnify a brand's
                  message. Influencers typically have millions of followers
                  across numerous platforms. When influencers distribute
                  brand-related content, it reaches a much bigger audience than
                  a small, niche group. PR professionals can use influencer
                  marketing to generate awareness for new product launches,
                  events, or campaigns. Influencers may increase exposure,
                  generate conversations, and raise brand recognition in ways
                  that traditional media may struggle to do. With the added
                  benefit of social sharing, influencers can generate a ripple
                  effect that extends a campaign's reach well beyond the
                  influencer's direct audience.
                </p>
              </article>
              <article className="lg:space-y-5 space-y-3  mt-10">
                <h2 className="lg:text-[35px] text-[24px] lg:leading-[35px] leading-[24px]">
                  Creating credibility through endorsement
                </h2>
                <p className="lg:text-[18px] text-[16px] lg:leading-[25px] leading-[22px]">
                  In public relations, credibility is important. Influencers are
                  seen as trusted authorities in their professions, and when
                  they promote a product or service, their endorsement is
                  frequently more credible than a traditional advertisement or
                  press release. This form of third-party validation is
                  extremely significant in public relations campaigns since it
                  may boost a brand's reputation and position it as an industry
                  leader. Influencers also help to humanize a business. Instead
                  of receiving a business message from an anonymous source, an
                  influencer's personal touch helps the brand appear more
                  approachable and personable. This emotional connection can
                  have a considerable impact on consumer perception, making
                  influence marketing an effective strategy for reputation
                  management.
                </p>
              </article>
              <article className="lg:space-y-5 space-y-3  mt-10">
                <h2 className="lg:text-[35px] text-[24px] lg:leading-[35px] leading-[24px]">
                  Managing PR Crisis
                </h2>
                <p className="lg:text-[18px] text-[16px] lg:leading-[25px] leading-[22px]">
                  Influencers can also help manage public relations disasters.
                  When a brand receives negative media or has a public relations
                  issue, an influencer can help change the narrative in a
                  positive way. Influencers can impact on how the public
                  perceives a crisis, whether by directly addressing the issue
                  or offering a counter-narrative. For example, an influencer
                  may tell a story about how a brand handles a problem with
                  transparency and honesty, so it helps to rebuild trust. In
                  times of crisis, an influencer's personal connection with
                  their audience can be critical in protecting a brand's
                  reputation.
                </p>
              </article>
              <article className="lg:space-y-5 space-y-3  mt-10">
                <h2 className="lg:text-[35px] text-[24px] lg:leading-[35px] leading-[24px] font-semibold">
                  Conclusion
                </h2>
                <p className="lg:text-[18px] text-[16px] lg:leading-[25px] leading-[22px]">
                  Influencer marketing has proven to be more than a fleeting fad
                  in the public relations field and it's a strong tool for
                  amplifying messages, building trust, and fostering genuine
                  connections between businesses and customers. Businesses that
                  effectively incorporate influences into their public relations
                  strategies can not only reach a larger audience but also
                  develop long-term relationships with their target population.
                  As social media evolves, influencer marketing will likely
                  remain a key component of effective public relations efforts.
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
