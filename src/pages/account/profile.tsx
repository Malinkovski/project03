import Head from "next/head";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import useRedirect from "../../customhooks/accounthooks/useRedirect";
import AccountWrapper from "../../components/Account/AccountWrapper";
import { NextPage } from "next";
import { Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { valSchemaProfileEdit } from "../../utilities/validation-schema";
import { getUserSessionId } from "../../utilities/account/get-user-id-session";
import { UserProps } from "../../properties/account";
import ProfilePictureField from "../../components/Forms/ProfilePicForm";
import FormField from "../../components/Forms/FormField";
import TextareaField from "../../components/Forms/TextareaField";
import ButtonSubmitAccount from "../../components/Buttons/Account/ButtonSubmitAccount";
import ChangePasswordModal from "../../components/Modals/Account/ChangePasswordModal";
import ButtonChangePass from "../../components/Buttons/Account/ButtonChangePass";
import CheckboxField from "../../components/Forms/CheckboxField";
import PasswordField from "../../components/Forms/PasswordField";
import WrongInput from "../../components/Account/Misc/WrongInput";

interface ProfileProps {
  profilePicture: string;
  name: string;
  surname: string;
  email: string;
  livingAdress: string;
  phoneNumber: string;
  biography: string;
  news: boolean;
  password: string;
}

const initialValues: ProfileProps = {
  profilePicture: "",
  password: "",
  name: "",
  surname: "",
  email: "",
  livingAdress: "",
  phoneNumber: "",
  biography: "",
  news: false,
};

const ProfilePage: NextPage = () => {
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [wrongPassword, setWrongPassword] = useState(false);
  const [existingEmail, setExistingEmail] = useState(false);
  const [password, setPassword] = useState("");
  const [currentEmail, setCurrentEmail] = useState("");

  useEffect(() => {
    const userId = getUserSessionId();
    const userData = localStorage.getItem("users");
    if (userData) {
      const users = JSON.parse(userData);
      const user = users.find((user: UserProps) => user.id === userId);
      if (user) {
        initialValues.profilePicture = user.profilePicture;
        initialValues.name = user.name;
        initialValues.surname = user.surname;
        initialValues.email = user.email;
        initialValues.livingAdress = user.livingAdress;
        initialValues.phoneNumber = user.phoneNumber;
        initialValues.biography = user.biography;
        initialValues.news = user.news;
        setPassword(user.password);
        setCurrentEmail(user.email);
      }
    }
  }, []);

  useRedirect();

  const router = useRouter();

  const handleLogout = () => {
    Cookies.remove("loggedInUser");
    sessionStorage.removeItem("user");
    router.replace("/account/login");
  };

  const handleGoBack = () => {
    router.replace("/");
  }

  const handleChangePasswordModal = () => {
    setShowPasswordModal(!showPasswordModal);
  };

  const handleWrongPassword = () => {
    setWrongPassword(true);
    setTimeout(() => {
      setWrongPassword(false);
    }, 5000);
  };
  const handleExistingEmail = () => {
    setExistingEmail(true);
    setTimeout(() => {
      setExistingEmail(false);
    }, 5000);
  };

  return (
    <>
      <Head>
        <title>{`Игралиште - Profile`}</title>
        <meta name="profile page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AccountWrapper>
        <Formik
          initialValues={initialValues}
          validationSchema={valSchemaProfileEdit}
          onSubmit={(values, { resetForm }) => {
            
            const usersData = localStorage.getItem("users");
            if (usersData) {
              const users = JSON.parse(usersData);
            
              const emailExists = users.some((user:UserProps) => user.email === values.email);
          
              if (emailExists && values.email !== currentEmail) {
                  handleExistingEmail();
              } else if (values.password === password) {
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
                            profilePicture: values.profilePicture,
                            name: values.name,
                            surname: values.surname,
                            email: values.email,
                            livingAdress: values.livingAdress,
                            phoneNumber: values.phoneNumber,
                            biography: values.biography,
                            news: values.news,
                        };
                      }
                      return user;
                    });
                  localStorage.setItem("users", JSON.stringify(updatedUsers));
                    resetForm(); 
                    router.replace("/");
                  }
                }

              } else {
                if (values.password !== password) {
                  handleWrongPassword();
                }
                
              }
            }
          }}
        >
          {(formik) => (
            <Form>
              <ProfilePictureField id="profilePicture" name="profilePicture" />

              <FormField label="Име" name="name" id="name" />

              <FormField label="Презиме" name="surname" id="surname" />

              <FormField
                label="Емаил адреса"
                name="email"
                id="email"
                fieldClassName={`${
                  (formik.errors.password && formik.touched.password) ||
                  existingEmail
                    ? "error-input"
                    : ""
                }`}
              />
              {existingEmail && <WrongInput text="Емаилот е зафатен." />}

              <PasswordField
                label="Лозинка"
                name="password"
                id="password"
                fieldClassName={`${
                  (formik.errors.password && formik.touched.password) ||
                  wrongPassword
                    ? "error-input"
                    : ""
                }`}
              />
              {wrongPassword && (
                <WrongInput text="Внесовте погрешна лозинка." />
              )}

              <ButtonChangePass
                handleChangePasswordModal={handleChangePasswordModal}
              />
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
              <CheckboxField
                label="Испраќај ми известувања за нови зделки и промоции."
                id="news"
                name="news"
              />
              <ButtonSubmitAccount text="Зачувај" type="submit" />
            </Form>
          )}
        </Formik>

        <div className="buttons-50w">
        <ButtonSubmitAccount
          onClick={handleGoBack}
          text="кон почетна"
          type="button"
          className="log-out-button"
        />

        <ButtonSubmitAccount
          onClick={handleLogout}
          text="Одјави се"
          type="button"
          className="log-out-button"
          />
          </div>
        {showPasswordModal && (
          <ChangePasswordModal
          handleModal={handleChangePasswordModal}
          oldPassword={password}
          />
          )}
      </AccountWrapper>
    </>
  );
};

export default ProfilePage;
