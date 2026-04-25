import Link from "next/link";
import { useState } from "react";
import Info from "../Info";

interface IXIconProps {
  infoPosY?: string;
}

export default function XIcon({ infoPosY = "-bottom-[40px]" }: IXIconProps) {
  const [showInfo, setShowInfo] = useState(false);

  const handleMouseEnter = () => {
    if (window.innerWidth > 768) {
      setShowInfo(() => true);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth > 768) {
      setShowInfo(() => false);
    }
  };

  const handleTouchStart = () => {
    if (window.innerWidth <= 768) {
      setShowInfo(() => true);
    }
  };

  const handleTouchEnd = () => {
    if (window.innerWidth <= 768) {
      setShowInfo(() => false);
    }
  };

  return (
    <div
      className="relative flex justify-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <Link
        href="https://x.com/jogmg"
        target="_blank"
        className="flex justify-center items-center size-10"
      >
        <i
          className={`${showInfo ? "text-primary drop-shadow-[0_0_6px_#59ED82] transition-all ease-in duration-500" : "text-secondary"} bi bi-twitter-x flex items-center justify-center text-[1rem] size-[1.75rem] rounded-full bg-background-main transition-all ease-in duration-500`}
        />
      </Link>
      {showInfo ? (
        <Info text="X (formerly Twitter)" posY={infoPosY} textWrap={false} />
      ) : undefined}
    </div>
  );
}
