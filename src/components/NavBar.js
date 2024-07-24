// src/components/NavBar.js
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
export default function NavBar() {
  const pathName = usePathname();
  return (
    // <nav className="flex justify-center items-center py-4  w-full overflow-x-auto  bg-gradient-to-r from-[#401D60] via-[#271A73] to-[#1F1B5A] text-white">
    //   <div className="w-[80%] flex justify-between">
    //     <div className="space-x-6 flex justify-center item-center">
    //       <Link href={"/"}>
    //         <Image
    //           src={"/images/logo.svg"}
    //           alt="logo"
    //           width={100}
    //           height={100}
    //           className="cursor-pointer"
    //         />
    //       </Link>
    //       <a
    //         href="/solution"
    //         className={`${
    //           pathName === "/solution" && "gradient-underline"
    //         } hover-gradient-underline font-extralight text-[inherit] customText px-2`}
    //       >
    //         Solutions
    //       </a>
    //       <a
    //         href="/about"
    //         className={`${
    //           pathName === "/about" && "gradient-underline"
    //         } hover-gradient-underline font-extralight text-[inherit] customText px-2`}
    //       >
    //         About
    //       </a>
    //       <a
    //         href="/partners"
    //         className={`${
    //           pathName === "/partners" && "gradient-underline"
    //         } hover-gradient-underline font-extralight text-[inherit] customText px-2`}
    //       >
    //         Partners
    //       </a>
    //     </div>
    //     <div className="space-x-6  flex">
    //       <div className="flex space-x-2 items-baseline">
    //         <a
    //           href="#"
    //           className="font-extralight text-[inherit] customText px-2"
    //         >
    //           Schedule a demo
    //         </a>
    //         <Image
    //           src={"/images/Vector.svg"}
    //           alt="arrow"
    //           width={6}
    //           height={6}
    //         />
    //       </div>
    //       <div className="flex space-x-2 items-baseline">
    //         <a
    //           href="#"
    //           className="font-extralight text-[inherit] customText px-2"
    //         >
    //           Contact
    //         </a>
    //         <Image
    //           src={"/images/Vector.svg"}
    //           alt="arrow"
    //           width={6}
    //           height={6}
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </nav>
    <nav className="flex justify-center items-center py-4 w-full overflow-x-auto bg-gradient-to-r from-[#401D60] via-[#271A73] to-[#1F1B5A] text-white">
      <div className="w-[80%] flex justify-between items-center">
        <div className="space-x-6 flex items-center">
          <Link href={"/"}>
            <Image
              src={"/images/logo.svg"}
              alt="logo"
              width={100}
              height={100}
              className="cursor-pointer"
            />
          </Link>
          <a
            href="/solution"
            className={`${
              pathName === "/solution" && "gradient-underline"
            } hover-gradient-underline font-extralight text-[inherit] customText px-2`}
          >
            Solutions
          </a>
          <a
            href="/about"
            className={`${
              pathName === "/about" && "gradient-underline"
            } hover-gradient-underline font-extralight text-[inherit] customText px-2`}
          >
            About
          </a>
          <a
            href="/partners"
            className={`${
              pathName === "/partners" && "gradient-underline"
            } hover-gradient-underline font-extralight text-[inherit] customText px-2`}
          >
            Partners
          </a>
        </div>
        {/* Only show the last two links on larger screens */}
        <div className="hidden md:flex space-x-6">
          <div className="flex space-x-2 items-baseline">
            <a
              href="#"
              className="font-extralight text-[inherit] customText px-2"
            >
              Schedule a demo
            </a>
            <Image
              src={"/images/Vector.svg"}
              alt="arrow"
              width={6}
              height={6}
            />
          </div>
          <div className="flex space-x-2 items-baseline">
            <a
              href="#"
              className="font-extralight text-[inherit] customText px-2"
            >
              Contact
            </a>
            <Image
              src={"/images/Vector.svg"}
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
