import Image from "next/image";
import { lexend } from "../fonts";
import LanguageCard from "../components/LanguageCard";
import WorkExperience, {
  WorkExperienceProps,
} from "../components/WorkExperience";
import Education, { EducationProps } from "../components/Education";
import SideSections from "../components/SideSections";
import worldIcon from "../../../public/icons/world-svgrepo-com.svg";
import OfficialImage from "../../../public/images/official-image.webp";
import primedEhealthImage from "../../../public/images/primedehealth.webp";
import aitiImage from "../../../public/images/aiti.webp";
import nipcoImage from "../../../public/images/nipcogas.webp";
import uopeopleImage from "../../../public/images/uopeople.webp";
import alxImage from "../../../public/images/alx.webp";
import courseraImage from "../../../public/images/coursera.webp";
import ssImage from "../../../public/images/sslogo.webp"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Joshua Attah.",
};

export default function page() {
  const workExperience: WorkExperienceProps[] = [
    {
      title: "Synthesis Society",
      role: "Web Developer & Editor",
      date: "Jan. 2024 - Present  •  Remote  •  Part-Time",
      descs: [
        "Develop, update and maintain the organization's website.",
        "Design and edit event related materials including flyers, tickets, banners, logos and videos.",
      ],
      imgSrc: ssImage,
    },
    {
      title: "Primed E-health",
      role: "Software Developer Intern",
      date: "Apr. 2024 - Nov. 2024 (8 mos)  •  Remote  •  Full-Time",
      descs: [
        "Collaborated on the Virtual Clinic telemedicine mobile app to develop forgot and reset password functionality using Sendchamp for SMS-based OTP delivery, and added push notification update functionality for real-time alerts.",
        "Implemented CRUD operations for imaging management.",
        "Built Angular web app, and implemented user authentication service with Nestjs.",
      ],
      imgSrc: primedEhealthImage,
    },
    {
      title: "AITI",
      role: "Tech Mentor",
      date: "Apr. 2024 - Nov. 2024 (8 mos)  •  Remote  •  Full-Time",
      descs: [
        "Mentored students in both frontend and backend development.",
        "Broke down tutor videos into clear, digestible sections to enhance their learning experience.",
      ],
      imgSrc: aitiImage,
    },
    {
      title: "NIPCO Gas Limited",
      role: "Data Entry Clerk",
      date: "Jan. 2023 - Jun. 2023 (6 mos)  •  On-site  •  Full-Time",
      descs: [
        "Accurately inputted, organized, and stored data in MS Excel, including expense records for repairs, and maintained digital copies by scanning and saving documents.",
        "Prepared and generated monthly reports summarizing total expenses incurred on repairs, ensuring timely and accurate financial tracking.",
      ],
      imgSrc: nipcoImage,
    },
  ];

  const education: EducationProps[] = [
    {
      title: "University of the People",
      field: "B.Sc Computer Science",
      date: "2023 - Present",
      imgSrc: uopeopleImage,
    },
    {
      title: "ALX",
      field: "Software Engineering",
      date: "Jan. 2023 - Mar. 2024 (1yr 2 mos)",
      imgSrc: alxImage,
    },
    {
      title: "Coursera",
      field: "Google UX Design",
      date: "Dec. 2022 - Jun. 2023 (7 mos)",
      imgSrc: courseraImage,
    },
  ];

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
        {workExperience.map((item, index) => (
          <WorkExperience
            key={index}
            title={item.title}
            role={item.role}
            date={item.date}
            descs={item.descs}
            imgSrc={item.imgSrc}
          />
        ))}
        <h2 className={`h3 ${lexend.className}`}>Education</h2>
        {education.map((item, index) => (
          <Education
            key={index}
            title={item.title}
            field={item.field}
            date={item.date}
            imgSrc={item.imgSrc}
          />
        ))}
      </section>
      <aside className="side-sections-container">
        <nav className="side-sections">
          <h4 className={`h4 ${lexend.className}`}>Sections</h4>
          <SideSections />
        </nav>
      </aside>
    </main>
  );
}
