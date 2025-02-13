import React, { useState } from "react";

const ContactForm = () => {
  const [selectedService, setSelectedService] = useState("");
  const [selectedBudget, setSelectedBudget] = useState("");

  return (
    <div className="bg-white p-10 rounded-[20px] w-[100%]">
      <form className="space-y-6">
        <div>
          <label
            htmlFor="fullName"
            className="block text-[20px] text-[#1C1D58] mb-2"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            className="w-full border border-[#1C1D58] placeholder-gray-400 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Enter your full name"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-[20px] text-[#1C1D58] mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full border border-[#1C1D58] placeholder-gray-400 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Enter your email"
          />
        </div>

        {/* Service as Radio Toggle */}
        <div>
          <p className="block text-[20px] text-[#1C1D58] mb-2">Service</p>
          <div className="flex flex-wrap gap-4">
            {[
              "Brand Storytelling",
              "Public Relations",
              "Influencer Marketing",
              "Guestlist Curation",
              "Brand Strategy Consulting",
            ].map((service, index) => (
              <label
                key={index}
                className={`flex items-center gap-x-2 hover:opacity-95 px-5 py-3 border rounded-[40px] text-[16px] cursor-pointer ${
                  selectedService === service
                    ? "text-[#45D400] border border-[#45D400]"
                    : "bg-white border-[#1C1D58] text-[#1C1D58]  opacity-70"
                }`}
              >
                <input
                  type="radio"
                  name="service"
                  value={service}
                  className="hidden"
                  onChange={() => setSelectedService(service)}
                />
                <span>{service}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-[20px] text-[#1C1D58] mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            className="w-full border border-[#1C1D58] placeholder-gray-400 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-green-500 resize-none h-[80px]"
            placeholder="Enter your message"
          ></textarea>
        </div>

        <button
          type="submit"
          className="animated-button w-[157px] h-[50px] bg-white border-[1.5px] border-[#45D400] text-[#45D400] font-medium rounded-[40px] py-3 px-4 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
