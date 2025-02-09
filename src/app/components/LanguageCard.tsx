interface Props {
  text: string;
  level: string;
}

export default function LanguageCard({ text, level }: Props) {
  return (
    <div className="language">
      <p className="text">{text}</p>
      <div className="progress-bg"></div>
      <div className="progress" style={{ width: level }}></div>
    </div>
  );
}
