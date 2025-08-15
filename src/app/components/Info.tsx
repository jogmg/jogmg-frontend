import InfoArrowIcon from "./icons/InfoArrowIcon";

interface IInfo {
  text: string;
  posY?: string;
  textWrap?: boolean;
  icon?: boolean;
}

export default function Info({
  text,
  posY,
  textWrap = false,
  icon = false,
}: IInfo) {
  const posType = posY?.split("-")[1];

  return (
    <div className={`info_container ${posY}`}>
      <div className="info">
        <InfoArrowIcon
          className={`${
            posType?.includes("top")
              ? "rotate-180 -bottom-[13px]"
              : "-top-[13px]"
          }`}
        />
        {icon ? (
          <i className="bi bi-exclamation-triangle-fill text-red-500"></i>
        ) : undefined}
        <p className={textWrap ? "whitespace-nowrap" : undefined}>{text}</p>
      </div>
    </div>
  );
}
