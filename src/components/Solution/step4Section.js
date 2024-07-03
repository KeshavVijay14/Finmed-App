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
        <div
          ref={ref}
          className="bg-gradient-to-r from-[#401D60] via-[#271A73] to-[#1F1B5A] justify-center flex"
        >
          <div className="flex gap-10 w-[80%] items-center h-[100vh]">
            <div className="p-6 max-w-md ">
              <div className="flex justify-start items-center gap-3 mb-4">
                <Image
                  src="/images/step6.svg"
                  alt="Icon 2"
                  width={16}
                  height={16}
                />
                <div className="text-white text-2xl font-roboto font-semibold">
                  Pulse
                </div>
              </div>
              <div className="text-white font-roboto font-thin text-sm">
                The Pulse of Finmed. Reading, analyzing, and transforming data into
                actionable insights. It guides our decisions on client interactions,
                claims processing, and company strategies with precision.
              </div>
            </div>

            <div className="relative h-[440px] flex-grow">
              {inViewState && (
                <svg
                  ref={circleRef}
                  width="400"
                  height="400"
                  viewBox="0 0 400 400"
                  className="absolute right-[85px] top-7"
                >
                  <defs>
                    <linearGradient
                      id="lineGradient4"
                      gradientTransform="rotate(153.88)"
                    >
                      <stop offset="0%" stopColor="#C670E7" />
                      <stop offset="33.34%" stopColor="#62D89F" />
                      <stop offset="75.15%" stopColor="#00A8FF" />
                      <stop offset="105.85%" stopColor="#1C2D5C" />
                    </linearGradient>
                  </defs>
                  <path
                    id="path4"
                    d="M2 1.5L36.5 1.5L107 1.5V1.5C125.225 1.49999 140 16.2746 140 34.5L140 97.5"
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
                    />
                  </path>
                  <circle r="5" fill="#D360FF" opacity="0">
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
                      <mpath href="#path4" />
                    </animateMotion>
                  </circle>
                </svg>
              )}
              <div className="absolute right-48 top-12 rounded shadow-sm p-3 gradient-border-thin">
                <Image
                  src="/images/step4.svg"
                  alt="Icon 2"
                  width={20}
                  height={20}
                />
              </div>
              <div className={`absolute right-20 top-32 ${inViewState ? 'animate-scale-up' : ''}`}>
                <Image
                  src="/images/pulse-bg.png"
                  alt="Icon 2"
                  width={320}
                  height={160}
                />
              </div>
              <div className="absolute right-4 top-40 rounded shadow-sm p-3 gradient-border-thin">
                <Image
                  src="/images/step5.svg"
                  alt="Icon 2"
                  width={20}
                  height={20}
                />
              </div>
              <div className="absolute right-[320px] bottom-16 rounded shadow-sm p-3 gradient-border-thin">
                <Image
                  src="/images/step2.svg"
                  alt="Icon 2"
                  width={20}
                  height={20}
                />
              </div>
              <div className="absolute right-[424px] bottom-32 rounded shadow-sm p-3 gradient-border-thin">
                <Image
                  src="/images/step1.svg"
                  alt="Icon 2"
                  width={20}
                  height={20}
                />
              </div>
              <div className="absolute right-32 bottom-12 rounded shadow-sm p-3 gradient-border-thin">
                <Image
                  src="/images/step3.svg"
                  alt="Icon 2"
                  width={20}
                  height={20}
                />
              </div>
              <div className={`absolute right-[484px] top-0 rounded shadow-sm p-3 ${inViewState ? "gradient-border" : "gradient-border-thin"}`}>
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
      )}
    </InView>
  );
};

export default Step4Section;
