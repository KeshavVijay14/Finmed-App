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
        <div
          ref={ref}
          className="bg-gradient-to-r from-[#401D60] via-[#271A73] to-[#1F1B5A] justify-center flex"
        >
          <div className="flex gap-10 w-[80%] items-center h-[100vh]">
            <div className="p-6 max-w-md ">
              <div className="flex justify-start items-center gap-3 mb-4">
                <Image
                  src="/images/step4.svg"
                  alt="Icon 2"
                  width={16}
                  height={16}
                />
                <div className="text-white text-2xl font-roboto font-semibold">
                  copay.com
                </div>
              </div>
              <div className="text-white font-thin text-sm font-roboto">
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
                  className="absolute right-[145px] top-8"
                >
                  <defs>
                    <linearGradient
                      id="lineGradient1"
                      gradientTransform="rotate(153.88)"
                    >
                      <stop offset="0%" stopColor="#C670E7" />
                      <stop offset="33.34%" stopColor="#62D89F" />
                      <stop offset="75.15%" stopColor="#00A8FF" />
                      <stop offset="105.85%" stopColor="#1C2D5C" />
                    </linearGradient>
                  </defs>
                  <path
                    id="path1"
                    d="M2 2H25.9448C65 1 85.9448 22.1472 85.9448 47V158C85.9448 182.853 106.092 203 130.945 203H144"
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
                    />
                  </path>
                  <circle cx="2" cy="2" r="5" fill="#D360FF" opacity="0">
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
                      <mpath href="#path1" />
                    </animateMotion>
                  </circle>
                </svg>
              )}
              <div className="absolute right-64 top-0 rounded shadow-sm p-3 border-0">
                <Image
                  src="/images/step1.svg"
                  alt="Icon 2"
                  width={20}
                  height={20}
                />
              </div>
              <div
                className={`absolute right-20 top-32 ${
                  inViewState ? "animate-scale-up" : ""
                }`}
              >
                <Image
                  src="/images/co-pay-bg.png"
                  alt="Icon 2"
                  width={320}
                  height={160}
                />
              </div>
              <div className="absolute right-12 top-4 rounded shadow-sm p-3 border-0">
                <Image
                  src="/images/step3.svg"
                  alt="Icon 2"
                  width={20}
                  height={20}
                />
              </div>
              <div className="absolute right-[300px] bottom-0 rounded shadow-sm p-3 border-0">
                <Image
                  src="/images/step5.svg"
                  alt="Icon 2"
                  width={20}
                  height={20}
                />
              </div>
              <div className="absolute right-[480px] bottom-16 rounded shadow-sm p-3 border-0">
                <Image
                  src="/images/step2.svg"
                  alt="Icon 2"
                  width={20}
                  height={20}
                />
              </div>
              <div className="absolute right-12 bottom-4 rounded shadow-sm p-3 border-0">
                <Image
                  src="/images/step6.svg"
                  alt="Icon 2"
                  width={20}
                  height={20}
                />
              </div>
              <div
                className={`absolute right-[544px] top-4 rounded shadow-sm p-3 ${
                  inViewState ? "gradient-border" : "border-0"
                }`}
              >
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
      )}
    </InView>
  );
};

export default Step1Section;
