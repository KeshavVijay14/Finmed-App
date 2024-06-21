export default function MetricsSection() {
  const metrics = [
    {
      value: "65M+",
      label: "Healthcare Claims Processed",
    },
    {
      value: "40M+",
      label: "Securely Financed",
    },
    {
      value: "130M+",
      label: "Data Points Analyzed",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-[#401D60] via-[#271A73] to-[#1F1B5A]  py-20 px-8">
      <div className="container w-1/2 mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#62D89F] mb-4 font-trebuchet">
          Striving to become the cornerstone of healthcare financial solutions
        </h2>
        <p className="text-lg   text-white font-light mb-12 font-roboto">
          Finmed makes alternative lending easy and attainable for the
          healthcare industry. Our team is dedicated to making sure both lenders
          and healthcare providers can connect both seamlessly and securely.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-24">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <span className="text-3xl font-bold text-white font-trebuchet">
                {metric.value}
              </span>
              <p className="font-light text-base text-white mt-2 font-roboto">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
