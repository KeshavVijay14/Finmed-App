import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-[#401D60] via-[#271A73] to-[#1F1B5A] flex justify-center items-center py-32">
      <div className="w-[80%] flex justify-between">
        <div>
          <h1 className="text-4xl font-bold mb-4 text-[#62D89F] font-trebuchet">
            Creating endless lending possibilities
          </h1>
          <p className="font-thin text-sm text-white max-w-lg font-roboto">
            Finmed is spearheading a revolution in both the financial and
            healthcare industries. Our solutions empower financial institutions
            and lenders with access to a secure platform. With Finmed, you can
            accurately establish the value of healthcare insurance receivables
            while streamlining approval and onboarding processes.
          </p>
        </div>
        <div className="grid grid-cols-3 py-8 pl-32 pr-20 max-w-md gradient-background">
          <Image src="/images/step1.svg" alt="Icon 1" width={20} height={20} />
          <Image src="/images/step2.svg" alt="Icon 2" width={20} height={20} />
          <Image src="/images/step3.svg" alt="Icon 3" width={20} height={20} />
          <Image src="/images/step4.svg" alt="Icon 4" width={20} height={20} />
          <Image src="/images/step5.svg" alt="Icon 5" width={20} height={20} />
          <Image src="/images/step6.svg" alt="Icon 6" width={20} height={20} />
        </div>
      </div>
      
    </div>
  );
};

export default HeroSection;
