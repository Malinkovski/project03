import React from "react";

interface ButtonChangePassProps {
  handleChangePasswordModal: () => void;
}

const ButtonChangePass = ({
  handleChangePasswordModal,
}: ButtonChangePassProps) => {
  return (
    <div className="change-password-form">
      <button
        type="button"
        onClick={handleChangePasswordModal}
        className=" change-password-button"
        title="change password"
      >
        Промени лозинка
      </button>
    </div>
  );
};

export default ButtonChangePass;
