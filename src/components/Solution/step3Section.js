import Image from "next/image";
const Step3Section = () => {
  return (
    <div className="bg-gradient-to-r from-[#401D60] via-[#271A73] to-[#1F1B5A] justify-center flex">
      <div className=" flex gap-10 w-[80%] items-center py-10 my-20">
        <div className="p-6 max-w-md ">
          <div className="flex justify-start items-center gap-3 mb-4">
            <Image
              src="/images/step1.svg"
              alt="Icon 2"
              width={16}
              height={16}
            />
            <div className="text-white text-2xl font-roboto font-semibold">
              V Score
            </div>
          </div>
          <div className="text-white   font-roboto font-thin text-sm">
            V Score utilizes a wide range of data points to score each client,
            ensuring their compatibility within our lending network.
          </div>
        </div>

        <div className="relative h-[440px] flex-grow">
          <svg
            width="400"
            height="400"
            viewBox="0 0 400 400"
            className="absolute right-[-280px] top-56"
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
              id="path3"
              d="M81.0001 166L80.9961 119.31L80.9961 47C80.9961 22.1472 60.8489 1.99999 35.9961 1.99999L2.00001 1.99999"
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
                <mpath href="#path3" />
              </animateMotion>
            </circle>
          </svg>
          <div className="absolute right-64 top-8 rounded shadow-sm p-3 border-0">
            <Image
              src="/images/step6.svg"
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
          <div className="absolute right-8 top-32 rounded shadow-sm p-3 border-0">
            <Image
              src="/images/step3.svg"
              alt="Icon 2"
              width={20}
              height={20}
            />
          </div>
          <div className="absolute right-[160px] bottom-8 rounded shadow-sm p-3 border-0">
            <Image
              src="/images/step2.svg"
              alt="Icon 2"
              width={20}
              height={20}
            />
          </div>
          <div className="absolute right-[360px] bottom-12 rounded shadow-sm p-3 border-0">
            <Image
              src="/images/step4.svg"
              alt="Icon 2"
              width={20}
              height={20}
            />
          </div>
          <div className="absolute right-4 bottom-0 rounded shadow-sm p-3 gradient-border">
            <Image
              src="/images/step1.svg"
              alt="Icon 2"
              width={20}
              height={20}
            />
          </div>
          <div className="absolute right-[420px] top-16 rounded shadow-sm p-3 border-0">
            <Image
              src="/images/step5.svg"
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

export default Step3Section;
