interface Props {
  name: string;
  type?: string;
  placeholder: string;
}

export default function InputField({
  name,
  placeholder,
  type = "text",
}: Props) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className="input-field"
    />
  );
}
