"use client";
import { usePathname } from "next/navigation";
import classes from './main-header.module.css';
import Link from "next/link";

export const NavLink = ({ href, children }) => {
  const path = usePathname();
  return (
    <Link href={href} className={path.startsWith(href) ? classes.active : ""}>
      {children}
    </Link>
  );
};
