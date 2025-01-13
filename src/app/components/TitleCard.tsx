import { consolas } from "../fonts";

interface Props {
  text: string;
}

export default function TitleCard({ text }: Props) {
  return <div className={`title-card ${consolas.className}`}>{text}</div>;
}
