import Image from "next/image";
import { InView } from "react-intersection-observer";
import { useEffect, useRef, useState } from "react";

const StepSection = () => {
  const [inViewState, setInViewState] = useState(false);
  const circleRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    if (inViewState) {
      circleRefs.forEach((ref, index) => {
        if (ref.current) {
          const animateCircle = ref.current.querySelector("animateMotion");
          if (animateCircle) {
            setTimeout(() => {
              animateCircle.beginElement();
            }, 2000);
          }
        }
      });
    }
  }, [inViewState]);

  return (
    <InView
      triggerOnce
      threshold={0.5}
      onChange={(inView) => setInViewState(inView)}
    >
      {({ inView, ref, entry }) => (
        <div className="flex  justify-center">
          <div
            className="w-[80%] h-[100vh] md:flex md:justify-between items-center"
            ref={ref}
          >
            <div className="max-w-md xl:max-w-lg 2xl:max-w-xl">
              <h1 className="text-3xl font-semibold mb-4 text-[#62D89F] max-w-md xl:max-w-lg 2xl:max-w-xl  font-roboto">
                A Fully Integrated Suite of Financial and Healthcare Solutions
              </h1>
              <p className="font-thin text-md text-white max-w-md xl:max-w-lg 2xl:max-w-xl font-roboto">
                Mitigate risks, boost revenue, and lend to the healthcare
                industry more efficiently with our fully integrated platform.
                Use Finmed to handle all of your lending related needs,
                effectively manage risks, and expand your presence in the
                healthcare lending sector.
              </p>
            </div>
            <div className="relative h-[440px] md:mt-0 md:mr-0 mt-20 mr-[-40px]">
              {inViewState && (
                <>
                  <svg
                    ref={circleRefs[0]}
                    viewBox="0 0 300 400"
                    className="absolute sm:w-[300px] w-[180px] sm:right-[-100px] right-0 sm:top-4 top-16"
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
                      id="stepPath-1"
                      d="M2 5H40.9448C65.7976 5 85.9448 22.1472 85.9448 47V72C85.9448 96.8528 106.092 117 130.945 117H177"
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
                        id="lineAnimationStepPath1"
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
                        begin="lineAnimationStepPath1.end"
                      />
                      <animateMotion
                        repeatCount="indefinite"
                        dur="4s"
                        keyPoints="0;1"
                        keyTimes="0;1"
                        calcMode="linear"
                        begin="lineAnimationStepPath1.end"
                      >
                        <mpath href="#stepPath-1" />
                      </animateMotion>
                    </circle>
                  </svg>

                  <svg
                    ref={circleRefs[1]}
                    viewBox="0 0 200 300"
                    className="absolute sm:w-[200px] w-[140px] sm:right-40 right-[170px] sm:top-24 top-32"
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
                      id="stepPath-2"
                      d="M2 5H40.3536C65.2064 5 85.3536 22.1472 85.3536 47V158C85.3536 182.853 105.501 203 130.354 203H143"
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
                        id="lineAnimationStepPath2"
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
                        begin="lineAnimationStepPath2.end"
                      />
                      <animateMotion
                        repeatCount="indefinite"
                        dur="4s"
                        keyPoints="0;1"
                        keyTimes="0;1"
                        calcMode="linear"
                        begin="lineAnimationStepPath2.end"
                      >
                        <mpath href="#stepPath-2" />
                      </animateMotion>
                    </circle>
                  </svg>

                  <svg
                    ref={circleRefs[2]}
                    width="400"
                    height="400"
                    viewBox="0 0 400 400"
                    className="absolute sm:right-0 sm:top-36 top-24 sm:w-[400px] w-[320px] right-10"
                  >
                    <defs>
                      <linearGradient
                        id="lineGradient3"
                        gradientTransform="rotate(103.88)"
                      >
                        <stop offset="0%" stopColor="#C670E7" />
                        <stop offset="33.34%" stopColor="#62D89F" />
                        <stop offset="75.15%" stopColor="#00A8FF" />
                        <stop offset="105.85%" stopColor="#1C2D5C" />
                      </linearGradient>
                    </defs>
                    <path
                      id="stepPath-3"
                      d="M371.5 1.5V58V58C371.5 80.0914 353.591 98 331.5 98H0.1"
                      stroke="url(#lineGradient3)"
                      strokeWidth="3"
                      fill="transparent"
                      strokeDasharray="400"
                      strokeDashoffset="400"
                    >
                      <animate
                        attributeName="stroke-dashoffset"
                        from="400"
                        to="780"
                        dur="2s"
                        fill="freeze"
                        id="lineAnimationStepPath3"
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
                        begin="lineAnimationStepPath3.end"
                      />
                      <animateMotion
                        repeatCount="indefinite"
                        dur="4s"
                        keyPoints="1;0"
                        keyTimes="0;1"
                        calcMode="linear"
                        begin="lineAnimationStepPath3.end"
                      >
                        <mpath href="#stepPath-3" />
                      </animateMotion>
                    </circle>
                  </svg>

                  <svg
                    ref={circleRefs[3]}
                    viewBox="0 0 300 300"
                    className="absolute sm:w-[300px] w-[180px] sm:right-[-120px] right-0 sm:top-40 top-[180px]"
                  >
                    <defs>
                      <linearGradient
                        id="lineGradient"
                        gradientTransform="rotate(103.88)"
                      >
                        <stop offset="0%" stopColor="#C670E7" />
                        <stop offset="33.34%" stopColor="#62D89F" />
                        <stop offset="75.15%" stopColor="#00A8FF" />
                        <stop offset="105.85%" stopColor="#1C2D5C" />
                      </linearGradient>
                    </defs>
                    <path
                      id="stepPath-4"
                      d="M36 2H24.8525C99.1278 2 119.446 22.811 118.84 48.079L115.553 185.079C114.968 209.504 114.9988 229 95.5664 229H34C16.3269 229 6 224.673 4 187V168"
                      stroke="url(#lineGradient)"
                      strokeWidth="3"
                      fill="transparent"
                      strokeDasharray="0, 400"
                    >
                      <animate
                        attributeName="stroke-dasharray"
                        from="0, 600"
                        to="600, 0"
                        dur="2s"
                        fill="freeze"
                        id="lineAnimationStepPath4"
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
                        begin="lineAnimationStepPath4.end"
                      />
                      <animateMotion
                        repeatCount="indefinite"
                        dur="4s"
                        keyPoints="0;1"
                        keyTimes="0;1"
                        calcMode="linear"
                        begin="lineAnimationStepPath4.end"
                      >
                        <mpath href="#stepPath-4" />
                      </animateMotion>
                    </circle>
                  </svg>
                </>
              )}
              <div className="absolute right-44 sm:top-0 top-8 rounded shadow-sm    gradient-border-thin">
                <div className="bg-[#1F1B5A] icon-hover    w-[51px] h-[51px] flex justify-center items-center  rounded">
                  <Image
                    src="/images/step5.svg"
                    alt="Icon 2"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
              <div className="absolute sm:right-0 right-8 top-28 rounded shadow-sm   gradient-border-thin">
                <div className="bg-[#1F1B5A] icon-hover  w-[51px] h-[51px] flex justify-center items-center  rounded">
                  <Image
                    src="/images/step1.svg"
                    alt="Icon 2"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
              <div className="absolute right-[160px] sm:top-72 top-60 rounded shadow-sm   gradient-border-thin">
                <div className="bg-[#1F1B5A] icon-hover  w-[51px] h-[51px] flex justify-center items-center  rounded">
                  <Image
                    src="/images/step4.svg"
                    alt="Icon 2"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
              <div className="absolute sm:right-[370px] sm:top-56 top-48 rounded shadow-sm   gradient-border-thin">
                <div className="bg-[#1F1B5A] icon-hover  w-[51px] h-[51px] flex justify-center items-center  rounded">
                  <Image
                    src="/images/step3.svg"
                    alt="Icon 2"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
              <div className="absolute right-[150px] top-36 rounded shadow-sm   gradient-border-thin">
                <div className="bg-[#1F1B5A] icon-hover  w-[51px] h-[51px] flex justify-center items-center  rounded">
                  <Image
                    src="/images/step2.svg"
                    alt="Icon 2"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
              <div className="absolute sm:right-[350px] sm:top-20 top-24 rounded-lg shadow-sm   gradient-border-thin">
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

export default StepSection;
