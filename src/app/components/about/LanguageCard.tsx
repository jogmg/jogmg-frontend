interface ILanguageCard {
  text: string;
  level: string;
}

export default function LanguageCard({ text, level }: ILanguageCard) {
  return (
    <div className="language_card">
      <p className="language_text">{text}</p>
      <div className="progress_bg"></div>
      <div className="progress" style={{ width: level }}></div>
    </div>
  );
}
