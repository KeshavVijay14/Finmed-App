import Image from "next/image";

const StepSection = () => {
  return (
    <div className="bg-gradient-to-r from-[#401D60] via-[#271A73] to-[#1F1B5A] flex justify-center items-center py-32">
      <div className="w-[80%] flex justify-between">
        <div>
          <h1 className="text-4xl font-semibold mb-4 text-[#62D89F] max-w-md font-roboto">
            A fully integrated suite of financial and healthcare solutions
          </h1>
          <p className="font-thin text-sm text-white max-w-lg font-roboto">
            Mitigate risks, boost revenue, and lend to the healthcare industry
            more efficiently with our fully integrated platform. Use Finmed to
            handle all of your lending related needs, effectively manage risks,
            and expand your presence in the healthcare lending sector.
          </p>
        </div>
        <div className="relative h-[440px] flex-grow">
          <svg
            width="400"
            height="400"
            viewBox="0 0 400 400"
            className="absolute right-[-140px] top-6"
          >
            <defs>
              <linearGradient
                id="lineGradient"
                gradientTransform="rotate(153.88)"
              >
                <stop offset="0%" stopColor="#C670E7" />
                <stop offset="33.34%" stopColor="#62D89F" />
                <stop offset="75.15%" stopColor="#00A8FF" />
                <stop offset="105.85%" stopColor="#1C2D5C" />
              </linearGradient>
            </defs>
            <path
              id="stepPath-1"
              d="M2 2H40.9448C65.7976 2 85.9448 22.1472 85.9448 47V72C85.9448 96.8528 106.092 117 130.945 117H177"
              stroke="url(#lineGradient)"
              strokeWidth="3"
              fill="transparent"
            />
            <circle cx="" cy="0" r="5" fill="#D360FF">
              <animateMotion
                repeatCount="indefinite"
                dur="5s"
                keyPoints="0;1"
                keyTimes="0;1"
              >
                <mpath href="#stepPath-1" />
              </animateMotion>
            </circle>
          </svg>
          <svg
            width="400"
            height="400"
            viewBox="0 0 400 400"
            className="absolute right-0 top-24"
          >
            <defs>
              <linearGradient
                id="lineGradient"
                gradientTransform="rotate(153.88)"
              >
                <stop offset="0%" stopColor="#C670E7" />
                <stop offset="33.34%" stopColor="#62D89F" />
                <stop offset="75.15%" stopColor="#00A8FF" />
                <stop offset="105.85%" stopColor="#1C2D5C" />
              </linearGradient>
            </defs>
            <path
              id="stepPath-2"
              d="M2 2H40.3536C65.2064 2 85.3536 22.1472 85.3536 47V158C85.3536 182.853 105.501 203 130.354 203H143"
              stroke="url(#lineGradient)"
              strokeWidth="3"
              fill="transparent"
            />
            <circle cx="" cy="0" r="5" fill="#D360FF">
              <animateMotion
                repeatCount="indefinite"
                dur="5s"
                keyPoints="0;1"
                keyTimes="0;1"
              >
                <mpath href="#stepPath-2" />
              </animateMotion>
            </circle>
          </svg>
          <svg
            width="400"
            height="400"
            viewBox="0 0 400 400"
            className="absolute right-8 top-40"
          >
            <defs>
              <linearGradient
                id="lineGradient"
                gradientTransform="rotate(153.88)"
              >
                <stop offset="0%" stopColor="#C670E7" />
                <stop offset="33.34%" stopColor="#62D89F" />
                <stop offset="75.15%" stopColor="#00A8FF" />
                <stop offset="105.85%" stopColor="#1C2D5C" />
              </linearGradient>
            </defs>
            <path
              id="stepPath-3"
              d="M371.5 1.5V58V58C371.5 80.0914 353.591 98 331.5 98H1.5"
              stroke="url(#lineGradient)"
              strokeWidth="3"
              fill="transparent"
            />
            <circle cx="" cy="0" r="5" fill="#D360FF">
              <animateMotion
                repeatCount="indefinite"
                dur="5s"
                keyPoints="0;1"
                keyTimes="0;1"
              >
                <mpath href="#stepPath-3" />
              </animateMotion>
            </circle>
          </svg>
          <svg
            width="400"
            height="400"
            viewBox="0 0 400 400"
            className="absolute right-[-170px] top-40"
          >
            <defs>
              <linearGradient
                id="lineGradient"
                gradientTransform="rotate(153.88)"
              >
                <stop offset="0%" stopColor="#C670E7" />
                <stop offset="33.34%" stopColor="#62D89F" />
                <stop offset="75.15%" stopColor="#00A8FF" />
                <stop offset="105.85%" stopColor="#1C2D5C" />
              </linearGradient>
            </defs>
            <path
              id="stepPath-4"
              d="M36 2H73.8525C99.1278 2 119.446 22.811 118.84 48.079L115.553 185.079C114.968 209.504 94.9988 229 70.5664 229H34C16.3269 229 2 214.673 2 197V168"
              stroke="url(#lineGradient)"
              strokeWidth="3"
              fill="transparent"
            />
            <circle cx="" cy="0" r="5" fill="#D360FF">
              <animateMotion
                repeatCount="indefinite"
                dur="5s"
                keyPoints="0;1"
                keyTimes="0;1"
              >
                <mpath href="#stepPath-4" />
              </animateMotion>
            </circle>
          </svg>

          <div className="absolute right-64 top-0 rounded shadow-sm p-3 gradient-border">
            <Image
              src="/images/step5.svg"
              alt="Icon 2"
              width={20}
              height={20}
            />
          </div>

          <div className="absolute right-8 top-28 rounded shadow-sm p-3 gradient-border">
            <Image
              src="/images/step1.svg"
              alt="Icon 2"
              width={20}
              height={20}
            />
          </div>
          <div className="absolute right-[205px] bottom-28 rounded shadow-sm p-3 gradient-border">
            <Image
              src="/images/step4.svg"
              alt="Icon 2"
              width={20}
              height={20}
            />
          </div>
          <div className="absolute right-[430px] bottom-40 rounded shadow-sm p-3 gradient-border">
            <Image
              src="/images/step3.svg"
              alt="Icon 2"
              width={20}
              height={20}
            />
          </div>
          <div className="absolute right-48 bottom-64 rounded shadow-sm p-3 gradient-border">
            <Image
              src="/images/step2.svg"
              alt="Icon 2"
              width={20}
              height={20}
            />
          </div>
          <div className="absolute right-[400px] top-16 rounded shadow-sm p-3 gradient-border">
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
  );
};

export default StepSection;
