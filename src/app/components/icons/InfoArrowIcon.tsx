interface InfoArrowIconProps {
  className: string;
}

const InfoArrowIcon = ({ className }: InfoArrowIconProps) => {
  return (
    <svg
      width="20"
      height="11"
      viewBox="0 0 20 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M18.793 9.5H1.20703L10 0.707031L18.793 9.5Z"
        fill="black"
        stroke="#59ED82"
      />
      <rect y="8.5" width="20" height="2" fill="black" />
    </svg>
  );
};

export default InfoArrowIcon;
