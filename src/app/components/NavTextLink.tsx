"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface INavTextLink {
  text: string;
  to: string;
  action?: () => void;
}

export default function NavTextLink({ text, to, action }: INavTextLink) {
  const [isActive, setIsActive] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    setIsActive(pathname === to);
  }, [pathname, to]);

  return (
    <Link
      className="nav-text-container"
      href={to}
      aria-current={isActive ? "page" : undefined}
      onClick={action}
    >
      <p className={`nav-text ${isActive ? "active" : ""}`}>{text}</p>
      <div className={`nav-text-line ${isActive ? "active" : ""}`}></div>
    </Link>
  );
}
