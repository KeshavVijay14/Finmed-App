"use client";
import NavBar from "../../components/NavBar";
import HeroSection from "../../components/HeroSection";
import Partners from "../../components/Partners";
import Footer from "../../components/Footer";
import InfoSection from "../../components/InfoSection";
import MetricsSection from "../../components/Metrics";
import CardSlider from "../../components/CardSlider";

export default function Home() {
  return (
    <div className=" text-white  w-full overflow-x-auto">
      <NavBar />
      <HeroSection />
      <Partners />
        <InfoSection />
 
      <div class=" relative bg-gradient-to-b from-[#091949] via-[#2c2178] to-[#091949] ">
        <div class="absolute  inset-0  bg-gradient-to-t from-[#091949] via-[#2c2178] to-[#091949] filter w-full h-20 blur-[1000px]"></div>
        <CardSlider />
      </div>

      <MetricsSection />

      <div className="py-20 px-8 flex justify-center w-full bg-gradient-to-r from-[#401D60] via-[#271A73] to-[#1F1B5A]">
        <div className="separator"></div>
      </div>
      <Footer />
    </div>
  );
}
