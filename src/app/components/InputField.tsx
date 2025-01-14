interface Props {
  name: string;
  placeholder: string;
}

export default function InputField({ name, placeholder }: Props) {
  return (
    <input
      type="text"
      name={name}
      placeholder={placeholder}
      className="input-field"
    />
  );
}
