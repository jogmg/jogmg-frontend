"use client";

import EducationCard from "@app/components/about/EducationCard";
import LanguageCard from "@app/components/about/LanguageCard";
import SideNav from "@app/components/about/SideNav";
import SkillMarquee from "@app/components/about/SkillMarquee";
import WorkExperienceCard from "@app/components/about/WorkExperienceCard";
import LoadingSkeleton from "@app/components/LoadingSkeleton";
import { lexend } from "@app/util/fonts";
import { formatToWAT } from "@app/util/helpers";
import { getEducation, getSkills, getWorkExperiences } from "@app/util/query";
import useSharedContext from "@app/util/SharedContext";
import worldIcon from "@public/icons/world-svgrepo-com.svg";
import OfficialImage from "@public/images/official-image.webp";
import { useQueries } from "@tanstack/react-query";
import Image from "next/image";
import { useEffect, useState } from "react";

const AboutContent = () => {
  const { setExpInViews, setEduInViews } = useSharedContext();
  const [time, setTime] = useState<Date>();

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

  useEffect(() => {
    setTime(new Date());

    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

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
              <div className="location_details">
                <p className="location">Kaduna, Nigeria</p>
                <p className="time">{time ? formatToWAT(time) : null}</p>
              </div>
            </div>
            <div className="language_container">
              <LanguageCard text="English" level="100%" />
              <LanguageCard text="German" level="40%" />
            </div>
          </div>
        </aside>
        <SkillMarquee
          skills={skills}
          isSkillsSuccessful={isSkillsSuccessful}
          className="left"
        />
      </div>
      <section className="workexp_education">
        <h1 className={`h3 ${lexend.className}`}>Work Experience</h1>
        {isWESuccessful && workExperiences
          ? workExperiences.map((exp) => (
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
        {isEduSuccessful && education
          ? education.map((edu) => (
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
        <SkillMarquee skills={skills} isSkillsSuccessful={isSkillsSuccessful} />
      </div>
    </main>
  );
};

export default AboutContent;
