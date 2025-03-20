"use client";

import Image, { StaticImageData } from "next/image";
import useSharedContext from "../SharedContext";
import { useInView } from "react-intersection-observer";

export interface EducationProps {
  title: string;
  field: string;
  date: string;
  imgSrc: StaticImageData;
}

export default function Education({
  title,
  field,
  date,
  imgSrc,
}: EducationProps) {
  const { setIsInView } = useSharedContext();

  const { ref: ref5 } = useInView({
    threshold: 0,
    onChange(inView: boolean) {
      setIsInView("isInView5", inView);
    },
  });

  const { ref: ref6 } = useInView({
    threshold: 0,
    onChange(inView: boolean) {
      setIsInView("isInView6", inView);
    },
  });

  const { ref: ref7 } = useInView({
    threshold: 0,
    onChange(inView: boolean) {
      setIsInView("isInView7", inView);
    },
  });

  return (
    <>
      <article className="education-container" id={title}>
        <div className="education-card">
          <div className="education-image-container">
            <Image
              src={imgSrc}
              alt={title + " Image"}
              className="education-image"
              placeholder="blur"
              fill
            />
          </div>
          <div className="education">
            <h5
              ref={
                title === "University of the People"
                  ? ref5
                  : title === "ALX"
                  ? ref6
                  : title === "Coursera"
                  ? ref7
                  : undefined
              }
            >
              {title}
            </h5>
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
      </article>
    </>
  );
}
