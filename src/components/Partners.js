import Image from "next/image";
import Separator from "./Separator";

export default function PartnersSection() {
  const partners = [
    { src: "/images/logo1.svg", alt: "Partner 1" },
    { src: "/images/logo2.svg", alt: "Partner 2" },
    { src: "/images/logo3.svg", alt: "Partner 3" },
    { src: "/images/logo4.svg", alt: "Partner 4" },
    { src: "/images/logo5.svg", alt: "Partner 5" },
    { src: "/images/logo6.svg", alt: "Partner 6" },
    { src: "/images/logo7.svg", alt: "Partner 7" },
    { src: "/images/logo8.svg", alt: "Partner 8" },
  ];

  const icons = [
    { src: "/images/connect.svg", alt: "Connect", label: "Connect" },
    { src: "/images/collect.svg", alt: "Collect", label: "Collect" },
    { src: "/images/analyze.svg", alt: "Analyze", label: "Analyze" },
    { src: "/images/deliver.svg", alt: "Deliver", label: "Deliver" },
  ];

  return (
    <section className="bg-gradient-to-r from-[#401D60] via-[#271A73] to-[#1F1B5A] py-20 px-8">
      <div className="container mx-auto flex flex-col items-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8 ">
          {partners.map((partner, index) => (
            <div key={index} className="px-16">
              <Image
                src={partner.src}
                alt={partner.alt}
                width={100}
                height={50}
                className="mx-auto"
              />
            </div>
          ))}
        </div>
        <div className="   py-20 px-8 flex justify-center w-full">
          <div className="separator  "></div>
        </div>
        <div className="flex flex-wrap justify-center items-center space-x-48">
          {icons.map((icon, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={icon.src}
                alt={icon.alt}
                width={30}
                height={30}
                className="mb-2"
              />
              <p className="text-white text-xl font-normal font-roboto">
                {icon.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
