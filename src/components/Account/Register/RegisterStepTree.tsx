import { Form, Formik } from "formik";
import React from "react";
import { valSchemaRegisterOptional } from "../../../utilities/validation-schema";
import { UserProps } from "../../../properties/account";
import FormField from "../../Forms/FormField";
import TextareaField from "../../Forms/TextareaField";
import ButtonSubmitAccount from "../../Buttons/Account/ButtonSubmitAccount";
import Link from "next/link";
import ProfilePictureField from "../../Forms/ProfilePicForm";
import { useRouter } from "next/router";
import { getUserSessionId } from "../../../utilities/account/get-user-id-session";

interface OptionalRegisterProps {
  livingAdress: string;
  phoneNumber: string;
  profilePicture: string;
  biography: string;
}

const initialValues: OptionalRegisterProps = {
  livingAdress: "",
  phoneNumber: "",
  profilePicture: "",
  biography: "",
};

const RegisterStepTree = () => {
    const router = useRouter();
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={valSchemaRegisterOptional}
        onSubmit={(values, { resetForm }) => {
          if (values.profilePicture === "") {
            values.profilePicture = "/images/pfph.jpg";
          }
          const userId = getUserSessionId()

          if (userId !== "") {
            const usersData = localStorage.getItem("users");
            if (usersData) {
              const users = JSON.parse(usersData);
              const updatedUsers = users.map((user: UserProps) => {
                if (user.id === userId) {
                  return {
                    ...user,
                    livingAdress: values.livingAdress,
                    phoneNumber: values.phoneNumber,
                    profilePicture: values.profilePicture,
                    biography: values.biography,
                  };
                }
                return user;
              });
              localStorage.setItem("users", JSON.stringify(updatedUsers));
              resetForm();
              router.push("/account/profile");
            }
          }
        }}
      >
        {() => (
          <Form>
            <div>
              <ProfilePictureField id="profilePicture" name="profilePicture" />
            </div>
            <div>
              <FormField
                label="Адреса на живеење"
                id="livingAdress"
                name="livingAdress"
              />
              <FormField
                label="Телефонски број"
                id="phoneNumber"
                name="phoneNumber"
              />
              <TextareaField
                label="Биографија"
                id="biography"
                name="biography"
                fieldClassName={`biograpy-field`}
              />
              <ButtonSubmitAccount text="Заврши" type="submit" />
              <Link href={`/account/profile`}>
                <div className="skip-option">
                Прескокни
                </div>
                </Link>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default RegisterStepTree;
