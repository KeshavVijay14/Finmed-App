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
    <div className=" text-white">
      <NavBar />
      <HeroSection />
      <Partners />
      <InfoSection />
      <CardSlider />
      <MetricsSection />
      <div className="bg-gradient-to-r from-[#401D60] via-[#271A73] to-[#1F1B5A]  py-20 px-8 flex justify-center">
        <div className="separator"></div>
      </div>
      <Footer />
    </div>
  );
}
