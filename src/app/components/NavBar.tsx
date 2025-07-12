"use client";

import GithubIcon from "@app/components/icons/GithubIcon";
import LinkedinIcon from "@app/components/icons/LinkedinIcon";
import Logo from "@app/components/Logo";
import NavTextLink from "@app/components/NavTextLink";
import { useEffect, useState } from "react";
import MenuIcon from "@app/components/icons/MenuIcon";

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
    <nav className={`nav-bar ${isActive ? "active" : ""}`}>
      <div className="nav-bar-links">
        <NavTextLink text="PORTFOLIO" to="/portfolio" />
        <NavTextLink text="ABOUT" to="/about" />
      </div>
      <Logo />
      <div className="nav-bar-socials">
        <LinkedinIcon />
        <GithubIcon />
      </div>
      <MenuIcon />
    </nav>
  );
}
