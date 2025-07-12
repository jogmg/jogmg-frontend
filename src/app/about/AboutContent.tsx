"use client";

import Education from "@app/components/about/Education";
import LanguageCard from "@app/components/about/LanguageCard";
import SideSections from "@app/components/about/SideSections";
import SkillCard from "@app/components/about/SkillCard";
import WorkExperience from "@app/components/about/WorkExperience";
import LoadingSkeleton from "@app/components/LoadingSkeleton";
import { lexend } from "@app/fonts";
import { getEducation, getSkills, getWorkExperiences } from "@app/query";
import useSharedContext from "@app/SharedContext";
import worldIcon from "@public/icons/world-svgrepo-com.svg";
import OfficialImage from "@public/images/official-image.webp";
import { useQueries } from "@tanstack/react-query";
import Image from "next/image";

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
    { data: workExperiences, isSuccess: isWESuccessful },
    { data: education, isSuccess: isEduSuccessful },
    { data: skills, isSuccess: isSkillsSuccessful },
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
      {
        queryKey: ["skills"],
        queryFn: getSkills,
        staleTime: 24 * 60 * 60 * 1000,
      },
    ],
  });

  return (
    <main className="about">
      <div className="left_section_container">
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
        <aside className="skill_container left">
          <h4 className={`h4 ${lexend.className}`}>Skills</h4>
          <div className="skills">
            {isSkillsSuccessful
              ? skills.map((skill) => (
                  <SkillCard
                    key={skill._id}
                    title={skill.title}
                    imgSrc={skill.imgSrc}
                  />
                ))
              : Array.from({ length: 3 }).map((_, idx) => (
                  <LoadingSkeleton key={idx} skill />
                ))}
          </div>
        </aside>
      </div>
      <section className="work-experience-education">
        <h1 className={`h3 ${lexend.className}`}>Work Experience</h1>
        {isWESuccessful
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
        {isEduSuccessful
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
      <div className="right_section_container">
        <aside className="side-sections">
          <h4 className={`h4 ${lexend.className}`}>Sections</h4>
          <SideSections workExp={workExperiences} education={education} />
        </aside>
        <aside className="skill_container">
          <h4 className={`h4 ${lexend.className}`}>Skills</h4>
          <div className="skills">
            {isSkillsSuccessful
              ? skills.map((skill) => (
                  <SkillCard
                    key={skill._id}
                    title={skill.title}
                    imgSrc={skill.imgSrc}
                  />
                ))
              : Array.from({ length: 3 }).map((_, idx) => (
                  <LoadingSkeleton key={idx} skill />
                ))}
          </div>
        </aside>
      </div>
    </main>
  );
};

export default AboutContent;
