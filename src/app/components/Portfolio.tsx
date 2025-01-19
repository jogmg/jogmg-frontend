"use client";

import Image, { StaticImageData } from "next/image";
import GithubIcon from "./GithubIcon";
import AdobeXDIcon from "./AdobeXDIcon";
import Button from "./Button";
import { useState } from "react";
import ChevronUpIcon from "./ChevronUpIcon";
import ChevronTripleRightIcon from "../../../public/icons/chevron-triple-right.svg";

export interface PortfolioProps {
  bgUrl: StaticImageData;
  ctaType: "github" | "figma" | "adobexd";
  title: string;
  descs: { iconUrl: string; title: string; text: string }[];
}

export default function Portfolio({
  bgUrl,
  ctaType,
  title,
  descs,
}: PortfolioProps) {
  const [active, setIsActive] = useState(false);

  const handleHeadingClick = () => {
    setIsActive(!active);
  };

  return (
    <div className={`portfolio-container ${active ? "active" : ""}`}>
      <Image
        src={bgUrl}
        alt={`${title} Image`}
        placeholder="blur"
        fill
        className="image"
      />
      <Image
        src={ChevronTripleRightIcon}
        alt="Chevron Triple Right Icon"
        className="chevron-triple-right-icon"
      />
      <div className="cta-container">
        <div className="ctas">
          {ctaType === "github" && <GithubIcon width="50" height="50" />}
          {ctaType === "adobexd" && <AdobeXDIcon />}
          {/* {ctaType === "figma" && <GithubIcon width="50" height="50" />} */}
          <Button text="View Project" type="portfolio" />
        </div>
      </div>
      <div className={`portfolio-details ${active ? "active" : ""}`}>
        <div className="heading" onClick={handleHeadingClick}>
          <div className="loop-title-container">
            <div className="loop-icon-container">
              <div className="circle"></div>
              <video autoPlay loop muted className="vid-loop">
                <source src="/green-ring-loop.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>
            <p className="text-nowrap">{title}</p>
          </div>
          <div className="chevron-icon-container">
            <div className="chevron-icon-wrapper">
              <ChevronUpIcon />
            </div>
          </div>
        </div>
        <ul className="desc-container">
          {descs.map((desc, index) => (
            <li className="desc-text" key={index}>
              <Image src={desc.iconUrl} alt={desc.title + " Icon"} />
              <p>
                <span className="desc-title">{desc.title}: </span>
                {desc.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
