import React from "react";

interface ButtonSubmitProps {
  text: string;
  type: "submit" | "button" | "reset" | undefined;
  onSubmit?: () => void;
  className?: string;
  svgIcon?: React.ReactNode;
  onClick?: () => void;
}

const ButtonSubmitAccount = ({
  text,
  type,
  onSubmit,
  className,
  svgIcon,
  onClick,
}: ButtonSubmitProps) => {
  return (
    <button
      className={`${className} button button-alt-register`}
      title={text}
      type={type}
      onSubmit={onSubmit}
      onClick={onClick}
    >
      {svgIcon && <span className="svg-wrapper">{svgIcon}</span>}
      {text}
    </button>
  );
};

export default ButtonSubmitAccount;
