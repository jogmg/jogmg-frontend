"use client";

import Image from "next/image";
import ChevronUpIcon from "../../../public/icons/chevron-up.svg";
import ArrowLeftIcon from "./ArrowLeftIcon";
import { useState } from "react";
import Link from "next/link";
import useSharedContext from "../SharedContext";

export default function SideSections() {
  const { isInView1, isInView2, isInView3, isInView4, isInView5, isInView6 } =
    useSharedContext();
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
              isInView1 || isInView2 || isInView3 ? "active" : ""
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
              <Link href={"#Primed E-health"}>
                <div className={`sub ${isInView1 ? "active" : ""}`}>
                  <ArrowLeftIcon color={isInView1 ? "#000000" : "#333333"} />
                  <p>Primed E-health</p>
                </div>
              </Link>
              <Link href={"#AITI"}>
                <div className={`sub ${isInView2 ? "active" : ""}`}>
                  <ArrowLeftIcon color={isInView2 ? "#000000" : "#333333"} />
                  <p>AITI</p>
                </div>
              </Link>
              <Link href={"#NIPCO Gas Limited"}>
                <div className={`sub ${isInView3 ? "active" : ""}`}>
                  <ArrowLeftIcon color={isInView3 ? "#000000" : "#333333"} />
                  <p>NIPCO Gas Limited</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="education-section-container">
          <div className="education-section">
            <div
              className={`line-bar ${
                isInView4 || isInView5 || isInView6 ? "active" : ""
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
              <div className={`sub ${isInView4 ? "active" : ""}`}>
                <ArrowLeftIcon color={isInView4 ? "#000000" : "#333333"} />
                <p>UoPeople</p>
              </div>
              <div className={`sub ${isInView5 ? "active" : ""}`}>
                <ArrowLeftIcon color={isInView5 ? "#000000" : "#333333"} />
                <p>ALX</p>
              </div>
              <div className={`sub ${isInView6 ? "active" : ""}`}>
                <ArrowLeftIcon color={isInView6 ? "#000000" : "#333333"} />
                <p>Coursera</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
