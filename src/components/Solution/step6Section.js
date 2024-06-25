import Image from "next/image";
const Step6Section = () => {
  return (
    <div className="bg-gradient-to-r from-[#401D60] via-[#271A73] to-[#1F1B5A] justify-center flex">
      <div className=" flex gap-10 w-[80%] items-center py-10 my-20">
        <div className="p-6 max-w-md ">
          <div className="flex justify-start items-center gap-3 mb-4">
            <Image
              src="/images/step2.svg"
              alt="Icon 2"
              width={16}
              height={16}
            />
            <div className="text-white text-2xl font-roboto font-semibold">
              Lender Network
            </div>
          </div>
          <div className="text-white   font-roboto font-thin text-sm">
            Discover our expansive network of banks and lenders, all eager to
            participate in the healthcare lending market. Each member can select
            their unique criteria for desired credit profiles. Clients meeting
            these criteria are seamlessly connected, streamlining the lending
            process.
          </div>
        </div>

        <div className="relative h-[440px] flex-grow">
          <svg
            width="400"
            height="400"
            viewBox="0 0 400 400"
            className="absolute right-[80px] top-36"
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
              id="path6"
              d="M1.99989 166L2.00389 119.31L2.00389 47C2.00389 22.1472 22.1511 1.99998 47.0039 1.99996L81 1.99994"
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
                <mpath href="#path6" />
              </animateMotion>
            </circle>
          </svg>
          <div className="absolute right-36 top-8 rounded shadow-sm p-3  border-0">
            <Image
              src="/images/step1.svg"
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
          <div className="absolute right-12 top-48 rounded shadow-sm p-3  border-0">
            <Image
              src="/images/step3.svg"
              alt="Icon 2"
              width={20}
              height={20}
            />
          </div>
          <div className="absolute right-[300px] bottom-12 rounded shadow-sm p-3  border-0">
            <Image
              src="/images/step5.svg"
              alt="Icon 2"
              width={20}
              height={20}
            />
          </div>
          <div className="absolute right-[450px] bottom-20 rounded shadow-sm p-3  gradient-border">
            <Image
              src="/images/step2.svg"
              alt="Icon 2"
              width={20}
              height={20}
            />
          </div>
          <div className="absolute right-32 bottom-16 rounded shadow-sm p-3  border-0">
            <Image
              src="/images/step6.svg"
              alt="Icon 2"
              width={20}
              height={20}
            />
          </div>
          <div className="absolute right-[360px] top-16 rounded shadow-sm p-3  border-0">
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
  );
};

export default Step6Section;
