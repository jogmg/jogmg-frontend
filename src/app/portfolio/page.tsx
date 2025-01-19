import Portfolio from "../components/Portfolio";
import { PortfolioProps } from "../components/Portfolio";
import ssImage from "../../../public/images/ss.webp";
import mayesoImage from "../../../public/images/mayeso.webp";
import kymImage from "../../../public/images/kym.webp";
import ubaImage from "../../../public/images/uba.webp";
import comeupImage from "../../../public/images/comeup.webp";
import jokoImage from "../../../public/images/joko.webp";
import personIcon from "../../../public/icons/person-bounding-box.svg";
import calenderIcon from "../../../public/icons/calendar-week.svg";
import stackIcon from "../../../public/icons/stack.svg";
import gridIcon from "../../../public/icons/grid-fill.svg";

export default function page() {
  const portfolios: PortfolioProps[] = [
    {
      bgUrl: ssImage,
      ctaType: "github",
      title: "Synthesis Society",
      descs: [
        {
          iconUrl: personIcon,
          title: "Role",
          text: "Fullstack Developer",
        },
        {
          iconUrl: calenderIcon,
          title: "Duration",
          text: "May ‘24 - Jul. ‘24",
        },
        {
          iconUrl: stackIcon,
          title: "Tech",
          text: "Next.js, React, Firebase",
        },
        {
          iconUrl: gridIcon,
          title: "Type",
          text: "Web App",
        },
      ],
    },
    {
      bgUrl: mayesoImage,
      ctaType: "github",
      title: "Mayeso",
      descs: [
        {
          iconUrl: personIcon,
          title: "Role",
          text: "Backend Developer",
        },
        {
          iconUrl: calenderIcon,
          title: "Duration",
          text: "Feb. ‘24 - Mar. ‘24",
        },
        {
          iconUrl: stackIcon,
          title: "Tech",
          text: "Node.js, Express, MongoDB",
        },
        {
          iconUrl: gridIcon,
          title: "Type",
          text: "Web App",
        },
      ],
    },
    {
      bgUrl: kymImage,
      ctaType: "github",
      title: "Know Your Movies",
      descs: [
        {
          iconUrl: personIcon,
          title: "Role",
          text: "Fullstack Developer",
        },
        {
          iconUrl: calenderIcon,
          title: "Duration",
          text: "Sep. ‘23 - Nov. ‘23",
        },
        {
          iconUrl: stackIcon,
          title: "Tech",
          text: "jQuery, Flask, MySQL",
        },
        {
          iconUrl: gridIcon,
          title: "Type",
          text: "Web App",
        },
      ],
    },
    {
      bgUrl: ubaImage,
      ctaType: "adobexd",
      title: "UBA Redesign",
      descs: [
        {
          iconUrl: personIcon,
          title: "Role",
          text: "UI/UX Designer",
        },
        {
          iconUrl: calenderIcon,
          title: "Duration",
          text: "May ‘23 - Jun. ‘23",
        },
        {
          iconUrl: stackIcon,
          title: "Tech",
          text: "Adobe XD",
        },
        {
          iconUrl: gridIcon,
          title: "Type",
          text: "Web/Mobile Design",
        },
      ],
    },
    {
      bgUrl: comeupImage,
      ctaType: "adobexd",
      title: "ComeUp",
      descs: [
        {
          iconUrl: personIcon,
          title: "Role",
          text: "UI/UX Designer",
        },
        {
          iconUrl: calenderIcon,
          title: "Duration",
          text: "Mar. ‘23 - Apr. ‘23",
        },
        {
          iconUrl: stackIcon,
          title: "Tech",
          text: "Adobe XD",
        },
        {
          iconUrl: gridIcon,
          title: "Type",
          text: "Web Design",
        },
      ],
    },
    {
      bgUrl: jokoImage,
      ctaType: "figma",
      title: "Joko",
      descs: [
        {
          iconUrl: personIcon,
          title: "Role",
          text: "UI/UX Designer",
        },
        {
          iconUrl: calenderIcon,
          title: "Duration",
          text: "Dec. ‘22 - Mar. ‘23",
        },
        {
          iconUrl: stackIcon,
          title: "Tech",
          text: "Figma",
        },
        {
          iconUrl: gridIcon,
          title: "Type",
          text: "Mobile App Design",
        },
      ],
    },
  ];

  return (
    <main className="portfolio">
      {portfolios.map((portfolio, index) => (
        <Portfolio
          key={index}
          bgUrl={portfolio.bgUrl}
          title={portfolio.title}
          ctaType={portfolio.ctaType}
          descs={portfolio.descs}
        />
      ))}
    </main>
  );
}
