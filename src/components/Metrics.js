import { useEffect, useState } from "react";
import { InView } from "react-intersection-observer";

export default function MetricsSection() {
  const metrics = [
    {
      value: 65,
      label: "Healthcare Claims Processed",
    },
    {
      value: 40,
      label: "Securely Financed",
    },
    {
      value: 130,
      label: "Data Points Analyzed",
    },
  ];

  return (
    <InView triggerOnce threshold={0.5}>
      {({ inView, ref, entry }) => (
        <section
          className="bg-gradient-to-r from-[#401D60] via-[#271A73] to-[#1F1B5A]  py-20 px-8"
          ref={ref}
        >
          <div className="container w-1/2 mx-auto text-center">
            <div>
              <h2 className="text-4xl font-bold text-[#62D89F] mb-4 font-trebuchet">
                Striving To Become The Cornerstone Of Healthcare Financial
                Solutions
              </h2>
              <p className="text-white font-thin text-sm mb-24  font-roboto">
                Finmed makes alternative lending easy and attainable for the
                healthcare industry. Our team is dedicated to making sure both
                lenders and healthcare providers can connect both seamlessly and
                securely.
              </p>
            </div>
            <div className="flex w-full flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-0 ">
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
          <div className="py-32 px-8 flex justify-center w-full">
            <div className="separator"></div>
          </div>
        </section>
      )}
    </InView>
  );
}

function MetricItem({ value, label, inView }) {
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
    <div className="text-center item">
      <span className="text-2xl font-bold text-white font-trebuchet">
        {count}M+
      </span>
      <p className="font-thin w-80 text-sm text-white mt-2 font-roboto">
        {label}
      </p>
    </div>
  );
}
