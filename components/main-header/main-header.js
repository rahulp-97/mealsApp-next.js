import Link from "next/link";
import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
import Image from "next/image";
import { HeaderBackground } from "./main-header-bg";
import { usePathname } from "next/navigation";
import { NavLink } from "./nav-link";

export const Header = () => {
  return (
    <>
      <HeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logoImg} alt="Plate with food in it" priority /> Your
          favorite food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href='/meals'>Browse meals</NavLink>
            </li>
            <li>
              <NavLink href='/community'>Foodies community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
