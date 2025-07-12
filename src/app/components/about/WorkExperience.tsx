"use client";

import { IWorkExperienceData } from "@app/query";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

interface IWorkExperience {
  workExp: IWorkExperienceData;
  toggleInViews: (id: string, inView: boolean) => void;
}

export default function WorkExperience({
  workExp,
  toggleInViews,
}: IWorkExperience) {
  const { _id, title, role, date, descs, imgSrc } = workExp;

  const { ref } = useInView({
    threshold: 1,
    onChange: (inView: boolean) => toggleInViews(_id, inView),
  });

  return (
    <div id={title.toLowerCase()} ref={ref} className="work-experience-card">
      <div className="work-image-container">
        <Image
          src={imgSrc}
          alt={title + " Image"}
          className="work-image"
          fill
        />
      </div>
      <div className="work-experience">
        <h5>{title}</h5>
        <div>
          <p className="role">{role}</p>
          <p className="date">
            {date.split("(")[0]}
            {date.includes("(") && (
              <span className="duration">
                ({date.split("(")[1].split(")")[0]})
              </span>
            )}
            {date.split(")")[1]}
          </p>
        </div>
        <ol className="desc">
          {descs.map((desc, index) => (
            <li key={index}>{desc}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}
