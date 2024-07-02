import React from "react";
import HeroSection from "./heroSection";
import StepSection from "./stepSection";
import Step1Section from "./step1Section";
import Step2Section from "./step2Section";
import Step3Section from "./step3Section";
import Step4Section from "./step4Section";
import Step5Section from "./step5Section";
import Step6Section from "./step6Section";
import Separator from "../Separator";
import MovingDot from "./movingDots";
import Image from "next/image";

const SolutionComp = () => {
  return (
    <div>
      <HeroSection />
      <Separator />
      <StepSection />
      <Step1Section />
      <Step2Section />
      <Step3Section />
      <Step4Section />
      <Step5Section />
      <Step6Section />
      <Separator />
      {/* <MovingDot /> */}
    </div>
  );
};

export default SolutionComp;
