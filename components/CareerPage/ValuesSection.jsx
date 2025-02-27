import React from "react";

const ValuesSection = () => {
  const values = [
    {
      number: "01",
      title: "Innovative Spirit",
      description:
        "Creativity drives us. Fresh ideas inspire us to craft unique, impactful communications that resonate.",
    },
    {
      number: "02",
      title: "Teamwork in Action",
      description:
        "We thrive on teamwork, where diverse perspectives unite, fostering collaboration that drives our collective success.",
    },
    {
      number: "03",
      title: "Driven by Enthusiasm",
      description:
        "Our passion for communication motivates us to go the extra mile, delivering exceptional results for our clients.",
    },
  ];

  return (
    <div className="max-container lg:px-16 px-5 lg:py-20 py-20">
      <div className="">
        <h2 className="lg:text-h2 text-[44px] leading-[44px] lg:leading-[55px] text-[#1C1D58] font-bold mb-12">
          Our Values
        </h2>

        <div className="bg-[#151642] rounded-[20px] lg:px-20 px-5 py-9">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-white lg:border-l lg:border-t-0 pt-5 border-l-0 border-t border-[#E0E0EF] border-opacity-40 pl-3"
              >
                <div className="lg:text-[28px] text-[23px] mb-4 opacity-60">{value.number}</div>
                <h3 className="lg:text-[24px] text-[23px] mb-3 lg:mt-[200px] mt-5">
                  {value.title}
                </h3>
                <p className="text-[16px] opacity-70 leading-[21px]">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValuesSection;
