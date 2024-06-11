"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItem = ({ title, path, onClose }) => {
  const pathName = usePathname();

  return (
    <li onClick={() => onClose(false)}>
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
