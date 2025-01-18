import Image from "next/image";
import SSImage from "../../../public/images/ss.webp";
import chevronUpIcon from "../../../public/icons/chevron-up.svg";
import GithubIcon from "./GithubIcon";
import Button from "./Button";

export default function Portfolio() {
  return (
    <div className="portfolio-container">
      <Image
        src={SSImage}
        alt="Synthesis Society Image"
        fill
        className="image"
      />
      <div className="portfolio-details">
        <div className="heading">
          <div className="loop-icon">
            <div className="circle"></div>
            <video autoPlay loop muted className="vid-loop">
              <source src="/green-ring-loop.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p>Synthesis Society</p>
          <Image src={chevronUpIcon} alt="Chevron Up Icon" />
        </div>
        <div className="cta-container">
          <div className="ctas">
            <GithubIcon width="50" height="50" />
            <Button text="View Project" type="portfolio" />
          </div>
        </div>
      </div>
    </div>
  );
}
