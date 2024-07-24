"use client";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import PartnerForm from "../../components/partners/form";
import WhyPartnerComp from "../../components/partners/whyPartners";
import WhyPartnerDetailed from "../../components/partners/partnersDetail";
export default function Partners() {
  return (
    <div className="[background:linear-gradient(107.56deg,_#3c174b,_#3c174b_2%,_#492985_16%,_#251971_42.5%,_#2f257b_60.5%,_#00071c)] text-white  w-full overflow-x-auto">
      <NavBar />
      <PartnerForm />
      <WhyPartnerComp />
      <WhyPartnerDetailed />
      <Footer />
    </div>
  );
}
