interface IInfo {
  text: string;
  posY: string;
}

export default function Info({ text, posY }: IInfo) {
  return <div className={`info ${posY}`}>{text}</div>;
}
