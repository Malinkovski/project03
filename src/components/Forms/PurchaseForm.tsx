import { useState } from "react";
import { Formik, Form } from "formik";
import { valSchemaPurchases } from "../../utilities/validation-schema";
import SuccessfulModal from "../Modals/SuccessfulModal";
import FormField from "./FormField";
import { FormDataProps, PurchaseFormProps } from "../../properties/formprops";
import ModalWrapper from "../Modals/ModalWrapper";

import CheckboxField from "./CheckboxField";
import CheckboxFillForm from "./CheckboxFillForm";
import { UserProps } from "../../properties/account";

const initialValues: FormDataProps = {
  name: "",
  surname: "",
  livingAddress: "",
  phoneNumber: "",
  email: "",
};

const PurchaseForm = ({
  showModalStatus,
  setShowModalStatus,
  clearCart,
}: PurchaseFormProps) => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [fillForm, setFillForm] = useState(false);
  const handleClose = () => setShowModalStatus(false);
  const handleShowSuccessModal = () => setShowSuccessModal(true);
  const handleCloseSuccessModal = () => setShowSuccessModal(false);

  const handleFillForm = () => {
    if (fillForm) {
      let userId = sessionStorage.getItem("user");
      if (userId) {
        userId = userId.replace(/"/g, "");
      } else {
        return;
      }
      const userData = localStorage.getItem("users");
      if (userData) {
        const users = JSON.parse(userData);
        const user = users.find((user: UserProps) => user.id === userId);
        if (user && fillForm) {
          initialValues.name = user.name;
          initialValues.surname = user.surname;
          initialValues.email = user.email;
          initialValues.phoneNumber = user.phoneNumber;
          initialValues.livingAddress = user.livingAdress;
        }
      }
    } else {
      initialValues.name = "";
      initialValues.surname = "";
      initialValues.email = "";
      initialValues.phoneNumber = "";
      initialValues.livingAddress = "";
    }
  };
  return (
    <ModalWrapper
      showModal={showModalStatus}
      handleClose={handleClose}
      title="Ве молиме внесете ги потребните информации"
      classWrapper="formic-purchase-form"
    >
      <CheckboxFillForm
        name="fillFrom"
        id="fillForm"
        label="вметни ги информациите од мојот профил"
        onClick={setFillForm}
        handleFillForm={handleFillForm}
      />
      <Formik
        initialValues={initialValues}
        validationSchema={valSchemaPurchases}
        onSubmit={(values, { resetForm }) => {
          handleShowSuccessModal();
          clearCart();
          resetForm();
        }}
      >
        {(formik) => (
          <Form>
            <FormField
              required
              label="Име"
              name="name"
              id="name"
              fieldClassName={`${
                formik.errors.name && formik.touched.name ? "error-input" : ""
              }`}
            />

            <FormField
              required
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
              required
              label="Адреса на живеење"
              name="livingAddress"
              id="livingAddress"
              fieldClassName={`${
                formik.errors.livingAddress && formik.touched.livingAddress
                  ? "error-input"
                  : ""
              }`}
            />

            <FormField
              required
              label="Телефонски број"
              name="phoneNumber"
              id="phoneNumber"
              fieldClassName={`${
                formik.errors.phoneNumber && formik.touched.phoneNumber
                  ? "error-input"
                  : ""
              }`}
            />

            <FormField
              required
              label="Емаил адреса"
              name="email"
              id="email"
              fieldClassName={`${
                formik.errors.email && formik.touched.email ? "error-input" : ""
              }`}
            />

            <CheckboxField
              name="news"
              id="news"
              label="сакам да добивам новости за идни попусти, нови колекции и промоции на мојата емаил адреса."
            />

            <div className="form-buttons">
              <button className="button button-gold" type="submit">
                Нарачај
              </button>
              <div className="cancel-button" onClick={handleClose}>
                Oткажи
              </div>
            </div>
          </Form>
        )}
      </Formik>

      {showSuccessModal && (
        <SuccessfulModal
          title="Вашата нарачка е успешна!"
          text="Очекувајте потврда за вашата нарачка на вашата емаил адреса. Keep on shining *"
          linkTo="/"
          handleCloseModal={handleCloseSuccessModal}
          handleCloseParentModal={handleClose}
        />
      )}
    </ModalWrapper>
  );
};

export default PurchaseForm;
