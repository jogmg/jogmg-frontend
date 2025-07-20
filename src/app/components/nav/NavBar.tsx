"use client";

import GithubIcon from "@app/components/icons/GithubIcon";
import LinkedinIcon from "@app/components/icons/LinkedinIcon";
import MenuIcon from "@app/components/icons/MenuIcon";
import Logo from "@app/components/nav/Logo";
import NavLink from "@app/components/nav/NavLink";
import { useEffect, useState } from "react";

export default function NavBar() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsActive(window.scrollY > 70);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navBar ${isActive ? "active" : ""}`}>
      <div className="navLink_container">
        <NavLink text="PORTFOLIO" to="/portfolio" />
        <NavLink text="ABOUT" to="/about" />
      </div>
      <Logo />
      <div className="socials_container">
        <LinkedinIcon />
        <GithubIcon />
      </div>
      <MenuIcon />
    </nav>
  );
}
