import Info from "@app/components/Info";
import Link from "next/link";
import { useState } from "react";

interface IFigmaIcon {
  url: string;
  infoPosY?: string;
}

export default function FigmaIcon({
  url,
  infoPosY = "-top-[40px]",
}: IFigmaIcon) {
  const [showInfo, setShowInfo] = useState(false);

  const handleMouseEnter = () => {
    setShowInfo(() => true);
  };

  const handleMouseLeave = () => {
    setShowInfo(() => false);
  };

  return (
    <div
      className="figma_info_container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link href={url} target="_blank" aria-label="View Portfolio Prototype">
        <svg
          className="figma_icon"
          width="23"
          height="35"
          viewBox="0 0 26 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_420_7561)">
            <path
              d="M12.1746 31.6666C12.1746 34.8863 9.56007 37.5 6.3385 37.5C3.11694 37.5 0.502441 34.8863 0.502441 31.6666C0.502441 28.447 3.11694 25.8333 6.3385 25.8333H12.1746V31.6666Z"
              fill="black"
              stroke="white"
            />
            <path
              d="M0.502441 19C0.502441 15.7804 3.11694 13.1667 6.3385 13.1667H12.1746V24.8334H6.3385C3.11694 24.8334 0.502441 22.2197 0.502441 19Z"
              fill="black"
              stroke="white"
            />
            <path
              d="M0.502686 6.33333C0.502686 3.11368 3.11718 0.5 6.33875 0.5H12.1748V12.1667H6.33875C3.11718 12.1667 0.502686 9.55299 0.502686 6.33333Z"
              fill="black"
              stroke="white"
            />
            <path
              d="M13.1746 0.5H19.0106C22.2322 0.5 24.8467 3.11368 24.8467 6.33333C24.8467 9.55299 22.2322 12.1667 19.0106 12.1667H13.1746V0.5Z"
              fill="black"
              stroke="white"
            />
            <path
              d="M24.8467 19C24.8467 22.2197 22.2322 24.8334 19.0106 24.8334C15.7891 24.8334 13.1746 22.2197 13.1746 19C13.1746 15.7804 15.7891 13.1667 19.0106 13.1667C22.2322 13.1667 24.8467 15.7804 24.8467 19Z"
              fill="black"
              stroke="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_420_7561">
              <rect width="25.3493" height="38" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </Link>
      <Info text="Figma" posY={infoPosY} show={showInfo} />
    </div>
  );
}
