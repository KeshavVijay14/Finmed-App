import Image from "next/image";
import { useState } from "react";
import { InView } from "react-intersection-observer";

export default function HoverEffectSections() {
  const [hoveredSection, setHoveredSection] = useState(null);

  return (
    <InView triggerOnce threshold={0.5}>
      {({ inView, ref, entry }) => (
        <div
          className="py-10 bg-gradient-to-r from-[#401D60] via-[#271A73] to-[#1F1B5A] flex flex-col justify-center items-center   "
          ref={ref}
        >
          <h2 className="text-4xl font-bold text-[#62D89F]  font-trebuchet mb-12">
            The foundation of Finmed
          </h2>
          <div className="relative flex flex-col justify-center items-center space-x-1 mb-40 mt-10">
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
                  className={`transition-transform duration-300 cursor-pointer   ${
                    hoveredSection === "compliance"
                      ? "transform -translate-x-4 -translate-y-4 scale-200 "
                      : ""
                  }`}
                />
                <Image
                  src="/images/foundation1.svg"
                  alt="Hover Compliance"
                  layout="fill"
                  objectFit="cover"
                  className={`absolute inset-96 opacity-0 transition-opacity duration-300 cursor-pointer ${"opacity-80"}`}
                />
                {hoveredSection === "compliance" && (
                  <div className="absolute top-[-30px] left-[-350px] mr-20 mb-8 h-10">
                    <h3 className="text-3xl font-bold text-[#C670E7]  font-trebuchet">
                      Compliance
                    </h3>
                    <p className="text-white max-w-sm text-sm font-thin font-roboto">
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
                  className={`transition-transform duration-300 cursor-pointer ${
                    hoveredSection === "security"
                      ? "transform translate-x-4 -translate-y-4 scale-200"
                      : ""
                  }`}
                />
                <Image
                  src="/images/foundation2.svg"
                  alt="Hover Security"
                  layout="fill"
                  objectFit="cover"
                  className={`absolute inset-96 opacity-0 transition-opacity duration-300 cursor-pointer ${"opacity-80"}`}
                />
                {hoveredSection === "security" && (
                  <div className="absolute top-[-30px] right-[-400px] ml-32 mb-8">
                    <h3 className="text-3xl font-bold text-[#62D89F]  font-trebuchet">
                      Security
                    </h3>
                    <p className="text-white max-w-sm text-sm font-thin font-roboto">
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

            <div>
              <div
                className="relative"
                onMouseEnter={() => setHoveredSection("dataAnalytics")}
                onMouseLeave={() => setHoveredSection(null)}
              >
                <Image
                  src="/images/Vector 3.svg"
                  alt="Data Analytics"
                  width={115}
                  height={115}
                  className={`transition-transform duration-300 cursor-pointer ${
                    hoveredSection === "dataAnalytics"
                      ? "transform   translate-y-4 scale-200"
                      : ""
                  }`}
                />
                <Image
                  src="/images/foundation3.svg"
                  alt="Hover DataAnalytics"
                  layout="fill"
                  objectFit="cover"
                  className={`absolute inset-96 opacity-0 transition-opacity duration-300 cursor-pointer ${"opacity-80"}`}
                />
                {hoveredSection === "dataAnalytics" && (
                  <div className="absolute top-[100px] left-[-60px] w-[600px]">
                    <h3 className="text-3xl font-bold text-[#00A8FF]  font-trebuchet">
                      Data Analytics
                    </h3>
                    <p className="text-white  max-w-sm text-sm font-thin font-roboto max-w-2xl">
                      Finmed harnesses thousands of data points to accurately
                      predict the value of each claim. We employ data analytics
                      to continuously enhance our understanding of healthcare
                      claim payment processes, enabling us to adapt and optimize
                      strategies for greater efficiency.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </InView>
  );
}
