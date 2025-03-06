import ContactHero from "@/components/Contact/ContactHero";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import React from "react";

const page = () => {
  return (
    <div className="bg-[#002A00]">
    <Head>
        <title>Contact Us | BRANDiT</title>
        <meta
          name="description"
          content="Have a story to tell? Reach out to us and make your brand stand out."
        />
      </Head>
      <Navbar />
      <div className="">
        <ContactHero />
      </div>
      <Footer />
    </div>
  );
};

export default page;
