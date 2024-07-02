import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-[#401D60] via-[#271A73] to-[#1F1B5A]    flex justify-center">
      <div className="container w-[80%] flex items-center justify-around  h-[100vh] ">
        <div className="mb-10  max-w-lg">
          <h1 className="text-4xl font-bold mb-6 text-[#62D89F] font-trebuchet">
            Innovative Financial Technology Revolutionizing the Healthcare
            Sector
          </h1>
          <p className="mb-8 text-base font-light text-white sm:max-w-sm  md:max-w-md   font-roboto">
            Unlock the potential of healthcare financing with Finmed, where
            cutting-edge financial technology meets the ever-evolving needs of
            the healthcare sector.
          </p>
          <button className="text-white font-bold text-base border py-3 px-6 rounded button-hover font-trebuchet">
            Learn more
          </button>
        </div>

        <div className="relative   h-full flex  items-center hover-scale">
          <div className="absolute left-[-80px] transform translate-y-16 ">
            <Image
              src="/images/mobile-screen-view.svg"
              alt="Mobile Dashboard"
              width={180}
              height={360}
            />
          </div>
          <div className=" ">
            <Image
              src="/images/desktop-screen-view.svg"
              alt="Desktop Dashboard"
              width={500}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
