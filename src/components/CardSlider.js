import React, { useState } from "react";
import Image from "next/image";

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
    <section className="bg-gradient-to-r from-[#401D60] via-[#271A73] to-[#1F1B5A] py-20 flex justify-center">
      <div className="flex flex-col text-center w-[80%]  justify-between">
        <div className="w-1/2">
          <h2 className="text-2xl font-bold text-[#62D89F] mb-2 max-w-md font-trebuchet">
            A fully integrated suite of financial and healthcare solutions
          </h2>
          <p className="text-lg font-light text-white mb-12 max-w-md font-roboto">
            Unlock the potential of healthcare financing with Finmed, where
            cutting-edge financial technology meets the ever-evolving healthcare
            industry.
          </p>
        </div>
        <div className="flex justify-end mb-6 gap-4 ">
          <div
            onClick={handlePrev}
            className=" rounded-full p-2 px-3 bg-white cursor-pointer "
          >
            <Image
              src={"/images/arrowLeft.svg"}
              alt="arr-left"
              width={10}
              height={10}
            />
          </div>
          <div
            onClick={handleNext}
            className=" rounded-full p-2 px-3 bg-white cursor-pointer "
          >
            <Image
              src={"/images/arrowRight.svg"}
              alt="arr-right"
              width={10}
              height={10}
            />
          </div>
        </div>
        <div className="relative ">
          <div className="slider-container">
            <div
              className="slider-content"
              style={{ transform: `translateX(-${currentIndex * 320}px)` }}
            >
              {cards.map((card, index) => (
                <>
                  <div
                    key={index}
                    className={`card h-56 rounded-lg shadow-lg text-left bg-white p-4 relative overflow-hidden`}
                  >
                    <div
                      className={`w-full absolute top-0 left-0 ${card.bgClass}`}
                      style={{
                        height: "10px",
                        borderTopLeftRadius: "10px",
                        borderTopRightRadius: "10px",
                      }}
                    ></div>
                    <h3 className="text-xl font-bold text-black mb-2 font-roboto mt-2">
                      {card.title}
                    </h3>
                    <p className="text-black font-light text-base font-roboto">
                      {card.description}
                    </p>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardSlider;
