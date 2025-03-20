"use client";

import Image, { StaticImageData } from "next/image";
import useSharedContext from "../SharedContext";
import { useInView } from "react-intersection-observer";

export interface WorkExperienceProps {
  title: string;
  role: string;
  date: string;
  descs: string[];
  imgSrc: StaticImageData;
}

export default function WorkExperience({
  title,
  role,
  date,
  descs,
  imgSrc,
}: WorkExperienceProps) {
  const { setIsInView } = useSharedContext();

  const { ref: ref1 } = useInView({
    threshold: 0,
    onChange: (inView: boolean) => setIsInView("isInView1", inView),
  });

  const { ref: ref2 } = useInView({
    threshold: 0,
    onChange: (inView: boolean) => setIsInView("isInView2", inView),
  });

  const { ref: ref3 } = useInView({
    threshold: 0,
    onChange: (inView: boolean) => setIsInView("isInView3", inView),
  });

  const { ref: ref4 } = useInView({
    threshold: 0,
    onChange: (inView: boolean) => setIsInView("isInView4", inView),
  });

  return (
    <>
      <article className="work-experience-container" id={title}>
        <div className="work-experience-card">
          <div className="work-image-container">
            <Image
              src={imgSrc}
              alt={title + " Image"}
              className="work-image"
              placeholder="blur"
              fill
            />
          </div>
          <div className="work-experience">
            <h5
              ref={
                title === "Synthesis Society"
                  ? ref1
                  : title === "Primed E-health"
                  ? ref2
                  : title === "AITI"
                  ? ref3
                  : title === "NIPCO Gas Limited"
                  ? ref4
                  : undefined
              }
            >
              {title}
            </h5>
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
      </article>
    </>
  );
}
