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
import { SharedContextProvider } from "../SharedContext";

export default function page() {
  const workExperience: WorkExperienceProps[] = [
    {
      title: "Primed E-health",
      role: "Software Developer Intern (Backend)",
      duration: "Apr. - Nov. 2024 (8 mos)  •  Remote  •  Full-Time",
      descs: [
        "Developed backend features for the Virtual Clinic telemedicine app, including forgot and reset password functionality using Sendchamp for SMS-based OTP delivery, and CRUD operations for imaging management.",
        "Built and maintained the push notification update token endpoint to keep users’ notification tokens updated for real-time alerts.",
      ],
      imgSrc: primedEhealthImage,
    },
    {
      title: "AITI",
      role: "Tech Mentor",
      duration: "Apr. - Nov. 2024 (8 mos)  •  Remote  •  Full-Time",
      descs: [
        "Review and provide feedback on student projects involving both frontend development (React, Next.js) and backend development (Express, MongoDB), ensuring they meet industry standards and best practices.",
        "Break down and structure tutor videos for both frontend and backend development into clear, digestible sections, making complex concepts easier for students to understand and apply.",
      ],
      imgSrc: aitiImage,
    },
    {
      title: "NIPCO Gas Limited",
      role: "Data Entry Clerk",
      duration: "Jan. - Jun. 2023 (6 mos)  •  On-site  •  Full-Time",
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
      duration: "2023 - Present",
      imgSrc: uopeopleImage,
    },
    {
      title: "ALX",
      field: "Software Engineering (Backend Specialization)",
      duration: "Jan. 2023 - Mar. 2024 (1yr 2 mos)",
      imgSrc: alxImage,
    },
    {
      title: "Coursera",
      field: "Google UX Design",
      duration: "Dec. 2022 - Jun. 2023 (7 mos)",
      imgSrc: courseraImage,
    },
  ];

  return (
    <main className="about">
      <SharedContextProvider>
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
              duration={item.duration}
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
              duration={item.duration}
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
      </SharedContextProvider>
    </main>
  );
}
