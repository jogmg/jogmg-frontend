"use client";

import { useQueries } from "@tanstack/react-query";
import Image from "next/image";
import worldIcon from "../../../public/icons/world-svgrepo-com.svg";
import OfficialImage from "../../../public/images/official-image.webp";
import Education from "../components/Education";
import LanguageCard from "../components/LanguageCard";
import LoadingSkeleton from "../components/LoadingSkeleton";
import SideSections from "../components/SideSections";
import WorkExperience from "../components/WorkExperience";
import { lexend } from "../fonts";
import { getEducation, getWorkExperiences } from "../queries/query";
import useSharedContext from "../SharedContext";

const AboutContent = () => {
  const { setExpInViews, setEduInViews } = useSharedContext();

  const toggleExpInViews = (id: string, inView: boolean) => {
    setExpInViews((prev) => ({
      ...prev,
      [id]: inView,
    }));
  };

  const toggleEduInViews = (id: string, inView: boolean) => {
    setEduInViews((prev) => ({
      ...prev,
      [id]: inView,
    }));
  };

  const [
    { data: workExperiences, isSuccess: isSuccessWE },
    { data: education, isSuccess: isSuccessEdu },
  ] = useQueries({
    queries: [
      {
        queryKey: ["workExperiences"],
        queryFn: getWorkExperiences,
        staleTime: 24 * 60 * 60 * 1000,
      },
      {
        queryKey: ["education"],
        queryFn: getEducation,
        staleTime: 24 * 60 * 60 * 1000,
      },
    ],
  });

  return (
    <main className="about">
      <aside className="side-intro">
        <div className="side-intro-image">
          <Image
            src={OfficialImage}
            alt="Official Image"
            className="official-image"
            fill
          />
        </div>
        <div className="side-intro-details">
          <div className="title-role">
            <h3 className={`h3 ${lexend.className}`}>Joshua Attah</h3>
            <p className="text-primary">Software Developer</p>
          </div>
          <div className="location">
            <Image src={worldIcon} alt="World Icon" />
            <p>Kaduna, Nigeria</p>
          </div>
          <div className="language-container">
            <LanguageCard text="English" level="100%" />
            <LanguageCard text="German" level="40%" />
          </div>
        </div>
      </aside>
      <section className="work-experience-education">
        <h1 className={`h3 ${lexend.className}`}>Work Experience</h1>
        {isSuccessWE
          ? workExperiences?.map((exp) => (
              <WorkExperience
                key={exp._id}
                workExp={exp}
                toggleInViews={toggleExpInViews}
              />
            ))
          : Array.from({ length: 2 }).map((_, idx) => (
              <LoadingSkeleton key={idx} workExp />
            ))}
        <h2 className={`h3 ${lexend.className}`}>Education</h2>
        {isSuccessEdu
          ? education?.map((edu) => (
              <Education
                key={edu._id}
                education={edu}
                toggleInViews={toggleEduInViews}
              />
            ))
          : Array.from({ length: 2 }).map((_, idx) => (
              <LoadingSkeleton key={idx} education />
            ))}
      </section>
      <aside className="side-sections">
        <h4 className={`h4 ${lexend.className}`}>Sections</h4>
        <SideSections workExp={workExperiences} education={education} />
      </aside>
    </main>
  );
};

export default AboutContent;
