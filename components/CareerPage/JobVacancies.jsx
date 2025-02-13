import React, { useState } from "react";

const JobVacancies = () => {
  const [expandedJob, setExpandedJob] = useState(null);

  const jobs = [
    {
      id: 1,
      position: "Content Writer",
      location: "Lorem ipsum",
      type: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet consectetur. Quis semper erit in amet aliquam dapibus nisi cursus tempor.",
      salary: "$50k-$70k / Permanent",
      schedule: "Monday to Friday",
      jobTitle: "Lorem ipsum ipsum",
      roleOverview: [
        "Lorem ipsum dolor sit amet consectetur. Elit tristique quam commodo leo amet sed vel. Urna pulvinar nisl massa morbi nunc. Quis amet at ligula at. Auctor lobortis arcu sed pretium accumsan. Nibh sapien interdum bibendum gravida ut amet est at ultricies. Hac leo maecenas adipiscing suspendisse a interdum. A ut nibh cursus enim ornare sapien a. Gravida ligula metus egestas diam non ut. Leo dictum blandit velit gravida bibendum volutpat. Natoque ultrices velit quis tellus non sagittis feugiat. Ipsum sit in nisl diam amet mattis. Id amet odio in.",
      ],
      responsibilities: [
        "Lorem ipsum dolor sit amet consectetur. Elit tristique quam commodo .",
        "Lorem ipsum dolor sit amet consectetur. Libero congue faucibus non aliquam eu elementum. Risus phasellus pharetra ultrices bland.",
        "Lorem ipsum dolor sit amet consectetur. Et tincidunt ipsum elementum.",
        "Lorem ipsum dolor sit amet consectetur. Elit tristique quam commodo .",
        "Lorem ipsum dolor sit amet consectetur. Libero congue faucibus non aliquam eu elementum. Risus phasellus pharetra ultrices bland.",
      ],
      skills: [
        "Lorem ipsum dolor sit amet consectetur. Elit tristique quam commodo .",
        "Lorem ipsum dolor sit amet consectetur. Libero congue faucibus non aliquam eu elementum. Risus phasellus pharetra ultrices bland.",
        "Lorem ipsum dolor sit amet consectetur. Et tincidunt ipsum elementum.",
        "Lorem ipsum dolor sit amet consectetur. Elit tristique quam commodo .",
        "Lorem ipsum dolor sit amet consectetur. Libero congue faucibus non aliquam eu elementum. Risus phasellus pharetra ultrices bland.",
      ],
      about:
        "Lorem ipsum dolor sit amet consectetur. Rhoncus eget nulla pugna ferrum eu urna porttitor ultricies. Quis semper erit in amet aliquam dapibus nisi cursus tempor.",
    },
    {
      id: 2,
      position: "Graphic Designer",
      location: "Lorem ipsum",
      type: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet consectetur. Quis semper erit in amet aliquam dapibus nisi cursus tempor.",
      salary: "$50k-$70k / Permanent",
      schedule: "Monday to Friday",
      jobTitle: "Lorem ipsum ipsum",
      roleOverview: [
        "Lorem ipsum dolor sit amet consectetur. Elit tristique quam commodo leo amet sed vel. Urna pulvinar nisl massa morbi nunc. Quis amet at ligula at. Auctor lobortis arcu sed pretium accumsan. Nibh sapien interdum bibendum gravida ut amet est at ultricies. Hac leo maecenas adipiscing suspendisse a interdum. A ut nibh cursus enim ornare sapien a. Gravida ligula metus egestas diam non ut. Leo dictum blandit velit gravida bibendum volutpat. Natoque ultrices velit quis tellus non sagittis feugiat. Ipsum sit in nisl diam amet mattis. Id amet odio in.",
      ],
      responsibilities: [
        "Lorem ipsum dolor sit amet consectetur. Elit tristique quam commodo .",
        "Lorem ipsum dolor sit amet consectetur. Libero congue faucibus non aliquam eu elementum. Risus phasellus pharetra ultrices bland.",
        "Lorem ipsum dolor sit amet consectetur. Et tincidunt ipsum elementum.",
        "Lorem ipsum dolor sit amet consectetur. Elit tristique quam commodo .",
        "Lorem ipsum dolor sit amet consectetur. Libero congue faucibus non aliquam eu elementum. Risus phasellus pharetra ultrices bland.",
      ],
      skills: [
        "Lorem ipsum dolor sit amet consectetur. Elit tristique quam commodo .",
        "Lorem ipsum dolor sit amet consectetur. Libero congue faucibus non aliquam eu elementum. Risus phasellus pharetra ultrices bland.",
        "Lorem ipsum dolor sit amet consectetur. Et tincidunt ipsum elementum.",
        "Lorem ipsum dolor sit amet consectetur. Elit tristique quam commodo .",
        "Lorem ipsum dolor sit amet consectetur. Libero congue faucibus non aliquam eu elementum. Risus phasellus pharetra ultrices bland.",
      ],
      about:
        "Lorem ipsum dolor sit amet consectetur. Rhoncus eget nulla pugna ferrum eu urna porttitor ultricies. Quis semper erit in amet aliquam dapibus nisi cursus tempor.",
    },
    {
      id: 3,
      position: "UI/UX Designer",
      location: "Lorem ipsum",
      type: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet consectetur. Quis semper erit in amet aliquam dapibus nisi cursus tempor.",
      salary: "$50k-$70k / Permanent",
      schedule: "Monday to Friday",
      jobTitle: "Lorem ipsum ipsum",
      roleOverview: [
        "Lorem ipsum dolor sit amet consectetur. Elit tristique quam commodo leo amet sed vel. Urna pulvinar nisl massa morbi nunc. Quis amet at ligula at. Auctor lobortis arcu sed pretium accumsan. Nibh sapien interdum bibendum gravida ut amet est at ultricies. Hac leo maecenas adipiscing suspendisse a interdum. A ut nibh cursus enim ornare sapien a. Gravida ligula metus egestas diam non ut. Leo dictum blandit velit gravida bibendum volutpat. Natoque ultrices velit quis tellus non sagittis feugiat. Ipsum sit in nisl diam amet mattis. Id amet odio in.",
      ],
      responsibilities: [
        "Lorem ipsum dolor sit amet consectetur. Elit tristique quam commodo .",
        "Lorem ipsum dolor sit amet consectetur. Libero congue faucibus non aliquam eu elementum. Risus phasellus pharetra ultrices bland.",
        "Lorem ipsum dolor sit amet consectetur. Et tincidunt ipsum elementum.",
        "Lorem ipsum dolor sit amet consectetur. Elit tristique quam commodo .",
        "Lorem ipsum dolor sit amet consectetur. Libero congue faucibus non aliquam eu elementum. Risus phasellus pharetra ultrices bland.",
      ],
      skills: [
        "Lorem ipsum dolor sit amet consectetur. Elit tristique quam commodo .",
        "Lorem ipsum dolor sit amet consectetur. Libero congue faucibus non aliquam eu elementum. Risus phasellus pharetra ultrices bland.",
        "Lorem ipsum dolor sit amet consectetur. Et tincidunt ipsum elementum.",
        "Lorem ipsum dolor sit amet consectetur. Elit tristique quam commodo .",
        "Lorem ipsum dolor sit amet consectetur. Libero congue faucibus non aliquam eu elementum. Risus phasellus pharetra ultrices bland.",
      ],
      about:
        "Lorem ipsum dolor sit amet consectetur. Rhoncus eget nulla pugna ferrum eu urna porttitor ultricies. Quis semper erit in amet aliquam dapibus nisi cursus tempor.",
    },
    // Add more jobs with the same structure
  ];

  const handleToggleJob = (jobId) => {
    setExpandedJob(expandedJob === jobId ? null : jobId);
  };

  return (
    <div className="">
      <div className="">
        <h2 className="text-h2 text-[#1C1D58] font-bold mb-12 max-container px-16">
          Open Vacancies
        </h2>

        <div className=" overflow-hidden text-[28px] text-[#1C1D58] ">
          {/* Header */}
          <div className="grid grid-cols-[400px_auto_auto_auto] gap-4 py-8 font-medium max-container px-16">
            <div>Position</div>
            <div>Location</div>
            <div>Type</div>
            <div></div>
          </div>

          {/* Job Listings */}
          {jobs.map((job, index) => (
            <React.Fragment key={job.id}>
              <div
                className={`  items-center border-t font-regular  border-[#B3B3B3B2] border-opacity-50 
                ${
                  expandedJob === job.id
                    ? "bg-[#005E00] text-white"
                    : "bg-transparent hover:bg-green-gradient hover:text-white"
                }`}
              >
                <div className="grid grid-cols-[400px_auto_auto_auto]  gap-4 py-8 max-container px-16">
                  <div className="">{job.position}</div>
                  <div>{job.location}</div>
                  <div>{job.type}</div>
                  <div className="text-right">
                    <button
                      onClick={() => handleToggleJob(job.id)}
                      className="w-8 h-8 rounded-full border border-current inline-flex items-center justify-center"
                    >
                      {expandedJob === job.id ? "-" : "+"}
                    </button>
                  </div>
                </div>
              </div>

              {/* Expanded Job Details */}
              {expandedJob === job.id && (
                <div className="font-kanit bg-[#005E00] text-white py-10 ">
                  <div className="flex flex-row gap-8 max-container relative px-16 ">
                    <div className="w-1/2 sticky top-[10vh] ">
                      <h3 className="text-[23px] mb-4">Description</h3>
                      <p className="mb-6 text-[18px] leading-[21px]">
                        {job.description}
                      </p>

                      <h4 className="font-bold tracking-wide text-[23px] mb-2">
                        Job Title:{" "}
                        <span className="font-normal">{job.jobTitle}</span>
                      </h4>
                      <p className="font-bold tracking-wide text-[23px] mb-2">
                        Salary:{" "}
                        <span className="font-normal">{job.salary}</span>
                      </p>
                      <p className="font-bold tracking-wide text-[23px] mb-2">
                        Schedule:{" "}
                        <span className="font-normal">{job.schedule}</span>
                      </p>

                      <div className="cta mt-7">
                        <button className="relative w-auto px-5 h-[51px] bg-gradient-to-r from-[#45D400] to-[#45D400] text-black text-[16px] rounded-[40px] overflow-hidden group">
                          <span className="absolute inset-0 bg-gradient-to-r from-[#45D400] via-[#36BA00] to-[#45D400] transition-transform scale-0 group-hover:scale-100 group-hover:rotate-180 duration-500 ease-in-out rounded-[40px]"></span>
                          <span className="relative z-10 block text-center group-hover:text-white transition-transform duration-300 ease-in-out group-hover:scale-110">
                            Apply Now
                          </span>
                          <span className="absolute -inset-1 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-[40px]"></span>
                        </button>
                      </div>
                    </div>

                    <div className="w-1/2 ">
                      <div>
                        <p className="text-[18px]">About Brandit</p>
                        <p className="text-[18px] mt-5 leading-[24px] font-normal opacity-75">
                          Lorem ipsum dolor sit amet consectetur. Mauris non ac
                          nulla augue. In non feugiat leo lorem tincidunt
                          ridiculus nulla aenean. Posuere et consectetur vitae
                          non nibh ac. Libero enim quis diam est nunc id sem.
                          Ullamcorper morbi non aliquam id sodales eu congue.
                          Tortor nulla lectus lacus tortor sed integer
                          ullamcorper orci netus. In vehicula sagittis amet
                          elementum sem quam dolor.
                        </p>
                      </div>

                      <h3 className="text-[18px] mb-4 mt-10">
                        Overview of Role
                      </h3>
                      {job.roleOverview.map((req, i) => (
                        <p
                          key={i}
                          className="mb-2 text-[18px] mt-5 leading-[24px] font-normal opacity-75"
                        >
                          {req}
                        </p>
                      ))}

                      <h3 className="text-[18px] mb-4 mt-10">
                        Main Responsibilities
                      </h3>
                      <ul className="list-disc pl-4 mb-6">
                        {job.responsibilities.map((skill, i) => (
                          <li
                            key={i}
                            className="text-[18px] mt-2 leading-[24px] font-normal opacity-75"
                          >
                            {skill}
                          </li>
                        ))}
                      </ul>

                      <h3 className="text-[18px] mb-4 mt-10">
                        Skills & Experience
                      </h3>
                      <ul className="list-disc pl-4 mb-6">
                        {job.skills.map((skill, i) => (
                          <li
                            key={i}
                            className="text-[18px] mt-2 leading-[24px] font-normal opacity-75"
                          >
                            {skill}
                          </li>
                        ))}
                      </ul>

                      <h3 className="text-[18px] mb-4 mt-10">
                        What you'll get in Return?
                      </h3>
                      <p className="mb-2 text-[18px] mt-5 leading-[24px] font-normal opacity-75">
                        {job.about}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobVacancies;
