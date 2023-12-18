import { Form, Formik } from "formik";
import React, { useState } from "react";
import PasswordField from "../../Forms/PasswordField";
import ButtonSubmitAccount from "../../Buttons/Account/ButtonSubmitAccount";
import { valSchemaPasswordChange } from "../../../utilities/validation-schema";
import { UserProps } from "../../../properties/account";
import { getUserSessionId } from "../../../utilities/account/get-user-id-session";
import WrongInput from "../../Account/Misc/WrongInput";

interface PasswordChangeProps {
  oldPassword: string;
  password: string;
  confirmPassword: string;
}

const initialValues: PasswordChangeProps = {
  oldPassword: "",
  password: "",
  confirmPassword: "",
};

interface PasswordChangeModalProps {
  handleModal: () => void;
  oldPassword: string;
}

const handleChangePasswordModal = ({
  handleModal,
  oldPassword,
}: PasswordChangeModalProps) => {
  const [wrongOldPassword, setwrongOldPassword] = useState(false);

  const handleWrongOldPassword = () => {
    setwrongOldPassword(true);
    setTimeout(() => {
      setwrongOldPassword(false);
    }, 5000);
  };

  return (
    <div className="message-container-modal  modal-animation show-modal">
      <div className="change-password-modal password-reset-modal password-modal message-modal success-modal">
        <Formik
          initialValues={initialValues}
          validationSchema={valSchemaPasswordChange}
          onSubmit={(values, { resetForm }) => {
            if (values.oldPassword === oldPassword) {
                const userId = getUserSessionId()

                if (userId !== "") {
                  const usersData = localStorage.getItem("users");
                  if (usersData) {
                    const users = JSON.parse(usersData);
      
                    const updatedUsers = users.map((user: UserProps) => {
                      if (user.id === userId) {
                        return {
                          ...user,
                            password: values.password,
                            confirmPassword: values.confirmPassword,
                        };
                      }
                      return user;
                    });
                     localStorage.setItem("users", JSON.stringify(updatedUsers));
                    resetForm();
                    handleModal();
                  }
                }
                } else {
                  handleWrongOldPassword();
                }
              }
            }
          
        >
          {(formik) => (
            <div className="change-password-form">
              <Form>
                <PasswordField
                  label="Стара лозинка"
                  name="oldPassword"
                  id="oldPassword"
                  fieldClassName={`${
                    (formik.errors.oldPassword && formik.touched.oldPassword) ||
                    wrongOldPassword
                      ? "error-input"
                      : ""
                  }`}
                />
                {wrongOldPassword && (
                  <WrongInput 
                  text="Внесовте погрешна лозинка."
                  />
                )}
                <PasswordField
                  label="Нова лозинка"
                  name="password"
                  id="password"
                  fieldClassName={`${
                    formik.errors.password && formik.touched.password
                      ? "error-input"
                      : ""
                  }`}
                />
                <PasswordField
                  label="Потврди лозинка"
                  name="confirmPassword"
                  id="confirmPassword"
                  fieldClassName={`${
                    formik.errors.confirmPassword &&
                    formik.touched.confirmPassword
                      ? "error-input"
                      : ""
                  }`}
                />
                <ButtonSubmitAccount
                  text="Зачувај"
                  type="submit"
                  className="change-password-submit"
                />

                <div className="cancel-button" onClick={handleModal}>
                  <span>Откажи</span>
                </div>
              </Form>
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default handleChangePasswordModal;
