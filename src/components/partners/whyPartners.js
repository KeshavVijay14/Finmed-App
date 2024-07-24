/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { InView } from "react-intersection-observer";

export default function WhyPartner() {
  return (
    <InView triggerOnce threshold={0.5}>
      {({ inView, ref, entry }) => (
        // <div className="relative mt-10   flex justify-center  bg-[#081949] text-white py-40 ref={ref}  ">
        //   <div className="dark-bg"></div>
        //   <div className="w-[80%]  h-[800px] flex flex-col justify-center items-center text-center">
        //     <h2 className="text-4xl font-bold text-[#62D89F]  font-trebuchet text-center mb-12 z-10">
        //       Why Partner With Finmed?
        //     </h2>
        //     <div className="flex justify-end items-center py-24 z-10">
        //       <div className="flex">
        //         <div className="rounded-lg">
        //           <Image
        //             src="/images/partner1.svg"
        //             alt="Partner Image 1"
        //             width={400}
        //             height={400}
        //             className="rounded-lg  hover-scale"
        //           />
        //         </div>
        //         <div className="flex items-center  ">
        //           <ul className="text-white list-disc list-inside flex flex-col  items-center gap-20 marker:text-[#62D89F]">
        //             <li className="w-[60%] mt-4  font-trebuchet text-xl font-normal ">
        //               Lending and underwriting solutions your clients will love.
        //             </li>
        //             <li className="w-[60%] mt-4   font-trebuchet text-xl font-normal">
        //               Elevate your clients' experiences with top-line financial
        //               products.
        //             </li>
        //           </ul>
        //         </div>
        //       </div>
        //     </div>
        //     <div className="flex    items-center z-10 ">
        //       <div className="flex ">
        //         <div className="flex items-center ">
        //           <ul className="text-white list-disc   flex flex-col items-center gap-10  marker:text-[#62D89F] ">
        //             <li className="w-[50%] mt-4  font-trebuchet text-xl font-normal ">
        //               Creative strategies to ensure your clients secure the
        //               financing they are looking for.
        //             </li>
        //             <li className="w-[50%] mt-4 text-start   font-trebuchet text-xl font-normal">
        //               Seamless onboarding process
        //             </li>
        //           </ul>
        //         </div>
        //         <div>
        //           <Image
        //             src="/images/partner2.svg"
        //             alt="Partner Image 1"
        //             width={400}
        //             height={400}
        //             className="rounded-lg shadow-lg hover-scale"
        //           />
        //         </div>
        //       </div>
        //     </div>
        //   </div>
        // </div>
        <div
          className="relative mt-10 flex justify-center bg-[#081949] text-white py-40"
          ref={ref}
        >
          <div className="dark-bg"></div>
          <div className="w-full max-w-[80%] h-[800px] flex flex-col justify-center items-center text-center">
            <h2 className="text-4xl font-bold text-[#62D89F]  font-trebuchet z-10">
              Why Partner With Finmed?
            </h2>

            <div className="flex flex-col md:flex-row justify-center items-center py-24 z-10 space-y-8 md:space-y-0 md:space-x-8">
              <div className="flex flex-col items-center">
                <Image
                  src="/images/partner1.svg"
                  alt="Partner Image 1"
                  width={300}
                  height={300}
                  className="rounded-lg hover-scale mb-28 mx-8"
                />
                <ul className="text-white list-disc list-inside flex flex-col items-center gap-12 marker:text-[#62D89F]">
                  <li className="w-full max-w-[300px] mt-4 font-trebuchet text-xl font-normal">
                    Lending and underwriting solutions your clients will love.
                  </li>
                  <li className="w-full max-w-[300px] mt-4 font-trebuchet text-xl font-normal">
                    Elevate your clients' experiences with top-line financial
                    products.
                  </li>
                </ul>
              </div>

              <div className="flex flex-col items-center">
                <ul className="text-white list-disc list-inside flex flex-col items-center gap-8 marker:text-[#62D89F]">
                  <li className="w-full max-w-[300px] mt-4 font-trebuchet text-xl font-normal">
                    Creative strategies to ensure your clients secure the
                    financing they are looking for.
                  </li>
                  <li className="w-full max-w-[300px] mt-4 font-trebuchet text-xl font-normal">
                    Seamless onboarding process
                  </li>
                </ul>
                <Image
                  src="/images/partner2.svg"
                  alt="Partner Image 2"
                  width={300}
                  height={300}
                  className="rounded-lg shadow-lg hover-scale mt-48 mx-8"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </InView>
  );
}
