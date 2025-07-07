"use client";

import Image from "next/image";
import { useState } from "react";
import ChevronUpIcon from "../../../public/icons/chevron-up.svg";
import useSharedContext from "../SharedContext";
import { IEducation, IWorkExperience } from "../queries/query";
import SideSectionNavItem from "./SideSectionNavItem";

interface ISideSections {
  workExp?: IWorkExperience[];
  education?: IEducation[];
}

export default function SideSections({ workExp, education }: ISideSections) {
  const { expInViews, eduInViews } = useSharedContext();
  const [isWorkActive, setIsWorkActive] = useState(false);
  const [isEduActive, setIsEduActive] = useState(false);

  const handleSetIsWorkActive = () => {
    setIsWorkActive((prev) => !prev);
  };

  const handleSetIsEduActive = () => {
    setIsEduActive((prev) => !prev);
  };

  return (
    <div className="sections-container">
      <div className="line-bar-bg"></div>
      <div className="sections">
        <div className="work-section-container">
          <div
            className={`line-bar ${
              Object.values(expInViews).some((inView) => inView === true)
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
              {workExp?.map((exp) => (
                <SideSectionNavItem
                  key={exp._id}
                  title={exp.title}
                  isInView={expInViews[exp._id]}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="education-section-container">
          <div className="education-section">
            <div
              className={`line-bar ${
                Object.values(eduInViews).some((inView) => inView === true)
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
              {education?.map((edu) => (
                <SideSectionNavItem
                  key={edu._id}
                  title={
                    edu.title === "University of the People"
                      ? "UoPeople"
                      : edu.title
                  }
                  isInView={eduInViews[edu._id]}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
