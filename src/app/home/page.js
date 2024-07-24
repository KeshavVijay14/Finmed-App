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
    <div className=" text-white  w-full overflow-x-auto  [background:linear-gradient(107.56deg,_#3c174b,_#3c174b_2%,_#492985_16%,_#251971_42.5%,_#2f257b_60.5%,_#00071c)] ">
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
