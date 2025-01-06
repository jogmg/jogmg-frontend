"use client";

import Image from "next/image";
import jogmgLogo from "../../../public/logo.svg";
import linkedinIcon from "../../../public/linkedin.svg";
import githubIcon from "../../../public/github.svg";
import NavTextLink from "@/app/components/NavTextLink";
import { BrowserRouter } from "react-router";
import Logo from "@/app/components/Logo";

export default function Header() {
  return (
    <header>
      <nav className="nav-bar">
        <div className="nav-links">
          <BrowserRouter>
            <NavTextLink text="PORTFOLIO" navTo="/portfolio" />
            <NavTextLink text="ABOUT" navTo="/about" />
          </BrowserRouter>
        </div>
        <Logo />
        <div className="nav-socials">
          <Image src={linkedinIcon} alt="Linkedin Icon" />
          <Image src={githubIcon} alt="Github Icon" />
        </div>
      </nav>
    </header>
  );
}
