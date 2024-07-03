/* eslint-disable react/no-unescaped-entities */
import { InView } from "react-intersection-observer";
const OurStory = () => {
  return (
    <InView triggerOnce threshold={0.5}>
      {({ inView, ref, entry }) => (
        <div
          className="pb-32 flex flex-col justify-center items-center  bg-gradient-to-r from-[#401D60] via-[#271A73] to-[#1F1B5A] text-white px-4"
          ref={ref}
        >
          <div
            className={`flex flex-col justify-center items-center ${
              inView ? "animate-move-opacity" : ""
            }`}
          >
            <h2 className="text-4xl font-bold mb-4 text-[#62D89F] font-trebuchet">
              Our story
            </h2>
            <p className="max-w-2xl text-start  text-sm font-thin leading-relaxed font-roboto">
              Born from a simple theory in 2022, Finmed swiftly evolved into a
              vital solution. Recognizing the challenges healthcare providers
              and lenders face due to the complex A/R. We embarked on a journey
              to develop software that could truly make a difference. Countless
              days were devoted to refining algorithms and scenarios until our
              software was ready.
              <br />
              <br />
              In late 2022, we successfully onboarded our first client onto
              Finmed's software. While we have much more to build, our
              commitment remains unwavering to pair all healthcare providers and
              lenders seamlessly. We're crafting something extraordinary here
              and eager to unveil our accomplishments to the world.
            </p>
          </div>
        </div>
      )}
    </InView>
  );
};

export default OurStory;
