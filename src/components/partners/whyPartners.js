/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

export default function WhyPartner() {
  return (
    <div className="bg-gradient-to-b flex justify-center from-[#2B2465] via-[#081949] to-[#121D52] text-white  ">
      <div className="w-[80%] h-[100vh] flex flex-col justify-center items-center text-center">
        <h2 className="text-4xl font-bold text-[#62D89F]  font-trebuchet text-center mb-12">
          Why partner with Finmed?
        </h2>
        <div className="flex justify-end items-center">
          <div className="flex">
            <div className="flex">
              <Image
                src="/images/partner1.svg"
                alt="Partner Image 1"
                width={250}
                height={250}
                className="rounded-lg shadow-lg hover-scale"
              />
            </div>
            <div className="flex justify-center">
              <ul className="text-white list-disc list-inside ">
                <li className="w-[60%] mt-4  font-trebuchet text-xl font-normal">
                  Lending and underwriting solutions your clients will love.
                </li>
                <li className="w-[60%] mt-4   font-trebuchet text-xl font-normal">
                  Elevate your clients' experiences with top-line financial
                  products.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-6">
          <div className="flex ">
            <div className="flex justify-center">
              <ul className="text-white list-disc list-inside ">
                <li className="w-[60%] mt-4  font-trebuchet text-xl font-normal">
                  Creative strategies to ensure your clients secure the
                  financing they are looking for.
                </li>
                <li className="w-[60%] mt-4  font-trebuchet text-xl font-normal">
                  Seamless onboarding process
                </li>
              </ul>
            </div>
            <div className="flex">
              <Image
                src="/images/partner2.svg"
                alt="Partner Image 2"
                width={250}
                height={250}
                className="rounded-lg shadow-lg hover-scale"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
