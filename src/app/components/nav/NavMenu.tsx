"use client";

import CloseIcon from "@app/components/icons/CloseIcon";
import GithubIcon from "@app/components/icons/GithubIcon";
import LinkedinIcon from "@app/components/icons/LinkedinIcon";
import NavLink from "@app/components/nav/NavLink";
import useSharedContext from "@app/util/SharedContext";

export default function NavMenu() {
  const { isNavMenuOpen, setIsNavMenuOpen } = useSharedContext();

  const closeNavMenu = () => {
    setIsNavMenuOpen(false);
  };

  return (
    <div className={`navMenu_container ${isNavMenuOpen ? "active" : ""}`}>
      <div className={`navMenu ${isNavMenuOpen ? "active" : ""}`}>
        <div className="top_container">
          <CloseIcon action={closeNavMenu} />
        </div>
        <nav className="navLink_container">
          <NavLink text="PORTFOLIO" to="/portfolio" action={closeNavMenu} />
          <NavLink text="ABOUT" to="/about" action={closeNavMenu} />
        </nav>
        <div className="socials_container">
          <LinkedinIcon infoPosY="-top-[40px]" />
          <GithubIcon infoPosY="-top-[40px]" />
        </div>
      </div>
    </div>
  );
}
