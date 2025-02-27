"use client";

import React, { useState } from "react";

const teamMembers = [
  {
    id: 1,
    name: "Name 1",
    text: "lorem ipsum lorem ipsum lorem ipsum",
    designation: "designation",
    linkedin: "#",
  },
  {
    id: 2,
    name: "Name 2",
    text: "lorem ipsum lorem ipsum lorem ipsum",
    designation: "designation",
    linkedin: "#",
  },
  {
    id: 3,
    name: "Name 3",
    text: "lorem ipsum lorem ipsum lorem ipsum",
    designation: "designation",
    linkedin: "#",
  },
  {
    id: 4,
    name: "Name 4",
    text: "lorem ipsum lorem ipsum lorem ipsum",
    designation: "designation",
    linkedin: "#",
  },
  {
    id: 5,
    name: "Name 5",
    text: "lorem ipsum lorem ipsum lorem ipsum",
    designation: "designation",
    linkedin: "#",
  },
  {
    id: 6,
    name: "Name 6",
    text: "lorem ipsum lorem ipsum lorem ipsum",
    designation: "designation",
    linkedin: "#",
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
      <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
        <img
          src="/images/teamProfileDummy.png"
          alt={member.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Designation and LinkedIn */}
      <div className="flex items-center gap-4">
        {!isActive && <span className="text-[24px]">{member.designation}</span>}
        {isActive && (
          <a
            href={member.linkedin}
            className="text-white hover:underline text-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn →
          </a>
        )}
      </div>
    </div>

    <div className="lg:hidden items-center justify-between lg:px-16 px-5 transition-all duration-300">
      {/* Name or Text */}

      {/* Profile Image */}
      <div className="w-[133px] h-[133px] rounded-full bg-gray-200 overflow-hidden">
        <img
          src="/images/teamProfileDummy.png"
          alt={member.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex items-center gap-4">
        <span className="lg:text-[48px] text-[44px]">{member.name}</span>
      </div>

      {/* Designation and LinkedIn */}
      <div className="lg:flex items-center lg:gap-4">
        { <span className="text-[24px]">{member.designation}</span>}
        {(
          <a
            href={member.linkedin}
            className="text-white hover:underline text-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
           <img src="/iconImages/linkedinTeam.svg" alt="" className="mt-3" />
          </a>
        )}
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
