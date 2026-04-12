import ArrowLeftIcon from "@app/components/icons/ArrowLeftIcon";
import Link from "next/link";
import { useState } from "react";
import Info from "../Info";

interface ISideNavLink {
  title: string;
  isInView: boolean;
}

export default function SideNavLink({ title, isInView }: ISideNavLink) {
  const [showInfo, setShowInfo] = useState(false);

  const handleMouseEnter = () => {
    setShowInfo(() => true);
  };

  const handleMouseLeave = () => {
    setShowInfo(() => false);
  };

  return (
    <div
      className="sideNav_link_container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        href={`#${
          title === "UoPeople" ? "University of the People" : title
        }`.toLowerCase()}
      >
        <div className={`sideNav_link ${isInView ? "active" : ""}`}>
          <ArrowLeftIcon color={isInView ? "#000000" : "#333333"} />
          <p>{title}</p>
        </div>
      </Link>
      {title.length > 23 && showInfo ? (
        <Info text={title} posY="top-[30px]" />
      ) : null}
    </div>
  );
}
