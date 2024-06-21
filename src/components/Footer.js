// src/components/Footer.js
export default function Footer() {
  return (
    //bg-gradient-to-r from-[#401D60] via-[#271A73] to-[#1F1B5A]
    //bg-gradient-to-r from-[#402580] via-[#251972] to-[#090D2F]
    <footer className="bg-gradient-to-r from-[#401D60] via-[#271A73] to-[#1F1B5A] py-8 px-8 text-white">
      <div className="container mx-auto text-center">
        <div className=" pb-4 mb-4">
          <h2 className="text-2xl font-semibold mb-4 font-roboto">
            Contact Info
          </h2>
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-12">
            <div>
              <p className="font-light text-base font-roboto">Address</p>
              <p className="font-light text-base font-roboto">
                1031 Ives Dairy Road
              </p>
              <p className="font-light text-base font-roboto">
                Miami, Florida 33179
              </p>
            </div>
            <div>
              <p className="font-light text-base font-roboto">Phone</p>
              <p className="font-light text-base font-roboto">(786) 656-4730</p>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <p className="font-light text-base font-roboto">
            Hours of Operations
          </p>
          <p className="font-light text-base font-roboto">
            Monday - Friday 9:00am-5:30pm est
          </p>
        </div>
        <div className="mt-4">
          <p className="font-light text-base font-roboto">
            &copy; 2024 Finmed INC. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
