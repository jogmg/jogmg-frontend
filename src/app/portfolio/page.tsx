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
      title: "Synthesis Society",
      bgUrl: ssImage,
      mainUrl: "https://synthesissociety.com",
      ctaUrl: "https://github.com/JoGMG/synthesis-society",
      ctaType: "github",
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
      title: "Mayeso",
      bgUrl: mayesoImage,
      ctaType: "github",
      mainUrl: "https://mayeso.netlify.app/",
      ctaUrl: "https://github.com/JoGMG/mayeso",
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
      title: "Know Your Movies",
      bgUrl: kymImage,
      ctaType: "github",
      mainUrl: "https://jogmg.github.io/know-your-movies/dynamic/home_page.html",
      ctaUrl: "https://github.com/JoGMG/know-your-movies",
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
      title: "UBA Redesign",
      bgUrl: ubaImage,
      ctaType: "adobexd",
      mainUrl: "https://docs.google.com/presentation/d/11xygpCqqnT_WWE73yq61G5b7cWG1T_O6k3Q1licJw7s/edit?usp=sharing",
      ctaUrl: "https://xd.adobe.com/view/31081c83-8b82-4d49-8c3d-31a0b2a8c64a-645b/?fullscreen",
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
      title: "ComeUp",
      bgUrl: comeupImage,
      ctaType: "adobexd",
      mainUrl: "https://docs.google.com/presentation/d/1NOv66HgnTt617qK9F6iKo4L9xJGleja7X_9Kda568wc/edit?usp=sharing",
      ctaUrl: "https://xd.adobe.com/view/cfcf1443-c8c0-49c0-8dc4-abffe5ae9303-9a9c/",
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
      title: "Joko",
      bgUrl: jokoImage,
      ctaType: "figma",
      mainUrl: "https://docs.google.com/presentation/d/1lgxcA4mQRFI7TAIhRdJB0WzkAwn0WrVXG5ltLvaFp-I/edit?usp=sharing",
      ctaUrl: "https://www.figma.com/proto/3i5tXuf07tiLBIUsw75d23/UX-Design-Certificate---Portfolio-Project-1-%5BA-seat-reservation-app-Joko%5D?page-id=92%3A2&type=design&node-id=133-31&viewport=408%2C182%2C0.32&t=QFsTaULImxaPF05E-1&scaling=scale-down&starting-point-node-id=710%3A6148&show-proto-sidebar=1&mode=design",
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
          title={portfolio.title}
          bgUrl={portfolio.bgUrl}
          mainUrl={portfolio.mainUrl}
          ctaUrl={portfolio.ctaUrl}
          ctaType={portfolio.ctaType}
          descs={portfolio.descs}
        />
      ))}
    </main>
  );
}
