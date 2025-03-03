import React from "react";

const IndBrife = () => {
  const industries = [
    {
      title: "B2B",
      description:
        "B2B isn’t about flashy ads- it’s about trust, credibility, and the right connections. At BrandiT Communications, we craft compelling narratives, secure top-tier media coverage, and position brands as industry leaders, ensuring they’re seen, trusted, and chosen in a world driven by expertise.",
      image: "/images/ind1.png",
    },
    {
      title: "Beauty",
      description:
        "The beauty industry moves fast- what’s trending today is old news tomorrow. At BrandiT Communications, we craft stories that make brands stand out. From securing top media features to curating authentic influencer collaborations, we ensure your brand gets noticed, trusted, and remembered in a space where innovation meets aesthetics.",
      image: "/images/ind2.png",
    },
    {
      title: "Renewable Energy",
      description:
        "The renewable energy sector isn’t just about innovation, it’s about influence. As the world moves toward sustainability, companies need more than groundbreaking technology; they need a powerful voice. At BrandiT Communications, we craft compelling stories, secure top media coverage, and position your brand as a leader in the clean energy revolution.",
      image: "/images/ind3.png",
    },
    {
      title: "District Cooling",
      description:
        "District cooling is transforming urban sustainability, but widespread awareness remains a challenge. At BrandiT Communications, we craft clear, impactful narratives that highlight its benefits, secure strategic media coverage, and engage key stakeholders. From policy discussions to industry leadership, we position your brand at the forefront of sustainable cooling solutions.",
      image: "/images/ind4.png",
    },
    {
      title: "Biofuels",
      description:
        "The biofuels industry is shaping the future of clean energy, but innovation alone isn’t enough. At BrandiT Communications, we translate complex advancements into compelling stories, secure top-tier media coverage, and position biofuel brands as industry leaders. From policy influence on public trust, we ensure your brand drives the change.",
      image: "/images/ind5.png",
    },
    {
      title: "Auto",
      description:
        "The auto industry is evolving fast—from electrification to AI-driven automation. At BrandiT Communications, we help brands cut through the noise with impactful storytelling, media strategies, and industry positioning. Whether launching EVs or shaping mobility trends, we ensure your brand drives conversations and market influence.",
      image: "/images/ind6.png",
    },
    {
      title: "Luxury",
      description:
        "Luxury isn’t just about exclusivity, it’s about storytelling, emotion, and prestige. At BrandiT Communications, we craft PR strategies that amplify desirability while preserving authenticity. From high-impact media features to elite brand experiences, we position luxury brands where they belong—at the pinnacle of influence.",
      image: "/images/ind7.png",
    },
    {
      title: "Fashion",
      description:
        "Fashion isn’t just about trends- it’s about storytelling, craftsmanship, and cultural impact. At BrandiT Communications, we elevate fashion brands with strategic PR, exclusive media features, and curated brand moments. From runway debuts to influencer-driven campaigns, we ensure your brand sets the standard, not just follows it.",
      image: "/images/ind8.png",
    },
    {
      title: "Hospitality",
      description:
        "Hospitality is more than service- it’s about creating unforgettable experiences. At BrandiT Communications, we position hotels, resorts, and lifestyle brands as destinations of choice through strategic PR, media storytelling, and influencer collaborations. From luxury launches to travel features, we ensure your brand stays top-of-mind.",
      image: "/images/ind9.png",
    },
    {
      title: "EV",
      description:
        "The EV industry is transforming transportation, but standing out takes more than innovation- it requires a powerful voice. At BrandiT Communications, we amplify your brand through strategic media, industry influence, and thought leadership. From launching new models to shaping sustainability discourse, we make sure your brand drives the future.  ",
      image: "/images/ind10.png",
    },
  ];

  return (
    <section className="bg-white lg:pt-[500px] pt-[170px] ">
      <div className="max-container lg:px-16 px-5">
        <h2 className="lg:text-h2 text-[44px] leading-[44px] lg:leading-[55px] text-[#1C1D58] font-bold mb-12">
          Industries we Serve
        </h2>
        <div className="space-y-10">
          {industries.map((industry, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg lg:p-6 flex items-center h-auto flex-col md:flex-row text-[#1C1D58] ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center md:items-start gap-x-[50px]`}
            >
              <img
                src={industry.image}
                alt={industry.title}
                className="w-full md:w-1/3 rounded-lg object-cover"
              />
              <div className="md:w-2/3 lg:mt-0 mt-5">
                <h3 className="text-[28px] leading-[33px] font-bold">
                  {industry.title}
                </h3>
                <p className="lg:mt-2 mt-3 text-[20px] leading-[28px]">
                  {industry.description}
                </p>
                <p className="lg:mt-[40px] mt-[25px]  text-[25px] leading-[33px]">
                  Client logos of that particular industry we have worked
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndBrife;
