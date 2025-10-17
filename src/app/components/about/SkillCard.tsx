import Image, { StaticImageData } from "next/image";
import placeHolderImg from "@public/images/image-placeholder.png";

interface ISkillCard {
  title: string;
  imgSrc: string | StaticImageData;
}

const SkillCard = ({ title, imgSrc }: ISkillCard) => {
  return (
    <div className="skill_card">
      <div className="skill_image">
        <Image src={imgSrc || placeHolderImg} alt={`${title} logo`} fill />
      </div>
      <p>{title}</p>
    </div>
  );
};

export default SkillCard;
