import Image from "next/image";
import { useState, useEffect } from "react";
import { InView } from "react-intersection-observer";

export default function HoverEffectSections() {
  const [hoveredSection, setHoveredSection] = useState(null);
  const [inViewState, setInViewState] = useState(false);

  useEffect(() => {
    let timer;
    if (inViewState) {
      timer = setTimeout(() => {
        setInViewState(false);
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [inViewState]);

  return (
    <InView
      triggerOnce
      threshold={0.5}
      onChange={(inView) => setInViewState(inView)}
    >
      {({ inView, ref, entry }) => (
        <div
          className="py-10 flex flex-col justify-center items-center"
          ref={ref}
        >
          <h2 className="text-4xl font-bold text-[#62D89F] font-trebuchet mb-20 px-8 sm:px-6 md:px-8 lg:px-10 xl:px-12 sm:mb-16 md:mb-12 lg:mb-10 xl:mb-8">
            The Foundation Of Finmed
          </h2>
          <div className="flex flex-col justify-center items-center p-28">
            <div className="flex space-x-4">
              <div
                className="relative"
                onMouseEnter={() => setHoveredSection("compliance")}
                onMouseLeave={() => setHoveredSection(null)}
              >
                <Image
                  src="/images/Vector 1.svg"
                  alt="Compliance"
                  width={80}
                  height={80}
                  className={`transition-transform duration-300 cursor-pointer z-10 ${
                    hoveredSection === "compliance" || inViewState
                      ? "transform -translate-x-2 -translate-y-2 scale-110"
                      : ""
                  }`}
                />
                {(hoveredSection === "compliance" || inViewState) && (
                  <div className="foundation-bg-1"></div>
                )}
                {(hoveredSection === "compliance" || inViewState) && (
                  <div className="absolute top-[-150px] left-[-100px] md:h-10 md:top-[-30px] h-40 w-40 md:w-auto md:left-[-350px]">
                    <h3 className="text-xl md:text-3xl font-bold text-[#C670E7] font-trebuchet">
                      Compliance
                    </h3>
                    <p className="text-white max-w-xs text-xs md:text-sm font-thin font-roboto">
                      Finmed employs compliance to ensure lenders standards are
                      met. We meticulously implement compliance protocols to
                      guarantee this alignment fostering trust and security
                      within our platform.
                    </p>
                  </div>
                )}
              </div>

              <div
                className="relative"
                onMouseEnter={() => setHoveredSection("security")}
                onMouseLeave={() => setHoveredSection(null)}
              >
                <Image
                  src="/images/Vector 2.svg"
                  alt="Security"
                  width={80}
                  height={80}
                  className={`transition-transform duration-300 cursor-pointer z-10 ${
                    hoveredSection === "security" || inViewState
                      ? "transform translate-x-2 -translate-y-2 scale-110"
                      : ""
                  }`}
                />
                {(hoveredSection === "security" || inViewState) && (
                  <div className="foundation-bg-2"></div>
                )}
                {(hoveredSection === "security" || inViewState) && (
                  <div className="absolute top-[-180px] left-[-10px] md:top-[-30px] md:right-[-400px] md:left-0 h-40 w-48 md:w-auto md:ml-32 mb-8">
                    <h3 className="text-xl md:text-3xl font-bold text-[#62D89F] font-trebuchet">
                      Security
                    </h3>
                    <p className="text-white max-w-sm text-xs md:text-sm font-thin font-roboto">
                      Finmed prioritizes security for all data, adhering to
                      HIPAA guidelines, safeguarding sensitive information. We
                      ensure lenders data and processes remain confidential and
                      secure, employing robust security measures throughout our
                      platform to uphold the highest standards of data
                      protection.
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div
              className="relative"
              onMouseEnter={() => setHoveredSection("dataAnalytics")}
              onMouseLeave={() => setHoveredSection(null)}
            >
              <div className="relative inline-block">
                {(hoveredSection === "dataAnalytics" || inViewState) && (
                  <div className="foundation-bg-3 absolute inset-0"></div>
                )}
                <Image
                  src="/images/Vector 3.svg"
                  alt="Data Analytics"
                  width={115}
                  height={115}
                  className={`transition-transform duration-300 cursor-pointer z-10 ${
                    hoveredSection === "dataAnalytics" || inViewState
                      ? "transform translate-y-2 scale-110"
                      : ""
                  }`}
                />
              </div>

              {(hoveredSection === "dataAnalytics" || inViewState) && (
                <div className="absolute top-[120px] left-[-80px] sm:left-[-100px] w-[320px]">
                  <h3 className="text-xl md:text-3xl ml-16 font-bold text-[#00A8FF] font-trebuchet">
                    Data Analytics
                  </h3>
                  <p className="text-white max-w-sm text-xs md:text-sm font-thin font-roboto">
                    Finmed harnesses thousands of data points to accurately
                    predict the value of each claim. We employ data analytics to
                    continuously enhance our understanding of healthcare claim
                    payment processes, enabling us to adapt and optimize
                    strategies for greater efficiency.
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="py-32 px-8 flex justify-center w-full">
            <div className="separator"></div>
          </div>
        </div>
      )}
    </InView>
  );
}
