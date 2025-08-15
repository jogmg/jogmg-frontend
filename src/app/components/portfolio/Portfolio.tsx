"use client";

import Button from "@app/components/Button";
import AdobeXDIcon from "@app/components/icons/AdobeXDIcon";
import FigmaIcon from "@app/components/icons/FigmaIcon";
import GithubIcon from "@app/components/icons/GithubIcon";
import ChevronTripleRightIcon from "@public/icons/chevron-triple-right.svg";
import ChevronUpIcon from "@public/icons/chevron-up.svg";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import Info from "../Info";

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
  const [showInfo, setShowInfo] = useState<
    Record<string, boolean> | undefined
  >();

  const handleHeadingClick = () => {
    setIsActive(!active);
  };

  const handleMouseEnter = (index: number) => {
    setShowInfo((prev) => ({
      ...prev,
      [index]: true,
    }));
  };

  const handleMouseLeave = (index: number) => {
    setShowInfo((prev) => ({
      ...prev,
      [index]: false,
    }));
  };

  return (
    <div className={`portfolio_container ${active ? "active" : ""}`}>
      <Image src={bgUrl} alt={`${title} Image`} fill className="image" />
      <Image
        src={ChevronTripleRightIcon}
        alt="Chevron Triple Right Icon"
        className="chevronTripleRight_icon"
      />
      <div className={`cta_container ${active ? "inactive" : ""}`}>
        <div className="cta_btns">
          {ctaType === "github" && (
            <GithubIcon
              url={ctaUrl}
              width="50"
              height="50"
              infoPosY="-top-[40px]"
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
      <div className={`portfolio_details ${active ? "active" : ""}`}>
        <div className="heading_container" onClick={handleHeadingClick}>
          <div className="title_container">
            <div className="loopVid_container">
              <div className="circle"></div>
              <video
                autoPlay
                loop
                muted
                playsInline
                className="vidLoop"
                poster="images/green-ring-loop-fallback.webp"
              >
                <source src="/videos/green-ring-loop.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>
            <p
              className="title"
              onMouseEnter={() => handleMouseEnter(20)}
              onMouseLeave={() => handleMouseLeave(20)}
            >
              {title.length < 23 ? title : `${title.slice(0, 23)}...`}
            </p>
            {title.length > 23 && showInfo?.[20] ? (
              <Info text={title} posY={active ? "top-[60px]" : "-top-[35px]"} />
            ) : null}
          </div>
          <div className="chevronIcon_container">
            <div className="chevronIcon_wrapper">
              <Image
                src={ChevronUpIcon}
                alt="Chevron Up Icon"
                className="chevronUp_icon"
              />
            </div>
          </div>
        </div>
        <ul className="desc_container">
          {descs.map((desc, index) => (
            <li
              className="item"
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <Image src={desc.iconUrl} alt={desc.title + " Icon"} />
              <span className="title">{desc.title}:</span>
              <p className="text">
                {desc.text.length < 30
                  ? desc.text
                  : `${desc.text.slice(0, 30)}...`}
              </p>
              {desc.text.length > 30 && showInfo?.[index] ? (
                <Info
                  text={desc.text}
                  posY={
                    title === "Digital Certificate Generator"
                      ? "-top-[60px]"
                      : "-top-[40px]"
                  }
                />
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
