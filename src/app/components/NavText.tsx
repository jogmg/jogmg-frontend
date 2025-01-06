"use client";

import { useEffect, useState } from "react";
import { NavLink } from "react-router";

export default function NavText() {
  const [isLinkActive, setIsLinkActive] = useState(false);

  return (
    <>
      <div className={`nav-text-container ${isLinkActive ? "active" : ""}`}>
        <NavLink
          to="/"
          className={({ isActive, isPending }) => {
            useEffect(() => {
              setIsLinkActive(isActive);
            }, [isActive]);
            return `nav-text ${
              isPending ? "pending" : isActive ? "active" : ""
            }`;
          }}
        >
          PORTFOLIO
        </NavLink>
      </div>
    </>
  );
}
