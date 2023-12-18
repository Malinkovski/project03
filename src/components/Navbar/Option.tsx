import Link from "next/link";
import React from "react";
import { useNavigationContext } from "../../context/NavigationContext";

interface OptionProps {
  link: string;
  text: string;
  style?: string;
  closeDropdown?: () => void;
}

const Option = ({ link, text, style, closeDropdown }: OptionProps) => {
  const { setCloseNavbar, setShowPurchaseModal } = useNavigationContext();

  const handleClick = () => {
    if (closeDropdown) {
      closeDropdown();
    }
    setCloseNavbar(true);
    setShowPurchaseModal(false);
  };

  return (
    <div className="option">
      <Link href={`${link}`}>
        <div  className={`${style}`}  onClick={handleClick}>
          {text}
        </div>
      </Link>
    </div>
  );
};

export default Option;
