import { Form, Formik } from "formik";
import React, { useState } from "react";
import { valSchemaRegister } from "../../../utilities/validation-schema";
import FormField from "../../Forms/FormField";
import ButtonSubmitAccount from "../../Buttons/Account/ButtonSubmitAccount";
import CheckboxField from "../../Forms/CheckboxField";
import PrivacyPolicy from "../Misc/PrivacyPolicy";
import PasswordField from "../../Forms/PasswordField";
import { RegisterProps, UserProps } from "../../../properties/account";
//import { registerUser } from "../../../utilities/account/register-user";
import WrongInput from "../Misc/WrongInput";
import { generateRandomId } from "../../../utilities/account/generateRandomId";

interface RegisterStepTwoProps {
  handleSuccessfullRegister: () => void;
}

const initialValues: RegisterProps = {
  name: "",
  surname: "",
  email: "",
  password: "",
  confirmPassword: "",
  id: "",
  biography: "",
  livingAddress: "",
  phoneNumber: "",
  profilePicture: "",
  rememberPassword: false,
  news: false,
};

const RegisterStepTwo = ({
  handleSuccessfullRegister,
}: RegisterStepTwoProps) => {
  const [existingEmail, setExistingEmail] = useState(false);

  const handleExistingEmail = () => {
    setExistingEmail(true);
    setTimeout(() => {
      setExistingEmail(false);
    }, 5000);
  };

  const handleSubmitting = (values: RegisterProps) => {
    sessionStorage.setItem("user", JSON.stringify(values.id));
    handleSuccessfullRegister();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={valSchemaRegister}
        onSubmit={(values, { resetForm }) => {
          values.id = generateRandomId();
          const existingUsers = localStorage.getItem("users");
          let usersParsed = [];
        
          if (existingUsers) {
            usersParsed = JSON.parse(existingUsers);
            const emailExists = usersParsed.some((user:UserProps) => user.token === values.id);
        
            if (emailExists) {
              handleExistingEmail();
            } else {
              usersParsed.push(values);
              localStorage.setItem("users", JSON.stringify(usersParsed));
              handleSubmitting(values);
              resetForm();
            }
          } else {
            localStorage.setItem("users", JSON.stringify([values]));
            handleSubmitting(values);
            resetForm();
          }
        }}
      >
        {(formik) => (
          <Form>
            <div>
              <FormField
                label="Име"
                name="name"
                id="name"
                fieldClassName={`${
                  formik.errors.name && formik.touched.name ? "error-input" : ""
                }`}
              />
              <FormField
                label="Презиме"
                name="surname"
                id="surname"
                fieldClassName={`${
                  formik.errors.surname && formik.touched.surname
                    ? "error-input"
                    : ""
                }`}
              />
              <FormField
                label="Емаил адреса"
                name="email"
                id="email"
                fieldClassName={`${
                  (formik.errors.email && formik.touched.email) || existingEmail
                    ? "error-input"
                    : ""
                }`}
              />
              <PasswordField
                label="Лозинка"
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
              <CheckboxField
                name="news"
                id="news"
                label="Испраќај ми известувања за нови зделки и промоции."
              />
            </div>
            <div className="centered">
              <ButtonSubmitAccount text="Регистрирај се" type="submit" />
              {existingEmail && (
                <WrongInput
                text="Овој маил е веке регистиран на Игралиште."
                />
              )}
            </div>
          </Form>
        )}
      </Formik>
      <PrivacyPolicy />
    </>
  );
};

export default RegisterStepTwo;
