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
        ? "bg-green-gradient text-white"
        : "bg-transparent hover:bg-green-gradient hover:text-white"
    }`}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <div className="flex items-center justify-between px-16 transition-all duration-300 h-[184px] max-container ">
      {/* Name or Text */}
      <div className="flex items-center gap-4">
        <span className="text-[48px]">
          {isActive ? member.text : member.name}
        </span>
      </div>

      {/* Profile Image */}
      <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
        <img
          src="/api/placeholder/48/48"
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
  </div>
);

const TeamList = () => {
  const [activeId, setActiveId] = useState(null);

  return (
    <div className="pt-20 px-0 bg-[#EAEAF4] rounded-b-[80px] text-[#1C1D58]">
      <h1 className="text-[119px] font-bold mb-10 px-16 max-container pt-20 ">Team</h1>

      <div className="space-y-0 ">
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
