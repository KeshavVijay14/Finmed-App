import Image from "next/image";
const Step2Section = () => {
  return (
    <div className="bg-gradient-to-r from-[#401D60] via-[#271A73] to-[#1F1B5A] justify-center flex">
      <div className=" flex gap-10 w-[80%] items-center py-10 my-20">
        <div className="p-6 max-w-md ">
          <div className="flex justify-start items-center gap-3 mb-4">
            <Image
              src="/images/step5.svg"
              alt="Icon 2"
              width={16}
              height={16}
            />
            <div className="text-white text-2xl font-roboto font-semibold">
              Hive
            </div>
          </div>
          <div className="text-white text-base font-roboto font-light">
            Designed with security, efficiency, and compliance in mind. Hive
            ensures the smooth and reliable exchange of healthcare claim data
            between medical billing companies and our financial technology.
          </div>
        </div>

        <div className="relative h-[440px] flex-grow">
          <svg
            width="400"
            height="400"
            viewBox="0 0 400 400"
            className="absolute right-[-100px] top-72"
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
              id="path2"
              d="M97.5 2V36.5V107V107C97.5 125.225 82.7254 140 64.5 140H1.5"
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
                <mpath href="#path2" />
              </animateMotion>
            </circle>
          </svg>
          <div className="absolute right-72 top-4 rounded shadow-sm p-3 border-0">
            <Image
              src="/images/step1.svg"
              alt="Icon 2"
              width={20}
              height={20}
            />
          </div>
          <div className="absolute right-20 top-32">
            <Image
              src="/images/hive.svg"
              alt="Icon 2"
              width={320}
              height={160}
            />
          </div>
          <div className="absolute right-4 top-32 rounded shadow-sm p-3 border-0">
            <Image
              src="/images/step3.svg"
              alt="Icon 2"
              width={20}
              height={20}
            />
          </div>
          <div className="absolute right-[300px] bottom-0 rounded shadow-sm p-3 gradient-border">
            <Image
              src="/images/step5.svg"
              alt="Icon 2"
              width={20}
              height={20}
            />
          </div>
          <div className="absolute right-[480px] bottom-8 rounded shadow-sm p-3 border-0">
            <Image
              src="/images/step4.svg"
              alt="Icon 2"
              width={20}
              height={20}
            />
          </div>
          <div className="absolute right-24 bottom-12 rounded shadow-sm p-3 border-0">
            <Image
              src="/images/step2.svg"
              alt="Icon 2"
              width={20}
              height={20}
            />
          </div>
          <div className="absolute right-[460px] top-8 rounded shadow-sm p-3 border-0">
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

export default Step2Section;
