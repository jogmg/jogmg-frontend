"use client";

import useSharedContext from "../SharedContext";
import CloseIcon from "./CloseIcon";
import GithubIcon from "./GithubIcon";
import LinkedinIcon from "./LinkedinIcon";
import NavTextLink from "./NavTextLink";

export default function NavMenu() {
  const { isNavMenuOpen, setIsNavMenuOpen } = useSharedContext();

  const closeNavMenu = () => {
    setIsNavMenuOpen(false);
  };

  return (
    <div className={`nav-menu-container ${isNavMenuOpen ? "active" : ""}`}>
      <div className={`nav-menu ${isNavMenuOpen ? "active" : ""}`}>
        <div className="nav-menu-top">
          <CloseIcon action={closeNavMenu} />
        </div>
        <nav className="nav-menu-links">
          <NavTextLink text="PORTFOLIO" to="/portfolio" action={closeNavMenu} />
          <NavTextLink text="ABOUT" to="/about" action={closeNavMenu} />
        </nav>
        <div className="nav-menu-socials">
          <LinkedinIcon infoPosY="-top-[35px]" />
          <GithubIcon infoPosY="-top-[35px]" />
        </div>
      </div>
    </div>
  );
}
