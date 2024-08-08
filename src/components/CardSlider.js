import React, { useRef, useState } from "react";
import Image from "next/image";
import { InView } from "react-intersection-observer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CardSlider = () => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const cards = [
    {
      title: "copay.com",
      description:
        "Introducing Copay com, the ultimate one-stop lending platform designed exclusively for healthcare providers in search of financial solutions.",
      bgClass: "#C670E7",
    },
    {
      title: "Hive",
      description:
        "Designed with security, efficiency, and compliance in mind. Hive ensures the smooth and reliable exchange of healthcare claim data between medical billing companies and our financial technology.",
      bgClass: "#62D89F",
    },
    {
      title: "V Score",
      description:
        "V Score utilizes a wide range of data points to score each client, ensuring their compatibility within our lending network.",
      bgClass: "#00A8FF",
    },
    {
      title: "Pulse",
      description:
        "Pulse serves as the pulse of Finmed, recording and transforming data into actionable business intelligence to inform our decisions on client interactions, claim processing, and company strategies with precision.",
      bgClass: "#C670E7",
    },
    {
      title: "8200",
      description:
        "8200 is advanced monitoring and fraud detection system. Utilizing cutting edge technology, we safeguard your transactions in real-time, ensuring unparalleled security and peace of mind for all of our clients.",
      bgClass: "#62D89F",
    },
    {
      title: "Lender Network",
      description:
        "Discover our expansive network of banks and lenders, all eager to participate in the healthcare lending market. Each member can select their unique criteria for desired credit profiles. Clients meeting these criteria are seamlessly connected, streamlining the lending process.",
      bgClass: "#00A8FF",
    },
  ];

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    arrows: false,
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const isNextDisabled = () => {
    return currentSlide === cards.length - settings.slidesToShow;
  };

  const isPrevDisabled = () => {
    return currentSlide === 0;
  };

  return (
    <InView triggerOnce threshold={1}>
      {({ ref }) => (
        <section className="relative flex justify-center" ref={ref}>
          <div className="flex flex-col mt-20 text-center w-[80%] justify-between">
            <div className="flex flex-col items-start text-start">
              <h2 className="text-3xl font-bold text-[#62D89F] max-w-lg mb-2 font-trebuchet">
                A Fully Integrated Suite of Financial and Healthcare Solutions
              </h2>
              <p className="text-sm font-thin text-white mb-12 max-w-lg font-roboto">
                Unlock the potential of healthcare financing with Finmed, where
                cutting-edge financial technology meets the ever-evolving
                healthcare industry.
              </p>
            </div>
            <div className="flex justify-end mb-6 gap-4">
              <button
                onClick={handlePrev}
                disabled={isPrevDisabled()}
                className={`rounded-full p-2 px-3 bg-white cursor-pointer ${
                  isPrevDisabled() ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                <Image
                  src={"/images/arrowleft.svg"}
                  alt="arr-left"
                  width={10}
                  height={10}
                />
              </button>
              <button
                onClick={handleNext}
                disabled={isNextDisabled()}
                className={`rounded-full p-2 px-3 bg-white cursor-pointer ${
                  isNextDisabled() ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                <Image
                  src={"/images/arrowRight.svg"}
                  alt="arr-right"
                  width={10}
                  height={10}
                />
              </button>
            </div>
            <div className="relative">
              <Slider ref={sliderRef} {...settings}>
                {cards.map((card, index) => (
                  <div
                    key={index}
                    className="w-full h-56 mx-2 rounded-lg shadow-lg text-left bg-white"
                  >
                    <div
                      className={`h-3 w-full rounded-t-lg ${
                        ((index === 0 || index === 3) && "bg-[#C670E7]") ||
                        ((index === 1 || index === 4) && "bg-[#62D89F]") ||
                        ((index === 2 || index === 5) && "bg-[#00A8FF]")
                      }`}
                    ></div>
                    <div className="p-2">
                      <h3 className="text-xl font-bold text-black mb-2 font-roboto mt-2 pl-4">
                        {card.title}
                      </h3>
                      <p className="text-black font-thin text-xs  xl:text-sm font-roboto pl-4">
                        {card.description}
                      </p>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </section>
      )}
    </InView>
  );
};

export default CardSlider;
