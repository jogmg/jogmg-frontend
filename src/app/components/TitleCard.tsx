import { consolas } from "../fonts";

interface ITitleCard {
  text: string;
}

export default function TitleCard({ text }: ITitleCard) {
  return <div className={`title-card ${consolas.className}`}>{text}</div>;
}
