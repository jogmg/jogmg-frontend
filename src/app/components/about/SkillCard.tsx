import Image, { StaticImageData } from "next/image";

interface ISkillCard {
  title: string;
  imgSrc: string | StaticImageData;
}

const SkillCard = ({ title, imgSrc }: ISkillCard) => {
  return (
    <div className="skill_card">
      <div className="skill_image">
        <Image src={imgSrc} alt={`${title} logo`} fill />
      </div>
      <p>{title}</p>
    </div>
  );
};

export default SkillCard;
