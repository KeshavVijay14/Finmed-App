/* eslint-disable react/no-unescaped-entities */
// components/PartnerForm.js
import { InView } from "react-intersection-observer";
export default function PartnerForm() {
  return (
    <InView triggerOnce threshold={0.5}>
      {({ inView, ref, entry }) => (
        <div className="bg-gradient-to-r from-[#401D60] via-[#271A73] to-[#1F1B5A]">
          <div className="flex justify-center items-center h-screen" ref={ref}>
            <div
              className={`w-[80%] flex justify-around  items-center  ${
                inView ? "animate-scale-opacity-z" : ""
              }`}
            >
              <div className="w-[1/2]">
                <h1 className="text-4xl font-bold text-[#62D89F] mb-4 font-trebuchet">
                  Become A Finmed Partner
                </h1>
                <p className="text-white mb-6 font-light text-base font-roboto">
                  Partner with us to grow your business and offer your clients
                  the financial solutions they are looking for.
                  <br />
                  Give your customers financial products you'll both love.
                </p>
              </div>
              <div className="w-[1/2] p-8 bg-opacity-10 bg-white border border-blue-300 rounded-xl shadow-lg">
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="First name"
                      className="w-full p-2 border border-blue-300 rounded-md bg-opacity-20 bg-white text-white"
                    />
                    <input
                      type="text"
                      placeholder="Last name"
                      className="w-full p-2 border border-blue-300 rounded-md bg-opacity-20 bg-white text-white"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Phone number"
                      className="w-full p-2 border border-blue-300 rounded-md bg-opacity-20 bg-white text-white"
                    />
                    <select className="w-full p-2 border border-blue-300 rounded-md bg-opacity-20 bg-white text-white">
                      <option value="partner type" disabled selected>
                        Partner type
                      </option>
                    </select>
                  </div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-2 border border-blue-300 rounded-md bg-opacity-20 bg-white text-white"
                  />
                  <input
                    type="text"
                    placeholder="Company name"
                    className="w-full p-2 border border-blue-300 rounded-md bg-opacity-20 bg-white text-white"
                  />
                  <textarea
                    placeholder="How can we help you?"
                    className="w-full p-2 border border-blue-300 rounded-md bg-opacity-20 bg-white text-white"
                  ></textarea>
                  <div className="w-full flex justify-center">
                    <button
                      type="submit"
                      className=" px-6 py-2 mt-4 font-semibold  rounded-md bg-opacity-20 bg-white text-white"
                    >
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="py-32 px-8 flex justify-center w-full">
            <div className="separator"></div>
          </div>
        </div>
      )}
    </InView>
  );
}
