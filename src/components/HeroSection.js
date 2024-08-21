"use client";
import Image from "next/image";
import { InView } from "react-intersection-observer";

export default function HeroSection() {
  return (
    <InView triggerOnce threshold={0.5}>
      {({ inView, ref, entry }) => (
        <section className={`  flex justify-center  `} ref={ref}>
          <div
            className={`container flex flex-col md:flex-row px-4 md:px-0 items-center justify-around gap-0 md:gap-20 xl:gap-0 h-auto md:h-[100vh] ${
              inView ? "animate-scale-opacity-z" : ""
            }`}
          >
            <div className="mb-10 max-w-lg px-4">
              <h1 className="text-2xl md:text-3xl font-bold mb-6 text-[#62D89F] font-trebuchet">
                Innovative Financial Technology Revolutionizing The Healthcare
                Sector
              </h1>
              <p className="mb-8 text-base font-light text-white sm:max-w-sm md:max-w-md font-roboto">
                Unlock the potential of healthcare financing with Finmed, where
                cutting-edge financial technology meets the ever-evolving needs
                of the healthcare sector.
              </p>
              <button
                className={`text-white font-bold text-base border py-3 px-6 rounded ${
                  inView ? "inView-animate" : ""
                } button-hover font-trebuchet`}
              >
                Learn more
              </button>
            </div>

            <div
              className={`relative ml-12  md:ml-0 h-full flex items-center hover-scale px-8 md:px-0`}
            >
              <div className="absolute left-[-20px] md:left-[-80px] transform translate-y-16">
                <Image
                  src="/images/mobile-screen-view.svg"
                  alt="Mobile Dashboard"
                  width={180}
                  height={360}
                  className="w-full max-w-[200px] md:max-w-[450px] h-[200px] md:h-[350px]"
                />
              </div>
              <div>
                <Image
                  src="/images/web-view.svg"
                  alt="Desktop Dashboard"
                  width={500}
                  height={300}
                  className="w-full h-auto max-w-[400px] md:max-w-[450px]"
                />
              </div>
            </div>
          </div>
        </section>
      )}
    </InView>
  );
}
