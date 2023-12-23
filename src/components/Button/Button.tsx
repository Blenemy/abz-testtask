import { HTMLAttributes } from "react";
import "./Button.scss";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  type: "submit" | "reset" | "button";
  classname?: string;
  disabled?: boolean;
  text: string;
}

export const Button: React.FC<ButtonProps> = ({
  type,
  text,
  disabled = false,
  classname = "",
  ...props
}) => {
  return (
    <button
      type={type}
      className={`button ${classname}`}
      {...props}
      disabled={disabled}
    >
      {text}
    </button>
  );
};
