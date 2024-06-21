export default function Innovation() {
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
    <section className="bg-gradient-to-r from-[#401D60] via-[#271A73] to-[#1F1B5A] py-20 px-8">
      <div className="container w-1/2 mx-auto text-center">
        <h2 className="text-4xl  font-bold text-[#62D89F] mb-4 font-trebuchet">
          Fueling Innovation by the Numbers
        </h2>

        <div className="flex  flex-row justify-center items-center space-y-0 md:space-x-24">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <span className="text-2xl font-bold text-white font-trebuchet">
                {metric.value}
              </span>
              <p className="font-light text-base text-white mt-2 font-roboto">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="container w-1/2 mt-24 mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#62D89F]  font-trebuchet mb-4">
          We Firmly Believe
        </h2>
        <p className="text-xl   text-white font-light mb-12 font-roboto">
          Technology holds the key to revolutionizing the financial market for
          healthcare. Our mission is to develop cutting-edge technology that
          seamlessly connects healthcare providers and lenders, ultimately
          leading to improved financing outcomes for all involved
        </p>
      </div>
    </section>
  );
}
