import React, { useState, useEffect } from "react";
import { InView } from "react-intersection-observer";

const MetricItem = ({ value, label, inView }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = parseInt(value, 10);
      if (start === end) return;

      let totalDuration = 2000;
      let incrementTime = (totalDuration / end) * 5;

      let timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [inView, value]);

  return (
    <div className="text-center">
      <span className="text-2xl font-bold text-white font-trebuchet">
        {count}M+
      </span>
      <p className="font-light text-base text-white mt-2 font-roboto">
        {label}
      </p>
    </div>
  );
};

export default function Innovation() {
  const metrics = [
    {
      value: "65",
      label: "Healthcare Claims Processed",
    },
    {
      value: "40",
      label: "Securely Financed",
    },
    {
      value: "130",
      label: "Data Points Analyzed",
    },
  ];

  return (
    <InView triggerOnce threshold={0.5}>
      {({ inView, ref }) => (
        <section className="relative pt-48 py-20" ref={ref}>
          <div className="container mx-auto text-center px-4 md:px-0">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#62D89F] mb-4 font-trebuchet">
              Fueling Innovation By The Numbers
            </h2>

            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 lg:space-x-24 py-8 md:py-16">
              {metrics.map((metric, index) => (
                <MetricItem
                  key={index}
                  value={metric.value}
                  label={metric.label}
                  inView={inView}
                />
              ))}
            </div>
          </div>

          <div
            className={`w-full md:w-3/4 lg:w-1/2 mt-12 md:mt-24 mx-auto flex flex-col items-center py-10 md:py-20 ${
              inView ? "animate-move-opacity" : ""
            }`}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#62D89F] font-trebuchet mb-4">
              We Firmly Believe
            </h2>
            <p className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg text-center md:text-start text-white font-thin text-xs sm:text-sm mb-6 md:mb-12 font-roboto">
              Technology holds the key to revolutionizing the financial market
              for healthcare. Our mission is to develop cutting-edge technology
              that seamlessly connects healthcare providers and lenders,
              ultimately leading to improved financing outcomes for all
              involved.
            </p>
          </div>
        </section>
      )}
    </InView>
  );
}
