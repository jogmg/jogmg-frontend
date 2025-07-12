"use client";

import CloseIcon from "@app/components/icons/CloseIcon";
import GithubIcon from "@app/components/icons/GithubIcon";
import LinkedinIcon from "@app/components/icons/LinkedinIcon";
import NavTextLink from "@app/components/NavTextLink";
import useSharedContext from "@app/SharedContext";

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
