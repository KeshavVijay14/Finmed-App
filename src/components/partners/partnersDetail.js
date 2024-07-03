/* eslint-disable react/no-unescaped-entities */
// components/WhyPartnerDetailed.js
import { InView } from "react-intersection-observer";
export default function WhyPartnerDetailed() {
  return (
    <InView triggerOnce threshold={0.5}>
      {({ inView, ref, entry }) => (
        <div
          className="bg-gradient-to-r from-[#401D60] via-[#271A73] to-[#1F1B5A] flex justify-center   py-8  placeholder: text-white"
          ref={ref}
        >
          <div
            className={`w-[80%] flex flex-col justify-center items-center py-10   ${
              inView ? "animate-move-opacity" : ""
            }`}
          >
            <h2 className="text-4xl font-bold text-[#62D89F]   font-trebuchet text-center mb-12">
              Why partner with Finmed?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-white">
              <div>
                <h3 className="text-xl font-bold text-[#62D89F] mb-4 font-trebuchet">
                  Broker & Accountant partners
                </h3>
                <p className="mt-2 font-light font-roboto text-base text-white">
                  Tap into new revenue streams by earning fees for each customer
                  you refer.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#62D89F] mb-4 font-trebuchet">
                  Lenders
                </h3>
                <p className="mt-2 font-light font-roboto text-base text-white">
                  Lend with confidence through Finmed and unlock profitable
                  returns with ease.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#62D89F] mb-4 font-trebuchet">
                  Affiliate partners
                </h3>
                <p className="mt-2 font-light font-roboto text-base text-white">
                  From billing companies to healthcare consultants, becoming an
                  affiliate partner enables you to extend our services to your
                  clients.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-green-300">
                  Developer
                </h3>
                <p className="mt-2 font-light font-roboto text-base text-white">
                  One lending platform, hundreds of APIs, and an infinite number
                  of solutions built on Finmed's network. A network that powers
                  the payments, underwriting, determining ENR value and so much
                  more.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </InView>
  );
}
