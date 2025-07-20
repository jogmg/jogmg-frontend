import { consolas } from "@app/fonts";

interface ITitleCard {
  text: string;
}

export default function TitleCard({ text }: ITitleCard) {
  return <div className={`titleCard ${consolas.className}`}>{text}</div>;
}
