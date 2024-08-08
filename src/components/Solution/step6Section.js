import Image from "next/image";
import { InView } from "react-intersection-observer";
import { useEffect, useRef, useState } from "react";

const Step6Section = () => {
  const [inViewState, setInViewState] = useState(false);
  const circleRef = useRef(null);

  useEffect(() => {
    if (circleRef.current && inViewState) {
      const animateCircle = circleRef.current.querySelector("animateMotion");
      if (animateCircle) {
        setTimeout(() => {
          animateCircle.beginElement();
        }, 2000); // Start circle animation after 2 seconds
      }
    }
  }, [inViewState]);

  return (
    <InView
      triggerOnce
      threshold={0.5}
      onChange={(inView) => setInViewState(inView)}
    >
      {({ inView, ref, entry }) => (
        <div>
          <div ref={ref} className="  justify-center flex">
            <div className="w-[80%] h-[100vh] md:flex md:justify-between items-center">
              <div className=" selection: max-w-md">
                <div className="flex justify-start items-center gap-3 mb-4">
                  <Image
                    src="/images/step2.svg"
                    alt="Icon 2"
                    width={28}
                    height={28}
                  />
                  <div className="text-white text-3xl font-roboto font-semibold">
                    Lender Network
                  </div>
                </div>
                <div className="text-white font-roboto font-thin text-md">
                  Discover our expansive network of banks and lenders, all eager
                  to participate in the healthcare lending market. Each member
                  can select their unique criteria for desired credit profiles.
                  Clients meeting these criteria are seamlessly connected,
                  streamlining the lending process.
                </div>
              </div>

              <div className="relative h-[440px] md:mt-0 md:mr-0 mt-20 mr-[-40px]">
                {inViewState && (
                  <svg
                    ref={circleRef}
                    width="400"
                    height="400"
                    viewBox="0 0 400 400"
                    className="absolute right-0 top-36"
                  >
                    <defs>
                      <linearGradient
                        id="lineGradient6"
                        gradientTransform="rotate(103.88)"
                      >
                        <stop offset="0%" stopColor="#C670E7" />
                        <stop offset="33.34%" stopColor="#62D89F" />
                        <stop offset="75.15%" stopColor="#00A8FF" />
                        <stop offset="105.85%" stopColor="#1C2D5C" />
                      </linearGradient>
                    </defs>
                    <path
                      id="path6"
                      d="M7 166L8 139.51L8 47C8 22.1472 25.1511 10.99998 55.0039 6.99996L81 5.99994"
                      stroke="url(#lineGradient6)"
                      strokeWidth="3"
                      fill="transparent"
                      strokeDasharray="0, 400"
                    >
                      <animate
                        attributeName="stroke-dasharray"
                        from="0, 400"
                        to="400, 0"
                        dur="2s"
                        fill="freeze"
                        id="lineAnimation6"
                      />
                    </path>
                    <circle
                      cx="1"
                      cy="1"
                      r="5"
                      fill="#D360FF"
                      opacity="0"
                      className="circle-with-shadow bg-gray-50"
                    >
                      <animate
                        attributeName="opacity"
                        from="0"
                        to="1"
                        dur="0.1s"
                        fill="freeze"
                        begin="lineAnimation6.end"
                      />
                      <animateMotion
                        repeatCount="indefinite"
                        dur="4s"
                        keyPoints="0;1"
                        keyTimes="0;1"
                        calcMode="linear"
                        begin="lineAnimation6.end"
                      >
                        <mpath href="#path6" />
                      </animateMotion>
                    </circle>
                  </svg>
                )}
                <div className="absolute right-2 top-0 rounded shadow-sm   gradient-border-thin">
                  <div className="bg-[#1F1B5A] icon-hover  w-[51px] h-[51px] flex justify-center items-center  rounded">
                    <Image
                      src="/images/step1.svg"
                      alt="Icon 2"
                      width={20}
                      height={20}
                    />
                  </div>
                </div>
                <div
                  className={`md:relative absolute right-20 top-32 ${
                    inViewState ? "animate-scale-up" : ""
                  }`}
                >
                  <Image
                    src="/images/lender-network-bg.png"
                    alt="Icon 2"
                    width={260}
                    height={130}
                  />
                </div>
                <div className="absolute right-0 top-48 rounded shadow-sm   gradient-border-thin">
                  <div className="bg-[#1F1B5A] icon-hover  w-[51px] h-[51px] flex justify-center items-center  rounded">
                    <Image
                      src="/images/step3.svg"
                      alt="Icon 2"
                      width={20}
                      height={20}
                    />
                  </div>
                </div>
                <div className="absolute right-[280px] bottom-0 rounded shadow-sm   gradient-border-thin">
                  <div className="bg-[#1F1B5A] icon-hover  w-[51px] h-[51px] flex justify-center items-center  rounded">
                    <Image
                      src="/images/step5.svg"
                      alt="Icon 2"
                      width={20}
                      height={20}
                    />
                  </div>
                </div>
                <div
                  className={`absolute right-[360px] bottom-20 rounded shadow-sm   ${
                    inViewState ? "gradient-border" : "gradient-border-thin"
                  }`}
                >
                  <div className="bg-[#1F1B5A] icon-hover  w-[51px] h-[51px] flex justify-center items-center  rounded">
                    <Image
                      src="/images/step2.svg"
                      alt="Icon 2"
                      width={20}
                      height={20}
                    />
                  </div>
                </div>
                <div className="absolute right-28 bottom-4 rounded shadow-sm   gradient-border-thin">
                  <div className="bg-[#1F1B5A] icon-hover  w-[51px] h-[51px] flex justify-center items-center  rounded">
                    <Image
                      src="/images/step6.svg"
                      alt="Icon 2"
                      width={20}
                      height={20}
                    />
                  </div>
                </div>
                <div className="absolute right-[360px] top-0 rounded shadow-sm   gradient-border-thin">
                  <div className="bg-[#1F1B5A] icon-hover  w-[51px] h-[51px] flex justify-center items-center  rounded">
                    <Image
                      src="/images/step4.svg"
                      alt="Icon 2"
                      width={20}
                      height={20}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-32 px-8 flex justify-center">
            <div className="separator"></div>
          </div>
        </div>
      )}
    </InView>
  );
};

export default Step6Section;
