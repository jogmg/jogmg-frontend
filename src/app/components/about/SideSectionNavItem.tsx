import ArrowLeftIcon from "@app/components/icons/ArrowLeftIcon";
import Link from "next/link";

interface ISideSectionNavItem {
  title: string;
  isInView: boolean;
}

export default function SideSectionNavItem({
  title,
  isInView,
}: ISideSectionNavItem) {
  return (
    <Link
      href={`#${
        title === "UoPeople" ? "University of the People" : title
      }`.toLowerCase()}
    >
      <div className={`sub ${isInView ? "active" : ""}`}>
        <ArrowLeftIcon color={isInView ? "#000000" : "#333333"} />
        <p>{title}</p>
      </div>
    </Link>
  );
}
