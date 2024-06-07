import Image from "next/image";
import Link from "next/link";
import logoImg from "@/assets/logo.png";
import NavLinks from "./NavLinks";
import MainHeaderBackground from "./MainHeaderBackground";

const MainHeader = () => {
  return (
    <>
    <MainHeaderBackground />
    <header className="flex justify-between items-center px-[1rem] py-[2rem] md:py-[2rem] md:px-[10%]">
      <Link
        href="/"
        className="flex items-center justify-center gap-[2rem] text-[#ddd6cb] font-bold no-underline font-[sans-serif] tracking-[0.15rem] uppercase text-[1.5rem]"
        >
        <Image
          priority
          src={logoImg}
          alt="A plate with food on it"
          className="drop-shadow-logoShadow w-[5rem] h-[5rem] object-contain"
          />
        NextLevel Food
      </Link>
      <NavLinks />
    </header>
          </>
  );
};

export default MainHeader;
