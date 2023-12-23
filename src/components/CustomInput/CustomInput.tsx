import { ChangeEventHandler, HTMLAttributes } from "react";
import cn from "classnames";

import "./CustomInput.scss";

interface CustomInputProps extends HTMLAttributes<HTMLInputElement> {
  name: string;
  type: string;
  required: boolean;
  value?: string | undefined | number;
  onChangeFunc?: ChangeEventHandler<HTMLInputElement>;
  id: string;
  label?: string;
  error?: string | false | undefined;
  placeholder: string;
}

export const CustomInput: React.FC<CustomInputProps> = ({
  type,
  error = "",
  value,
  onChangeFunc,
  name,
  id,
  label = "",
  required,
  placeholder,
  ...props
}) => {
  return (
    <article className="custom-input">
      <input
        type={type}
        onChange={onChangeFunc}
        name={name}
        id={id}
        value={value}
        className={cn("custom-input__field", {
          "input-error": error,
        })}
        placeholder={placeholder}
        {...props}
        required={required}
      />
      {error && <div className="label-error">{error}</div>}
      {label && !error && !value && (
        <label htmlFor={id} className="custom-input__label">
          {label}
        </label>
      )}
    </article>
  );
};
