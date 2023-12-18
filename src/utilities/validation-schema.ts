import * as Yup from "yup";

export const validEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/;
export const validPassword =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+,-./]).{8,}$/;

//min 8 characters, 1 upper case, 1 lower case, 1 digit, 1 special char "!@#$%^&*()_+".

const isValidPhoneNumber = (value: string) => {
  if (!value) {
    return false;
  }
  const validPrefix = /^(0{0,1}7[0-9]{7}|7[0-9]{7})$/;
  return validPrefix.test(value);
};

// PURCHASES SHEMA ========================================
export const valSchemaPurchases = Yup.object({
  name: Yup.string()
    .required("жадолжително")
    .test("contains-number", "навалидно име", (value) => {
      return !/\d/.test(value);
    }),
  surname: Yup.string()
    .required("жадолжително")
    .test("contains-number", "невалидно презиме", (value) => {
      return !/\d/.test(value);
    }),
  livingAddress: Yup.string().required("жадолжително"),
  phoneNumber: Yup.string()
    .required("жадолжително")
    .test("is-valid-phone-number", "Невалиден број", isValidPhoneNumber),
  email: Yup.string()
    .matches(validEmail, "Невалидна емаил адреса")
    .required("жадолжително"),
});

export const FooterValidationSchema = Yup.object({
  email: Yup.string()
    .matches(validEmail, "Невалидна емаил адреса")
    .required(""),
});

// REGISTER SHEMA ========================================
export const valSchemaRegister = Yup.object({
  name: Yup.string()
    .required("жадолжително")
    .test("contains-number", "навалидно име", (value) => {
      return !/\d/.test(value);
    }),
  surname: Yup.string()
    .required("жадолжително")
    .test("contains-number", "навалидно презиме", (value) => {
      return !/\d/.test(value);
    }),
  email: Yup.string()
    .matches(validEmail, "невалидна емаил адреса")
    .required("жадолжително"),
  password: Yup.string()
    .min(8, "лозинката мора да содржи минимум 8 карактери")
    .max(20, "лозинката мора да содржи максимум 20 карактери")
    .matches(validPassword, {
      message:
        "лозинката мора да содржи минимум 8 карактери, 1 голема буква, 1 мала буква, 1 цифра и 1 уникатен знак",
    })
    .required("жадолжително"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "лозинките не се совпаѓаат")
    .required("жадолжително"),
});

// REGISTER OPTIONAL SHEMA ========================================
export const valSchemaRegisterOptional = Yup.object({
  biography: Yup.string().max(200, "максимум 200 карактери"),
  phoneNumber: Yup.string(),
  /* .test("is-valid-phone-number", "Невалиден број", isValidPhoneNumber), */
  livingAddress: Yup.string(),
  profilePicture: Yup.string(),
});

// LOGIN SHEMA ========================================

export const valSchemaLogin = Yup.object({
  profilePicture: Yup.string(),
  email: Yup.string(),
});

// PROFILE EDIT SHEMA ========================================

export const valSchemaProfileEdit = Yup.object({
  name: Yup.string(),
  surname: Yup.string(),
  email: Yup.string()
    .matches(validEmail, "невалидна емаил адреса")
    .required("жадолжително"),
  phoneNumber: Yup.string(),
  livingAddress: Yup.string(),
  biography: Yup.string().max(200, "максимум 200 карактери"),
  profilePicture: Yup.string(),
});

// PASSWORD CHANGE SHEMA ========================================

export const valSchemaPasswordChange = Yup.object({
  oldPassword: Yup.string().required("жадолжително"),
  password: Yup.string()
    .min(8, "лозинката мора да содржи минимум 8 карактери")
    .max(20, "лозинката мора да содржи максимум 20 карактери")
    .matches(validPassword, {
      message:
        "лозинката мора да содржи минимум 8 карактери, 1 голема буква, 1 мала буква, 1 цифра и 1 уникатен знак",
    })
    .required("жадолжително"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "лозинките не се совпаѓаат")
    .required("жадолжително"),
});
