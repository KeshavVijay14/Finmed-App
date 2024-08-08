import Image from "next/image";
import { InView } from "react-intersection-observer";
import { useEffect, useRef, useState } from "react";

const Step4Section = () => {
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
          <div className="w-[80%] h-[100vh] md:flex md:justify-between items-center">
            <div className="max-w-md">
              <div className="flex justify-start items-center gap-3 mb-4">
                <Image
                  src="/images/step6.svg"
                  alt="Icon 2"
                  width={28}
                  height={28}
                />
                <div className="text-white text-3xl font-roboto font-semibold">
                  Pulse
                </div>
              </div>
              <div className="text-white font-roboto font-thin text-md">
                The Pulse of Finmed. Reading, analyzing, and transforming data
                into actionable insights. It guides our decisions on client
                interactions, claims processing, and company strategies with
                precision.
              </div>
            </div>

            <div className="relative h-[440px] md:mt-0 md:mr-0 mt-20 mr-[-40px]">
              {inViewState && (
                <svg
                  ref={circleRef}
                  width="400"
                  height="400"
                  viewBox="0 0 400 400"
                  className="absolute right-[28px] top-8"
                >
                  <defs>
                    <linearGradient
                      id="lineGradient4"
                      gradientTransform="rotate(103.88)"
                    >
                      <stop offset="0%" stopColor="#C670E7" />
                      <stop offset="33.34%" stopColor="#62D89F" />
                      <stop offset="75.15%" stopColor="#00A8FF" />
                      <stop offset="105.85%" stopColor="#1C2D5C" />
                    </linearGradient>
                  </defs>
                  <path
                    id="path4"
                    d="M2 5.5L36.5 5.5L107 6.5V6.5C125.225 5.49999 140 16.2746 140 34.5L140 97.5"
                    stroke="url(#lineGradient4)"
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
                      id="lineAnimation4"
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
                      begin="lineAnimation4.end"
                    />
                    <animateMotion
                      repeatCount="indefinite"
                      dur="4s"
                      keyPoints="0;1"
                      keyTimes="0;1"
                      calcMode="linear"
                      begin="lineAnimation4.end"
                    >
                      <mpath href="#path4" />
                    </animateMotion>
                  </circle>
                </svg>
              )}
              <div className="absolute right-40 top-2 rounded shadow-sm   gradient-border-thin">
                <div className="bg-[#1F1B5A] icon-hover  w-[51px] h-[51px] flex justify-center items-center  rounded">
                  <Image
                    src="/images/step4.svg"
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
                  src="/images/pulse-bg.png"
                  alt="Icon 2"
                  width={260}
                  height={130}
                />
              </div>
              <div className="absolute right-0 top-40 rounded shadow-sm   gradient-border-thin">
                <div className="bg-[#1F1B5A] icon-hover  w-[51px] h-[51px] flex justify-center items-center  rounded">
                  <Image
                    src="/images/step5.svg"
                    alt="Icon 2"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
              <div className="absolute right-[280px] bottom-0 rounded shadow-sm   gradient-border-thin">
                <div className="bg-[#1F1B5A] icon-hover  w-[51px] h-[51px] flex justify-center items-center  rounded">
                  <Image
                    src="/images/step2.svg"
                    alt="Icon 2"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
              <div className="absolute right-[420px] bottom-4 rounded shadow-sm   gradient-border-thin">
                <div className="bg-[#1F1B5A] icon-hover  w-[51px] h-[51px] flex justify-center items-center  rounded">
                  <Image
                    src="/images/step1.svg"
                    alt="Icon 2"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
              <div className="absolute right-32 bottom-2 rounded shadow-sm   gradient-border-thin">
                <div className="bg-[#1F1B5A] icon-hover  w-[51px] h-[51px] flex justify-center items-center  rounded">
                  <Image
                    src="/images/step3.svg"
                    alt="Icon 2"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
              <div
                className={`absolute right-[420px] top-0 rounded shadow-sm   ${
                  inViewState ? "gradient-border" : "gradient-border-thin"
                }`}
              >
                <div className="bg-[#1F1B5A] icon-hover  w-[51px] h-[51px] flex justify-center items-center  rounded">
                  <Image
                    src="/images/step6.svg"
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

export default Step4Section;
