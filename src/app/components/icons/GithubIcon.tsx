import Info from "@app/components/Info";
import Link from "next/link";
import { useState } from "react";

interface IGithubIcon {
  width?: string;
  height?: string;
  url?: string;
  infoPosY?: string;
}

export default function GithubIcon({
  width = "40",
  height = "41",
  url = "https://github.com/jogmg",
  infoPosY = "-bottom-[40px]",
}: IGithubIcon) {
  const [showInfo, setShowInfo] = useState(false);

  const handleMouseEnter = () => {
    setShowInfo(() => true);
  };

  const handleMouseLeave = () => {
    setShowInfo(() => false);
  };

  return (
    <div
      className="github_info_container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link href={url} target="_blank" aria-label="View my Github">
        <svg
          className="github_icon"
          width={width}
          height={height}
          viewBox="0 0 40 41"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.15 34.4C27.882 34.4 34.15 28.1768 34.15 20.5C34.15 12.8232 27.882 6.60001 20.15 6.60001C12.418 6.60001 6.15002 12.8232 6.15002 20.5C6.15002 28.1768 12.418 34.4 20.15 34.4Z"
            fill="black"
          />
          <path
            id="foreground"
            d="M20.14 6.5C12.3277 6.5 6 12.756 6 20.4799C6 26.666 10.0476 31.891 15.6682 33.7433C16.3752 33.8656 16.6404 33.4462 16.6404 33.0792C16.6404 32.7472 16.6227 31.6463 16.6227 30.4755C13.07 31.1221 12.1509 29.6192 11.8681 28.8329C11.709 28.4309 11.0197 27.1902 10.4188 26.8582C9.92385 26.5961 9.21685 25.9495 10.4011 25.932C11.5146 25.9146 12.31 26.9456 12.5751 27.365C13.8477 29.4794 15.8803 28.8853 16.6934 28.5183C16.8171 27.6096 17.1883 26.998 17.5948 26.6485C14.4487 26.299 11.1611 25.0932 11.1611 19.7459C11.1611 18.2256 11.709 16.9674 12.6105 15.9888C12.4691 15.6393 11.9742 14.2064 12.7519 12.2842C12.7519 12.2842 13.9361 11.9172 16.6404 13.7171C17.7716 13.4026 18.9735 13.2453 20.1754 13.2453C21.3773 13.2453 22.5792 13.4026 23.7104 13.7171C26.4146 11.8997 27.5989 12.2842 27.5989 12.2842C28.3766 14.2064 27.8817 15.6393 27.7403 15.9888C28.6417 16.9674 29.1896 18.2082 29.1896 19.7459C29.1896 25.1107 25.8844 26.299 22.7382 26.6485C23.2508 27.0854 23.6927 27.9242 23.6927 29.2348C23.6927 31.1046 23.675 32.6074 23.675 33.0792C23.675 33.4462 23.9401 33.8831 24.6471 33.7433C27.4546 32.8071 29.8943 31.0236 31.6224 28.6442C33.3505 26.2647 34.28 23.4092 34.28 20.4799C34.28 12.756 27.9524 6.5 20.14 6.5Z"
            fill="white"
          />
        </svg>
      </Link>
      <Info text="Github" posY={infoPosY} show={showInfo} />
    </div>
  );
}
