import Image from "next/image";
import { InView } from "react-intersection-observer";

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
    <InView triggerOnce threshold={1}>
      {({ inView, ref, entry }) => (
        <section
          className="bg-gradient-to-r from-[#401D60] via-[#271A73] to-[#1F1B5A] py-20 px-8"
          ref={ref}
        >
          <div className="container mx-auto mb-20 flex flex-col items-center">
            <div
              className={`grid grid-cols-2 md:grid-cols-4 gap-8 mb-8 ${
                inView ? "animate-move-opacity" : ""
              }`}
            >
              {partners.map((partner, index) => (
                <div key={index} className="px-16 flex">
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
            <div className="py-20 px-8 flex justify-center w-full">
              <div className="separator  "></div>
            </div>
            <div
              className={`w-[60%] flex justify-between items-center ${
                inView ? "animate-move-opacity" : ""
              }`}
            >
              {icons.map((icon, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-between items-center"
                >
                  <div className=" ">
                    <Image
                      src={icon.src}
                      alt={icon.alt}
                      width={30}
                      height={30}
                      className="mb-2"
                    />
                  </div>
                  <div className={`${index % 2 !== 0 && "mt-3"}`}>
                    <p className="text-white text-xl font-normal font-roboto">
                      {icon.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </InView>
  );
}
