import Link from "next/link";
import ArrowLeftIcon from "./ArrowLeftIcon";

interface Props {
  title: string;
  isInView: boolean;
}

export default function SideSectionNavItem({ title, isInView }: Props) {
  return (
    <Link
      href={`#${title === "UoPeople" ? "University of the People" : title}`}
    >
      <div className={`sub ${isInView ? "active" : ""}`}>
        <ArrowLeftIcon color={isInView ? "#000000" : "#333333"} />
        <p>{title}</p>
      </div>
    </Link>
  );
}
