import React from "react";

interface ButtonPassResProps {
    handleShow: () => void;
    title: string;
}

const ButtonPasswordReset = ({title,handleShow}:ButtonPassResProps) => {
  return (
    <div
      onClick={handleShow}
      className=" button-small-account forgot-password"
    >
      <span>{title}</span>
    </div>
  );
};

export default ButtonPasswordReset;
