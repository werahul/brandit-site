import React from "react";

const ServicesListing = () => {
  return (
    <div className="bg-white py-20 rounded-[80px]">
      <div className="text-[#1C1D58]  px-16 max-container ">
        <div className="flex flex-row items-center pb-32">
          <div className="w-1/2">
            <h2 className="text-h2 leading-[55px]">
              Unmatched PR for Unstoppable Growth
            </h2>
          </div>
          <div className="w-1/2">
            <p className="text-[23px] leading-[27px]">
              We turn your brand's message into news everyone wants to share.
            </p>
          </div>
        </div>

        <div className="flex flex-row items-center gap-x-[100px]">
          <div className="w-1/2">
            <h2 className="text-h2 leading-[55px] font-bold">
              Brand Storytelling
            </h2>
            <p className="text-[23px] leading-[32px] py-8">
              Brand storytelling is a marketing technique that goes beyond
              traditional advertising to build a deeper connection with the
              audience. It uses narratives to convey a brand's values, mission,
              and purpose in a way that emotionally resonates with consumers,
              fostering engagement and loyalty.
            </p>

            <ul className="text-[18px] font-bold list-disc ml-5 space-y-1">
              <li>Authenticity</li>
              <li>Relatability</li>
              <li>Compelling Narrative</li>
              <li>Emotional Connection</li>
              <li>Clear Message</li>
            </ul>
          </div>
          <div className="w-1/2">
            <div className="bg-[#D9D9D9] w-full h-[600px] rounded-tr-[109px] rounded-br-[2px] rounded-tl-[2px] rounded-bl-[2px] "></div>
          </div>
        </div>
        <div className="flex flex-row-reverse items-center gap-x-[100px] mt-20">
          <div className="w-1/2">
            <h2 className="text-h2 leading-[55px] font-bold">
              Public Relations{" "}
            </h2>
            <p className="text-[23px] leading-[32px] py-8">
              We build and maintain strong relationships between brands and
              their target audience through strategic communication. This
              includes media relations, crisis communication, social media
              engagement, influencer partnerships, brand storytelling, community
              outreach, and reputation management to enhance brand trust and
              visibility.
            </p>

            <ul className="text-[18px] font-bold list-disc ml-5 space-y-1">
              <li>Media Relations</li>
              <li>Crisis Communication</li>
              <li>Social Media Management</li>
              <li>Community Outreach</li>
              <li>Reputation Management</li>
            </ul>
          </div>
          <div className="w-1/2">
            <div className="bg-[#D9D9D9] w-full h-[600px] rounded-tr-[2px] rounded-br-[2px] rounded-tl-[109px] rounded-bl-[2px] "></div>
          </div>
        </div>
        <div className="flex flex-row items-center gap-x-[100px] mt-20">
          <div className="w-1/2">
            <h2 className="text-h2 leading-[55px] font-bold">
              Influencer Marketing{" "}
            </h2>
            <p className="text-[23px] leading-[32px] py-8">
              We identify and collaborate with influential individuals to
              promote brands to their respective target audiences. This involves
              establishing strategic partnerships, planning impactful campaigns,
              creating engaging content, managing influencer relationships, and
              tracking performance to ensure successful outcomes.
            </p>

            <ul className="text-[18px] font-bold list-disc ml-5 space-y-1">
              <li>Strategic Partnerships</li>
              <li>Content Co-Creation </li>
              <li>Campaign Optimization </li>
              <li>Performance Tracking </li>
              <li>Audience Analysis </li>
            </ul>
          </div>
          <div className="w-1/2">
            <div className="bg-[#D9D9D9] w-full h-[600px] rounded-tr-[109px] rounded-br-[2px] rounded-tl-[2px] rounded-bl-[2px] "></div>
          </div>
        </div>
        <div className="flex flex-row-reverse items-center gap-x-[100px] mt-20">
          <div className="w-1/2">
            <h2 className="text-h2 leading-[55px] font-bold">
              Brand Strategy Consulting{" "}
            </h2>
            <p className="text-[23px] leading-[32px] py-8">
              We help businesses define their unique brand identity by
              uncovering core values, vision, and mission. We craft compelling
              brand stories that connect with audiences and create targeted
              marketing strategies. This builds strong brand equity, enhances
              loyalty, and drives business growth.
            </p>

            <ul className="text-[18px] font-bold list-disc ml-5 space-y-1">
              <li>Brand Positioning </li>
              <li>Brand Performance Measurement </li>
              <li>Brand Discovery </li>
              <li>Brand Identity Development </li>
              <li>Go to Market Strategy </li>
            </ul>
          </div>
          <div className="w-1/2">
            <div className="bg-[#D9D9D9] w-full h-[600px] rounded-tr-[2px] rounded-br-[2px] rounded-tl-[109px] rounded-bl-[2px]  "></div>
          </div>
        </div>

        <div className="flex flex-row items-center gap-x-[100px] mt-20">
          <div className="w-1/2">
            <h2 className="text-h2 leading-[55px] font-bold">
              Guestlist Curation
            </h2>
            <p className="text-[23px] leading-[32px] py-8">
              We strategically select and invite an exclusive group of guests to
              enhance event quality and impact. By prioritizing target
              audiences, analyzing event goals, and leveraging data, we curate
              guest lists that align with objectives, foster valuable
              connections, and maximize engagement.
            </p>

            <ul className="text-[18px] font-bold list-disc ml-5 space-y-1">
              <li>Targeted Invitations</li>
              <li>Networking Facilitation </li>
              <li>Event Segmentation </li>
              <li>Event Coordination </li>
              <li>Onsite assistance</li>
            </ul>
          </div>
          <div className="w-1/2">
            <div className="bg-[#D9D9D9] w-full h-[600px] rounded-tr-[109px] rounded-br-[2px] rounded-tl-[2px] rounded-bl-[2px] "></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesListing;
