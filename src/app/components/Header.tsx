"use client";

import Image from "next/image";
import jogmgLogo from "../../../public/logo.svg";
import linkedinIcon from "../../../public/linkedin.svg";
import githubIcon from "../../../public/github.svg";
import NavText from "./NavText";
import { BrowserRouter, Route, Routes } from "react-router";

export default function Header() {
  return (
    <header>
      <nav className="navBar">
        <div className="navLinks">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<NavText />} />
            </Routes>
          </BrowserRouter>
        </div>
        <Image src={jogmgLogo} alt="Jogmg Logo" />
        <div className="navSocials">
          <Image src={linkedinIcon} alt="Linkedin Icon" />
          <Image src={githubIcon} alt="Github Icon" />
        </div>
      </nav>
    </header>
  );
}
