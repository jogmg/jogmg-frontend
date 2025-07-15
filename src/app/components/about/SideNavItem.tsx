import ArrowLeftIcon from "@app/components/icons/ArrowLeftIcon";
import Link from "next/link";

interface ISideNavItem {
  title: string;
  isInView: boolean;
}

export default function SideNavItem({ title, isInView }: ISideNavItem) {
  return (
    <Link
      href={`#${
        title === "UoPeople" ? "University of the People" : title
      }`.toLowerCase()}
    >
      <div className={`sub_nav ${isInView ? "active" : ""}`}>
        <ArrowLeftIcon color={isInView ? "#000000" : "#333333"} />
        <p>{title}</p>
      </div>
    </Link>
  );
}
