import React, { useState } from "react";
import Image from "next/image";
import { InView } from "react-intersection-observer";

const CardSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    {
      title: "copay.com",
      description:
        "Introducing Copay com, the ultimate one-stop lending platform designed exclusively for healthcare providers in search of financial solutions.",
      bgClass: "bg-purple-500",
    },
    {
      title: "Hive",
      description:
        "Designed with security, efficiency, and compliance in mind. Hive ensures the smooth and reliable exchange of healthcare claim data between medical billing companies and our financial technology.",
      bgClass: "bg-green-500",
    },
    {
      title: "V Score",
      description:
        "V Score utilizes a wide range of data points to score each client, ensuring their compatibility within our lending network.",
      bgClass: "bg-blue-500",
    },
    {
      title: "Pulse",
      description:
        "Pulse serves as the pulse of Finmed, recording and transforming data into actionable business intelligence to inform our decisions on client interactions, claim processing, and company strategies with precision.",
      bgClass: "bg-purple-300",
    },
    {
      title: "8200",
      description:
        "8200 is advanced monitoring and fraud detection system. Utilizing cutting edge technology, we safeguard your transactions in real-time, ensuring unparalleled security and peace of mind for all of our clients.",
      bgClass: "bg-purple-500",
    },
    {
      title: "Lender Network",
      description:
        "Discover our expansive network of banks and lenders, all eager to participate in the healthcare lending market. Each member can select their unique criteria for desired credit profiles. Clients meeting these criteria are seamlessly connected, streamlining the lending process.",
      bgClass: "bg-green-500",
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <InView triggerOnce threshold={1}>
      {({ ref }) => (
        <section className=" relative   flex justify-center" ref={ref}>
          <div className="flex flex-col mt-20 text-center w-[80%] justify-between">
            <div className="flex flex-col items-start text-start">
              <h2 className="text-3xl font-bold text-[#62D89F] max-w-lg mb-2 font-trebuchet">
                A Fully Integrated Suite Of Financial And Healthcare Solutions
              </h2>
              <p className="text-sm font-thin text-white mb-12 max-w-lg font-roboto">
                Unlock the potential of healthcare financing with Finmed, where
                cutting-edge financial technology meets the ever-evolving
                healthcare industry.
              </p>
            </div>
            <div className="flex justify-end mb-6 gap-4">
              <div
                onClick={handleNext}
                className="rounded-full p-2 px-3 bg-white cursor-pointer"
              >
                <Image
                  src={"/images/arrowleft.svg"}
                  alt="arr-left"
                  width={10}
                  height={10}
                />
              </div>
              <div
                onClick={handlePrev}
                className="rounded-full p-2 px-3 bg-white cursor-pointer"
              >
                <Image
                  src={"/images/arrowRight.svg"}
                  alt="arr-right"
                  width={10}
                  height={10}
                />
              </div>
            </div>
            <div className="relative">
              <div className="slider-container">
                <div
                  className="slider-content flex transition-transform duration-300"
                  style={{
                    transform: `translateX(-${currentIndex * "340"}px)`,
                    width: `${cards.length * "340"}px`,
                  }}
                >
                  {cards.map((card, index) => (
                    <div
                      key={index}
                      className={`card h-56  rounded-lg shadow-lg text-left bg-white p-4 relative overflow-hidden`}
                    >
                      <div
                        className={`w-full absolute top-0 left-0 ${card.bgClass}`}
                        style={{
                          height: "10px",
                        }}
                      ></div>
                      <h3 className="text-xl font-bold text-black mb-2 font-roboto mt-6 pl-4">
                        {card.title}
                      </h3>
                      <p className="text-black font-thin text-sm font-roboto pl-4">
                        {card.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </InView>
  );
};

export default CardSlider;
