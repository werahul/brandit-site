import React, { useState } from "react";

const JobVacancies = () => {
  const [expandedJob, setExpandedJob] = useState(null);

  const jobs = [
    {
      id: 1,
      position: "Graphic Designer",
      location: "Bengaluru/ Remote",
      type: "Full Time",
      roleOverview: [
        "We are looking for a creative and skilled Graphic Designer to join our team. In this role, you will have the opportunity to work on a variety of design projects, helping create visually appealing content across different platforms for a range of clients.",
      ],
      responsibilities: [
        " Design engaging graphics for digital and print materials, including social media, websites, brochures, and more.",
        "Work closely with cross-functional teams to develop design concepts and solutions that meet client needs.",
        "Ensure brand consistency across all visual content and communication materials.",
        "Revise and finalize designs based on feedback from clients and team members.",
        "Create visual assets for marketing campaigns, client presentations, and other related projects.",
        "Stay updated with the latest trends in design and apply them to ongoing projects.",
        "Manage multiple design tasks simultaneously, ensuring timely delivery of high-quality work.",
        "Participate in brainstorming sessions to develop fresh and innovative design ideas.",
      ],
      qualifiction: [
        "Proven experience in graphic design (portfolio required).",
        "Proficiency in Adobe Creative Suite (Illustrator, Photoshop, InDesign) or similar design tools.",
        "Strong attention to detail and an eye for design aesthetics.",
        "Solid understanding of design principles such as typography, color theory, and layout.",
        "Ability to think creatively and deliver unique design solutions.",
        "Good communication skills and the ability to collaborate effectively in a remote work environment.",
        "A degree or equivalent qualification in Graphic Design or a related field is preferred.",
      ],

      benifits: [
        "Competitive salary based on experience.",
        "Career growth potential based on performance and contribution.",
        "A collaborative and creative work environment.",
        "Opportunity to work on diverse and interesting design projects.",
      ],
      about:
        "BrandiT Communications is an equal opportunity employer and encourages applicants from all backgrounds to apply.",
      applyLink: "",
    },
    {
      id: 2,
      position: "Social Media Manager",
      location: "Bengaluru/ Remote",
      type: "Full Time",
      roleOverview: [
        "We are looking for a creative and driven Social Media Manager to join our team. In this role, you will be responsible for managing and growing our social media presence across various platforms, creating engaging content, and developing strategies that align with business goals.",
      ],
      responsibilities: [
        "Develop and execute social media strategies across multiple platforms to drive engagement and brand awareness.",
        "Create and schedule engaging content, including posts, stories, and videos, that align with brand messaging.",
        "Monitor and analyze social media trends, audience behavior, and performance metrics to optimize content strategies.",
        "Engage with followers and respond to comments, messages, and mentions in a timely and professional manner.",
        "Collaborate with internal teams to ensure cohesive and impactful messaging across digital channels.",
        "Track and report on social media performance, providing insights and recommendations for improvement.",
        "Stay updated on emerging social media trends, tools, and best practices to keep the brand’s online presence fresh and relevant.",
        "Manage social media calendars and ensure timely execution of posts and campaigns.",
        "Coordinate with designers and content creators to develop visual and written content for social media platforms.",
      ],
      qualifiction: [
        "Proven experience in social media management (portfolio or examples of work required).",
        "Strong knowledge of social media platforms (Facebook, Instagram, Twitter, LinkedIn, etc.) and analytics tools.",
        "Excellent written and verbal communication skills.",
        "Creative thinker with the ability to develop original and engaging content.",
        "Strong organizational skills and the ability to manage multiple projects simultaneously.",
        "Ability to analyze performance data and adjust strategies accordingly.",
        "A degree in Marketing, Communications, or a related field (preferred).",
      ],

      benifits: [
        "Competitive salary based on experience.",
        "Career growth potential based on performance and contribution.",
        "A collaborative and creative work environment.",
        "Opportunity to work on diverse and interesting design projects.",
      ],
      about:
        "BrandiT Communications is an equal opportunity employer and encourages applicants from all backgrounds to apply.",
      applyLink: "/apply-social-media",
    },
    {
      id: 3,
      position: "Digital Media Expert ",
      location: "Bengaluru/ Remote",
      type: "Full Time",
      roleOverview: [
        "We are seeking a skilled Digital Media Expert to join our team. In this role, you’ll be responsible for crafting innovative digital strategies, managing campaigns, and boosting online visibility. If you are passionate about digital marketing trends and thrive in a fast-paced, creative environment, we want you!",
      ],
      responsibilities: [
        "Develop and implement cutting-edge digital media strategies to increase brand visibility.",
        "Manage paid and organic campaigns across various platforms (Google Ads, social media, etc.)..",
        "Analyze data and optimize campaigns to improve performance and ROI.",
        "Collaborate with cross-functional teams to ensure cohesive digital strategies across channels.",
        "Stay updated with the latest digital marketing trends, tools, and technologies.",
        "Monitor and report on digital media performance and adjust strategies accordingly.",
        "Drive website traffic, conversions, and engagement through innovative campaigns.",
      ],
      qualifiction: [
        "Proven experience in digital media and campaign management.",
        "Strong knowledge of SEO, SEM, PPC, and social media platforms.",
        "Excellent analytical skills and the ability to optimize campaigns based on data insights.",
        "Creative thinker with an eye for detail and a passion for digital marketing.",
        "A degree in Digital Marketing, Communications, or a related field (preferred).",
      ],

      benifits: [
        "Competitive salary based on experience.",
        "Career growth potential based on performance and contribution.",
        "A collaborative and creative work environment.",
        "Opportunity to work on diverse and interesting design projects.",
      ],
      about:
        "BrandiT Communications is an equal opportunity employer and encourages applicants from all backgrounds to apply.",
      applyLink: "/apply-Digital-Media-Expert",
    },
    // Add more jobs with the same structure
  ];

  const handleToggleJob = (jobId) => {
    setExpandedJob(expandedJob === jobId ? null : jobId);
  };

  return (
    <div className="">
      <div className="">
        <h2 className="lg:text-h2 text-[44px] leading-[44px] lg:leading-[55px] text-[#1C1D58] font-bold mb-12 max-container lg:px-16 px-5">
          Current Openings
        </h2>

        <div className=" text-[28px] text-[#1C1D58]  ">
          {/* Header */}
          <div className="lg:grid hidden grid-cols-[400px_auto_auto_auto] gap-4 py-8 font-medium max-container lg:px-16 px-5 ">
            <div>Position</div>
            <div>Location</div>
            <div>Type</div>
            <div></div>
          </div>

          {/* Job Listings */}
          {jobs.map((job, index) => (
            <div key={job.id}>
              <div
                className={`  items-center border-t font-regular  border-[#B3B3B3B2] border-opacity-50 
                ${
                  expandedJob === job.id
                    ? "bg-[#005E00] text-white"
                    : "bg-transparent hover:bg-green-gradient hover:text-white"
                }`}
              >
                <div className="grid lg:grid-cols-[400px_auto_auto_auto] grid-cols-1  lg:gap-4 gap-2 py-8 max-container lg:px-16 px-5">
                  <div className="flex items-center justify-between">
                    <div className="lg:text-[28px] lg:leading-[33px]">
                      {job.position}
                    </div>
                    <div className="text-right lg:hidden">
                      <button
                        onClick={() => handleToggleJob(job.id)}
                        className="w-8 h-8 rounded-full border border-current flex items-center justify-center"
                      >
                        {expandedJob === job.id ? "-" : "+"}
                      </button>
                    </div>
                  </div>

                  <div className="lg:text-[28px] lg:leading-[33px] text-[18px] leading-[21px]">
                    {job.location}
                  </div>
                  <div className="lg:text-[28px] lg:leading-[33px] text-[18px] leading-[21px]">
                    {job.type}
                  </div>
                  <div className="text-right lg:block hidden">
                    <button
                      onClick={() => handleToggleJob(job.id)}
                      className="w-10 h-10 rounded-full border border-current inline-flex items-center justify-center"
                    >
                      {expandedJob === job.id ? "-" : "+"}
                    </button>
                  </div>
                </div>
              </div>

              {/* Expanded Job Details */}
              {expandedJob === job.id && (
                <div className="font-kanit bg-[#005E00] border-t border-[#B3B3B380]  text-white pt-5 pb-20 ">
                  <div className="h-auto gap-8   relative lg:px-16 px-5 max-container ">
                    <div className="w-[100%] ">
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
                            className="lg:text-[18px] text-[16px] mt-2 leading-[24px] font-normal opacity-75"
                          >
                            {skill}
                          </li>
                        ))}
                      </ul>

                      <h3 className="text-[18px] mb-4 mt-10">Qualifications</h3>
                      <ul className="list-disc pl-4 mb-6">
                        {job.qualifiction.map((qualifiction, i) => (
                          <li
                            key={i}
                            className="lg:text-[18px] text-[16px] mt-2 leading-[24px] font-normal opacity-75"
                          >
                            {qualifiction}
                          </li>
                        ))}
                      </ul>

                      <h3 className="text-[18px] mb-4 mt-10">Benefits</h3>
                      <ul className="list-disc pl-4 mb-6">
                        {job.benifits.map((benifits, i) => (
                          <li
                            key={i}
                            className="lg:text-[18px] text-[16px] mt-2 leading-[24px] font-normal opacity-75"
                          >
                            {benifits}
                          </li>
                        ))}
                      </ul>

                      <p className="mb-2 text-[18px] leading-[24px] font-normal opacity-75 mt-10">
                        {job.about}
                      </p>
                    </div>

                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSdfIG5VgWQY4v9K5yMqBi7_q35y9J5JDlKmb7JStRfaOEMUwg/viewform"
                      target="_blank"
                    >
                      <div className="cta lg:mt-7 mt-10">
                        <button className="relative lg:w-auto w-full px-5 h-[51px] bg-[#C5F2B0] text-black text-[16px] rounded-[40px] overflow-hidden group">
                          <span className="absolute inset-0 bg-gradient-to-r from-[#7CAF64] via-[#5E8F45] to-[#7CAF64] transition-transform scale-0 group-hover:scale-100 group-hover:rotate-180 duration-500 ease-in-out rounded-[40px]"></span>
                          <span className="relative z-10 block text-center group-hover:text-white transition-transform duration-300 ease-in-out group-hover:scale-110">
                            Apply Now
                          </span>
                          <span className="absolute -inset-1 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-[40px]"></span>
                        </button>
                      </div>
                    </a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobVacancies;
