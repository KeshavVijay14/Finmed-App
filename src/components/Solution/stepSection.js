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
            }, 2000); // Start circle animation after 2 seconds
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
        <div className="  flex justify-center items-center" ref={ref}>
          <div className="w-[80%] flex items-center h-[100vh]">
            <div className="p-6 max-w-xl">
              <h1 className="text-4xl font-semibold mb-4 text-[#62D89F] max-w-xl font-roboto">
                A Fully Integrated Suite Of Financial And Healthcare Solutions
              </h1>
              <p className="font-thin text-lg text-white max-w-xl font-roboto">
                Mitigate risks, boost revenue, and lend to the healthcare
                industry more efficiently with our fully integrated platform.
                Use Finmed to handle all of your lending related needs,
                effectively manage risks, and expand your presence in the
                healthcare lending sector.
              </p>
            </div>
            <div className="relative h-[440px] w-[20px] flex-grow">
              {inViewState && (
                <>
                  <svg
                    ref={circleRefs[0]}
                    viewBox="0 0 300 400"
                    className="absolute w-[300px] right-[-42px] top-6"
                  >
                    <defs>
                      <linearGradient
                        id="lineGradient1"
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
                      id="stepPath-1"
                      d="M2 5H40.9448C65.7976 5 85.9448 22.1472 85.9448 47V72C85.9448 96.8528 106.092 117 130.945 117H177"
                      stroke="url(#lineGradient1)"
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
                        <mpath href="#stepPath-1" />
                      </animateMotion>
                    </circle>
                  </svg>

                  <svg
                    ref={circleRefs[1]}
                    viewBox="0 0 200 300"
                    className="absolute w-[200px] right-48 top-24"
                  >
                    <defs>
                      <linearGradient
                        id="lineGradient2"
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
                      id="stepPath-2"
                      d="M2 5H40.3536C65.2064 5 85.3536 22.1472 85.3536 47V158C85.3536 182.853 105.501 203 130.354 203H143"
                      stroke="url(#lineGradient2)"
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
                        <mpath href="#stepPath-2" />
                      </animateMotion>
                    </circle>
                  </svg>

                  <svg
                    ref={circleRefs[2]}
                    width="400"
                    height="400"
                    viewBox="0 0 400 400"
                    className="absolute right-8 top-40"
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
                      id="stepPath-3"
                      d="M371.5 1.5V58V58C371.5 80.0914 353.591 98 331.5 98H0.1"
                      stroke="url(#lineGradient3)"
                      strokeWidth="3"
                      fill="transparent"
                      strokeDasharray="600, 600"
                    >
                      <animate
                        attributeName="stroke-dasharray"
                        from="0, 600"
                        to="600, 0"
                        dur="1s"
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
                        <mpath href="#stepPath-3" />
                      </animateMotion>
                    </circle>
                  </svg>

                  <svg
                    ref={circleRefs[3]}
                    viewBox="0 0 300 300"
                    className="absolute w-[300px] right-[-80px] top-40"
                  >
                    <defs>
                      <linearGradient
                        id="lineGradient"
                        gradientUnits="userSpaceOnUse"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="1%" stopColor="#c670e7" />
                        <stop offset="31.69%" stopColor="#62d89f" />
                        <stop offset="71.42%" stopColor="#00a8ff" />
                        <stop offset="100%" stopColor="#1c2d5c" />
                      </linearGradient>
                    </defs>
                    <path
                      id="stepPath-4"
                      d="M36 2H73.8525C99.1278 2 119.446 22.811 118.84 48.079L115.553 185.079C114.968 209.504 114.9988 229 95.5664 229H34C16.3269 229 6 224.673 4 187V168"
                      stroke="url(#lineGradient)"
                      strokeWidth="3"
                      fill="transparent"
                      strokeDasharray="600, 600"
                    >
                      <animate
                        attributeName="stroke-dasharray"
                        from="0, 600"
                        to="600, 0"
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
                        <mpath href="#stepPath-4" />
                      </animateMotion>
                    </circle>
                  </svg>
                </>
              )}
              <div className="absolute right-64 top-0 rounded shadow-sm   gradient-border-thin">
                <div className="bg-[#1F1B5A]  w-[51px] h-[51px] flex justify-center items-center  rounded">
                  <Image
                    src="/images/step5.svg"
                    alt="Icon 2"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
              <div className="absolute right-8 top-28 rounded shadow-sm   gradient-border-thin">
                <div className="bg-[#1F1B5A]  w-[51px] h-[51px] flex justify-center items-center  rounded">
                  <Image
                    src="/images/step1.svg"
                    alt="Icon 2"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
              <div className="absolute right-[205px] bottom-28 rounded shadow-sm   gradient-border-thin">
                <div className="bg-[#1F1B5A]  w-[51px] h-[51px] flex justify-center items-center  rounded">
                  <Image
                    src="/images/step4.svg"
                    alt="Icon 2"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
              <div className="absolute right-[430px] bottom-40 rounded shadow-sm   gradient-border-thin">
                <div className="bg-[#1F1B5A]  w-[51px] h-[51px] flex justify-center items-center  rounded">
                  <Image
                    src="/images/step3.svg"
                    alt="Icon 2"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
              <div className="absolute right-[185px] bottom-64 rounded shadow-sm   gradient-border-thin">
                <div className="bg-[#1F1B5A]  w-[51px] h-[51px] flex justify-center items-center  rounded">
                  <Image
                    src="/images/step2.svg"
                    alt="Icon 2"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
              <div className="absolute right-[390px] top-16 rounded-lg shadow-sm   gradient-border-thin">
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

export default StepSection;
