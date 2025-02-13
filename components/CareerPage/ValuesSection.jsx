import React from "react";

const ValuesSection = () => {
  const values = [
    {
      number: "01",
      title: "Lorem ipsum dolor sit",
      description:
        "Lorem ipsum dolor sit amet consectetur. Quis semper erit in amet aliquam dapibus nisi cursus tempor. Magna pharetra nisi nisi praesent.",
    },
    {
      number: "02",
      title: "Lorem ipsum dolor sit",
      description:
        "Lorem ipsum dolor sit amet consectetur. Quis semper erit in amet aliquam dapibus nisi cursus tempor. Magna pharetra nisi nisi praesent.",
    },
    {
      number: "03",
      title: "Lorem ipsum dolor sit",
      description:
        "Lorem ipsum dolor sit amet consectetur. Quis semper erit in amet aliquam dapibus nisi cursus tempor. Magna pharetra nisi nisi praesent.",
    },
  ];

  return (
    <div className="max-container px-16 py-20">
      <div className="">
        <h2 className="text-h2 text-[#1C1D58] font-bold mb-12">Our Values</h2>

        <div className="bg-[#151642] rounded-[20px] px-20 py-9">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-white border-l border-[#E0E0EF] border-opacity-40 pl-3"
              >
                <div className="text-lg  mb-4 opacity-60">{value.number}</div>
                <h3 className="text-[24px] mb-3 mt-[200px]">{value.title}</h3>
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
