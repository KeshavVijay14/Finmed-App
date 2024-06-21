// src/components/NavBar.js
import Image from "next/image";
import { usePathname } from "next/navigation";
export default function NavBar() {
  const pathName = usePathname();

  return (
    <nav className="flex justify-center items-center py-4   bg-gradient-to-r from-[#401D60] via-[#271A73] to-[#1F1B5A] text-white">
      <div className="w-[80%] flex justify-between">
        <div className="space-x-6 flex justify-center item-center">
          <Image
            src={"/images/logo.svg"}
            alt="logo"
            width={100}
            height={100}
            className="cursor-pointer"
          />
          <a
            href="/home"
            className={`${
              pathName === "/home" && "gradient-underline"
            } hover-gradient-underline font-extralight text-lg font-roboto`}
          >
            Home
          </a>
          <a
            href="/solution"
            className={`${
              pathName === "/solution" && "gradient-underline"
            } hover-gradient-underline font-extralight text-lg font-roboto`}
          >
            Solutions
          </a>
          <a
            href="/about"
            className={`${
              pathName === "/about" && "gradient-underline"
            } hover-gradient-underline font-extralight text-lg font-roboto`}
          >
            About
          </a>
          <a
            href="/partners"
            className={`${
              pathName === "/partners" && "gradient-underline"
            } hover-gradient-underline font-extralight text-lg font-roboto`}
          >
            Partners
          </a>
        </div>
        <div className="space-x-6  flex">
          <div className="flex space-x-2 items-baseline">
            <a href="#" className="font-extralight text-lg font-roboto">
              Schedule a demo
            </a>
            <Image
              src={"/images/vector.svg"}
              alt="arrow"
              width={6}
              height={6}
            />
          </div>
          <div className="flex space-x-2 items-baseline">
            <a href="#" className="font-extralight text-lg font-roboto">
              Contact
            </a>
            <Image
              src={"/images/vector.svg"}
              alt="arrow"
              width={6}
              height={6}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
