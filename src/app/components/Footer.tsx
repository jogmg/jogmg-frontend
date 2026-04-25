import { format } from "date-fns";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const lastUpdated = new Date("2026-04-25"); // !!! update every time a change is made to the project

  return (
    <footer>
      <p className="copyright">&copy; {currentYear} JoGMG 💚</p>
      <p className="last_updated">Last updated: {format(lastUpdated, "P")}</p>
    </footer>
  );
}
