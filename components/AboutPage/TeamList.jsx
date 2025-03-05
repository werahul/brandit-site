"use client";

import React, { useState } from "react";

const teamMembers = [
  {
    id: 1,
    image: "/images/ab1.png",
    name: "Manjuu Rangarajan",
    text: "Leading BrandiT with strategy and vision.",
    designation: "Founder and CEO",
    linkedin: "https://www.linkedin.com/in/manjuu-rangarajan-a8673720/",
  },
  {
    id: 2,
    image: "/images/ab2.png",
    name: "Rimjim Bora",
    text: "PR expert driving brand visibility & impact.",
    designation: "Senior PR Manager",
    linkedin: "https://www.linkedin.com/in/rimjim-bora-661490b6/",
  },
  {
    id: 3,
    image: "/images/ab3.png",
    name: "Roshna Shetty",
    text: "PR pro crafting compelling brand stories.",
    designation: "Sr. Manager | Client Servicing & Media Relations",
    linkedin: "https://www.linkedin.com/in/roshna-shetty-34866b113/",
  },
  {
    id: 4,
    image: "/images/ab4.png",
    name: "Hasti K B",
    text: "Elevating brands through media relations.",
    designation: "Manager",
    linkedin: "https://www.linkedin.com/in/hasti-k-b-49a834338/",
  },
  {
    id: 5,
    image: "/images/ab5.png",
    name: "Subhangi K",
    text: "PR professional in lifestyle & hospitality.",
    designation: "Associate PR Manager",
    linkedin: "https://www.linkedin.com/in/subhangi-k-50828b150/",
  },
];

const TeamMember = ({ member, isActive, onMouseEnter, onMouseLeave }) => (
  <div
    className={` ${
      isActive
        ? "lg:bg-green-gradient bg-transparent lg:text-white "
        : "bg-transparent lg:hover:bg-green-gradient lg:hover:text-white"
    }`}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <div className="lg:flex hidden items-center justify-between lg:px-16 px-5 transition-all duration-300 h-[184px] max-container ">
      {/* Name or Text */}
      <div className="flex items-center gap-4">
        <span className="lg:text-[48px] text-[44px]">
          {isActive ? member.text : member.name}
        </span>
      </div>

      {/* Profile Image */}
      {isActive ? (
        <div className="w-[150px] h-[150px] rounded-full bg-transparent overflow-hidden">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover"
          />
        </div>
      ) : (
        ""
      )}

      {/* Designation and LinkedIn */}
      <div className="flex items-end gap-4 pt-20">
        {!isActive && <span className="text-[24px]">{member.designation}</span>}
        {isActive && (
          <a
            href={member.linkedin}
            className="text-white hover:underline text-sm flex space-x-3"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn{" "}
            <span>
              <svg
                width="23"
                height="23"
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_18_7215)">
                  <path
                    d="M17.1774 5.79255C17.1771 5.79253 17.1769 5.79247 17.1766 5.79248L12.7048 5.54613C12.3698 5.52768 12.0832 5.78427 12.0647 6.11934C12.0462 6.45437 12.3029 6.74093 12.6379 6.7594L15.6402 6.92476L6.03498 15.4853C5.78448 15.7085 5.76239 16.0925 5.98564 16.343C6.20889 16.5935 6.59292 16.6156 6.84341 16.3924L16.4487 7.83188L16.2688 10.8334C16.2487 11.1683 16.5039 11.4561 16.8389 11.4761C17.1739 11.4962 17.4616 11.2409 17.4817 10.906L17.7497 6.43541C17.7497 6.43516 17.7496 6.4349 17.7497 6.43462C17.7693 6.09901 17.512 5.81142 17.1774 5.79255Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_18_7215">
                    <rect
                      width="15.5529"
                      height="15.5529"
                      fill="white"
                      transform="translate(0.812012 10.5376) rotate(-41.7084)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </a>
        )}
      </div>
    </div>

    <div className="lg:hidden items-center justify-between lg:px-16 px-5 transition-all duration-300">
      {/* Name or Text */}

      {/* Profile Image */}
      <div className="w-[133px] h-[133px] rounded-full bg-gray-200 overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex items-center gap-4 mt-3">
        <span className="lg:text-[48px] text-[40px] leading-[40px]">
          {member.name}
        </span>
      </div>

      {/* Designation and LinkedIn */}
      <div className="lg:flex items-center lg:gap-4 mt-3">
        {
          <span className="text-[24px] leading-[24px]">
            {member.designation}
          </span>
        }
        {
          <a
            href={member.linkedin}
            className="text-white hover:underline text-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/iconImages/linkedinTeam.svg" alt="" className="mt-3" />
          </a>
        }
      </div>
    </div>
  </div>
);

const TeamList = () => {
  const [activeId, setActiveId] = useState(null);

  return (
    <div className="lg:pt-20 pt-16 pb-16   lg:pb-0 px-0 bg-[#EAEAF4] lg:rounded-b-[80px] rounded-b-[40px] text-[#1C1D58]">
      <h1 className="lg:text-[119px] text-[69px]  font-bold mb-10 lg:px-16 px-5 max-container pt-20 ">
        Team
      </h1>

      <div className="lg:space-y-0 space-y-[70px] ">
        {teamMembers.map((member) => (
          <TeamMember
            key={member.id}
            member={member}
            isActive={activeId === member.id}
            onMouseEnter={() => setActiveId(member.id)}
            onMouseLeave={() => setActiveId(null)}
          />
        ))}
      </div>
    </div>
  );
};

export default TeamList;
