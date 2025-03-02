import { lexend } from "../fonts";
import Image from "next/image";
import arrowUpRightIcon from "../../../public/icons/arrow-up-right.svg";
import sendIcon from "../../../public/icons/send-fill.svg";
import chevronRightIcon from "../../../public/icons/chevron-right.svg";
import arrowLeftIcon from "../../../public/icons/arrow-left-short.svg";
import arrowRightCircleIcon from "../../../public/icons/arrow-right-circle-fill.svg";
import Link from "next/link";
import LoadingCircleIcon from "./LoadingCirlceIcon";

interface Props {
  text: string;
  type?: "button" | "submit" | "reset";
  btnType: "main" | "alt" | "portfolio";
  id?: string;
  action?: () => void;
  iconType?: "new-tab" | "send" | "forward" | "back";
  linkUrl?: string;
  status?: "initial" | "sending";
}

export default function Button({
  text,
  type = "button",
  id,
  action,
  btnType,
  iconType,
  linkUrl = undefined,
  status = "initial",
}: Props) {
  return (
    <>
      {linkUrl ? (
        <Link
          className={btnType === "portfolio" ? "portfolio-btn" : undefined}
          href={linkUrl}
          target={btnType === "portfolio" ? "_blank" : undefined}
          aria-label={text}
        >
          <button
            type={type}
            className={`${
              btnType === "main"
                ? "main-btn"
                : btnType === "alt"
                ? "alt-btn"
                : ""
            } ${lexend.className}`}
            id={id}
            onClick={action}
          >
            {iconType === "back" && (
              <Image src={arrowLeftIcon} alt="Arrow Left Icon" />
            )}
            {btnType === "portfolio" && (
              <Image
                src={arrowRightCircleIcon}
                alt="Arrow Right Circle Icon"
                className="right-arrow-icon"
              />
            )}
            {btnType === "portfolio" ? (
              <div className="pop-side">{text}</div>
            ) : (
              text
            )}
            {iconType === "new-tab" && (
              <Image src={arrowUpRightIcon} alt="Arrow Up Right Icon" />
            )}
            {iconType === "send" && <Image src={sendIcon} alt="Send Icon" />}
            {iconType === "forward" && (
              <Image src={chevronRightIcon} alt="Chevron Right Icon" />
            )}
          </button>
        </Link>
      ) : (
        <button
          type={type}
          className={`${
            btnType === "main" ? "main-btn" : btnType === "alt" ? "alt-btn" : ""
          } ${lexend.className}`}
          id={id}
          onClick={action}
        >
          {iconType === "back" && (
            <Image src={arrowLeftIcon} alt="Arrow Left Icon" />
          )}
          {btnType === "portfolio" && (
            <Image
              src={arrowRightCircleIcon}
              alt="Arrow Right Circle Icon"
              className="right-arrow-icon"
            />
          )}
          {btnType === "portfolio" ? (
            <div className="pop-side">{text}</div>
          ) : (
            text
          )}
          {iconType === "new-tab" && (
            <Image src={arrowUpRightIcon} alt="Arrow Up Right Icon" />
          )}
          {iconType === "send" && status !== "sending" && (
            <Image src={sendIcon} alt="Send Icon" />
          )}
          {iconType === "forward" && (
            <Image src={chevronRightIcon} alt="Chevron Right Icon" />
          )}
          {status === "sending" && <LoadingCircleIcon />}
        </button>
      )}
    </>
  );
}
