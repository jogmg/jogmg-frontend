"use client";

import useSharedContext from "@app/util/SharedContext";
import SideNavLink from "@app/components/about/SideNavLink";
import { IEducationData, IWorkExperienceData } from "@app/util/query";
import ChevronUpIcon from "@public/icons/chevron-up.svg";
import Image from "next/image";
import { useState } from "react";

interface ISideNav {
  workExp?: IWorkExperienceData[];
  education?: IEducationData[];
}

export default function SideNav({ workExp, education }: ISideNav) {
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
    <div className="side_nav">
      <div className="line_bar_bg"></div>
      <div className="sections">
        <div className="workexp_section_container">
          <div
            className={`line_bar ${
              Object.values(expInViews).some((inView) => inView === true)
                ? "active"
                : ""
            }`}
          ></div>
          <div className="workexp_section">
            <div className="main_section" onClick={handleSetIsWorkActive}>
              <p>Work Experience</p>
              <Image
                src={ChevronUpIcon}
                alt="Chevron Up Icon"
                className={`chevron_up_icon ${isWorkActive ? "active" : ""}`}
              />
            </div>
            <div className={`sub_section ${isWorkActive ? "active" : ""}`}>
              {workExp?.map((exp) => (
                <SideNavLink
                  key={exp._id}
                  title={exp.title}
                  isInView={expInViews[exp._id]}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="education_section_container">
          <div
            className={`line_bar ${
              Object.values(eduInViews).some((inView) => inView === true)
                ? "active"
                : ""
            }`}
          ></div>
          <div className="education_section">
            <div className="main_section" onClick={handleSetIsEduActive}>
              <p>Education</p>
              <Image
                src={ChevronUpIcon}
                alt="Chevron Up Icon"
                className={`chevron_up_icon ${isEduActive ? "active" : ""}`}
              />
            </div>
            <div className={`sub_section ${isEduActive ? "active" : ""}`}>
              {education?.map((edu) => (
                <SideNavLink
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
