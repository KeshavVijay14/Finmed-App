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
      <CardSlider />
      <MetricsSection />
      <Footer />
    </div>
  );
}
