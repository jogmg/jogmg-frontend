"use client";

import Button from "@app/components/Button";
import AdobeXDIcon from "@app/components/icons/AdobeXDIcon";
import FigmaIcon from "@app/components/icons/FigmaIcon";
import GithubIcon from "@app/components/icons/GithubIcon";
import ChevronTripleRightIcon from "@public/icons/chevron-triple-right.svg";
import ChevronUpIcon from "@public/icons/chevron-up.svg";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";

interface IPortfolio {
  title: string;
  bgUrl: string | StaticImageData;
  mainUrl: string;
  ctaUrl: string;
  ctaType: "github" | "figma" | "adobexd";
  descs: { iconUrl: string | StaticImageData; title: string; text: string }[];
}

export default function Portfolio({
  title,
  bgUrl,
  mainUrl = "",
  ctaUrl = "",
  ctaType,
  descs,
}: IPortfolio) {
  const [active, setIsActive] = useState(false);

  const handleHeadingClick = () => {
    setIsActive(!active);
  };

  return (
    <div className={`portfolio-container ${active ? "active" : ""}`}>
      <Image src={bgUrl} alt={`${title} Image`} fill className="image" />
      <Image
        src={ChevronTripleRightIcon}
        alt="Chevron Triple Right Icon"
        className="chevron-triple-right-icon"
      />
      <div className={`cta-container ${active ? "inactive" : ""}`}>
        <div className="ctas">
          {ctaType === "github" && (
            <GithubIcon
              url={ctaUrl}
              width="50"
              height="50"
              infoPosY="-top-[30px]"
            />
          )}
          {ctaType === "adobexd" && <AdobeXDIcon url={ctaUrl} />}
          {ctaType === "figma" && <FigmaIcon url={ctaUrl} />}
          <Button
            linkUrl={mainUrl}
            text={`${ctaType === "github" ? "View Project" : "View Case"}`}
            btnType="portfolio"
          />
        </div>
      </div>
      <div className={`portfolio-details ${active ? "active" : ""}`}>
        <div className="heading" onClick={handleHeadingClick}>
          <div className="loop-title-container">
            <div className="loop-icon-container">
              <div className="circle"></div>
              <video
                autoPlay
                loop
                muted
                playsInline
                className="vid-loop"
                poster="images/green-ring-loop-fallback.webp"
              >
                <source src="/videos/green-ring-loop.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>
            <p className="text-nowrap">{title}</p>
          </div>
          <div className="chevron-icon-container">
            <div className="chevron-icon-wrapper">
              <Image
                src={ChevronUpIcon}
                alt="Chevron Up Icon"
                className="chevron-up-icon"
              />
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
