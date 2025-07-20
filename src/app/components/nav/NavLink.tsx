"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface INavLink {
  text: string;
  to: string;
  action?: () => void;
}

export default function NavLink({ text, to, action }: INavLink) {
  const [isActive, setIsActive] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    setIsActive(pathname === to);
  }, [pathname, to]);

  return (
    <Link
      className="navLink"
      href={to}
      aria-current={isActive ? "page" : undefined}
      onClick={action}
    >
      <p className={`text ${isActive ? "active" : ""}`}>{text}</p>
      <div className={`line ${isActive ? "active" : ""}`}></div>
    </Link>
  );
}
