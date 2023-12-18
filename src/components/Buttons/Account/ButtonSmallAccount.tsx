import Link from "next/link";
import React from "react";

interface ButtonSmallAccountProps {
  linkText?: string;
  text?: string;
  link?: string;
  className?: string;
  onClick?: () => void;
}

const ButtonSmallAccount = ({
  text,
  link,
  className,
  linkText,
}: ButtonSmallAccountProps) => {
  return (
    <div className={`${className} centered button-small-account`}>
        {text && `${text}`}
      <Link href={`/account${link}`}>
        <span className="button-small-account forgot-password">{linkText}</span>
      </Link>
    </div>
  );
};
export default ButtonSmallAccount;
