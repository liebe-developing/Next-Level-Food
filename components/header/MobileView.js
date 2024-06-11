"use client";

import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import NavLinks from "./NavLinks";

const MobileView = () => {
  const [toggleNavlinks, setToggleNavlinks] = useState(false);

  return (
    <>
      <GiHamburgerMenu
        onClick={() => setToggleNavlinks((prevState) => !prevState)}
        className="flex sm:hidden w-[2.2rem] h-[2.2rem] bg-gradient-to-r from-[#f9572a] to-[#ff9b05] text-white rounded-md p-1"
      />
      {toggleNavlinks && (
        <div className="absolute bottom-10 bg-white w-full h-screen">
          <NavLinks />
        </div>
      )}
    </>
  );
};

export default MobileView;
