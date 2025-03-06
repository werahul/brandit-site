import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [selectedService, setSelectedService] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      fullName: formData.fullName,
      email: formData.email,
      service: selectedService,
      message: formData.message,
    };

    emailjs
      .send(
        "service_iimx3gq", // Replace with your EmailJS Service ID
        "template_2rlqt6p", // Replace with your EmailJS Template ID
        templateParams,
        "yhqtHN6fl81XjrQrC" // Replace with your EmailJS Public Key
      )
      .then(
        (response) => {
          console.log("Email sent successfully!", response);
          alert("Message sent successfully!");
          setFormData({ fullName: "", email: "", message: "" });
          setSelectedService("");
        },
        (error) => {
          console.error("Failed to send email", error);
          alert("Failed to send message, please try again.");
        }
      );
  };
  return (
    <div className="bg-white lg:p-10 p-6 rounded-[20px] w-[100%]">
      <form onSubmit={sendEmail} className="space-y-6">
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
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full border border-[#1C1D58] placeholder-gray-400 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Enter your full name"
            required
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
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-[#1C1D58] placeholder-gray-400 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Enter your email"
            required
          />
        </div>

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
                  required
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
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-[#1C1D58] placeholder-gray-400 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-green-500 resize-none h-[80px]"
            placeholder="Enter your message"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="relative w-[130px] h-[56px] bg-gradient-to-r border-[1.5px] border-[#45D400] text-[#45D400] text-[16px] rounded-[40px] overflow-hidden group"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-[#45D400] via-[#36BA00] to-[#005E00] transition-transform scale-0 group-hover:scale-100 group-hover:rotate-180 duration-500 ease-in-out rounded-[40px]"></span>
          <span className="relative z-10 block text-center group-hover:text-white transition-transform duration-300 ease-in-out group-hover:scale-110">
            Submit
          </span>
          <span className="absolute -inset-1 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-[40px]"></span>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
