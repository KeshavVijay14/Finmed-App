import Image from "next/image";
import { InView } from "react-intersection-observer";

const HeroSection = () => {
  return (
    <InView triggerOnce threshold={0.5}>
      {({ inView, ref, entry }) => (
        <div>
          <div className="flex justify-center items-center" ref={ref}>
            <div
              className={`w-full max-w-[90%] md:max-w-[80%] flex flex-col md:flex-row justify-around items-center h-auto md:h-screen p-4 md:p-0 ${
                inView ? "animate-scale-opacity-z" : ""
              }`}
            >
              <div className="text-center md:text-left mb-8 md:mb-0">
                <h1 className="text-2xl md:text-3xl font-bold mb-4 text-[#62D89F] font-trebuchet">
                  Creating Endless Lending Possibilities
                </h1>
                <p className="font-thin text-base md:text-sm text-white max-w-lg mx-auto md:mx-0">
                  Finmed is spearheading a revolution in both the financial and
                  healthcare industries. Our solutions empower financial
                  institutions and lenders with access to a secure platform.
                  With Finmed, you can accurately establish the value of
                  healthcare insurance receivables while streamlining approval
                  and onboarding processes.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 md:py-16 gap-8 md:gap-20 max-w-xl mx-auto md:mx-0">
                <Image
                  src="/images/step1.svg"
                  alt="Icon 1"
                  width={40}
                  height={40}
                  className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 object-contain"
                />
                <Image
                  src="/images/step2.svg"
                  alt="Icon 2"
                  width={40}
                  height={40}
                  className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 object-contain"
                />
                <Image
                  src="/images/step3.svg"
                  alt="Icon 3"
                  width={40}
                  height={40}
                  className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 object-contain"
                />
                <Image
                  src="/images/step4.svg"
                  alt="Icon 4"
                  width={40}
                  height={40}
                  className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 object-contain"
                />
                <Image
                  src="/images/step5.svg"
                  alt="Icon 5"
                  width={40}
                  height={40}
                  className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 object-contain"
                />
                <Image
                  src="/images/step6.svg"
                  alt="Icon 6"
                  width={40}
                  height={40}
                  className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 object-contain"
                />
              </div>
            </div>
          </div>
          <div className="py-16 md:py-32 px-4 md:px-8 flex justify-center">
            <div className="separator"></div>
          </div>
        </div>
      )}
    </InView>
  );
};

export default HeroSection;
