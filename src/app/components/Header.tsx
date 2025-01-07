"use client";

import { BrowserRouter } from "react-router";
import Logo from "@/app/components/Logo";
import NavTextLink from "@/app/components/NavTextLink";
import LinkedinIcon from "@/app/components/LinkedinIcon";
import GithubIcon from "@/app/components/GithubIcon";

export default function Header() {
  return (
    <header>
      <nav className="nav-bar">
        <BrowserRouter>
          <div className="nav-links">
            <NavTextLink text="PORTFOLIO" navTo="/portfolio" />
            <NavTextLink text="ABOUT" navTo="/about" />
          </div>
          <Logo />
          <div className="nav-socials">
            <LinkedinIcon />
            <GithubIcon />
          </div>
        </BrowserRouter>
      </nav>
    </header>
  );
}
