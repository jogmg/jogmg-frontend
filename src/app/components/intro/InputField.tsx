interface IInputField {
  name: string;
  type?: string;
  value?: string;
  action?: (type: string, value: string) => void;
  required?: boolean;
}

export default function InputField({
  name,
  type = "text",
  value,
  action,
  required = true,
}: IInputField) {
  return (
    <input
      className="input_field"
      type={type}
      name={name}
      placeholder={name[0].toUpperCase() + name.slice(1)}
      title={`Enter your ${name}`}
      value={value}
      onChange={(e) => action && action(name, e.target.value)}
      required={required}
    />
  );
}
