"use client";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import PartnerForm from "../../components/partners/form";
import WhyPartnerComp from "../../components/partners/whyPartners";
import WhyPartnerDetailed from "../../components/partners/partnersDetail";
export default function Partners() {
  return (
    <div className="bg-primary text-white  w-full overflow-x-auto">
      <NavBar />
      <PartnerForm />
      <div className="bg-gradient-to-r from-[#401D60] via-[#271A73] to-[#1F1B5A] flex justify-center items-center py-40">
        <div className="separator"></div>
      </div>
      <WhyPartnerComp />
      <WhyPartnerDetailed />
      <div className="bg-gradient-to-r from-[#401D60] via-[#271A73] to-[#1F1B5A] flex justify-center items-center py-40">
        <div className="separator"></div>
      </div>
      <Footer />
    </div>
  );
}
