export default function InfoSection() {
  return (
    <section className="bg-gradient-to-b  from-[#2B2465] via-[#081949] to-[#121D52] flex justify-center py-16 px-8">
      <div className="w-[60%]">
        <div className="flex gap-4 items-end justify-start w-full">
          <div className="gradient-border-purple"></div>
          <div>
            <h3 className="text-white text-xl font-bold mt-4 font-roboto">
              What is Finmed?
            </h3>
            <p className="text-white text-lg font-light max-w-md font-roboto">
              Finmed is a financial platform designed for the healthcare
              industry. To help connect lenders to healthcare providers.
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-end w-full justify-end">
          <div className="gradient-border-green"></div>
          <div>
            <h3 className="text-white text-xl font-bold mt-4  font-roboto">
              How does it work?
            </h3>
            <p className="text-white text-lg font-light max-w-md font-roboto">
              We ingest and analyze thousands of data points accurately
              forecasting the outcomes of healthcare claims.
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-end w-full">
          <div className="gradient-border-blue"></div>
          <div>
            <h3 className="text-white text-xl font-bold mt-4  font-roboto">
              Who is Finmed?
            </h3>
            <p className="text-white text-lg font-light max-w-md font-roboto">
              We are a company on a mission to disrupt and innovate the
              intersection of finance and healthcare, eliminating traditional
              challenges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
