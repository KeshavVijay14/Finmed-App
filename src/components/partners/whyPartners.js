/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { InView } from "react-intersection-observer";

export default function WhyPartner() {
  return (
    <InView triggerOnce threshold={0.5}>
      {({ inView, ref, entry }) => (
        <div className="bg-gradient-to-b flex justify-center from-[#2B2465] via-[#081949] to-[#121D52] text-white py-40 ref={ref}  ">
          <div className="w-[80%] h-[100vh] flex flex-col justify-center items-center text-center">
            <h2 className="text-4xl font-bold text-[#62D89F]  font-trebuchet text-center mb-12">
              Why partner with Finmed?
            </h2>
            <div className="flex justify-end items-center py-10">
              <div className="flex">
                <div className="flex">
                  <Image
                    src="/images/partner1.svg"
                    alt="Partner Image 1"
                    width={400}
                    height={400}
                    className="rounded-lg shadow-lg hover-scale"
                  />
                </div>
                <div className="flex items-center  ">
                  <ul className="text-white list-disc list-inside flex flex-col  items-center gap-20 marker:text-[#62D89F]">
                    <li className="w-[60%] mt-4  font-trebuchet text-xl font-normal ">
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
            <div className="flex    items-center mt-20 ">
              <div className="flex ">
                <div className="flex items-center ">
                  <ul className="text-white list-disc   flex flex-col items-center gap-10  marker:text-[#62D89F] ">
                    <li className="w-[50%] mt-4  font-trebuchet text-xl font-normal ">
                      Creative strategies to ensure your clients secure the
                      financing they are looking for.
                    </li>
                    <li className="w-[50%] mt-4 text-start   font-trebuchet text-xl font-normal">
                      Seamless onboarding process
                    </li>
                  </ul>
                </div>
                <div>
                  <Image
                    src="/images/partner2.svg"
                    alt="Partner Image 1"
                    width={400}
                    height={400}
                    className="rounded-lg shadow-lg hover-scale"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </InView>
  );
}
