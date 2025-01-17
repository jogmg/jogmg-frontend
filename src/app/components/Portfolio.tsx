import Image from "next/image";
import SSImage from "../../../public/images/ss.webp";
import chevronUpIcon from "../../../public/icons/chevron-up.svg";
import GithubIcon from "./GithubIcon";
import arrowRightCircleIcon from "../../../public/icons/arrow-right-circle-fill.svg";

export default function Portfolio() {
  return (
    <div className="relative w-[368px] h-[221px] rounded-[25px] overflow-hidden">
      <Image
        src={SSImage}
        alt="Synthesis Society Image"
        fill
        className="absolute object-cover"
      />
      <div className="absolute bottom-0 px-[30px] py-[10px] w-full bg-background-(alt)">
        <div className="flex items-center gap-[9px]">
          <div className="relative flex items-center justify-center w-[15px] h-[15px] rounded-full overflow-hidden">
            <div className="absolute w-[5px] h-[5px] rounded-full bg-primary"></div>
            <video autoPlay loop muted className="object-cover w-full h-full">
              <source src="/green-ring-loop.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p>Synthesis Society</p>
          <Image src={chevronUpIcon} alt="Chevron Up Icon" />
        </div>
        <div className="absolute bottom-[25px] right-[30px] flex gap-[7px]">
          <GithubIcon className="h-[54px]" />
          <Image src={arrowRightCircleIcon} alt="Arrow Right Circle Icon" />
        </div>
      </div>
    </div>
  );
}
