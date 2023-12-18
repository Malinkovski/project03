import React from "react";
import SparkSvg from "/public/images/icons/sparks.svg";

interface ModalHeaderProps {
  title: string;
  text?: string;
}

const ModalHeader = ({ title, text }: ModalHeaderProps) => {
    return (
        <div className="modal-header">
            <SparkSvg />
        <h4>{title}</h4>
        {text && <p>{text}</p>}
        </div>
    );
};

export default ModalHeader;
