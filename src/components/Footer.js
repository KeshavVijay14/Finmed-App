// src/components/Footer.js
import { InView } from "react-intersection-observer";
export default function Footer() {
  return (
    //bg-gradient-to-r from-[#401D60] via-[#271A73] to-[#1F1B5A]
    //bg-gradient-to-r from-[#402580] via-[#251972] to-[#090D2F]
    <InView triggerOnce threshold={0.5}>
      {({ inView, ref, entry }) => (
        <footer
        className="bg-gradient-to-r from-[#401D60] via-[#271A73] to-[#1F1B5A] py-8 px-4 md:px-8 text-white"
        ref={ref}
      >
        <div
          className={`container mx-auto text-center ${
            inView ? "animate-move-opacity" : ""
          }`}
        >
          <div className="pb-4 mb-4">
            <h2 className="text-xl font-semibold mb-4 font-roboto">Contact Info</h2>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-12">
              <div className="flex flex-col items-center md:items-start">
                <p className="font-thin text-sm font-roboto my-2">Address</p>
                <p className="font-thin text-sm font-roboto my-2">
                  1031 Ives Dairy Road
                </p>
                <p className="font-thin text-sm font-roboto my-2">
                  Miami, Florida 33179
                </p>
              </div>
              <div className="flex flex-col items-center md:items-start">
                <p className="font-thin text-sm font-roboto my-2">Phone</p>
                <p className="font-thin text-sm font-roboto my-2">
                  (786) 656-4730
                </p>
              </div>
            </div>
          </div>
          <div>
            <p className="font-thin text-sm font-roboto my-4">Hours of Operations</p>
            <p className="font-thin text-sm font-roboto my-4">
              Monday - Friday 9:00am-5:30pm est
            </p>
          </div>
          <div>
            <p className="font-thin text-sm font-roboto my-4">
              &copy; 2024 Finmed INC. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
      
      )}
    </InView>
  );
}
