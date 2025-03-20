interface Props {
  text: string;
  posY: string;
}

export default function Info({ text, posY }: Props) {
  return <div className={`info ${posY}`}>{text}</div>;
}
