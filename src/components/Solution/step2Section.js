import Image from "next/image";
import { InView } from "react-intersection-observer";
import { useEffect, useRef, useState } from "react";

const Step2Section = () => {
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
                  src="/images/step5.svg"
                  alt="Icon 2"
                  width={32}
                  height={32}
                />
                <div className="text-white text-4xl font-roboto font-semibold">
                  Hive
                </div>
              </div>
              <div className="text-white font-roboto font-thin text-lg">
                Designed with security, efficiency, and compliance in mind. Hive
                ensures the smooth and reliable exchange of healthcare claim
                data between medical billing companies and our financial
                technology.
              </div>
            </div>

            <div className="relative h-[440px] flex-grow">
              {inViewState && (
                <svg
                ref={circleRef}
                width="400"
                height="400"
                viewBox="0 0 400 400"
                className="absolute right-[-100px] top-72"
              >
                <defs>
                  <linearGradient
                    id="lineGradient2"
                    gradientTransform="rotate(103.88)"
                  >
                    <stop offset="0%" stopColor="#C670E7" />
                    <stop offset="33.34%" stopColor="#62D89F" />
                    <stop offset="75.15%" stopColor="#00A8FF" />
                    <stop offset="105.85%" stopColor="#1C2D5C" />
                  </linearGradient>
                </defs>
                <path
                  id="path2"
                  d="M97.5 2V36.5V107V107C97.5 125.225 82.7254 140 64.5 140H1.5"
                  stroke="url(#lineGradient2)"
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
                <circle
                  cx="1"
                  cy="1"
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
                    <mpath href="#path2" />
                  </animateMotion>
                </circle>
              </svg>
              
              )}
              <div className="absolute right-48 top-[-36px] rounded shadow-sm   gradient-border-thin">
                <div className="bg-[#1F1B5A]  w-[51px] h-[51px] flex justify-center items-center  rounded">
                  <Image
                    src="/images/step1.svg"
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
                  src="/images/hive-bg.png"
                  alt="Icon 2"
                  width={320}
                  height={160}
                />
              </div>
              <div className="absolute right-[-40px] top-32 rounded shadow-sm   gradient-border-thin">
                <div className="bg-[#1F1B5A]  w-[51px] h-[51px] flex justify-center items-center  rounded">
                  <Image
                    src="/images/step3.svg"
                    alt="Icon 2"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
              <div
                className={`absolute right-[290px] bottom-[-20px] rounded shadow-sm   ${
                  inViewState ? "gradient-border" : "gradient-border-thin"
                }`}
              >
                <div className="bg-[#1F1B5A]  w-[51px] h-[51px] flex justify-center items-center  rounded">
                  <Image
                    src="/images/step5.svg"
                    alt="Icon 2"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
              <div className="absolute right-[480px] bottom-8 rounded shadow-sm   gradient-border-thin">
                <div className="bg-[#1F1B5A]  w-[51px] h-[51px] flex justify-center items-center  rounded">
                  <Image
                    src="/images/step4.svg"
                    alt="Icon 2"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
              <div className="absolute right-16 bottom-2 rounded shadow-sm   gradient-border-thin">
                <div className="bg-[#1F1B5A]  w-[51px] h-[51px] flex justify-center items-center  rounded">
                  <Image
                    src="/images/step2.svg"
                    alt="Icon 2"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
              <div className="absolute right-[460px] top-8 rounded shadow-sm   gradient-border-thin">
                <div className="bg-[#1F1B5A]  w-[51px] h-[51px] flex justify-center items-center  rounded">
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

export default Step2Section;
