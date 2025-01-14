import { lexend } from "../fonts";

interface Props {
  text: string;
  type: "main" | "alt";
  id?: string;
  action?: () => void;
}

export default function Button({ text, type, id, action }: Props) {
  return (
    <>
      {type === "main" && (
        <button
          type="button"
          className={`main-btn ${lexend.className}`}
          id={id}
        >
          {text}
        </button>
      )}
      {type === "alt" && (
        <button type="button" className={`alt-btn ${lexend.className}`} onClick={action}>
          {text}
        </button>
      )}
    </>
  );
}
