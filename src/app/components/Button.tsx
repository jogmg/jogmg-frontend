import { lexend } from "../fonts";

interface Props {
  text: string;
  type: "main" | "alt";
}

export default function Button({ text, type }: Props) {
  return (
    <>
      {type === "main" && (
        <button type="button" className={`main-btn ${lexend.className}`}>
          {text}
        </button>
      )}
      {type === "alt" && (
        <button type="button" className={`alt-btn ${lexend.className}`}>
          {text}
        </button>
      )}
    </>
  );
}
