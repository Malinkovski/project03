import Link from "next/link";
import React from "react";

interface WarningModalProps {
  message: string;
  link: string;
  linkName: string;
}

const WarningModal = ({ message, link, linkName }: WarningModalProps) => {
  return (
    <div className="message-container-modal modal-animation show-modal">
      <div className="message-modal">
        <h3>{message}</h3>
        <Link href={link}>
          <span className="button-go-to">
            <span>{linkName}</span>
            <i className="fas fa-arrow-right"></i>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default WarningModal;
