"use client";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import SolutionComp from "../../components/Solution";

export default function Solution() {
  return (
    <div className="[background:linear-gradient(107.56deg,_#3c174b,_#3c174b_2%,_#492985_16%,_#251971_42.5%,_#2f257b_60.5%,_#00071c)] text-white    overflow-x-auto">
      <NavBar />
      <SolutionComp />
      <Footer />
    </div>
  );
}
