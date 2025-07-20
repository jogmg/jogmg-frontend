import ArrowLeftIcon from "@app/components/icons/ArrowLeftIcon";
import Link from "next/link";

interface ISideNavLink {
  title: string;
  isInView: boolean;
}

export default function SideNavLink({ title, isInView }: ISideNavLink) {
  return (
    <Link
      href={`#${
        title === "UoPeople" ? "University of the People" : title
      }`.toLowerCase()}
    >
      <div className={`sideNav_link ${isInView ? "active" : ""}`}>
        <ArrowLeftIcon color={isInView ? "#000000" : "#333333"} />
        <p>{title}</p>
      </div>
    </Link>
  );
}
