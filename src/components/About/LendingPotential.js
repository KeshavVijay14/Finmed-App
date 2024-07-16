import React from "react";
import Image from "next/image";
import { InView } from "react-intersection-observer";

const LendingPotential = () => {
  return (
    <InView triggerOnce threshold={0.5}>
      {({ inView, ref, entry }) => (
        <div className="bg-gradient-to-r from-[#401D60] via-[#271A73] to-[#1F1B5A]">
          <div
            className="flex justify-center  text-white py-16"
            ref={ref}
          >
            <div className="w-[80%] mt-28">
              <div className=" flex justify-center items-center">
                <Image
                  src={"/images/siteLogo.svg"}
                  alt="Logo"
                  width={160}
                  height={160}
                  className="mb-8 custom-img-bg"
                />
              </div>
              <div
                className={`flex flex-col justify-center items-center  ${
                  inView ? "animate-scale-opacity-z" : ""
                }`}
              >
                <h2 className="text-3xl font-bold mb-4 text-[#62D89F] text-center font-trebuchet max-w-xl">
                  Unlocking The Full Lending Potential For The Healthcare Sector
                </h2>
                <div cla>
                  <p className="max-w-md text-sm font-thin leading-relaxed font-roboto text-center  ">
                    Our comprehensive suite of products makes for a big change
                    at the corner of finance and healthcare. Allowing both
                    lenders and healthcare providers to leverage all their
                    assets.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="py-32 px-8 flex justify-center w-full">
            <div className="separator"></div>
          </div>
        </div>
      )}
    </InView>
  );
};

export default LendingPotential;
