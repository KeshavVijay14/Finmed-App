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
    <div className="bg-primary text-white">
      <NavBar />
      <LendingPotential />
      <OurStory />
      <Team/>
      <Innovation />
      <Foundation/>
      <Footer />
    </div>
  );
}
