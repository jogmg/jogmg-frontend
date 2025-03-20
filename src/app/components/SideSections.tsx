"use client";

import Image from "next/image";
import ChevronUpIcon from "../../../public/icons/chevron-up.svg";
import { useState } from "react";
import useSharedContext from "../SharedContext";
import SideSectionNavItem from "./SideSectionNavItem";

export default function SideSections() {
  const { isInView } = useSharedContext();
  const [isWorkActive, setIsWorkActive] = useState(false);
  const [isEduActive, setIsEduActive] = useState(false);

  const handleSetIsWorkActive = () => {
    setIsWorkActive(!isWorkActive);
  };

  const handleSetIsEduActive = () => {
    setIsEduActive(!isEduActive);
  };

  return (
    <div className="sections-container">
      <div className="line-bar-bg"></div>
      <div className="sections">
        <div className="work-section-container">
          <div
            className={`line-bar ${
              isInView.isInView1 ||
              isInView.isInView2 ||
              isInView.isInView3 ||
              isInView.isInView4
                ? "active"
                : ""
            }`}
          ></div>
          <div className="work-section">
            <div className="main" onClick={handleSetIsWorkActive}>
              <p>Work Experience</p>
              <Image
                src={ChevronUpIcon}
                alt="Chevron Up Icon"
                className={`chevron-up-icon ${isWorkActive ? "active" : ""}`}
              />
            </div>
            <div className={`sub-container ${isWorkActive ? "active" : ""}`}>
              <SideSectionNavItem
                title="Synthesis Society"
                isInView={isInView.isInView1}
              />
              <SideSectionNavItem
                title="Primed E-health"
                isInView={isInView.isInView2}
              />
              <SideSectionNavItem title="AITI" isInView={isInView.isInView3} />
              <SideSectionNavItem
                title="NIPCO Gas Limited"
                isInView={isInView.isInView4}
              />
            </div>
          </div>
        </div>
        <div className="education-section-container">
          <div className="education-section">
            <div
              className={`line-bar ${
                isInView.isInView5 || isInView.isInView6 || isInView.isInView7
                  ? "active"
                  : ""
              }`}
            ></div>
            <div className="main" onClick={handleSetIsEduActive}>
              <p>Education</p>
              <Image
                src={ChevronUpIcon}
                alt="Chevron Up Icon"
                className={`chevron-up-icon ${isEduActive ? "active" : ""}`}
              />
            </div>
            <div className={`sub-container ${isEduActive ? "active" : ""}`}>
              <SideSectionNavItem
                title="UoPeople"
                isInView={isInView.isInView5}
              />
              <SideSectionNavItem title="ALX" isInView={isInView.isInView6} />
              <SideSectionNavItem
                title="Coursera"
                isInView={isInView.isInView7}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
