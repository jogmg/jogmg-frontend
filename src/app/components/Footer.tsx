import { format } from "date-fns";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const lastUpdated = new Date("2026-04-24");

  return (
    <footer>
      <p className="copyright">&copy; {currentYear} JoGMG 💚</p>
      <p className="last_updated">Last updated: {format(lastUpdated, "P")}</p>
    </footer>
  );
}
