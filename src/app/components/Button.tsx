import LoadingCircleIcon from "@app/components/icons/LoadingCirlceIcon";
import { lexend } from "@app/fonts";
import arrowLeftIcon from "@public/icons/arrow-left-short.svg";
import arrowRightCircleIcon from "@public/icons/arrow-right-circle-fill.svg";
import arrowUpRightIcon from "@public/icons/arrow-up-right.svg";
import chevronRightIcon from "@public/icons/chevron-right.svg";
import sendIcon from "@public/icons/send-fill.svg";
import Image from "next/image";
import Link from "next/link";

interface IButton {
  text: string;
  type?: "button" | "submit" | "reset";
  btnType: "main" | "alt" | "portfolio";
  id?: string;
  action?: () => void;
  iconType?: "new-tab" | "send" | "forward" | "back";
  linkUrl?: string;
  loading?: boolean;
}

export default function Button({
  text,
  type = "button",
  id,
  action,
  btnType,
  iconType,
  linkUrl = undefined,
  loading,
}: IButton) {
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
          {iconType === "forward" && (
            <Image src={chevronRightIcon} alt="Chevron Right Icon" />
          )}
          {iconType === "send" && !loading && (
            <Image src={sendIcon} alt="Send Icon" />
          )}
          {loading && <LoadingCircleIcon />}
        </button>
      )}
    </>
  );
}
