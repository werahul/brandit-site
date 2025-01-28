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
            className="block text-[20px] text-black mb-2"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            className="w-full border border-[#D7D7D7] placeholder-gray-400 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Enter your full name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-[20px] text-black mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full border border-[#D7D7D7] placeholder-gray-400 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Enter your email"
          />
        </div>

        {/* Service as Radio Toggle */}
        <div>
          <p className="block text-[20px] text-black mb-2">Service</p>
          <div className="flex space-x-4">
            {["Option 1", "Option 2", "Option 3"].map((service, index) => (
              <label
                key={index}
                className={`flex items-center gap-x-2 px-5 py-3 border rounded-[40px] text-[16px] cursor-pointer ${
                  selectedService === service
                    ? "bg-green-500 text-white"
                    : "bg-white border-[#D7D7D7] text-black  opacity-70"
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

        {/* Budget as Radio Toggle */}
        <div>
          <p className="block text-[20px] text-black mb-2">Budget</p>
          <div className="flex space-x-4">
            {["Option 1", "Option 2", "Option 3"].map((budget, index) => (
              <label
                key={index}
                className={`flex items-center gap-x-2 px-5 py-3 border rounded-[40px] text-[16px] cursor-pointer ${
                  selectedBudget === budget
                    ? "bg-green-500 text-white"
                    : "bg-white border-[#D7D7D7] text-black opacity-70"
                }`}
              >
                <input
                  type="radio"
                  name="budget"
                  value={budget}
                  className="hidden"
                  onChange={() => setSelectedBudget(budget)}
                />
                <span>{budget}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-[20px] text-black mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            className="w-full border border-[#D7D7D7] placeholder-gray-400 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-green-500 resize-none h-[80px]"
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
