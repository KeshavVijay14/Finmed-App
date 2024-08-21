// src/components/Footer.js
import { InView } from "react-intersection-observer";
import Image from "next/image";
export default function Footer() {
  return (
    <InView triggerOnce threshold={0.5}>
      {({ inView, ref, entry }) => (
        <footer className="py-8 px-4 md:px-8 text-white" ref={ref}>
          <div
            className={`container mx-auto text-center ${
              inView ? "animate-move-opacity" : ""
            }`}
          >
            <div className="pb-4 mb-4">
              <h2 className="text-xl font-semibold mb-12 font-roboto">
                Contact Info
              </h2>
              <div className="flex flex-col md:flex-row justify-center md:items-start items-center py-12 space-y-4 md:space-y-0 md:space-x-32">
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
                <div className="flex flex-col items-center md:items-start">
                  <p className="font-thin text-sm font-roboto my-2">
                    Hours of Operations
                  </p>
                  <p className="font-thin text-sm font-roboto my-2">
                    Monday - Friday 9:00am-5:30pm est
                  </p>
                  <p className="font-thin text-sm font-roboto my-2">
                    &copy; 2024 Finmed INC. All Rights Reserved.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 justify-center">
                <div>
                  <Image
                    src={"/images/insta.svg"}
                    alt="insta"
                    width={40}
                    height={40}
                  />
                </div>
                <div>
                  <Image
                    src={"/images/twitter.svg"}
                    alt="twitter"
                    width={40}
                    height={40}
                  />
                </div>
                <div>
                  <Image
                    src={"/images/fb.svg"}
                    alt="fb"
                    width={40}
                    height={40}
                  />
                </div>
                <div>
                  <Image
                    src={"/images/ln.svg"}
                    alt="ln"
                    width={40}
                    height={40}
                  />
                </div>
              </div>
            </div>
          </div>
        </footer>
      )}
    </InView>
  );
}
