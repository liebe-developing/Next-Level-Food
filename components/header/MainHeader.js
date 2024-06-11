"use client";

import Image from "next/image";
import Link from "next/link";
import logoImg from "@/assets/logo.png";
import NavLinks from "./NavLinks";
import MainHeaderBackground from "./MainHeaderBackground";
import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const MainHeader = () => {
  const [toggleNavlinks, setToggleNavlinks] = useState(false);

  return (
    <>
      <MainHeaderBackground />
      <header className="flex justify-between items-center px-[1rem] py-[2rem] md:py-[2rem] md:px-[10%]">
        <Link
          href="/"
          className="flex items-center justify-center gap-[2rem] text-[#ddd6cb] font-bold no-underline font-[sans-serif] tracking-[0.15rem] uppercase text-[1.1rem] sm:text-[1.5rem]"
        >
          <Image
            priority
            src={logoImg}
            alt="A plate with food on it"
            className="drop-shadow-logoShadow w-[3rem] h-[3rem] sm:w-[5rem] sm:h-[5rem] object-contain"
          />
          NextLevel Food
        </Link>
        {toggleNavlinks ? (
          <IoMdClose
            onClick={() => setToggleNavlinks((prevState) => !prevState)}
            className="flex sm:hidden w-[2.2rem] h-[2.2rem] bg-gradient-to-r from-[#f9572a] to-[#ff9b05] text-white rounded-md p-1"
          />
        ) : (
          <GiHamburgerMenu
            onClick={() => setToggleNavlinks((prevState) => !prevState)}
            className="flex sm:hidden w-[2.2rem] h-[2.2rem] bg-gradient-to-r from-[#f9572a] to-[#ff9b05] text-white rounded-md p-1"
          />
        )}
        {toggleNavlinks && (
          <div className="absolute top-24 right-1 h-[120px] rounded-lg p-3 text-white shadow-xl bg-[#30353d] w-full">
            <NavLinks
              onClose={setToggleNavlinks}
              className="flex flex-col sm:hidden"
            />
          </div>
        )}
        <NavLinks className="nav hidden sm:flex" />
      </header>
    </>
  );
};

export default MainHeader;
