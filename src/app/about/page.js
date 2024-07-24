"use client";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import OurStory from "../../components/About/Story";
import LendingPotential from "../../components/About/LendingPotential";
import Innovation from "../../components/About/Innovation";
import Team from "../../components/About/Teams";
import Foundation from "../../components/About/Foundation";
export default function Home() {
  return (
    <div className="[background:linear-gradient(107.56deg,_#3c174b,_#3c174b_2%,_#492985_16%,_#251971_42.5%,_#2f257b_60.5%,_#00071c)] text-white  w-full overflow-x-auto ">
      <NavBar />
      <LendingPotential />
      <OurStory />
      <Team />
      <Innovation />
      <Foundation />
      <Footer />
    </div>
  );
}
