import Image from "next/image";
import { InView } from "react-intersection-observer";

export default function PartnersSection() {
  const partners = [
    { src: "/images/logo-1.svg", alt: "Partner 1" },
    { src: "/images/logo-2.svg", alt: "Partner 2" },
    { src: "/images/logo-3.svg", alt: "Partner 3" },
    { src: "/images/logo-4.svg", alt: "Partner 4" },
    { src: "/images/logo-5.svg", alt: "Partner 5" },
    { src: "/images/logo-6.svg", alt: "Partner 6" },
    { src: "/images/logo-7.svg", alt: "Partner 7" },
    { src: "/images/logo-8.svg", alt: "Partner 8" },
  ];

  const icons = [
    { src: "/images/connect-1.svg", alt: "Connect", label: "Connect" },
    { src: "/images/collect-2.svg", alt: "Collect", label: "Collect" },
    { src: "/images/analyze-2.svg", alt: "Analyze", label: "Analyze" },
    { src: "/images/deliver-1.svg", alt: "Deliver", label: "Deliver" },
  ];

  return (
    <InView triggerOnce threshold={1}>
      {({ inView, ref, entry }) => (
        <section className="py-20 px-8" ref={ref}>
          <div className="container mx-auto  flex flex-col items-center justify-center">
            <div
              className={`flex flex-wrap ${
                inView ? "animate-move-opacity" : ""
              }`}
            >
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="w-1/2 md:w-1/4 p-8 flex items-center justify-center h-32"
                >
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
            <div className="py-32 px-8 flex justify-center w-full">
              <div className="separator"></div>
            </div>
            <div
              className={`w-full md:w-[60%] px-12 flex flex-wrap justify-between items-center ${
                inView ? "animate-move-opacity" : ""
              }`}
            >
              {icons.map((icon, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-center items-center text-center m-4 h-30 w-20"
                >
                  <div>
                    <Image
                      src={icon.src}
                      alt={icon.alt}
                      width={
                        index === 1 || index === 3 ? 50 : index === 0 ? 40 : 30
                      }
                      height={
                        index === 1 || index === 3 ? 50 : index === 0 ? 40 : 30
                      }
                    />
                  </div>
                  <div className={"mt-4"}>
                    <p className="text-white text-lg md:text-xl font-normal font-roboto">
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
