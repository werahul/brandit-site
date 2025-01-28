import React from "react";

const awards = [
  {
    id: 1,
    title: "Award Logo",
    description:
      "Lorem ipsum nunc vulputate eget consectetur nunc adipiscing adipiscing amet interdum ligula.",
  },
  {
    id: 2,
    title: "Award Logo",
    description:
      "Lorem ipsum nunc vulputate eget consectetur nunc adipiscing adipiscing amet interdum ligula.",
  },
  {
    id: 3,
    title: "Award Logo",
    description:
      "Lorem ipsum nunc vulputate eget consectetur nunc adipiscing adipiscing amet interdum ligula.",
  },
  {
    id: 4,
    title: "Award Logo",
    description:
      "Lorem ipsum nunc vulputate eget consectetur nunc adipiscing adipiscing amet interdum ligula.",
  },
  {
    id: 5,
    title: "Award Logo",
    description:
      "Lorem ipsum nunc vulputate eget consectetur nunc adipiscing adipiscing amet interdum ligula.",
  },
  {
    id: 6,
    title: "Award Logo",
    description:
      "Lorem ipsum nunc vulputate eget consectetur nunc adipiscing adipiscing amet interdum ligula.",
  },
  {
    id: 7,
    title: "Award Logo",
    description:
      "Lorem ipsum nunc vulputate eget consectetur nunc adipiscing adipiscing amet interdum ligula.",
  },
  {
    id: 8,
    title: "Award Logo",
    description:
      "Lorem ipsum nunc vulputate eget consectetur nunc adipiscing adipiscing amet interdum ligula.",
  },
];

const AwardCard = ({ award }) => (
  <div className="bg-[#D9E7D9] p-6 rounded-[28px] hover:shadow-md transition-shadow">
    <div className="w-16 h-16 mb-4">
      <img
        src="/api/placeholder/64/64"
        alt={award.title}
        className="w-full h-full object-contain"
      />
    </div>

    <p className="text-[16px] leading-[20px] ">{award.description}</p>
  </div>
);

const AwardsGrid = () => {
  return (
    <div className="py-20   bg-white  text-[#1C1D58] pt-40">
      <div className="max-container px-16">
        <h2 className="text-h2 font-bold  mb-12">Awards & recognitions</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {awards.map((award) => (
            <AwardCard key={award.id} award={award} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AwardsGrid;
