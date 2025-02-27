import React from "react";

const awards = [
  {
    id: 1,
    title:
      "E4M women achievers’ awards 2023 - best PR agency for Women empowerment",
    description:
      "Honored to be recognized for promoting gender equality, empowering women, and advocating women’s leadership.",
  },
  {
    id: 2,
    title: "Times hospitality Icon awards for Best PR Professional – 2019",
    description:
      "This accolade celebrates our expertise in PR strategies and building strong brand reputations in hospitality.",
  },
  {
    id: 3,
    title:
      "Exchange4Media Women Achievers Summit & Awards 2025 – Entrepreneur of the year 2025 ",
    description:
      "This award celebrates breaking barriers, fueling success, and empowering future generations of female entrepreneurs.",
  },
];

const AwardCard = ({ award }) => (
  <div className="bg-[#D9E7D9] p-6 rounded-[28px] hover:shadow-md transition-shadow">
    <p className="font-semibold lg:text-[20px] text-[18px] lg:leading-[26px] leading-[21px]">{award.title}</p>
    <p className="lg:text-[16px] text-[14px] lg:leading-[24px] leading-[16px] lg:mt-7 mt-5 ">{award.description}</p>
  </div>
);

const AwardsGrid = () => {
  return (
    <div className="py-20   bg-white  text-[#1C1D58] pt-40">
      <div className="max-container lg:px-16 px-5">
        <h2 className="lg:text-h2 text-[44px] leading-[44px] lg:leading-[55px] font-bold  mb-12">Awards & Recognitions</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {awards.map((award) => (
            <AwardCard key={award.id} award={award} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AwardsGrid;
