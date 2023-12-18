import React, { useState } from "react";

interface CheckboxFieldProps {
  label: string;
  id: string;
  name: string;
  onClick?: (value: boolean) => void;
  handleFillForm?: () => void;
}

const CheckboxField = ({ id, label, onClick, handleFillForm }: CheckboxFieldProps) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    const updatedValue = !clicked;
    setClicked(updatedValue);
    if (onClick) {
      onClick(updatedValue);
    }
  };

  return (
    <div onClick={() => {
      handleClick();
      handleFillForm && handleFillForm();
    }} className={`custom-checkbox-form ${clicked ? 'checked' : ''}`}>
      <span id={id} className="checkbox-input">
        {label}
        {!clicked && (<div className="dot" />)}
      </span>
    </div>
  );
};

export default CheckboxField;
