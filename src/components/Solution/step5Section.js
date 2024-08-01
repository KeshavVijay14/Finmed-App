import Image from "next/image";
import { InView } from "react-intersection-observer";
import { useEffect, useRef, useState } from "react";

const Step5Section = () => {
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
        <div ref={ref} className="  justify-center flex">
          <div className="flex gap-10 w-[80%] items-center h-[100vh]">
            <div className="p-6 max-w-md">
              <div className="flex justify-start items-center gap-3 mb-4">
                <Image
                  src="/images/step3.svg"
                  alt="Icon 2"
                  width={28}
                  height={28}
                />
                <div className="text-white text-3xl font-roboto font-semibold">
                  8200
                </div>
              </div>
              <div className="text-white font-roboto font-thin text-md">
                8200 is advanced monitoring and fraud detection system.
                Utilizing cutting edge technology, we safeguard your
                transactions in real-time, ensuring unparalleled security and
                peace of mind for all of our clients.
              </div>
            </div>

            <div className="relative h-[440px] flex-grow">
              {inViewState && (
                <svg
                  ref={circleRef}
                  width="400"
                  height="400"
                  viewBox="0 0 400 400"
                  className="absolute right-[-80px] top-64"
                >
                  <defs>
                    <linearGradient
                      id="lineGradient5"
                      gradientUnits="userSpaceOnUse"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#C670E7" />
                      <stop offset="33.34%" stopColor="#62D89F" />
                      <stop offset="75.15%" stopColor="#00A8FF" />
                      <stop offset="100%" stopColor="#1C2D5C" />
                    </linearGradient>
                  </defs>
                  <path
                    id="path5"
                    d="M2 81L48.6904 80.9961L121 80.9961C145.853 80.9961 166 60.8489 166 35.9961L166 2"
                    stroke="url(#lineGradient5)"
                    strokeWidth="3"
                    fill="transparent"
                    strokeDasharray="400, 400"
                  >
                    <animate
                      attributeName="stroke-dasharray"
                      from="0, 400"
                      to="400, 0"
                      dur="2s"
                      fill="freeze"
                    />
                  </path>
                  <circle
                    cx="0"
                    cy="0"
                    r="5"
                    fill="#D360FF"
                    opacity="0"
                    className="circle-with-shadow"
                  >
                    <animate
                      attributeName="opacity"
                      from="0"
                      to="1"
                      begin="2s"
                      dur="0.1s"
                      fill="freeze"
                    />
                    <animateMotion
                      repeatCount="indefinite"
                      dur="5s"
                      keyPoints="0;1"
                      keyTimes="0;1"
                      begin="2s"
                    >
                      <mpath href="#path5" />
                    </animateMotion>
                  </circle>
                </svg>
              )}
              <div className="absolute right-80 top-0 rounded shadow-sm   gradient-border-thin">
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
                className={`absolute right-20 top-32 ${
                  inViewState ? "animate-scale-up" : ""
                }`}
              >
                <Image
                  src="/images/8200-bg.png"
                  alt="Icon 2"
                  width={260}
                  height={130}
                />
              </div>
              <div className="absolute right-16 top-4 rounded shadow-sm   gradient-border-thin">
                <div className="bg-[#1F1B5A] icon-hover  w-[51px] h-[51px] flex justify-center items-center  rounded">
                  <Image
                    src="/images/step1.svg"
                    alt="Icon 2"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
              <div className="absolute right-[80px] bottom-0 rounded shadow-sm   gradient-border-thin">
                <div className="bg-[#1F1B5A] icon-hover  w-[51px] h-[51px] flex justify-center items-center  rounded">
                  <Image
                    src="/images/step2.svg"
                    alt="Icon 2"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
              <div
                className={`absolute right-[300px] bottom-16 rounded shadow-sm   ${
                  inViewState ? "gradient-border" : "gradient-border-thin"
                }`}
              >
                <div className="bg-[#1F1B5A] icon-hover  w-[51px] h-[51px] flex justify-center items-center  rounded">
                  <Image
                    src="/images/step3.svg"
                    alt="Icon 2"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
              <div className="absolute right-0 top-48 rounded shadow-sm   gradient-border-thin">
                <div className="bg-[#1F1B5A] icon-hover  w-[51px] h-[51px] flex justify-center items-center  rounded">
                  <Image
                    src="/images/step6.svg"
                    alt="Icon 2"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
              <div className="absolute right-[420px] top-48 rounded shadow-sm   gradient-border-thin">
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
      )}
    </InView>
  );
};

export default Step5Section;
