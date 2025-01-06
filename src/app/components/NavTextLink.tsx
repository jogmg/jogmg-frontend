"use client";

import { useEffect, useState } from "react";
import { NavLink } from "react-router";

interface Props {
  text: string;
  navTo: string;
}

export default function NavTextLink({ text, navTo }: Props) {
  const [isLinkActive, setIsLinkActive] = useState(false);

  return (
    <NavLink
      to={navTo}
      className={({ isActive }) => {
        useEffect(() => {
          setIsLinkActive(isActive);
        }, [isActive]);
        return `nav-text-container ${isActive ? "active" : ""}`;
      }}
    >
      <p className={`nav-text ${isLinkActive ? "active" : ""}`}>{text}</p>
      <div className={`nav-text-line ${isLinkActive ? "active" : ""}`}></div>
    </NavLink>
  );
}
