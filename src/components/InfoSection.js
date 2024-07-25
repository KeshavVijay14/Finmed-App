export default function InfoSection() {
  return (
    <section className=" relative mt-100  [background:linear-gradient(180deg,_rgba(28,_45,_92,_0),_#081a49_29.5%,_rgba(9,_26,_73,_0.99)_77%,_rgba(28,_45,_92,_0))]  flex justify-center items-center py-16 px-8">
      <div className="w-[60%] h-[500px]   flex flex-col justify-center">
        <div className="flex flex-col item-start gap-16">
          <div className="flex gap-4 items-end justify-start">
            <div className="gradient-border-purple"></div>
            <div>
              <h3 className="text-white text-xl font-bold mt-4 font-roboto">
                What is Finmed?
              </h3>
              <p className="text-white text-sm font-thin max-w-xs font-roboto mt-1">
                Finmed is a financial platform designed for the healthcare
                industry. To help connect lenders to healthcare providers.
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-end   justify-end">
            <div className="gradient-border-green"></div>
            <div>
              <h3 className="text-white text-xl font-bold mt-4  font-roboto">
                How does it work?
              </h3>
              <p className="text-white text-sm font-thin max-w-xs font-roboto mt-1">
                We ingest and analyze thousands of data points accurately
                forecasting the outcomes of healthcare claims.
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-end justify-start">
            <div className="gradient-border-blue"></div>
            <div>
              <h3 className="text-white text-xl font-bold mt-4  font-roboto">
                Who is Finmed?
              </h3>
              <p className="text-white text-sm font-thin max-w-xs font-roboto mt-1">
                We are a company on a mission to disrupt and innovate the
                intersection of finance and healthcare, eliminating traditional
                challenges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
