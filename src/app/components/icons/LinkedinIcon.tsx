import Info from "@app/components/Info";
import Link from "next/link";

interface ILinkedinIcon {
  infoPosY?: string;
}

export default function LinkedinIcon({
  infoPosY = "-bottom-[35px]",
}: ILinkedinIcon) {
  return (
    <div className="linkedin-info-container">
      <Link
        href={"https://www.linkedin.com/in/joattah"}
        target="_blank"
        aria-label="Connect with me on Linkedin"
      >
        <svg
          className="linkedin-icon"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_403_4478)">
            <path
              d="M30.0003 30.0001C35.5232 24.4772 35.5232 15.5228 30.0003 9.99992C24.4774 4.47701 15.523 4.47701 10.0001 9.99992C4.4772 15.5228 4.4772 24.4772 10.0001 30.0001C15.523 35.5231 24.4774 35.5231 30.0003 30.0001Z"
              fill="black"
            />
            <path
              id="foreground"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.135 17.1611H15.3197V27.8538H12.135V17.1611ZM13.7081 11.7347C14.2191 11.7347 14.7093 11.9377 15.0706 12.2991C15.432 12.6604 15.635 13.1505 15.635 13.6616C15.635 14.1726 15.432 14.6627 15.0706 15.0241C14.7093 15.3855 14.2191 15.5885 13.7081 15.5885C13.197 15.5885 12.707 15.3855 12.3456 15.0241C11.9843 14.6627 11.7812 14.1726 11.7812 13.6616C11.7812 13.1505 11.9843 12.6604 12.3456 12.2991C12.707 11.9377 13.197 11.7347 13.7081 11.7347ZM17.2071 17.1611H20.3528V18.6551C20.6862 18.1583 21.1369 17.7513 21.665 17.4701C22.193 17.1889 22.7823 17.0422 23.3806 17.043H24.2457C25.2038 17.0472 26.1215 17.4296 26.7989 18.1072C27.4764 18.7847 27.8588 19.7025 27.8628 20.6606V27.8538H24.717V26.8706V22.0736C24.7266 21.7937 24.6799 21.5147 24.5796 21.2532C24.4793 20.9917 24.3274 20.753 24.133 20.5513C23.9387 20.3496 23.7059 20.1889 23.4483 20.079C23.1907 19.969 22.9137 19.9119 22.6336 19.9111C22.0471 19.905 21.4812 20.1273 21.0556 20.5309C20.63 20.9344 20.3779 21.4876 20.3528 22.0736V27.8543H17.2071V17.1611Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_403_4478">
              <rect width="40" height="40" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </Link>
      <Info text="Linkedin" posY={infoPosY} />
    </div>
  );
}
