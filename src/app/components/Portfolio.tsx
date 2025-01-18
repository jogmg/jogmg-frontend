"use client";

import Image from "next/image";
import SSImage from "../../../public/images/ss.webp";
import chevronUpIcon from "../../../public/icons/chevron-up.svg";
import GithubIcon from "./GithubIcon";
import Button from "./Button";
import personIcon from "../../../public/icons/person-bounding-box.svg";
import calenderIcon from "../../../public/icons/calendar-week.svg";
import stackIcon from "../../../public/icons/stack.svg";
import gridIcon from "../../../public/icons/grid-fill.svg";
import { useState } from "react";
import ChevronUpIcon from "./ChevronUpIcon";

export default function Portfolio() {
  const [active, setIsActive] = useState(false);

  const handleHeadingClick = () => {
    setIsActive(!active);
  };

  const portfolioDescs = [
    {
      imgUrl: personIcon,
      title: "Role",
      text: "Fullstack Developer",
    },
    {
      imgUrl: calenderIcon,
      title: "Duration",
      text: "May ‘24 - Jul. ‘24",
    },
    {
      imgUrl: stackIcon,
      title: "Tech",
      text: "Next.js, React, Firebase",
    },
    {
      imgUrl: gridIcon,
      title: "Type",
      text: "Web App",
    },
  ];

  return (
    <div className="portfolio-container">
      <Image
        src={SSImage}
        alt="Synthesis Society Image"
        placeholder="blur"
        fill
        className="image"
      />
      <div className="cta-container">
        <div className="ctas">
          <GithubIcon width="50" height="50" />
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
            <p>Synthesis Society</p>
          </div>
          <ChevronUpIcon />
        </div>
        <ul className="desc-container">
          {portfolioDescs.map((desc, index) => (
            <li className="desc-text" key={index}>
              <Image src={desc.imgUrl} alt={desc.title + " Icon"} />
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
