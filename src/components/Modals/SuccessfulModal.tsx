import React from "react";
import ModalTitle from "./ModalTitle";
import Link from "next/link";

interface SuccessfulModalProps {
  handleCloseParentModal?: () => void;
  handleCloseModal: () => void;
  title: string;
  text?: string;
  linkTo: string;
}

const SuccessfulModal = ({
  handleCloseParentModal,
  handleCloseModal,
  title,
  text,
  linkTo,
}: SuccessfulModalProps) => {
  return (
    <div className="message-container-modal modal-animation show-modal">
      <div className="message-modal success-modal">
        <ModalTitle title={title} text={text} />
        <button
          onClick={() => {
            handleCloseParentModal && handleCloseParentModal(),
              handleCloseModal();
          }}
          className="button button-gold"
        >
          <span>Продолжи</span>
        </button>
        <button className="cancel-button" onClick={handleCloseParentModal}>
          <Link href={linkTo}>Кон почетна</Link>
        </button>
      </div>
    </div>
  );
};

export default SuccessfulModal;
