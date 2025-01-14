"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface Props {
  text: string;
  to: string;
}

export default function NavTextLink({ text, to }: Props) {
  const [isActive, setIsActive] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    setIsActive(pathname === to);
  }, [pathname]);

  return (
    <Link
      className="nav-text-container"
      href={to}
      aria-current={isActive ? "page" : undefined}
    >
      <p className={`nav-text ${isActive ? "active" : ""}`}>{text}</p>
      <div className={`nav-text-line ${isActive ? "active" : ""}`}></div>
    </Link>
  );
}
