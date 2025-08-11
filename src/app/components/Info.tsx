import Image from "next/image";
import arrowUp from "@public/icons/arrow-up-info.svg";

interface IInfo {
  text: string;
  posY?: string;
  show?: boolean;
  textWrap?: boolean;
}

export default function Info({
  text,
  posY,
  show = false,
  textWrap = false,
}: IInfo) {
  const posType = posY?.split("-")[1];

  return (
    <div className={`info_container ${posY} ${show ? "flex" : "hidden"}`}>
      <div className="info">
        <Image
          className={`${
            posType?.includes("top")
              ? "rotate-180 -bottom-[13px]"
              : "-top-[13px]"
          }`}
          src={arrowUp}
          alt="Arrow Up Icon"
        />
        <p className={textWrap ? "whitespace-nowrap" : undefined}>{text}</p>
      </div>
    </div>
  );
}
