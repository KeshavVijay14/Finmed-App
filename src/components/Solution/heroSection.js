import Image from "next/image";
import { InView } from "react-intersection-observer";

const HeroSection = () => {
  return (
    <InView triggerOnce threshold={0.5}>
      {({ inView, ref, entry }) => (
        <div>
          <div
            className="bg-gradient-to-r from-[#401D60] via-[#271A73] to-[#1F1B5A] flex justify-center items-center"
            ref={ref}
          >
            <div
              className={`w-[80%] flex justify-around  items-center h-[100vh] ${
                inView ? "animate-scale-opacity-z" : ""
              } `}
            >
              <div>
                <h1 className="text-5xl font-bold mb-4 text-[#62D89F] font-trebuchet">
                  Creating Endless Lending Possibilities
                </h1>
                <p className="font-thin text-lg text-white max-w-xl font-roboto">
                  Finmed is spearheading a revolution in both the financial and
                  healthcare industries. Our solutions empower financial
                  institutions and lenders with access to a secure platform.
                  With Finmed, you can accurately establish the value of
                  healthcare insurance receivables while streamlining approval
                  and onboarding processes.
                </p>
              </div>
              <div className="grid grid-cols-3 py-28 pl-32 pr-20 max-w-xl gap-20 gradient-background">
                <Image
                  src="/images/step1.svg"
                  alt="Icon 1"
                  width={40}
                  height={40}
                />
                <Image
                  src="/images/step2.svg"
                  alt="Icon 2"
                  width={40}
                  height={40}
                />
                <Image
                  src="/images/step3.svg"
                  alt="Icon 3"
                  width={40}
                  height={40}
                />
                <Image
                  src="/images/step4.svg"
                  alt="Icon 4"
                  width={40}
                  height={40}
                />
                <Image
                  src="/images/step5.svg"
                  alt="Icon 5"
                  width={40}
                  height={40}
                />
                <Image
                  src="/images/step6.svg"
                  alt="Icon 6"
                  width={40}
                  height={40}
                />
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

export default HeroSection;
