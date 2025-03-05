import React from "react";

const IndBrife = () => {
  const industries = [
    {
      title: "Travel & Tourism",
      description:
        "Travel isn’t just about destinations—it’s about experiences that inspire. At BrandiT Communications, we craft compelling narratives for tourism boards, luxury resorts, and travel brands, ensuring they captivate the right audience. From media buzz to influencer collaborations, we position your brand as the gateway to unforgettable journeys.",
      image: "/images/ind1.png",
      logos: [
        "/sector/travel1.svg",
        "/sector/travel2.svg",
        "/sector/travel3.svg",
      ],
    },
    {
      title: "Beauty",
      description:
        "The beauty industry moves fast- what’s trending today is old news tomorrow. At BrandiT Communications, we craft stories that make brands stand out. From securing top media features to curating authentic influencer collaborations, we ensure your brand gets noticed, trusted, and remembered in a space where innovation meets aesthetics.",
      image: "/images/ind2.png",
      logos: ["/sector/beau1.svg", "/sector/beau2.svg"],
    },
    {
      title: "Renewable Energy",
      description:
        "The renewable energy sector isn’t just about innovation, it’s about influence. As the world moves toward sustainability, companies need more than groundbreaking technology; they need a powerful voice. At BrandiT Communications, we craft compelling stories, secure top media coverage, and position your brand as a leader in the clean energy revolution.",
      image: "/images/ind3.png",
      logos: [
        "/sector/ren1.svg",
        "/sector/ren2.svg",
        "/sector/ren3.svg",
        "/sector/ren4.svg",
      ],
    },
    {
      title: "Auto",
      description:
        "The auto industry is evolving fast—from electrification to AI-driven automation. At BrandiT Communications, we help brands cut through the noise with impactful storytelling, media strategies, and industry positioning. Whether launching EVs or shaping mobility trends, we ensure your brand drives conversations and market influence.",
      image: "/images/ind6.png",

      logos: [
        "/sector/auto1.svg",
        "/sector/auto2.svg",
        "/sector/auto3.svg",
        "/sector/auto4.svg",
      ],
    },
    {
      title: "Luxury",
      description:
        "Luxury isn’t just about exclusivity, it’s about storytelling, emotion, and prestige. At BrandiT Communications, we craft PR strategies that amplify desirability while preserving authenticity. From high-impact media features to elite brand experiences, we position luxury brands where they belong—at the pinnacle of influence.",
      image: "/images/ind7.png",

      logos: ["/sector/lux1.svg", "/sector/lux2.svg", "/sector/lux3.svg"],
    },
    {
      title: "Fashion",
      description:
        "Fashion isn’t just about trends- it’s about storytelling, craftsmanship, and cultural impact. At BrandiT Communications, we elevate fashion brands with strategic PR, exclusive media features, and curated brand moments. From runway debuts to influencer-driven campaigns, we ensure your brand sets the standard, not just follows it. ",
      image: "/images/ind8.png",
      logos: [
        "/sector/fas1.svg",
        "/sector/fas2.svg",
        "/sector/fas3.svg",
        "/sector/fas4.svg",
        "/sector/fas5.svg",
      ],
    },
    {
      title: "Hospitality",
      description:
        "Hospitality is more than service- it’s about creating unforgettable experiences. At BrandiT Communications, we position hotels, resorts, and lifestyle brands as destinations of choice through strategic PR, media storytelling, and influencer collaborations. From luxury launches to travel features, we ensure your brand stays top-of-mind.",
      image: "/images/hosMain.png",
      logos: [
        "/sector/hos1.svg",
        "/sector/hos2.svg",
        "/sector/hos3.svg",
        "/sector/hos4.svg",
        "/sector/hos5.svg",
        "/sector/hos6.svg",
        "/sector/hos7.svg",
      ],
    },
    {
      title: "Incubation Arms",
      description:
        "Innovation needs more than ideas—it needs visibility, credibility, and the right connections. At BrandiT Communications, we position incubators and accelerators as hubs of breakthrough innovation. From investor outreach to media exposure, we craft strategies that attract startups, build influence, and drive the future of entrepreneurship.",
      image: "/images/ind8.png",
      logos: ["/sector/inc.svg"],
    },
    {
      title: "Entertainment",
      description:
        "In entertainment, visibility is everything. At BrandiT Communications, we craft buzzworthy campaigns, secure top media placements, and build audience engagement. Whether it’s films, music, live events, or digital content, we ensure your brand captures attention, shapes conversations, and stays in the spotlight.",
      image: "/images/ind9.png",
      logos: ["/sector/ent1.svg", "/sector/ent2.svg", "/sector/ent3.svg"],
    },
    {
      title: "Edtech",
      description:
        "Education is evolving with technology making learning more accessible and engaging than ever. At BrandiT Communications, we craft compelling narratives, drive media visibility, and position brands as pioneers in EdTech. From product launches to thought leadership, we ensure your brand shapes the future of learning. ",
      image: "/images/ind10.png",
      logos: ["/sector/edTech1.svg", "/sector/edTech2.svg"],
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
                <div className="flex flex-wrap gap-6 mt-10 ">
                  {(industry.logos ?? []).map((logo, i) => (
                    <img
                      key={i}
                      src={logo}
                      alt={`Logo ${i + 1}`}
                      className="h-10"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndBrife;
