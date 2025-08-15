import { normalizeText } from "@app/util/helpers";
import { Ref, TextareaHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";
import Info from "../Info";

interface ITextAreaField extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  error?: FieldError;
  ref?: Ref<HTMLTextAreaElement>;
}

const TextAreaField = ({
  name,
  value,
  onChange,
  onBlur,
  ref,
  error,
}: ITextAreaField) => {
  return (
    <div className="field_container">
      <textarea
        className="textarea_field"
        name={name}
        placeholder={normalizeText(name)}
        title={`Enter your ${name}`}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        ref={ref}
      />
      {error ? (
        <Info text={error.message!} posY={"-bottom-[40px]"} icon={true} />
      ) : null}
    </div>
  );
};

export default TextAreaField;
