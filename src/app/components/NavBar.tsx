"use client";

import Logo from "@/app/components/Logo";
import NavTextLink from "@/app/components/NavTextLink";
import LinkedinIcon from "@/app/components/LinkedinIcon";
import GithubIcon from "@/app/components/GithubIcon";

export default function NavBar() {
  return (
    <header>
      <nav className="nav-bar">
        <div className="nav-links">
          <NavTextLink text="PORTFOLIO" to="/portfolio" />
          <NavTextLink text="ABOUT" to="/about" />
        </div>
        <Logo />
        <div className="nav-socials">
          <LinkedinIcon />
          <GithubIcon />
        </div>
      </nav>
    </header>
  );
}
