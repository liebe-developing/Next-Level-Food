"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItem = ({ title, path }) => {
  const pathName = usePathname();

  return (
    <li>
      <Link
        className={`${pathName === path ? "active" : undefined}`}
        href={path}
      >
        {title}
      </Link>
    </li>
  );
};

export default NavItem;
