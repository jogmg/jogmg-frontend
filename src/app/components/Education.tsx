"use client";

import Image, { StaticImageData } from "next/image";
import useSharedContext from "../SharedContext";
import { useInView } from "react-intersection-observer";

export interface EducationProps {
  title: string;
  field: string;
  duration: string;
  imgSrc: StaticImageData;
}

export default function Education({
  title,
  field,
  duration,
  imgSrc,
}: EducationProps) {
  const { setIsInView } = useSharedContext();

  const { ref: ref4 } = useInView({
    threshold: 0,
    onChange(inView: boolean) {
      setIsInView("isInView4", inView);
    },
  });

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
            <h5>{title}</h5>
            <div>
              <p className="field">{field}</p>
              <p
                ref={
                  title === "University of the People"
                    ? ref4
                    : title === "ALX"
                    ? ref5
                    : title === "Coursera"
                    ? ref6
                    : undefined
                }
              >
                {duration.split("(")[0]}
                {duration.includes("(") && (
                  <span className="duration">
                    ({duration.split("(")[1].split(")")[0]})
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
