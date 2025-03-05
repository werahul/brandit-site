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
      dates: "Jan 02, 2025",
      title: "Influencer Marketing’s Role in PR Campaigns",
      service: "Influencer Marketing",
      image: "/blogsImg/blog1.png",
      path: "/blogs/influencer-marketings-role-in-pr-campaigns ",
    },
    {
      id: 2,
      dates: "Jan 13, 2025",
      title: "PR vs Advertising: Why earned media wins",
      service: "Public Relations",
      image: "/blogsImg/blog2.png",
      path: "/blogs/pr-vs-advertising-why-earned-media-wins ",
    },
    {
      id: 3,
      dates: "Jan 25, 2025",
      title: "The power of storytelling in PR",
      service: "Brand Storytelling",
      image: "/blogsImg/blog3.png",
      path: "/blogs/the-power-of-storytelling-in-pr ",
    },
  ];

  return (
    <div className="bg-[#002A00]">
      <Navbar />
      <div className=" lg:pb-40 pb-16 ">
        <div className=" max-container text-white lg:px-16 px-5 lg:pt-[240px] pt-[140px] pb-0 flex items-center lg:space-x-40">
          <motion.div>
            <img
              src="/blogsImg/mainBanner4.png"
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
                  • <span className="mr-2">Guestlist Curation </span> •
                  <span className="ml-1 mr-3">5 min read</span>{" "}
                  <br className="lg:hidden" /> •
                  <span className="ml-1">Feb 05, 2025</span>
                </div>
                <h1 className="lg:text-h2 text-[44px] lg:leading-[55px] leading-[44px] font-bold">
                  The Psychology behind VIP guestlist curation
                </h1>
              </header>

              {/* Main Article Content */}
              <article className="space-y-6">
                <p className="lg:text-[18px] text-[16px] lg:leading-[25px] leading-[22px]">
                  VIP guestlist curating is a psychologically driven art form.
                  It's more than just choosing powerful people or well-known
                  faces for an event; it's about creating a group that adds
                  exclusivity, attractiveness, and success to the event. Whether
                  it's a high-profile gala, a business launch, or a private
                  party, understanding the psychological factors that lead to an
                  exclusive guestlist is critical for establishing the proper
                  mood and assuring the event's success. Let's look at the
                  psychology behind VIP guestlist curating and how it affects
                  both attendees and the event itself.
                </p>
              </article>

              {/* Section Title */}

              {/* Additional Content */}
              <article className="lg:space-y-5 space-y-3  mt-10">
                <h2 className="lg:text-[35px] text-[24px] lg:leading-[35px] leading-[24px]">
                  Exclusivity at its peak
                </h2>
                <p className="lg:text-[18px] text-[16px] lg:leading-[25px] leading-[22px]">
                  One of the most basic psychological concepts at work in VIP
                  guestlist curating is exclusivity. Humans are naturally drawn
                  to items that are unusual or difficult to obtain. This idea,
                  known as "scarcity," is a fundamental reason why individuals
                  value VIP access so much. Being invited to an exclusive event
                  makes people feel special, chosen, and significant. This sense
                  of exclusivity elicits good emotions and fosters a sense of
                  status among invited guests. From the event organizer's
                  standpoint, creating an exclusive guestlist communicates to
                  attendees that they are a part of something unique. By
                  carefully picking people who suit a specific profile
                  (influencers, high-net-worth individuals, thought leaders),
                  the host appeals to the psychological demand for status and
                  recognition, making the invitation feel like a luxury.
                </p>
              </article>

              <article className="lg:space-y-5 space-y-3  mt-10">
                <h2 className="lg:text-[35px] text-[24px] lg:leading-[35px] leading-[24px]">
                  Social proof
                </h2>
                <p className="lg:text-[18px] text-[16px] lg:leading-[25px] leading-[22px]">
                  Another important factor in creating a VIP guestlist is social
                  proof, which is the premise that people tend to mimic the acts
                  or behaviors of others, particularly when they are unsure what
                  to do. If a well-known person or celebrity is on the guest
                  list, others will feel compelled to attend, frequently because
                  they want to be viewed in a certain social circle. <br />
                  When powerful or well-known people come, it generates a "halo
                  effect," in which the event's value and appeal are higher
                  solely because of who is present. This social proof can have a
                  knock-on effect, motivating others to become part of the
                  "in-crowd."
                </p>
              </article>
              <article className="lg:space-y-5 space-y-3  mt-10">
                <h2 className="lg:text-[35px] text-[24px] lg:leading-[35px] leading-[24px]">
                  FOMO
                </h2>
                <p className="lg:text-[18px] text-[16px] lg:leading-[25px] leading-[22px]">
                  FOMO (Fear of missing out) also plays a significant influence
                  in VIP curation. It's a psychological trigger that causes
                  people to worry about losing out on special opportunities or
                  experiences. When people are aware of an exclusive guestlist,
                  the dread of not being invited — or worse, not being included
                  in something they regard as elite — can fuel a desire to
                  acquire admittance. Organizers create FOMO in public by
                  carefully selecting VIP visitors and hinting at the event's
                  "elite" nature. Even individuals who were not invited may feel
                  compelled to network or attempt to get included in the next
                  high-profile event, generating awareness for the business or
                  event in question.
                </p>
              </article>
              <article className="lg:space-y-5 space-y-3  mt-10">
                <h2 className="lg:text-[35px] text-[24px] lg:leading-[35px] leading-[24px]">
                  Builds social connections 
                </h2>
                <p className="lg:text-[18px] text-[16px] lg:leading-[25px] leading-[22px]">
                  A well-curated VIP guestlist is built around the demand for
                  social connection and belonging. People want to be a part of
                  something meaningful, and a chosen guestlist fosters an
                  environment in which participants feel surrounded by people of
                  similar position, hobbies, or skill. For the event organizer,
                  this entails assembling a group of people who will interact in
                  a way that enhances the event's mood. <br />
                  People in this chosen group are more likely to make meaningful
                  contacts, share ideas, and create ties. The psychology of
                  belonging guarantees that attendees are at ease and keen to
                  network within this elite circle. By carefully selecting
                  visitors, the organizer creates an environment in which
                  relationships occur naturally and seamlessly, hence increasing
                  the event's value.
                </p>
              </article>

              <article className="lg:space-y-5 space-y-3  mt-10">
                <h2 className="lg:text-[35px] text-[24px] lg:leading-[35px] leading-[24px] font-semibold">
                  Conclusion
                </h2>
                <p className="lg:text-[18px] text-[16px] lg:leading-[25px] leading-[22px]">
                  The psychology of VIP guestlist curation is around
                  understanding participants' underlying goals, desires, and
                  habits. Even organizers may create powerful and memorable
                  experiences by catering to people's desires for exclusivity,
                  status, social proof, and belonging. Choosing the right people
                  not only improves the atmosphere of the event but also
                  increases its success. When done correctly, a curated VIP
                  guestlist has the potential to boost a brand, strengthen
                  relationships, and make an indelible impression on both guests
                  and hosts.
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
