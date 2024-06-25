import React from "react";
import Image from "next/image";

const LendingPotential = () => {
  return (
    <div className="flex justify-center bg-gradient-to-r from-[#401D60] via-[#271A73] to-[#1F1B5A] text-white py-16   ">
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
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-3xl font-bold mb-4 text-[#62D89F] text-center font-trebuchet max-w-xl">
            Unlocking the full lending potential for the healthcare sector
          </h2>
          <div cla>
            <p className="max-w-md text-sm font-thin leading-relaxed font-roboto text-start ml-36">
              Our comprehensive suite of products makes for a big change at the
              corner of finance and healthcare. Allowing both lenders and
              healthcare providers to leverage all their assets.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LendingPotential;
