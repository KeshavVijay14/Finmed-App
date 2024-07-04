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
        <div
          ref={ref}
          className="bg-gradient-to-r from-[#401D60] via-[#271A73] to-[#1F1B5A] justify-center flex"
        >
          <div className="flex gap-10 w-[80%] items-center h-[100vh]">
            <div className="p-6 max-w-md ">
              <div className="flex justify-start items-center gap-3 mb-4">
                <Image
                  src="/images/step3.svg"
                  alt="Icon 2"
                  width={16}
                  height={16}
                />
                <div className="text-white text-2xl font-roboto font-semibold">
                  8200
                </div>
              </div>
              <div className="text-white font-roboto font-thin text-sm">
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
                  className="absolute right-[-60px] top-72"
                >
                  <defs>
                    <linearGradient
                      id="lineGradient5"
                      gradientTransform="rotate(153.88)"
                    >
                      <stop offset="0%" stopColor="#C670E7" />
                      <stop offset="33.34%" stopColor="#62D89F" />
                      <stop offset="75.15%" stopColor="#00A8FF" />
                      <stop offset="105.85%" stopColor="#1C2D5C" />
                    </linearGradient>
                  </defs>
                  <path
                    id="path5"
                    d="M2 81.0001L48.6904 80.9961L121 80.9961C145.853 80.9961 166 60.8489 166 35.9961L166 2.00001"
                    stroke="url(#lineGradient5)"
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
                      <mpath href="#path5" />
                    </animateMotion>
                  </circle>
                </svg>
              )}
              <div className="absolute right-80 top-16 rounded shadow-sm   gradient-border-thin">
                <div className="bg-[#1F1B5A]  w-[51px] h-[51px] flex justify-center items-center  rounded">
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
                  width={320}
                  height={160}
                />
              </div>
              <div className="absolute right-28 top-4 rounded shadow-sm   gradient-border-thin">
                <div className="bg-[#1F1B5A]  w-[51px] h-[51px] flex justify-center items-center  rounded">
                  <Image
                    src="/images/step1.svg"
                    alt="Icon 2"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
              <div className="absolute right-[100px] bottom-8 rounded shadow-sm   gradient-border-thin">
                <div className="bg-[#1F1B5A]  w-[51px] h-[51px] flex justify-center items-center  rounded">
                  <Image
                    src="/images/step5.svg"
                    alt="Icon 2"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
              <div
                className={`absolute right-[340px] bottom-12 rounded shadow-sm   ${
                  inViewState ? "gradient-border" : "gradient-border-thin"
                }`}
              >
                <div className="bg-[#1F1B5A]  w-[51px] h-[51px] flex justify-center items-center  rounded">
                  <Image
                    src="/images/step3.svg"
                    alt="Icon 2"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
              <div className="absolute right-12 top-48 rounded shadow-sm   gradient-border-thin">
                <div className="bg-[#1F1B5A]  w-[51px] h-[51px] flex justify-center items-center  rounded">
                  <Image
                    src="/images/step6.svg"
                    alt="Icon 2"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
              <div className="absolute right-[440px] top-48 rounded shadow-sm   gradient-border-thin">
                <div className="bg-[#1F1B5A]  w-[51px] h-[51px] flex justify-center items-center  rounded">
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
