import { lexend } from "../fonts";
import Image from "next/image";
import arrowUpRightIcon from "../../../public/icons/arrow-up-right.svg";
import sendIcon from "../../../public/icons/send-fill.svg";
import chevronRightIcon from "../../../public/icons/chevron-right.svg";
import arrowLeftIcon from "../../../public/icons/arrow-left-short.svg";
import arrowRightCircleIcon from "../../../public/icons/arrow-right-circle-fill.svg";

interface Props {
  text: string;
  type: "main" | "alt" | "portfolio";
  id?: string;
  action?: () => void;
  iconType?: "link" | "send" | "forward" | "back";
}

export default function Button({ text, type, id, action, iconType }: Props) {
  return (
    <>
      {type === "main" && (
        <button
          type="button"
          className={`main-btn ${lexend.className}`}
          id={id}
        >
          {text}
          {iconType === "link" && (
            <Image src={arrowUpRightIcon} alt="Arrow Up Right Icon" />
          )}
          {iconType === "send" && <Image src={sendIcon} alt="Send Icon" />}
        </button>
      )}
      {type === "alt" && (
        <button
          type="button"
          className={`alt-btn ${lexend.className}`}
          id={id}
          onClick={action}
        >
          {iconType === "back" && (
            <Image src={arrowLeftIcon} alt="Arrow Left Icon" />
          )}
          {text}
          {iconType === "forward" && (
            <Image src={chevronRightIcon} alt="Chevron Right Icon" />
          )}
        </button>
      )}
      {type === "portfolio" && (
        <button
          type="button"
          className={`portfolio-btn ${lexend.className}`}
          id={id}
        >
          <div className="container">
            <Image src={arrowRightCircleIcon} alt="Arrow Right Circle Icon" className="right-arrow-icon" />
            <div className="pop-side">
              {text}
            </div>
          </div>
        </button>
      )}
    </>
  );
}
