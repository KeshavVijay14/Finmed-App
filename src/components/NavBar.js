import React, { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathName = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="flex justify-center items-center py-4 w-full text-white relative">
      <div className="w-[80%] flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <Link href={"/"}>
            <Image
              src={"/images/primary-logo.ai"}
              alt="logo"
              width={100}
              height={100}
              className="cursor-pointer"
            />
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link
              href="/solution"
              className={`${
                pathName === "/solution" && "gradient-underline"
              } hover-gradient-underline font-extralight text-[inherit] customText px-2`}
            >
              Solutions
            </Link>
            <Link
              href="/about"
              className={`${
                pathName === "/about" && "gradient-underline"
              } hover-gradient-underline font-extralight text-[inherit] customText px-2`}
            >
              About
            </Link>
            <Link
              href="/partners"
              className={`${
                pathName === "/partners" && "gradient-underline"
              } hover-gradient-underline font-extralight text-[inherit] customText px-2`}
            >
              Partners
            </Link>
          </div>
        </div>
        {/* Menu icon for mobile */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu}>
            <Image
              src={
                isMobileMenuOpen
                  ? "/images/icons8-close.svg"
                  : "/images/icons8-menu.svg"
              }
              alt="menu"
              width={30}
              height={30}
            />
          </button>
        </div>

        <div className="hidden md:flex space-x-6">
          <div className="flex space-x-2 items-baseline">
            <Link
              href="#"
              className="font-extralight text-[inherit] customText px-2"
            >
              Schedule a demo
            </Link>
            <Image
              src={"/images/Vector.svg"}
              alt="arrow"
              width={6}
              height={6}
            />
          </div>
          <div className="flex space-x-2 items-baseline">
            <Link
              href="#"
              className="font-extralight text-[inherit] customText px-2"
            >
              Contact
            </Link>
            <Image
              src={"/images/Vector.svg"}
              alt="arrow"
              width={6}
              height={6}
            />
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50  [background:linear-gradient(107.56deg,_#3c174b,_#3c174b_2%,_#492985_16%,_#251971_42.5%,_#2f257b_60.5%,_#00071c)]  bg-opacity-75 text-white flex flex-col items-center justify-center space-y-4 p-4">
          <button
            onClick={toggleMobileMenu}
            className="absolute top-4 right-4 focus:outline-none"
          >
            <Image
              src="/images/icons8-close.svg"
              alt="close menu"
              width={30}
              height={30}
            />
          </button>

          <Link href={"/"}>
            <Image
              src={"/images/logo.svg"}
              alt="logo"
              width={100}
              height={100}
              className="cursor-pointer"
            />
          </Link>
          <Link
            href="/solution"
            className={`${
              pathName === "/solution" && "gradient-underline"
            } hover-gradient-underline font-extralight text-[inherit] customText px-2`}
            onClick={toggleMobileMenu}
          >
            Solutions
          </Link>
          <Link
            href="/about"
            className={`${
              pathName === "/about" && "gradient-underline"
            } hover-gradient-underline font-extralight text-[inherit] customText px-2`}
            onClick={toggleMobileMenu}
          >
            About
          </Link>
          <Link
            href="/partners"
            className={`${
              pathName === "/partners" && "gradient-underline"
            } hover-gradient-underline font-extralight text-[inherit] customText px-2`}
            onClick={toggleMobileMenu}
          >
            Partners
          </Link>
          <Link
            href="#"
            className="font-extralight text-[inherit] customText px-2"
            onClick={toggleMobileMenu}
          >
            Schedule a demo
          </Link>
          <Link
            href="#"
            className="font-extralight text-[inherit] customText px-2"
            onClick={toggleMobileMenu}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
