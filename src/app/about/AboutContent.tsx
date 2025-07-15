"use client";

import EducationCard from "@app/components/about/EducationCard";
import LanguageCard from "@app/components/about/LanguageCard";
import SideNav from "@app/components/about/SideNav";
import SkillCard from "@app/components/about/SkillCard";
import WorkExperienceCard from "@app/components/about/WorkExperienceCard";
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
        <aside className="side_intro">
          <div className="image_container">
            <Image src={OfficialImage} alt="Official Image" fill />
          </div>
          <div className="details">
            <div className="heading_container">
              <h3 className={`h3 ${lexend.className}`}>Joshua Attah</h3>
              <p className="role_text">Software Developer</p>
            </div>
            <div className="location_container">
              <Image src={worldIcon} alt="World Icon" />
              <p>Kaduna, Nigeria</p>
            </div>
            <div className="language_container">
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
      <section className="workexp_education">
        <h1 className={`h3 ${lexend.className}`}>Work Experience</h1>
        {isWESuccessful
          ? workExperiences?.map((exp) => (
              <WorkExperienceCard
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
              <EducationCard
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
        <aside className="side_nav_container">
          <h4 className={`h4 ${lexend.className}`}>Sections</h4>
          <SideNav workExp={workExperiences} education={education} />
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
