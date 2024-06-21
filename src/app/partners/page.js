"use client";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import PartnerForm from "../../components/partners/form";
import WhyPartnerComp from "../../components/partners/whyPartners";
import WhyPartnerDetailed from "../../components/partners/partnersDetail";
export default function Partners() {
  return (
    <div className="bg-primary text-white">
      <NavBar />
      <PartnerForm />
      <WhyPartnerComp />
      <WhyPartnerDetailed />
      <Footer />
    </div>
  );
}
