import ContactHero from "@/components/Contact/ContactHero";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const page = () => {
  return (
    <div className="bg-[#002A00]">
      <Navbar />
      <div className="">
        <ContactHero />
      </div>
      <Footer />
    </div>
  );
};

export default page;
