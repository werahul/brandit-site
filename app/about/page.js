import AboutHero from "@/components/AboutPage/AboutHero";
import AwardsGrid from "@/components/AboutPage/AwardsGrid";
import GridSection from "@/components/AboutPage/GridSection";
import TeamList from "@/components/AboutPage/TeamList";
import Timeline from "@/components/AboutPage/Timeline";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import React from "react";

const page = () => {
  return (
    <div className="bg-[#002A00]">
      <Head>
        <title>About Us | BRANDiT</title>
        <meta
          name="description"
          content="We amplify your story, giving it a voice that resonates."
        />
      </Head>
      <Navbar />
      <AboutHero />
      <Timeline />
      <div className="z-50 relative">
        <GridSection />
      </div>
      <div className="z-40 -mt-20 relative">
        <TeamList />
      </div>
      <div className="z-20 -mt-20 relative">
        <AwardsGrid />
      </div>
      <Footer />
    </div>
  );
};

export default page;
