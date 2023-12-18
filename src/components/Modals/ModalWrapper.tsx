import React from "react";
import ModalTitle from "./ModalTitle";
import CloseSvg from "/public/images/icons/close-x.svg";

interface CustomModalProps {
  showModal: boolean;
  handleClose: () => void;
  title: string;
  children: React.ReactNode;
  classWrapper: string;
}

const ModalWrapper = ({
  showModal,
  handleClose,
  title,
  children,
  classWrapper,
}: CustomModalProps) => {
  return (
    <div className={`custom-modal modal-animation ${showModal ? "show-modal" : "hide-modal"}`}>
      <div className="inner-modal-container purchase-modal">
      <div className="close-modal-button"><CloseSvg onClick={handleClose}/></div>

          <ModalTitle title={title} />

        <div className={`modal-body ${classWrapper}`}>{children}</div>
      </div>
    </div>
  );
};

export default ModalWrapper;

/* 
  return (
    <Modal className="modal-container" show={showModal} onHide={handleClose} >
      <div className="inner-modal-container">
      <Modal.Header className="modal-header">

      
        <ModalTitle title={title} />
      </Modal.Header>
      <Modal.Body className={`${classWrapper}`}>
        {children}
      </Modal.Body>
      </div>
    </Modal>
  );

*/