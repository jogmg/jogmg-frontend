"use client";

import { IEducationData } from "@app/query";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

interface IEducation {
  education: IEducationData;
  toggleInViews: (id: string, inView: boolean) => void;
}

export default function Education({ education, toggleInViews }: IEducation) {
  const { _id, title, field, date, imgSrc } = education;

  const { ref } = useInView({
    threshold: 1,
    onChange: (inView: boolean) => toggleInViews(_id, inView),
  });

  return (
    <div id={title.toLowerCase()} ref={ref} className="education-card">
      <div className="education-image-container">
        <Image
          src={imgSrc}
          alt={title + " Image"}
          className="education-image"
          fill
        />
      </div>
      <div className="education">
        <h5>{title}</h5>
        <div>
          <p className="field">{field}</p>
          <p className="date">
            {date.split("(")[0]}
            {date.includes("(") && (
              <span className="duration">
                ({date.split("(")[1].split(")")[0]})
              </span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
