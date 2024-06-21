import Image from "next/image";
const Step4Section = () => {
  return (
    <div className="bg-gradient-to-r from-[#401D60] via-[#271A73] to-[#1F1B5A] justify-center flex">
      <div className=" flex gap-10 w-[80%] items-center py-10 my-20">
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
          <div className="text-white text-base font-roboto font-light">
            The Pulse of Finmed. Reading, analyzing, and transforming data into
            actionable insights. It guides our decisions on client interactions,
            claims processing, and company strategies with precision.
          </div>
        </div>

        <div className="relative h-[440px] flex-grow">
          <svg
            width="400"
            height="400"
            viewBox="0 0 400 400"
            className="absolute right-[85px] top-7"
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
              id="path4"
              d="M2 1.5L36.5 1.5L107 1.5V1.5C125.225 1.49999 140 16.2746 140 34.5L140 97.5"
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
                <mpath href="#path4" />
              </animateMotion>
            </circle>
          </svg>
          <div className="absolute right-48 top-12 rounded shadow-sm p-3 border-0">
            <Image
              src="/images/step4.svg"
              alt="Icon 2"
              width={20}
              height={20}
            />
          </div>
          <div className="absolute right-20 top-32">
            <Image
              src="/images/co-pay.svg"
              alt="Icon 2"
              width={320}
              height={160}
            />
          </div>
          <div className="absolute right-4 top-40 rounded shadow-sm p-3 border-0">
            <Image
              src="/images/step5.svg"
              alt="Icon 2"
              width={20}
              height={20}
            />
          </div>
          <div className="absolute right-[320px] bottom-16 rounded shadow-sm p-3 border-0">
            <Image
              src="/images/step2.svg"
              alt="Icon 2"
              width={20}
              height={20}
            />
          </div>
          <div className="absolute right-[424px] bottom-32 rounded shadow-sm p-3 border-0">
            <Image
              src="/images/step1.svg"
              alt="Icon 2"
              width={20}
              height={20}
            />
          </div>
          <div className="absolute right-32 bottom-12 rounded shadow-sm p-3 border-0">
            <Image
              src="/images/step3.svg"
              alt="Icon 2"
              width={20}
              height={20}
            />
          </div>
          <div className="absolute right-[484px] top-0 rounded shadow-sm p-3 gradient-border">
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

export default Step4Section;
