import React, { useState } from "react";
import ModalTitle from "../ModalTitle";

interface PassResetReqModalProps {
  handleCloseModal: () => void;
}

const PassResetReqModal = ({ handleCloseModal }: PassResetReqModalProps) => {
  const [email, setEmail] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <div className="message-container-modal modal-animation show-modal">
      <div className="password-reset-modal  message-modal success-modal">
        <ModalTitle title="Побарај промена за лозинка" text="внеси е-маил:" />

        <input
          title="email_reset"
          name="email_reset"
          id="email_reset"
          value={email}
          onChange={handleChange}
        />
        <button
          type="button"
          onClick={() => {
            // TODO: sending mail with link to reset password?
            localStorage.setItem("email-to-reset", email);
            setEmail("");
            handleCloseModal();
          }}
          className="button button-account-submit"
        >
          <span>Испрати</span>
        </button>
        <button className="cancel-button" onClick={handleCloseModal}>
          <span>Откажи</span>
        </button>
      </div>
    </div>
  );
};

export default PassResetReqModal;
