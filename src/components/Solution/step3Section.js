import Image from "next/image";
import { InView } from "react-intersection-observer";
import { useEffect, useRef, useState } from "react";

const Step3Section = () => {
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
        <div
          ref={ref}
          className="bg-gradient-to-r from-[#401D60] via-[#271A73] to-[#1F1B5A] justify-center flex"
        >
          <div className="flex gap-10 w-[80%] items-center h-[100vh]">
            <div className="p-6 max-w-xl">
              <div className="flex justify-start items-center gap-3 mb-4">
                <Image
                  src="/images/step1.svg"
                  alt="Icon 2"
                  width={32}
                  height={32}
                />
                <div className="text-white text-4xl font-roboto font-semibold">
                  V Score
                </div>
              </div>
              <div className="text-white font-roboto font-thin text-lg">
                V Score utilizes a wide range of data points to score each
                client, ensuring their compatibility within our lending network.
              </div>
            </div>

            <div className="relative h-[440px] flex-grow">
              {inViewState && (
                <svg
                  ref={circleRef}
                  viewBox="0 0 100 200"
                  className="absolute w-[100px] flex justify-center right-0 top-56"
                >
                  <defs>
                    <linearGradient
                      id="lineGradient3"
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
                    id="path3"
                    d="M81 166L81 109.51L81 47C81 22.1472 60.8489 4.99999 15.9961 5.99999L5 5.99999"
                    stroke="url(#lineGradient3)"
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
                      <mpath href="#path3" />
                    </animateMotion>
                  </circle>
                </svg>
              )}
              <div className="absolute right-48 top-[-20px] rounded shadow-sm  gradient-border-thin">
                <div className="bg-[#1F1B5A]  w-[51px] h-[51px] flex justify-center items-center  rounded">
                  <Image
                    src="/images/step6.svg"
                    alt="Icon 2"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
              <div
                className={`absolute right-24 top-32 ${
                  inViewState ? "animate-scale-up" : ""
                }`}
              >
                <Image
                  src="/images/v-score-bg.png"
                  alt="Icon 2"
                  width={320}
                  height={160}
                />
              </div>
              <div className="absolute right-[-40px] top-32 rounded shadow-sm  gradient-border-thin">
                <div className="bg-[#1F1B5A]  w-[51px] h-[51px] flex justify-center items-center  rounded">
                  <Image
                    src="/images/step3.svg"
                    alt="Icon 2"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
              <div className="absolute right-[160px] bottom-[-20px] rounded shadow-sm  gradient-border-thin">
                <div className="bg-[#1F1B5A]  w-[51px] h-[51px] flex justify-center items-center  rounded">
                  <Image
                    src="/images/step2.svg"
                    alt="Icon 2"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
              <div className="absolute right-[360px] bottom-4 rounded shadow-sm  gradient-border-thin">
                <div className="bg-[#1F1B5A]  w-[51px] h-[51px] flex justify-center items-center  rounded">
                  <Image
                    src="/images/step4.svg"
                    alt="Icon 2"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
              <div
                className={`absolute right-0 bottom-0 rounded shadow-sm  ${
                  inViewState ? "gradient-border" : "gradient-border-thin"
                }`}
              >
                <div className="bg-[#1F1B5A]  w-[51px] h-[51px] flex justify-center items-center  rounded">
                  <Image
                    src="/images/step1.svg"
                    alt="Icon 2"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
              <div className="absolute right-[460px] top-4 rounded shadow-sm  gradient-border-thin">
                <div className="bg-[#1F1B5A]  w-[51px] h-[51px] flex justify-center items-center  rounded">
                  <Image
                    src="/images/step5.svg"
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

export default Step3Section;
