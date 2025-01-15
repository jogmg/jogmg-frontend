import Image from "next/image";
import SSImage from "../../../public/images/ss.webp";

export default function Portfolio() {
  return (
    <div className="flex p-[30px] w-[368px] h-[221px]">
      <Image src={SSImage} alt="Synthesis Society Image" />
    </div>
  );
}
