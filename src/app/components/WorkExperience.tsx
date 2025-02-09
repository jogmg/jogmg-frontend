"use client";

import Image, { StaticImageData } from "next/image";
import useSharedContext from "../SharedContext";
const useInView = require("react-intersection-observer").useInView;

export interface WorkExperienceProps {
  title: string;
  role: string;
  duration: string;
  descs: string[];
  imgSrc: StaticImageData;
}

export default function WorkExperience({
  title,
  role,
  duration,
  descs,
  imgSrc,
}: WorkExperienceProps) {
  const { setIsInView1, setIsInView2, setIsInView3 } = useSharedContext();

  const { ref: ref1 } = useInView({
    threshold: 0,
    onChange(inView: boolean) {
      setIsInView1(inView);
    },
  });

  const { ref: ref2 } = useInView({
    threshold: 0,
    onChange(inView: boolean) {
      setIsInView2(inView);
    },
  });

  const { ref: ref3 } = useInView({
    threshold: 0,
    onChange(inView: boolean) {
      setIsInView3(inView);
    },
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
            <h5>{title}</h5>
            <div>
              <p className="role">{role}</p>
              <p>
                {duration.split("(")[0]}
                {duration.includes("(") && (
                  <span className="duration">
                    ({duration.split("(")[1].split(")")[0]})
                  </span>
                )}
                {duration.split(")")[1]}
              </p>
            </div>
            <ol className="desc">
              {descs.map((desc, index) => (
                <li
                  key={index}
                  ref={
                    title === "Primed E-health" && index === descs.length - 1
                      ? ref1
                      : title === "AITI" && index === descs.length - 1
                      ? ref2
                      : title === "NIPCO Gas Limited" &&
                        index === descs.length - 1
                      ? ref3
                      : undefined
                  }
                >
                  {desc}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </article>
    </>
  );
}
