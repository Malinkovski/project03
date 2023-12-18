import React from "react";

interface ButtonSubmitProps {
  text: string;
  type: "submit" | "button" | "reset" | undefined;
  onSubmit?: () => void;
  className?: string;
  onClick?: () => void;
}

const ButtonSubmitAccount = ({
  text,
  type,
  onSubmit,
  className,
  onClick
}: ButtonSubmitProps) => {
  return (
    <button
      className={`${className} button button-account-submit`}
      title={text}
      type={type}
      onSubmit={onSubmit}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default ButtonSubmitAccount;
