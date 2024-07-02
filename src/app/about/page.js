"use client";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import OurStory from "../../components/About/Story";
import LendingPotential from "../../components/About/LendingPotential";
import Innovation from "../../components/About/Innovation";
import Team from "../../components/About/Teams";
import Foundation from "../../components/About/Foundation";
import Separator from "../../components/Separator";
export default function Home() {
  return (
    <div className="bg-primary text-white  w-full overflow-x-auto ">
      <NavBar />
      <LendingPotential />
      <div className="bg-gradient-to-r from-[#401D60] via-[#271A73] to-[#1F1B5A] flex justify-center items-center py-40">
      <div className="separator"></div>
    </div>
      <OurStory />
      <Team/>
      <Innovation />
      <Foundation/>
      <div className="bg-gradient-to-r from-[#401D60] via-[#271A73] to-[#1F1B5A] flex justify-center items-center pb-40 pt-20">
      <div className="separator"></div>
    </div>
      <Footer />
    </div>
  );
}
