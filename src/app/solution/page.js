"use client";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import SolutionComp from "../../components/Solution";

export default function Solution() {
  return (
    <div className="bg-primary text-white    overflow-x-auto">
      <NavBar />
      <SolutionComp />
      <Footer />
    </div>
  );
}
