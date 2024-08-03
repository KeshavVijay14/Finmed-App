import Image from "next/image";
import { InView } from "react-intersection-observer";
import { useEffect, useRef, useState } from "react";

const Step1Section = () => {
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
        <div ref={ref} className="w-full justify-center flex">
          <div className="flex w-[80%] items-center h-[100vh]">
            <div className="max-w-md">
              <div className="flex justify-start items-center gap-3 mb-4">
                <Image
                  src="/images/step4.svg"
                  alt="Icon 2"
                  width={28}
                  height={28}
                />
                <div className="text-white text-3xl font-roboto font-semibold">
                  copay.com
                </div>
              </div>
              <div className="text-white font-thin text-md font-roboto">
                Introducing Copay.com, the ultimate one-stop lending platform
                designed exclusively for healthcare providers in search of
                financial solutions.
              </div>
            </div>

            <div className="relative h-[440px] flex-grow">
              {inViewState && (
                <svg
                  ref={circleRef}
                  width="400"
                  height="400"
                  viewBox="0 0 400 400"
                  className="absolute right-12 top-4"
                >
                  <defs>
                    <linearGradient
                      id="lineGradient1"
                      gradientTransform="rotate(103.88)"
                    >
                      <stop offset="0%" stopColor="#C670E7" />
                      <stop offset="33.34%" stopColor="#62D89F" />
                      <stop offset="75.15%" stopColor="#00A8FF" />
                      <stop offset="105.85%" stopColor="#1C2D5C" />
                    </linearGradient>
                  </defs>
                  <path
                    id="path1"
                    d="M2 4H15.9448C65 1 85.9448 22.1472 85.9448 47V158C85.9448 182.853 106.092 203 130.945 203H140"
                    stroke="url(#lineGradient1)"
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
                      id="lineAnimation"
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
                      begin="lineAnimation.end"
                    />
                    <animateMotion
                      repeatCount="indefinite"
                      dur="4s"
                      keyPoints="0;1"
                      keyTimes="0;1"
                      calcMode="linear"
                      begin="lineAnimation.end"
                    >
                      <mpath href="#path1" />
                    </animateMotion>
                  </circle>
                </svg>
              )}
              <div className="absolute right-40 top-16 rounded shadow-sm  gradient-border-thin">
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
                className={`absolute right-16 top-40 ${
                  inViewState ? "animate-scale-up" : ""
                }`}
              >
                <Image
                  src="/images/co-pay-bg.png"
                  alt="Icon 2"
                  width={260}
                  height={130}
                />
              </div>
              <div className="absolute right-0 top-12 rounded shadow-sm  gradient-border-thin">
                <div className="bg-[#1F1B5A] icon-hover  w-[51px] h-[51px] flex justify-center items-center  rounded">
                  <Image
                    src="/images/step3.svg"
                    alt="Icon 2"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
              <div className="absolute right-[120px] bottom-0 rounded shadow-sm  gradient-border-thin">
                <div className="bg-[#1F1B5A] icon-hover  w-[51px] h-[51px] flex justify-center items-center  rounded">
                  <Image
                    src="/images/step5.svg"
                    alt="Icon 2"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
              <div className="absolute right-[320px] bottom-8 rounded shadow-sm  gradient-border-thin">
                <div className="bg-[#1F1B5A] icon-hover  w-[51px] h-[51px] flex justify-center items-center  rounded">
                  <Image
                    src="/images/step2.svg"
                    alt="Icon 2"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
              <div className="absolute right-0 bottom-4 rounded shadow-sm  gradient-border-thin">
                <div className="bg-[#1F1B5A] icon-hover  w-[51px] h-[51px] flex justify-center items-center  rounded">
                  <Image
                    src="/images/step6.svg"
                    alt="Icon 2"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
              <div
                className={`absolute right-[420px] top-0 rounded shadow-sm  ${
                  inViewState ? "gradient-border" : "gradient-border-thin"
                }`}
              >
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

export default Step1Section;
